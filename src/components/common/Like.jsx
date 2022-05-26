import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fab } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import React, { Component } from "react";

// parameters is liked or not liked and which is a bolean value T/F
// output is onclick

// class Like extends Component {
//   state = {};
//   render() {
//     if (this.props.liked)
//       return (
//         <FontAwesomeIcon
//           icon={fab}
//           color="red"
//           size="lg"
//           onClick={this.props.onClick}
//           style={{ cursor: "pointer" }}
//         />
//       );
//     else
//       return (
//         <FontAwesomeIcon
//           icon={faHeart}
//           color="red"
//           size="lg"
//           onClick={this.props.onClick}
//           style={{ cursor: "pointer" }}
//         />
//       );
//   }
// }

// export default Like;



const Like = (props) => {
 
  if (props.liked)
  return (
    <FontAwesomeIcon
      icon={fab}
      color="red"
      size="lg"
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
    />
  );
else
  return (
    <FontAwesomeIcon
      icon={faHeart}
      color="red"
      size="lg"
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
    />
  );
}
 
export default Like;