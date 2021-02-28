import { connect } from "react-redux";
import React from "react";
import PropTypes from "prop-types";

import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  ButtonGroup,
  Button,
} from "reactstrap";

import {
  openSidebar,
  closeSidebar,
  changeSidebarPosition,
  changeSidebarVisibility,
} from "../../actions/navigation";

import CovidCounter from '../CovidCounter/CovidCounter';

import s from "./Header.module.scss";
import "animate.css";

class Header extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    sidebarPosition: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.toggleSettingsDropdown = this.toggleSettingsDropdown.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);

    this.state = {
      visible: true,
      settingsOpen: false,
    };
  }

  toggleSettingsDropdown() {
    this.setState({
      settingsOpen: !this.state.settingsOpen,
    });
  }

  toggleSidebar() {
    this.props.isSidebarOpened
      ? this.props.dispatch(closeSidebar())
      : this.props.dispatch(openSidebar());
  }

  moveSidebar(position) {
    this.props.dispatch(changeSidebarPosition(position));
  }

  toggleVisibilitySidebar(visibility) {
    this.props.dispatch(changeSidebarVisibility(visibility));
  }

  render() {
    return (
      <Navbar className={`d-print-none main-navbar ${s.root}`}>
        <Nav className="ml-md-0 d-flex nav-responsive">
        <NavItem className="d-md-none">
            <NavLink
              onClick={this.toggleSidebar}
              className={`${s.navItem} text-white`}
              href="#"
            >
              <i className="fa fa-bars" />
            </NavLink>
          </NavItem>

          <NavItem ><CovidCounter /></NavItem>
          <NavItem className={`${s.divider} d-none d-sm-block`} />
          <Dropdown
            className="d-none d-sm-block"
            nav
            isOpen={this.state.settingsOpen}
            toggle={this.toggleSettingsDropdown}
          >
            <DropdownToggle nav className={`${s.navItem} text-white`}>
              <i className="glyphicon glyphicon-cog" />
            </DropdownToggle>
            <DropdownMenu className={`${s.dropdownMenu} ${s.settings}`}>
              <h6>Sidebar on the</h6>
              <ButtonGroup size="sm">
                <Button
                  color={this.props.mode === 'plague' ? "danger" :"primary"}
                  onClick={() => this.moveSidebar("left")}
                  className={
                    this.props.sidebarPosition === "left" ? "active" : ""
                  }
                >
                  Left
                </Button>
                <Button
                  color={this.props.mode === 'plague' ? "danger" :"primary"}
                  onClick={() => this.moveSidebar("right")}
                  className={
                    this.props.sidebarPosition === "right" ? "active" : ""
                  }
                >
                  Right
                </Button>
              </ButtonGroup>
              <h6 className="mt-2">Sidebar</h6>
              <ButtonGroup size="sm">
                <Button
                  color={this.props.mode === 'plague' ? "danger" :"primary"}
                  onClick={() => this.toggleVisibilitySidebar("show")}
                  className={
                    this.props.sidebarVisibility === "show" ? "active" : ""
                  }
                >
                  Show
                </Button>
                <Button
                  color={this.props.mode === 'plague' ? "danger" :"primary"}
                  onClick={() => this.toggleVisibilitySidebar("hide")}
                  className={
                    this.props.sidebarVisibility === "hide" ? "active" : ""
                  }
                >
                  Hide
                </Button>
              </ButtonGroup>
              <h6>Theme</h6>
              <ButtonGroup>
                <Button color="info" onClick={()=> this.props.onchange('light')}>
                  Light
                </Button>
                <Button color="primary" onClick={()=> this.props.onchange('dark')}>
                  Dark
                </Button>
                <Button color="danger" onClick={()=> this.props.onchange('plague')}>
                  Plague
                </Button>
              </ButtonGroup>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Navbar>
    );
  }
}

function mapStateToProps(store) {
  return {
    isSidebarOpened: store.navigation.sidebarOpened,
    sidebarVisibility: store.navigation.sidebarVisibility,
    sidebarPosition: store.navigation.sidebarPosition,
  };
}

export default connect(mapStateToProps)(Header);
