import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <img src="/logo.svg" alt="logo" />
        </Link>
        <img src="/headerContent.svg" alt="img" />
      </div>
    </>
  );
};

export default Header;
