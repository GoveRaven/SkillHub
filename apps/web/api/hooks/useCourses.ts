import { useQuery } from '@tanstack/react-query';
import { fetchCourse, fetchCourses } from '../utils/courses';
import { DEFAULT_FILTER } from '@/consts/filters';
import { TFilters } from '@/types/filters';

export function useCourses(filters: TFilters = DEFAULT_FILTER) {
  //TODO: выводить error с помощью Sentry
  const {
    data: courses,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['courses', filters],
    queryFn: () => fetchCourses(filters),
  });
  return { courses, isPending, isError, error };
}

export function useCourse(documentId: string) {
  const {
    data: course,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['course', documentId],
    queryFn: () => fetchCourse(documentId),
  });
  return { course, isPending, isError, error };
}
