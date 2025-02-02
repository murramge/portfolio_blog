'use strict'
'use client'

import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
// @ts-ignore
import type { Blog, Authors } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { listData } from '@/data/listData'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const editUrl = (path) => `${siteMetadata.siteRepo}/blob/main/data/${path}`
const discussUrl = (path) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/${path}`)}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

const images = [
  'https://github-production-user-asset-6210df.s3.amazonaws.com/60298173/408881815-3b1626fa-417e-4765-b7c3-37013e8ed545.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250202%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250202T172614Z&X-Amz-Expires=300&X-Amz-Signature=183ff1fe334e4ef87dc40f4d2fb52efddee50e523054213979568977c0c9ee81&X-Amz-SignedHeaders=host',
  'https://github-production-user-asset-6210df.s3.amazonaws.com/60298173/408881815-3b1626fa-417e-4765-b7c3-37013e8ed545.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250202%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250202T172614Z&X-Amz-Expires=300&X-Amz-Signature=183ff1fe334e4ef87dc40f4d2fb52efddee50e523054213979568977c0c9ee81&X-Amz-SignedHeaders=host',
  'https://github-production-user-asset-6210df.s3.amazonaws.com/60298173/408876109-f3d0075f-fd04-49f7-8de7-5506b6db441f.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250202%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250202T172818Z&X-Amz-Expires=300&X-Amz-Signature=5c528039b3ff63725c9750c6d52f340e2a28144007e93905aa85d2896a4df5a7&X-Amz-SignedHeaders=host',
  'https://github-production-user-asset-6210df.s3.amazonaws.com/60298173/408881815-3b1626fa-417e-4765-b7c3-37013e8ed545.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250202%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250202T172614Z&X-Amz-Expires=300&X-Amz-Signature=183ff1fe334e4ef87dc40f4d2fb52efddee50e523054213979568977c0c9ee81&X-Amz-SignedHeaders=host',
]

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const router = useRouter()
  const { filePath, path, slug, date, title, tags, summary } = content
  const basePath = path.split('/')[0]
  const Pathtast = path.split('/')[1]
  const Datas = listData.filter((item) => item.major === Pathtast)

  // 현재 URL에서 활성 탭 찾기
  const currentPath = path // 예: /blog/etc/familyapp/intro
  const activeData = Datas.find((item) => currentPath.includes(item.url.split('/').slice(-2)[0]))
  const [activeTab, setActiveTab] = useState(activeData?.url || Datas[0]?.url || '')

  const handleTabClick = (url: string) => {
    setActiveTab(url)
    const baseUrl = window.location.origin
    const newUrl = `${baseUrl}${url}`
    window.location.replace(newUrl)
  }

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          {(Pathtast === 'etc' || Pathtast === 'punchylab') && (
            <div className="pb-6">
              <div className="flex justify-center border-gray-200 dark:border-gray-700">
                {Datas.map((item, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 ${
                      item.url === activeTab
                        ? 'border-b-2 border-primary-500 text-primary-500'
                        : 'text-gray-500 hover:text-primary-500'
                    }`}
                    onClick={() => handleTabClick(item.url)}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </div>
          )}
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <div>
                <p>{summary}</p>
              </div>
            </div>
          </header>
          {Pathtast === 'punchylab' && (
            <div className="mx-auto mb-8 w-full max-w-4xl">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                pagination={{ clickable: true }}
                loop={true}
                className="h-[500px] w-full
                [&_.swiper-button-next:hover]:bg-gray-300/90 [&_.swiper-button-next]:h-[50px] 
                [&_.swiper-button-next]:w-[50px] [&_.swiper-button-next]:rounded-full 
                [&_.swiper-button-next]:bg-gray-100/80 [&_.swiper-button-next]:text-gray-600 
                [&_.swiper-button-next]:after:text-[20px] [&_.swiper-button-next]:after:content-['>']
                [&_.swiper-button-prev:hover]:bg-gray-300/90 [&_.swiper-button-prev]:h-[50px] 
                [&_.swiper-button-prev]:w-[50px] [&_.swiper-button-prev]:rounded-full 
                [&_.swiper-button-prev]:bg-gray-100/80 [&_.swiper-button-prev]:text-gray-600 
                [&_.swiper-button-prev]:after:text-[20px] [&_.swiper-button-prev]:after:content-['<']
                [&_.swiper-pagination-bullet-active]:bg-gray-600 [&_.swiper-pagination-bullet]:h-[8px] 
                [&_.swiper-pagination-bullet]:w-[8px] [&_.swiper-pagination-bullet]:bg-gray-400"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="h-full w-full object-contain"
                    />
                  </SwiperSlide>
                ))}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </Swiper>
            </div>
          )}
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700">
            <div className="items-center justify-center divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-2 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">{children}</div>
              <div className="pb-6 pt-6 text-sm text-gray-700 dark:text-gray-300">
                <Link href={editUrl(filePath)}>View on GitHub</Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
