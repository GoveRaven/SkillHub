import { TApiFilters, TFilters } from '@/types/filters';
import { BASE_URL, ENDPOINT, POPULATE_ALL } from '../config';
import { Transport } from '../transport/transport';
import { mapFiltersToApi } from '../utils/mapper';

export class CourseService {
  private transport = new Transport();

  getCourses(filters: TFilters) {
    const mappedFilters = mapFiltersToApi(filters);
    const url = this.getUrlWithFilters(mappedFilters);
    return this.transport.get(url);
  }

  getCourseById(documentId: string) {
    return this.transport.get(
      `${BASE_URL}${ENDPOINT.COURSE}/${documentId}?${POPULATE_ALL}`,
    );
  }

  private getUrlWithFilters(filters: TApiFilters) {
    const url = new URL(`${BASE_URL}${ENDPOINT.COURSE}`);
    for (const [key, value] of Object.entries(filters)) {
      if (value && value !== 'Все') {
        url.searchParams.append(`filters[${key}][$eq]`, value);
      }
    }
    return url.toString();
  }
}
