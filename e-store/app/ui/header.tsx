"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeaderComponent() {
  return (
    <header className="bg-gray-800 text-white text-sm flex items-center justify-center">
      <div className="flex items-center justify-between w-full py-4 mx-4">
        <Link href={"/"}><Image src="/logo.png" alt="logo" width={48} height={48} /></Link>
        
        <ul className="flex gap-6 items-center uppercase *:hover:cursor-pointer">
          <li className="hover:text-gray-300">
            <Link href={"/men"}>men</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link href={"/women"}>women</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link href={"/kids"}>kids</Link>
          </li>
        </ul>
        <div>Login</div>
      </div>
    </header>
  );
}
