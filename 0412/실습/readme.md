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

### 스톱워치 만들기
1. 'Stopwatch.js' 파일 생성 후 코드 입력
```
import React, { Component } from "react";
import "./style.css";
// Stopwatch 컴포넌트를 정의합니다.
class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 초깃값을 설정합니다.
      isLive: false,
      curTime: 0,
      startTime: 0,
    };
    this.timerId = 0;
  }
  // 마운트했을 때
  componentWillMount() {
    this.timerId = setInterval((e) => {
      this.tick();
    }, 1000);
  }
  // 언마운트했을 때
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  // 매 초 실행됩니다.
  tick() {
    if (this.state.isLive) {
      const v = new Date().getTime();
      this.setState({ curTime: v });
    }
  }
  // 시작/중지 버튼을 클릭했을 때
  clickHandler(e) {
    // 중지할 때
    if (this.state.isLive) {
      this.setState({ isLive: false });
      return;
    }
    // 시작할 때
    const v = new Date().getTime();
    this.setState({
      curTime: v,
      startTime: v,
      isLive: true,
    });
  }
  // 출력할 시계를 생성합니다.
  getDisp() {
    const s = this.state;
    const delta = s.curTime - s.startTime;
    const t = Math.floor(delta / 1000);
    const ss = t % 60;
    const m = Math.floor(t / 60);
    const mm = m % 60;
    const hh = Math.floor(mm / 60);
    const z = (num) => {
      const s = "00" + String(num);
      return s.substr(s.length - 2, 2);
    };
    return (
      <span className="disp">
        {z(hh)}:{z(mm)}:{z(ss)}
      </span>
    );
  }
  // 화면 렌더링
  render() {
    let label = "START";
    if (this.state.isLive) {
      label = "STOP";
    }
    const disp = this.getDisp();
    const fclick = (e) => this.clickHandler(e);
    return (
      <div className="Stopwatch">
        <div>{disp}</div>
        <button onClick={fclick}>{label}</button>
      </div>
    );
  }
}
export default Stopwatch;

```

2. 'style.css' 파일 생성 후 코드 입력
```
.Stopwatch {
    text-align: center;
}
.disp {
    font-size: 70px;
}
button {
    font-size: 24px;
    width: 280px;
}
```

3. 'App.js' 코드 수정
```
import './App.css';
import Stopwatch from './Stopwatch';

function App() {
  return (
    <div className="App">
      <Stopwatch />
    </div>
  );
}

export default App;
```

4. 터미널에서 서버 불러오기
```
npm start
```

![image](https://github.com/Gnyo/React/assets/102850495/a1af3f08-2c98-477a-b0c8-28a23a372ada) | ![image](https://github.com/Gnyo/React/assets/102850495/b52b6ae5-2b03-4152-9a9f-6d14e1934910) | ![image](https://github.com/Gnyo/React/assets/102850495/8965e158-b0cf-4abb-b439-d2efa350aba6)
---|---|---|
기본 상태 | START를 누른 상태 | STOP을 누른 상태

<br>

### 간단한 입력 양식 만들기
1. 'SimpleForm.js' 파일 생성 후 코드 입력
```
import React from "react";
// 입력 양식 컴포넌트입니다.
export class SimpleForm extends React.Component {
  constructor(props) {
    super(props);
    // 상태를 초기화합니다.
    this.state = { value: "" };
  }
  // 값이 변경됐을 때
  doChange(e) {
    const newValue = e.target.value;
    this.setState({ value: newValue });
  }
  // 전송 버튼을 눌렀을 때
  doSubmit(e) {
    window.alert("전송: " + this.state.value);
    e.preventDefault();
  }
  // 화면 렌더링
  render() {
    // 이벤트를 메서드에 바인딩합니다.
    const doSubmit = (e) => this.doSubmit(e);
    const doChange = (e) => this.doChange(e);
    return (
      <form onSubmit={doSubmit}>
        <input type="text" value={this.state.value} onChange={doChange} />
        <input type="submit" value="전송" />
      </form>
    );
  }
}
```

2. 'App.js' 코드 수정
```
import './App.css';
import { SimpleForm } from './SimpleForm';

function App() {
  return (
    <div className="App">
      <SimpleForm />
    </div>
  );
}

export default App;
```

3. 터미널에서 서버 불러오기
```
npm start
```

![image](https://github.com/Gnyo/React/assets/102850495/535525a6-c4f1-4ca0-bd0b-9117f9b709ba) | ![image](https://github.com/Gnyo/React/assets/102850495/87d1dc6d-a19b-43f8-97e7-8eb2c9d255df)| ![image](https://github.com/Gnyo/React/assets/102850495/93ac16cf-d85a-4087-824e-b5bce70aecde)
---|---|---|
기본 상태 | 입력창에 '메롱'을 입력한 상태 | 전송을 누른 상태

<br>

### 숫자만 입력받는 텍스트박스 만들기
1. 'NumberForm.js' 파일 생성 후 코드 입력
```
import React, { Component } from "react";
// 숫자 입력 컴포넌트
export default class NumberForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  // 값이 변경됐을 때
  doChange(e) {
    const curValue = e.target.value;
    // 숫자 이외의 값을 제거합니다.
    const newValue = curValue.replace(/[^0-9]/g, "");
    this.setState({ value: newValue });
  }
  // 전송 버튼을 눌렀을 때
  doSubmit(e) {
    window.alert("전송: " + this.state.value);
    e.preventDefault();
  }
  // 화면 렌더링
  render() {
    // 이벤트를 메서드에 바인딩합니다.
    const doSubmit = (e) => this.doSubmit(e);
    const doChange = (e) => this.doChange(e);
    return (
      <form onSubmit={doSubmit}>
        <input type="text" value={this.state.value} onChange={doChange} />
        <input type="submit" value="전송" />
      </form>
    );
  }
}
```

2. 'App.js' 코드 수정
```
import './App.css';
import NumberForm from './NumberForm';

function App() {
  return (
    <div className="App">
      <NumberForm />
    </div>
  );
}

export default App;
```

3. 터미널에서 서버 불러오기
```
npm start
```

![image](https://github.com/Gnyo/React/assets/102850495/085862c2-0d4f-4771-9a11-ac529d3aa91b) | ![image](https://github.com/Gnyo/React/assets/102850495/9af89043-05b9-4ae3-90b5-61205d276bd0)| ![image](https://github.com/Gnyo/React/assets/102850495/ac96497e-51e5-45d1-81fc-479979dd8a48)
---|---|---|
기본 상태 | 입력창에 '1234'를 입력한 상태(숫자가 아니면 입력이 안됨) | 전송을 누른 상태

<br>

### 여러 개의 입력 항목을 가진 입력 양식 만들기
1. 'MultiForm.js' 파일 생성 후 코드 입력
```
import React, { Component } from "react";
// 숫자 입력 컴포넌트
export default class NumberForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  // 값이 변경됐을 때
  doChange(e) {
    const curValue = e.target.value;
    // 숫자 이외의 값을 제거합니다.
    const newValue = curValue.replace(/[^0-9]/g, "");
    this.setState({ value: newValue });
  }
  // 전송 버튼을 눌렀을 때
  doSubmit(e) {
    window.alert("전송: " + this.state.value);
    e.preventDefault();
  }
  // 화면 렌더링
  render() {
    // 이벤트를 메서드에 바인딩합니다.
    const doSubmit = (e) => this.doSubmit(e);
    const doChange = (e) => this.doChange(e);
    return (
      <form onSubmit={doSubmit}>
        <input type="text" value={this.state.value} onChange={doChange} />
        <input type="submit" value="전송" />
      </form>
    );
  }
}
```

2. 'style.css' 파일 생성 후 코드 입력
```
.multiForm {
    width: 400px;
    text-align: left;
    margin-left: auto;
}
.multiForm p {
    margin: 4px
    ; padding: 4px;
}    
```

3. 'App.js' 코드 수정
```
import './App.css';
import MultiForm from './MultiForm';

function App() {
  return (
    <div className="App">
      <MultiForm/>
    </div>
  );
}

export default App;
```

3. 터미널에서 서버 불러오기
```
npm start
```

![image](https://github.com/Gnyo/React/assets/102850495/9d3a7caa-4a4f-4f89-acff-d47f75c9bec0) | ![image](https://github.com/Gnyo/React/assets/102850495/d7343e2e-1fe4-49fe-8245-76563795fa57) | ![image](https://github.com/Gnyo/React/assets/102850495/12bbddee-74c6-412c-b318-9c45a36697a4)
---|---|---|
기본 상태 | 정보를 각각 입력창에 입력한 상태 | 전송을 누른 상태 
