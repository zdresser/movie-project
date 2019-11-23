import React from 'react';

// Higher Order Component to re-use GenericDetailWrapper
export default function MovieDetailWithType(type) {
  return function (WrappedComponent) {
    return class extends React.Component {
      render() {
        return <WrappedComponent {...this.props}  type={type} />;
      }
    }
  }
}