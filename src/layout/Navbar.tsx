import { FC, useContext, useState } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import "../styles/styles.scss";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../utils/LanguageSelector";
import { setActiveMenuIndex } from "../redux/dataStored/data.stored";
import { useDispatch, useSelector } from "react-redux";
import flag from "../assets/flag.png";

interface IMenu {
  id: number;
  title: string;
  tooltip: string;
}

const Navbar: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { t } = useTranslation<string>();
  const activeMenuIndex = useSelector(
    (state: any) => state.dashboard.activeMenuIndex
  );

  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const Menus: IMenu[] = [
    {
      id: 1,
      title: t("home"),
      tooltip: t("home"),
    },
    {
      id: 2,
      title: t("about"),
      tooltip: t("about"),
    },
    {
      id: 3,
      title: t("news"),
      tooltip: t("news"),
    },
    {
      id: 4,
      title: t("cooperation"),
      tooltip: t("cooperation"),
    },
    {
      id: 5,
      title: t("contact"),
      tooltip: t("contact"),
    },
  ];

  const handleThemeChange = () => {
    const isCurrentDark = theme === "dark";
    setTheme(isCurrentDark ? "light" : "dark");
    localStorage.setItem("default-theme", isCurrentDark ? "light" : "dark");
    if (isCurrentDark) {
      document.getElementsByTagName("html")[0].classList.remove("dark");
    } else {
      document.getElementsByTagName("html")[0].classList.add("dark");
    }
  };

  const handleMenuClick = (index: number) => {
    dispatch(setActiveMenuIndex(index));
  };

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="bg-white dark:bg-[#242424] h-24 border-gray-200 px-4 lg:px-6">
        <div className="max-w-[1364px] mx-auto h-full flex items-center justify-between">
          <div className="flex gap-4">
            <img src={flag} width={4} height={36} />
            <div className="w-[270px] font-bold">
              {t("federation").toUpperCase()}
            </div>
          </div>
          <ul className="flex flex-wrap justify-between items-center mx-auto max-lg:hidden">
            {Menus.map((menu: IMenu, index: number) => (
              <li key={index} className={`cursor-pointer`}>
                <div
                  className={`navbar-menu__item-container flex gap-x-1 items-center h-24 px-4 hover:bg-[#cecece] dark:hover:bg-bodyBackgroundColor ${
                    index === activeMenuIndex
                      ? "bg-[#cecece] dark:bg-[#141414]"
                      : ""
                  } `}
                  onClick={() => handleMenuClick(index)}
                >
                  <div
                    className={`navbar-menu__item-container-title text-base font-medium flex-1 duration-200`}
                  >
                    {menu.title ? menu.title : ""}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex h-24 items-center">
            <div>
              <button onClick={handleThemeChange}>
                {theme === "dark" ? (
                  <SunIcon className="h-8 w-8 pointer hover:bg-[#141414] rounded-full p-1" />
                ) : (
                  <MoonIcon className="h-8 w-8 pointer hover:bg-[#cecece] hover:text-black rounded-full p-1" />
                )}
              </button>
            </div>
            <div>
              <LanguageSelector />
            </div>
            <div className="lg:hidden h-[39px]" onClick={handleShowMenu}>
              <Bars3Icon className="h-8 w-8 pointer  hover:bg-[#cecece] dark:hover:bg-[#141414] text dark:hover:text-white rounded-full p-1 relative" />
            </div>
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="absolute top-0 right-0 z-30 w-1/3 h-full max-sm:w-full dark:bg-[#343434] bg-[#FFEAD1]">
          <div className="w-full p-2 py-4 flex justify-end">
            <button
              type="button"
              onClick={() => {
                setShowMenu(false);
              }}
            >
              <XMarkIcon className="h-6 w-6 pointer  hover:bg-[#cecece] dark:hover:bg-[#141414] text dark:hover:text-white relative" />
            </button>
          </div>
          <ul className="">
            {Menus.map((menu: IMenu, index: number) => (
              <li key={index} className={`text-sm items-center cursor-pointer`}>
                <div
                  className={`navbar-menu__item-container flex gap-x-1 items-center h-12 px-4 hover:bg-[#cecece] dark:hover:bg-bodyBackgroundColor ${
                    index === activeMenuIndex
                      ? "bg-[#cecece] dark:bg-[#141414]"
                      : ""
                  } `}
                  onClick={() => handleMenuClick(index)}
                >
                  <div
                    className={`navbar-menu__item-container-title text-base font-medium flex-1 duration-200`}
                  >
                    {menu.title ? menu.title : ""}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
