import React, { Component } from 'react';
import ReactMapboxGl, { GeoJSONLayer } from "react-mapbox-gl";

class MapBox extends Component {
  render() {
    const Map = ReactMapboxGl({
      accessToken: process.env.REACT_APP_ACCESS_TOKEN
    });

    const geojson = {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'geometry': {
            'type': 'LineString',
            'coordinates': [
              [
                -122.4159547,
                37.7921393
              ],
              [
                -122.4155259,
                37.7921938
              ]
            ]
          }
        }
      ]
    };
    
    const linePaint: MapboxGL.LinePaint = {
      'line-color': 'red',
      'line-width': 5
    };
    return (
      <div>
        <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
        height: "100vh",
        width: "50vw"
        }}>
          <GeoJSONLayer
            data={geojson}
            linePaint={linePaint}
          />
        </Map>
      </div>
    )
  }
}

export default MapBox;