# Web Programming 01

### HTML(Hyper Text Markup Language)
<a href="https://www.investopedia.com/terms/h/html.asp" target="_blank"> <img src="https://img.shields.io/badge/HTML-3366CC?style=for-the-badge&logo=htmx&logoColor=FFFFFF"/> </a>
- 웹사이트의 모습을 기술하기 위한 마크업 언어.
- Hyper Text: 참조(하이퍼링크)를 통해 독자가 한 문서에서 다른 문서로 즉시 접근할 수 있는 텍스트.
- Markup Language: 태그 등을 이용하여 문서나 데이터의 구조를 명기하는 언어.</br>

### CSS(Cascading Style Sheet)
<a href="https://developer.mozilla.org/ko/docs/Learn/Getting_started_with_the_web/CSS_basics" target="_blank"> <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=FFFFFF"/> </a>
- Style sheet 언어
- HTML 문서에 있는 요소들에 선택적으로 스타일 적용</br>

<a href="https://sass-lang.com/" target="_blank"> <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=Sass&logoColor=FFFFFF"/> </a>
- CSS의 단점을 보완하기 위해 만든 CSS 전처리기
- sass 그대로 적용되지 않고 컴파일 시에 CSS로 바뀌어 적용됨</br>

### ECMAScript
<a href="https://velog.io/@kapuist/JavaScript-vs-ECMAscript" target="_blank"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=000000"/> </a>
- 스크립트 언어
- 웹 페이지가 동작하는 것을 담당
- Ecma International의 프로토타입 기반의 프로그래밍 언어</br>

---

### DOM(Document Object Model)
#### HTML DOM(간단히 DOM)
- 웹 페이지에 작성된 HTML 태그 당 객체(DOM 객체) 생성: 모든 태그 당 객체 하나씩
#### 목적
- HTML 태그가 출력된 모양이나 콘텐츠를 제어하기 위해
- DOM 객체를 통해 각 태그의 CSS3 스타일 시트 접근 및 변경
- HTML 태그에 의해 출력된 텍스트나 이미지 변경
#### DOM 트리
- HTML 태그의 포함 관계에 따라 DOM 객체의 트리(tree) 생성
- DOM 트리는 부모 자식 관계
#### DOM 객체
- HTML 태그 당 하나의 DOM 객체 생성: DOM 노드(Node), DOM 엘리먼트(Element)라고도 불림</br></br>
![image](https://github.com/Gnyo/React/assets/102850495/31907f22-19f0-4bf8-822f-686ccabd4c44)</br>
    BOM(Browser Object Model): 이미 객체가 만들어져 있음</br>
    DOM(Document Object Model): html 코드 등으로 객체 만들어짐</br>
### Rendering
- 실시간으로 웹사이트가 그려지는 과정</br>
![image](https://github.com/Gnyo/React/assets/102850495/d29600ed-e2e9-4cbd-ac52-17b14d2ae39c)</br>
    ① HTML을 파싱하여 DOM 트리를 만든다.</br>
    ② CSS를 파싱하여 CSSOM 트리를 만든다.</br>
    ③ DOM과 CSSOM을 결합하여 렌더링 트리를 만든다.</br>
    ④ 렌더링 트리에서 각 노드의 크기와 위치를 계산한다.</br>
    ⑤ 개별 노드를 화면에 그린다.</br>

---

### SPA(Single Page Application)
- 한 개(Single)의 Page로 구성된 Application(한 개의 DOM으로 계속 바뀜)
- 모든 정적 리소스를 최초 한번에 다운로드
- 새로운 페이지 요청이 있을 때 필요 데이터만 받아 갱신
- 서버로부터 완전한 새로운 페이지를 불러오지 않고 현재의 페이지를 동적으로 다시 작성함으로써
사용자와 소통하는 웹사이트
- SPA는 보통 CSR(Client Side Rendering)방식으로 렌더링
- 장점:</br>
FE와 BE가 확실히 구분되어 백엔드 부분에 걱정할 필요가 없음(개발 순서로 디자인→서버가 가능)
- 단점:</br>
최초 로딩 시 한번에 받아와 초기 ㅔ이지 로딩시간이 긺
![image](https://github.com/Gnyo/React/assets/102850495/1fe7278b-8692-499c-8a69-a4a9a2778b6c)


### MPA(Multi Page Application)
- 여러 개(Multiple)의 Page로 구성된 Application(여러 개의 DOM)
- 새로운 페이지를 요청할 때마다 서버에서 렌더링된 정적리소스가(HTML, CSS, JS)가 다운로드
- 페이지를 이동하거나 새로고침하면 전체 페이지를 다시 렌더링
- MPA는 SSR(Server Side Application)방식으로 렌더링(Client가 함)
- 장점:</br>
  완성된 형태의 HTML 파일을 서버로부터 전달받음</br>
서버에서 미리 렌더링을 하고 가져와 첫 로딩이 매우 짧음
- 단점:</br>
새로운 페이지를 이동하면 '깜빡'임(UX)
![image](https://github.com/Gnyo/React/assets/102850495/ae861cd2-5280-4a22-b0f6-3d8600eb4967)

---

### Client
- 특정 서비스를 이용하는 사용자(고객)
- 웹 브라우저

### Server
- 특성 서비스를 제공하는 자
![image](https://github.com/Gnyo/React/assets/102850495/7fed13d7-e048-430a-bfd4-eb760da6e0cf)
