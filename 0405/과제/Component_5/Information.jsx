import React from 'react';
import TableRow from './TableRow';
import './style.css';

export default function Information() {
    return (
      <div className="container">
        <table>
          <TableRow title="본명" content="안근효 (安謹孝, An Geun-hyo)" />
          <TableRow title="출생" content={
            <>
              <p>2003년 4월 10일 (20세)</p>
              <p>대한민국 울산광역시 남구 삼산동</p>
            </>
            }
          />
          <TableRow title="본관" content="순흥 안씨 (順興 安氏)" />
          <TableRow title="거주지" content="부산 남구 대연동" />
          <TableRow title="가족 관계" content={
            <>
              <p>아버지 안인철(1963년생)</p>
              <p>어머니 이경숙(1964년생)</p>
              <p>첫째언니 안근록(1991년생)</p>
              <p>둘째언니 안근비(1997년생)</p>
              <p>셋째언니 안근우(2000년생)</p>
              <p>반려견 안짱아(2018년생)</p>
            </>
            }
          />
          <TableRow title="학력" content={
            <>
              <p>학성초등학교(졸업)</p>
              <p>울산여자중학교(졸업)</p>
              <p>학성여자고등학교(졸업)</p>
              <p>경성대학교(재학)</p>
            </>
            }
          />
          <TableRow title="아르바이트 경력" content={
            <>
              <p>부산 물금읍 임시선별진료소</p>
              <p>울산 북구 세븐일레븐 편의점</p>
              <p>경성대학교 소프트웨어학과사무실</p>
              <p>부산 민락동 우체국</p>
              <p>경성대학교 보건진료소</p>
            </>
            }
          />
          <TableRow title="MBTI" content="INFP" />
          <TableRow title="좌우명" content="한 입 먹더라도 맛있는 걸 먹자" />
          <TableRow title="별명" content="안그뇨 | 안근요 | 안로요 | 숭숭이 | 안숭이 | 안탁갑 | 안매실" />
          <TableRow title="링크" content={
            <>
              <a href="https://www.instagram.com/angeunyo/">Instagram</a>
              {' | '}
              <a href="https://blog.naver.com/rmsgy0410">Naver blog</a>
              {' | '}
              <a href="https://github.com/Gnyo/">Github</a>
            </>
            }
          />
        </table>
      </div>
    );
}