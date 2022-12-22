'use client'
import { FC } from 'react'

const Footer: FC = () => {
  return (
      <footer className="bg-electricViolet w-full py-24 mt-24 text-hintOfRed">
        <div className="w-full flex-align-lg">
          <div className="w-full hr-align-lg lg:w-1/3 px-8 md:px-16 lg:pr-40 xl:pr-52 2xl:pr-64 py-24 flex flex-col px-8 md:px-16">

          </div>
        </div>
        <h1 className="center lg-text mt-24">Copyright © {new Date().getFullYear()} SC</h1>
      </footer>
  )
}

export default Footer
