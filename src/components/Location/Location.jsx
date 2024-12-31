import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import UpdateLocation from "./UpdateLocation";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIconRetina from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const customMarkerIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIconRetina,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Location = ({ customStyles, detailEvent }) => {
  const [location, setLocation] = useState({
    latitude: 19.434654,
    longitude: -99.133953,
  });
  const [venueName, setVenueName] = useState("");

  useEffect(() => {
    const location = detailEvent?._embedded?.venues[0]?.location || {
      latitude: 19.434654,
      longitude: -99.133953,
    };

    setLocation({
      latitude: location.latitude,
      longitude: location.longitude,
    });
    setVenueName(detailEvent?._embedded?.venues[0]?.name || "No venue name");
  }, [detailEvent]);

  return (
    <MapContainer
      center={[location.latitude, location.longitude]}
      zoom={15}
      scrollWheelZoom={true}
      className={`h-96 w-11/12 lg:w-3/4 ${customStyles}`}
    >
      <UpdateLocation center={[location.latitude, location.longitude]} />

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[location.latitude, location.longitude]}
        icon={customMarkerIcon}
      >
        <Popup>{venueName}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Location;
