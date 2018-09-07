import React from "react";
import PropTypes from "prop-types";
import { withData } from "../../redux/withData";
import UserDetailComponent from "./UserDetail.component";

class UserDetailContainer extends React.Component {
  constructor(props) {
    super(props);

    const { login } = props.match.params;
    const data = props.user.data.filter(data => data.login === login);
    this.state = { data: data.length > 0 ? data[0] : "" };
  }
  componentDidMount() {
    const {data} = this.state;
    const {match} = this.props;
    if (data === "") {
      const me = this;
      const { login } = match.params;
      fetch(`https://api.github.com/users/${login}`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          me.setState({ data });
        })
        .catch(() => {
        });
    }
  }
  render() {
    const {data} = this.state;
    if (data === "") {
      return (
        <img
          src="../loading.gif"
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
          alt="loading"
        />
      );
    }
    return (
      <UserDetailComponent
        login={data.login}
        id={data.id}
        avatarUrl={data.avatar_url}
        htmlUrl={data.html_url}
      />
    );
  }
}

UserDetailContainer.defaultProps = {
  user: {},
  match:{}
}

UserDetailContainer.propTypes = {
  user: PropTypes.object,
  match: PropTypes.object
};

export default withData(UserDetailContainer);
