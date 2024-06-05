import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Image from 'next/image'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <div>
      <div className=" md:flex xl:flex">
        <Image src="/static/images/mainphoto.png" alt="test" width={300} height={400}></Image>
        <div className="px-3 py-2 md:px-20  xl:px-20">
          <div>
            <p className="pb-5 pt-2 text-2xl font-extrabold">Kangeunhwa</p>
            <div className="pb-5 text-gray-500 dark:text-gray-100">
              <p>취미가 사이드프로젝트인,</p>
              <p>무언가 만들면서 개발하는 것이 취향인 개발자 입니다.</p>
            </div>
          </div>
          <div>
            <p className="pb-1 text-2xl font-medium">협력</p>
            <p className="pb-3 text-sm text-gray-500 dark:text-gray-100">
              협력의 가치를 실현하고 함께 공유 하는 것을 좋아하는 개발자 입니다.
            </p>
            <p className="pb-1 text-2xl font-medium ">효율</p>
            <p className="pb-3 text-sm text-gray-500 dark:text-gray-100">
              어떻게 하면 효율적으로 코드를 짤 수 있을까.. 고민하는 것을 좋아하는 개발자 입니다.
            </p>
            <p className="pb-1 text-2xl font-medium">행동</p>
            <p className="pb-1 text-sm text-gray-500 dark:text-gray-100">
              항상 적극적인 자세로 사람들에게 동기부여를 주는 개발자 입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
