import path from 'path';
import fs from 'fs';

export const getPosts = () => {
    const jsonDirectory = path.join(process.cwd(), 'posts');

    return fs.readdirSync(jsonDirectory)
}

export const getStaticPost = (name: string) => {
    //Find the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), 'posts');

    return fs.readFile(jsonDirectory + "/" + name, 'utf8')
}
