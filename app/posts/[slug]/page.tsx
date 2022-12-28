import PostHeader from '../../../components/Post/Header'
import PostBody from '../../../components/Post/Body'
import {getPostContentBySlug} from "../../../lib/utils/markdown";

/* Cannot make page statically because of local storage access to implement dark mode
export const generateStaticParams = async () => {
    const posts = getPostsMetadata();
    return posts.map((post) => ({
        slug: post.slug
    }));
};
*/

const Post = ({params}: any) => {
    const {slug} = params;
    const post = getPostContentBySlug(slug);

    const {
        title,
        imageUrl,
        sections,
        date,
        author
    } = post.data

    return (
        <>
            <article>
                <PostHeader
                    sections={sections}
                    title={title}
                    date={date}
                    author={author}
                />
                <PostBody content={post.content}/>
            </article>
        </>
    )
}

export default Post