import { NotePencil } from "phosphor-react";
import styled from "./styles.module.scss";


interface IConversationsProps {
  titleChat : string;
  chatType?: 'bate-papo' | 'pessoas';
  props?: {
      user: {
        id : string;
        avatar : string
        messages: [{
          sms : string;
          updated: Date;
        }]
        name : string;
        isActive: boolean;
     
      }; 
      
  }
}
export function Conversations({titleChat}: IConversationsProps) {
  return (
    <div className={styled.divAsideBatepapo}>
      <div className={styled.firstDivBatePapo}>
        <h1>{titleChat}</h1>
        <div className={styled.newMensage}>
          <NotePencil size={28} className={styled.svg} />
        </div>
      </div>

      <div className={styled.secondDivSearch}>
        <input type="text" placeholder="Pesquisar" />
      </div>

      <aside className={styled.asidePeople}>
        <div className={styled.users}>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
          <div className={styled.card}>
            <img src="/favicon.png" alt="avatar" />
            <div className={styled.content}>
              <h3>Ola como podemos ajudar...</h3>
              <span>Claudio Há 1h</span>
            </div>
            <strong className={styled.status}></strong>
          </div>
        </div>
      </aside>
    </div>
  );
}
