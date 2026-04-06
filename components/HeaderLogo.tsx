import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HeaderLogo = () => {
  return (
    <Link href={"/"} prefetch={true}>
      <div className="hidden items-center lg:flex">
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={28}
          height={28}
          className="object-cover"
        />
        <div className="font-semibold text-white text-2xl ml-2.5">Finance</div>
      </div>
    </Link>
  );
};
