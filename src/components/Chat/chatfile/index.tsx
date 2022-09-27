import Link from "next/link";
import { ButtomSend } from "../buttomSend";
import styled from "./styles.module.scss";
import { CaretLeft, CaretRight, X } from "phosphor-react";


interface ICloseChat {
  isClose: () => void;
}

export function Chat({ isClose }: ICloseChat) {
  return (
    <main className={styled.container}>
      <header className={styled.header}>
        <div className={styled.headerOne}>
          <div>
            <Link href="/?open=true">
              <button type="button">
                <CaretLeft size={32} color="white"className={styled.svgHeader}/>
              </button>
            </Link>
          </div>
          <div>
            <h1>As suas conversas</h1>
          </div>
          <div>
            <button type="button" onClick={isClose}>
              <X size={32} color="white" className={styled.svgHeader}/>
            </button>
          </div>
        </div>
      </header>
      <section className={styled.section}>
        <div className={styled.mensage}>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h2>Ola como podemos ajudar...</h2>
              <div className={styled.suport}>
                <span>Claudio</span>
                <ul>
                  <li>Há 1h</li>
                </ul>
              </div>
            </div>
            <CaretRight size={28} />          
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h2>Ola como podemos ajudar...</h2>
              <div className={styled.suport}>
                <span>Claudio</span>
                <ul>
                  <li>Há 1h</li>
                </ul>
              </div>
            </div>
            <CaretRight size={28} />          
          </div>
        </div>
        <div className={styled.sendMensage}>
          <ButtomSend />
        </div>
      </section>
    </main>
  );
}
