import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { longitude, latitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ longitude, latitude });
    } catch (error) {
      console.log("Error getting location", error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
