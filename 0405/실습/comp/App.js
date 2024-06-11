import './App.css';
import Header from './classComp/Main';
import Main from './classComp/Main';
import Footer from './classComp/Footer';
import MyComponent from './MyComponent';

function App(props) {
  return(
    <div>
      <MyComponent name="HTML" />
      <MyComponent name="JavaScript" />
      <MyComponent name="React" />
    </div>
  )
}

export default App;
