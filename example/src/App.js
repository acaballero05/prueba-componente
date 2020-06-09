import React, { Component } from "react";
import GithubLogo from "./github.jpg";
import MediumProfile from "react-medium-profile";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "dee.aye.en",
      search: ""
    };
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "70px"
        }}
      >
        <h2 style={{}}>{"<MediumProfile />"}</h2>
        <h5 style={{ color: "gray", marginBottom: "50px", marginTop: 0 }}>
          npm i react-medium-profile
        </h5>

        <MediumProfile
          username={
            this.state.search.length > 0
              ? this.state.search
              : this.state.username
          }
        />
        <h1 style={{ margin: 0, paddingTop: "30px" }}>
          <span role="img" aria-label="pointing up">
            👆
          </span>
        </h1>
        <h5
          style={{
            textAlign: "center",
            margin: 0,
            paddingTop: "5px"
          }}
          onClick={() => this.setState({ username: "treyhuffine" })}
        >
          Click to fetch Medium profile
        </h5>
        <h6 style={{ margin: 0, paddingTop: "10px", color: "gray" }}>or</h6>
        <input
          style={{
            marginTop: "10px",
            border: "none",
            marginBottom: this.state.search.length > 0 ? 0 : "40px",
            padding: "3px",
            textAlign: "center",
            borderBottom: "1px solid black"
          }}
          type="text"
          value={this.state.search}
          onChange={e => this.setState({ search: e.target.value })}
          placeholder="Find a profile"
        ></input>
        {this.state.search.length > 0 && (
          <h6
            style={{
              marginTop: 0,
              marginBottom: "40px",
              paddingTop: "5px",
              color: "gray"
            }}
          >
            Now click the Medium button
          </h6>
        )}
        <div
          style={{
            borderTop: "0.2px solid lightgray",
            borderBottom: "0.2px solid lightgray",
            width: "100%"
          }}
        >
          <h4>props</h4>
          <div style={{ marginLeft: "15px" }}>
            <h4>
              username: string <span style={{ color: "gray" }}>required</span>
            </h4>
            <h4>
              size: number <span style={{ color: "gray" }}>optional</span>
            </h4>
          </div>
        </div>
        <div style={{ position: "fixed", top: "10px", right: "10px" }}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/deeayeen/react-medium-profile"
          >
            <img width="30px" alt="github" src={GithubLogo} />
          </a>
        </div>
      </div>
    );
  }
}
