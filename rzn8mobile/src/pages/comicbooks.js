import React from "react";
import Content from "../components/content";

class Comicbooks extends React.Component {
  render() {
    return (
      <div>
        <h1>This is Comicbooks</h1>
<div id ='comicbooks'>
    
        <Content
          img="https://fastly.syfy.com/sites/syfy/files/2017/09/2001-wolverine-159.jpg"
          title="Comic Title"
          description="test Comic"
        />
        <Content
          img="https://fastly.syfy.com/sites/syfy/files/2017/09/2001-wolverine-159.jpg"
          title="Comic Title"
          description="test Comic"
        />
</div>
      </div>
    );
  }
}

export default Comicbooks;
