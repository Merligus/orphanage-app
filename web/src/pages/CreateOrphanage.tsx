import { ChangeEvent, FormEvent, useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import { FiPlus } from "react-icons/fi";
import Sidebar from "../components/Sidebar";

import { LeafletMouseEvent } from "leaflet";

import "../styles/pages/create-orphanage.css";
import mapIcon from "../utils/mapIcon";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function CreateOrphanage() {
    const navigate = useNavigate();

    const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
        0, 0,
    ]);
    const [name, setName] = useState("");
    const [about, setAbout] = useState("");
    const [instructions, setInstructions] = useState("");
    const [opening_hours, setOpeningHours] = useState("");
    const [open_on_weekends, setOpenOnWeekends] = useState(true);
    const [images, setImages] = useState<File[]>([]);
    const [previewImages, setPreviewImages] = useState<string[]>([]);

    function LocationMarker() {
        useMapEvents({
            click(event: LeafletMouseEvent) {
                setSelectedPosition([event.latlng.lat, event.latlng.lng]);
            },
        });

        return selectedPosition[0] !== 0 && selectedPosition[1] !== 0 ? (
            <Marker
                interactive={false}
                icon={mapIcon}
                position={selectedPosition}
            />
        ) : null;
    }

    function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
        if (!event.target.files) {
            return;
        }

        const selectedImages = Array.from(event.target.files);

        setImages(selectedImages);

        const selectedImagesPreview = selectedImages.map((image) => {
            return URL.createObjectURL(image);
        });

        setPreviewImages(selectedImagesPreview);
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const [latitude, longitude] = selectedPosition;

        const data = new FormData();

        data.append("name", name);
        data.append("about", about);
        data.append("instructions", instructions);
        data.append("opening_hours", opening_hours);
        data.append("open_on_weekends", String(open_on_weekends));
        data.append("latitude", String(latitude));
        data.append("longitude", String(longitude));
        images.forEach((image) => data.append("images", image));

        await api.post("orphanages", data);

        alert("Orphanage successfully created!");

        navigate("/orphanages");
    }

    return (
        <div id="page-create-orphanage">
            <Sidebar />
            <main>
                <form className="create-orphanage-form" onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Dados</legend>

                        <MapContainer
                            center={[-22.8145184, -47.0664804]}
                            style={{ width: "100%", height: 280 }}
                            zoom={15}
                        >
                            <TileLayer
                                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                            />

                            <LocationMarker />
                        </MapContainer>

                        <div className="input-block">
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                value={name}
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="about">
                                About <span>300 characters</span>
                            </label>
                            <textarea
                                id="name"
                                maxLength={300}
                                value={about}
                                onChange={(event) =>
                                    setAbout(event.target.value)
                                }
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="images">Photos</label>

                            <div className="images-container">
                                {previewImages.map((image) => {
                                    return (
                                        <img
                                            key={image}
                                            src={image}
                                            alt={name}
                                        />
                                    );
                                })}

                                <label htmlFor="image[]" className="new-image">
                                    <FiPlus size={24} color="#15b6d6" />
                                </label>
                                <input
                                    multiple
                                    onChange={handleSelectImages}
                                    type="file"
                                    id="image[]"
                                />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Visit</legend>

                        <div className="input-block">
                            <label htmlFor="instructions">Instructions</label>
                            <textarea
                                id="instructions"
                                value={instructions}
                                onChange={(event) =>
                                    setInstructions(event.target.value)
                                }
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="opening_hours">Opening Hours</label>
                            <input
                                id="opening_hours"
                                value={opening_hours}
                                onChange={(event) =>
                                    setOpeningHours(event.target.value)
                                }
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="open_on_weekends">
                                Can visit on the weekend
                            </label>

                            <div className="button-select">
                                <button
                                    type="button"
                                    className={open_on_weekends ? "active" : ""}
                                    onClick={() => setOpenOnWeekends(true)}
                                >
                                    Yes
                                </button>
                                <button
                                    type="button"
                                    className={
                                        !open_on_weekends ? "active" : ""
                                    }
                                    onClick={() => setOpenOnWeekends(false)}
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    </fieldset>

                    <button className="confirm-button" type="submit">
                        Create
                    </button>
                </form>
            </main>
        </div>
    );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
