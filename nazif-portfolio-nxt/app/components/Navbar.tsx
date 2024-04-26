"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine,  } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io"
import Link from "next/link";


interface NavContent {
  name: string;
  value: string;
}

const NAV_CONTENTS: Array<NavContent> = [
  { name: "Home", value: "" },
  { name: "Blog", value: "blog" },
  { name: "Projects", value: "projects" },
  { name: "Contact", value: "contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [navbar, setNavbar] = React.useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const isDarkMode = theme === 'dark' || (theme === 'system' && systemTheme === 'dark');

  const handleThemeToggle = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
      <header className="w-full mx-auto px-4 sm:px-20 top-0 shadow bg-white dark:bg-black 
      dark:border-b dark:border-black">
        <div className="justify-between md:items-center md:flex">
          <div>

            <div className="md:py-5 md:block">
              <h2 className="text-2xl font-bold">Nazif Ishrak</h2>
            </div>

            <div>
              <button>
                {navbar? <IoMdClose/> : <IoMdMenu/> }
              </button>

            </div>




          </div>
          <div className="md:flex md:space-x-6">
            {NAV_CONTENTS.map((item, id) => (
                // <a key={id} href={`/${item.value}`}>
                //   {item.name}
                // </a>
                <Link key={id} href={`/${item.value}`}>{item.name}</Link>
            ))}
            <button onClick={handleThemeToggle} className="bg-slate-100 p-2 rounded-xl">
              {isDarkMode ? (
                  <RiSunLine size={25} color="black" />
              ) : (
                  <RiMoonFill size={25} color="black" />
              )}
            </button>
          </div>
        </div>
      </header>
  );
};
