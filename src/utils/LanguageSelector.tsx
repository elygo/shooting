import { Fragment, useContext } from "react";
import { useTranslation } from "react-i18next";
import { availableLanguages } from "../i18n";
import { Menu, Transition } from "@headlessui/react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { ThemeContext } from "../theme/ThemeContext";

/**
 * For filtering classes
 * @param {string[]} classes
 * @returns classes
 */
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Language selector used i18n
 * @returns JSX element
 */
export default function LanguageSelector() {
  const { i18n } = useTranslation<string>();
  const { theme, setTheme } = useContext(ThemeContext);

  /**
   * Change language function
   * @param e target language short version
   */
  const changeLang = (e: any) => {
    const language = e.target.innerText;
    i18n.changeLanguage(e.target.innerText);
    localStorage.setItem("i18nextLng", language);
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="">
        <GlobeAltIcon className="h-8 w-8 cursor-pointer p-1 rounded-full dark:hover:bg-[#141414] dark:hover:text-white hover:bg-[#cecece] hover:text-black" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute right-0 z-50 mt-2 w-12 origin-top-right  ${
            theme !== "dark"
              ? "bg-white"
              : "bg-[#141414] border border-[#242424]"
          } rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer`}
        >
          <Menu.Item
            disabled={i18n.language === availableLanguages[0] ? true : false}
          >
            {({ active }) => (
              <span
                onClick={changeLang}
                className={classNames(
                  active
                    ? "text-white dark:bg-[#e6b172] dark:text-black hover:bg-[#242424]"
                    : "dark:text-white",
                  "block px-4 py-2 text-sm"
                )}
              >
                {availableLanguages[0]}
              </span>
            )}
          </Menu.Item>
          <Menu.Item
            disabled={i18n.language === availableLanguages[1] ? true : false}
          >
            {({ active }) => (
              <span
                onClick={changeLang}
                className={classNames(
                  active
                    ? "text-white dark:bg-[#e6b172] dark:text-black hover:bg-[#242424]"
                    : " dark:text-white",
                  "block px-4 py-2 text-sm"
                )}
              >
                {availableLanguages[1] === "Cr" ? "Ўз" : availableLanguages[1]}
              </span>
            )}
          </Menu.Item>
          <Menu.Item
            disabled={i18n.language === availableLanguages[2] ? true : false}
          >
            {({ active }) => (
              <span
                onClick={changeLang}
                className={classNames(
                  active
                    ? "text-white dark:bg-[#e6b172] dark:text-black hover:bg-[#242424]"
                    : "dark:text-white",
                  "block px-4 py-2 text-sm"
                )}
              >
                {availableLanguages[2]}
              </span>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
