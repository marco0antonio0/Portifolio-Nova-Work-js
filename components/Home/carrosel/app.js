import { useState } from "react";
import style from "./style.module.css";
import Image from "next/image";
import img_carrosel from "../../../public/images/img_carrosel.png";
import img_carrosel_2 from "../../../public/images/img_carrosel_2.png";

export default function Carrosel() {
  return (
    <div className={style.container_1}>
      <div className={style.container_left}>
        <Image src={img_carrosel_2}></Image>
      </div>
      <div className={style.container_right}>
        <Image src={img_carrosel}></Image>
      </div>
    </div>
  );
}
