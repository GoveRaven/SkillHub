import { Transport } from '../transport/transport';

export class ArticleService {
  private transport = new Transport('/articles');

  getArticles() {
    return this.transport.get();
  }

  getArticleById(documentId: string) {
    return this.transport.get(`/${documentId}?populate=*`);
  }
}
