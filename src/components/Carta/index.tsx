import { useState } from "react";

import "./styles.css";
import List, { Item } from "./List";
import { motion } from "framer-motion";
import Tabs from "./Tabs";

const pizzas: Item[] = [
  {
    name: "Margarita",
    desc: "Salsa de tomate, mozzarella Fior di latte, parmesano, aceite de oliva y albahaca.",
    desc_eus:
      "Tomate saltsa, mozzarella Fior di latte, parmigiano gazta, oliba olioa eta albahaca.",
    image_path: "/images/carta/pizza_margarita.jpeg",
    price: "10,00 €",
    recommended: true,
  },
  {
    name: "Jamón y Queso",
    desc: "Salsa de tomate, mozzarella Fior di latte, jamón cocido, emmental y orégano.",
    desc_eus:
      "Tomate saltsa, mozzarella Fior di latte, york, emmental eta oreganoa.",
    image_path: "/images/carta/pizza_jamon_y_queso.jpeg",
    price: "11,50 €",
  },
  {
    name: "Karbonara",
    desc: "Mozzarella Fior di Latte, nata, bacon, cebolla pochada, parmesano, pimienta blanca y yema de huevo.",
    desc_eus:
      "Mozzarella Fior di Latte, esne gaina, hirugiharra, tipula potxatua, parmigiano, piper zuria eta gorringoa.",
    image_path: "/images/carta/pizza_carbonara.jpeg",
    price: "12,50 €",
    recommended: true,
  },

  {
    name: "Itsaso",
    desc: "Salsa de tomate, mozzarella Fior di latte, atún, pimiento rojo y cebolla pochada.",
    desc_eus:
      "Tomate saltsa, mozzarella Fior di latte, atuna, piper gorria eta tipula potxatua.",
    image_path: "/images/carta/pizza_itsaso.jpeg",
    price: "13,00 €",
  },
  {
    name: "Barbakoa",
    desc: "Salsa de tomate, mozzarella Fior di latte, carne de ternera, bacon, cebolla y salsa barbacoa.",
    desc_eus:
      "Tomate saltsa, mozzarella Fior di latte, txahala, hirugiharra, tipula eta barbakoa saltsa.",
    image_path: "/images/carta/pizza_barbacoa.jpeg",
    price: "13,00 €",
    recommended: true,
  },
  {
    name: "Cuatro Quesos",
    desc: "Mozzarella Fior di Latte, gorgonzola, ricota y parmesano (salsa de tomate opcional).",
    desc_eus:
      "Mozzarella Fior di Latte, gorgonzola, ricota y parmigiano (tomate saltsa aukerakoa).",
    image_path: "/images/carta/pizza_cuatro_quesos.jpeg",
    price: "13,00 €",
    recommended: true,
  },

  {
    name: "Baserri",
    desc: "Salsa de carrilleras, mozzarella Fior di latte, carrillera de cerdo, pimiento rojo y cremoso de patata.",
    desc_eus:
      "Masailak saltsa, mozzarella Fior di latte, txerri masailak, piper gorria eta patata purea.",
    image_path: "/images/carta/pizza_baserri.jpeg",
    price: "14,00 €",
  },
  {
    name: "Pollo Ali Oli",
    desc: "Mozzarella Fior di Latte, pollo, nata, champiñon, cebolla pochada y salsa ali oli.",
    desc_eus:
      "Mozzarella Fior di Latte, gorgonzola, ricota y parmigiano (tomate aukerakoa).",
    image_path: "/images/carta/pizza_pollo_alioli.jpeg",
    price: "13,00 €",
    recommended: true,
  },
  {
    name: "Ahuntza",
    desc: "Mozzarella Fior di Latte, queso de cabra, bacon, nueces y membrillo.",
    desc_eus:
      "Mozzarella Fior di Latte, ahuntz gazta, hirugiharra, intxaurrak eta irasagarra.",
    image_path: "/images/carta/pizza_ahuntza.jpeg",
    price: "13,00 €",
    recommended: true,
  },
  {
    name: "Junkal",
    desc: "Mozzarella Fior di Latte, crema de langostinos, cebolla, puerros y langostinos.",
    desc_eus:
      "Mozzarella Fior di Latte, ganba krema, tipula, porruak eta ganbak.",
    image_path: "/images/carta/pizza_junkal.jpeg",
    price: "15,00 €",
  },
  {
    name: "Vegana",
    desc: "Salsa de tomate, calabacín, berenjena y pimiento verde asados, cebolla pochada, y salsa romesco",
    desc_eus:
      "Tomate saltsa, kalabazin, alkatxofa, tipula potxatua, piper gorria eta oliba olioa.",
    image_path: "/images/carta/pizza_vegana.jpeg",
    price: "14,00 €",
    recommended: true,
  },
  {
    name: "Bolonia",
    desc: "Salsa de tomate, mozzarella Fior di Latte, mortadela de Bolonia, ricotta y tapenade.",
    desc_eus:
      "Tomate saltsa, mozzarella Fior di Latte, bologna mortadela, ricotta eta tapenade.",
    image_path: "/images/carta/pizza_bolonia.jpeg",
    price: "14,00 €",
    recommended: true,
  },
  {
    name: "Gorgonpera",
    desc: "Mozzarella Fior di Latte, jamón serrano curado, gorgonzola, pera y reducción de vino dulce.",
    desc_eus:
      "Mozzarella Fior di Latte, urdaiazpiko serrano ondua, gorgonzola, madaria eta ardo gozoaren murrizketa.",
    image_path: "/images/carta/pizza_gorgonpera.jpeg",
    price: "14,00 €",
  },
];

const postres: Item[] = [
  {
    name: "Helados artesanales",
    desc: "Sabores de avellana, dulce de leche, pistacho, chocolate, café y mango.",
    desc_eus:
      "Hururra, esne gozoa, pistatxo, txokolate, kafe eta mango zaporeak.",
    image_path: "/images/carta/postres/helados.jpeg",
    price: "2,90 €",
  },
  {
    name: "Tiramisú",
    desc: "Bizcocho empapado en cafe, mascarpone y cacao.",
    desc_eus: "Kafean bustitako tarta, mascarpone eta kakao.",
    image_path: "/images/carta/postres/tiramisu.jpeg",
    price: "4,00 €",
  },
];

const bebidas: Item[] = [
  {
    name: "Coca-Cola (Zero)",
    image_path: "/images/carta/bebidas/cocacola-lata.jpg",
    price: "1,50 €",
  },
  {
    name: "Kas Naranja",
    image_path: "/images/carta/bebidas/kas-naranja-lata.jpg",
    price: "1,50 €",
  },
  {
    name: "Agua",
    image_path: "/images/carta/bebidas/agua-mineral.jpg",
    price: "1 €",
  },
  {
    name: "Estrella Galicia",
    image_path: "/images/carta/bebidas/cerveza-estrella-galicia.jpeg",
    price: "3,00 €",
  },
  {
    name: "Bidasoa IPA",
    image_path: "/images/carta/bebidas/cerveza-bidasoa-brewery-ipa.jpeg",
    price: "3,00 €",
  },
  {
    name: "Bidasoa Radler",
    image_path: "/images/carta/bebidas/cerveza-bidasoa-radler.jpeg",
    price: "2,50 €",
  },
  {
    name: "Bidasoa Lager Blonde",
    image_path: "/images/carta/bebidas/cerveza-bidasoa-lager.jpeg",
    price: "2,50 €",
  },

  // {
  //   name: "Txingudi",
  //   image_path: "/images/carta/bebidas/txingudi.webp",
  //   price: "4,50 €",
  // },
];

interface TabProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ title, isActive, onClick }) => {
  return (
    <motion.div
      className={`tab ${isActive ? "active" : ""}`}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
    >
      {title}
    </motion.div>
  );
};

const Carta = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("Pizzas");

  const handleTabClick = (category: string) => {
    setActiveTab(category);
  };

  return (
    <section id="carta" className="md:pb-6">
      <div className="flex flex-col ">
        <div className="bg-gray-100">
          <div className="py-6 pl-4  md:pl-12">
            <h1 className="font-bold text-xl md:text-3xl">NUESTRA CARTA</h1>
            <h2 className="text-gray-500 font-light text-md">GURE MENUA</h2>
          </div>
          {/* <div className="">
                        <ul className="flex flex-wrap justify-around text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                            <li className="" role="presentation">
                                <button onClick={() => handleTabClick()} className={`${activeTab === 1 ? "bg-gray-300 hover:bg-gray-300 text-black" : "bg-gray-100 text-gray-400 hover:bg-gray-200"} text-md md:text-xl uppercase px-4 py-2 rounded-t-lg  `} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Pizzas</button>
                            </li>
                            <li className="" role="presentation">
                                <button onClick={() => handleTabClick(2)} className={`${activeTab === 2 ? "bg-gray-300 hover:bg-gray-300 text-black" : "bg-gray-100 text-gray-400 hover:bg-gray-200"} text-md md:text-xl uppercase inline-block px-4 py-2 rounded-t-lg`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Postres</button>
                            </li>
                            <li className="" role="presentation">
                                <button onClick={() => handleTabClick(3)} className={`${activeTab === 3 ? "bg-gray-300 hover:bg-gray-300 text-black" : "bg-gray-100 text-gray-400 hover:bg-gray-200"} text-md md:text-xl uppercase inline-block px-4 py-2 rounded-t-lg`} id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Bebidas</button>
                            </li>

                        </ul>
                    </div> */}
          <Tabs
            categories={["Pizzas", "Postres", "Bebidas"]}
            activeCategory={activeTab}
            onSelectCategory={handleTabClick}
          />
        </div>

        <div className="">
          <div className="">
            <div className={`${activeTab !== "Pizzas" && "hidden"}`}>
              <List items={pizzas} />
            </div>
            <div className={`${activeTab !== "Postres" && "hidden"}`}>
              <List items={postres} />
            </div>
            <div className={`${activeTab !== "Bebidas" && "hidden"}`}>
              <List items={bebidas} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carta;
