import "./index.css";
import {useState} from "react";

// import dsFire from "../../assets/ds-fire.png";

const Flame = () => {

    const [achiveVisisble, setAchiveVisisble] = useState(false);

    return (
        <>
            <div className='fullscreen-dark-filter'/>
            <div className="bonfire" id="bonfire" onClick={()=>setAchiveVisisble(!achiveVisisble)}>
                <div className="flame"></div>
            </div>
            <img src="/lvlup.png" width={220} alt="lvlup" className={`lvlup ${achiveVisisble ? "achive-visisble":""}`}/>
        </>);

    //<img className="flame" src={dsFire} alt="ds-fire" style={{position: "absolute", bottom: "0%", right: "200px"}} width="200px"/>
};

export default Flame;