import PageContext from "./PageContext";
import { useContext } from 'react';

function Home(){
    const pageInfo = useContext(PageContext);
    return(
        <main>
            <div>
                <h1>Welcome</h1>
            </div>
            <table class="homePage">
                <tr>
                    <th>Cycles</th>
                    <th>Level</th>
                    <th>Time Remaining</th>
                </tr>
                <tr>
                    <td>Washer</td>
                    <td>
                        <div class="dropdown">
                            <button class="dropbtn">Wash</button>
                            <div class="dropdown-content">
                                <a href="#">Rinse</a>
                                <a href="#">Spill</a>
                            </div>
                        </div>
                    </td>
                    <td>12:00</td>
                </tr>
                <tr>
                    <td>Dryer</td>
                    <td>
                        <div class="dropdown">
                            <button class="dropbtn">Low Heat</button>
                            <div class="dropdown-content">
                                <a href="#">Medium Heat</a>
                                <a href="#">High Heat</a>
                            </div>
                        </div>
                    </td>
                    <td>12:00</td>
                </tr>
            </table>
            <div class="pageSelector">
                <button onClick={() => pageInfo.setShowHome(true)}>Home</button>
                <button onClick={() => [pageInfo.setShowHome(false), pageInfo.setShowWasher(true)]}>Washer</button>
                <button onClick={() => [pageInfo.setShowHome(false), pageInfo.setShowDryer(true)]}>Dryer</button>
                <button onClick={() => [pageInfo.setShowHome(false), pageInfo.setShowSettings(true)]}>Settings</button>
            </div>
        </main>
    );
}

export default Home;