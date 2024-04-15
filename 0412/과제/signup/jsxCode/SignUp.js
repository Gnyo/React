import React, { useState } from 'react';
import TableRow from './TableRow';
import './App.css';

export default function SignUp() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const {username, email, password, confirmPassword} = formData;

        if (password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            setFormData({
                confirmPassword: '',
            });
            return;
        }

        console.log('사용자 이름:', username);
        console.log('이메일:', email);
        console.log('비밀번호:', password);

        alert('회원 가입이 완료되었습니다.');
        setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <TableRow
                    type="text"
                    name="이름"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <TableRow
                    type="email"
                    name="이메일"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <TableRow
                    type="password"
                    name="비밀번호"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <TableRow
                    type="password"
                    name="비밀번호 확인"
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                <button type="submit">회원 가입</button>
            </form>
        </div>
    );
}