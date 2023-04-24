import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import PopularCourses from '@/components/Popular Courses/PopularCourses'
import Head from 'next/head'
import FourSteps from '@/components/Aditionals/FourStep'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
       <Head>
        <title>Course House - Explore top rated Courses!</title>
      </Head>
      <Header/>
      <PopularCourses/>
      <FourSteps/>
    </div>
  )
}
