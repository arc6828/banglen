import React, { useEffect, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import MapView from "react-native-maps";

import { FontAwesome } from "@expo/vector-icons";
import UniversityMarkers from "./UniversityMarkers";


export default function MyMapView(props) {
    const width = Dimensions.get("screen").width;
    const height = Dimensions.get("screen").height/2 - 40;  

    if (true) {
        //DISPLAY MAP ON YOUR LOCATION
        return (
            <MapView
                style={{ width: width, height: height }}
                initialRegion={{
                    latitude: props.latitude,
                    longitude: props.longitude,
                    latitudeDelta: 0.5,
                    longitudeDelta: 0.5,
                }}
                showsUserLocation={true}                
            >
                {/* <MapView.Marker
                    coordinate={{
                        latitude: Number(14.1334383),
                        longitude: Number(100.6146767),
                    }}
                    title={"มหาวิทยาลัยราชภัฏวไลยอลงกรณ์ ในพระบรมราชูปถัมภ์"}
                    key={"x1"}
                /> */}
                <UniversityMarkers items={props.markers} />

            </MapView>
        );
    } else {
        //DISPLAY DEFAULT MAP on 0,0
        return <MapView style={{ width: width, height: height }}></MapView>;
    }
}
