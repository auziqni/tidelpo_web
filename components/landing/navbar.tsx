import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="relative h-[80px] bg-black flex items-center justify-between px-14">
      <div id="logo" className="h-[55px] w-[213px] relative  ">
        <Image
          src={`/logo.png`}
          alt="Next.js logo"
          //   height={55}
          //   width={213}
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      <div>
        <ul className=" text-white flex items-center gap-4">
          <li>
            <a href="#beranda">Beranda</a>
          </li>
          <li>
            <a href="#layanan">Layanan</a>
          </li>
          <li>
            <a href="#hubungi">Hubungi Kami</a>
          </li>
          <li>
            <a href="#daftar">Daftar</a>
          </li>
          <li>
            <button className="text-black py-3 px-7 bg-accentyellow rounded-sm">
              {" "}
              Masuk
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
