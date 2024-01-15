import React from 'react'
import FbIcon from './icons/FbIcon'
import LinkInIcon from './icons/LinkInIcon'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="w-full flex flex-col p-16 gap-16 bg-prussianBlue rounded-b-2xl ">
    <div className="flex flex-col text-md font-medium text-lightGrey gap-2">
      <p className="font-bold text-white">Aman Head Office </p>
      <p> Kurdistan International Insurance Company </p>
      <p> KIB Building </p>
      <p> Gulan Street </p>
      <p> 44000 Erbil </p>
      <p> Iraq </p>
    </div>
    <div className="flex gap-[128px]">
      <div className="flex flex-col text-md font-medium text-lightGrey gap-2">
        <p className="font-bold text-white">Follow Us </p>
        <div className="flex gap-4">
          <a href="">
            <FbIcon />
          </a>
          <a href="">
            <LinkInIcon />
          </a>
        </div>
      </div>

      <div className="flex flex-col text-md font-medium text-lightGrey gap-2">
        <p className="font-bold text-white">Company </p>
        <p> About Us </p>
        <p> Board & Executive Team </p>
        <p> Partners </p>
      </div>

      <div className="flex flex-col text-md font-medium text-lightGrey gap-2">
        <p className="font-bold text-white">Careers </p>
        <p> Current Job Openings </p>
      </div>
    </div>

    <div className="flex justify-between">
      <div className="flex gap-8 text-white text-md font-medium">
        <Link href={"#"}>Staff Login</Link>
        <Link href={"#"}>Privacy Policy</Link>
        <Link href={"#"}>Sitemap</Link>
      </div>
      <div className="text-white text-md font-medium">
        © Copyright KIIC 2024
      </div>
    </div>
  </div>
  )
}

export default Footer