import React, { Component } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import { HomePage, AboutPage, ErrorPage, ServicePage, ContactPage } from '../Views/views';
import classes from './RoutingTest.module.scss'

const active = { color: '#ff1100', fontWeight: '900', }
const inactive = { color: '#b5c6ff', fontWeight: '500' }

class RoutingTest extends Component {
  render() {
    return (
      <div>
        <div className={classes.list}>
          <NavLink to="/"
            style={({ isActive }) =>
              isActive
                ? active
                : inactive
            }>Home</NavLink>
          <NavLink to="/about"
            style={({ isActive }) =>
              isActive
                ? active
                : inactive
            }>
            About</NavLink>
          <NavLink to="/service"
            style={({ isActive }) =>
              isActive
                ? active
                : inactive
            }>Service</NavLink>
          <NavLink to="/contacts"
            style={({ isActive }) =>
              isActive
                ? active
                : inactive
            }>Contacts</NavLink>
          <NavLink to="/xyz"
            style={({ isActive }) =>
              isActive
                ? active
                : inactive
            }>BrokenLink</NavLink>

        </div>
        <div>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/service" exact element={<ServicePage />} />
            <Route path="/contacts" exact element={<ContactPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>

        </div>
      </div>
    );
  }
}

export default RoutingTest;