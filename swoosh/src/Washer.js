import { useContext } from "react";
import PageContext from "./PageContext";
import './App.css';

function Washer(){
    const pageInfo = useContext(PageContext);
    return(
        <main>
            <div>
                <h1>Washer #</h1>
            </div>
            <div class="washerInfo">
                <h2>Time Remaining: 12:00</h2>
            </div>
            <div>
                <table>
                    <tr>
                        <td>Load Size:</td>
                        <td>
                            <div class="dropdown">
                                <button class="dropbtn">Extra Small</button>
                                <div class="dropdown-content">
                                    <a href="#">Small</a>
                                    <a href="#">Medium</a>
                                    <a href="#">Large</a>
                                    <a href="#">Extra Large</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Temperature:</td>
                        <td>
                            <div class="dropdown">
                                <button class="dropbtn">Cool</button>
                                <div class="dropdown-content">
                                    <a href="#">Warm</a>
                                    <a href="#">Hot</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="startWasherButton">
                <button>Start Washer</button>
            </div>
            <div class="pageSelector">
                    <button onClick={() => [pageInfo.setShowWasher(false), pageInfo.setShowHome(true)]}>Home</button>
                    <button onClick={() => [pageInfo.setShowWasher(false), pageInfo.setShowWasher(true)]}>Washer</button>
                    <button onClick={() => [pageInfo.setShowWasher(false), pageInfo.setShowDryer(true)]}>Dryer</button>
                    <button onClick={() => [pageInfo.setShowWasher(false), pageInfo.setShowSettings(true)]}>Settings</button>
            </div>
        </main>
    );
}

export default Washer;