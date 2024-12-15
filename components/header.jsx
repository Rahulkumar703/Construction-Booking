import { Calendar, Mail, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-black md:p-4 md:py-2 sm:p-2 p-1 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            alt="Bevarc"
            width={128}
            height={137}
            className="aspect-[128/137] w-16 h-auto"
          />
        </Link>
        <nav className="text-white">
          <ul className="flex md:gap-6 gap-4">
            <li>
              <Link
                href={"#services"}
                className="flex items-center gap-2 hover:text-yellow-300 transition"
              >
                <Wrench className="w-4 h-4" />
                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link
                href={"#contact"}
                className="flex items-center gap-2 hover:text-yellow-300 transition"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/booking"}
                className="flex items-center gap-2 hover:text-yellow-300 transition"
              >
                <Calendar className="w-4 h-4" />
                <span>Booking</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
