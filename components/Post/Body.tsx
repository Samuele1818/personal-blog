import {FC} from "react";
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import rehypeToc from '@jsdevtools/rehype-toc'
import rehypePrismPlus from 'rehype-prism-plus'
import ReactMarkdown from "react-markdown";
import "./Body.css"
import "./CodeThemes/vs-code-dark-plus.css"
import {h, s} from "hastscript";

type Props = {
    content: string;
};

const PostBody: FC<Props> = ({content}) => {
        return <ReactMarkdown
            rehypePlugins={[rehypeSlug,
                [rehypeAutolinkHeadings, {
                    behavior: 'wrap',
                    properties: {
                        class: 'autolink-header',
                        ariaHidden: true,
                        tabIndex: -1,
                    },
                }],
                [rehypeToc, {
                    headings: ["h1", "h2"],
                    cssClasses: {
                        toc: "toc",
                        link: "toc-link"
                    }
                }], rehypePrismPlus
            ]
            }
        >
            {
                content
            }
        </ReactMarkdown>
    }
;

export default PostBody;
