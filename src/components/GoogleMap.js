import React from "react"
import GoogleMapReact from "google-map-react"

import icon from "/public/images/map-icon.svg"

const MapMarker = ({ text }) => <div>{icon}</div>

export default function SimpleMap() {
    const defaultProps = {
        center: {
            lat: 52.6393312,
            lng: -2.2286737,
        },
        zoom: 11,
    }

    return (
        <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyByRJclZNrgSoheegP3cACOQD8HWCjerqk" }} defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
                <MapMarker text={icon} />
            </GoogleMapReact>
        </div>
    )
}
