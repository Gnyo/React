# Web Programming 05

## state
### 상태(state)
- 랜더링 결과물에 영향을 주는 정보, 변수
- const(값 변경X), let(값 변경O) 등으로 선언한 변수와 달리 값이 변하면 관련있는 컴포넌트들이 재렌더링되어 화면이 바뀜
- 보통 컴포넌트의 내부에서 변경 가능한 데이터를 관리해야 할 때 사용
- props는 컴포넌트 내부에서 값을 바꿀 수 없음('='사용 불가), 바꿔야할 때는 state 사용
- state 값이 변경되고 re-rendering이 필요한 경우, React가 자동으로 계산하여 변경된 부분을 함 rendering
- 즉, React에서의 state: React Component의 변경 가능한 데이터

---

### 일반 변수를 사용하는 경우
- className?: jsx에서 class 속성 대신 사용
![image](https://github.com/Gnyo/React/assets/102850495/8a41ceb5-ebb9-4e65-9f88-112d572f311d)

1. '+', '-' 버튼을 누르면 count가 증가 혹은 감소하는 'Counter.js' 코드 파일 생성

![image-1](https://github.com/Gnyo/React/assets/102850495/0a5536df-07d6-41c2-8b98-a16e272bc2cb)
---|

2. 'App.js' 수정

![image-2](https://github.com/Gnyo/React/assets/102850495/b618df37-2590-4ae8-919e-e2ee2af196a8)
---|

3. 결과 출력
- 화면에 뜬 값이 변경되지 않음, 화면이 re-rendering되지 않음
- count 값은 정상적으로 변경

![image-8](https://github.com/Gnyo/React/assets/102850495/bb03c4a8-5948-4784-953f-9c65ee564b11)
---|

### state를 사용하는 경우

1. state를 이용하여 'Counterstate.js' 코드 파일 생성

![image](https://github.com/Gnyo/React/assets/102850495/1cfcfc78-bbcb-4ca1-bc37-1a245991698b)
---|

2. 'App.js' 수정

![image](https://github.com/Gnyo/React/assets/102850495/3f25824f-5b8c-440a-9f13-63bd926d9422)
---|

3. 결과 출력
- 변수 값이 변경되었을 때 화면이 의도대로 re-rendering 됨
- setState는 비동기적으로 작동함
    + setCount로 count를 변경했으나, 변경 후 console.log로 확인해보니 값이 바로 바뀌지 않음

![image-6](https://github.com/Gnyo/React/assets/102850495/b29aa740-f663-4169-a507-6349d790b6a9) | ![image](https://github.com/Gnyo/React/assets/102850495/0959319e-fa9d-43ce-b174-70c4deb5ad74)
---| ---|

---

### sestState는 비동기적으로 작동<br>
![alt text](image-9.png)

---

### 상태(state)의 종류
- 클래스형 컴포넌트가 가지고 있는 state
- 함수형 컴포넌트가 useState라는 함수로 사용하는 state(원래는 사용할 수 없었으나, useState Hook 사용 시 함수 컴포넌트에서도 사용 가능)

### state 생성
![alt text](image-10.png)

**class component에서 state를 사용하는 기본 형태**
'''
constructor(props){
super(props);
this.state = {
state1: 초기값,
state2: 초기값
};
};
'''

![alt text](image-11.png)

![alt text](image-12.png)

### setState 후 특정 작업 실행
- state 값을 바꿔준 후 특정 작업(함수)을 실행하고 싶을 때 setState의 두 번째 파라미터에 콜백(callback) 함수를 등록하여 작업 처리 가능

'''
this.setState( { 바꿀 스테이트값 기술 }, () => { 여기 콜백 함수 } );
'''

![alt text](image-13.png)

---
## 이벤트 핸들링
### 컴포넌트에서 DOM 이벤트 사용
- DOM이벤트 프로퍼티 사용해야 함
- JSX 내에서 'on+이벤트명' 형태의 프로퍼티로 사용
![alt text](image-14.png)

### 리액트의 이벤트 문법
- 소문자 대신 카멜 케이스(camelCase) 사용
    - onClick = {changename} (x)
    - onClick = {changeName} (o)
- JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러 전달
    - onClick = "changeName()" (x)
    - onClick = {changeName} (o)

### 리액트의 이벤트 문법
- 함수 직접 선언하여 사용 가능

![alt text](image-15.png) |
---|

---

### 경고창 띄우기

![alt text](image-16.png) | ![alt text](image-17.png)
---| ---|

### 클릭했을 때 클래스의 메소드 호출

![alt text](image-18.png) | ![alt text](image-19.png)
---| ---|

### 체크박스 구현

![alt text](image-20.png) | ![alt text](image-21.png) | ![alt text](image-22.png)
---| ---| ---|

---

## Component Life Cycle

### 생명주기(Life cycle)
- 사람은 태어나서 인생을 살다가 나이가 들어 죽는 생명주기를 가짐
- React Component도 마찬가지로 생명주기가 있음
- 즉, Component가 생성되는 시점과 사라지는 시점이 정해짐

![alt text](image-23.png)
![alt text](image-24.png)

---

### 스톱워치 만들기 실습
