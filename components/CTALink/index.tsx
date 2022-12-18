import {FC} from 'react'
import Link from 'next/link'
import {ExternalLink} from "../../lib/icons";

type Props = {
    link: string
    text: string
    className?: string
}

const CTALink: FC<Props> = ({link, text, className}) => {
    return (
        <Link href={link} target="_blank"
              className={`${className} w-fit bg-main dark:bg-mainDark fill-main text-light dark:text-dark inline-flex gap-x-2 items-center rounded-xl color-animation px-4 py-2`}>
            {text}
            <ExternalLink className="w-4 h-4 text-light dark:text-dark" viewBox="0 0 50 50"/>
        </Link>
    )
}

export default CTALink