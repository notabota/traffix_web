import React from 'react';
import {Firestore} from "@firebase/firestore";
import {useSearchParams} from "react-router-dom";

interface CameraProps {
    id: string
}

export default function Camera({id}: CameraProps) {
    let [searchParams, setSearchParams] = useSearchParams();

    let camSource: string = "http://127.0.0.1:5000/cam/" + searchParams.get('pos');

    console.log(camSource);

    return <iframe width="1200" height="700" src={camSource}></iframe>
}
