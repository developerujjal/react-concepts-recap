import { useState } from "react";

export const TrickThird = () => {
    //Conditional Rendering

    // Important Note:
    //  Use a separate component for true and false values.
    //  his makes the code easier to understand.

    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [cart, setCart] = useState([]);

    return (
        <>
            {isLoggedIn && <h1>Show the user Dashboard</h1>}
            {
                cart.length > 0 ? <p>Show the all carts</p> : <p>Nothing is here</p> // null => for show nothing
            }
        </>
    )
};