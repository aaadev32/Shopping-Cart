import OpusMagnum from "../media/opus-magnum.jpg";
import QuakeLive from "../media/quake-live.jpg";
import Titanfall from "../media/titanfall2.jpg";
import Stalker from "../media/stalker-bundle.jpeg";
import Metro from "../media/metro-bundle.avif";

const HomeBody = () => {

    return (
        <div id="home-body">
            <div>
                <h3 id="home-event-sale">Celebrate Gamer Day (yes we made that up) with MASSIVE discounts up to 50% off!</h3>
            </div>
            <ol id="home-event-items">
                <li><a href={'/shop'}><img className="home-body-images" src={OpusMagnum} alt="game"></img></a></li>
                <li><a href={'/shop'}><img className="home-body-images" src={QuakeLive} alt="game"></img></a></li>
                <li><a href={'/shop'}><img className="home-body-images" src={Titanfall} alt="game"></img></a></li>
            </ol>
            <h2>Featured Bundles</h2>
            <ol id="home-bundle-items">
                <li><a href={'/shop'}><img className="home-body-images" src={Stalker} alt="game"></img></a></li>
                <li><a href={'/shop'}><img className="home-body-images" src={Metro} alt="game"></img></a></li>
            </ol>
            <div id="quotes-container">
                <div id="quotes">
                    <h3>i like quake not doom - Joe Roegan</h3>
                    <h3>i love sales - Gabe Newell</h3>
                    <h3>factorio should be an illegal schedule 1 drug - Gamestart Customer</h3>
                </div>
            </div>
        </div>
    );
};

export default HomeBody; 