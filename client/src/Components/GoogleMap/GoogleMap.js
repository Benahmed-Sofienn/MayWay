<<<<<<< HEAD
import React, { Component } from "react";
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
  Polyline,
} from "google-maps-react";

export class MapContainer extends Component {
  
  
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    
    mapCenter: {
      lat:
      (this.props.arr[0].lat +
        this.props.arr[this.props.arr.length - 1].lat) /
        2,
        lng:
        (this.props.arr[0].lng +
          this.props.arr[this.props.arr.length - 1].lng) /
          2,
        },
      };
      
  render() {
    
    return (
      <div style={{ width: "700px", height: "400px" }}>
        <Map
          google={this.props.google}
          
          zoom={12}
          containerStyle={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
         
          initialCenter={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
          center={{
          
            lat:
              (this.props.arr[0].lat +
                this.props.arr[this.props.arr.length - 1].lat) /
              2,

            
            lng:
              (this.props.arr[0].lng +
                this.props.arr[this.props.arr.length - 1].lng) /
              2,
          }}
        >

          
          {this.props.arr.map((pos, i) => (
            <Marker
              key={i}

              
              icon= {this.props.icon}
              position={{
                lat: pos.lat,
                lng: pos.lng,
              }}
              
            />
          ))}

          

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Polyline
            path={this.props.arr}
            strokeColor="#0000FF"
            strokeOpacity={0.8}
            strokeWeight={4}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBbAQyjRfzpkz6RgoquBEt1h3Cj3EZ-j-I",
})(MapContainer);
=======
// import React ,{Component} from 'react' ;
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


// import './GoogleMap.css'

// export class MapContainer extends Component {
//   state = {
//     showingInfoWindow: false,
//     activeMarker: {},
//     selectedPlace: {},
//   };

//   onMarkerClick = (props, marker, e) =>
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true,
//     });

//   onMapClicked = (props) => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null,
//       });
//     }
//   };

//   render() {
//     return (
//         <div className="map">
//       <Map google={this.props.google} onClick={this.onMapClicked}>
//         <Marker onClick={this.onMarkerClick} name={"Current location"} />

//         <InfoWindow
//           marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow}
//         >
//           <div>
//             <h1>{this.state.selectedPlace.name}</h1>
//           </div>
//         </InfoWindow>
//       </Map>
//       </div>
//     );
//   }
// }

// export default GoogleApiWrapper({
//     apiKey: ('AIzaSyBbAQyjRfzpkz6RgoquBEt1h3Cj3EZ-j-I')
//   })(MapContainer)
>>>>>>> 0e2a531d39ae815637780e2befef972ed99cfec9
