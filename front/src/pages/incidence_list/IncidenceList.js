import React from "react";

import s from "./IncidenceList.module.scss";


class IncidenceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className={s.root}>

      </div>
    );
  }
}

export default IncidenceList;
