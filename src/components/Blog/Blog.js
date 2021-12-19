import React, { Component } from "react";
import Markdown from "markdown-to-jsx";
import README from "./Blog/article.md";

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = { md: "" };
  }

  componentWillMount() {
    fetch(README)
      .then((res) => res.text())
      .then((md) => {
        this.setState({ md });
      });
  }

  render() {
    let { md } = this.state;
    console.log({ Markdown });

    return (
      <div className="post">
        <Markdown children={md} />
      </div>
    );
  }
}

export default Blog;
