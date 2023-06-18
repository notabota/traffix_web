import React from "react";
import ReactDOM from "react-dom/client";
import App from "./layout/App";
import Info from "./layout/Info";
import {StyledEngineProvider} from '@mui/joy/styles';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

// Pages content
import Home from "./pages/Home";
import OSM from "./pages/OSM";
import Notifications from "./pages/Notifications";
import Report from "./pages/Report";
import Chart from "./pages/Chart";
import Detail from "./pages/Detail"

// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAe4MOlPYsS4RBkyl513Gms4OIORm8Mr8w",
    authDomain: "khkys22.firebaseapp.com",
    projectId: "khkys22",
    storageBucket: "khkys22.appspot.com",
    messagingSenderId: "131955597136",
    appId: "1:131955597136:web:36794e5681966252cf5655",
    measurementId: "G-XH5L3KHHKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <StyledEngineProvider injectFirst>
        <BrowserRouter>
            <Routes>
                <Route path="" element={<App childComp={
                    <Home/>
                }/>}/>
                <Route path="map" element={<OSM/>}/>
                <Route path="notifications" element={<App childComp={
                    <Notifications db={db}/>
                }/>}/>
                <Route path="report" element={<App childComp={
                    <Report db={db}/>
                }/>}/>
                <Route path="map/chart" element={<Info childComp={
                    <Chart db={db}/>
                }/>}/>
                <Route path="map/detail" element={<Info childComp={
                    <Detail id={"0"}/>
                }/>}/>
            </Routes>
        </BrowserRouter>
    </StyledEngineProvider>
);
