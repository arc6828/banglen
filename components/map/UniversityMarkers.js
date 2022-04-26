import React from "react";
import MapView from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";

export default function UniversityMarkers(props) {

    return props.items.map((item) => (
        <MapView.Marker
            coordinate={{
                "latitude": Number(item.latitude),
                "longitude": Number(item.longitude)
            }}
            title={item.title}
            key={item.id.toString()}
            description={item.description}
        >
            <FontAwesome name="map-marker" size={20} color="tomato" />
        </MapView.Marker>
    ));
}
