import { BASE_URL, ENDPOINT, POPULATE_ALL } from '../config';

export async function fetchArticles() {
  const res = await fetch(`${BASE_URL}${ENDPOINT.ARTICLE}`);
  if (!res.ok) {
    throw new Error(`Error: Failed to fetch articles`);
  }
  const { data } = await res.json();
  return data;
}

export async function fetchArticle(documentId: string) {
  const res = await fetch(
    `${BASE_URL}${ENDPOINT.ARTICLE}/${documentId}?${POPULATE_ALL}`,
  );
  if (!res.ok) {
    throw new Error(
      `Error: Failed to fetch article. Artile's ID: ${documentId}`,
    );
  }
  const { data } = await res.json();
  return data;
}
