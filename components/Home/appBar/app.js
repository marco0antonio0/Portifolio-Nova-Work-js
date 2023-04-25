import { useState } from "react";
import style from "./style.module.css";
import Image from "next/image";
import LogoWhatsapp from "../../../public/images/iconWhatsapp.png";
export default function AppBar() {
  const [status, setstatus] = useState([true, false, false]);
  const fn1 = () => {
    setstatus([true, false, false]);
  };
  const fn2 = () => {
    setstatus([false, true, false]);
  };
  const fn3 = () => {
    setstatus([false, false, true]);
  };

  return (
    <div className={style.container_1}>
      <h1>NOVA WORK</h1>
      <div className={style.RowBtns}>
        <h2 onClick={fn1} className={`${status[0] ? style.onn : style.off}`}>
          INICIO
        </h2>
        <h2 onClick={fn2} className={`${status[1] ? style.onn : style.off}`}>
          CONTATOS
        </h2>
        <h2 onClick={fn3} className={`${status[2] ? style.onn : style.off}`}>
          GITHUB TRABALHOS
        </h2>
      </div>
      <div className={style.iconWhatapp} onClick={fn2}>
        <Image src={LogoWhatsapp}></Image>
      </div>
    </div>
  );
}
