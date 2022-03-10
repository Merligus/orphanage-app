import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { MapContainer, TileLayer } from "react-leaflet";

import mapMarkerImg from "./../images/map-marker.svg";

import "./../styles/pages/orphanages-map.css";

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="map-marker" />

                    <h2>Select an orphanage in the map</h2>
                    <p>Many children await your visit</p>
                </header>

                <footer>
                    <strong>Campinas</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <MapContainer
                center={[-22.814523, -47.064286]}
                zoom={13}
                style={{ width: "100%", height: "100%" }}
            >
                <TileLayer
                    // url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
            </MapContainer>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;
