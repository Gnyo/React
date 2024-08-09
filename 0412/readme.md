# Web Programming 05

### 상태(state)
- 랜더링 결과물에 영향을 주는 정보, 변수
- const(값 변경X), let(값 변경O) 등으로 선언한 변수와 달리 값이 변하면 관련있는 컴포넌트들이 재렌더링되어 화면이 바뀜
- 보통 컴포넌트의 내부에서 변경 가능한 데이터를 관리해야 할 때 사용
- props는 컴포넌트 내부에서 값을 바꿀 수 없음('='사용 불가), 바꿔야할 때는 state 사용
- state 값이 변경되고 re-rendering이 필요한 경우, React가 자동으로 계산하여 변경된 부분을 함 rendering
- 즉, React에서의 state: React Component의 변경 가능한 데이터

</br>

---

</br>

- 변수는 변경되어도 자동으로 화면이 바뀌지 않음
- state를 사용하면 변경될 때 자동으로 화면이 바뀜
- 즉 유동적인 변수를 사용할 때, 화면에 그려지는 변수도 정상적으로 변경되길 원한다면 사용

</br>

### 일반 변수를 사용하는 경우

| 1. '+', '-' 버튼을 누르면 count가 증가 혹은 감소하는 'Counter.js' 코드 파일 생성 |
|:---|
![image-1](https://github.com/Gnyo/React/assets/102850495/0a5536df-07d6-41c2-8b98-a16e272bc2cb)
className: jsx에서 class 속성 대신 사용

</br>

| 2. 'App.js' 수정 |
|:---|
![image-2](https://github.com/Gnyo/React/assets/102850495/b618df37-2590-4ae8-919e-e2ee2af196a8)

</br>

| 3. 결과 출력 | 
|:---|
![image-8](https://github.com/Gnyo/React/assets/102850495/bb03c4a8-5948-4784-953f-9c65ee564b11)
화면에 뜬 값이 변경되지 않음, 화면이 re-rendering되지 않음
count 값은 정상적으로 변경

</br>

### state를 사용하는 경우

| 1. state를 이용하여 'Counterstate.js' 코드 파일 생성 |
|:---|
![image](https://github.com/Gnyo/React/assets/102850495/1cfcfc78-bbcb-4ca1-bc37-1a245991698b)

</br>

| 2. 'App.js' 수정 |
|:---|
![image](https://github.com/Gnyo/React/assets/102850495/3f25824f-5b8c-440a-9f13-63bd926d9422)

</br>

| 3. 결과 출력 | |
|:---|:---|
![image-6](https://github.com/Gnyo/React/assets/102850495/b29aa740-f663-4169-a507-6349d790b6a9) | ![image](https://github.com/Gnyo/React/assets/102850495/0959319e-fa9d-43ce-b174-70c4deb5ad74)
|변수 값이 변경되었을 때 화면이 의도대로 re-rendering 됨 | setState는 비동기적으로 작동함 </br>(setCount로 count를 변경했으나, 변경 후 console.log로 확인해보니 값이 바로 바뀌지 않음)|

</br>

---

</br>

### 동기·비동기

| 동기(Synchronous: 동시에 발생하는) | 비동기(Asynchronous: 동시에 발생하지 않는) |
|:---:|:---:|
| 요청을 보냈다면 응답을 받아야 다음 동작이 이루어짐 | 작업 종료 여부에 관계없이 다음 작업 실행 |
| 순차적으로 실행되어, 어떤 작업이 수행 중이라면 다음 작업은 대기해야 함 | 즉 동기 방식과 달리 실행 순서를 보장하지 않음 |
| 블로킹(작업 중단) 발생 | 블로킹 발생X |

- sestState는 비동기임
- state는 값이 변경되면 re-rendering이 발생, 이 때 변경되는 state가 많을 수록 re-rendering이 계속 일어나고 속도도 저화되는 등 성능적으로 많은 문제 발생 가능
- batch(일괄) update: 16ms 동안 변경된 상태 값들을 모아 한 번에 re-rendering을 진행

</br>

### useState와 콜백 함수 사용
![image](https://github.com/Gnyo/React/assets/102850495/060b5688-d8b1-4f6a-b736-6c7a66fcb261)
![image](https://github.com/Gnyo/React/assets/102850495/095f9767-813a-4674-90d0-12b39701daa2)

</br>

---

</br>

### 상태(state)의 종류
- 클래스형 컴포넌트가 가지고 있는 state
- 함수형 컴포넌트가 useState라는 함수로 사용하는 state(원래는 사용할 수 없었으나, useState Hook 사용 시 함수 컴포넌트에서도 사용 가능)

</br>

### state 생성
![image-10](https://github.com/Gnyo/React/assets/102850495/acbdaee3-c116-4505-859f-d4801aa4dcd2)

***class component에서 state를 사용하는 기본 형태***
    
    constructor(props){
        super(props);
        this.state = {
            state1: 초기값,
            state2: 초기값
        };
    };

![image-11](https://github.com/Gnyo/React/assets/102850495/21af1e6c-9560-479d-951d-754bb47282bb)

![image-12](https://github.com/Gnyo/React/assets/102850495/bdbeda63-5d28-4914-8684-9816e3b27f88)

</br>

### setState 후 특정 작업 실행
- state 값을 바꿔준 후 특정 작업(함수)을 실행하고 싶을 때 setState의 두 번째 파라미터에 콜백(callback) 함수를 등록하여 작업 처리 가능

```
this.setState( { 바꿀 스테이트값 기술 }, () => { 여기 콜백 함수 } );
```

![image-13](https://github.com/Gnyo/React/assets/102850495/fa3ae1ef-69c7-4a6a-bb73-80b87123c2c6)

</br>

---

</br>

### 이벤트 핸들링
- 웹 페이지에서 사용자 상호작용(user interaction)과 관련된 동적인 기능을 구현하기 위해 사용되는 기술

</br>

### 컴포넌트에서 DOM 이벤트 사용
- DOM이벤트 프로퍼티 사용해야 함
- JSX 내에서 'on+이벤트명' 형태의 프로퍼티로 사용

![image-14](https://github.com/Gnyo/React/assets/102850495/c9e7264d-03d2-4dcd-92cf-ce82f181cfa7) |
---|

</br>

### 리액트의 이벤트 문법
- 소문자 대신 카멜 케이스(camelCase) 사용
    - onClick = {changename} (x)
    - onClick = {changeName} (o)

- JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러 전달
    - onClick = "changeName()" (x)
    - onClick = {changeName} (o)

</br>

### 리액트의 이벤트 문법
- 함수 직접 선언하여 사용 가능

![image-15](https://github.com/Gnyo/React/assets/102850495/edf45d97-1c7f-4337-917a-d31e3b3e9714) |
---|

</br>

---

</br>

### 이벤트 핸들링 실습
Link: https://github.com/Gnyo/React/tree/main/0412/%EC%8B%A4%EC%8A%B5

#### 경고창 띄우기

![image-16](https://github.com/Gnyo/React/assets/102850495/e1813fcc-1846-4f01-bde5-2afa90de822d) | ![image-17](https://github.com/Gnyo/React/assets/102850495/712e6496-f996-4eca-9af8-1605dd3575c5)
---| ---|

</br>

#### 클릭했을 때 클래스의 메소드 호출

![image-18](https://github.com/Gnyo/React/assets/102850495/60be1399-5dfb-4c64-be73-2a4adc80c421) | ![image-19](https://github.com/Gnyo/React/assets/102850495/705a785c-e959-407f-bd32-b3e9fe7881aa)
---| ---|

</br>

#### 체크박스 구현

![image-20](https://github.com/Gnyo/React/assets/102850495/4151b392-fc3a-4d69-b0d3-9555c4172bb8) | ![image-21](https://github.com/Gnyo/React/assets/102850495/ac82729f-1560-42fb-bd06-5066d690f905) | ![image-22](https://github.com/Gnyo/React/assets/102850495/e5814333-61ac-4c04-bf3c-738aa8f5ac14)
---| ---| ---|

</br>

---

</br>

### 생명주기(Life cycle)
- 사람은 태어나서 인생을 살다가 나이가 들어 죽는 생명주기를 가짐
- React Component도 마찬가지로 생명주기가 있어, Component가 생성되는 시점과 사라지는 시점이 정해짐
- Component Life Cycle: 컴포넌트가 생성되고 사용되고 소멸될 때 까지 일련의 과정

![image-23](https://github.com/Gnyo/React/assets/102850495/91791b3c-a920-4fa2-b1b2-f7dc7978c33e)
![image-24](https://github.com/Gnyo/React/assets/102850495/612925c4-2744-4db3-a72c-2aa2e3f3e9bf)

