import Link from "next/link";
import { Clock, X } from "phosphor-react";
import { ButtomSend } from "./buttomSend";
import styled from "./styles.module.scss";

interface ICloseChat {
  isClose: () => void;
}

export function Chat({ isClose }: ICloseChat) {
  return (
    <main className={styled.container}>
      <header className={styled.header}>
        <div>
          <h1>Olá Claudio 👋</h1>
        </div>
        <div>
          <button type="button" onClick={isClose}>
            <X size={32} color="white" className={styled.closeModal}/>
          </button>
        </div>
      </header>
      <section className={styled.section}>
        <div className={styled.card}>
          <div className={styled.cardContent}>
            <div className={styled.title}>
              <h3>Começar uma comversa</h3>
            </div>
            <div className={styled.temp}>
              <div className={styled.avatar}>
                <img src="/favicon.png" alt="test" />
                <img src="/favicon.png" alt="test" />
                <img src="/favicon.png" alt="test" />
              </div>
              <div>
                <div>
                  <div className={styled.intercom}>
                    O nosso tempo de resposta habitual
                  </div>
                </div>
                <div className={styled.estivativa}>
                  <Clock size={18} color="#380d87" />
                  <span>Menos de 10 minutos</span>
                </div>
              </div>
            </div>
            <ButtomSend/>
          </div>

          <div className={styled.footer}>
            <div className={styled.contentFooter}>
              <Link href="/chatfile">
                <a className={styled.viewAllConversations}>
                  Ver todas as suas conversas
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
