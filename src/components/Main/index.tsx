import React from "react";
import styled from './styles.module.scss';

export interface MainProps {
    handleOpenChatModal: () => void;
}

export function Main ({handleOpenChatModal}: MainProps) {
    return (
            <button 
                className={styled.button}
                type="button" 
                onClick={handleOpenChatModal}
            >
                <img src="/image/chatbutton.svg" alt="chatbutton" />
            </button>
    );
}