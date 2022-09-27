import Link from "next/link";
import { PaperPlaneRight } from "phosphor-react";
import styled from "./styles.module.scss";

export function ButtomSend() {
  return (
    <div className={styled.send}>
      <Link href="/talk">
        <button className={styled.buttonSendMessage}>
          <div className={styled.divSendMessage}>
            <PaperPlaneRight size={20} color="#ffffff" />
            <span>Envie-nos uma mensagem</span>
          </div>
        </button>
      </Link>
    </div>
  );
}
