import { BASE_URL, ENDPOINT, POPULATE_ALL } from '../config';

type TParams = {
  filters: TFilters;
};

type TFilters = {
  level: string;
  category: string;
};

const defaultFilter: TFilters = {
  level: '',
  category: '',
};

export async function fetchCourses(
  { filters }: TParams = { filters: defaultFilter },
) {
  const url = filterCourses(filters);
  const { data } = await fetch(url).then((res) => res.json());
  return data;
}

export async function fetchCourse(documentId: string) {
  const { data } = await fetch(
    `${BASE_URL}${ENDPOINT.COURSE}/${documentId}?${POPULATE_ALL}`,
  ).then((res) => res.json());
  return data;
}

function filterCourses(filters: TFilters) {
  const url = new URL(`${BASE_URL}${ENDPOINT.COURSE}`);
  for (const [key, value] of Object.entries(filters)) {
    if (value && value !== 'Все') {
      url.searchParams.append(`filters[${key}][$eq]`, value);
    }
  }
  return url.toString();
}
