import HomePageDesgin from "../components/HomePageDesgin"
import { useNavigate } from "react-router-dom"
import Trendings from "../components/Trendings"
import { useSelector } from "react-redux";
import ContactBlock from "../components/ContactBlock";
import { useEffect } from "react";
import { gsap } from "gsap";

const Home = () => {
    const user=useSelector(state=>state.user.user)
    const navigate = useNavigate();
    const gotosignHandler = () => {
        navigate('/register')
    }
    return (
        <>
        <div className="home">
            <h1>Nothing <span className="coloured">great</span> is made alone.</h1>
            <div className="about">
                <h3>LuxeLane – Elevate Your Shopping Experience</h3>
                <p>LuxeLane is a premium ecommerce destination curated for those who value quality and elegance. Explore exclusive brands, refined collections, and personalized service designed to deliver sophistication to your doorstep.</p>
                {!user ? <button id="button" onClick={gotosignHandler}>Sign up</button>:""}
            </div>
            <HomePageDesgin/>
            <Trendings/>
            <ContactBlock/>
        </div>
        </>
    )
}

export default Home
