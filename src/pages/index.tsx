import { Main } from "../components/Main";
import Head from "next/head";
import { ModalContent } from "../components/ModalContent";
import { useState } from "react";
import { Chat } from "../components/Chat";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

interface HomeProps {
  isOpen: boolean;
}

export default function Home({ isOpen }: HomeProps) {
  const [openChatModal, setOpenChatModal] = useState(isOpen);

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
          top: "0px",
          right: "0px",
        }}
        childrean={<Chat isClose={handleCloseChatModal} />}
        isOpen={openChatModal}
        onReuestClose={handleCloseChatModal}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  return {
    props: { isOpen: context.query.open === "true" ? true : false },
  };
};
