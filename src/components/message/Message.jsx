import "./index.css";
import MessageModal from "./MessageModal.jsx";
import React from "react";

const Message = ({text = "", className = ""}) => {
    const [opened, setOpened] = React.useState(false);



    return <div className="message-block">
        <img className={className} onClick={()=>setOpened(true)} src="/message-symbol.png" alt={text} width="200px" title="КЛИКНИ НА МЕНЯ"/>

        {opened && <MessageModal text={text} onClose={() => setOpened(false)} />}
    </div>
};

export default Message;