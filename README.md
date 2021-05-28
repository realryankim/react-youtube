# 💻 YouTube Clone Coding
* YouTube API, React를 이용한 YouTube 클론 프로젝트

### 📃 프로젝트 목적
* React Hooks 사용
* Public API 학습
* PostCSS로 CSS 스타일링 모듈화
* API를 불러오는 통신(service)와 View를 담당하는 컴포넌트 분리(컴포넌트를 최대한 멍청하게 만들기)

### 🛠 기술 스택
* HTML/CSS/JS
* React Hooks

### 🎞 Demo Link
[Demo Link](https://realryankim.github.io/react-youtube/)

### 🎬 기능 구현
* youtube api의 mostPopular 데이터를 받아서 화면에 보이게 구현
* 미디어쿼리를 활용하여 화면 크기에 따른 반응형 화면 구현
* search input에 입력한 키워드를 이용해서 youtube api의 데이터를 받아 화면에 보이게 구현
* thumbnail을 클릭하면, thumbnail에 맞는 유튜브 비디오가 화면에 보이게 구현

### 📕 배운 점
1. View를 담당하는 컴포넌트를 멍청하게 만들자.
* 컴포넌트 안에서 네트워크 통신을 하는 로직이 있으면 좋지 않다.
  * MVC 패턴에서 리액트는 View를 담당하는 라이브러리이기때문에 컴포넌트 안에서는 View에 대한 로직만 넣는 것이 좋다.
  * 컴포넌트에 네트워크 통신을 하는 로직이 있으면 유닛 테스트를 할 때마다 네트워크 통신을 반복적으로 하기때문에 속도와 효율성면에서 좋지 않다.
  * 위와 같이 네트워크 통신을 하는 부분을 따로 만들어서(클래스 또는 함수로) 컴포넌트 안에 주입해주는 것을 `dependency injection(의존성 주입)`이라고 한다. [의존성 주입](https://ko.wikipedia.org/wiki/%EC%9D%98%EC%A1%B4%EC%84%B1_%EC%A3%BC%EC%9E%85)

2. 리액트 내장 훅(useRef, useCallback), 성능 최적화를 위한 React.memo
* useRef: ref 속성값을 사용하면 자식 요소에 직접 접근할 수 있다. 자식 요소는 컴포넌트일 수도 있고 돔 요소일 수도 있다.
  * 검색 기능을 구형할 때, input의 value에 접근하기 위해서 사용하였다.
* useCallback: 특정 함수를 새로 만들지 않고, 재사용하고 싶을 때 사용한다. useCallback을 사용한 함수 같은 경우에는 한 번 만들면 메모리에 계속 보관하기 때문에 많이 사용할 경우 메모리에 영향이 갈 수 있다. 따라서, 사용하는데 주의할 필요가 있다.
  * 함수형 컴포넌트의 특성 상, state나 props가 바뀔 때마다 해당 컴포넌트에서 정의한 함수가 새로 만들어진다. 그래서, 자식 컴포넌트에 이 함수를 props로 전달 할 경우에 새로운 props이 전달되는 것과 동일하기 때문에 무조건적으로 다시 렌더링이 되는 것을 막기 위해서 사용했다.  
* React.memo: React.memo를 사용하면 특정 결과값을 재사용할 수 있다. 그래서 컴포넌트가 동일한 props를 렌더링할 경우에 다시 렌더링 하지 않고, 마지막으로 렌더링한 결과값을 재사용할 수 있다.

3. .env 환경변수로 API Key 비밀스럽게하기
* DB connection, API Key 등 SCM(source code management)으로 공유되면 비밀 정보가 노출되므로 별도의 행위가 필요하다.
* .env 파일로 따로 관리하고, github에 올라가지않도록 .gitignore에 추가한다.

4. CSS 모듈화
* PostCSS를 사용하면 스타일링도 모듈별도 관리할 수 있다. 매 번, styles를 치는 것은 불편했지만, className을 새로 짓는 것에 대한 고민이 사라져서 좋았다.

