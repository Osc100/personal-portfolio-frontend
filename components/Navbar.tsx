import type { FC } from "react";
import { Fragment } from "react";
import { FiMenu, FiSettings } from "react-icons/fi";
import { IoSettings } from "react-icons/io5";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
const { themeChange } = require("theme-change"); //importing this way to ignore typescript warning
import { RadioGroup } from '@headlessui/react';

const availableThemes = [
  "dark",
  "light",
  "dracula",
  "cyberpunk",
  "synthwave",
  "luxury",
  "pastel",
];

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
    <nav className=" navbar bg-base-200">
      <h1 className=" text-secondary">{tc`metaTitle`}</h1>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          <div className="dropdown">
            <label tabIndex={0} className="btn">
              <IoSettings className=" text-3xl swap swap-rotate" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {availableThemes.map((theme, index) => {
                return (
                  <button
                    key={`${theme}-${index}`}
                    className="btn btn-lg btn-ghost"
                    data-set-theme={theme}
                    data-act-class="text-success"
                  >
                    {theme.toUpperCase()}
                  </button>
                );
              })}
            </ul>
          </div>

          <NavBarLinkList />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
