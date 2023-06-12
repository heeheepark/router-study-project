import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const SongList = ({ songs }) => {
  const list = songs.map((item) => {
    return (
      <li className="list-group-item" key={item.id}>
        <Link to={`/songs/${item.id}`}>
          {item.title} {item.musician}
          {/* font-awesome */}
          <span className="float-end badge bg-secondary">
            <i className="fa fa-play"></i>
          </span>
        </Link>
      </li>
    );
  });
  return (
    <div className="card card-body">
      <h2>SongList</h2>
      <ul className="list-group">
        {list}
        {/* 중첩된 Route 표현: context 활용 */}
        <Outlet context={{ songs }} />
      </ul>
    </div>
  );
};

export default SongList;
