import { useEffect } from "react";
import { useMap } from "react-leaflet";

const UpdateLocation = ({ center }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);

  return null;
};

export default UpdateLocation;
