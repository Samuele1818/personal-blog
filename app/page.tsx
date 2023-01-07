import {PhilosophicIllustration, RightArrow} from '../lib/icons'
import Card from "../components/Card";
import { getTwoMoreRecentPost } from "../lib/utils/markdown";
import CTALink from "../components/CTALink";
import Link from "next/link";

const Home = () => {
    const postMetadata = getTwoMoreRecentPost();

    return (
        <>
            <section className="flex flex-col lg:flex-row">
                <div className="flex-col flex lg:max-w-[400px] xl:max-w-[450px] 2xl:max-w-[600px] hr-align-lg">
                    <h1 className="xl-text">Read interesting articles written by interesting people</h1>
                    <h2 className="lg-text mt-4">NoBounds is a blog on you can read articles on a variety of topics</h2>
                    <CTALink href="#posts"
                         className="mt-8 hr-align-lg font-bold px-6 p-4"
                         text="View posts"/>
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
                <div className="mt-8 flex flex-col justify-between gap-y-12 md:gap-x-8 md:gap-y-0 md:items-stretch md:justify-between md:flex-row">
                    {
                        postMetadata.map((post) => (
                            <Card key={post.slug} {...post}/>
                        ))
                    }
                </div>
                <Link href="posts" className="mx-auto mt-12 bg-white dark:bg-secondaryDark flex flex-col justify-center rounded-lg px-6 py-6">
                    <p className="md-text">See all</p>
                    <RightArrow className="w-4 h-2 mt-2 mx-auto" />
                </Link>
            </section>
        </>
    )
}

export default Home
