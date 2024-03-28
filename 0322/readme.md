# Web Programming 02

### 브라우저 로딩 과정
#### 파싱
- 브라우저가 HTML을 파싱하고 읽어들이는 과정
- DOM tree
- CSSOM tree
#### 스타일
- DOM Tree, CSSOM Tree가 생성되면 스타일을 매칭시켜주는 과정을 거쳐 렌더 트리를 구성
- 렌더링 트리에는 페이지를 렌더링하는 데 필요한 노드만 포함
- Render tree
#### 레이아웃
- 기기의 뷰포트 내에서 노드의 정확한 위치와 크기를 계산하는 과정
#### 페인트
- 렌더링 트리의 각 노드를 화면의 실제 픽셀로 변환하는 마지막 단계
#### 합성(Compositing)
- 화면에 표시하기 위해 페이지에서 페인트된 부분을 합치는 과정
- Tranform, opacity, will-change 등을 사용했을 때 합성 과정을 거침

---

DOM은 자바스크립트를 이용하여 코드를 DOM tree로 변경 가능</br>

### Virtual DOM

- 기존 DOM은 이벤트가 발생할 때(변경이 있을 때)마다 렌더트리를 재생성하고 다시 구축
- 브라우저의 연산의 양이 많아 전체적인 프로세스를 비효율적으로 만듦
![image](https://github.com/Gnyo/React/assets/102850495/7209b25e-5d04-4675-a4a5-cb90728c8711)
- 뷰(HTML)에 변화가 있을 떄, 구 가상돔(Old Node)과 새 가상돔(New Node)을 비교하여 변경된 내용만 DOM에 적용
- 브라우저 내에서 발생하는 연산의 양(렌더링 과정) 감소로 성능 개선
![image](https://github.com/Gnyo/React/assets/102850495/90edd4ba-d12d-4d2c-b0cd-bf6d4f8ca1e3)

---
### React
<a href="https://react.dev/" target="_blank"> <img src="https://img.shields.io/badge/react-20232a.svg?style=for-the-badge&logo=react&logoColor=61DAFB"/>
- 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리
- 사용자와 웹 사이트의 상호작용을 돕는 인터페이스를 만들기 위한 자바스크립트 기능 모음집
- 2013년에 페이스북에서 발표한 오픈소스 자바스크립트 프레임워크
- 가상 DOM(Document object model)과 JSX(JavaScript XML) 방식으로 동작하는 프레임워크
- SPA(Single Page Application) 개발을 위한 프레임워크
- 사용자 인터페이스를 구축하기 위한 선언적이고 효율적이며 유연한 JavaScript 라이브러리
- “컴포넌트”라고 불리는 작고 고립된 코드의 파편을 이용하여 복잡한 UI를 구성
  
### React의 개발환경
- Real DOM 사용
- 함수를 이용하여 Virtual DOM을 만들어 사용 가능

#### Babel
- JavaScript 컴파일러: Transform syntax(구문 변환)
- 모든 브라우저가 최신 문법, 기술(ES6) 을 지원하지 않기 때문에 구 기능(ES5)으로 변환하는 작업이 필요
- JSX 문법 변환

#### WebPack
- 자바스크립트로 만든 프로그램을 배포하기 좋은 형태로 묶어주는 도구
- 모듈: 특정 기능을 갖는 작은 코드 단위로 모듈, 프로시저, 함수, 매크로 등의 이름으로 불림
- 번들링: js, css, png 등 각각의 파일을 모두 모듈로 보고 이 모듈을 배포용으로 하나의 파일로 통합시켜주는 작업
- npm run build시에 build 폴더 만듦

#### App.js
- 컴포넌트를 정의하는 프로그램
- 실제로 사용자에게 보여줄 화면의 내용 정의
#### index.js
- 메인 프로그램
- App.js(HTML 템플릿 및 JavaScript의 컴포넌트)를 DOM으로 렌더링하고 실제 표시
#### index.html
- index.js에 대응되는 HTML 템플릿 파일
- 렌더링된 결과 표시(index.html 이름 변경 시 오류 발생)
![image](https://github.com/Gnyo/React/assets/102850495/c1bf8adf-ba24-458a-986b-6e81740d6d39)
![image](https://github.com/Gnyo/React/assets/102850495/bb902310-56ff-4f55-8ecc-783f0bae7bb5)

