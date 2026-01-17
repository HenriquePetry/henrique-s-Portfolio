import { FC } from "react";
import logo from "@/assets/icons/logo.svg";
import Button from "@/components/Button";

const Header: FC = () => {
  return (
    <div className="border-b-[1px] border-white/10">
      <div className="max-w-screen-2xl m-auto">
        <div className="flex justify-between items-center px-4 sm:px-6">
          <div className="flex items-center gap-12">
            <img 
              src={logo.src || logo} 
              alt="Logo" 
              className="h-20 w-auto"
            />

            <nav className="hidden md:flex">
              <ul className="flex gap-8">
                <li className="cursor-pointer hover:text-primary transition-colors">
                  Home
                </li>
                <li className="cursor-pointer hover:text-primary transition-colors">
                  About
                </li>
                <li className="cursor-pointer hover:text-primary transition-colors">
                  Portfolio
                </li>
                <li className="cursor-pointer hover:text-primary transition-colors">
                  Education
                </li>
              </ul>
            </nav>

            <Button variant="outline" className="ml-auto md:ml-0">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;