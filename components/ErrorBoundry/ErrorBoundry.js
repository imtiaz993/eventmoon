import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }
  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
