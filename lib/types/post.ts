import type Author from './author'

type Section = {
  title: string
  sections: Section[]
}

type Metadata = {
  slug: string
  title: string
  date: string
  description: string
  author: Author
  imageUrl: string
  sections: Section[]
}

export type { Section } 

export default Metadata