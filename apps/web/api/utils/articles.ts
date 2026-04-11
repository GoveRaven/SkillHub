import { BASE_URL, ENDPOINT, POPULATE_ALL } from '../config';

export async function fetchArticles() {
  const { data } = await fetch(`${BASE_URL}${ENDPOINT.ARTICLE}`).then((res) =>
    res.json(),
  );
  return data;
}

export async function fetchArticle(documentId: string) {
  const { data } = await fetch(
    `${BASE_URL}${ENDPOINT.ARTICLE}/${documentId}?${POPULATE_ALL}`,
  ).then((res) => res.json());
  return data;
}
