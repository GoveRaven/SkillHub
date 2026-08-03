import { useQuery } from '@tanstack/react-query';
import { ArticleService } from '../services/article';

const articleService = new ArticleService();

export function useArticles() {
  //TODO: выводить error с помощью Sentry
  const {
    data: articles,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['articles'],
    queryFn: () => articleService.getArticles(),
  });
  return { articles, isPending, isError, error };
}

export function useArticle(documentId: string) {
  const {
    data: article,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['article', documentId],
    queryFn: () => articleService.getArticleById(documentId),
  });
  return { article, isPending, isError, error };
}
