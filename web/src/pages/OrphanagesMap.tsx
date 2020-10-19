import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight, FiHome, FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';

import '../styles/pages/orphanages-map.css';
import api from '../services/api';

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function OrphanagesMap() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    const defaultPosition = {latitude: -15.6371828, longitude: -56.0138516};
    const [mapZoom, setMapZoon] = useState(15);
    const [mapPosition, setMapPosition] = useState({ latitude: defaultPosition.latitude, longitude: defaultPosition.longitude });

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        });
    }, []);

    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Cuiabá</strong>
                    <span>Mato Grosso</span>
                    <div className="back-to-home">
                        <Link to="/" >
                            <FiArrowLeft size={32} color="#fff" />
                        </Link>
                    </div>
                </footer>
            </aside>

            <Map 
                center={[mapPosition.latitude, mapPosition.longitude]}
                zoom={mapZoom}
                style={{ width: '100%', height:'100%' }}
                onClick={() => {
                    setMapZoon(15);
                    setMapPosition({ latitude: defaultPosition.latitude, longitude: defaultPosition.longitude })
                }}
            >
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {/**<TileLayer 
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=S{process.env.REACT_APP_MAPBOX_TOKEN}`}  */}

            {orphanages.map(orphanage => {
                return(
                    <Marker 
                        key={orphanage.id}
                        icon={mapIcon}
                        position={[orphanage.latitude, orphanage.longitude]}
                        onClick={() => {
                            setMapZoon(20);
                            setMapPosition({ latitude: orphanage.latitude, longitude: orphanage.longitude })
                        }}
                    >
                        <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                            {orphanage.name}
                                                        
                            <Link to={`/orphanages/${orphanage.id}`}>
                                <FiArrowRight size={20} color='#fff' />
                            </Link>
                        </Popup>
                    </Marker>
                )
            })}
            
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>

        </div>
    )
}
export default OrphanagesMap;
