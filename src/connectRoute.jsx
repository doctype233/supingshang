import React from "react";

export default function connectRoute(WrappedComponent) {
  return class extends React.Component {
   
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }

    render() {
        return <WrappedComponent />
      
    }
  };
}
