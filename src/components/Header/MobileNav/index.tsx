import { Disclosure, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import RedesSociales from "../../general/RedesSociales";

interface HeaderProps {
  open: boolean;
  handleClose: () => void;
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -300 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MobileNav = ({ open, handleClose }: HeaderProps) => {
  const handleInicioClick = () => {
    const anchor = document.querySelector("body");
    const offset = 80; // Ajusta el valor del desplazamiento aquí
    // @ts-ignore
    const y = anchor?.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
    handleClose();
  };
  const handleCartaClick = () => {
    const anchor = document.querySelector("#carta");
    const offset = 90; // Ajusta el valor del desplazamiento aquí
    // @ts-ignore
    const y = anchor?.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
    handleClose();
  };

  const handleInfoClick = () => {
    const anchor = document.querySelector("#info");
    const offset = 80; // Ajusta el valor del desplazamiento aquí
    // @ts-ignore
    const y = anchor?.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
    handleClose();
  };

  function handleClickColaboradores() {
    const anchor = document.querySelector("#colaboradores");
    const offset = 100; // Ajusta el valor del desplazamiento aquí
    // @ts-ignore
    const y = anchor?.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
    handleClose();
  }

  console.log(open);
  return (
    <>
      <Transition show={open}>
        {/* Sliding sidebar */}
        <Transition.Child
          className="fixed flex right-0 top-0 w-[180px] z-50 h-screen"
          enter="transition ease-in-out duration-500 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-500 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div
            id="sidebar"
            className={`fixed flex justify-between bg-opacity-100 right-0 top-0 w-[180px] h-screen bg-white pt-12 p-8 z-50 py-24`}
          >
            <div className="flex flex-col flex-grow justify-between">
              <ul className="flex flex-col space-y-3 mb-6">
                <motion.li variants={variants} whileTap={{ scale: 0.9 }}>
                  <p onClick={handleInicioClick} className="cursor-pointer">
                    Inicio
                  </p>
                </motion.li>
                <motion.li variants={variants} whileTap={{ scale: 0.9 }}>
                  <p onClick={handleCartaClick} className="cursor-pointer">
                    Nuestra carta
                  </p>
                </motion.li>
                <motion.li variants={variants} whileTap={{ scale: 0.9 }}>
                  <p
                    onClick={handleClickColaboradores}
                    className="cursor-pointer "
                  >
                    El producto
                  </p>
                </motion.li>
                <motion.li variants={variants} whileTap={{ scale: 0.9 }}>
                  <p onClick={handleInfoClick} className="cursor-pointer">
                    Dónde estamos
                  </p>
                </motion.li>
              </ul>

              <div className="block">
                <p className="text-xs text-black text-center pb-4 uppercase">
                  ¡Síguenos!
                </p>
                <div className="flex gap-4 justify-center">
                  <a
                    href="https://www.instagram.com/pizza_junkal/"
                    target="_blank"
                  >
                    <svg
                      className={`w-8 h-8 fill-black hover:fill-gray-400`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.facebook.com/p/Pizza-Junkal-100083536950028/?_rdr"
                    target="_blank"
                  >
                    <svg
                      className={`w-8 h-8 fill-black hover:fill-gray-400`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Transition.Child>
        <Transition.Child
          enter="transition-opacity ease-linear duration-100 z-50"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            onClick={handleClose}
            className={`"w-full h-full fixed bg-black opacity-80 z-10 inset-0`}
          ></div>
        </Transition.Child>
      </Transition>
    </>
  );
};

export default MobileNav;
