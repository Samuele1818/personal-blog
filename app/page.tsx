import type {NextPage} from 'next'
import {PhilosophicIllustration} from '../lib/icons'
import Card from "../components/Card";
import { getTwoMoreRecentPost } from "../lib/utils/markdown";
import CTALink from "../components/CTALink";

const Home: NextPage = () => {
    const postMetadata = getTwoMoreRecentPost();

    return (
        <>
            <section className="flex flex-col lg:flex-row ">
                <div className="flex-col flex lg:max-w-[400px] xl:max-w-[450px] 2xl:max-w-[600px] hr-align-lg">
                    <h1 className="xl-text">Read blog articles about</h1>
                    <h2 className="lg-text mt-4">In this blog you can find</h2>
                    <CTALink link="#posts"
                         className="mt-8 hr-align-lg font-bold"
                         text="View projects"/>
                </div>
                <div
                    className="relative isolate mx-auto mt-16 lg:mt-0 lg:-mr-[10%] w-full h-full md:max-w-[450px] md:h-fit">
                    <div
                        className="absolute top-[10%] left-[15%] w-[90%] h-[80%] -z-10 rounded-xl shadow-shadow bg-opacity-40 bg-[#50B56F]"/>
                    <PhilosophicIllustration className="w-full h-full"/>
                </div>
            </section>
            <section id="posts" className="mt-24 w-full flex flex-col">
                <h1 className="lg-text">Latest posts</h1>
                <div className="mt-8 flex flex-col justify-between gap-y-12 md:gap-y-0 md:items-stretch md:justify-between md:flex-row">
                    {
                        postMetadata.map((post) => (
                            <Card key={post.slug} {...post}/>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Home
