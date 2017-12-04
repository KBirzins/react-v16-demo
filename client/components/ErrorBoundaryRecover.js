import React, { Component } from 'react';

class ErrorBoundaryRecover extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Log errors
    console.log('Oops, an error occured!');
    console.log('error:', error);
    console.log('info:', info);
    console.log('Returning children');

    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.children;
    }
    return this.props.children;
  }
}

export default ErrorBoundaryRecover;