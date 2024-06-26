"use client"
import { usePathname } from "next/navigation";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ReactNode } from "react";

interface WrapperLayoutProps {
  children: ReactNode;
}

export default function WrapperLayout({ children }: WrapperLayoutProps) {
  const pathname = usePathname();

  const excludedPaths = ["/sign-in", "/sign-up", /^\/blog\/category\/[^/]+$/];

  const isChangeLayoutPage = excludedPaths.some((path) => {
    if (typeof path === "string") {
      return path === pathname;
    } else if (path instanceof RegExp) {
      return path.test(pathname);
    }
    return false;
  });

  return (
    <>
      {!isChangeLayoutPage && <Header />}
      {children}
      {!isChangeLayoutPage && <Footer />}
    </>
  );
}
