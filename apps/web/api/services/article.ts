import { BASE_URL, ENDPOINT, POPULATE_ALL } from '../config';
import { Transport } from '../transport/transport';

export class ArticleService {
  transport = new Transport();

  getArticles() {
    const response = this.transport.get(`${BASE_URL}${ENDPOINT.ARTICLE}`);
    return response;
  }

  getArticleById(documentId: string) {
    return this.transport.get(
      `${BASE_URL}${ENDPOINT.ARTICLE}/${documentId}?${POPULATE_ALL}`,
    );
  }
}
