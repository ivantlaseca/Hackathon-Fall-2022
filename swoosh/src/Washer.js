import { useContext } from "react";
import PageContext from "./PageContext";

function Washer(){
    const pageInfo = useContext(PageContext);
    return(
        <main>
            <div>Hi</div>
            <div id="pageSelector">
                    <button onClick={() => pageInfo.setShowHome(true)}>Home</button>
                    <button onClick={() => pageInfo.setShowWasher(true)}>Washer</button>
                    <button onClick={() => pageInfo.setShowDryer(true)}>Dryer</button>
                    <button onClick={() => pageInfo.setShowSettings(true)}>Settings</button>
            </div>
        </main>
    );
}

export default Washer;