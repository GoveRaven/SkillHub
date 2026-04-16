import { useQuery } from '@tanstack/react-query';
import { fetchCourse, fetchCourses, TFilters } from '../utils/courses';
import { defaultFilter } from '@/consts/filters';

export function useCourses(filters: TFilters = defaultFilter) {
  const {
    data: courses,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['courses', filters],
    queryFn: () => fetchCourses(filters),
  });
  console.log(courses)
  return { courses, isPending, isError };
}

export function useCourse(documentId: string) {
  const {
    data: course,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['course', documentId],
    queryFn: () => fetchCourse(documentId),
  });
  return { course, isPending, isError };
}
