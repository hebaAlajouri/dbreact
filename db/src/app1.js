import React from "react";

class App1 extends React.Component {
  render() {
    const { data } = this.props;
    return (
        <div>
        <h1>Data from Backend</h1>
        <p>Name: {data?.name}</p>
        <p>Age: {data?.age}</p>
        <p>Field: {data?.field}</p>
      </div>
    );
  }
}

export default App1;
