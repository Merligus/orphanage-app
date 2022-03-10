import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./../styles/global.css";
import "./../styles/pages/landing.css";

import logoImg from "./../images/logo.svg";

function Landing() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoImg} alt="Orphanage App" />

                <main>
                    <h1>Bring happiness to the world</h1>
                    <p>Visit orphanages and change the day of children.</p>
                </main>

                <div className="location">
                    <strong>Campinas</strong>
                    <span>São Paulo</span>
                </div>

                <Link to="/orphanages" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
                </Link>
            </div>
        </div>
    );
}

export default Landing;
