import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-10 pyj-3 border-b border-white/7 backdrop-blur-xl ">
      <div>
        <Link href="/">
          <Image src="/logo.png" width={100} height={40} alt="Lichen"></Image>
        </Link>
      </div>
      <div>Links</div>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Header;
