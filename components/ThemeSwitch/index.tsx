'use client';

import {FC, useState} from "react";
import {Moon, Sun} from "../../lib/icons";
import switchTheme from "../../lib/utils/theme";

const ThemeSwitch: FC = () => {

    const [isDarkMode, toggleDarkMode] = useState(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))

    return (
        <button className="border-[0.5px] border-dark cursor-pointer dark:border-light w-10 h-10 px-2 py-1 rounded-lg"
                onClick={() => {
                    switchTheme()
                    toggleDarkMode(!isDarkMode)
                }
                }>
            {
                isDarkMode ?
                    <Sun className="w-full h-full" /> :
                    <Moon className="w-full h-full -rotate-45" />
            }
        </button>
    )
}

export default ThemeSwitch