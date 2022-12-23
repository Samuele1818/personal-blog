import type {NextPage} from 'next'
import {getPostsMetadata} from "../../lib/utils/markdown";
import Card from "../../components/Card";

const Posts: NextPage = () => {
    const postsMetadata = getPostsMetadata();

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {
                postsMetadata.map((post, index) => {
                    return (
                        <Card key={index} {...post} />
                    )
                })
            }
        </section>
    )
}

export default Posts