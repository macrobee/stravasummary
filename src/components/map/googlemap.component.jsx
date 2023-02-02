import React, { useRef, useState } from "react";
import GoogleMapReact from "google-map-react";
import uniqid from "uniqid";

import { sampleLatLngArray } from "../../utils/polylines";

import { Marker } from "@react-google-maps/api";
import { Marker as Point } from "../marker/marker.styles";
const { REACT_APP_GOOGLE_API_KEY } = process.env;

const marker1 = {
  lat: 43.653225,
  lng: -79.383186,
};
const coordinates = [
  { lat: 43.70068, lng: -79.27249 },
  { lat: 43.69907, lng: -79.2736 },
  { lat: 43.69781, lng: -79.27467 },
  { lat: 43.69666, lng: -79.27524 },
  { lat: 43.69586, lng: -79.27577 },
  { lat: 43.6939, lng: -79.2772 },
  { lat: 43.69368, lng: -79.27747 },
];
// const handleGoogleMapApi = (google) => {
//   var flightPath = new google.maps.Polyline({
//     path: [{ lat: 43.70068, lng: -79.27249 },
//       { lat: 43.69907, lng: -79.2736 },],
//     geodesic: true,
//     strokeColor: "#FF0000",
//     strokeOpacity: 1,
//     strokeWeight: 5,
//   });

//   flightPath.setMap(google.map);
// };
const SimpleMap = () => {
  const map = useRef(null);
  const [currentPointData, setCurrentPointData] = useState([]);

  const defaultProps = {
    center: {
      lat: 43.653225,
      lng: -79.383186,
    },
    zoom: 11,
  };
  const renderLatLngArray = (latLngArray) => {
    let arrayOfPointObjects = [];
    let previousPoint = null;
    for (let point of latLngArray) {
      if (previousPoint === null) {
        previousPoint = point;
        continue;
      }
      const yDiff = point.lat - previousPoint.lat;
      const xDiff = point.lng - previousPoint.lng;
      const angleBetween = Math.atan(yDiff / xDiff) * 60 + 90; //angle in radians, converted to degrees
      const distanceBetween = Math.round(Math.sqrt(xDiff ** 2 + yDiff ** 2)); //distance formula
      previousPoint = point;
      arrayOfPointObjects.push({
        lat: point.lat,
        lng: point.lng,
        rotate: angleBetween,
        length: 50,
      });
    }

    console.log(currentPointData);
    setCurrentPointData(arrayOfPointObjects);
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "70vh", width: "50%" }}>
      <button
        onClick={() => {
          renderLatLngArray(sampleLatLngArray.coordinates);
        }}
      >
        Render route
      </button>
      <GoogleMapReact
        ref={map}
        bootstrapURLKeys={{ key: REACT_APP_GOOGLE_API_KEY, language: "en" }}
        center={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        // onGoogleApiLoaded={handleGoogleMapApi}
      >
        {currentPointData.length &&
          currentPointData.map((point) => {
            const { lat, lng, rotate, length } = point;
            return (
              <Point
                lat={lng}
                lng={lat}
                key={uniqid()}
                rotate={rotate}
                length={length}
              >
                {""}
              </Point>
            );
          })}
        {/* {sampleLatLngArray.coordinates.map((point) => {
          return (
            <Point lat={point.lng} lng={point.lat} key={uniqid()}>
              {""}
            </Point>
          );
        })} */}
        <Point lat={marker1.lat} lng={marker1.lng} rotate={100} length={50}>
          {""}
        </Point>
      </GoogleMapReact>
    </div>
  );
};
export default SimpleMap;
