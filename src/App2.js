import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Component } from "react";

class App2 extends Component {
  constructor() {
    super();
    this.state = { stories: [], news: [] };
  }

  async componentDidMount() {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );
    const ids = await response.json();
    this.setState({
      stories: ids,
    });
  }
}
