import React, { Component } from 'react';

const HomePage = (props) => {
  return (
    <div>
      <h2>This is the Home page</h2>
    </div>);
}
const AboutPage = (props) => {
  return (
    <div>
      <h2>This is the About page</h2>
      </div>

  );
}
const ServicePage = (props) => {
  return (
    <div>
      <h2>This is the Service page</h2>
      </div>);
}

const ContactPage = (props) => {
  return (
    <div>
      <h2>This is the Contact page</h2>
      </div>);
}
const ErrorPage = (props) => {
  return (
    <div>
      <h2>404 Page not found</h2>
      </div>);
}

export { HomePage, AboutPage, ServicePage, ContactPage, ErrorPage };