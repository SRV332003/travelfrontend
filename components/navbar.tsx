import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';


const Navbar = () => {
    const slug = window.location.pathname
    
    console.log(slug)
    return (
        <BottomNavigation
      className='border-2'
    showLabels
    value={slug}
    onChange={(e, newValue) => {
      window.location = newValue
    }}
    >
    <BottomNavigationAction value={"/"} label="Recents" icon={<HomeIcon   />} />
    <BottomNavigationAction value={"/journey"} label="Favorites" icon={<FavoriteIcon />} />
    <BottomNavigationAction value={"/project"} label="Nearby" icon={<LocationOnIcon />} />
    <BottomNavigationAction value={"/journeyBlog"} label="Favorites" icon={<FavoriteIcon />} />
    <BottomNavigationAction value={"/p"} label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
    );
    }

export default Navbar;