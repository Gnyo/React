# Web Programming 03

### JSX
- JSX는 자바스크립트로 변환이 되어야 실행됨
- 자바스크립트와 HTML을 같이 기술 가능
- 원래: HTML 안에 자바스크립트를 엮는 방식 -> JSX: 자바스크립트 안에 HTML 태그를 엮는 방식
- DOM을 구성할 때 JSX로 구성한다.
![image](https://github.com/Gnyo/React/assets/102850495/83ff0565-b94d-4714-a9ac-a5568b089c36)

! 셋 모두 같은 결과를 출력하는 코드임</br>
![image](https://github.com/Gnyo/React/assets/102850495/971c12e4-ad59-4d5b-9394-49c6696aa5a8)
![image](https://github.com/Gnyo/React/assets/102850495/cad02242-077d-4524-8554-d46712b0ac66)
![image](https://github.com/Gnyo/React/assets/102850495/eda025a3-ac65-4ad0-b606-423b81352578)

---

### React Raw API
- React.createElement() 메서드를 이용해서, 리액트 엘리먼트를 생성
- 첫 번째 인자로 엘리먼트 이름을 넘기며, 두 번째 인자로 속성을 넘기고, 마지막 인자로 엘리먼트의 자식으로
들어갈 값을 넘김
- ReactDOM.render() 메서드를 이용해서, 브라우저 DOM 상의 <div> 엘리먼트에 리액트 엘리먼트를 추가.
- JSX 코드는 Babel과 같은 트랜스파일러(transfiler)를 통해 브라우저가 실행할 수 있는 형태의 자바스크립트로
변환
![image](https://github.com/Gnyo/React/assets/102850495/fd3f4b7b-a7ea-400d-874d-f1ad31d91a41)

---

### JSX 주의할 점
- createElement() 또는 appendChild() methods 없이 HTML로 사용 가능
- 사용이 필수는 아님, 그러나 웹사이트 생성 및 유지보수가 쉬움
![image](https://github.com/Gnyo/React/assets/102850495/c90bab08-e5d6-4f88-abf1-bceffea59baf)

#### ① 반드시 부모 요소 하나가 감싸는 형태여야 함
- Virtual DOM에서 컴포넌트 변화를 감지할 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있기 때문
- 태그가 비어있다면 XML처럼 /> 를 이용해 바로 닫아주어야 함
- JSX 태그는 자식을 포함할 수 있음

#### ② 자바스크립트 표현식
- JSX 안에서도 자바스크립트 표현식을 사용할 수 있음
- 자바스크립트 표현식을 작성하려면 JSX내부에서 코드를 { }로 감싸주면 됨
- 유효한 모든 JavaScript 표현식을 넣을 수 있음
![image](https://github.com/Gnyo/React/assets/102850495/59e8c527-4d70-435e-89d0-13041b7b9981)
예를 들어 var = expression
expression은 constant or literal, variable, operator, Function-method 등으로 구성됨
중괄호 안에 expression 구성 요소 들어갈 수 있음

#### ③ JSX 자체도 표현식임
- 컴파일이 끝나면, JSX 표현식이 JavaScript 객체로 인식됨
- 즉, JSX를 if 구문 및 for loop 안에 사용하고, 변수에 할당하고, 인자로서 받아들이고, 함수로부터 반환할 수 있다.
- SX는 자바스크립트 문법을 확장시킨 것, 따라서 모든 자바 스크립트 문법을 지원한다.
- 스크립트에 추가로 XML과 HTML 섞어서 사용하면 됨
- xml, html 코드를 사용 시 중간에 자바스크립트 코드를 사용하고 싶으면 중괄호 {}를 사용하여 묶어주면 된다.
![image](https://github.com/Gnyo/React/assets/102850495/aba0fead-5b13-4488-a434-ee75dc199030)

#### ④ if문(for문) 대신 삼항 연산자(조건부 연산자) 사용
- if 구문과 for 루프는 JavaScript 표현식이 아니기 때문에 JSX 내부 자바스크립트 표현식에서는 사용할 수 없음
- 문장 사용 불가, 수식 가능
- 그렇기 때문에 조건부에 따라 다른 렌더링 시 JSX 주변 코드에서 if문을 사용하거나, {}안에서 삼항 연산자(조건부 연산자) 사용
- 삼항 연산자는 operator이므로 사용 가능함
![image](https://github.com/Gnyo/React/assets/102850495/e476c6a3-ae74-4484-ab12-12fa8722b4cc)

#### ⑤ JSX 속성 정의
- 속성에 따옴표를 이용해 문자열 리터럴을 정의할 수 있다.
- 속성에 중괄호를 이용해 자바스크립트 표현식을 포함시킬 수 있다.
  >> const element = <div tabIndex="0"></div>;</br>
  >> const element = <img src={user.avatarUrl}></img>;

- 스타일 적용
• 리액트에서 DOM 요소에 스타일을 적용할 때는 문자열 형태로 넣는 것이 아니라 객체 형태로 넣어줘야 한다.
• 자바스크립트 코드니까 중괄호가 있는데 객체형태이므로 또 중괄호가 생겨 이중 중괄호 형태가 된 것이다.
• 또한 스타일 이름 중에서 background-color처럼 -문자가 포함되는 이름은 -문자를 없애고 카멜 표기법으로 작성한다.
• background-color는 backgroundColor로 작성한다.
중괄호 두개 사용
  >> <p style="color: blue">Lorem ipsum dolor.</p>
  >> <p style={{color: blue}}>Lorem ipsum dolor.</p>

#### 6. React DOM은 HTML 어트리뷰트 이름 대신 camelCase를 사용한다.
1. JSX 스타일링
- JSX에서 자바스크립트 문법을 쓰려면 {}를 써야 하기 때문에, 스타일을 적용할 때에도 객체 형태로 넣어 주어야 한다.
- 카멜 표기법으로 작성해야 한다. (font-size => fontSize)
2. class 대신 className
- 일반 HTML에서 CSS 클래스를 사용할 때에는 class 라는 속성을 사용한다.
- JSX에서는class는 className이 되고 tabindex는 tabIndex가 된다

#### ⑦ JSX 내에서 주석 사용 방법
- JSX 내에서 {/*…*/} 와 같은 형식을 사용 한다.
- 시작태그를 여러줄 작성시에는, 내부에서 // 의 형식을 사용할 수 있다

--- 

### JSX Code 작성 실습

---

### 간단한 시계 만들기(JavaScript)
#### 코드

#### 서버 불러오는 방법
- 코드 부분에서 오른쪽 마우스 클릭
- Open with Live Server 클릭
![image](https://github.com/Gnyo/React/assets/102850495/6b62f5e3-a0c2-4c4c-961a-e5f7c2a164ce)

#### 결과

### 간단한 시계 만들기(React)
#### 코드


#### 결과

### 바이너리 시계 만들기
#### 코드
![image](https://github.com/Gnyo/React/assets/102850495/50a866d5-060f-4490-88b9-d6a04ade830a)
![image](https://github.com/Gnyo/React/assets/102850495/6b68b405-7a57-4a2d-9f87-5ce7353855fd)

#### 결과
![image](https://github.com/Gnyo/React/assets/102850495/09e68d41-8e39-4420-96c4-3ee5848eba0c)
