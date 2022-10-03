import { Image, Paperclip, PaperPlaneRight } from "phosphor-react";
import styled from "./styles.module.scss";

export function UserConversations() {
  return (
    <div className={styled.conversation}>
      <section className={styled.sectionConversation}>
        <div className={styled.cardUser}>
          <img className={styled.img} src="/favicon.png" alt="avatar" />
          <h3>Claudio Bravo</h3>
        </div>
        <div className={styled.mensage}>
          <div className={styled.output}>
            <div className={styled.sms}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
              </p>
            </div>
          </div>
          <div className={styled.input}>
            <div className={styled.avatar}>
              <img src="favicon.png" alt="avatar" />
            </div>
            <div className={styled.sms}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
              </p>
            </div>
          </div>
          <div className={styled.output}>
            <div className={styled.sms}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
              </p>
            </div>
          </div>
          <div className={styled.input}>
            <div className={styled.avatar}>
              <img src="favicon.png" alt="avatar" />
            </div>
            <div className={styled.sms}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
              </p>
            </div>
          </div>
        </div>
        <div className={styled.sendMensage}>
          <div className={styled.sendMensageDiv}>
            <textarea
              name="mensage"
              placeholder="Envie uma mensagem..."
            ></textarea>
            <button type="submit" className={styled.buttonSendMesage}>
              <PaperPlaneRight size={25} className={styled.button} />
            </button>
          </div>
          <div className={styled.icons}>
            <Image size={25} />
            <Paperclip size={25} />
          </div>
        </div>
      </section>
    </div>
  );
}
