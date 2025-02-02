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

  console.log(basePath)
  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
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
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700">
            {(Pathtast === 'etc' || Pathtast === 'punchylab') && (
              <div className="pb-10 pt-6">
                <div className="flex justify-center  border-gray-200 dark:border-gray-700">
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
