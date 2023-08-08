import React from 'react';
import {Firestore} from "@firebase/firestore";
import {useSearchParams} from "react-router-dom";

interface CameraProps {
    id: string
}

export default function Camera({id}: CameraProps) {
    let [searchParams, setSearchParams] = useSearchParams();

    // let camSource: string = "http://127.0.0.1:5000/cam/" + searchParams.get('pos');

    // console.log(camSource);

    return <iframe width="780" height="450" src="https://www.youtube.com/embed/G4Rod-SspOI"
                   title="Nguyeenx Vux Live Stream" frameBorder="0"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                   allowFullScreen></iframe>
}
