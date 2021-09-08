import React, { Component } from "react";

export class Table extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      class: "",
      address: "",
      list: [],
    };
  }
  addList() {
    let detail = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      class: this.state.class,
      address: this.state.address,
    };
    let arr = [...this.state.list];
    arr.push(detail);
    console.log("arr", arr);
    this.setState({ list: arr });
  }
  delete(ele) {
    let arr = this.state.list.filter((el) => el !== ele);
    this.setState({
      list: arr,
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.firstName}
          placeholder="First Name"
          onChange={(e) => this.setState({ firstName: e.target.value })}
        />
        <input
          type="text"
          value={this.state.lastName}
          placeholder="First Name"
          onChange={(e) => this.setState({ lastName: e.target.value })}
        />
        <input
          type="text"
          value={this.state.class}
          placeholder="First Name"
          onChange={(e) => this.setState({ class: e.target.value })}
        />
        <input
          type="text"
          value={this.state.address}
          placeholder="First Name"
          onChange={(e) => this.setState({ address: e.target.value })}
        />
        <button onClick={() => this.addList()}>Add List</button>
        <div>
          {this.state.list.map((ele) => {
            return (
              <>
                <h1>{ele.firstName}</h1>;<h1>{ele.lastName}</h1>;
                <h1>{ele.class}</h1>;<h1>{ele.address}</h1>;
                <button onClick={() => this.delete(ele)}>Delete</button>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Table;
