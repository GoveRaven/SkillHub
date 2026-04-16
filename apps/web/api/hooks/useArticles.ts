import { useQuery } from '@tanstack/react-query';
import { fetchArticle, fetchArticles } from '../utils/articles';

export function useArticles() {
  const {
    data: articles,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['articles'],
    queryFn: () => fetchArticles(),
  });
  return { articles, isPending, isError };
}

export function useArticle(documentId: string) {
  const {
    data: article,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['article', documentId],
    queryFn: () => fetchArticle(String(documentId)),
  });
  return { article, isPending, isError };
}
