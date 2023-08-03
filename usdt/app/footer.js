"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#0C0E12] z-20 w-screen bottom-0 absolute lg:min-h-[9.1rem] min-h-[13rem]  lg:flex-row ">
      <div className="flex flex-col lg:flex-row  ">
        <div className=" justify-center self-center mt-4 lg:mr-48 ">
          <Link href="/">
            <h1 className="text-white cursor-pointer hover:scale-105 mt-5 lg:mt-6 lg:ml-8 text-xl font-semibold font-Mono   ">
              the new internet is here
            </h1>
          </Link>
        </div>

        <div className=" flex flex-col lg:flex-row  lg:mt-6  lg:justify-center lg:items-center ">
          <div className="flex  justify-between lg:justify-center  lg:gap-x-4 lg:px-0  gap-x-20 mt-4  px-8 lg:flex-nowrap flex-wrap">
            <div className="Vision ">
              <Link href="/Vision">
                <button className="text-white hover:bg-[#C9FE36] hover:text-inherit text-base font-medium font-Mono">
                  {" "}
                  Vision{" "}
                </button>
              </Link>
            </div>

            <div className=" / ">
              <h1 className="text-slate-500 text-base font-medium font-Mono">
                {" "}
                /{" "}
              </h1>
            </div>

            <div className="Xplorers">
              <Link href="/Xplorers">
                <button className="text-white hover:bg-[#C9FE36] hover:text-inherit text-base font-medium font-Mono">
                  {" "}
                  Xplorers{" "}
                </button>
              </Link>
            </div>

            <div className=" / hidden lg:block">
              <h1 className="text-slate-500 text-base font-medium font-Mono">
                {" "}
                /{" "}
              </h1>
            </div>

            <div className="Startups">
              <Link href="/Startups">
                <button className="text-white hover:bg-[#C9FE36] hover:text-inherit text-base font-medium font-Mono">
                  {" "}
                  Startups{" "}
                </button>
              </Link>
            </div>

            <div className=" / ">
              <h1 className="text-slate-500 text-base font-medium font-Mono">
                {" "}
                /{" "}
              </h1>
            </div>

            <div className="Contact">
              <Link href="/Contact">
                <button className="text-white hover:bg-[#C9FE36] hover:text-inherit text-base font-medium font-Mono">
                  {" "}
                  Contact{" "}
                </button>
              </Link>
            </div>

            <div className=" / hidden lg:block ">
              <h1 className="text-slate-500 text-base font-medium font-Mono">
                {" "}
                /{" "}
              </h1>
            </div>

          </div>

          <div className="flex lg:ml-4 justify-between lg:justify-center  lg:flex-nowrap lg:px-0 lg:gap-x-4 gap-x-16 mt-3  px-8 flex-wrap">
            <div className="Get Started">
              <Link href="/GetStarted">
                <button className="text-white hover:bg-[#C9FE36] hover:text-inherit text-base font-medium font-Mono">
                  {" "}
                  Get Started{" "}
                </button>
              </Link>
            </div>

            <div className=" / ">
              <h1 className="text-slate-500 text-base font-medium font-Mono">
                {" "}
                /{" "}
              </h1>
            </div>

            <div className="Members">
              <Link href="/Members">
                <button className="text-white hover:bg-[#C9FE36] hover:text-inherit text-base font-medium font-Mono">
                  {" "}
                  Members{" "}
                </button>
              </Link>
            </div>

            <div className=" / hidden lg:block">
              <h1 className="text-slate-500 text-base font-medium font-Mono">
                {" "}
                /{" "}
              </h1>
            </div>

            <div className="Upskill">
              <Link href="/Upskill">
                <button className="text-white hover:bg-[#C9FE36] hover:text-inherit text-base font-medium font-Mono">
                  {" "}
                  Upskill{" "}
                </button>
              </Link>
            </div>

            <div className=" / ">
              <h1 className="text-slate-500 text-base font-medium font-Mono">
                {" "}
                /{" "}
              </h1>
            </div>

            <div className="FAQs">
              <Link target="_blank" href="https://capx.club/faqs">
                <button className="text-white hover:bg-[#C9FE36] hover:text-inherit text-base font-medium font-Mono">
                  {" "}
                  FAQs{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
