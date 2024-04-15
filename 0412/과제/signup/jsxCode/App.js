import React from 'react';
import SignUp from './SignUp';
import './App.css';

function App() {
    return (
        <div>
            <h1>회원 가입</h1>

            <SignUp />
        
            <p style={{textAlign: 'center'}}>
                오류 발생 시 연락처<br/>
                Email: rmsgy410@naver.com
            </p>
        </div>
    );
}

export default App;