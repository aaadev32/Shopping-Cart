import OpusMagnum from "../media/opus-magnum.jpg";
import QuakeLive from "../media/quake-live.jpg";
import Titanfall from "../media/titanfall2.jpg";
import Stalker from "../media/stalker-bundle.jpeg";
import Metro from "../media/metro-bundle.avif";
import Factorio from "../media/factorio.avif";
import EldenRing from "../media/elden-ring.jpg";
import Doom from "../media/doom-eternal.jpg";
import Aoe from "../media/aoe2.jpg";
import HalfLife from "../media/half-life-2.jpg";
import Deadspace from "../media/dead-space.jpg";
import Bannerlord from "../media/bannerlord.jpg";




const ShoppingCart = () => {


    return (
        <div id="shopping-cart">

            <div id="cart">
                <ol id="cart-items-list">
                    <li className="cart-items">place holder shop item image <div className="cart-item-price">placeholder price/disount</div></li>
                    <button id="checkout-button">Checkout</button>
                </ol>
            </div>
            <div id="shop">
                <ol id="shop-items-list">
                    <li className="shop-items">
                        <img src={Aoe} className="shop-images" alt="game"></img>
                        <div className="shop-item-description"> Age of Empires II: Definitive Edition features “The Last Khans” with 3 new campaigns and 4 new Civilizations. Frequent updates include events, additional content, new game modes, and enhanced features with the recent addition of Co-Op mode! </div>
                        <div className="shop-item-price">$14.99 from $19.99</div>
                    </li>
                    <li className="shop-items">
                        <img src={Bannerlord} className="shop-images" alt="game"></img>
                        <div className="shop-item-description">A strategy/action RPG. Create a character, engage in diplomacy, craft, trade and conquer new lands in a vast medieval sandbox. Raise armies to lead into battle and command and fight alongside your troops in massive real-time battles using a deep but intuitive skill-based combat system. </div>
                        <div className="shop-item-price">$29.99 from $49.99</div>
                    </li>
                    <li className="shop-items">
                        <img src={Deadspace} className="shop-images" alt="game"></img>
                        <div className="shop-item-description">The sci-fi survival-horror classic returns, completely rebuilt to offer an even more immersive experience — including visual, audio, and gameplay improvements — while staying faithful to the original game’s thrilling vision. </div>
                        <div className="shop-item-price">$59.99</div>
                    </li>
                    <li className="shop-items">
                        <img src={Doom} className="shop-images" alt="game"></img>
                        <div className="shop-item-description"> Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you. </div>
                        <div className="shop-item-price">$19.99 from $39.99</div>
                    </li>
                    <li className="shop-items">
                        <img src={EldenRing} className="shop-images" alt="game"></img>
                        <div className="shop-item-description"> THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between. </div>
                        <div className="shop-item-price">$29.99 from $59.99</div>
                    </li>
                    <li className="shop-items">
                        <img src={Factorio} className="shop-images" alt="game"></img>
                        <div className="shop-item-description"> placeholder description</div>
                        <div className="shop-item-price">placeholder price/disount</div>
                    </li>
                    <li className="shop-items">
                        <img src={HalfLife} className="shop-images" alt="game"></img>
                        <div className="shop-item-description"> placeholder description</div>
                        <div className="shop-item-price">placeholder price/disount</div>
                    </li>
                    <li className="shop-items">
                        <img src={Metro} className="shop-images" alt="game"></img>
                        <div className="shop-item-description"> placeholder description</div>
                        <div className="shop-item-price">placeholder price/disount</div>
                    </li>
                    <li className="shop-items">
                        <img src={OpusMagnum} className="shop-images" alt="game"></img>
                        <div className="shop-item-description"> placeholder description</div>
                        <div className="shop-item-price">placeholder price/disount</div>
                    </li>
                    <li className="shop-items">
                        <img src={QuakeLive} className="shop-images" alt="game"></img>
                        <div className="shop-item-description"> placeholder description</div>
                        <div className="shop-item-price">placeholder price/disount</div>
                    </li>
                    <li className="shop-items">
                        <img src={Stalker} className="shop-images" alt="game"></img>
                        <div className="shop-item-description"> placeholder description</div>
                        <div className="shop-item-price">placeholder price/disount</div>
                    </li>
                    <li className="shop-items">
                        <img src={Titanfall} className="shop-images" alt="game"></img>
                        <div className="shop-item-description"> placeholder description</div>
                        <div className="shop-item-price">placeholder price/disount</div>
                    </li>
                </ol>
            </div>

        </div>
    );
};

export default ShoppingCart;