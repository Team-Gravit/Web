import React, { useEffect, useRef } from 'react';

interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}
function Modal({ children, isOpen, onClose }: ModalProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }, [isOpen]);

    const handleClose = () => {
        onClose();
    };

    return (
        <dialog
            ref={dialogRef}
            className="backdrop:bg-black backdrop:bg-opacity-60 bg-white rounded-2xl p-6 min-w-[750px] flex flex-col items-center"
            onClose={handleClose}
        >
            {children}
        </dialog>
    );
}

export default Modal;
