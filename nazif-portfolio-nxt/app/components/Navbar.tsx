"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";


interface NavContent {
  name: string;
  value: string;
}

const NAV_CONTENTS: Array<NavContent> = [
  { name: "Home", value: "home" },
  { name: "Blog", value: "blog" },
  { name: "Projects", value: "projects" },
];

export const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div className="md:py-5 md:block">
          <h2 className="text-2xl font-bold">Nazif Ishrak</h2>
        </div>
        <div className="md:flex md:space-x-6">
          {NAV_CONTENTS.map((item, id) => (
            <a key={id} href={`/${item.value}`}>
              {item.name}
            </a>
          ))}
          {currentTheme === "dark" ? (
            <button onClick={() => setTheme('light')} className="bg-slate-100 p-2 rounded-xl">
              <RiSunLine size={25} color="black" />
            </button>
          ) : (
            <button onClick={() => setTheme('dark')} className="bg-slate-100 p-2 rounded-xl">
              <RiMoonFill size={25} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

