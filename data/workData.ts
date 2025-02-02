interface Work {
  title: string
  description: string
  href?: string
  imgSrc?: string
  type?: string
  headCount?: string
  techStack?: string[]
  period?: string
}

const workData: Work[] = [
  {
    title: 'murmur 관리자 페이지 개발',
    description: `murmur 관리자 페이지 개발`,
    imgSrc: '/static/images/punchylab_logo.jpg',
    type: '회사 프로젝트',
    headCount: '1명',
    techStack: ['react', 'typescript', 'graphql', 'Github Actions'],
    period: '2024.07-',
    href: '/blog/punchylab/boost/intro',
  },
]

export default workData
