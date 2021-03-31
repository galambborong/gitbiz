import React from 'react';
class Username extends React.Component {
  state = {
    inputUsername: ''
  };

  handleChange = ({ target }) => {
    this.setState({ inputUsername: target.value });
  };

  render() {
    return (
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addUser(this.state.inputUsername);
          this.setState({ inputUsername: '' });
        }}
      >
        <input
          className="form__input"
          type="text"
          id="username"
          placeholder="github username"
          onChange={this.handleChange}
        />
        <button className="form__btn" type="submit"><i className="fab fa-github"></i></button>
      </form>
    );
  }
}

export default Username;
