import { useState } from "react";
import { Chat } from "../../components/Chat/chatfile";
import { Main } from "../../components/Main";
import { ModalContent } from "../../components/ModalContent";

export default function Chatfile() {
  const [openChatModal, setOpenChatModal] = useState(true);

  function handleOpenChatModal() {
    setOpenChatModal(true);
  }

  function handleCloseChatModal() {
    setOpenChatModal(false);
  }
  return (
    <>
      <Main handleOpenChatModal={handleOpenChatModal} />
      <ModalContent
        positions={{
          top: "2px",
          right: "2px",
        }}
        childrean={<Chat isClose={handleCloseChatModal} />}
        isOpen={openChatModal}
        onReuestClose={handleCloseChatModal}
      />
    </>
  );
}
