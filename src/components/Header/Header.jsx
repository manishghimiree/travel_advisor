import { AppBar, Box, InputBase, Toolbar, Typography } from '@material-ui/core';
import { Autocomplete } from "@react-google-maps/api";
import  SearchICon  from '@material-ui/icons/Search';
import UseStyles from "./styles";
import React from 'react';

  const Header = () =>{
    const classes = UseStyles();
    return (
      <AppBar position="static">
        <Toolbar className={classes.Toolbar}>
          <Typography variant="h5" className={classes.title}>
            Travel Advisor
          </Typography>
          <Box display="flex">
            <Typography variant="h6" className={classes.title}>
              Explore new Places
            </Typography>
            {/* <Autocomplete> */}
              <div className={classes.search}>
                <div className={classes.searchIcon}>
               <SearchICon />                
               </div>
               <InputBase placeholder='Search....'  classes={{ root:classes.inputRoot, input:classes.inputInput  }} />
              </div>
  
            {/* </Autocomplete> */}
          </Box>
        </Toolbar>
      </AppBar>
    );};


  export default Header;