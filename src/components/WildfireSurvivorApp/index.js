import React from "react";
import StartPage from "../StartPage";
import PreviewPage from "../PreviewPage";
import CompletePage from "../CompletePage";

class WildfireSurvivorApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <StartPage />
        <PreviewPage />
        <CompletePage />
      </div>
    );
  }
}
export default WildfireSurvivorApp;
