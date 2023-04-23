import { fetcher } from '@/utils/api'
import useSWR from 'swr'
import Loader from '../Shared/Loader'
import CourseCard from '../Shared/CourseCard';

function SimilarCourses({id}) {
    const { data, error, isLoading } = useSWR(`/api/categories/${id}?populate=*`, fetcher)
    if (error) return <div>failed to load</div>
    if (isLoading) return <Loader/>
    let courses = data?.data?.attributes?.courses?.data
    return (
        <div className="grid grid-cols-1 p-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 2xl:grid-cols-4 gap-6 justify-center w-full">
          {courses?.map((val, i) => (
          <CourseCard key={i} data={val} />
        ))}
            
        </div>
    )
}

export default SimilarCourses
