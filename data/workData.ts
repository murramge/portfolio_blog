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
    title: 'murmur 학습 관리자 페이지(LMS)',
    description: `murmur 학습 관리자 페이지(LMS)`,
    imgSrc: '/static/images/punchylab_logo.jpg',
    type: 'Work Project',
    headCount: 'Front-end 1명',
    techStack: ['react', 'typescript', 'graphql', 'Github Actions'],
    period: '2024.08-',
    href: '/blog/punchylab/playground/intro',
  },
]

export default workData
