import { FC, ReactNode } from 'react'

type Props = {
    text: string
    onClick?: () => unknown
    className?: string
    icon?: ReactNode
    isDisabled?: boolean
    isLoading?: boolean
}

const CTA: FC<Props> = ({
                            text,
                            className,
                            icon,
                            onClick,
                            isDisabled = false,
                            isLoading = false,
                        }) => {
    return (
        <button
            disabled={isDisabled || isLoading}
            onClick={onClick}
            className={`${className} text-light bg-main dark:bg-mainDark disabled:opacity-60 inline-flex items-center gap-x-2 w-fit h-fit px-4 py-2 rounded-xl`}>
            {text}
            {icon}
        </button>
    )
}

export default CTA