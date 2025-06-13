import Link from "next/link";
import Menu from "./menu";
import BookPopUp from "../book-popup";
import Logo from "../logo";

const Header = () => {
  return (
    <header className="w-full border-b fixed top-0 z-50 bg-[#FFF]">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Logo height={88} width={88} />
            {/* <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span> */}
          </Link>
        </div>
        <div className="flex flex-row">
          <BookPopUp />
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
