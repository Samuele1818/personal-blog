import {FC} from 'react'
import CTALink from "../CTALink";
import Metadata from "../../lib/types/post";
import Tag from "../Post/Tag";

const Card: FC<Metadata> = ({title, description, imageUrl, slug, tags}) => {
    return (
        <div className="min-h-fit flex flex-col flex-1 min-w-0 break-words whitespace-pre-wrap rounded-lg shadow-shadow bg-white dark:bg-secondaryDark text-dark dark:text-light">
            <img className="rounded-t-lg bg-cover w-full h-fit max-h-52" src={imageUrl} alt={slug}/>
            <div className="flex flex-col px-6 py-4 h-full">
                <h5 className="lg-text font-medium mb-4">{title}</h5>
                <p className="sm-text line-clamp-3 mb-4">
                    {description}
                </p>
                {
                    tags &&
                    <div className="inline-flex gap-x-2 mb-4">
                        {
                            tags.map((tag, index) => <Tag key={index} tag={tag}/>)
                        }
                    </div>
                }
                <CTALink external text="See more" className="mb-0 mt-auto" href={`/posts/${slug}`}/>
            </div>
        </div>
    )
}

export default Card
