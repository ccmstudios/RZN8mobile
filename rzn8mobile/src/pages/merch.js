import React from "react";
import Content from "../components/content";

class Merch extends React.Component {
  render() {
    return (
      <div>
        <h1>This is Merch</h1>
        <div id ='merchandise'>
          <Content
            title="Hoodie"
            description="hoodie"
            img="data:image/jpeg;base64,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"
          />
          <Content
            title="Hoodie"
            description="hoodie"
            img="data:image/jpeg;base64,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"
          />
        </div>
      </div>
    );
  }
}

export default Merch;
