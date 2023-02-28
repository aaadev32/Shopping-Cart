import React, { useEffect, useState, useRef } from "react";
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
    const [cartItems, setCartItems] = useState([]);
    //an array of refs to all input elements
    let inputElement = useRef([]);
    //used for focusing the correct input ref in the inputElement array after quantity changes in cart
    let inputIndex = 0;


    const addToCart = (e) => {

        let cartDuplicateCheck = [...cartItems];
        let isDuplicate = false;

        // this for loop insures any duplicate items bought using the buy button will instead increment the quanitity of the item already in the cart rather than adding another row of a duplicate items
        for (let i = 0; i < cartDuplicateCheck.length; i++) {
            if (cartDuplicateCheck[i].image === e.target.parentNode.children[0].src) {
                isDuplicate = true;
                if (cartDuplicateCheck[i].priceMultiplier < 1000) {
                    cartDuplicateCheck[i].priceMultiplier++
                    cartDuplicateCheck[i].totalPrice = cartDuplicateCheck[i].basePrice * cartDuplicateCheck[i].priceMultiplier
                    inputIndex = i;
                    setCartItems(cartDuplicateCheck);
                } else if (cartDuplicateCheck[i].priceMultiplier >= 1000 || cartDuplicateCheck[i].priceMultiplier <= 0) {
                    return null;
                }

            }
        }
        if (isDuplicate == false) {
            console.log(e.target.parentNode.children);
            let addedItem = {
                image: e.target.parentNode.children[0].src,
                priceMultiplier: 1,
                basePrice: parseFloat(e.target.parentNode.children[2].dataset.price),
                totalPrice: parseFloat(e.target.parentNode.children[2].dataset.price),
                inputFocusElement: null
            };

            let newCartItems = [...cartItems];
            newCartItems.push(addedItem);

            setCartItems(newCartItems);
            inputIndex = cartItems.length;
            console.log(cartItems);
        }
    }

    const removeItem = (e) => {
        console.log(e)

        let listItemIndex = e.target.parentNode.parentNode.dataset.key;
        let updatedCartItems = [...cartItems];
        updatedCartItems.splice(listItemIndex, 1)
        setCartItems(updatedCartItems)
    }

    const checkout = () => {
        let emptyCart = [];
        setCartItems(emptyCart)
    }

    const incrementMultiplier = (e) => {
        let inputNode = e.target;
        const cartItemIndex = e.target.dataset.key;
        const newQuantity = e.target.value;
        const updatedCartItem = [...cartItems];

        //prevents non integer input values
        if (e.target.value <= 0 || e.target.value > 999) {
            e.preventDefault();
        } else {
            //setup for focusing the used input after render
            updatedCartItem[cartItemIndex].inputFocusElement = inputNode;
            //setup for new state
            updatedCartItem[cartItemIndex].priceMultiplier = newQuantity;
            updatedCartItem[cartItemIndex].totalPrice = updatedCartItem[cartItemIndex].basePrice * newQuantity;
            setCartItems(updatedCartItem);

            inputIndex = cartItemIndex;

            console.log(inputElement)
        }
    }

    const Cart = () => {
        //reset the inputElements ref to keep ref array from populating with duplicates from the ref callback
        inputElement.current = [];

        let pricingCheckoutInfo = {
            totalPrice: 0,
            taxPrice: 0
        }
        cartItems.forEach(element => {
            pricingCheckoutInfo.totalPrice += element.totalPrice;
            pricingCheckoutInfo.taxPrice = element.totalPrice + element.totalPrice * .1;
        });
        const itemList = cartItems.map((items, index) => {
            return <li key={index} className="cart-item" data-key={index}>
                <img alt="game-item" src={items.image} className="cart-item-images"></img>
                <div className="cart-item-adjustments-container">
                    <div id="cart-item-price-container">
                        <h4 className="cart-item-price">${items.totalPrice.toFixed(2)} </h4>
                        <input type="number" min={0} value={items.priceMultiplier} data-key={index} className="cart-item-input" onChange={incrementMultiplier} ref={(ref) => ref != null ? inputElement.current.push(ref) : false}></input>
                    </div>
                    <button className="shop-button" onClick={removeItem}>Remove Item</button>
                </div>
            </li>
        }
        );

        return (
            <div id="cart">
                <ol id="cart-item-list">
                    {itemList[0] == null ? 'Your Cart Is Empty.' : itemList}
                </ol>
                <div id="pricing-checkout">
                    <div className="cart-item-price">Total Price: ${pricingCheckoutInfo.totalPrice.toFixed(2)} </div>
                    <div className="cart-item-price">Estimate With Tax: ${pricingCheckoutInfo.taxPrice.toFixed(2)}</div>
                    <button className="shop-button" onClick={checkout}>Checkout</button>
                </div>
            </div>
        );
    }

    useEffect(() => {
        return () => {
            inputElement.current.map((element, index) => {
                if (index == inputIndex) {
                    element.focus();
                }
                return;
            });
        };

    }, [cartItems]);

    return (
        <div id="shopping-cart">
            <nav>
                <ol id="shop-nav-list">
                    <li className="nav-list-item"><a href="/"><h1>Home</h1></a></li>
                </ol>
            </nav>
            <Cart />
            <div id="shop">
                <ol id="shop-items-list">
                    <li className="shop-items">
                        <img src={Aoe} className="shop-images" alt="game"></img>
                        <div className="shop-item-description"> Age of Empires II: Definitive Edition features “The Last Khans” with 3 new campaigns and 4 new Civilizations. Frequent updates include events, additional content, new game modes, and enhanced features with the recent addition of Co-Op mode! </div>
                        <div className="shop-item-price" data-price={14.99}>$14.99</div>
                        <button className="shop-button" onClick={addToCart}>Buy</button>
                    </li>
                    <li className="shop-items">
                        <img src={Bannerlord} className="shop-images" alt="game"></img>
                        <div className="shop-item-description">A strategy/action RPG. Create a character, engage in diplomacy, craft, trade and conquer new lands in a vast medieval sandbox. Raise armies to lead into battle and command and fight alongside your troops in massive real-time battles using a deep but intuitive skill-based combat system. </div>
                        <div className="shop-item-price" data-price={29.99}>$29.99</div>
                        <button className="shop-button" onClick={addToCart}>Buy</button>
                    </li>
                    <li className="shop-items">
                        <img src={Deadspace} className="shop-images" alt="game"></img>
                        <div className="shop-item-description">The sci-fi survival-horror classic returns, completely rebuilt to offer an even more immersive experience — including visual, audio, and gameplay improvements — while staying faithful to the original game’s thrilling vision. </div>
                        <div className="shop-item-price" data-price="59.99">$59.99</div>
                        <button className="shop-button" onClick={addToCart}>Buy</button>
                    </li>
                    <li className="shop-items">
                        <img src={Doom} className="shop-images" alt="game"></img>
                        <div className="shop-item-description"> Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you. </div>
                        <div className="shop-item-price" data-price="19.99">$19.99</div>
                        <button className="shop-button" onClick={addToCart}>Buy</button>
                    </li>
                    <li className="shop-items">
                        <img src={EldenRing} className="shop-images" alt="game"></img>
                        <div className="shop-item-description"> THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between. </div>
                        <div className="shop-item-price" data-price="29.99">$29.99</div>
                        <button className="shop-button" onClick={addToCart}>Buy</button>
                    </li>
                    <li className="shop-items">
                        <img src={Factorio} className="shop-images" alt="game"></img>
                        <div className="shop-item-description">Factorio is a game about building and creating automated factories to produce items of increasing complexity, within an infinite 2D world. Use your imagination to design your factory, combine simple elements into ingenious structures, and finally protect it from the creatures who don't really like you.</div>
                        <div className="shop-item-price" data-price="34.99">$34.99</div>
                        <button className="shop-button" onClick={addToCart}>Buy</button>
                    </li>
                    <li className="shop-items">
                        <img src={HalfLife} className="shop-images" alt="game"></img>
                        <div className="shop-item-description">The player again picks up the crowbar of research scientist Gordon Freeman, who finds himself on an alien-infested Earth being picked to the bone, its resources depleted, its populace dwindling. Freeman is thrust into the unenviable role of rescuing the world from the wrong he unleashed back at Black Mesa. And a lot of people he cares about are counting on him.</div>
                        <div className="shop-item-price" data-price="9.99">$9.99</div>
                        <button className="shop-button" onClick={addToCart}>Buy</button>
                    </li>
                    <li className="shop-items">
                        <img src={Metro} className="shop-images" alt="game"></img>
                        <div className="shop-item-description"> Journey from the shattered subway tunnels of Moscow to the far flung wastelands of post-apocalyptic Russia, and experience three of the finest single-player first person shooters of the past decade that combine to create one epic adventure...</div>
                        <div className="shop-item-price" data-price="39.99">$39.99</div>
                        <button className="shop-button" onClick={addToCart}>Buy</button>
                    </li>
                    <li className="shop-items">
                        <img src={OpusMagnum} className="shop-images" alt="game"></img>
                        <div className="shop-item-description">Opus Magnum is the latest open-ended puzzle game from Zachtronics, the creators of SpaceChem, Infinifactory, and SHENZHEN I/O. Design and build machines that assemble potions, poisons, and more using the alchemical engineer’s most advanced tool: the transmutation engine!</div>
                        <div className="shop-item-price" data-price="14.99">$14.99</div>
                        <button className="shop-button" onClick={addToCart}>Buy</button>
                    </li>
                    <li className="shop-items">
                        <img src={QuakeLive} className="shop-images" alt="game"></img>
                        <div className="shop-item-description">Experience the most exciting and fast-paced FPS gameplay while competing with players from around the world in over 100 arenas, a dozen game modes, and with persistent career stats tracking, in this online features-focused successor to Quake III Arena.</div>
                        <div className="shop-item-price" data-price="9.99">$9.99</div>
                        <button className="shop-button" onClick={addToCart}>Buy</button>
                    </li>
                    <li className="shop-items">
                        <img src={Stalker} className="shop-images" alt="game"></img>
                        <div className="shop-item-description">S.T.A.L.K.E.R.: tells a story about survival in the Zone – a very dangerous place, where you fear not only the radiation, anomalies and deadly creatures, but other S.T.A.L.K.E.R.s, who have their own goals and wishes.</div>
                        <div className="shop-item-price" data-price="14.99">$14.99</div>
                        <button className="shop-button" onClick={addToCart}>Buy</button>
                    </li>
                    <li className="shop-items">
                        <img src={Titanfall} className="shop-images" alt="game"></img>
                        <div className="shop-item-description">Respawn Entertainment gives you the most advanced titan technology in its new, single player campaign & multiplayer experience. Combine & conquer with new titans & pilots, deadlier weapons, & customization and progression systems that help you and your titan flow as one unstoppable killing force. </div>
                        <div className="shop-item-price" data-price="9.99">$9.99</div>
                        <button className="shop-button" onClick={addToCart}>Buy</button>
                    </li>
                </ol>
            </div>

        </div>
    );
};

export default ShoppingCart;