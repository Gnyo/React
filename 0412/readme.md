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
![alt text](image.png)
- className?: jsx에서 class 속성 대신 사용

1.
![alt text](image-1.png)

2.
![alt text](image-2.png)

3. 결과 출력
![alt text](image-8.png)

### state를 사용하는 경우

1.
![alt text](image-4.png)

2.
![alt text](image-5.png)

3. 결과 출력

![alt text](image-6.png) | ![alt text](image-7.png)
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