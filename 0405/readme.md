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

#### 리액트 컴포넌트
![image](https://github.com/Gnyo/React/assets/102850495/cd048f01-8eeb-43ef-b703-6d4ef182269f)
![image](https://github.com/Gnyo/React/assets/102850495/e62f5f32-1e2b-4bfd-b810-855f752402b4)
- React Component에서의 입력은 props, 출력은 React Element
- props: property(재산, 속성, 특성)의 복수형, 리액트 컴포넌트의 속성
![image](https://github.com/Gnyo/React/assets/102850495/9817225e-6e09-4e34-a0bb-730370c5604e)


### Function Component
- Recat Component = pure함수(늘 같은 입력값을 받고, 늘 같은 결과값을 반환) 같은 역할을 해야 함
- 즉 일종의 함수라고 생각
  > function Welcome(props){
  >   return <h1>안녕, {props.name}</h1>;
  > }

### Class Component
- 자바스크립트 ES6의 class라는 것을 사용해서 만들어진 형태의 Component
- Class Component의 경우 Function Component에 비해 몇 가지 추가적인 기능을 가짐
  > class Welcome extends React.Component{
  >   render(){
  >     return <h1>안녕, {this.props.name}</h1>;
  >   }
  > }
- 이 함수는 Function Component를 Class Component로 만든 것

### Component name
- 컴포넌트의 이름은 항상 대문자로 시작(리액트는 소문자로 시작하는 컴포넌트를 DOM 태그로 인식)
- 직접 만든 컴포넌트는 대문자로, 소문자로 시작하는 컴포넌트는 HTML 컴포넌트임
![image](https://github.com/Gnyo/React/assets/102850495/21f7086b-e2db-4c80-8e74-893e0dc1ca4c)

