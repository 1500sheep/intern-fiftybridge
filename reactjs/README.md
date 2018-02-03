# React.JS



## Lecture([velopert](https://velopert.com/reactjs-tutorials))

#### React?

- 페이스북에서 개발한 유저 인터페이스 라이브러리로서 개발자로 하여금 재사용 가능한 UI를 생성할 수 있게 해준다. **Virtual DOM** 이라는 개념을 사용하여 상태의 변함에 따라 선택적으로 유저 인터페이스를 렌더링 한다. 최소한의 DOM 처리로 컴포넌트들로 업데이트 할 수 있게 해준다.(DOM자체는 빠르나, 변화가 일어나면 CSS를 다시 연산하고, 레이아웃 구성하고 웹 페이지 리페인트 하는데 이 과정에서 시간 허비가 큼!)
- React에서 데이터가 변하여 브라우저상의 실제 DOM을 업데이트 할 때에는 3가지 절차가 있다. 이는 컴포넌트가 업데이트 될 때, 레이아웃 계산이 한번만 이뤄진다.
  1. 데이터가 업데이트 되면, 전체 UI를 Virtual DOM에 리 렌더링 한다.
  2. 이전 Virtual DOM에 있던 내용과 현재의 내용을 비교한다.
  3. 바뀐 부분만 실제 DOM에 적용이 된다.



### Tutorial for React.js

- Global Package install

  - babel - enables to use ECMAScript6 Syntax in the environment where can't support ECMAScript6

  - webpack - module bundlers, enables to do "import" like Browserify and make javascripts files in one 

  - webpack-dev-server - simple develop server supported by wepback.

  - > sudo npm install -g babel webpack webpack-dev-server

- Create project(mkdir any directory for project)

  - > npm init

- Install dependeny and plugin

  - > npm install --save react react-dom
    >
    > npm install --save

- directory structure

  ````
  react-tutorial
  ├── package.json         
  ├── public            # server public path
  │   └── index.html    # main page
  ├── src               # React.js project root
  │   ├── components    # component directory
  │   │   └── App.js    # App component
  │   └── index.js      # Webpack Entry point
  └── webpack.config.js # Webpack config file
  ````

  - webpack 설정(webpack.config.js) : entry부터 시작하여 필요한 모듈들을 다 불러온 후, 한 파일로 합쳐 bundle.js에 저장. 추가적으로 모듈을 통하여 ES6 문법으로 작성된 코드를 ES5 형태로 변환도 해준다. 개발 서버 포트 설정하고 개발 서버는 파일이 변동 될 때마다 다시 컴파일하고 브라우저 새로 고침해주는 기능을 갖고 있다.

  - package.json (webpack-dev-server가 실행되게 변경!)

    ```json
    "scripts": {
        "start": "webpack-dev-server --hot --host 0.0.0.0"
      },
    ```

  - index.html : 위의 webpack.config.js의 bundle.js를 여기서 불러준다!

    ```html
    <div id="root"></div>
    <script src="bundle.js"></script>
    ```

  - src/components/App.js (import,export는 ES6문법)

    ```js
    import React from 'react';

    class App extends React.Component {
        render(){
            return (
                    <h1>Hello React Skeleton</h1>
            );
        }
    }
    export default App;
    ```

  - src/index.js

    ```js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './components/App';

    const rootElement = document.getElementById('root');
    ReactDOM.render(<App />, rootElement);
    ```

- JSX [참고](https://velopert.com/867) : React.js는 일반 JavaScript문법이 아닌 JSX문법을 사용하여 UI를 템플릿화 한다. (필수는 아니지만 이걸로 하지 뭐)

  ```js
  // import 는 ES6문법, var React = require('react') 와 동일
  import React from 'react';

  // 모든 Component는 React.Component를 상속한다.
  class App extends React.Component{
    // 컴포넌트에 렌더링 될 데이터 정의!
    render(){
      // html태그 반환하는데 따옴표 없음, React JSX는 XML-like Syntax를 native Javascript로 변환해준다. ""로 감싸지 않음.
      return (
        <h1>Hello James</h1>
      );
    }
  }
  export default App;
  ```

  - 여러 Element를 렌더링 해야 할 때, 그 element들을 필수적으로 container element안에 포함시켜 줘야 한다. 

    ```js
    return(
    	<div>
      		<h1>abc</h1>
      		<h2>def</h2>
      	</div>
    )
    ```

  - JavaScript Expression in JSX

    - let 쓰셈 e.g. let text = "asdas" / 사용할 땐 {text} 요렇게

    - If-Else 문 사용 불가 , condition? true : false 이걸로 대체!

      > {1==1? 'True' : 'False'}

- Component 생성 및 모듈화 : 이 부분은 node.js 모듈화와 비슷한것이니 알거라 생각함. **class Header extends React.Component** 이런식으로 여러개의 component를 만들어서 거기안에 render, return 다 넣고 main component에 넣어서 다 같이 실행해도 되고, 아니면 component별 .js파일 하나씩 만들어서 import해서 해도 된다! <- node.js해서 알지?!

- Component State와 Props 사용하기  [참고](https://velopert.com/921)

  - Props : 컴포넌트에서 사용할 데이터 중 **변동되지 않는 데이터**를 다룰 때 사용된다. parent 컴포넌트에서 child 컴포넌트로 데이터를 전할 때, props가 사용된다. 

    ```js
    // App.js
    class App extends React.Component {
        render(){
            return  (
                <div>
                    <Header title={ this.props.headerTitle }/>
                    <Content title={ this.props.contentTitle }
                              body={ this.props.contentBody }/>
                </div>
            );
        }
    }
    // props를 default로 하면 index.js에서 따로 명시 안 해줄경우 default값으로 넘어가는 것 알쥐?!
    //  className.defaultProps = { propName: value }

    App.defaultProps = {
        headerTitle: 'Default header',
        contentTitle: 'Default contentTitle',
        contentBody: 'Default contentBody'
    };
    ```

    ```js
    //index.js
    ReactDOM.render(<App headerTitle = "Welcome!"
                         contentTitle = "Stranger,"
                         contentBody = "Welcome to example app"/>, rootElement);
    ```

  - Type 검증(Validate)하기 (validate하는 타입 맞게 있는 것 같으니 하면서 확인!)

    ```js
    // Content.js 이런식으로 props 타입을 지정해주면 받을 때 타입 안 맞으면 아주 그냥 오류가 딱!
    Content.propTypes = {
        title: React.PropTypes.string,
        body: React.PropTypes.string.isRequired
    };
    ```

  - State : 컴포넌트에서 유동적인 데이터를 다룰 때 , state를 사용한다. React.js 어플리케이션을 만들 땐, state를 사용하는 컴포넌트의 갯수를 최소화 해야함. **container 컴포넌트** 를 사용하는 것이 효율적(큰 컴포넌트 같은 그런?!)

    ```js
    import React from 'react';

    class StateExample extends React.Component {
      // state의 초기 값을 설정할 때는 contstructor(생성자) 메소드에서 this.state={}를 통하여 설정한다.
       constructor(props) {
          super(props);

         // state를 렌더링 할 때는 {this.state.stateName} 을 사용한다.
          this.state = {
             header: "Header Initial state",
             content: "Content Initial State"
         };
       }
      
    // state를 업데이트 할 때는 this.setState() 메소드를 사용한다. bind 해야 React Component가 가지고 있는 멤버 함수 및 객체에 접근 할 수 있다.
       updateHeader(text){
           this.setState({
               header: "Header has changed"
           });
       }

       render() {
          return (
             <div>
                <h1>{this.state.header}</h1>
                <h2>{this.state.content}</h2>
                <button onClick={this.updateHeader.bind(this)}>Update</button>
             </div>
          );
       }
    }

    export default StateExample;
    ```

  - props - parent 컴포넌트에 의해 값이 변경 될 수 있다 , 컴포넌트 내부에서 변경 될 수 없다. / state - parent 컴포넌트에 의해 값이 변경 될 수 없다 , 컴포넌트 내부에서 변경 될 수 있다.

- Component Iteration(반복) - Map [참고](https://velopert.com/957)

  - JavaScript의 Array 객체 내장 함수 map : map() 는 파라미터로 전달 된 함수를 통하여 배열 내의 각 요소를 프로세싱 하여 그 결과로 새로운 배열을 생성한다. 

    > arr.map(callback,[thisArg])

    - callback : 새로운 배열의 요소를 생성하는 함수. 
      - currentValue : 현재 처리되고 있는 요소
      - index : 현재 처리되고 있는 요소의 index값
      - array : 메소드가 불려진 배열
    - thisArg(선택) : callback 함수 내부에서 사용 할 this 값을 설정

    ```js
    let numbers = [1,2,3,4,5];
    let result = numbers.map((num) => {return num*num});
    ```

  - 컴포넌트 mapping(state를 이용하여 사용)

    ```js
    class Contacts extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                contactData: [
                    {name: "Abet", phone: "010-0000-0001"},
                    {name: "Betty", phone: "010-0000-0002"},
                    {name: "Charlie", phone: "010-0000-0003"},
                    {name: "David", phone: "010-0000-0004"}
                ]
            };
        }
        render(){
            return(
                <div>
                    <h1>Contacts</h1>
                    <ul>
                        {this.state.contactData.map((contact, i) => {
                            return (<ContactInfo name={contact.name}
                                                phone={contact.phone}
                                                  key={i}/>);
                        })}
                    </ul>
                </div>
            );
        }
    }

    class ContactInfo extends React.Component {
        render() {
            return(
                <li>{this.props.name} {this.props.phone}</li>
                );
        }
    }
    ```

- Component LifeCycle API [참고](https://velopert.com/1130) : 컴포넌트가 DOM 위에 생성되기 전 후 및 데이터가 변경되어 상태를 업데이트 하기 전 후로 실행되는 메소드

  ![lifecycle](/home/jameskang/다운로드/lifecycle.png)

  ​	

  - constructor 

    ```js
    // 생성자 메소드, 컴포넌트 최초 만들어 질 때 실행. 기본 state 정할 수 있다.
    constructor(props){
      super(props);
      console.log("constructor")
    }
    ```

  - componentWillMount

    ```js
    // 컴포넌트가 DOM 위에 만들어지기 전에 실행된다.
    conponentWillMount(){
      console.log("componentWillMount");
    }
    ```

  - render : 컴포넌트 렌더링을 담당.

  - componentDidMount

    ```js
    // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드, 다른 JavaScript 프레임 워크를 연동하거나 setTimeout,setInterval 및 AJAX 처리 등을 넣는다.
    componentDidMount(){
      console.log("componentDidMount");
    }
    ```

  - componentWillReceiveProps

    ```js
    // 컴포넌트가 prop 을 새로 받았을 때 실행된다. prop 에 따라 state를 업데이트 해야 할 때 사용하면 유용하다. 
    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps: " + JSON.stringify(nextProps));
    }
    ```

  - shouldComponentUpdate

    ```js
    // prop 혹은 state 가 변경 되었을 때, 리렌더링을 할지 말지 정하는 메소드, 필요한 비교를 하고 값을 반환하도록 해주면 된다. 
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
        return true;
    }
    ```

  - componentWillUpdate

    ```js
    // 컴포넌트가 업데이트 되기 전에 실행된다. this.setState()를 사용하면 무한루프에 빠져들기 때문에 절대 사용 X
    componentWillUpdate(nextProps, nextState){
        console.log("componentWillUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
    }
    ```

  - componentDidUpdate

    ```js
    // 컴포넌트가 리렌더링을 마친 후 실행
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate: " + JSON.stringify(prevProps) + " " + JSON.stringify(prevState));
    }
    ```

  - componentWillUnmount

    ```js
    // 컴포넌트가 DOM 에서 사라진 후 실행되는 메소드.
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    ```

- React.js의 ref (reference) : DOM 요소에 이름을 달아주고 ref는 DOM요소에도 사용하고 컴포넌트에도 사용할 수 있으며, 해당 컴포넌트가 가지고 있는 메소드 및 변수들을 사용할 수 있다. **state 및 props**로 해결 할 수 없는 부분에서만 **ref** 사용하는 것이 유지보수에 좋다. (컴포넌트에 의해 렌더된 DOM에 직접 어떠한 처리를 해야 할 경우 / 큰 프로젝트에 React 컴포넌트를 사용하는 경우)

  - 문자열 Attrubite 로 ref 사용(안씀?!)

  - 콜백 함수 사용하기

    ```js
    class Hello extends React.Component {
      render() {
      	return (
        	  <div> 
          	    <input ref={ref => this.input = ref}>
                </input>
              </div>
            )
      }
      
      componentDidMount() {
      	this.input.value = "I used ref to do this";
      }
      
    }
    ReactDOM.render(
      <Hello/>,
      document.getElementById('app')
    );
    ```

- 함수형 컴포넌트 [참고](https://velopert.com/2994) : 라이플 사이클 API도 사용하지 않고 state도 사용하지 않고 그냥 props만 전달해주면 뷰를 렌더링만 해주는 역할일 때 함수형 컴포넌트 형식으로 컴포넌트를 정의할 수 있다.

  ```js
  import React from 'react';

  // 또는 const Hello = (props) => {} 요렇게도 가능!
  function Hello(props){
    return(
      <div>Hello {props.name}</div>
    );
  }
  export default Hello;
  ```