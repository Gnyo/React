# Web Programming 04

### 리스트 컴포넌트

1. 'RList.js' 파일 생성 후 코드 입력
```
import React, { Component } from 'react'

export default class RList extends Component {
    render() {
        const items = this.props.items.split(",")
        const itemsObj = items.map(
        (e) => {
            return <li>{e}</li>
        })
        let title = this.props.title
        if (!title) title = "LIST"
        return (
            <div>
                <h3>{title}</h3>
                <ul>{itemsObj}</ul>
            </div>
        )
    }
}
```

2. 'App.js' 코드 수정
```
import './App.css';
import RList from './RList';
function App() {
    return (
        <div>
        <RList title="Colors" items="Red,Green,Blue,White" />
        </div>
    );
}
export default App;
```

3. 터미널에서 서버 불러오기
```
npm start
```

![image](https://github.com/Gnyo/React/assets/102850495/e56a3496-7b8b-4e69-9d16-933a38b0e804) |
---|

<br>

### 화살표 함수

1. 'index.js' 파일 코드 수정
```
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
// 화살표 함수로 컴포넌트를 정의합니다.
const TitleParts = (props) => (
  <div style={{ backgroundColor: "red", color: "white" }}>
    <h3>{props.title}</h3>
  </div>
);
const ContentParts = (props) => (
  <div style={{ border: "1px solid blue", margin: 15 }}>
    <div>줄거리: {props.body}</div>
  </div>
);
// 메인 컴포넌트
const Book = (props) => (
  <div>
    <TitleParts title={props.title} />
    <ContentParts body={props.body} />
  </div>
);
root.render(
  <React.StrictMode>
    <div>
      <Book title="삼국지" body="옛날 중국 이야기" />
      <Book title="민수기" body="옛날 이스라엘 이야기" />
      <Book title="서유기" body="원숭이가 활약하는 이야기" />
    </div>
  </React.StrictMode>
);
reportWebVitals();
```

2. 터미널에서 서버 불러오기
```
npm start
```

![image](https://github.com/Gnyo/React/assets/102850495/5c986281-e8e0-4787-8e68-0a840723048e) |
---|

<br>


### 댓글 컴포넌트 만들

1. 'Comment.js' 파일 생성 후 코드 입력
```
import React from "react";
const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontsize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
    };

function Comment(props) {
    return (
        <div style={styles.wrapper}>
        <div style={styles.imageContainer}>
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            alt="작성자그림"
            style={styles.image}
            />
        </div>
        <div style={styles.contentContainer}>
            <span style={styles.nameText}>{props.name}</span>
            <span style={styles.commentText}>{props.comment}</span>
        </div>
        </div>
    );
}
export default Comment;
```

2. 'CommentList.js' 파일 생성 후 코드 입력
```
import React from "react";
import Comment from "./Comment";
const comments = [
    {
        name: "홍길동",
        comment: "안녕하세요! 홍길동입니다.",
    },
    {
        name: "유재석",
        comment: "리액트 재밌어요~~.",
    },
    {
        name: "최예진",
        comment: "안녕하세요! 프론트엔드 개발자입니다.",
    },
];
    function CommentList(props) {
    return (
        <div>
        {comments.map((comment) => {
            return <Comment name={comment.name} comment={comment.comment} />;
        })}
        </div>
    );
}
export default CommentList;
```

3. 'Index.js' 파일 코드 수정
```
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CommentList from "./CommentList";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>
);
```

3. 터미널에서 서버 불러오기
```
npm start
```

![image](https://github.com/Gnyo/React/assets/102850495/7ff519c3-8caa-4ff3-9b47-bd8d0f366b78) |
---| 

<br>
