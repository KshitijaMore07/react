import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name || '',
      age: props.age || '',
      email: props.email || '',
      isAdmin: props.isAdmin || false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, age,  email, isAdmin } = this.state;

    let valid = true;

    if (!/^[A-Za-z\s]+$/.test(name.trim())) {
      console.warn('Invalid name');
      valid = false;
    }

    if (age.toString().trim() === '' || isNaN(Number(age))) {
      console.warn('Invalid age');
      valid = false;
    }


     if (!email || ! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.warn('Invalid email');
      valid = false;
    }


    

    if (valid) {
      console.log('Submitted:', {
        name,
        age: Number(age),
        email,
        isAdmin
      });
    }
  };

  render() {
    const { name, age, email, isAdmin } = this.state;

    return (
      <div>
        <h2>{this.props.title || 'User Profile'}</h2>

        <p><strong>Name:</strong> {this.props.name}</p>
        <p><strong>Age:</strong> {this.props.age}</p>
        <p><strong>Email:</strong> {this.props.email}</p>


        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />

          <br />

          <input
            type="text"
            placeholder="Age"
            value={age}
            onChange={(e) => this.setState({ age: e.target.value })}
          />

          <br />



          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />

          <br />



          <label>
            <input
              type="checkbox"
              checked={isAdmin}
              onChange={(e) => this.setState({ isAdmin: e.target.checked })}
            />
            Admin
          </label>

          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

UserProfile.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  email: PropTypes.string,
  isAdmin: PropTypes.bool,
  title: PropTypes.string
};

export default UserProfile;