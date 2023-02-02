import NoMansSky from "../media/no-mans-sky.jpg"
import QuakeLive from "../media/quake-live.jpg"
import Titanfall from "../media/titanfall2.jpg"
import Stalker from "../media/stalker-bundle.jpeg"
import Metro from "../media/metro-bundle.avif"


const HomeBody = () => {

    return (
        <div id="home-body">
            <ol id="home-event-items">
                <li><a href={'/shop'}><img src={NoMansSky}></img></a></li>
                <li><a href={'/shop'}><img src={QuakeLive}></img></a></li>
                <li><a href={'/shop'}><img src={Titanfall}></img></a></li>
            </ol>
            <ol id="home-bundle-items">
                <li><a href={'/shop'}><img src={Stalker}></img></a></li>
                <li><a href={'/shop'}><img src={Metro}></img></a></li>
            </ol>
            <div>
                <h2 id="sale-event">generic jargon to head over to the shop and buy now!!!</h2>
            </div>
        </div>
    );
};

export default HomeBody; 