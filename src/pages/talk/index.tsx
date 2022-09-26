import { useState } from "react";
import { Chat } from "../../components/Chat/talk";
import { Main } from "../../components/Main";
import { ModalContent } from "../../components/ModalContent";

export default function Talk() {
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