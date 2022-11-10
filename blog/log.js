//!리액트의 대원칙 => immutable data


// node.js 최신버전 설치
// 폴더 들어온 후터미널 열고
//! npx create-react-app blog    
// 설명 :
// npx -> 설치를 도와주는 명령어 node.js에 포함돼있음
// create-react-app -> 라이브러리 이름. 만들기 쉽게 세팅이 다 되어있는 boilerplate라고 한다.
// blog-> 프로젝트 이름
//! Success!, Happy hacking! 나오면 정상적으로 설치 된 것이다.
// 생성된 폴더에서 src폴더의 App.js파일이 메인파일이고 = index.html이라고 보면된다.

//! blog폴더를 아래 터미널로 맞춘 후 npm start -> http://localhost:3000/페이지 실행됨


//^ public/index.html 파일이 실행되지만 안에는 아무것도 없음.
//^ 이유는 index.js파일의 코드를 통해서 App.js코드가 index.html파일로 이동되기 때문
//^ 즉, 실질적 코딩은 App.js, App.css 에서 하면 된다.
//node_module 폴더 : 사이트를 구동하기위한 라이브러리를 모아놓은 폴더
//public 폴더 : static 파일들을 모아놓은 폴더
//package.json 파일 : 설치한 라이브러리 및 버전 목록의 기록 (건들필요 없지만 오류가 나는 경우 로그를 보고 참고 할 수 있다.)

//^ React는 왜 index.html로 만들지 않고 JSX를 사용하여 제작하는가? (App.js)
// -> 리액트의 가장 큰 장점은 데이터 바인딩이 아주 쉽다는 것이다.
// -> 스크립트를 사용해 번거롭게 변경된 데이터를 가져와야하지만 리액트에서는 <h4> {변수명, 함수명()} </h4>
// -> 데이터 바인딩을 통해 다양한 곳에 쉽게 가져다 넣을 수 있다.

//! div안에 css를 직접 넣을 때는 아래와 같이 {}안에 {}를 넣고 camel방식을 사용한다. -> js문법이랑 충돌하지 않도록 하기 위함
// <div style={ {color:'#61dafb', fontSize:'20px'} }> 개발 Blog </div> 


//! 데이터를 저장하는 방법
// 1. 변수에 보관 -> let = '강남 고기 맛집'; 으로 저장하고 불러오기
//* 2. state에 보관 
// -> import React,{ useState } from 'react'; 선언 후
// -> useState('aaa')로 적었을 때 useState안에는 aaa이외의 값을 넣을 수 있는  Array[a,b]로 변한다.
// (ES6 destructuring) var [a,b] = [10,100]; -> a와 b에 각각 10, 100의 값이 저장되는 문법
// -> 이 문법을 활용하여 let [a,b] = useState(['A','B']); 로 작성한다면 a[0]='A', a[1]='B'가 된다.
// -> 그리고 b는 함수(); 가 된다.
//* states에 보관하는 이유? 
//* states가 변경될 때 HTML이 자동으로 재렌더링(새로고침)이 된다. 그러므로 자주바뀌는 중요한 데이터는 변수보다는 state로 저장해서 쓰는 것이 좋다.


//! state로 클릭시 숫자가 올라가는 기능 만들어보기
//0.       <h3> { 글제목[0] } <span onClick={ ()=>{ console.log(1) } }>👍</span> 0</h3> //0부분을 state활용
//1.  let [따봉, 따봉변경] = useState(0)



//! state 수정 원칙 그리고 
//1. state 초기값을 직접 건들지 않는다.
//2. 대신 state 초기값을 새로운 변수에 저장하여 수정한다.


// function 제목바꾸기() {
     // 글제목변경(['여자 코트 추천', '강남 라면 맛집', '역삼 스타벅스 추천']);
//     var newArray = [...글제목];
     // var newArray = 글제목 으로 작성하면 값은 변경되지만 웹상에선 적용되지 않는데, 
     // 스테이트가 deep copy되지 않은 채로 복사되어 newArray가 변경된 것이므로 state값이 변하지 않는다고 인식하여
     // html이 새로고침되지 않는 것 같다.
//     newArray[0] = '여자코트 추천';
//     글제목변경( newArray )
//   }
  

//! 컴포넌트(component)만드는 법
// export default App 위에 아래 함수를 만든 후
//{/* <Modal></Modal> */} 을 함수처럼 사용하면 된다.
// function Modal() {
//     return (
//       <div className='modal'>
//         <h2>제목</h2>
//           <p>날짜</p> 
//           <p>상세내용</p>
//       </div>
  
//     )
//   }

//https://www.youtube.com/watch?v=bq2SjODrhJQ&list=PLfLgtT94nNq1e6tr4sm2eH6ZZC2jcqGOy&index=7
//6강
