import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>John Michael Walker</h2>
            <img
              src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Penguin-512.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat lorem, facilisis et tortor eget,
              tempus porttitor turpis. Pellentesque euismod erat eu volutpat tempus. Donec non pharetra felis. Praesent
              nec aliquet dolor. Quisque maximus lacinia orci. Donec ligula est, viverra non ligula ut, gravida
              pellentesque elit. Fusce elit nisl, blandit eget fringilla vitae, rutrum ut dolor.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    +44 7850 982484
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    johnmichaelwalker2@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}>
                    <i className="fa fa-skype" aria-hidden="true" />
                    mySkypeId
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
