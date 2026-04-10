import Course from './course';
import getCourses from '@/api';

export default async function CourseCard() {
  const { data } = await getCourses();
  return <Course content={data[0]} />;
}
