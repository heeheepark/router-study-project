import React from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';

const About = ({ title }) => {
  // 웹브라우저의 라우터를 변경하려면 useNavigate() 를 활용
  const navigate = useNavigate();
  const location = useLocation();
  // console.log('주소창 객체', location.state);
  // console.log('주소창 객체', location.state.pathname);
  // console.log('주소창 객체', location.state.search);
  // console.log('주소창 객체', location.state.hash);

  // useLocation()  === window.location 객체와 같다.
  // useSearchParams()를 이용하면 수월하게 쿼리를 추출할 수 있다.
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("page"));
  // console.log(searchParams.get("total"));

  // 현재 페이지
  const [page, setPage] = useState(1);

  useEffect(() => {
    const strPage = parseInt(searchParams.get('page'));
    // NaN !== NaN
    // isNaN(값)  :  NaN 인지 아닌지 검사(true/false)
    setPage(!isNaN(strPage) ? strPage : 1);
  }, [searchParams]);

  const goPrev = () => {
    if (page > 0) {
      navigate(window.location.pathname + `?page=${page - 1}&total=5`);
    }
  };
  const goNext = () => {
    console.log('goNext');
    navigate(window.location.pathname + `?page=${page + 1}&total=5`);
  };

  // const goHome = () => {
  //   // navigate 를 이용해서 정보를 전달하고 싶으면
  //   // state 옵션에 객체를 정의해서 전달해 준다.
  //   navigate('/', { state: { from: '/About', age: 20 } });
  // };

  return (
    <div className="card card-body">
      <h2>About {title} </h2>
      <div>
        <div className="m-2"> 현재 페이지 : {page} </div>
        <button className="btn btn-secondary m-1" onClick={goPrev}>
          Prev
        </button>
        <button className="btn btn-secondary m-1" onClick={goNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default About;
