import type { FC } from "react";
import { Fragment } from "react";
import { FiMenu } from "react-icons/fi";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
const { themeChange } = require("theme-change"); //importing this way to ignore typescript warning

const Navbar: FC = () => {
  const { t: tc } = useTranslation("common");

  useEffect(() => {
    themeChange(false); //setup the theme change library
  }, []);

  const NavBarLinkList: FC = () => {
    return (
      <Fragment>
        <li>
          <a>{tc`home`}</a>
        </li>
        <li>
          <a>{tc`aboutme`}</a>
        </li>
        <li>
          <a>{tc`projects`}</a>
        </li>
      </Fragment>
    );
  };

  return (
    <nav className="drawer drawer-end top-0 fixed z-50">
      <input id="drawer-util" type="checkbox" className="drawer-toggle z-50" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-300">
          <div className="flex-1 px-2 mx-2 justify-end lg:justify-start">
            {tc`metaTitle`}
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              <button
                className="btn btn-lg btn-ghost"
                data-set-theme="light"
                data-act-class="text-success"
              >
                {/*  PLACEHOLDERS */}LIGHT
              </button>
              <button
                className="btn btn-lg btn-ghost"
                data-set-theme="dracula"
                data-act-class="text-success"
              >
                DRACULA
              </button>
              <button
                className="btn btn-lg btn-ghost"
                data-set-theme="dark"
                data-act-class="text-success"
              >
                DARK
              </button>
              <NavBarLinkList />
            </ul>
          </div>

          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              className="btn btn-square btn-ghost swap swap-rotate rounded-xl"
            >
              <FiMenu className=" text-2xl" />
            </label>
          </div>
        </div>
      </div>
      <div className="drawer-side mt-10">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          <NavBarLinkList />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
