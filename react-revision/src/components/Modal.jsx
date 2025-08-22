import { createPortal } from 'react-dom';

const Modal = ({ children }) => {


    return (
        createPortal(
            <div>{children}</div>,
            document.getElementById('modal-root')

        )
    )
};

export default Modal;