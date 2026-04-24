import { TFilters } from '@/types/filters';
import { BASE_URL, ENDPOINT, POPULATE_ALL } from '../config';

export async function fetchCourses(filters: TFilters) {
  const url = getUrlWithFilters(filters);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }
  const { data } = await res.json();
  return data;
}

export async function fetchCourse(documentId: string) {
  const res = await fetch(
    `${BASE_URL}${ENDPOINT.COURSE}/${documentId}?${POPULATE_ALL}`,
  );
  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }
  const { data } = await res.json();
  return data;
}

function getUrlWithFilters(filters: TFilters) {
  const url = new URL(`${BASE_URL}${ENDPOINT.COURSE}`);
  for (const [key, value] of Object.entries(filters)) {
    if (value && value !== 'Все') {
      url.searchParams.append(`filters[${key}][$eq]`, value);
    }
  }
  return url.toString();
}
