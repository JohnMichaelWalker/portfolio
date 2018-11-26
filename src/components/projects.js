import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* React Project 1*/}
          <Card className="project-card" shadow={5}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover"
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue neque nisl, non dictum massa semper
              tincidunt.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* React Project 2*/}
          <Card className="project-card" shadow={5}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover"
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue neque nisl, non dictum massa semper
              tincidunt.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* React Project 3*/}
          <Card className="project-card" shadow={5}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url('https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png') center / cover"
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue neque nisl, non dictum massa semper
              tincidunt.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          {/* Unity Project 1*/}
          <Card className="project-card" shadow={5}>
            <CardTitle
              style={{
                color: "grey",
                height: "176px",
                background:
                  "url(https://images.techhive.com/images/article/2015/03/unity-logo-100571261-large.jpg) center / cover"
              }}
            >
              Unity Project #1
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue neque nisl, non dictum massa semper
              tincidunt.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          {/* Java Project 1*/}
          <Card className="project-card" shadow={5}>
            <CardTitle
              style={{
                color: "black",
                fontWeight: "bold",
                height: "176px",
                background: "url(https://sdtimes.com/wp-content/uploads/2018/03/jW4dnFtA_400x400.jpg) center / cover"
              }}
            >
              Java Project #1
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue neque nisl, non dictum massa semper
              tincidunt.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={tabId => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Unity</Tab>
          <Tab>Java</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content" /> {this.toggleCategories()}
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
