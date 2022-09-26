import ReactModal from "react-modal";
import styled from './styles.module.scss';

interface ModalContentProps {
    isOpen: boolean;
    onReuestClose: () => void;
}

export function ModalContent({isOpen, onReuestClose}: ModalContentProps) {
    return (
        <ReactModal 
            isOpen={isOpen} 
            onRequestClose={onReuestClose}
            overlayClassName={styled.reactModalOverlay}
            className={styled.reactModalContent}
        >
            <main className={styled.container}>
                <header className={styled.header}>
                    <div>
                        <h1>Olá Claudio 👋</h1>
                    </div>
                    <div>
                        <button
                            type="button" 
                            onClick={onReuestClose}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="200" y1="56" x2="56" y2="200" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="200" y1="200" x2="56" y2="56" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
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
                                        <div className={styled.intercom}>O nosso tempo de resposta habitual</div>
                                    </div>
                                    <div className={styled.estivativa}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" className={styled.svg}><path fill-rule="evenodd" d="M12.5 7c0 3.0376-2.4624 5.5-5.5 5.5-3.03757 0-5.5-2.4624-5.5-5.5 0-3.03757 2.46243-5.5 5.5-5.5 3.0376 0 5.5 2.46243 5.5 5.5zM14 7c0 3.866-3.134 7-7 7-3.86599 0-7-3.134-7-7 0-3.86599 3.13401-7 7-7 3.866 0 7 3.13401 7 7zM6.27844 3.48219v3.78093l.00105.00104c.00305.07805.03658.1518.09341.20546l.07452.0566L9.6706 9.69708l.15009.03773h.05667c.09341-.01886.14904-.07442.20574-.13102l.4125-.65514c.0355-.04926.0552-.10809.0566-.16876 0-.09329-.0566-.14885-.1501-.20545L7.62817 6.68345V3.48219c0-.14989-.1312-.29979-.30017-.29979h-.74938c-.16898 0-.30018.1499-.30018.29979z" clip-rule="evenodd" fill="rgb(103, 61, 230)"></path></svg>
                                        <span>Menos de 10 minutos</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styled.send}>
                                <button className={styled.buttonSendMessage}>
                                    <div className={styled.divSendMessage}>
                                        <svg focusable="false" aria-hidden="true" viewBox="0 0 15 16" className={styled.svg}><g transform="translate(-24.000000, -12.000000)"><path d="M25.4036262,27.3409362 C24.4176893,27.8509036 23.8195834,27.3951055 24.0683403,26.3201996 L25.0887779,21.910776 C25.2131242,21.3734618 25.7510472,20.8884231 26.3078778,20.8254187 L32.503417,20.1244045 C34.151155,19.9379658 34.1569707,19.6389088 32.503417,19.4549971 L26.3078778,18.7659164 C25.7589338,18.7048617 25.2129433,18.217839 25.0887779,17.6798715 L24.0683403,13.2586546 C23.8198614,12.1820783 24.408944,11.7182276 25.4036262,12.2327184 L38.22304,18.8634497 C39.208977,19.373417 39.2177223,20.1957141 38.22304,20.7102049 L25.4036262,27.3409362 Z" fill="white"></path></g></svg>
                                        <span>Envie-nos uma mensagem</span>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className={styled.footer}>
                                <div className={styled.contentFooter}>
                                    <a className={styled.viewAllConversations}>Ver todas as suas conversas</a>
                                </div>
                            </div>
                    </div>

                    
                    
                </section>
            </main>
        </ReactModal>
    );
}