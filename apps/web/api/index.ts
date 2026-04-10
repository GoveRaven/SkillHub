export default async function getCourses() {
  const data = await fetch('http://localhost:1337/api/courses?populate=*');
  return data.json()
}
