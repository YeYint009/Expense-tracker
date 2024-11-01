"use client";
import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export type NavProps = {
  onSearch : (term : string ) => void;
  searchTerm : string;
}

const Navbar = ({onSearch ,searchTerm} : NavProps) => {
  
  return (
    <div className=" h-24">
      <header className=" max-w-full border-b border-black fixed z-50 flex items-center justify-between container bg-slate-400">
        <div className="h-14 flex items-center ">
          <Link href="#" className="text-2xl font-extrabold text-violet-900">
            Expense Tracker
          </Link>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute h-5 w-5 right-4 bottom-1/3 cursor-pointer"/>
            <Input
              type="text"
              placeholder="Search Expanse ..."
              className="text-pink-700 border-black"
              value={searchTerm}
              onChange={(e)=> onSearch(e.target.value)}
            />
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="flex cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
