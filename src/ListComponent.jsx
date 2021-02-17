import React, { Component } from 'react'

export default class ListComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h2>{this.props.name}</h2>

          <table style={{ border: "1px solid black" }}>

            {items.map(item => (
              <tr key={item.id}>

                <td>{item.id} </td> <td>{item.title}</td>

              </tr>
            ))}

          </table>

        </div>
      );
    }
  }
}