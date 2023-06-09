import React from 'react';
import { Link } from 'react-router-dom';

const SongList = ({ songs }) => {
  const list = songs.map((item) => {
    return (
      <li className="list-group-item" key={item.id}>
        <Link to={`/songs/${item.id}`}>
          {item.title} {item.musician}
        </Link>
      </li>
    );
  });
  return (
    <div className="card card-body">
      <h2>SongList</h2>
      <ul className="list-group">{list}</ul>
    </div>
  );
};

export default SongList;
