import { ReactNode, useEffect } from "react";
import ReactModal from "react-modal";
import styled from "./styles.module.scss";
ReactModal.setAppElement('#__next');

interface ModalContentProps {
  isOpen: boolean;
  onReuestClose: () => void;
  childrean: ReactNode;
  positions: Partial<{
    top: string;
    left: string;
    right: string;
    bottom: string;
  }>;
}

export function ModalContent({
  isOpen,
  onReuestClose,
  childrean,
  positions: { top, left, bottom, right },
}: ModalContentProps) {
  useEffect(() => {
    document.documentElement.style.setProperty("--positionTop", `${top}`);
    document.documentElement.style.setProperty("--positionRight", `${right}`);
  }, []);

  return (
    <ReactModal
      isOpen={isOpen}
      ariaHideApp={false}
      overlayClassName={styled.reactModalOverlay}
      className={styled.reactModalContent}
    >
      {childrean}
    </ReactModal>
  );
}
