# Web Programming 06

> ## Hook

### 등장 배경
- 리액트 컴포넌트는 함수형 컴포넌트/클래스형 컴포넌트로 나뉨
- 리액트 초기: 일반적으로 함수형 컴포넌트 사용, 값의 상태를 관리(state, Life Cycle Method)를 사용해야할 때 클래스형 컴포넌트 사용
- 클래스형 컴포넌트의 단점
  + 코드의 구성이 어렵고 컴포넌트의 재사용성이 떨어짐
  + 컴파일 단계에서 코드 최적화를 어렵게 함
  + 최신 기술의 적용이 효과적이지 않음
- 클래스형 컴포넌트의 단점을 보완하여 함수형 컴포넌트를 사용할 수 있도록 등장한 것이 React Hook(리액트 훅)

</br>

### 장점
- 상태 로직 단순화: 함수형 컴포넌트에 상태를 추가하여 전반적인 로직을 단순화하고 코드를 이해하기 쉽게 만들 수 있음
- 코드 재사용성과 관심사 분리: 컴포넌트 계층 구조를 변경하지 않고도 여러 컴포넌트 간에 상태 로직을 재사용할 수 있음
- 사이드 이펙트 감소: 함수형 컴포넌트에 생명주기 매소드와 유사한 기능을 제공하여 사이드 이펙트를 더 효율적으로 처리 가능

</br>

### 규칙
  + 규칙들을 자동으로 강제하기 위한 linter 플러그인(Create React App에 기본적으로 포함되어 있음)을 제공
- 최상위(at the Top Level)에서만 Hook을 호출해야 함
  + 반복문, 조건문, 중첩된 함수 내에서 Hook을 호출하면 안됨
  + early return이 실행되기 전에 항상 React 함수의 최상위에서 Hook을 호출해야 함
- 오직 React 함수 내에서 Hook을 호출해야 함
  + JavaScript에서 호출하면 안됨

</br>

---

</br>

> ## useState
- 컴포넌트에 state variable를 추가할 수 있음
```
const [state, setState] = useState(initialState)
```

</br>

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

</br>

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
  + Set 함수는 리턴 값이 없음 
 
-  Caveats(주의사항)
  + Set 함수는 다음 렌더링에 대한 상태 변수만 업데이트함. set함수를 호출한 후 상태 변수를 읽으면 호출하기 전에 화면에 있었던 이전 값을 계속 얻을 수 있음
  + 최적화: Object.is 비교를 통해 확인한 바와 같이 제공하는 새 값이 현재 상태와 동일한 경우 React는 구성 요소 및 구성 요소의 하위 항목을 re-rendering하는 것을 건너뜀
  + React는 상태 업데이트를 일괄 처리함, 모든 이벤트 핸들러가 실행 되고 해당 set 함수를 호출한 후에 화면을 업데이트, 이렇게 하면 단일 이벤트 중에 여러 번 리렌더링되는 것을 방지할 수 있다. 예를 들어 DOM에 액세스 하기 위해 React를 강제로 먼저 화면을 업데이트해야 하는 경우에는 flushSync를 사용 가능
  + 렌더링 중 set 함수 호출은 현재 렌더링 구성 요소 내에서만 허용, React는 출력을 삭제하고 즉시 새 상태로 다시 렌더링을 시도(이전 렌더링의 정보를 저장 하는 데 사용 가능)
  + Strict 모드에서 React는 우발적인 불순물을 찾는데 도움을 주기 위해 업데이트 기능을 두 번 호출 함(프로덕션에는 영향을 주지 않음) 업데이터 함수가 순수하다면(있는 그대로) 동작에 영향을 주지 않아야 하고 호출 중 하나의 결과는 무시

</br>

---

</br>

### Hook 사용법(Usage)
- 구성요소에 상태 추가
  + useState 하나 이상의 상태 변수를 선언하려면 구성 요소의 최상위 수준에서 호출
```
import { useState} from 'react';

function MyComponent(){
  const [age, setAge] = useState(42);
  const [name, setName] = useState('Taylor');
  // ...
```
- array destructuring를 사용하여 [Something, setSomething]과 같은 상태 변수의 이름 지정
- 두 개의 항목이 포함된 배열을 반환
- 이 상태 변수의 현재 상태는 처음에 사용자가 제공한 초기 상태로 설정
- set 함수는 상호 작용에 대한 응답으로, 다른 값으로 변경 가능
- 화면의 내용을 업데이트하려면 다음 상태 값을 가진 set 함수를 호출하면 됨

```
function handleClic(){
  setName('Robin');
}
```
- 리액트는 다음 상태를 저장하고, 새 값으로 구성 요소를 다시 렌더링하고, UI를 업데이트 함
![image](https://github.com/Gnyo/React/assets/102850495/5cc39970-548a-4ad2-90b1-089a26de46f6)

</br>

---

</br>

> ## Basic useState 실습
### Counter(number)
1. 터미널에서 'stateex' 리액트 파일 만들기
```
npx create-react-app comp
```

2. 'stateex' 리액트 파일의 'src'폴더에서 'Counter.js' 파일 생성

![image](https://github.com/Gnyo/React/assets/102850495/9377b318-a230-42b4-98b9-aab0ce89d13e) |
---|

3. 'Counter.js' 파일에 코드 작성
- count 상태 변수는 숫자를 유지
- 버튼을 클릭하면 증가 
```
import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    
    return (
        <button onClick={handleClick}>
            You pressed me {count} times
        </button>
    );
}
```

4. 'App.js' 코드 수정
```
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
```

5. 터미널로 서버 불러오기
```
cd stateex
npm start
```

![image](https://github.com/Gnyo/React/assets/102850495/1e28e4b8-3f96-45be-b35b-3c1913e1003d) | ![image](https://github.com/Gnyo/React/assets/102850495/68512872-cdf0-4f27-8e03-8e29b0ac3c2d) |
---| ---|
버튼을 누르지 않은 상태 | 버튼을 3번 누른 상태

</br>

### Text field(string)
1. 'stateex' 리액트 파일의 'src'폴더에서 'MyInput.js' 파일 생성

![image](https://github.com/Gnyo/React/assets/102850495/ba96b403-6255-4c14-aea2-babcfac6d5ac) |
---|

2. 'MyInput.js' 파일에 코드 작성
- text 상태 변수는 문자열 유지
- text에 입력 하면 브라우저 입력 DOM 요소에서 최신 입력 값을 읽고 setText를 호출하여 상태 업데이트
```
import { useState } from 'react';

export default function MyInput() {
    const [text, setText] = useState('hello');
    
    function handleChange(e) {
        setText(e.target.value);
    }
    return (
        <>
            <input value={text} onChange={handleChange} />
            <p>You typed: {text}</p>
            <button onClick={() => setText('hello')}>
            Reset
            </button>
        </>
    );
}
```

3. 'App.js' 코드 수정
```
import './App.css';
import MyInput from './MyInput';

function App() {
  return (
    <div className="App">
      <MyInput />
    </div>
  );
}

export default App;
```

4. 터미널로 서버 불러오기
```
cd stateex
npm start
```

![image](https://github.com/Gnyo/React/assets/102850495/f6efc88b-1fa7-4ab2-bcfa-dc4d4809aaef) | ![image](https://github.com/Gnyo/React/assets/102850495/05cf0ea7-90a2-4d4a-9d10-3e16d33ad692)| ![image](https://github.com/Gnyo/React/assets/102850495/ca30b503-7f1e-4d94-8f5f-89caadd22569) |
---| ---| ---|
아무것도 입력하지 않은 상태 | 입력을 한 상태 | Reset을 누른 상태

</br>

### Checkbox(boolean)
1. 'stateex' 리액트 파일의 'src'폴더에서 'Checkbox.js' 파일 생성

![image](https://github.com/Gnyo/React/assets/102850495/543c76cf-bcb7-4906-98bd-9981da1b0611) |
---|

2. 'Checkbox.js' 파일에 코드 작성
- liked 상태 변수는 부울(boolean) 값 유지
- Input(checkbox)을 클릭하면 setLiked는 브라우저 checkbox input이 선택되었는지 여부로 liked 상태 변수를 업데이트, liked 변수는 checkbox 아래에 텍스트를 렌더링하는 데에 사용
```
import { useState } from 'react';

export default function Checkbox() {
    const [liked, setLiked] = useState(true);

    function handleChange(e) {
        setLiked(e.target.checked);
    }

    return (
        <>
            <label>
                <input
                type="checkbox"
                checked={liked}
                onChange={handleChange}
                />
                I liked this
            </label>
            <p>You {liked ? 'liked' : 'did not like'} this.</p>
        </>
    );
}
```

3. 'App.js' 코드 수정
```
import './App.css';
import Checkbox from './Checkbox';

function App() {
  return (
    <div className="App">
      <Checkbox />
    </div>
  );
}

export default App;
```

4. 터미널로 서버 불러오기
```
cd stateex
npm start
```

![image](https://github.com/Gnyo/React/assets/102850495/859e49c6-e144-4008-b53c-22982fbeb847) | ![image](https://github.com/Gnyo/React/assets/102850495/d418c2d4-15f2-426e-9e36-825680cb2baa)
---| ---|
체크박스를 선택한 상태(기본 상태) | 체크박스를 해제한 상태

</br>

### Form(two variables)
1. 'stateex' 리액트 파일의 'src'폴더에서 'Form.js' 파일 생성

![image](https://github.com/Gnyo/React/assets/102850495/474c8182-abdc-4b23-851a-a221deeb6f67) |
---|

2. 'Form.js' 파일에 코드 작성
- 동일한 컴포넌트에서 둘 이상의 상태 변수 선언 가능
- 각 상태 변수는 완전히 독립적임
```
import { useState } from 'react';

export default function Form() {
    const [name, setName] = useState('Taylor');
    const [age, setAge] = useState(42);

    return (
        <>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => setAge(age + 1)}>
                Increment age
            </button>
            <p>Hello, {name}. You are {age}.</p>
        </>
    );
}
```

3. 'App.js' 코드 수정
```
import './App.css';
import Form from './Form';

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
```

4. 터미널로 서버 불러오기
```
cd stateex
npm start
```

![image](https://github.com/Gnyo/React/assets/102850495/ffa02c73-b4fc-43f0-af85-e5a4d177952f) | ![image](https://github.com/Gnyo/React/assets/102850495/aebc1870-76d2-44db-a7f8-c7c4e84a8119) | ![image](https://github.com/Gnyo/React/assets/102850495/c364ade1-888c-4982-8a16-a6dadbebadfe)
---| ---| ---|
기본 상태 | 입력 창에 이름을 입력한 상태 | Increment age를 13번 누른 상태 
