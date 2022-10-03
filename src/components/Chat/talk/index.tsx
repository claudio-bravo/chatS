import Link from "next/link";
import { CaretLeft, Clock, Image, Paperclip, PaperPlaneRight, X } from "phosphor-react";
import styled from "./styles.module.scss";

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
                <CaretLeft size={32} color="white"className={styled.svgs}/>
              </button>
            </Link>
          </div>
          <div>
            <h1>🗣️Talk</h1>
          </div>
          <div>
            <button type="button" onClick={isClose}>
              <X size={32} color="white" className={styled.svgs}/>
            </button>
          </div>
        </div>
        <div className={styled.cardContent}>
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
                <Clock size={19} color="white" />
                <span>Menos de 10 minutos</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className={styled.section}>
        <div className={styled.mensage}>
          <div className={styled.output}>
              <div className={styled.sms}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                </p>
              </div>
          </div>
          <div className={styled.input}>
            <div className={styled.avatar}>
              <img src="favicon.png" alt="avatar" />
            </div>
            <div className={styled.sms}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
              </p>
            </div>
            
          </div>
          <div className={styled.output}>
              <div className={styled.sms}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                </p>
              </div>
          </div>
          <div className={styled.input}>
            <div className={styled.avatar}>
              <img src="favicon.png" alt="avatar" />
            </div>
            <div className={styled.sms}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
              </p>
            </div>
            
          </div>
        </div>
        <div className={styled.sendMensage}>
          <div className={styled.sendMensageDiv}>
            <textarea name="mensage" placeholder="Envie uma mensagem...">             
            </textarea>
            <button type="submit" className={styled.buttonSendMesage}>
              <PaperPlaneRight size={25} color="#ffffff" className={styled.button}/>
            </button>
          </div>
          <div className={styled.icons}>
            <Image size={25} />            
            <Paperclip size={25} />          
          </div>
        </div>
      </section>
    </main>
  );
}
