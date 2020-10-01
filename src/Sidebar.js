import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import {ExpandMoreOutlined} from "@material-ui/icons";




 
function Sidebar() {
    return (
        <div className="sidebar">
          <SidebarRow src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIG9oJOjjoXseLZ3TuiGgQ3hhq6Df9gOI6fA&usqp=CAU" title="SkyTech1981"/>
          <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center " />
          <SidebarRow Icon={EmojiFlagIcon} title="Pages" />
          <SidebarRow Icon={PeopleIcon} title="Friends" />                    
          <SidebarRow Icon={ChatIcon} title="Messenger" /> 
          <SidebarRow Icon={StorefrontIcon} title="Market" />
          <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
          <SidebarRow Icon={ExpandMoreOutlined} title="MarketPlace" />
        </div>
    )
}

export default Sidebar
