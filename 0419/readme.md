# Web Programming 06

## Hook

### 등장 배경
- 리액트 컴포넌트는 함수형 컴포넌트/클래스형 컴포넌트로 나뉨
- 리액트 초기: 일반적으로 함수형 컴포넌트 사용, 값의 상태를 관리(state, Life Cycle Method)를 사용해야할 때 클래스형 컴포넌트 사용
- 클래스형 컴포넌트의 단점
  + 코드의 구성이 어렵고 컴포넌트의 재사용성이 떨어짐
  + 컴파일 단계에서 코드 최적화를 어렵게 함
  + 최신 기술의 적용이 효과적이지 않음
- 클래스형 컴포넌트의 단점을 보완하여 함수형 컴포넌트를 사용할 수 있도록 등장한 것이 React Hook(리액트 훅)

### 장점
- 상태 로직 단순화: 함수형 컴포넌트에 상태를 추가하여 전반적인 로직을 단순화하고 코드를 이해하기 쉽게 만들 수 있음
- 코드 재사용성과 관심사 분리: 컴포넌트 계층 구조를 변경하지 않고도 여러 컴포넌트 간에 상태 로직을 재사용할 수 있음
- 사이드 이펙트 감소: 함수형 컴포넌트에 생명주기 매소드와 유사한 기능을 제공하여 사이드 이펙트를 더 효율적으로 처리 가능

### 규칙
  + 규칙들을 자동으로 강제하기 위한 linter 플러그인(Create React App에 기본적으로 포함되어 있음)을 제공
- 최상위(at the Top Level)에서만 Hook을 호출해야 함
  + 반복문, 조건문, 중첩된 함수 내에서 Hook을 호출하면 안됨
  + early return이 실행되기 전에 항상 React 함수의 최상위에서 Hook을 호출해야 함
- 오직 React 함수 내에서 Hook을 호출해야 함
  + JavaScript에서 호출하면 안됨

## useState
- 컴포넌트에 state variable를 추가할 수 있음
```
const [state, setState] = useState(initialState)
```

### useState(initalState) Reference
  + 상태 변수를 선언하려면 구성 요소의 최상위 수준에서 useState를 호출
```
import { useState } from 'react';

function MyComponent() {
  const [age, setAge] = useState(28);
  const [name, setName] = useState('Taylor');
  const [todos, setTodos] = useState(() => createTodos());
  // ...
```
  + array destructuring을 이용

- Parameters
  + initalState: 상태의 초기값, 모든 유형의 값이 될 수 있지만 함수에는 특별한 동작이 있음. 이 인수는 초기 렌더링 후에 무시됨
  + initialState는 초기화 함수처럼 처리, 순수해야 함, 인수를 취하지 않아야 함, 모든 유형의 값을 반환해야 함
  + 리액트는 컴포넌트를 초기화할 때 초기화 함수를 호출하고 반환 값을 초기 상태로 저장


- Return
  + useState 두 개의 값이  있는 배열을 반환

- Caveats(주의 사항)
  + useState는 Hook이므로 컴포넌트 최상위 수준이나 자체 Hook에서만 호출 가능(루프, 조건 내에서는 X)
  + 필요한 경우 새 구성 요소를 추출하고 상태를 해당 구성 요소로 옮김
  + Strict 모드에서 React는 실수로 발생한 불순물을 찾는 데에 도움을 주기 위해 초기화 함수를 두 번 호출

### Set functions like setSomething(nextState) Reference
  + useState에 의해 반환되는 set 함수는 상태를 다른 값으로 업데이트하고 리렌더링을 트리거할 수 있음
  + 다음 상태를 직접 전달하거나 이전 상태에서 이를 계산하는 함수를 전달 가능
```
const [name, setName] = useState('Edward');

function handleClick() {
  setName('Taylor');
  setAge(a => a + 1);
  // ...
```

- Parameters
  + useState에 의해 반환되는 함수 set 함수는 상태를 다른 값으로 업데이트하고 리렌더링을 트리거 가능
  + 다음 상태를 직접 전달하거나 이전 상태에서 이를 계산하는 함수를 전달 가능
  + nextState: 원하는 상태 값. 모든 유형의 값이 될 수 있지만 함수에는 특별한 동작을 수행
  + nextState를 실행하면 updater function처럼 처리된다. 순수해야 하고 보류중인(pendding) 상태를 유일한 인수로 사용해야 하며 다음 상태를 반환해야 함
  + React는 업데이트 기능을 대기열에 넣고 구성 요소를 다시 렌더링, 다음 렌더링 동안 React는 대기 중인 모든 업데이트를 이전 상태에 적용하여 다음 상태를 계산

- Returns
  + Set 함수는 리턴 값이 없다.
 
-  Caveats(주의사항)
  + Set 함수는 다음 렌더링에 대한 상태 변수만 업데이트함. set함수를 호출한 후 상태 변수를 읽으면 호출하기 전에 화면에 있었던 이전 값을 계속 얻을 수 있음
  + 최적화: Object.is 비교를 통해 확인한 바와 같이 제공하는 새 값이 현재 상태와 동일한 경우 React는 구성 요소 및 구성 요소의 하위 항목을 re-rendering하는 것을 건너뜀
  + React는 상태 업데이트를 일괄 처리함, 모든 이벤트 핸들러가 실행 되고 해당 set 함수를 호출한 후에 화면을 업데이트, 이렇게 하면 단일 이벤트 중에 여러 번 리렌더링되는 것을 방지할 수 있다. 예를 들어 DOM에 액세스 하기 위해 React를 강제로 먼저 화면을 업데이트해야 하는 경우에는 flushSync를 사용 가능
  + 렌더링 중 set 함수 호출은 현재 렌더링 구성 요소 내에서만 허용, React는 출력을 삭제하고 즉시 새 상태로 다시 렌더링을 시도(이전 렌더링의 정보를 저장 하는 데 사용 가능)
  + Strict 모드에서 React는 우발적인 불순물을 찾는데 도움을 주기 위해 업데이트 기능을 두 번 호출 함(프로덕션에는 영향을 주지 않음) 업데이터 함수가 순수하다면(있는 그대로) 동작에 영향을 주지 않아야 하고 호출 중 하나의 결과는 무시

### Usage
![image](https://github.com/Gnyo/React/assets/102850495/5cc39970-548a-4ad2-90b1-089a26de46f6)
