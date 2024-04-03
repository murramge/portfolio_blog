import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logos.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Image src={Logo} width={50}></Image>
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="flex-col">
                <div className="hidden h-6 text-xl font-semibold sm:block">
                  {siteMetadata.headerTitle}
                </div>
                <div className="hidden w-28 pt-1 sm:block">
                  <a href="https://hits.seeyoufarm.com">
                    <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fmyblog-murramge-kangeunhwas-projects.vercel.app%2Fgjbae1212%2Fhit-counter&count_bg=%238F98DC&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=Visitors&edge_flat=true" width={100} height={20}/>
                  </a>
                </div>
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
