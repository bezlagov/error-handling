import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError", { error });

    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log("component catch error", { error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return <h1>something went wrong</h1>
    }
    
    return this.props.children;
  }
}

export default ErrorBoundary;