import {FC} from 'react'
import Link from 'next/link'
import {ExternalLink, RightArrow} from "../../lib/icons";

type Props = {
    href: string
    text: string
    external?: boolean
    target?: string
    className?: string
}

const CTALink: FC<Props> = ({href, text, className, target, external= false}) => {
    return (
        // hash: top => fix scroll top not working when switch page
        <Link href={href} target={target}
              className={`${className} w-fit bg-main dark:bg-mainDark fill-main text-light dark:text-dark inline-flex gap-x-2 items-center rounded-xl color-animation px-4 py-2`}>
            {text}
            {external ? <ExternalLink className="w-4 h-4 text-light dark:text-dark" /> : <RightArrow className="w-4 h-2 text-light dark:text-dark"/>}
        </Link>
    )
}

export default CTALink