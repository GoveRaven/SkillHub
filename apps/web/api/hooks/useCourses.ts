import { useQuery } from '@tanstack/react-query';
import { DEFAULT_FILTER } from '@/consts/filters';
import { TFilters } from '@/types/filters';
import { CourseService } from '../services/course';

const courseService = new CourseService();

export function useCourses(filters: TFilters = DEFAULT_FILTER) {
  //TODO: выводить error с помощью Sentry
  const {
    data: courses,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['courses', filters],
    queryFn: () => courseService.getCourses(filters),
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
    queryFn: () => courseService.getCourseById(documentId),
  });
  return { course, isPending, isError, error };
}
