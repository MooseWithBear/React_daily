import React, { useState } from 'react'; //추가
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState (['남자코트 추천', '강남 우동 맛집', '강남 스타벅스 추천']);
  let [따봉, 따봉변경] = useState(0)
  // let 제목 = '강남 고기 맛집'; //데이터 바인딩
  let 로고명 = '리액트' 
  let 로고클래스 = 'logoImage' 
  // 글제목변경 (글제목[0]='여자코트추천') 
function 제목바꾸기() {
  // 글제목변경(['여자 코트 추천', '강남 라면 맛집', '역삼 스타벅스 추천']);
  var newArray = [...글제목];
  // var newArray = 글제목 으로 작성하면 값은 변경되지만 웹상에선 적용되지 않는데, 
  // 스테이트가 deep copy되지 않은 채로 newArray가 변경된 것이므로 state값이 변하지 않는다고 인식하여
  // html이 새로고침되지 않는 것 같다.
  newArray[0] = '여자코트 추천';
  newArray[1] = '강남 삼겹살 맛집';
  newArray[2] = '역삼역 스타벅스 추천';

  글제목변경( newArray )
}

  return (
<div className="App">
    <div className="black-nav">
    <img className={로고클래스} src={ logo } alt = {로고명} />
        <div style={ {color:'#61dafb'} }> 개발 Blog </div>
    </div>
    <button onClick={ 제목바꾸기 }>제목변경버튼</button>
    <div className='list'>
      <h3> { 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉+1)  } }>👍</span> {따봉} </h3>
      <p>11월 10일 발행</p> 
    <hr/>
    </div>
    <div className='list'>
      <h3> { 글제목[1] } </h3>
      <p>11월 10일 발행</p>
    <hr/>
    </div>
        <div className='list'>
      <h3> { 글제목[2] } </h3>
      <p>11월 10일 발행</p>
    <hr/>
    </div>

  
<Modal></Modal>

</div>
  );
}


function Modal() {
  return (
    <>
    <div className='modal'>
      <h2>제목</h2>
        <p>날짜</p> 
        <p>상세내용</p>
    </div>
    </>
  )
}




export default App;
