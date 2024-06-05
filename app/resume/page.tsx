import Image from 'next/image'

export default function Resume() {
  return (
    <div>
      <div className=" items-center justify-center md:flex xl:flex">
        <Image src="/static/images/mainphoto.png" alt="test" width={300} height={400}></Image>
        <div className="px-3 py-2 md:px-20 xl:px-20">
          <p className="pb-5 pt-2 text-2xl font-extrabold">Kangeunhwa</p>
          <div className="pb-5 text-gray-500 dark:text-gray-100">
            <p>취미가 사이드프로젝트인,</p>
            <p>무언가 만들면서 개발하는 것이 취향인 개발자 입니다.</p>
          </div>
        </div>
      </div>
      <div className="md:p-10 xl:p-10">
        <div>
          <div className="flex gap-3 ">
            <p className="pb-1 text-xl font-medium md:text-2xl xl:text-2xl">협력</p>
            <p className="text-md text-center text-gray-600 dark:text-gray-100">
              협력의 가치를 실현하고 함께 공유 하는 것을 좋아하는 개발자 입니다.
            </p>
          </div>
          <p className="pb-5 text-sm text-gray-500">
            다양한 프로젝트에서 협력의 가치를 실현하며, 프로그래머스 데브코스 교육기관 내에서 팀장을
            맡은 경험과 대학교내 멘토링에서 멘토 역할을 하며 리더쉽 있는 개발자적인 라포(Rapport) 를
            형성하여 프로그래머스 데브코스 교육기관 내에서 우수 팀 프로젝트로 뽑히고, 교내 멘토링을
            진행하면서도 멘티들이 A 이상의 성적을 받은 성과를 거두기도 했습니다.
          </p>
          <p className="pb-5 text-sm text-gray-500">
            개발자 스터디 / 커뮤니티에 관심이 많습니다. 알고리즘 스터디를 직접 운영하며 코딩테스트
            스터디를 하며 함께 사람들과 공부 하였습니다. 현재는 사이드 프로젝트 스터디를 운영하여
            사이드 프로젝트를 경험 중에 있습니다.
          </p>
        </div>

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
  )
}
