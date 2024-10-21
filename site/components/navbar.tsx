import {
  Accordion,
  Badge,
  BasicCard,
  Button,
  H1,
  H2,
  H3,
  H4,
  Input,
  Textarea,
} from "@/packages/ui";
import { GithubIcon, MessageCircle, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 absolute top-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
          <Link href="/" legacyBehavior>
            <a className="text-white text-xl ml-3">
              <H3>Host Em</H3>
            </a>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/about" legacyBehavior>
            <a className="text-white">About</a>
          </Link>
          <Link href="/services" legacyBehavior>
            <a className="text-white">Services</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="text-white">Contact</a>
          </Link>
        </div>
        <div className="md:hidden">
          <Button onClick={toggleMenu}>
            <Menu className="text-black" />
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link href="/about" legacyBehavior>
            <a className="block text-white">About</a>
          </Link>
          <Link href="/services" legacyBehavior>
            <a className="block text-white">Services</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="block text-white">Contact</a>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
