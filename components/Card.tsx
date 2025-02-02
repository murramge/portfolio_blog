import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href, type, headCount, techStack, period }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <div className="flex justify-between pb-1 text-sm">
          <div className="flex gap-2">
            <p className="rounded-md bg-indigo-100 p-1 dark:bg-indigo-900 dark:text-indigo-100">
              {type}
            </p>
            <p className="rounded-md bg-gray-200 p-1 text-[11px] dark:bg-gray-800 dark:text-gray-100">
              {headCount}
            </p>
          </div>
          <p className="rounded-md bg-indigo-100 p-1 dark:bg-indigo-900 dark:text-indigo-100">
            {period}
          </p>
        </div>

        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        <div className="mb-2 flex flex-wrap">
          {techStack &&
            techStack.map((tech, index) => (
              <p
                key={index}
                className="m-1 rounded-md bg-indigo-100 p-1 text-xs dark:bg-indigo-900 dark:text-indigo-100"
              >
                {tech}
              </p>
            ))}
        </div>
        {href && (
          <Link
            href={href}
            className="text-md text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            프로젝트 상세보기 &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
