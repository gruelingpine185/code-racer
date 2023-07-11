"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { siteConfig } from "@/config/site";
import { MobileNav } from "./mobile-nav";
import { MainNav } from "./main-nav";
import { UserDropdown } from "./user-dropdown";

export function Header() {
  return (
    <header className="bg-background/90 backdrop-blur flex sticky top-0 z-40 w-full border-b-2 border-yellow-500">
      <div className="container flex h-20 items-center w-full space-x-4 sm:space-x-0">
        <div className="flex-1">
          <MainNav items={siteConfig.mainNav} />
        </div>
        <MobileNav />
        <nav className="hidden md:flex items-center space-x-4">
          <UserDropdown />
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}

export default Header;