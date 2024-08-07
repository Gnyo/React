# Web Programming 04

### Component(컴포넌트)
- 입력(props)을 받아 출력(Element)하는 역할
- 리액트는 Component 기반의 구조로 사용자에게 보여지는 UI 요소를 컴포넌트 단위로 구분하여 구현(ex. C언어는 function으로 구성)
- 리액트는 모든 페이지가 Component로 구성되어 있고 하나의 Component는 또 다른 여러 개의 Component의
조합으로 구성 가능
- 프로그래밍에 있어 재사용이 가능한 각각의 독립된 모듈로, 웹 페이지를 만드는 퍼즐 조각을 뜻함
- 어떤 데이터 집합을 사용하든 같은 컴포넌트를 사용하면 모두 동일한 DOM 구조가 반환

#### React Component</br>
![image](https://github.com/Gnyo/React/assets/102850495/cd048f01-8eeb-43ef-b703-6d4ef182269f) | ![image](https://github.com/Gnyo/React/assets/102850495/e62f5f32-1e2b-4bfd-b810-855f752402b4)
---| ---|
- React Component에서의 입력은 props, 출력은 React Element
- props: property(재산, 속성, 특성)의 복수형, 리액트 컴포넌트의 속성</br>
<p align="center">
  <img src= "https://github.com/Gnyo/React/assets/102850495/9817225e-6e09-4e34-a0bb-730370c5604e.png">
</p>

### Function Component
- Recat Component = pure함수(늘 같은 입력값을 받고, 늘 같은 결과값을 반환) 같은 역할을 해야 함
- 즉 일종의 함수라고 생각</br>
<p align="center">
<img src= "https://github.com/Gnyo/React/assets/102850495/e5c9ce3e-76e5-4bc5-8e53-38258ff71b45.png">
</p>


### Class Component
- 자바스크립트 ES6의 class라는 것을 사용해서 만들어진 형태의 Component
- Class Component의 경우 Function Component에 비해 몇 가지 추가적인 기능을 가짐</br>
<p align="center">
<img src= "https://github.com/Gnyo/React/assets/102850495/79de0146-39ca-4f7c-96f3-b4b08fe8c2ab.png">
</p>
- 이 함수는 Function Component를 Class Component로 만든 것

### Component name
- 컴포넌트의 이름은 항상 대문자로 시작(리액트는 소문자로 시작하는 컴포넌트를 DOM 태그로 인식)
- 직접 만든 컴포넌트는 대문자로, 소문자로 시작하는 컴포넌트는 HTML 컴포넌트임</br>
<p align="center">
<img src= "https://github.com/Gnyo/React/assets/102850495/21f7086b-e2db-4c80-8e74-893e0dc1ca4c.png">
</p>
</br>

---

</br>

### Function Component 만들기 실습
1. 터미널에서 comp 리액트 프로젝트 생성
- 리액트 파일은 소문자로 구성되어야 함
```
npx create-react-app comp
```

<p align="center">
<img src= "https://github.com/Gnyo/React/assets/102850495/291e9cfd-77be-489e-85b7-c29171813842.png">
</p></br>

2. comp 폴더의 src에서 funcComp 폴더 만들기
- 폴더는 소문자로 시작하는 카멜케이스로 이름을 지어야 함
</br>

3. funcComp 폴더에 각각 "Header.js", "Main.js", "Footer.js" 파일 만들기
- 컴포넌트를 만드는 파일은 대문자로 시작하는 카멜케이스로 이름을 지어야 함<br>
<p align="center">
<img src= "https://github.com/Gnyo/React/assets/102850495/1d4a6fb1-2edc-4944-af9a-773b6d9e8412.png">
</p></br>

4. 각 파일에 이미지와 같이 코드 입력
- vsCode에서는 'rfc' 입력 후 'Tab'버튼 누르면 바로 function Component 코드 틀이 만들어짐</br>

![image](https://github.com/Gnyo/React/assets/102850495/61309282-1f4a-467a-8bf1-4e2b64bc14b7) | ![image](https://github.com/Gnyo/React/assets/102850495/7cd76178-1696-4f50-b7a0-19dc0153066b) | ![image](https://github.com/Gnyo/React/assets/102850495/e8512502-d7c1-4363-a44f-2380b34b604d)
---| ---| ---|

</br>

5. 실행 파일인 App.js 수정</br>
<p align="center">
<img src= "https://github.com/Gnyo/React/assets/102850495/33592601-c001-4eff-a43b-508aabb90148.png">
</p></br>

6. 터미널에서 서버 불러오기
- 터미널로 comp 폴더를 들어간 후 서버 불러오기
```
cd comp
npm start
```
<p align="center">
  <img src= "https://github.com/Gnyo/React/assets/102850495/0d1b00da-baa3-44a7-9931-31a34615ff34.png"></br>
  위 사진은 헤더 부분을 제외하고 메인을 두 개 출력함
</p></br>

### Class Component 만들기 실습
1. comp 폴더의 src에서 classComp 폴더를 만들고 각각 "Header.js", "Main.js", "Footer.js" 파일 만들기</br>
- 컴포넌트를 만드는 파일은 대문자로 시작하는 카멜케이스로 이름을 지어야 함</br>
<p align="center">
<img src= "https://github.com/Gnyo/React/assets/102850495/34f71ae4-fc0c-462b-8733-71b299f83847.png">
</p></br>

2. 각 파일에 이미지와 같이 코드 입력
- vsCode에서는 'rcc' 입력 후 'Tab'버튼 누르면 바로 Class Component 코드 틀이 만들어짐</br>

![image](https://github.com/Gnyo/React/assets/102850495/643ca12a-8524-4f6a-b337-d681d874cd48) | ![image](https://github.com/Gnyo/React/assets/102850495/8b6ea9e1-a74a-496c-8661-9c515eddf1ad) | ![image](https://github.com/Gnyo/React/assets/102850495/a6a88448-2601-4b65-b5b0-cfe25111b857)
---| ---| ---|

</br>

3. 실행 파일인 App.js 수정</br>
<p align="center">
<img src= "https://github.com/Gnyo/React/assets/102850495/96e9d1d8-f265-47a2-9202-c972bbc37126.png">
</p></br>

4. 터미널에서 서버 불러오기
- 터미널로 comp 폴더를 들어간 후 서버 불러오기
```
cd comp
npm start
```
<p align="center">
<img src= "https://github.com/Gnyo/React/assets/102850495/0d1b00da-baa3-44a7-9931-31a34615ff34.png">
</p></br>

---

</br>

### Props(속성)
- 상위 컴포넌트가 하위 컴포넌트에 값을 전달할 때 사용(단방향 데이터 흐름을 가짐)
- 프로퍼티는 수정할 수 없음(자식 입장에서는 읽기 전용인 데이터임)
- React Component는 props를 이용해 서로 통신
- 모든 부모 컴포넌트는 props를 줌으로써 몇몇의 정보를 자식 컴포넌트에게 전달 가능
- 즉, 부모 컴포넌트가 자식 컴포넌트에게 물려준 데이터</br>

![image](https://github.com/Gnyo/React/assets/102850495/88e10768-67c4-427b-a5d0-aafbcee1ab8f)
---|

</br>

#### 숫자 프로퍼티 넘기기
- App.js에 문자열 이외에는 중괄호({ }) 사용</br>

![image](https://github.com/user-attachments/assets/9c81f767-33bd-4b86-9a39-7e395539d090)
---|

</br>

---

</br>

### 1개의 props를 넘기는 예제 실습
1. "MyComponent.js" 파일 만들기</br>

2. props를 이용하여 코드 입력</br>
<p align="center">
<img src= "https://github.com/user-attachments/assets/6b0e1b8f-c1ad-4048-bbb4-52f3eeae5326">
</p></br>

3. App.js 파일 수정 후 터미널에서 서버 불러오기</br>

![image](https://github.com/Gnyo/React/assets/102850495/1345edf8-ec22-45d7-81c1-ebcd00f36b24) | ![image](https://github.com/Gnyo/React/assets/102850495/b956291f-225a-45aa-ac66-ef1a791ed3e3)
---| ---|

</br>

5. MyComponent 컴포넌트를 이용하여 App.js에 여러 문장 만들기</br>

![image](https://github.com/Gnyo/React/assets/102850495/10d71db2-805b-4ca1-a3bf-556ffe877233) | ![image](https://github.com/Gnyo/React/assets/102850495/64f257f1-a807-4458-885b-7711141c2c60)
---| ---|

</br>

---

</br>

### 프로퍼티의 자료형, 타입 정의

프로퍼티의 자료형을 미리 선언 가능
|:---|
React 엔진이 프로퍼티로 전달하는 값을 효율적으로 알 수 있고, 버그 예방에도 도움
React에서 제공하는 prop-types를 이용하여 각각의 자료형을 선언하면 됨

</br>

### 프로퍼티의 기본값 설정

![image](https://github.com/Gnyo/React/assets/102850495/aafbb268-bd9b-471c-8a3f-f13d15aa163a)
---|
컴포넌트에 props 기본값을 설정하고 싶은 경우 defaultProps를 설정하면 됨
ex) Main.js: name 프로퍼티가 없는 경우, '디폴트' 값을 사용하게 처리

</br>

### 프로퍼티의 필수값 설정

![image](https://github.com/Gnyo/React/assets/102850495/955dafd0-87fb-4865-ba84-6576e07403a8)
---|
디폴트 설정을 하지 않은 경우 해당 프로퍼티를 필수 프로퍼티로 선언 가능
ex) Main.js: isRequired를 통한 필수값 설정

</br>

### 불리언(Boolen) 프로퍼티 사용

![image](https://github.com/Gnyo/React/assets/102850495/b86d541c-8f9c-43d3-ae03-084fade1c87d)
---|
true, false만 정의 가능한 자료형
중괄호로 감싸 전달할 필요 없이 프로퍼티의 이름만 선언하면 됨

</br>

### props.children 활용

![image](https://github.com/Gnyo/React/assets/102850495/ccc8bf37-5b37-4bfa-8bf9-6205ae2e5b22)
---|
children을 사용하여 내부에 있는 내용을 표현 가능

![image](https://github.com/Gnyo/React/assets/102850495/d9f8ce34-22b9-4222-987f-7254aafd2fde)
---|
왼쪽의 Wrapper.js에는 Main이 보이지 않으나 컴포넌트 정의할 때 children을 정의하면 오른쪽 Wrapper.js처럼 Main이 보임

</br>

### 이미지와 텍스트 출력 컴포넌트

![image](https://github.com/Gnyo/React/assets/102850495/14885e98-e0a1-436c-9061-a2e3b7a59892)
---|

</br>

---

</br>

#### 이미지, 텍스트 출력 컴포넌트 실습
1. 터미널에서 textimg 리액트 파일 만들기
```
npx create-react-app textimg
```
</br>

2. 아이콘 이미지 다운로드
- https://www.iconfinder.com/ 해당 사이트에서 desktop, notebook, pad 이미지 다운로드</br>

</br>

3. public 폴더에 img 폴더를 만들어서 다운로드 받은 이미지 넣기</br>

![Desktop](https://github.com/Gnyo/React/assets/102850495/ab3a16af-37a0-467d-808c-1073bbfa68f8) | ![Notebook](https://github.com/Gnyo/React/assets/102850495/eba68ac1-fd71-479a-91d4-194587c41a0e) | ![Pad](https://github.com/Gnyo/React/assets/102850495/7dd393ec-aed6-4ecc-8495-3fa540d030a4) |
--- | --- |  --- |

</br>

5. src 폴더에 "FPhotoText.js" 파일을 만들어 이미지 속 코드 입력</br>
- 'url'이라는 변수를 만들어 png 파일(이미지)의 주소 저장
- return에서 'url'변수를 활용하여 이미지 반환하기</br>
<p align="center">
<img src= "https://github.com/Gnyo/React/assets/102850495/94b6ea5b-19ec-44e7-903d-e465c6c5d86f.png">
</p></br>

5. "App.js" 파일 수정
- FPhotoText 컴포넌트에 각 이미지 이름("desktop", "notebook", "pad")를 입력</br>
<p align="center">
<img src= "https://github.com/Gnyo/React/assets/102850495/8038f6ac-8375-40b6-a25f-07029544e79b.png">
</p></br>

6. 터미널에서 서버 불러오기
```
npm start
```
<p align="center">
<img src= "https://github.com/Gnyo/React/assets/102850495/a2870819-773b-402b-8454-646a978f659c.png">
</p>
