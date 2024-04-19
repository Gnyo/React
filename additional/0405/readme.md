# Web Programming 04

### 리스트 컴포넌트

1. 'RList.js' 파일 생성 후 코드 입력
```
import React, { Component } from 'react'

export default class RList extends Component {
    render() {
        const items = this.props.items.split(",")
        const itemsObj = items.map(
        (e) => {
            return <li>{e}</li>
        })
        let title = this.props.title
        if (!title) title = "LIST"
        return (
            <div>
                <h3>{title}</h3>
                <ul>{itemsObj}</ul>
            </div>
        )
    }
}
```

2. 'App.js' 코드 수정
```
import './App.css';
import RList from './RList';
function App() {
    return (
        <div>
        <RList title="Colors" items="Red,Green,Blue,White" />
        </div>
    );
}
export default App;
```

3. 터미널에서 서버 불러오기
```
npm start
```

![image](https://github.com/Gnyo/React/assets/102850495/14702873-ff10-47b7-9656-e3884c520204) |
---|

<br>
