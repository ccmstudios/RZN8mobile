import React from "react";
import Content from "../components/content";

class Books extends React.Component {
  render() {
    return (
      <div>
        <h1>This is Books</h1>
<div id='books'>
        <Content
          img="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105"
          title="Test Book"
          description="Test Description"
        />
        <Content
          img="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105"
          title="Test Book"
          description="Test Description"
        />

</div>
      </div>
    );
  }
}

export default Books;
