import Link from "next/link";
import {FC} from "react";
import Author from "../../lib/types/author";
import Image from "next/image";
import {Section} from "../../lib/types/post";

type Props = {
    title: string;
    date: string;
    author: Author;
    sections: Section[];
};

const PostHeader: FC<Props> = ({title, date, author, sections}) => {
    return (
        <section className="flex flex-col md:flex-row w-full items-center mb-12">
            <div
                className="text-light dark:text-dark py-4 px-8 rounded-lg w-full md:w-[60%] bg-main dark:bg-mainDark whitespace-pre-wrap break-all">
                <h1 className="xl-text">{title}</h1>
                <div className="flex flex-row mt-2 gap-x-1 items-center">
                    <div className="w-12 h-12 rounded-full border-[1px] border-light dark:border-dark">
                        <Image
                            src={author?.picture}
                            className="rounded-full w-full h-full"
                            width="1"
                            height="1"
                            alt={author?.name}/>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="md-text">{author?.name}</h2>
                        { /* TODO: Change date format display */}
                        <p className="xs-text opacity-80">Published on {date}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PostHeader;
