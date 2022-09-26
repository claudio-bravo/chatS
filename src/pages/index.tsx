import { Main } from "../components/Main";
import Head from "next/head";
import { ModalContent } from "../components/ModalContent";
import { useState } from "react";
import { Chat } from "../components/Chat";

export default function Home() {
  const [openChatModal, setOpenChatModal] = useState(false);

  function handleOpenChatModal() {
    setOpenChatModal(true);
  }

  function handleCloseChatModal() {
    setOpenChatModal(false);
  }
  return (
    <>
      <Head>
        <title>Samsoft async</title>
      </Head>

      <Main handleOpenChatModal={handleOpenChatModal} />
      <ModalContent
        positions={{
          top: "80px",
          right: "0px",
        }}
        childrean={<Chat isClose={handleCloseChatModal} />}
        isOpen={openChatModal}
        onReuestClose={handleCloseChatModal}
      />
    </>
  );
}
