'use client'

import { useEffect, useState } from "react";
import './styles.css';
import MobileNav from "./MobileNav";
import { motion } from "framer-motion"
import { debounce } from "../../../helpers";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -300 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};


const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [headerOpacity, setHeaderOpacity] = useState(1);
    const [open, setOpen] = useState(false)

    function handleClickCarta() {
        const anchor = document.querySelector("#carta");
        const offset = 100; // Ajusta el valor del desplazamiento aquí
        // @ts-ignore
        const y = anchor?.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }

    function handleClickInfo() {
        const anchor = document.querySelector("#info");
        const offset = 100; // Ajusta el valor del desplazamiento aquí
        // @ts-ignore
        const y = anchor?.getBoundingClientRect()?.top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }

    function handleClickInicio() {
        const anchor = document.querySelector("body");
        const offset = 80; // Ajusta el valor del desplazamiento aquí
        // @ts-ignore
        const y = anchor?.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }

    function handleClickColaboradores() {
        const anchor = document.querySelector("#colaboradores");
        const offset = 110; // Ajusta el valor del desplazamiento aquí
        // @ts-ignore
        const y = anchor?.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }

    const handleCloseClick = () => {
        setOpen(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled((window.scrollY > 0))
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (<>
        <header className={`${scrolled ? '-translate-y-10 md:-translate-y-16 ' : 'translate-y-0 '} fixed transition transform duration-300`} >
            <div className={`flex justify-end items-center px-2 py-2 `}>
                <div className="flex flex-col items-end">
                    <a href="tel:943265863" className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 fill-green-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                            <path d="M15 7a2 2 0 0 1 2 2"></path>
                            <path d="M15 3a6 6 0 0 1 6 6"></path>
                        </svg>

                        <h6 className="text-xs sm:text-sm font-semibold flex text-white"><span className="font-light mr-1">+34</span> 943 26 58 63</h6>
                    </a>
                    <a href="mailto:unaicanales@gmail.com" className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" strokeWidth="0" fill="currentColor"></path>
                            <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" strokeWidth="0" fill="currentColor"></path>
                        </svg>

                        <h6 className="text-xs sm:text-sm font-medium flex  text-white">pizzeriajunkal@gmail.com</h6>
                    </a>
                </div>

            </div>
            <div className={`flex transition duration-300 justify-between items-center px-4 md:px-12 pt-2 pb-8 md:py-8`}>
                <div>
                    <div className="flex items-center cursor-pointer" onClick={handleClickInicio}>
                        <img
                            className="h-10 w-10 md:h-14 md:w-14"
                            src="images/logo.svg"
                            alt="Logo Pizzeria Junkal Irun"
                        />
                        <div className="flex flex-col px-4">
                            <h1 className="text-2xl -mb-2 md:text-2xl lg:text-3xl font-bold text-white">Pizzería Junkal</h1>
                            <h6 className="text-xs sm:text-sm font-thin flex text-white">Es otra historia</h6>



                        </div>

                    </div>

                </div>

                <div className="flex">
                    <div className="">

                    </div>
                </div>
                <nav className="hidden sm:flex">
                    <ul className="hidden lg:flex lg:ml-14">
                        <motion.li
                            className="px-6"
                            variants={variants}
                            whileTap={{ scale: 0.9 }}
                        >
                            <p
                                onClick={handleClickInicio}
                                className="cursor-pointer sm:uppercase text-white hover:underline "
                            >
                                INICIO
                            </p>
                        </motion.li>
                        <motion.li
                            className="px-6"

                            variants={variants}
                            whileTap={{ scale: 0.9 }}
                        >
                            <p
                                onClick={handleClickCarta}
                                className="cursor-pointer sm:uppercase text-white hover:underline"
                            >
                                NUESTRA CARTA
                            </p>
                        </motion.li>
                        <motion.li
                            className="px-6"
                            variants={variants}
                            whileTap={{ scale: 0.9 }}
                        >
                            <p
                                onClick={handleClickColaboradores}
                                className="cursor-pointer sm:uppercase text-white  hover:underline"
                            >
                                COLABORADORES
                            </p>
                        </motion.li>
                        <motion.li
                            className="px-6"
                            variants={variants}
                            whileTap={{ scale: 0.9 }}
                        >
                            <p
                                onClick={handleClickInfo}
                                className="cursor-pointer sm:uppercase text-white hover:underline"
                            >
                                DÓNDE ESTAMOS
                            </p>
                        </motion.li>
                    </ul>
                </nav>
                <div className="flex justify-center items-center lg:hidden">
                    <button
                        onClick={debounce(() => {
                            console.log("click");

                            setOpen(true)
                        }, 150)}
                        aria-expanded={open}
                        aria-controls="sidebar"
                        aria-label="Open Menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-white" viewBox="0 0 24 24"><path d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z" /></svg>
                    </button>
                </div>

            </div>

        </header >
        <MobileNav open={open} handleClose={handleCloseClick} />
    </>
    )
}

export default Header;