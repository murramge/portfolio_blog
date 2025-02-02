'use client'
import { useState } from 'react'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import workData from '@/data/workData'

export default function Projects() {
  const [activeTab, setActiveTab] = useState('work')

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          {/* <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1> */}

          {/* 탭 네비게이션 추가 */}
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 text-3xl ${
                activeTab === 'work' ? ' border-blue-500 text-blue-500' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('work')}
            >
              Work
            </button>
            <button
              className={`px-4 py-2 text-3xl ${
                activeTab === 'projects' ? 'border-blue-500 text-blue-500' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('projects')}
            >
              Projects
            </button>
          </div>
        </div>

        <div className="container py-12">
          {activeTab === 'projects' ? (
            <div className="-m-4 flex flex-wrap">
              {projectsData.map((d) => (
                <Card
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  imgSrc={d.imgSrc}
                  type={d.type}
                  headCount={d.headCount}
                  techStack={d.techStack}
                  period={d.period}
                  href={d.href}
                />
              ))}
            </div>
          ) : (
            <div className="-m-4 flex flex-wrap">
              {workData.map((d) => (
                <Card
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  imgSrc={d.imgSrc}
                  type={d.type}
                  headCount={d.headCount}
                  techStack={d.techStack}
                  period={d.period}
                  href={d.href}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
