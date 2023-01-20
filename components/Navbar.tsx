import Image from "next/image";
import Link from "next/link";
import {
    AiFillLinkedin,
    AiOutlineMenu,
    AiOutlineClose
  } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";

import {GiCommercialAirplane} from "react-icons/gi"  
import {SiGooglescholar} from "react-icons/si";

export const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <>
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <Link href="#">
              <h1 className="font-burtons text-xl">Daniel Lobo</h1>
            </Link>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </>
    );
};
