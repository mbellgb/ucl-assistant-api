import React, { Component } from "react";
import { TitleText } from "../components/Typography";
import { Page } from "../components/Containers";

class TimetableScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Page>
        <TitleText>Settings</TitleText>
      </Page>
    );
  }
}

export default TimetableScreen;
