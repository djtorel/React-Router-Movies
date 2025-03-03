import React from 'react';

const MovieCard = ({ movie: { title, director, metascore, stars }, save }) => (
  <div className="save-wrapper">
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
    {save && (
      <div className="save-button" onClick={save}>
        Save
      </div>
    )}
  </div>
);

export default MovieCard;
