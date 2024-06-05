interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  type?: string
  headCount?: string
  techStack?: string[]
  period?: string
}

const projectsData: Project[] = [
  {
    title: 'Gonggam(공감) - 공연 정보 / 동행 어플리케이션',
    description: `공감은 공연 감동의 줄임말로, KOPIS에서 제공하는 API를 활용하여 다양한 공연 정보를 제공하고, 함께 공연을 관람할 사람들을 모을 수 있는 커뮤니티를 제공하는 어플리케이션입니다. `,
    imgSrc: '/static/images/gonggam.png',
    type: 'Team Project',
    headCount: '4명',
    techStack: ['react-native', 'typescript', 'supabase', 'jotai'],
    period: '2024.04-',
    href: '/blog/gonggam/intro',
  },
  {
    title: 'Capo - 포토카드 거래 웹 사이트',
    description: `Capo는 포토카드 거래를 위한 온라인 플랫폼으로, 다양한 아이돌과 캐릭터의 포토카드를 손쉽게 거래할 수 있도록 안전한 거래환경을 제공하는 거래 웹 사이트 입니다.`,
    imgSrc: '/static/images/capo.png',
    type: 'Team Project',
    headCount: '3명 (프론트 1, 백엔드 1, 디자이너 1)',
    techStack: ['react', 'typescript', 'next.js'],
    period: '2024.01-',
    href: '/blog/capo/intro',
  },
  {
    title: 'OTTDADAM(옷다담) - 서울시 의류수거함 위치정보서비스',
    description: `Capo는 포토카드 거래를 위한 온라인 플랫폼으로, 다양한 아이돌과 캐릭터의 포토카드를 손쉽게 거래할 수 있도록 안전한 거래환경을 제공하는 거래 웹 사이트 입니다.`,
    imgSrc: '/static/images/ottdadam.png',
    type: 'Team Project',
    headCount: '2명 (프론트 1, 백엔드 1)',
    techStack: ['react', 'javascript'],
    period: '2023.09-',
    href: '/blog/capo/intro',
  },
  {
    title: 'OTTDADAM(옷다담) - 서울시 의류수거함 위치정보서비스',
    description: `Capo는 포토카드 거래를 위한 온라인 플랫폼으로, 다양한 아이돌과 캐릭터의 포토카드를 손쉽게 거래할 수 있도록 안전한 거래환경을 제공하는 거래 웹 사이트 입니다.`,
    imgSrc: '/static/images/etc.png',
    type: 'Team Project',
    headCount: '2명 (프론트 1, 백엔드 1)',
    techStack: ['react', 'javascript'],
    period: '2023.09-',
    href: '/blog/capo/intro',
  },
]

export default projectsData
