import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span key={movie.id} className="saved-movie">
            <NavLink
              to={`/movies/${movie.id}`}
              activeStyle={{
                fontWeight: 'bold',
                color: 'red'
              }}
            >
              {movie.title}
            </NavLink>
          </span>
        ))}
        <Link className="home-button" to="/">
          Home
        </Link>
      </div>
    );
  }
}
