import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false
  };
  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
  }
  render() {
    if (this.state.hasError) {
      return <h3 style={{ color: "red" }}>Error</h3>;
    }
    return this.props.children;
  }
}
