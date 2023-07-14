import React from 'react'
import GoogleMapReact from 'google-maps-react'



import useStyles from "./styles"
import { useMediaQuery } from '@material-ui/core';

const Map = () => {

const classes = useStyles();
const isMobile = useMediaQuery('(min-width-600px)');
const coordinates = {lat: 0, lng: 0};
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: '0ceef590d7mshfc4345fecf220a2p114f3djsn186bf44b0997',
        }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={}
        // onChange={}

        // onChildClick={}
      ></GoogleMapReact>
    </div>
  );
}

export default Map;