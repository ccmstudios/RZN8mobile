import React from "react";
import Content from "../components/content";

class Audiobooks extends React.Component {
  render() {
    return (
      <div>
        <h1>This is Audiobooks</h1>
        <div id ='audiobooks'>
          <Content
            title="audiobook test"
            img="https://hanabooktopia.com/wp-content/uploads/2019/06/Children-Of-Blood-And-Bone-indonesia-edition.jpg"
            description="audiobook test"
          />
          <Content
            title="audiobook test"
            img="https://hanabooktopia.com/wp-content/uploads/2019/06/Children-Of-Blood-And-Bone-indonesia-edition.jpg"
            description="audiobook test"
          />
        </div>
      </div>
    );
  }
}

export default Audiobooks;
