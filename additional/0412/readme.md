# Web Programming 05

## 이벤트 핸들링 실습

### 컴포넌트에서 DOM 이벤트 사용
- DOM이벤트 프로퍼티 사용해야 함
- JSX 내에서 'on+이벤트명' 형태의 프로퍼티로 사용

![image-14](https://github.com/Gnyo/React/assets/102850495/c9e7264d-03d2-4dcd-92cf-ce82f181cfa7) |
---|

<br>

### 리액트의 이벤트 문법
- 소문자 대신 카멜 케이스(camelCase) 사용
    - onClick = {changename} (x)
    - onClick = {changeName} (o)
- JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러 전달
    - onClick = "changeName()" (x)
    - onClick = {changeName} (o)

1. 'Main.js' 파일 생성 후 코드 입력
```
import React, { useState } from "react";

const Main = () => {
  const [myName, setMyName] = useState("홍길동");
  function changeName() {
    setMyName(myName === "홍길동" ? "김길동" : "홍길동");
  }
  return (
    <div>
      <h1>안녕하세요. {myName} 입니다.</h1>
      <button onClick={changeName}>Change</button>
    </div>
  );
};
export default Main;
```

2. 'App.js' 코드 수정
```
import './App.css';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
```

3. 터미널에서 서버 불러오기
```
npm start
```

![image](https://github.com/Gnyo/React/assets/102850495/14702873-ff10-47b7-9656-e3884c520204) |
---|

<br>

- 함수 직접 선언하여 사용 가능

1. 'Main.js' 파일 코드 수정
```
import React, { useState } from "react";
const Main = () => {
  const [myName, setMyName] = useState("홍길동");
  return (
    <div>
      <h1>안녕하세요. {myName} 입니다.</h1>
      <button
        onClick={() => {
          setMyName(myName === "홍길동" ? "김길동" : "홍길동");
        }}
      >
        Change
      </button>
    </div>
  );
};
export default Main;
```

2. 터미널에서 서버 불러오기
```
npm start
```

![image](https://github.com/Gnyo/React/assets/102850495/28a1e0df-2c6a-4c9c-969d-42de2d02bcb7) |
---|

<br>

### 경고창 띄우기
1. 'warning.html' 파일 생성 후 코드 입력
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script src="https://unpkg.com/react@15/dist/react.min.js"></script>
    <script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.38/browser.min.js"></script>
</head>

<body>
    <div id="root"></div>
    <script type="text/babel">
        // 컴포넌트를 정의합니다.
        class Hello extends React.Component {
            render() {
                // 이벤트를 정의합니다.
                const clickHandler = (e) => {
                    window.alert('안녕하세요.')
                }
                // 클릭 이벤트를 지정합니다.
                return (
                    <div onClick={clickHandler}>Click Me</div>
                )
            }
        }
        // 컴포넌트를 사용합니다.
        ReactDOM.render(
            <Hello />,
            document.getElementById('root'))
    </script>
</body>

</html>
```

2. 서버 불러오기
- html 코드에 오른쪽 마우스를 눌러 Open with Live Server 클릭

![image](https://github.com/Gnyo/React/assets/102850495/33515472-99d7-466d-8228-04a22e785111) | ![image](https://github.com/Gnyo/React/assets/102850495/bc8544ef-8bcc-45c5-a730-692aac1597e2)
---|---|
기본 상태 | Clik Me를 누른 상태 

<br>

### 클릭했을 때 클래스의 메소드 호출

1. 'warning.html' 파일 코드 수정
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <script src="https://unpkg.com/react@15/dist/react.min.js"></script>
    <script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.38/browser.min.js"></script>
</head>

<body>
    <div id="root"></div>
    <script type="text/babel">
        // 컴포넌트를 정의합니다.
        class Hello extends React.Component {
            constructor(props) {
                super(props);
                // 이벤트 핸들러의 this를 설정합니다. --- (※1)
                this.clickHandler = this.clickHandler.bind(this);
            }
            clickHandler(e) {
                const name = this.props.name;
                window.alert(`${name}님 안녕하세요.`);
            }
            render() {
                // 클릭 이벤트를 지정합니다. --- (※2)
                return <div onClick={this.clickHandler}>Click Me</div>;
            }
        }
        // 컴포넌트를 사용합니다.
        ReactDOM.render(<Hello name="홍길동" />, document.getElementById("root"));
    </script>
</body>

</html>
```

2. 서버 불러오기
- html 코드에 오른쪽 마우스를 눌러 Open with Live Server 클릭

![image](https://github.com/Gnyo/React/assets/102850495/779fe3a9-9729-4e0b-b4fa-77d3206686b8) | ![image](https://github.com/Gnyo/React/assets/102850495/35e51f7c-3564-4934-9255-b120cc6759d9)
---| ---|
기본 상태 | Clik Me를 누른 상태 

<br>

### 체크박스 구현

1. 'checkbox.html' 파일 생성 후 코드 입력
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <script src="https://unpkg.com/react@15/dist/react.min.js"></script>
    <script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.38/browser.min.js"></script>
</head>

<body>
    <div id="root"></div>
    <script type="text/babel">
        // 상태를 가진 컴포넌트를 정의합니다.
        class CBox extends React.Component {
            // 생성자
            constructor(props) {
                super(props);
                // 상태를 초기화합니다.
                this.state = { checked: false };
            }
            render() {
                // 체크되지 않았을 때의 상태
                let mark = "□";
                let bstyle = { fontWeight: "normal" };
                // 체크돼 있는지 확인합니다.
                if (this.state.checked) {
                    mark = "■";
                    bstyle = { fontWeight: "bold" };
                }
                // 클릭했을 때의 이벤트를 지정합니다.
                const clickHandler = (e) => {
                    const newValue = !this.state.checked;
                    this.setState({ checked: newValue });
                };
                // 렌더링할 내용을 반환합니다.
                return (
                    <div onClick={clickHandler} style={bstyle}>
                        {mark} {this.props.label}
                    </div>
                );
            }
        }
        // 리액트로 DOM의 내용을 변경합니다.
        const dom = (
            <div>
                <CBox label="Apple" />
                <CBox label="Banana" />
                <CBox label="Orange" />
                <CBox label="Mango" />
            </div>
        );
        ReactDOM.render(dom, document.getElementById("root"));
    </script>
</body>

</html>
```

2. 서버 불러오기
- html 코드에 오른쪽 마우스를 눌러 Open with Live Server 클릭

![image](https://github.com/Gnyo/React/assets/102850495/5348b7e3-198d-47fb-bbee-e9906e45e665) | ![image](https://github.com/Gnyo/React/assets/102850495/72b0b3b8-722d-4ecb-9c4c-f112d119855f)
---| ---|
기본 상태 | Apple, Orange를 선택한 상태

<br>

---

## Component Life Cycle

### 생명주기(Life cycle)
- 사람은 태어나서 인생을 살다가 나이가 들어 죽는 생명주기를 가짐
- React Component도 마찬가지로 생명주기가 있음
- 즉, Component가 생성되는 시점과 사라지는 시점이 정해짐

![image-23](https://github.com/Gnyo/React/assets/102850495/91791b3c-a920-4fa2-b1b2-f7dc7978c33e)
![image-24](https://github.com/Gnyo/React/assets/102850495/612925c4-2744-4db3-a72c-2aa2e3f3e9bf)

---
