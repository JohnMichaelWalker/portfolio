import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Penguin-512.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "1em" }}>John Walker</h2>
            <h4 style={{ color: "grey" }}>Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat lorem, facilisis et tortor eget,
              tempus porttitor turpis. Pellentesque euismod erat eu volutpat tempus. Donec non pharetra felis. Praesent
              nec aliquet dolor. Vivamus sed libero id orci viverra interdum.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>London, UK</p>
            <h5>Phone</h5>
            <p>+44 7850 982484</p>
            <h5>Email</h5>
            <p>johnmichaelwalker2@gmail.com</p>
            <h5>Web</h5>
            <p>johnwalkers.com</p>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2010}
              endYear={2014}
              schoolName={"Imperial College London"}
              schoolDescription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat lorem, facilisis et tortor eget, tempus porttitor turpis. Pellentesque euismod erat eu volutpat tempus. Donec non pharetra felis. Praesent nec aliquet dolor. Quisque maximus lacinia orci. Donec ligula est, viverra non ligula ut, gravi."
              }
            />
            <Education
              startYear={2004}
              endYear={2010}
              schoolName={"Northampton School for Boys"}
              schoolDescription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat lorem, facilisis et tortor eget, tempus porttitor turpis."
              }
            />
            <hr style={{ borderTop: "3px solid grey" }} />
            <h2>Experience</h2>
            <Experience
              startYear={2017}
              endYear={2018}
              jobName={"Alfa"}
              jobDescription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat lorem, facilisis et tortor eget, tempus porttitor turpis."
              }
            />
            <Experience
              startYear={2016}
              endYear={2017}
              jobName={"Amazon.com"}
              jobDescription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat lorem, facilisis et tortor eget, tempus porttitor turpis."
              }
            />
            <Experience
              startYear={2014}
              endYear={2016}
              jobName={"Wood Group"}
              jobDescription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat lorem, facilisis et tortor eget, tempus porttitor turpis."
              }
            />

            <hr style={{ borderTop: "3px solid grey" }} />
            <h2>Skills</h2>
            <Skills skill="Java" progress={72} />
            <Skills skill="HTML/CSS" progress={30} />
            <Skills skill="React" progress={21} />
            <Skills skill="JavaScript" progress={28} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
