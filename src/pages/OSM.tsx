import React, {useEffect, useState} from "react";
import {MapContainer, TileLayer, Marker, Popup, useMap, Polyline, Circle} from 'react-leaflet';
import L, {LeafletEvent, LeafletEventHandlerFn} from 'leaflet';
import {GeoSearchControl, OpenStreetMapProvider} from 'leaflet-geosearch';
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import 'leaflet-geosearch/dist/geosearch.css';
import "leaflet-routing-machine";

const center = {lat: 16.074628565890077, lng: 108.22286466659305}
const trafficMarker = {lat: 16.0745927098904, lng: 108.21901585553233}
const dragonBridgeMarker = {lat: 16.06110969759658, lng: 108.22747188412306}
const rightHanBridgeMarker = {lat: 16.072559327707914, lng: 108.22995273958973}
const leftHanBridgeMarker = {lat: 16.071775806761906, lng: 108.22393922707363}

import camera from "../assets/camera.png"

const cameraIcon = new L.Icon({
    iconUrl: camera,
    iconRetinaUrl: camera,
    iconSize: new L.Point(70, 50),
});

let startLocation: string | undefined, destinationLocation: string | undefined;
let searchMode: boolean = false;

const SearchField = () => {
    const provider = new OpenStreetMapProvider({});

    // @ts-ignore
    const searchControl = new GeoSearchControl({
        provider: provider,
        showMarker: false,
        showPopup: false,
    });

    const map = useMap();
    // @ts-ignore
    useEffect(() => {
        map.addControl(searchControl);
        return () => map.removeControl(searchControl);
    }, []);

    const searchEventHandler: LeafletEventHandlerFn = function (result) {
        if (!searchMode) {
            // @ts-ignore
            startLocation = result.location;
            destinationLocation = undefined;
            searchMode = true
        } else {
            // @ts-ignore
            destinationLocation = result.location;
            console.log(startLocation)
            console.log(destinationLocation)
            // @ts-ignore
            const routingControl = L.Routing.control({
                waypoints: [
                    // @ts-ignore
                    L.latLng(startLocation.y, startLocation.x),
                    // @ts-ignore
                    L.latLng(destinationLocation.y, destinationLocation.x),
                ],
            }).addTo(map);
            searchMode = false
        }
    }

    map.on('geosearch/showlocation', searchEventHandler);

    return null;
};

export default function OSM() {

    const routeChange = (parameter: string) => {
        window.open('map/detail' + parameter, '_blank');
    }

    return (
        <>
            <MapContainer center={center} zoom={17} scrollWheelZoom={true}>
                <SearchField/>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={trafficMarker} icon={cameraIcon}>
                    <Popup>
                        <a href="/map/detail" target="_blank">Xem thông tin chi tiết</a>
                    </Popup>
                </Marker>
                <Marker position={dragonBridgeMarker}></Marker>
                <Marker position={rightHanBridgeMarker}>
                    <Popup>
                        Tuyến đường lưu thông lớn trong giờ cao diểm
                    </Popup>
                </Marker>
                <Circle center={rightHanBridgeMarker} radius={50} color='#7a2021'/>
                <Marker position={leftHanBridgeMarker}></Marker>
                <Circle center={leftHanBridgeMarker} radius={30} color='#7a2021'/>
                <Polyline positions={[
                    leftHanBridgeMarker, rightHanBridgeMarker,
                ]} color={'red'}/>
            </MapContainer>
        </>
    );
}