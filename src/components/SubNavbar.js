import React from "react";
import AppBar from "@material-ui/core/AppBar";

//Icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ViewCarouselIcon from "@material-ui/icons/ViewCarousel";
import WidgetsIcon from "@material-ui/icons/Widgets";
import BuildIcon from "@material-ui/icons/Build";
import ExtensionIcon from "@material-ui/icons/Extension";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import BallotIcon from "@material-ui/icons/Ballot";
import EmailIcon from "@material-ui/icons/Email";
import ForumIcon from "@material-ui/icons/Forum";
import ListAltIcon from "@material-ui/icons/ListAlt";
import AssessmentIcon from "@material-ui/icons/Assessment";
import AppsIcon from "@material-ui/icons/Apps";
import MapIcon from "@material-ui/icons/Map";
import TodayIcon from "@material-ui/icons/Today";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import CropIcon from "@material-ui/icons/Crop";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import AddBoxIcon from "@material-ui/icons/AddBox";

export default function SubNavbar() {
  return (
    <div>
      <AppBar position="static" className="SubNavbar">
        <ul className="Menu">
          <li className="MenuItem">
            <a href="/" className="Dropdown">
              <DashboardIcon color="action" />
              <span className="MenuTitle">General</span>
              <KeyboardArrowDownIcon
                color="action"
                style={{ fontSize: "16px" }}
              />
            </a>
            <ul className="DropdownMenu">
              <li className="DropdownItem">
                <a href="/" className="Dropdown">
                  <DashboardIcon color="action" fontSize="small" />
                  <span className="MenuTitle">Dashboard</span>
                </a>
              </li>
              <li className="DropdownItem">
                <a href="/" className="Dropdown">
                  <BallotIcon color="action" fontSize="small" />
                  <span className="MenuTitle">CMR</span>
                </a>
              </li>
              <li className="DropdownItem">
                <a href="/" className="Dropdown">
                  <ShoppingCartIcon color="action" fontSize="small" />
                  <span className="MenuTitle">Ecommerce</span>
                </a>
              </li>
              <li className="DropdownItem">
                <a href="/" className="Dropdown">
                  <WidgetsIcon color="action" fontSize="small" />
                  <span className="MenuTitle">Widgets</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="MenuItem">
            <a href="/" className="Dropdown">
              <WidgetsIcon color="action" />
              <span className="MenuTitle">Modules</span>
              <KeyboardArrowDownIcon
                color="action"
                style={{ fontSize: "16px" }}
              />
            </a>
            <ul className="DropdownMenu">
              <li className="DropdownItem">
                <a href="/" className="Dropdown">
                  <EmailIcon color="action" fontSize="small" />
                  <span className="MenuTitle">Inbox</span>
                </a>
              </li>
              <li className="DropdownItem">
                <a href="/" className="Dropdown">
                  <ForumIcon color="action" fontSize="small" />
                  <span className="MenuTitle">Chat</span>
                </a>
              </li>
              <li className="DropdownItem">
                <a href="/" className="Dropdown">
                  <ListAltIcon color="action" fontSize="small" />
                  <span className="MenuTitle">ToDo</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="MenuItem">
            <a href="/" className="Dropdown">
              <ViewCarouselIcon color="action" />
              <span className="MenuTitle">Components</span>
              <KeyboardArrowDownIcon
                color="action"
                style={{ fontSize: "16px" }}
              />
            </a>
            <ul className="DropdownMenu">
              <li className="DropdownItem">
                <a href="/" className="Dropdown">
                  <BallotIcon color="action" fontSize="small" />
                  <span className="MenuTitle">UI Components</span>
                </a>
              </li>
              <li className="DropdownItem">
                <a href="/" className="Dropdown">
                  <BuildIcon color="action" fontSize="small" />
                  <span className="MenuTitle">Advanced Components</span>
                </a>
              </li>
              <li className="DropdownItem">
                <a href="/" className="Dropdown">
                  <ExtensionIcon color="action" fontSize="small" />
                  <span className="MenuTitle">About Us</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="MenuItem">
            <a href="/" className="Dropdown">
              <BuildIcon color="action" />
              <span className="MenuTitle">Features</span>
              <KeyboardArrowDownIcon
                color="action"
                style={{ fontSize: "16px" }}
              />
            </a>
            <ul className="DropdownMenu">
              <li className="DropdownItem">
                <a href="/" className="Dropdown">
                  <ListAltIcon color="action" fontSize="small" />
                  <span className="MenuTitle">Forms</span>
                </a>
              </li>
              <li className="DropdownItem">
                <a href="/" className="Dropdown">
                  <AssessmentIcon color="action" fontSize="small" />
                  <span className="MenuTitle">Charts</span>
                </a>
              </li>
              <li className="DropdownItem">
                <a href="/" className="Dropdown">
                  <ExtensionIcon color="action" fontSize="small" />
                  <span className="MenuTitle">Icons</span>
                </a>
              </li>
              <li className="DropdownItem">
                <a href="/" className="Dropdown">
                  <AppsIcon color="action" fontSize="small" />
                  <span className="MenuTitle">Tablet</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="MenuItem">
            <a href="/" className="Dropdown">
              <AssignmentTurnedInIcon color="action" />
              <span className="MenuTitle">Applications</span>
              <KeyboardArrowDownIcon
                color="action"
                style={{ fontSize: "16px" }}
              />
            </a>
            <ul className="DropdownMenu">
              <li className="DropdownItem">
                <a href="/" className="Dropdown">
                  <MapIcon color="action" fontSize="small" />
                  <span className="MenuTitle">Maps</span>
                </a>
              </li>
              <li className="DropdownItem">
                <a href="/" className="Dropdown">
                  <PeopleAltIcon color="action" fontSize="small" />
                  <span className="MenuTitle">Users</span>
                </a>
              </li>
              <li className="DropdownItem">
                <a href="/" className="Dropdown">
                  <TodayIcon color="action" fontSize="small" />
                  <span className="MenuTitle">Calendar</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="MenuItem">
            <a href="/" className="Dropdown">
              <ExtensionIcon color="action" />
              <span className="MenuTitle">Extension</span>
              <KeyboardArrowDownIcon
                color="action"
                style={{ fontSize: "16px" }}
              />
            </a>
            <ul className="DropdownMenu">
              <li className="DropdownItem">
                <a href="/" className="Dropdown">
                  <CropIcon color="action" fontSize="small" />
                  <span className="MenuTitle">Image Cropper</span>
                </a>
              </li>
              <li className="DropdownItem">
                <a href="/" className="Dropdown">
                  <VideoLibraryIcon color="action" fontSize="small" />
                  <span className="MenuTitle">Video Player</span>
                </a>
              </li>
              <li className="DropdownItem">
                <a href="/" className="Dropdown">
                  <AddBoxIcon color="action" fontSize="small" />
                  <span className="MenuTitle">Dropzone</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </AppBar>
    </div>
  );
}
