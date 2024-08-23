import { ReactNode } from "react";
import "./styles.scss";
import Button from "../Button";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onCancel: () => void;
  onConfirm: () => void;
  children: ReactNode;
}

const Modal = ({
  title,
  isOpen,
  onClose,
  onCancel,
  onConfirm,
  children,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modalOverlay">
      <div className="modal">
        <div className="modalHeader">
          <h2>{title}</h2>
          <button className="modalClose" onClick={onClose}>
            <IoClose />
          </button>
        </div>
        <div className="modalBody">{children}</div>
        <div className="modalFooter">
          <Button className="cancel" title="Cancelar" onClick={onCancel} />
          <Button className="confirm" title="Concluir" onClick={onConfirm} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
