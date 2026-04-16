import { BASE_URL, ENDPOINT, POPULATE_ALL } from '../config';

export async function fetchArticles() {
  const res = await fetch(`${BASE_URL}${ENDPOINT.ARTICLE}`);
  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }
  const { data } = await res.json();
  return data;
}

export async function fetchArticle(documentId: string) {
  const res = await fetch(
    `${BASE_URL}${ENDPOINT.ARTICLE}/${documentId}?${POPULATE_ALL}`,
  );
  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }
  const { data } = await res.json();
  return data;
}
