import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed flex items-center py-5 bg-main-beige text-main-gray w-screen h-24 text-[18px]">
      <Image
        className="mx-10 cursor-pointer hover:text-black"
        src={"/imges/gyg_logo.png"}
        alt=""
        width={90}
        height={100}
      />
      <Link
        href="/"
        className="px-7 cursor-pointer hover:text-black duration-700 ease-in-out"
      >
        홈
      </Link>
      <Link
        href="/community"
        className="px-7 cursor-pointer hover:text-black transition-all duration-700 ease-in-out"
      >
        커뮤니티
      </Link>
      <Link
        href="/shopping"
        className="px-7 cursor-pointer hover:text-black transition-all duration-700 ease-in-out"
      >
        쇼핑
      </Link>
      <Link
        href="/ranking"
        className="px-7 cursor-pointer hover:text-black transition-all duration-700 ease-in-out"
      >
        랭킹
      </Link>
      <div className="w-2/5"></div>
      <Link
        href="/login"
        className="px-7 cursor-pointer hover:text-black transition-all duration-700 ease-in-out"
      >
        로그인
      </Link>
      <Link
        href="/signup"
        className="px-7 cursor-pointer hover:text-black transition-all duration-700 ease-in-out"
      >
        회원가입
      </Link>
    </header>
  );
};

export default Header;
