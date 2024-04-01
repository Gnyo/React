# Web Programming 03

### JSX
- JSX는 자바스크립트로 변환이 되어야 실행됨
- 자바스크립트와 HTML을 같이 기술 가능
- 원래: HTML 안에 자바스크립트를 엮는 방식 -> JSX: 자바스크립트 안에 HTML 태그를 엮는 방식
- DOM을 구성할 때 JSX로 구성한다.</br></br>
![image](https://github.com/Gnyo/React/assets/102850495/83ff0565-b94d-4714-a9ac-a5568b089c36)

아래의 코드들 세 개 모두 같은 결과를 출력하는 코드임</br>
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
- JSX 태그는 자식을 포함할 수 있음 </br>

#### ② 자바스크립트 표현식
- JSX 안에서도 자바스크립트 표현식을 사용할 수 있음
- 자바스크립트 표현식을 작성하려면 JSX내부에서 코드를 { }로 감싸주면 됨
- 유효한 모든 JavaScript 표현식을 넣을 수 있음
![image](https://github.com/Gnyo/React/assets/102850495/59e8c527-4d70-435e-89d0-13041b7b9981)
예를 들어 var = expression</br>
expression은 constant or literal, variable, operator, Function-method 등으로 구성됨</br>
중괄호 안에 expression 구성 요소 들어갈 수 있음 </br>

#### ③ JSX 자체도 표현식임
- 컴파일이 끝나면, JSX 표현식이 JavaScript 객체로 인식됨
- 즉, JSX를 if 구문 및 for loop 안에 사용하고, 변수에 할당하고, 인자로서 받아들이고, 함수로부터 반환 가능
- SX는 자바스크립트 문법을 확장시킨 것, 따라서 모든 자바 스크립트 문법을 지원
- 스크립트에 추가로 XML과 HTML 섞어서 사용하면 됨
- xml, html 코드를 사용 시 중간에 자바스크립트 코드를 사용하고 싶으면 중괄호 {}를 사용하여 묶어주면 됨 </br>
![image](https://github.com/Gnyo/React/assets/102850495/aba0fead-5b13-4488-a434-ee75dc199030) </br>

#### ④ if문(for문) 대신 삼항 연산자(조건부 연산자) 사용
- if 구문과 for 루프는 JavaScript 표현식이 아니기 때문에 JSX 내부 자바스크립트 표현식에서는 사용할 수 없음
- 문장 사용 불가, 수식 가능
- 그렇기 때문에 조건부에 따라 다른 렌더링 시 JSX 주변 코드에서 if문을 사용하거나, {}안에서 삼항 연산자(조건부 연산자) 사용
- 삼항 연산자는 operator이므로 사용 가능함
![image](https://github.com/Gnyo/React/assets/102850495/e476c6a3-ae74-4484-ab12-12fa8722b4cc) </br>

#### ⑤ JSX 속성 정의(표현을 위해 코드의 <>를 ＜＞으로 대체)
- 속성에 따옴표를 이용해 문자열 리터럴 정의 가능
- 속성에 중괄호를 이용해 자바스크립트 표현식 포함 가능
  > const element = ＜div tabIndex="0"＞＜/div＞; </br>
  > const element = ＜img src={user.avatarUrl}＞＜/img＞; </br>

- 리액트에서 DOM 요소에 스타일을 적용할 때는 문자열 형태로 넣는 것이 아니라 객체 형태로 넣어줘야 함
- 자바스크립트 코드니까 중괄호가 있는데 객체형태이므로 또 중괄호가 생겨 이중 중괄호 형태가 된 것
- 또한 스타일 이름 중에서 background-color처럼 -문자가 포함되는 이름은 -문자를 없애고 카멜 표기법으로 작성
- background-color는 backgroundColor로 작성
- 중괄호 두개 사용
  > ＜p style="color: blue"＞ Lorem ipsum dolor. ＜/p＞ </br>
  > ＜p style={{color: blue}}＞ Lorem ipsum dolor. ＜/p＞ </br>

#### 6. React DOM은 HTML 어트리뷰트 이름 대신 camelCase를 사용한다.
1. JSX 스타일링
- JSX에서 자바스크립트 문법을 쓰려면 {}를 써야 하기 때문에, 스타일을 적용할 때에도 객체 형태로 넣어 주어야 함
- 카멜 표기법으로 작성해야 함 (font-size => fontSize)
2. class 대신 className
- 일반 HTML에서 CSS 클래스를 사용할 때에는 class라는 속성 사용
- JSX에서 class는 className이 되고 tabindex는 tabIndex가 됨 </br>

#### ⑦ JSX 내에서 주석 사용 방법
- JSX 내에서 {/*…*/}와 같은 형식 사용
- 시작 태그를 여러 줄 작성 시에는, 내부에서 //의 형식 사용 가능

--- 

### JSX Code 작성 실습
- 터미널에서 아래의 명령어를 입력하여 'book'이라는 파일 생성
> npx create-react-app book

- book/src/jsxCode/book.js에 아래의 코드 작성
![image](https://github.com/Gnyo/React/assets/102850495/22566617-b9c8-4880-a95f-95fbbef66262)

- book/src/jsxCode/book.js에 아래의 코드 작성
![image](https://github.com/Gnyo/React/assets/102850495/c1af0b98-8a62-4bd9-a97c-971697d86cbf)

- book/src/index.js를 아래와 같이 수정
![image](https://github.com/Gnyo/React/assets/102850495/20aa7e1a-a570-45ff-a8e4-f58ed7ffbd81)

- 터미널에서 아래의 명령어를 입력하여 서버 불러오기
> npm start
![image](https://github.com/Gnyo/React/assets/102850495/f0db735b-67a0-4fc4-9ffa-d5dcbf8b2fca)

---

### Elements
- 가상 DOM은 자바스크립트 객체, 가상 DOM은 리액트 엘리먼트로 이루어져 있고 브라우저 DOM은 DOM 앨리먼트로 이루어져 있음
- 리액트 앱을 이루는 가장 기본적인 단위
- 리액트 앨리먼트는 브라우저 DOM을 만들기 위해 개발자와 브라우저 DOM을 이어주는 오작교
- 앨리먼트(element)는 View에 렌더링할 내용을 React에 알려주기 위한 수단으로, React 애플리케이션을 구성하는 가장 작은 블록
- React 엘리먼트는 HTML 태그의 이름을 값으로 가지는 type 필드와 그 외 속성들을 값으로 전달받는 props 필드로 구성된 객체(object) 형태로 정의되며, React는 이 객체를 읽어들여 DOM을 구성하고 최신 상태로 업데이트하는데 사용
- React 엘리먼트는 일반 객체(plain object)로 손쉽게 생성할 수 있지만, 불변 객체(immutable object)이기 때문에 일단 생성된 후에는 상태나 속성을 변경할 수 없음
- 따라서 React에서 UI를 업데이트하는 방법은 새로운 엘리먼트를 생성하고, 이를 render() 메소드에 전달
![image](https://github.com/Gnyo/React/assets/102850495/12da1604-d2f0-4b71-9f15-2e8115418991)</br>
![image](https://github.com/Gnyo/React/assets/102850495/fd2b0772-318f-4e98-9a01-ebfe25e19a66)</br>

#### 엘리먼트 렌더링
- ReactDOM은 UI를 실제로 브라우저에 렌더링할 때 사용하는 라이브러리
- ReactDOM의 render 함수는 리액트 엘리먼트와 해당 엘리먼트의 모든 자식 엘리먼트를 루트(root) DOM 노드에 렌더
- 루트 DOM 노드는 public 폴더에 있는 index.html 파일의 <div id="root"></div>
- 만들어진 리액트 엘리먼트는 모두 이 노드 안에 들어가기 때문에 루트라는 이름이 붙여짐
- React만으로 구축된 애플리케이션은 일반적으로 단일 루트 DOM 노드를 가짐
- React 엘리먼트를 렌더링 하기 위해서는 우선 DOM 엘리먼트를 ReactDOM.createRoot()에 전달한 다음, React 엘리먼트를 root.render()에 전달해야 함
- 모든 엘리먼트는 React DOM에서 관리하고, 루트(root)DOM 노드라고 부름
- React 엘리먼트를 루트 DOM 노드에 렌더링하려면 ReactDOM.render()로 전달하면 됨

---

### React로 DOM 변경하기 
#### 간단한 시계 만들기(JavaScript)
1. 코드
- 자바스크립트로 실시간 시간 표시하기
- 처음 시작은 오후 01:44:40으로 시작되고, 자바스크립트가 실행되면 현재 시각으로 변경되는 코드
![image](https://github.com/Gnyo/React/assets/102850495/8b407bb8-8a77-4307-bd21-41b481717dea)

2. 서버 불러오는 방법
- 코드 부분에서 오른쪽 마우스 클릭
- Open with Live Server 클릭</br>
![image](https://github.com/Gnyo/React/assets/102850495/25c0272e-269e-4c40-ba09-9d7e0da6aee9)

3. 결과
![image](https://github.com/Gnyo/React/assets/102850495/663c266e-212c-419b-a81c-86b160a24433)
![image](https://github.com/Gnyo/React/assets/102850495/e6a03429-b3cf-4b70-9abf-5cbb52fa127a) </br>


#### 간단한 시계 만들기(React)
1. 코드
- 정기적으로 시간을 출력하는 코드
![image](https://github.com/Gnyo/React/assets/102850495/69ef77f0-b3b4-4ced-b398-dc1f26c9ca8f)

2. 결과
![image](https://github.com/Gnyo/React/assets/102850495/10cfd350-e30d-4191-ab5d-5276d63336f0)</br>

#### 바이너리 시계 만들기
1. 코드
- ※1 부분에서 현재 시각을 2진수로 나타냄
- ※2 부분에서 바이너리 시계의 각 줄을 나타내는 리액트 객체를 JSX로 만들고, lines 배열에 추가
- ※3 부분에서 앞의 코드에서 화면에 DOM을 변경
![image](https://github.com/Gnyo/React/assets/102850495/e9114110-01a8-41be-8a43-3d962d8d9f0f)
![image](https://github.com/Gnyo/React/assets/102850495/5af1fd66-6c68-4f95-aae5-1b29a07deda0)

2. 결과
![image](https://github.com/Gnyo/React/assets/102850495/46e3566a-604f-49ac-a019-356f996c508a)
