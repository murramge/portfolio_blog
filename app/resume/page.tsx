import Image from 'next/image'
import Link from 'next/link'

export default function Resume() {
  const Boldertext = ({ children }) => {
    return <span className="font-extrabold ">{children}</span>
  }

  return (
    <div>
      <div className=" items-center justify-center md:flex xl:flex">
        <Image src="/static/images/mainphoto.png" alt="test" width={300} height={400}></Image>
        <div className="px-3 py-2 md:px-20 xl:px-20">
          <p className="pb-5 pt-2 text-2xl font-extrabold">Kangeunhwa</p>
          <div className="pb-5 text-gray-500 dark:text-gray-100">
            <p>
              취미가 <Boldertext>사이드 프로젝트</Boldertext>인,
            </p>
            <p>무언가 만들면서 개발하는 것이 취향인 개발자 입니다.</p>
          </div>
        </div>
      </div>

      <div className="md:px-5 md:py-10 xl:px-20 xl:py-10">
        <hr />
        <div>
          <p className="py-5 text-3xl font-bold">Introduce</p>
          <div className="gap-3 md:flex md:items-center xl:flex xl:items-center">
            <p className="w-15 py-1 text-xl font-medium md:text-2xl xl:text-2xl">협력</p>
            <p className="text-md font-medium text-gray-600 dark:text-gray-100">
              협력의 가치를 실현하고 함께 공유 하는 것을 좋아하는 개발자 입니다.
            </p>
          </div>
          <p className="py-5 text-sm text-gray-500 dark:text-gray-100">
            다양한 프로젝트에서 협력의 가치를 실현하며,
            <Boldertext> 프로그래머스 데브코스</Boldertext> 교육기관 내에서
            <Boldertext> 팀장을 맡은 경험</Boldertext>과 <Boldertext>대학교내 멘토링</Boldertext>
            에서 <Boldertext>멘토</Boldertext> 역할을 하며 리더쉽 있는 개발자적인 라포(Rapport) 를
            형성하여 프로그래머스 데브코스 교육기관 내에서 <Boldertext>우수 팀 프로젝트</Boldertext>
            로 뽑히고, 교내 멘토링을 진행하면서도 <Boldertext>멘티들이 A 이상의 성적</Boldertext>을
            받은 성과를 거두기도 했습니다.
          </p>
          <p className="pb-5 text-sm text-gray-500 dark:text-gray-100">
            개발자 스터디 / 커뮤니티에 관심이 많습니다.
            <Boldertext>알고리즘 스터디를 직접 운영</Boldertext>하며 코딩테스트 스터디를 하며 함께
            사람들과 공부 하였습니다. 현재는 <Boldertext>사이드 프로젝트 스터디를 운영</Boldertext>
            하여 사이드 프로젝트를 경험 중에 있습니다.
          </p>
          <p className="pb-5 text-sm text-gray-500 dark:text-gray-100">
            개발자 컨퍼런스에도 관심이 많아 GDC 인천, 온라인으로 진행되는 각종 컨퍼런스도 자주
            다닙니다.
          </p>
        </div>

        <div>
          <div className="gap-3 md:flex md:items-center xl:flex xl:items-center">
            <p className="w-15 pb-1 text-xl font-medium md:text-2xl xl:text-2xl">효율</p>
            <p className="text-md  font-medium text-gray-600 dark:text-gray-100">
              어떻게 하면 효율적으로 코드를 짤 수 있을까.. 고민하는 것을 좋아하는 개발자 입니다.
            </p>
          </div>
          <p className="py-5 text-sm text-gray-500 dark:text-gray-100">
            프로젝트를 진행할 때 효율적으로 코드를 구현하도록{' '}
            <Boldertext>컴포넌트 재사용성</Boldertext>에 대해 고민하고, 라이브러리를 사용할 때도{' '}
            <Boldertext>어떠한 라이브러리가 더 효율적일 지 </Boldertext>고민을 해서 코딩 합니다.
          </p>
          <p className="pb-5 text-sm text-gray-500 dark:text-gray-100">
            개발한 코드를 다른 팀원들이 쉽고 빠르게 이해할 수 있도록{' '}
            <Boldertext>github의 issue</Boldertext>에 간략하게 <Boldertext>문서화</Boldertext> 하여
            작업하고, 더 구체적인 내용은 블로그나 개인 포트폴리오 사이트에 정리하여 올려 협업하는
            사람에게 설명해주며 코딩 합니다.
          </p>
        </div>

        <div>
          <div className="gap-3 md:flex md:items-center xl:flex xl:items-center">
            <p className="w-15 pb-1 text-xl font-medium md:text-2xl xl:text-2xl">행동</p>
            <p className="text-md font-medium text-gray-600 dark:text-gray-100">
              항상 적극적인 자세로 사람들에게 동기부여를 주는 개발자 입니다.
            </p>
          </div>
          <p className="py-5 text-sm text-gray-500 dark:text-gray-100">
            데브코스 과정을 통해 <Boldertext>우수 수료자</Boldertext>로 선정되어 2기 클라우딩 웹 앱
            어플리케이션 과정의
            <Boldertext> 서브멘토</Boldertext>로 합류가 되어, 2기 교육생들에게 멘토로서{' '}
            <Boldertext>동기부여를 주는 멘토</Boldertext>가 되었습니다.
          </p>
          <p className="pb-5 text-sm text-gray-500 dark:text-gray-100">
            항상 적극적인 자세로 <Boldertext>팀장 경험을 다수</Boldertext> 맡아서 진행하였고, 학과
            동기들과 데브코스 팀원들에게도 피어리뷰를 통해 <Boldertext>성실함</Boldertext>과{' '}
            <Boldertext>적극적인 열정</Boldertext>으로 <Boldertext>동기부여</Boldertext>가 되었다는
            리뷰를 받았습니다.
          </p>
        </div>
        <p className="w-15 pb-5 text-xl font-medium md:text-2xl xl:text-2xl">개발자로서의 목표</p>
        <p className=" pb-5 text-base text-gray-500 dark:text-gray-100">
          <p>
            <Boldertext>첫 번째 </Boldertext>커뮤니티가 잘 되는 개발자가 되자.{' '}
          </p>
          <p>
            <Boldertext>그 이후</Boldertext> 제가 겪었던 경험들을 공유하여 개발자 컨퍼런스에서
            발표하자.
          </p>
          <p>
            <Boldertext>최종적으로 </Boldertext>팀에게 도움이 되며 문제를 잘 해결할 수 있는 개발자가
            되자.
          </p>
        </p>
        <hr />
        <div>
          <p className="py-5 text-3xl font-bold">Projects</p>
          <div className="gap-3  md:flex md:items-center xl:flex xl:items-center">
            <p className="w-15 pb-1 text-xl font-medium text-primary-400 md:text-2xl xl:text-2xl">
              Gonggam
            </p>
            <p className="text-md font-medium text-gray-600 dark:text-gray-100">
              공연 정보 · 동행 어플리케이션
            </p>
          </div>
          <div className="flex gap-3">
            <p className="text-sm text-gray-500 dark:text-gray-100">2024 4월 ~ 진행 중</p>
            <Link href={`/blog/gonggam/intro`} target="_blank">
              <p className="rounded-xl bg-primary-200 p-1 text-sm text-gray-600 hover:bg-primary-500 hover:text-white">
                상세보기
              </p>
            </Link>
          </div>
          <div className="flex gap-2 py-2 text-primary-500">
            <Link
              href={`https://www.naver.com`}
              target="_blank"
              className="hover:text-primary-800 dark:hover:text-primary-400"
            >
              🔗 Google Play Store
            </Link>
            <p>|</p>
            <Link
              href={`https://www.naver.com`}
              target="_blank"
              className="hover:text-primary-800 dark:hover:text-primary-400"
            >
              Github
            </Link>
          </div>
          <p className="py-5 text-lg  font-medium md:text-xl xl:text-xl">프로젝트 소개</p>
          <p className="pb-5 text-gray-600 dark:text-gray-100">
            공연 함께 보기, 공연 정보 안내, 공연 예매 안내 등을 통해 사용자들에게 편리한 공연 경험을
            제공하고 공연의 감동을 함께 나눌 수 있는 커뮤니티 어플리케이션
          </p>
          <div>
            <span>팀 구성 : </span>
            <span>4명</span>
          </div>
          <p className="py-5 text-lg  font-medium md:text-xl xl:text-xl">기술 스택</p>
          <div className=" gap-2 text-sm md:flex xl:flex">
            <div>
              언어 : <span className="rounded-full bg-gray-200 p-1 text-black ">TypeScript</span>
            </div>
            <div>
              프레임워크 :{' '}
              <span className="rounded-full bg-gray-200 p-1 text-black ">ReactNative</span>
            </div>
            <div>
              상태관리 : <span className="rounded-full bg-gray-200 p-1 text-black ">Jotai</span>
            </div>
            <div>
              패키지 매니저 : <span className="rounded-full bg-gray-200 p-1 text-black ">npm</span>
            </div>
            <div>
              백엔드 : <span className="rounded-full bg-gray-200 p-1 text-black ">supabase</span>
            </div>
          </div>
          <p className="py-5 text-lg font-medium md:text-xl xl:text-xl">내가 기여한 부분</p>
          <p className="pb-5 text-gray-600 dark:text-gray-100">
            프로젝트 팀 팀장으로 애자일 방법론 도입, notion으로 매일 데일리 스크럼 진행과 github
            project 칸반보드를 이용하여 프로젝트 관리를 통해 체계적인 티켓 배분. 팀 생산성을
            향상시킴
          </p>
          <p className="pb-5 text-gray-600 dark:text-gray-100">
            어플의 최종 배포를 담당. Google playstore 배포 경험.
          </p>
          <p className="pb-5 text-gray-600 dark:text-gray-100">
            모임 생성 : 멀티 스탭 폼으로 모임 생성의 각각 생성 스탭마다 사용자의 선택 유무에 따라
            react hook form과 zod를 이용하여 유효성 검사를 통해 버튼 활성화
          </p>
          <p className="pb-5 text-gray-600 dark:text-gray-100">
            공연 상세페이지 sticky header : RN의 animate 기능을 이용하여, 상세페이지의 헤더의 전체
            크기와 sticky 헤더가 될 크기를 지정해주며, 사용자가 스크롤 할 때 지정해준 Sticky
            헤더만큼의 크기를 유지하여 상단에 고정
          </p>
          <p className="pb-5 text-gray-600 dark:text-gray-100">
            캘린더 공연 일정 필터링 : KOPIS 공공 데이터의 공연 일정 데이터를 바탕으로 해당하는
            요일을 정제한 후, react-native-calenders 라이브러리에서 해당하는 요일이 아닌 날짜를
            enable 하여 선택하지 못하도록 필터화 함
          </p>
          <p className="pb-5 text-gray-600 dark:text-gray-100">
            이 외에도 디자인, 개인 정보 보호 가이드, 폴더 구조, 공통 컴포넌트 구현
          </p>
          <p className="py-5 text-lg font-medium md:text-xl xl:text-xl">트러블 슈팅</p>
          <p className="pb-5 text-gray-600 dark:text-gray-100">
            메인 공연 페이지에서 클릭 시 앱이 강제종료 되는 문제
          </p>
          <p className="pb-5 text-gray-600 dark:text-gray-100">
            모임 참여 후, 마이페이지에서 내 모임 리스트에서 바로 뜨지 않는 문제
          </p>
        </div>
      </div>
    </div>
  )
}
