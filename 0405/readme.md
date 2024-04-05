# Web Programming 04

### 컴포넌트(Component)
- 컴포넌트(Component) : 입력(props)을 받아 출력(Element)하는 역할
- 리액트는 Component 기반의 구조 (ex. C언어는 function으로 구성)
- 리액트는 모든 페이지가 Component로 구성되어 있고 하나의 Component는 또 다른 여러 개의 Component의
조합으로 구성 가능
- 프로그래밍에 있어 재사용이 가능한 각각의 독립된 모듈로, 웹 페이지를 만드는 퍼즐 조각을 뜻함
- 리액트로 화면을 구성하게 되면, 사용자가 볼 수 있는 여러 가지 컴포넌트로 구성되어 있다. 사용자에게 보여지
는 UI 요소를 컴포넌트 단위로 구분하여 구현할 수 있다.
• 개발자는 컴포넌트 조각을 설계하고 만든 컴포넌트를 조합해서 사용자 인터페이스(user interface, UI)를 구축
한다. UI 조각인 컴포넌트를 모으면 전체 퍼즐 그림인 웹 페이지를 만들 수 있다.
• 어떤 데이터 집합을 사용하든 같은 컴포넌트를 사용하면 모두 동일한 DOM 구조가 반환된다.

#### React Component</br>
![image](https://github.com/Gnyo/React/assets/102850495/cd048f01-8eeb-43ef-b703-6d4ef182269f)
![image](https://github.com/Gnyo/React/assets/102850495/e62f5f32-1e2b-4bfd-b810-855f752402b4)
- React Component에서의 입력은 props, 출력은 React Element
- props: property(재산, 속성, 특성)의 복수형, 리액트 컴포넌트의 속성</br>
![image](https://github.com/Gnyo/React/assets/102850495/9817225e-6e09-4e34-a0bb-730370c5604e)


### Function Component
- Recat Component = pure함수(늘 같은 입력값을 받고, 늘 같은 결과값을 반환) 같은 역할을 해야 함
- 즉 일종의 함수라고 생각</br>
![image](https://github.com/Gnyo/React/assets/102850495/e5c9ce3e-76e5-4bc5-8e53-38258ff71b45)


### Class Component
- 자바스크립트 ES6의 class라는 것을 사용해서 만들어진 형태의 Component
- Class Component의 경우 Function Component에 비해 몇 가지 추가적인 기능을 가짐</br>
![image](https://github.com/Gnyo/React/assets/102850495/79de0146-39ca-4f7c-96f3-b4b08fe8c2ab)
- 이 함수는 Function Component를 Class Component로 만든 것

### Component name
- 컴포넌트의 이름은 항상 대문자로 시작(리액트는 소문자로 시작하는 컴포넌트를 DOM 태그로 인식)
- 직접 만든 컴포넌트는 대문자로, 소문자로 시작하는 컴포넌트는 HTML 컴포넌트임</br>
![image](https://github.com/Gnyo/React/assets/102850495/21f7086b-e2db-4c80-8e74-893e0dc1ca4c)

---

### Function Component 만들기
1. 터미널에서 comp 리액트 파일 만들기
- 리액트 파일은 소문자로 구성되어야 함
> npx create-react-app comp</br>
![image](https://github.com/Gnyo/React/assets/102850495/291e9cfd-77be-489e-85b7-c29171813842)

2. comp 폴더의 src에서 funcComp 폴더 만들기
- 폴더는 소문자로 시작하는 카멜케이스로 이름을 지어야 함

3. funcComp 폴더에 각각 "Header.js", "Main.js", "Footer.js" 파일 만들기</br>
- 컴포넌트를 만드는 파일은 대문자로 시작하는 카멜케이스로 이름을 지어야 함
![image](https://github.com/Gnyo/React/assets/102850495/1d4a6fb1-2edc-4944-af9a-773b6d9e8412)

4. 각 파일에 이미지와 같이 코드 입력
- vsCode에서는 'rfc' 입력 후 'Tab'버튼 누르면 바로 function Component 코드 틀이 만들어짐</br>
![image](https://github.com/Gnyo/React/assets/102850495/1aa78d46-c881-4dcc-b647-80a0b5c556ad)</br>
![image](https://github.com/Gnyo/React/assets/102850495/8e178c29-ed88-4335-a397-2bf2c2caa40c)</br>
![image](https://github.com/Gnyo/React/assets/102850495/a142e028-9f27-43e1-a1d7-2ef85e1ad377)

5. 실행 파일인 App.js 수정</br>
![image](https://github.com/Gnyo/React/assets/102850495/33592601-c001-4eff-a43b-508aabb90148)

6. 터미널에서 서버 불러오기
  > cd comp</br>
  > npm start
![image](https://github.com/Gnyo/React/assets/102850495/0d1b00da-baa3-44a7-9931-31a34615ff34)


### Class Component 만들기
1. comp 폴더의 src에서 classComp 폴더를 만들고 각각 "Header.js", "Main.js", "Footer.js" 파일 만들기</br>
![image](https://github.com/Gnyo/React/assets/102850495/34f71ae4-fc0c-462b-8733-71b299f83847)

2. 각 파일에 이미지와 같이 코드 입력
- vsCode에서는 'rfc' 입력 후 'Tab'버튼 누르면 바로 Class Component 코드 틀이 만들어짐</br>

---

### Props(속성)
- 상위 컴포넌트가 하위 컴포넌트에 값을 전달할 때 사용(단방향 데이터 흐름을 가짐)
- 프로퍼티는 수정할 수 없음(자식 입장에서는 읽기 전용인 데이터임)
- React Component는 props를 이용해 서로 통신
- 모든 부모 컴포넌트는 props를 줌으로써 몇몇의 정보를 자식 컴포넌트에게 전달 가능
- 즉, 부모 컴포넌트가 자식 컴포넌트에게 물려준 데이터
![image](https://github.com/Gnyo/React/assets/102850495/88e10768-67c4-427b-a5d0-aafbcee1ab8f)

---

### 프로퍼티 예제 실습
1. "MyComponent" 파일 만들기</br>
![image](https://github.com/Gnyo/React/assets/102850495/b956291f-225a-45aa-ac66-ef1a791ed3e3)
#### 1개의 프로퍼티 넘기기
#### 여러 개의 프로퍼티 넘기기
![image](https://github.com/Gnyo/React/assets/102850495/64f257f1-a807-4458-885b-7711141c2c60)
#### 숫자 프로퍼티 넘기기
- App.js에 문자열 이외에는 중괄호({ }) 사용

---

### 프로퍼티의 자료형, 타입 정의
- 프로퍼티의 자료형을 미리 선언 가능
- React 엔진이 프로퍼티로 전달하는 값을 효율적으로 알 수 있고, 버그 예방에도 도움
- React에서 제공하는 prop-types를 이용하여 각각의 자료형을 선언하면 됨

### 프로퍼티의 기본값 설정
- 컴포넌트에 props 기본값을 설정하고 싶은 경우 defaultProps를 설정하면 됨</br>
![image](https://github.com/Gnyo/React/assets/102850495/aafbb268-bd9b-471c-8a3f-f13d15aa163a)
- ex) Main.js: name 프로퍼티가 없는 경우, '디폴트' 값을 사용하게 처리

### 프로퍼티의 필수값 설정
- 디폴트 설정을 하지 않은 경우 해당 프로퍼티를 필수 프로퍼티로 선언 가능</br>
![image](https://github.com/Gnyo/React/assets/102850495/955dafd0-87fb-4865-ba84-6576e07403a8)
- ex) Main.js: isRequired를 통한 필수값 설정

### 불리언(Boolen) 프로퍼티 사용
- true, false만 정의 가능한 자료형
- 중괄호로 감싸 전달할 필요 없이 프로퍼티의 이름만 선언하면 됨</br>
![image](https://github.com/Gnyo/React/assets/102850495/b86d541c-8f9c-43d3-ae03-084fade1c87d)

### props.children 활용
- children을 사용하여 내부에 있는 내용을 표현 가능</br>
![image](https://github.com/Gnyo/React/assets/102850495/ccc8bf37-5b37-4bfa-8bf9-6205ae2e5b22)
- 왼쪽의 Wrapper.js에는 Main이 보이지 않으나 컴포넌트 정의할 때 children을 정의하면 오른쪽 Wrapper.js처럼 Main이 보임</br>
![image](https://github.com/Gnyo/React/assets/102850495/d9f8ce34-22b9-4222-987f-7254aafd2fde)

### 이미지와 텍스트 출력 컴포넌트</br>
![image](https://github.com/Gnyo/React/assets/102850495/14885e98-e0a1-436c-9061-a2e3b7a59892)

#### 실슴
1. 터미널에서 textimg 리액트 파일 만들기
> npx create-react-app textimg</br>

2. 아이콘 이미지 다운로드
- https://www.iconfinder.com/ 해당 사이트에서 desktop, notebook, pad 이미지를 다운로드 받음</br>
![Desktop](https://github.com/Gnyo/React/assets/102850495/a8627d92-1d14-46e2-bc54-e649ebc93e10)

3. public 폴더에 img 폴더를 만들어서 다운로드 받은 이미지 넣기
![image](https://github.com/Gnyo/React/assets/102850495/6eb49146-d8b9-43b9-b117-42c4ffd69e5b)
