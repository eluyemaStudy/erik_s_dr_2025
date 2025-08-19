import Flame from "./components/flame/index.js";
import Message from "./components/message/index.js";
import "./App.css";

function App() {
  return (
    <>
        <h1 className="main-title">BIRTHDAY ACHIEVED</h1>
        <Flame/>
        <Message text="Treasure ahead" className="message-1"/>
        <Message text="Gesture: Celebrate" className="message-2"/>
        <Message text="Visions of great journey" className="message-3"/>
        <Message text="Time for cake" className="message-4"/>
    </>
  )
}

export default App
