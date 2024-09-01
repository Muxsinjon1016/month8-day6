import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <ul className="flex items-center flex-wrap justify-between">
          <li>
            <h3 className="text-2xl font-bold mb-4">Платформа хақида</h3>
            <p className="text-xl mb-5">Liber ўзи нима?</p>
            <p className="text-xl mb-5">Фойдаланиш шартлари</p>
            <p className="text-xl mb-5">Ёрдам</p>
          </li>
          <li>
            <h3 className="text-2xl font-bold mb-4">Обуна хақида</h3>
            <p className="text-xl mb-5">Обуна бўлиш</p>
            <p className="text-xl mb-5">Қандай тўлаш</p>
          </li>
          <li>
            <h3 className="text-2xl font-bold mb-4">Китоблар</h3>
            <p className="text-xl mb-5">Аудио китоблар</p>
            <p className="text-xl mb-5">Электрон китоблар</p>
            <p className="text-xl mb-5">Китоблар</p>
          </li>
          <li>
            <h3 className="text-2xl font-bold mb-4">Мобил илова</h3>
            <img className="mb-5 block" src="googlePlay.svg" alt="img" />
            <img className="mb-5 block" src="appStore.svg" alt="img" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
