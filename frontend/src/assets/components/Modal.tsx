import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  isOpen: boolean;
};

const Modal = ({ isOpen }: Props) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setModalRoot(document.getElementById("modal"));
  }, []);

  if (!isOpen || !modalRoot) return null;

  return createPortal(
    <div className="fixed z-2 top-0 left-0 w-full h-full bg-black/80 overflow-auto">
      <div className="flex flex-col h-full">
        <div className="text-white my-auto animate-bounce">
          <p className="text-center text-white text-3xl">
            Is getting the data...
          </p>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
