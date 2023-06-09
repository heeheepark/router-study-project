import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const SongDetail = ({ songs }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  // id와 같은 1개의 객체를 songs에서 추출해서 화면을 갱신한다. 화면 갱신을 위해서 state를 활용해야한다.
  const [title, setTitle] = useState('');
  const [musician, setMusician] = useState('');
  const [youtube_link, setYoutubeLink] = useState('');

  // 컴포넌트 마운트 되기 전에 처리한다.
  // 마운트 되기 전에 처리해야 하는 것: 데이터 로딩 및 처리
  useEffect(() => {
    // id를 이용해서 데이터에서 검색한 결과를 출력한다.
    // 배열.find는 조건이 true인 요소를 리턴한다.
    // 배열.find는 여러개가 true일 때, 제일 처음 true인 값만 리턴한다.
    // URL Parameter는 무조건 문자열이다. 그래서 숫자로 변경해주어야 한다.
    const song = songs.find((item) => item.id === parseInt(id));
    // 검색이 되지 않을 경우를 위한 처리
    if (song) {
      setTitle(song.title);
      setMusician(song.musician);
      setYoutubeLink(`https://m.youtube.com/watch?v=${song.youtube_link}`);
    } else {
      alert('자료가 없습니다.');
      navigate('/songs');
    }
  }, []);
  return (
    <div className="mt-5">
      <h2>{title}</h2>
      <p>Original Musician: {musician}</p>
      <p>
        {/* 유투브 보여주기 */}
        <a href={youtube_link} target="_blank">
          View Youtube
        </a>
      </p>
      <Link to="/songs">Return SongList</Link>
    </div>
  );
};

export default SongDetail;
