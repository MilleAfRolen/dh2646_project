'use client'
import Navbar from "../(views)/navbarView";

export default function Navbarr(props) {

    function handleSignOutACB() {
        console.log("hej från presenter", props.model);
        props.model.handleSignOut();
     }

    return (
        <div>
            <Navbar
                handleSigningOut={handleSignOutACB}
            />
        </div>
    );
}