"use client";

import { cn } from "@/_lib/utils";

const Header = () => {
  return (
    <header className="relative z-30 py-4 px-10 flex items-center w-full flex-grow">
      <div className="w-full">
        <span className="font-bold text-3xl text-white">ECO</span>
      </div>

      <div className="w-full">
        <nav className="flex gap-5 justify-center">
          <HeaderLink href="#">Home</HeaderLink>
          <HeaderLink href="#">About</HeaderLink>
          <HeaderLink href="#">Contact</HeaderLink>
        </nav>
      </div>

      <div className="flex w-full gap-3 justify-end">
        <HeaderButton>Sign In</HeaderButton>
      </div>
    </header>
  );
};

const commonClassName =
  "text-white text-base rounded-full hover:text-black transition-all py-2 px-7";

const HeaderLink = ({
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <button className={cn(commonClassName, "bg-white/15 hover:bg-white")}>
      <a {...props}>{children}</a>
    </button>
  );
};

const HeaderButton = ({
  children,
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(commonClassName, "border border-white hover:bg-white")}
    >
      {children}
    </button>
  );
};

export default Header;
