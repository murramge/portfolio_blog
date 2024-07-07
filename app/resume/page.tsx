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
            <p>무언가 만들면서 개발하는 것이 취향인 개발자 입니다.</p>
            <div className="flex gap-2 pt-5">
              <a href="mailto:murramge@gmail.com" target="_blank">
                <img src="https://img.shields.io/badge/Gmail-EA4335?style=flat-square&logo=Gmail&logoColor=white&link=mailto:murramge@gmail.com" />
              </a>
              <a href="https://coding-god-life.tistory.com/" target="_blank">
                <img src="https://img.shields.io/badge/Tistory-F46D01?style=flat-square&logo=tistory&logoColor=white" />
              </a>
              <a href="https://github.com/murramge" target="_blank">
                <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="md:px-5 md:py-10 xl:px-20 xl:py-10">
        <hr />
        <p className="py-5 text-3xl font-bold">Introduce</p>
        <div>
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
        <div className=" pt-5 text-base text-gray-500 dark:text-gray-100">
          <p>
            <Boldertext>첫 번째 </Boldertext>커뮤니티가 잘 되는 개발자가 되자.{' '}
          </p>
          <p className="py-5 text-sm text-gray-500 dark:text-gray-100">
            즉각적인 실시간 피드백이 되는,{' '}
            <Boldertext>아! 이 사람에게는 개발 관련해서 편하게 물어봐도 되겠다!</Boldertext>
            싶은 커뮤니티가 잘 되는 개발자가 되고 싶습니다.
          </p>
          <p>
            <Boldertext>그 이후</Boldertext> 겪었던 경험들을 공유하여 개발자 컨퍼런스에서 발표하자.
          </p>
          <p className="py-5 text-sm text-gray-500 dark:text-gray-100">
            겪었던 경험들 공부했던 좋은 개발 관련 지식들을 공유하는 것을 좋아하여, 개발자 커뮤니티
            사이트, 프로그래머스 기술공유 채널에도 개발 관련 지식, 경험들을 주로 올리곤 합니다. 더
            나아가 서브멘토 활동을 하는 도중, 부트캠프 수강생들에게
            <Link
              href={`https://youtu.be/nDhqPXi7W30?t=22`}
              target="_blank"
              className="font-bold text-primary-500 underline underline-offset-2 hover:text-primary-300"
            >
              {' '}
              [Link] 테스트 코드가 뭐죠? 먹는건가요? 라는 주제로 발표 경험을 해보며
            </Link>{' '}
            개발자 컨퍼런스 발표에 한 걸음 다가가는 계기가 되었습니다.
          </p>
          <p>
            <Boldertext>최종적으로 </Boldertext>팀에게 도움이 되며 문제를 잘 해결할 수 있는 개발자가
            되자.
          </p>
          <p className="py-5 text-sm text-gray-500 dark:text-gray-100">
            모르는 문제에 닥쳤을 때, 무턱대고 물어보는 것이 아닌, notion 페이지 등 질문 할 것을
            문서화 시켜 정리한 후 물어보는 습관이 있습니다. 그렇기에 팀원이 나와 같은 문제에
            직면했을 때 문서화 시킨 자료를 보여주며 팀에게 도움이 되는 경험을 했습니다. 이렇게
            팀원에게 도움이 되며 문제를 잘 해결해 나가는 개발자가 되고싶습니다.
          </p>
        </div>
        <hr />
        <div>
          <p className="py-5 text-3xl font-bold">Projects</p>
          <div className="gap-3 pt-1 md:flex md:items-center xl:flex xl:items-center">
            <p className="w-15 pb-1  text-xl font-medium text-primary-400 md:text-2xl xl:text-2xl">
              Gonggam
            </p>
            <p className="text-md font-medium text-gray-600 dark:text-gray-100">
              공연 정보 · 동행 어플리케이션
            </p>
          </div>
          <div className="flex gap-3">
            <p className="text-sm text-gray-500 dark:text-gray-100">2024 4월</p>
            <Link href={`/blog/gonggam/intro`} target="_blank">
              <p className="rounded-xl bg-primary-200 p-1 text-sm text-gray-600 hover:bg-primary-500 hover:text-white">
                상세보기
              </p>
            </Link>
          </div>
          <div className="flex gap-2 py-2 text-primary-500">
            <Link
              href={`https://play.google.com/store/apps/details?id=com.gonggamapply&hl=ko`}
              target="_blank"
              className="hover:text-primary-800 dark:hover:text-primary-400"
            >
              🔗 Google Play Store
            </Link>
            <p>|</p>
            <Link
              href={`https://github.com/murramge/GongGam_APP_Project`}
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
            어플의 최종 배포를 담당. Google playstore 배포 경험. rollbar를 이용해 배포 이후에도
            실시간으로 오류를 예측할 수 있도록 함
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
          <p className="pb-5 text-lg font-medium md:text-xl xl:text-xl">트러블 슈팅</p>
          <p className="pb-5 text-gray-600 dark:text-gray-100">
            공연 상세 페이지로 이동 시, 앱이 강제종료 되는 문제
          </p>
          <p className="pb-5 text-gray-600 dark:text-gray-100">
            모임 참여 후, 마이페이지에서 내 모임 리스트에서 바로 뜨지 않는 문제
          </p>
        </div>
        <hr />
        <div>
          <div className="gap-3 pt-10 md:flex md:items-center xl:flex xl:items-center">
            <p className="w-15 pb-1  text-xl font-medium text-primary-400 md:text-2xl xl:text-2xl">
              Capo
            </p>
            <p className="text-md font-medium text-gray-600 dark:text-gray-100">
              포토카드 거래 웹 사이트
            </p>
          </div>
          <div className="flex gap-3">
            <p className="text-sm text-gray-500 dark:text-gray-100">2024 1월</p>
            <Link href={`/blog/capo/intro`} target="_blank">
              <p className="rounded-xl bg-primary-200 p-1 text-sm text-gray-600 hover:bg-primary-500 hover:text-white">
                상세보기
              </p>
            </Link>
          </div>
          <div className="flex gap-2 py-2 text-primary-500">
            <Link
              href={`https://photocard.site/`}
              target="_blank"
              className="hover:text-primary-800 dark:hover:text-primary-400"
            >
              🔗 Web
            </Link>
            <p>|</p>
            <Link
              href={`https://github.com/murramge/capo_project_front`}
              target="_blank"
              className="hover:text-primary-800 dark:hover:text-primary-400"
            >
              Github
            </Link>
          </div>
          <p className="py-5 text-lg  font-medium md:text-xl xl:text-xl">프로젝트 소개</p>
          <p className="pb-5 text-gray-600 dark:text-gray-100">
            포토카드 거래를 위한 온라인 플랫폼으로, 다양한 아이돌과 캐릭터의 포토카드를 손쉽게
            거래할 수 있도록 안전한 거래환경을 제공하는 거래 웹 사이트
          </p>
          <div>
            <span>팀 구성 : </span>
            <span>3명 (프론트엔드를 맡았습니다.)</span>
          </div>
          <p className="py-5 text-lg  font-medium md:text-xl xl:text-xl">기술 스택</p>
          <div className=" gap-2 text-sm md:flex xl:flex">
            <div>
              언어 : <span className="rounded-full bg-gray-200 p-1 text-black ">TypeScript</span>
            </div>
            <div>
              프레임워크 :{' '}
              <span className="rounded-full bg-gray-200 p-1 text-black ">React / Next.js</span>
            </div>
            <div>
              상태관리 : <span className="rounded-full bg-gray-200 p-1 text-black ">Zustand</span>
            </div>
            <div>
              패키지 매니저 : <span className="rounded-full bg-gray-200 p-1 text-black ">npm</span>
            </div>
            <div>
              백엔드 : <span className="rounded-full bg-gray-200 p-1 text-black ">spring</span>
            </div>
          </div>
          <p className="py-5 text-lg font-medium md:text-xl xl:text-xl">내가 기여한 부분</p>
          <p className="pb-5 text-gray-600 dark:text-gray-100">
            로그인 시 refreshToken 값을 이용하여 AuthGuard를 구현. 사용자의 로그인 상태를 확인하고,
            로그인 되지 않은 사용자는 로그인 페이지로 리디렉션{' '}
          </p>
          <p className="pb-5 text-gray-600 dark:text-gray-100">
            react-hook-form과 zod를 이용하여 로그인, 회원가입, 상품 거래 유효성 검사 처리
          </p>
          <p className="pb-5 text-gray-600 dark:text-gray-100">
            Zustand를 이용한 판매 상품 전역 상태관리. 적절한 카테고리 필터링 구현
          </p>
          <p className="pb-5 text-gray-600 dark:text-gray-100">
            docker를 통해 backend와 같이 Front 배포
          </p>
          <p className="pb-5 text-gray-600 dark:text-gray-100">
            이 외에도 폴더 구조, 공통 컴포넌트 구현
          </p>
          <p className="pb-5 text-lg font-medium md:text-xl xl:text-xl">트러블 슈팅</p>
          <p className="pb-5 text-gray-600 dark:text-gray-100">
            npm run build 시, static 폴더 사라지는 문제
          </p>
          <p className="pb-5 text-gray-600 dark:text-gray-100">
            클라이언트에서 정적 파일이 실행될 때 웹팩과 충돌 next.config에서 splitChunks를 비활성화
            함.
          </p>
          <p className="pb-5 text-gray-600 dark:text-gray-100">
            React Hook Form에서 form.watch("email")로 이메일 값을 가져올 때 개별적인 버튼으로
            구현하여, 유효성 검사가 적용되지 않아 유효하지 않은 형식의 이메일도 가져올 수 있는 문제
          </p>
          <p className="pb-5 text-gray-600 dark:text-gray-100">
            form.trigger("email")을 사용하여 이메일 필드의 유효성을 검사하고, 유효할 경우 true를
            반환하며, 그렇지 않을 경우 false를 반환하여 이메일 입력의 정확성을 보장
          </p>
        </div>
        <hr />
        <div>
          <div className="gap-3 pt-10 md:flex md:items-center xl:flex xl:items-center">
            <p className="w-15 pb-1 text-xl font-medium text-primary-400 md:text-2xl xl:text-2xl">
              OttDaDam (옷다담)
            </p>
            <p className="text-md font-medium text-gray-600 dark:text-gray-100">
              서울시 의류수거함 위치정보서비스
            </p>
          </div>
          <div className="flex gap-3">
            <p className="text-sm text-gray-500 dark:text-gray-100">2023 9월</p>
            <Link href={`/blog/ottdadam/intro`} target="_blank">
              <p className="rounded-xl bg-primary-200 p-1 text-sm text-gray-600 hover:bg-primary-500 hover:text-white">
                상세보기
              </p>
            </Link>
          </div>
          <div className="flex gap-2 py-2 text-primary-500">
            <Link
              href={`http://158.179.194.191:3000/`}
              target="_blank"
              className="hover:text-primary-800 dark:hover:text-primary-400"
            >
              🔗 Web
            </Link>
            <p>|</p>
            <Link
              href={`https://github.com/murramge/seoul_clothingBin_ottdadam`}
              target="_blank"
              className="hover:text-primary-800 dark:hover:text-primary-400"
            >
              Github
            </Link>
          </div>
          <p className="py-5 text-lg  font-medium md:text-xl xl:text-xl">프로젝트 소개</p>
          <p className="pb-5 text-gray-600 dark:text-gray-100">
            의류수거함의 위치를 쉽게 알 수 있도록 오픈API를 사용해서 만든 의류수거함 위치정보
            프로젝트이다.
          </p>
          <div>
            <span>팀 구성 : </span>
            <span>2명 (프론트엔드를 맡았습니다.)</span>
          </div>
          <p className="py-5 text-lg  font-medium md:text-xl xl:text-xl">기술 스택</p>
          <div className=" gap-2 text-sm md:flex xl:flex">
            <div>
              언어 : <span className="rounded-full bg-gray-200 p-1 text-black ">Javascript</span>
            </div>
            <div>
              프레임워크 : <span className="rounded-full bg-gray-200 p-1 text-black ">React</span>
            </div>
            <div>
              상태관리 :{' '}
              <span className="rounded-full bg-gray-200 p-1 text-black ">Context API</span>
            </div>
            <div>
              패키지 매니저 : <span className="rounded-full bg-gray-200 p-1 text-black ">npm</span>
            </div>
            <div>
              백엔드 : <span className="rounded-full bg-gray-200 p-1 text-black ">spring</span>
            </div>
          </div>
          <p className="py-5 text-lg font-medium md:text-xl xl:text-xl">내가 기여한 부분</p>
          <p className="pb-5 text-gray-600 dark:text-gray-100">
            구- 동- 주소 별로 컴포넌트 분리와 React의 props 기능을 활용하여 개발함.
          </p>
          <p className="pb-5 text-gray-600 dark:text-gray-100">
            context API를 이용하여 구 - 동 - 주소를 전역상태관리화 함.
          </p>

          <p className="pb-5 text-gray-600 dark:text-gray-100">
            카카오맵 지도 API를 사용하여 custom marker와 custom info 구현
          </p>
          <p className="pb-5 text-gray-600 dark:text-gray-100">
            이 외에도 전체적인 디자인 및 개발 구성 구현
          </p>
        </div>
        <hr />
        <div className="gap-3 pt-10 md:flex md:items-center xl:flex xl:items-center">
          <p className="w-15 pb-1 text-xl font-medium text-primary-400 md:text-2xl xl:text-2xl">
            그 밖에도..{' '}
          </p>
          <p className="text-md font-medium text-gray-600 dark:text-gray-100">
            다양한 사이드 프로젝트를 진행하였습니다.
          </p>
        </div>
        <div className="flex gap-2 pt-5">
          <p className=" dark:text-gray-100">
            오픈소스 포트폴리오 웹사이트 (next.js, react, tailwind.css)
          </p>
          <Link href={`/blog/gonggam/intro`} target="_blank">
            <p className="rounded-xl bg-primary-200 p-1 text-sm text-gray-600 hover:bg-primary-500 hover:text-white">
              상세보기
            </p>
          </Link>
        </div>
        <div className="flex gap-2 pt-5">
          <p className=" dark:text-gray-100">비디오 편집 웹사이트 (react)</p>
          <Link href={`/blog/gonggam/intro`} target="_blank">
            <p className="rounded-xl bg-primary-200 p-1 text-sm text-gray-600 hover:bg-primary-500 hover:text-white">
              상세보기
            </p>
          </Link>
        </div>
        <div className="flex gap-2 pt-5">
          <p className=" dark:text-gray-100">캠핑투게더 앱 프로젝트 (react native)</p>
          <Link href={`/blog/gonggam/intro`} target="_blank">
            <p className="rounded-xl bg-primary-200 p-1 text-sm text-gray-600 hover:bg-primary-500 hover:text-white">
              상세보기
            </p>
          </Link>
        </div>
        <div className="flex gap-2 pt-5">
          <p className=" dark:text-gray-100">가족 앱 프로젝트 (android studio)</p>
          <Link href={`/blog/gonggam/intro`} target="_blank">
            <p className="rounded-xl bg-primary-200 p-1 text-sm text-gray-600 hover:bg-primary-500 hover:text-white">
              상세보기
            </p>
          </Link>
        </div>
        <div className="flex gap-2 py-5">
          <p className=" dark:text-gray-100">socket을 이용한 채팅 사이트 구현 (socket, node.js)</p>
          <Link href={`/blog/gonggam/intro`} target="_blank">
            <p className="rounded-xl bg-primary-200 p-1 text-sm text-gray-600 hover:bg-primary-500 hover:text-white">
              상세보기
            </p>
          </Link>
        </div>
        <hr />
        <p className="py-5  text-3xl font-bold">Work History</p>
        <div className="gap-3 text-lg md:flex md:items-center xl:flex xl:items-center">
          <p className="w-15 pb-1  font-medium text-primary-400 ">
            광고 지역 선택 API 개발 및 View 구현
          </p>
          <p className="text-xs font-medium text-gray-600 dark:text-gray-100">Ok114(주)</p>
        </div>
        <p className="py-5 text-gray-600 dark:text-gray-100">
          사용자가 어플을 통해 광고할 지역을 위치와 반경을 통해 선택할 수 있는 페이지 작업
        </p>
        <p className="pb-5 text-gray-600 dark:text-gray-100">
          nodejs와 elastic search를 이용하여 행정구역과 반경을 기반으로 지역을 알려주는 API 개발
        </p>
        <p className="pb-5 text-gray-600 dark:text-gray-100">
          API를 바탕으로 naver 지도 api view를 이용하여 반경과 구역을 브라우저에서 나타냄
        </p>
        <div className="bg-gray-100 p-2 text-sm text-gray-600">
          기존에는 사용자가 광고할 지역을 직접 알려주면 회사 측에서 추가 및 수정을 했다면, 개선
          후에는 광고할 지역을 현재 위치와 그 위치에 맞는 반경을 통해 사용자가 직접 선택할 수 있도록
          구현해주었음. 가시성을 높이기 위해 사용자가 광고할 지역의 구역을 색깔로 표시하는 작업을
          통해 사용자가 광고 지역을 직관적으로 볼 수 있어 편리하도록 구성
        </div>
        <div className="gap-3 pt-5 text-lg md:flex md:items-center xl:flex xl:items-center">
          <p className="w-15 pb-1 font-medium text-primary-400 ">업체 등록 관리 페이지</p>
          <p className="text-xs font-medium text-gray-600 dark:text-gray-100">Ok114(주)</p>
        </div>
        <p className="py-5 text-gray-600 dark:text-gray-100">
          업체에서 사용하는 이미지, 문서들을 업로드 할 수 있는 페이지 작업
        </p>
        <p className="pb-5 text-gray-600 dark:text-gray-100">
          모바일과 웹을 동시에 사용할 수 있어야 하는 반응형 사이트 작업으로 tailwind.css 사용
        </p>
        <p className="pb-5 text-gray-600 dark:text-gray-100">
          session과 cookie로 사용자의 login 권한 설정
        </p>
        <div className="bg-gray-100 p-2 text-sm text-gray-600">
          기존에는 업체가 이미지나 문서를 회사측에 제공하면 회사에서 업로드 하는 방식이었다면, 관리
          페이지 생성 후에는 업체가 직접 이미지, 문서를 업로드할 수 있도록 구현해주었음. 그 이미지나
          문서를 admin 페이지를 통해 회사 관리자가 이미지, 문서를 관리할 수 있도록 효율적인 방법으로
          페이지를 구성
        </div>
        <div className="gap-3 pt-5 text-lg md:flex md:items-center xl:flex xl:items-center">
          <p className="w-15 pb-1   font-medium text-primary-400 ">
            업체 정보 수집 자동화 프로그램
          </p>
          <p className="text-xs font-medium text-gray-600 dark:text-gray-100">Ok114(주)</p>
        </div>
        <p className="py-5 text-gray-600 dark:text-gray-100">
          typescript를 이용하여 타입을 나누어 지정하여 데이터를 적은 오류로 수집
        </p>
        <p className="pb-5 text-gray-600 dark:text-gray-100">
          자동화 수집으로 배치를 사용하여 node-cron으로 스케줄링
        </p>
        <p className="pb-5 text-gray-600 dark:text-gray-100">
          PM2 process Manager로 서버가 갑자기 중지되어도 다시 제공될 수 있도록 설정
        </p>
        <p className="pb-5 text-gray-600 dark:text-gray-100">
          업체 정보 수집을 위해 naver 지도를 크롤링하여 수집
        </p>
        <div className="mb-5 bg-gray-100 p-2 text-sm text-gray-600">
          현재 존재하고 있는 업체의 정보를 수집하여 영업팀이 업체 정보를 토대로 영업을 쉽게 할 수
          있도록 정보를 자동화 할 수 있도록 구현. 기존에는 업체의 정보들을 회사 관리자가 1일 300건
          수동으로 입력하였으나, 자동화 프로그램 도입을 바탕으로 수동으로 업체 정보를 입력할 필요
          없도록 프로그램을 구성
        </div>
        <hr />
        <p className="pt-5  text-3xl font-bold">Activity</p>
        <p className="py-2 pb-5 text-gray-600 dark:text-gray-100">
          꾸준하게 개발 관련 활동을 진행 중입니다.
        </p>
        <p className="w-15 pb-1 font-medium text-primary-400">교육</p>
        <ul className="text-sm text-gray-600 dark:text-gray-100">
          <li className="pb-1">
            프로그래머스 데브코스 클라우딩 웹 앱 엔지니어링 1기 과정 수료 (2023.12-2024.05)
          </li>
          <li className="pb-1">
            프로그래머스 데브코스 클라우딩 웹 앱 엔지니어링 2기 과정 서브멘토 (2024.06-2024.09)
          </li>
          <li className="pb-1">원티드 프리온보딩 프론트엔드 챌린지 (2024 3월,4월,6월 수료)</li>
          <li className="pb-1">안양대학교 아리멘토링 멘토 활동 (2020.03-2020.06)</li>
        </ul>
        <p className="w-15 pb-1 pt-5 font-medium text-primary-400">발표</p>
        <p className="text-sm text-gray-600 dark:text-gray-100">
          프론트엔드 데브코스 클라우딩 웹 앱 엔지니어링 2기 미니세션 - 찍어먹어보는 테스트 코드
        </p>
        <p className="w-15 pt-5 font-medium text-primary-400">자격증</p>
        <p className="text-sm text-gray-600 dark:text-gray-100">정보처리기사 필기 합격 (2023.07)</p>
        <p className="w-15 pb-1 pt-5 font-medium text-primary-400">스터디</p>
        <ul className="text-sm text-gray-600 dark:text-gray-100">
          <li className="pb-1">(2023.12-2024.02) javascript 알고리즘 스터디 운영 </li>
          <li className="font-bold">
            (2024.06-현재 진행 중) 대규모 프로젝트 [취준생 프로젝트] 사이드 프로젝트 스터디 팀장
            운영 (인원 : 총 15명 프론트 5명, 백엔드 5명, 디자이너 5명)
          </li>
        </ul>
        <p className="py-5  text-3xl font-bold">Employment History</p>
        <p className="text-sm text-gray-600 dark:text-gray-100">
          OK114 웹 개발자 (2022.12-2023.03)
        </p>
        <p className="py-5  text-3xl font-bold">Education</p>
        <p className="pb-1 text-sm text-gray-600 dark:text-gray-100">
          (2023.12-2024.05) 프로그래머스 데브코스 클라우딩 웹 앱 엔지니어링 1기 과정 수료
        </p>
        <p className="pb-5 text-sm text-gray-600 dark:text-gray-100">
          (2018.03-2022.08) 안양대학교 소프트웨어학과 졸업 (GPA 3.68/4.5)
        </p>
        <hr />
        <p className="pt-5 text-sm text-primary-600 dark:text-primary-100">
          귀한 시간 들여 읽어주셔서 진심으로 감사드립니다.
        </p>
      </div>
    </div>
  )
}
