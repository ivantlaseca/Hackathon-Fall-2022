import { useContext } from "react";
import PageContext from "./PageContext";

function Dryer(){
    const pageInfo = useContext(PageContext);
    return(
        <main>
            <h1>Dryer</h1>
            <div class="washerInfo">
                <h2>Time Remaining: 12:00</h2>
            </div>
            <table>
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
            <div id="pageSelector">
                    <button onClick={() => [pageInfo.setShowDryer(false), pageInfo.setShowHome(true)]}>Home</button>
                    <button onClick={() => [pageInfo.setShowDryer(false), pageInfo.setShowWasher(true)]}>Washer</button>
                    <button onClick={() => [pageInfo.setShowDryer(false), pageInfo.setShowDryer(true)]}>Dryer</button>
                    <button onClick={() => [pageInfo.setShowDryer(false), pageInfo.setShowSettings(true)]}>Settings</button>
            </div>
        </main>
    );
}

export default Dryer;