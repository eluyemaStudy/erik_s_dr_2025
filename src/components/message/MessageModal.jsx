import { useEffect } from 'react';

const MessageModal = ({  onClose, text }) => {
    useEffect(() => {
        const handleClick = () => {
            onClose();
        };

        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [onClose]);

    return (
        <div className="message-modal-wrapper">
            <div
                className="message-modal"
                onMouseDown={(e) => e.stopPropagation()}
            >
                <img src="/message-modal-icon.png" height={90} className="message-modal-icon"/>
                <p>{text}</p>
                <button onClick={onClose}>
                    <img src="/xbox-close.png" height={24} className="xbox-close"/>
                    :Close
                </button>
            </div>
        </div>
    );
};

export default MessageModal;
