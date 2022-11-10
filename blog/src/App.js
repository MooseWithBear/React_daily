import logo from './logo.svg';
import './App.css';

function App() {
  let 제목 = '강남 고기 맛집'; //데이터 바인딩
  let 로고명 = '리액트'
  let 로고클래스 = 'logoImage' 
  
  return (
<div className="App">
    <div className="black-nav">
    <img className={로고클래스} src={ logo } alt = {로고명} />
        <div style={ {color:'#61dafb'} }> 개발 Blog </div>
    </div>
    <div className='list'>
      <h3> { 제목 } </h3>
      <p>11월 10일 발행</p>
    <hr/>
    </div>
    <div className='list'>
      <h3> { 제목 } </h3>
      <p>11월 10일 발행</p>
    <hr/>
    </div>

</div>
  );
}

export default App;
