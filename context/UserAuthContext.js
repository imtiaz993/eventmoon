import React, { createContext, useState, useEffect, useCallback } from "react";

// api
import { fetchUserLocation } from "utils/network";

//Create Context
export const UserAuthContext = createContext();

const defaultLocation = {
  latitude: "36.114647",
  longitude: "-115.172813",
  name: "Las Vegas",
};

export const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [userLocation, setUserLocation] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [staleCategory, setStaleCategory] = useState(null); // not part of user

  const fetchLocation = useCallback(async () => {
    try {
      const response = await fetchUserLocation();

      if (response.status === 200) {
        if (response.data.country_code2.toLowerCase() === "us") {
          saveUserLocation({
            latitude: response.data.latitude,
            longitude: response.data.longitude,
            name: response.data.city,
          });
        } else {
          saveUserLocation(defaultLocation);
        }
      } else {
        saveUserLocation(defaultLocation);
      }
    } catch (err) {
      console.log(err);
      saveUserLocation(defaultLocation);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("location-credential")) {
      setUserLocation(JSON.parse(localStorage.getItem("location-credential")));
    } else {
      fetchLocation();
    }
  }, [fetchLocation]);

  useEffect(() => {
    if (localStorage.getItem("user-credential")) {
      setUser(JSON.parse(localStorage.getItem("user-credential")));
    } else {
      setUser(null);
    }

    setIsLoading(false);
  }, []);

  const saveUserLocation = (_location) => {
    setUserLocation(_location);
    localStorage.setItem("location-credential", JSON.stringify(_location));
  };

  const saveUserData = (_userData) => {
    
    setUser(_userData);
    localStorage.setItem("user-credential", JSON.stringify(_userData));
  };

  const updateUserLocation = (_location) => {
    saveUserLocation(_location);
  };

  const logout = () => {
    setUser(undefined);
    localStorage.removeItem("user-credential");
  };

  return (
    <UserAuthContext.Provider
      value={{
        user,
        userLocation,
        staleCategory,
        setStaleCategory,
        updateUserLocation,
        saveUserData,
        logout,
        isLoading,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export const UserAuthConsumer = UserAuthContext.Consumer;
