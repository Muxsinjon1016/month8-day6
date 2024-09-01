import Link from "next/link";
import React from "react";
import {
  FaRegBell,
  FaRegFileAlt,
  FaBook,
  FaRegBookmark,
  FaCog,
} from "react-icons/fa";

const Subcribe = () => {
  return (
    <>
      <div className="flex items-start justify-between gap-9">
        <div className="w-[20%] p-6 bg-white rounded-[5px]">
          <div className="flex items-center mb-4">
            <FaRegBell className="mr-3 text-blue-700" />
            <Link
              href={"/user/subcribe"}
              className="hover:scale-[1.1] transition-all duration-300 hover:text-blue-700 font-semibold hover:font-bold"
            >
              Обуна бўлиш
            </Link>
          </div>
          <div className="flex items-center mb-4">
            <FaRegFileAlt className="mr-3 text-blue-700" />
            <Link
              href={"/user/wallet"}
              className="hover:scale-[1.1] transition-all duration-300 hover:text-blue-700 font-semibold hover:font-bold"
            >
              Э-Хисоб
            </Link>
          </div>
          <div className="flex items-center mb-4">
            <FaBook className="mr-3 text-blue-700" />
            <Link
              href={"/user/books"}
              className="hover:scale-[1.1] transition-all duration-300 hover:text-blue-700 font-semibold hover:font-bold"
            >
              Китобларим
            </Link>
          </div>
          <div className="flex items-center mb-4">
            <FaRegBookmark className="mr-3 text-blue-700" />
            <Link
              href={"/user/saved"}
              className="hover:scale-[1.1] transition-all duration-300 hover:text-blue-700 font-semibold hover:font-bold"
            >
              Сақланганлар
            </Link>
          </div>
          <div className="flex items-center">
            <FaCog className="mr-3 text-blue-700" />
            <Link
              href={"/user/settings"}
              className="hover:scale-[1.1] transition-all duration-300 hover:text-blue-700 font-semibold hover:font-bold"
            >
              Созламалар
            </Link>
          </div>
        </div>
        <div className="w-[73%]">
          <img src="/subribeContent.svg" alt="img" />
          <div>
            <h3 className="text-gray-500 font-bold text-4xl mx-auto">
              Another contents here
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subcribe;
