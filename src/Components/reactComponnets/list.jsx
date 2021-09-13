import React, { Component } from "react";
import * as ques from "./importExport";
// import youtuber, {
//   firstname,
//   firstName,
//   lastname,
//   lastName,
// } from "./importExport";
export class List extends Component {
  render() {
    return (
      <>
        <ol>
          <li>{ques.default}</li>
          <li>{ques.firstName}</li>
          <li>{ques.lastName}</li>
          <li>{ques.firstname()}</li>
          <li>{ques.lastname()}</li>
        </ol>
        <ul>
          <li>{ques.add(30, 3)}</li>
          <li>{ques.Subtarct(30, 3)}</li>
          <li>{ques.Multi(30, 3)}</li>
          <li>{ques.div(30, 3)}</li>
        </ul>
        {/* <ol> */}
        {/* <li>{youtuber}</li> */}
        {/* <li>{firstName}</li> */}
        {/* <li>{lastName}</li> */}
        {/* <li>{firstname()}</li> */}
        {/* <li>{lastname()}</li> */}
        {/* </ol> */}
      </>
    );
  }
}

export default List;
