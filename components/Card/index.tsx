import {FC} from 'react'
import CTALink from "../CTALink";
import Metadata from "../../lib/types/post";

const Card: FC<Metadata> = ({title, description, imageUrl, slug}) => {
    return (
        <div className="md:max-w-[45%] min-h-fit flex flex-col break-words whitespace-pre-wrap rounded-lg shadow-shadow bg-white dark:bg-secondaryDark text-dark dark:text-light">
            <img className="rounded-t-lg bg-cover w-full h-fit max-h-52" src={imageUrl} alt={slug}/>
            <div className="flex flex-col px-6 py-4 h-full">
                <h5 className="lg-text font-medium mb-4">{title}</h5>
                <p className="sm-text line-clamp-3 mb-8">
                    {description}
                </p>
                <CTALink text="See more" className="mb-0 mt-auto" link={`/posts/${slug}`}/>
            </div>
        </div>
    )
}

export default Card
