import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App(){
  return(
    <>
      <div className='card'>
        <Avatar />
        <div className='data'>
          <Intro />
          <SkillList />
    
        </div>
      </div>
    </>
  );
}

function SkillList(){
  return(
    <div className='skill-list'>
      <Skill skill='PHP' emoji='👶🏻' color='green' />
      <Skill skill='Html' emoji='👶🏻' color='Blue' />
      <Skill skill='Css' emoji='👶🏻' color='yellow' />

    </div>

  );
}

function Skill(props){
  return(
    <div className='skill' style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>

    </div>

  );
}

function Intro(){
  return(
    <div>
      <h1>นายธิติพันธุ์ สุวรรณโคตร</h1>
      <p>
        นักศึกษาสาขาเทคโนโลยีสารสนเทศและการสื่อสาร คณะวิทยาศาสตร์ 
        มหาวิทยาลัยอุบลราชธานี ชื่นชอบในการใช้คอมพิวเตอร์ เล่นเกม ดูหนัง ฟังเพลง
        ตอนนี้กำลังพยายามเรียนรู้และทำความเข้าใจในการเขียนโค๊ด
      </p>

    </div>

  );
}

function Avatar() {
  return <img className='avatar' src='askdjh.jpg' alt='My Avatar'></img>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);