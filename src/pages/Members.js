import React from 'react';

/*
  React 컴포넌트에서 이미지 소스 불러오는 방법
  1. src: 각각의 이미지를 import 한 다음 이미지 태그의 src속성에 적용
    - 단점: 이미지가 여러개 들어가면 그 수만큼 코드를 작성해야 한다.
    ex) import gogo from "./img/aaa.jpg"
        <img src={gogo} />
  2. public 폴더 사용
    public 폴더 안쪽에 이미지(이미지 폴더)를 배치한다.
    2.1 process.env.PUBLIC_URL 구문을 사용하는 방법
      const path = process.env.PUBLIC_URL;
      <img src={`${path}/${item.photo}`} ...>
    2.2 public 폴더 절대경로를 구해서 직접 출력하는 방법(추천!)


*/

const Members = ({ members }) => {
  const path = process.env.PUBLIC_URL;
  const imgStyle = {
    width: 90,
    heigth: 80,
  };
  const list = members.map((item, index) => {
    return (
      <div key={index} className="col-6 col-md-4 col-lg-3">
        <img src={`${path}/${item.photo}`} alt={item.name} className="img-thumbnail" style={imgStyle} />
        <br />
        <h6>{item.name}</h6>
        <br />
        <br />
      </div>
    );
  });
  return (
    <div className="card card-body">
      <h2>Artists</h2>
      <div className="container">
        <div className="row">{list}</div>
      </div>
    </div>
  );
};

export default Members;
