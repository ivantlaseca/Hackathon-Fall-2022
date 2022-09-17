import PageContext from "./PageContext";
import { useContext } from 'react';

function Home(){
    const pageInfo = useContext(PageContext);
    return(
        <main>
            <div>
                <h1>Welcome</h1>
            </div>
            <div id="titles">
                <h2>Cycles</h2>
            </div>
            <div id="info">
                <h3>Washer</h3>
                <h3>Dryer</h3>
            </div>
            <div id="pageSelector">
                <button onClick={() => pageInfo.setShowHome(true)}>Home</button>
                <button onClick={() => pageInfo.setShowWasher(true)}>Washer</button>
                <button onClick={() => pageInfo.setShowDryer(true)}>Dryer</button>
                <button onClick={() => pageInfo.setShowSettings(true)}>Settings</button>
            </div>
        </main>
    );
}

export default Home;