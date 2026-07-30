import { BASE_URL, ENDPOINT, POPULATE_ALL } from '../config';
import { Transport } from '../transport/transport';

export class ArticleService {
  private transport = new Transport();

  getArticles() {
    return this.transport.get(`${BASE_URL}${ENDPOINT.ARTICLE}`);
  }

  getArticleById(documentId: string) {
    return this.transport.get(
      `${BASE_URL}${ENDPOINT.ARTICLE}/${documentId}?${POPULATE_ALL}`,
    );
  }
}
