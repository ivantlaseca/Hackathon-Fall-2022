import { useContext } from "react";
import PageContext from "./PageContext";
import './App.css';

function Settings(){
    const pageInfo = useContext(PageContext);
    return(
        <main>
            <h1>Settings</h1>

            <div id="editLaundry">
                <button>Add Washer</button>
                <button>Add Dryer</button>
            </div>

            <div class="pageSelector">
                    <button onClick={() => [pageInfo.setShowSettings(false), pageInfo.setShowHome(true)]}>Home</button>
                    <button onClick={() => [pageInfo.setShowSettings(false), pageInfo.setShowWasher(true)]}>Washer</button>
                    <button onClick={() => [pageInfo.setShowSettings(false), pageInfo.setShowDryer(true)]}>Dryer</button>
                    <button onClick={() => [pageInfo.setShowSettings(false), pageInfo.setShowSettings(true)]}>Settings</button>
            </div>
        </main>
    );
}


export default Settings;