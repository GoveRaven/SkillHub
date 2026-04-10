import { BASE_URL, ENDPOINT, POPULATE_ALL } from '../config';

export async function fetchCourses() {
  const { data } = await fetch(
    `${BASE_URL}${ENDPOINT.COURSE}${POPULATE_ALL}`,
  ).then((res) => res.json());
  return data;
}

export async function fetchCourse(documentId: string) {
  const { data } = await fetch(
    `${BASE_URL}${ENDPOINT.COURSE}/${documentId}${POPULATE_ALL}`,
  ).then((res) => res.json());
  return data;
}
