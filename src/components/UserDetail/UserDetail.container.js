import React from "react";
import PropTypes from "prop-types";
import { withData } from "../../Redux/withData";
import UserDetailComponent from "./UserDetail.component";

class UserDetailContainer extends React.Component {
  constructor(props) {
    super(props);

    const { login } = this.props.match.params;
    const data = this.props.user.data.filter(data => data.login === login);
    this.state = { data: data.length > 0 ? data[0] : "" };
  }
  componentDidMount() {
    if (this.state.data === "") {
      const me = this;
      const { login } = this.props.match.params;
      fetch(`https://api.github.com/users/${login}`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          me.setState({ data });
        })
        .catch(error => {
          console.log("Request failed", error);
        });
    }
  }
  render() {
    if (this.state.data === "") {
      return (
        <img
          src="../loading.gif"
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
        />
      );
    }
    return (
      <UserDetailComponent
        login={this.state.data.login}
        id={this.state.data.id}
        avatar_url={this.state.data.avatar_url}
        html_url={this.state.data.html_url}
      />
    );
  }
}
UserDetailContainer.propTypes = {
  user: PropTypes.object,
  match: PropTypes.object
};
export default withData(UserDetailContainer);
