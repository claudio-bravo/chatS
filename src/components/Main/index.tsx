import React from "react";
import styled from './styles.module.scss';

interface MainProps {
    handleOpenChatModal: () => void;
}

export function Main ({handleOpenChatModal}: MainProps) {
    return (
            <button 
                className={styled.button}
                type="button" 
                onClick={handleOpenChatModal}
            >
                <svg data-v-4e27891e="" width="60" height="60" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"  data-v-8a19812e=""><circle cx="24" cy="24" r="20" fill="#FF9900"></circle><path d="M33.3334 34.6667C33.3334 34.6667 30.191 33.4301 27.6486 32.4395H16.9584C15.6929 32.4395 14.6667 31.3515 14.6667 30.0096V15.7632C14.6667 14.4213 15.6929 13.3333 16.9584 13.3333H31.0411C32.3066 13.3333 33.3327 14.4213 33.3327 15.7632V28.0327H33.3334V34.6667ZM30.5744 26.6788C30.354 26.407 29.9695 26.3756 29.7129 26.6084C29.6929 26.6261 27.7026 28.3961 23.9994 28.3961C20.3422 28.3961 18.3213 26.6389 18.2853 26.6069C18.0287 26.3753 17.6452 26.407 17.4251 26.6781C17.3195 26.8083 17.267 26.9782 17.2794 27.15C17.2918 27.3217 17.3681 27.481 17.4912 27.5925C17.5858 27.6779 19.8495 29.6925 23.9994 29.6925C28.15 29.6925 30.4137 27.6779 30.5083 27.5925C30.6312 27.4811 30.7073 27.3219 30.7197 27.1503C30.7321 26.9788 30.6798 26.809 30.5744 26.6788Z" fill="white"></path></svg>
            </button>
    );
}