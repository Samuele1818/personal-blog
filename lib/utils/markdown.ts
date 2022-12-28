import fs from 'fs'
import matter from "gray-matter";
import Metadata from "../types/post";
import {getPosts} from "./staticData";

const getPostsMetadata = (): Metadata[] => {
  const files = getPosts()
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
    return markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`/posts/${fileName}`, "utf8");
      const matterResult = matter(fileContents);

      return {
          slug: fileName.replace(".md", ""),
          title: matterResult.data.title,
          date: matterResult.data.date,
          description: matterResult.data.description,
          imageUrl: matterResult.data.imageUrl,
          sections: matterResult.data.sections,
          author: matterResult.data.author
      };
  });
};

const getPostBySlug = (slug: string) => {
    const folder = "/posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    return matter(content)
};

const getTwoMoreRecentPost = () => {
    const posts = getPostsMetadata()

    posts.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
    })

    return [posts[posts.length - 1], posts[posts.length - 2]]

}

export { getPostBySlug, getTwoMoreRecentPost, getPostsMetadata }
