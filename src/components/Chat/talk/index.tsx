import Link from "next/link";
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
                <img src="image/arrow.svg" alt="Voltar" />
              </button>
            </Link>
          </div>
          <div>
            <h1>🗣️Talk</h1>
          </div>
          <div>
            <button type="button" onClick={isClose}>
              <img src="image/close.svg" alt="Feixar modal" />
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  className={styled.svg}
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.5 7c0 3.0376-2.4624 5.5-5.5 5.5-3.03757 0-5.5-2.4624-5.5-5.5 0-3.03757 2.46243-5.5 5.5-5.5 3.0376 0 5.5 2.46243 5.5 5.5zM14 7c0 3.866-3.134 7-7 7-3.86599 0-7-3.134-7-7 0-3.86599 3.13401-7 7-7 3.866 0 7 3.13401 7 7zM6.27844 3.48219v3.78093l.00105.00104c.00305.07805.03658.1518.09341.20546l.07452.0566L9.6706 9.69708l.15009.03773h.05667c.09341-.01886.14904-.07442.20574-.13102l.4125-.65514c.0355-.04926.0552-.10809.0566-.16876 0-.09329-.0566-.14885-.1501-.20545L7.62817 6.68345V3.48219c0-.14989-.1312-.29979-.30017-.29979h-.74938c-.16898 0-.30018.1499-.30018.29979z"
                    clip-rule="evenodd"
                    fill="#FFFFFF"
                  ></path>
                </svg>
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
          <textarea name="mensage" placeholder="Envie uma mensagem..."></textarea>
          <div className={styled.icons}>
            <svg focusable="false" aria-hidden="true" viewBox="0 0 29 18">
              <g fill-rule="evenodd">
                <path
                  d="M9 1a8 8 0 1 0 0 16h11a8 8 0 1 0 0-16H9zm0-1h11a9 9 0 0 1 0 18H9A9 9 0 0 1 9 0z"
                  fill-rule="nonzero"
                ></path>
                <path d="M6.561 9.337c0-2.277 1.683-3.795 3.773-3.795 1.298 0 2.2.572 2.849 1.375l-.726.451c-.462-.594-1.243-1.012-2.123-1.012-1.606 0-2.827 1.232-2.827 2.981 0 1.738 1.221 2.992 2.827 2.992.88 0 1.606-.429 1.969-.792v-1.496H9.784v-.814h3.432v2.651a3.822 3.822 0 0 1-2.882 1.265c-2.09 0-3.773-1.529-3.773-3.806zM14.701 13V5.663h.913V13h-.913zm2.629 0V5.663h4.807v.814h-3.894v2.365h3.817v.814h-3.817V13h-.913z"></path>
              </g>
            </svg>
            <svg focusable="false" aria-hidden="true" viewBox="0 0 18 18">
              <path
                d="M9 0a9 9 0 1 1 0 18A9 9 0 0 1 9 0zm0 1C4.589 1 1 4.589 1 9s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM5 6.999a1 1 0 1 1 2.002.004A1 1 0 0 1 5 6.999zm5.999 0a1.002 1.002 0 0 1 2.001 0 1 1 0 1 1-2.001 0zM8.959 13.5c-.086 0-.173-.002-.26-.007-2.44-.132-4.024-2.099-4.09-2.182l-.31-.392.781-.62.312.39c.014.017 1.382 1.703 3.37 1.806 1.306.072 2.61-.554 3.882-1.846l.351-.356.712.702-.35.356c-1.407 1.427-2.886 2.15-4.398 2.15z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <svg focusable="false" aria-hidden="true" viewBox="0 0 16 18">
              <path
                d="M14.154 6.918l-.004.003.001-.004-3.287 3.286-.006-.005-3.574 3.574c-.016.017-.03.036-.048.053l-.05.047-.043.041v-.002c-1.167 1.07-2.692 1.331-3.823.2-1.13-1.13-.89-2.677.18-3.843l-.005-.004.074-.073.016-.018c.006-.005.012-.009.017-.016l6.053-6.053.761.76-6.053 6.054-.029.028v.001l-.005.004-.073.074c.011-.01.025-.018.035-.03-.688.75-.93 1.636-.21 2.356.72.72 1.583.456 2.333-.232l-.03.034.04-.042.01-.008.008-.009.033-.03.031-.034.01-.009.007-.009 5.004-5.003.005.006 1.858-1.859c1.223-1.218 1.51-2.913.291-4.132C12.462.806 10.414.74 9.195 1.958L2.248 8.905c.003 0 .006-.002.008-.004-1.625 1.667-1.542 4.43.103 6.074 1.646 1.646 4.474 1.795 6.141.17-.003.002-.004.008-.008.012l.047-.047 6.053-6.054.042-.042.743.78-.025.021.001.002-6.05 6.05-.002.002-.002.001-.046.046h-.002c-2.094 2.04-5.578 1.894-7.652-.18-2.049-2.049-2.15-5.407-.183-7.505l-.006-.005h-.002l.076-.078 6.943-6.944.003-.002.004-.005c1.641-1.64 4.367-1.574 6.008.066 1.64 1.642 1.353 4.014-.288 5.655z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
}
