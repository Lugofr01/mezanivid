import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";

// parameters is liked or not liked and which is a bolean value T/F
// output is onclick

class Like extends Component {
  state = {};
  render() {
    return <FontAwesomeIcon icon={faHeart} color="red" size="x" />;
  }
}

export default Like;
