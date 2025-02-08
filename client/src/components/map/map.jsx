import { useEffect, useRef, useState, useCallback } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function MapComponent({ attractions, onNavigate }) {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [infoWindow, setInfoWindow] = useState(null);

  // Initialize map
  useEffect(() => {
    if (!mapRef.current) return;

    const newMap = new window.google.maps.Map(mapRef.current, {
      center: { lat: 40.7589, lng: -73.9851 },
      zoom: 13,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
      ],
    });

    setMap(newMap);
    setInfoWindow(new window.google.maps.InfoWindow());
  }, []);

  // Clear markers on unmount
  useEffect(() => {
    return () => {
      markers.forEach((marker) => marker.setMap(null));
    };
  }, [markers]);

  // Update markers when attractions change
  useEffect(() => {
    if (!map || !infoWindow) return;

    // Clear existing markers
    markers.forEach((marker) => marker.setMap(null));

    // Create new markers
    const newMarkers = attractions.map((attraction) => {
      const marker = new window.google.maps.Marker({
        position: attraction.coordinates,
        map: map,
        title: attraction.name,
        animation: window.google.maps.Animation.DROP,
      });

      marker.addListener("click", () => {
        infoWindow.setContent(`
          <div class="info-window">
            <h3>${attraction.name}</h3>
            <p>${attraction.category}</p>
            <button onclick="window.dispatchEvent(new CustomEvent('navigate', { detail: '${attraction.location}' }))">
              Get Directions
            </button>
          </div>
        `);
        infoWindow.open(map, marker);
      });

      return marker;
    });

    setMarkers(newMarkers);

    // Fit bounds to show all markers
    if (newMarkers.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      newMarkers.forEach((marker) => bounds.extend(marker.getPosition()));
      map.fitBounds(bounds);
    }
  }, [map, infoWindow, attractions]); // Removed markers from dependencies

  // Handle navigation
  useEffect(() => {
    const handleNavigate = (event) => {
      onNavigate(event.detail);
    };
    window.addEventListener("navigate", handleNavigate);
    return () => window.removeEventListener("navigate", handleNavigate);
  }, [onNavigate]);

  return <div ref={mapRef} className="google-map" />;
}

function Map({ attractions, onNavigate }) {
  return (
    <Wrapper apiKey={GOOGLE_MAPS_API_KEY}>
      <MapComponent attractions={attractions} onNavigate={onNavigate} />
    </Wrapper>
  );
}

export default Map;
