import { AppProps } from 'next/app'
import { useState } from 'react';
import { Main } from '../components/Main';
import { ModalContent } from '../components/ModalContent';

import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [openChatModal, setOpenChatModal] = useState(false)

  function handleOpenChatModal() {
      setOpenChatModal(true)
  } 

  function handleCloseChatModal() {
      setOpenChatModal(false)
  }
  return (
    <>
      <Main handleOpenChatModal={handleOpenChatModal}/>
      <ModalContent 
        isOpen={openChatModal}
        onReuestClose={handleCloseChatModal}
      />
      <Component {...pageProps} />
    </>
  )
}