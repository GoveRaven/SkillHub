import { TApiFilters, TFilters } from '@/types/filters';
import { Transport } from '../transport/transport';
import { mapFiltersToApi } from '../utils/mapper';

export class CourseService {
  private transport = new Transport('/courses');

  getCourses(filters: TFilters) {
    const mappedFilters = mapFiltersToApi(filters);
    const query = this.getQueryWithFilters(mappedFilters);
    return this.transport.get(query);
  }

  getCourseById(documentId: string) {
    return this.transport.get(`/${documentId}?populate=*`);
  }

  private getQueryWithFilters(filters: TApiFilters) {
    const searchParams = new URLSearchParams();

    for (const [key, value] of Object.entries(filters)) {
      if (value && value !== 'Все') {
        searchParams.append(`filters[${key}][$eq]`, value);
      }
    }

    const query = searchParams.toString();

    return query ? `?${query}` : '';
  }
}
