import React, { Component } from "react";
import "./style.css";
export class Information extends Component {
  constructor() {
    super();
    this.state = {
      info: [],
      firstName: "",
      lastName: "",
      class: "",
      address: "",
      phoneNumber: "",
      flag: false,
      editindex: 0,
      update: "",
      updateFirstName: "",
      updateLastName: "",
      updateClass: "",
      updateAddress: "",
      updatePhoneNumber: "",
    };
  }
  addItems() {
    let detail = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      class: this.state.class,
      address: this.state.address,
      phoneNumber: this.state.phoneNumber,
    };
    let arr = [...this.state.info];
    arr.push(detail);
    console.log(arr);
    this.setState({
      info: arr,
      firstName: "",
      lastName: "",
      class: "",
      address: "",
      phoneNumber: "",
      updateItems: "",
    });
  }
  deleteitems(ele) {
    let arr = this.state.info.filter((el) => el !== ele);
    this.setState({
      info: arr,
    });
  }
  edititems(index) {
    this.setState({ flag: true, editindex: index });
  }
  updateItems() {
    let arr = [...this.state.info];
    let detail = {
      firstName: this.state.updateFirstName,
      lastName: this.state.updateLastName,
      class: this.state.updateClass,
      address: this.state.updateAddress,
      phoneNumber: this.state.updatePhoneNumber,
    };
    // this.state.update = detail; //never update the state directly
    arr[this.state.editindex] = detail;
    console.log("arr", arr);
    this.setState({
      info: arr,
      updateFirstName: "",
      updateLastName: "",
      updateClass: "",
      updateAddress: "",
      updatePhoneNumber: "",
    });
  }

  render() {
    console.log("state", this.state);
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Student Information</h1>
        <div className="input-feild">
          <input
            placeholder="First name"
            value={this.state.firstName}
            onChange={(e) => this.setState({ firstName: e.target.value })}
          />
          <input
            placeholder="Last name"
            value={this.state.lastName}
            onChange={(e) => this.setState({ lastName: e.target.value })}
          />
          <input
            placeholder="Class"
            value={this.state.class}
            onChange={(e) => this.setState({ class: e.target.value })}
          />
          <input
            placeholder="Address"
            value={this.state.address}
            onChange={(e) => this.setState({ address: e.target.value })}
          />
          <input
            placeholder="Phone Number"
            value={this.state.phoneNumber}
            onChange={(e) => this.setState({ phoneNumber: e.target.value })}
          />
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => this.addItems()}
          >
            Add Info
          </button>
        </div>
        {this.state.flag && (
          <div className="input-feild">
            <input
              placeholder="First name"
              value={this.state.updateFirstName}
              onChange={(e) =>
                this.setState({ updateFirstName: e.target.value })
              }
            />
            <input
              placeholder="Last name"
              value={this.state.updateLastName}
              onChange={(e) =>
                this.setState({ updateLastName: e.target.value })
              }
            />
            <input
              placeholder="Class"
              value={this.state.updateClass}
              onChange={(e) => this.setState({ updateClass: e.target.value })}
            />
            <input
              placeholder="Address"
              value={this.state.updateAddress}
              onChange={(e) => this.setState({ updateAddress: e.target.value })}
            />
            <input
              placeholder="Phone Number"
              value={this.state.updatePhonenumber}
              onChange={(e) =>
                this.setState({ updatePhoneNumber: e.target.value })
              }
            />

            <button
              type="button"
              class="btn btn-primary"
              onClick={() => this.updateItems()}
            >
              Update
            </button>
          </div>
        )}

        {this.state.info.length !== 0 && (
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Class</th>
                <th scope="col">Address</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {this.state.info.map((ele, index) => {
              console.log("ele:", ele);
              return (
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>{ele.firstName}</td>
                    <td>{ele.lastName}</td>
                    <td>{ele.class}</td>
                    <td>{ele.address}</td>
                    <td>{ele.phoneNumber}</td>

                    <td>
                      <button
                        type="button"
                        class="btn btn-warning  "
                        onClick={() => this.edititems(index)}
                      >
                        Edit
                      </button>{" "}
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={() => this.deleteitems(ele)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        )}
      </div>
    );
  }
}

export default Information;
