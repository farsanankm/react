import logo from './logo.svg';
// import './Hai.css';
import Hello from'./Component/Hello'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import Card from './Component/Project1';
import Project1 from './Component/Project1';

function App() {

  const data = [

    {
      id:1,
      name:"ashudhas",
      img:"https://th.bing.com/th/id/OIP.8eJNMEsDP4uYuV4dl--i9gHaE8?w=356&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    
    {
      id:1,
      name:"ashudhas",
      img:"https://th.bing.com/th/id/OIP.8eJNMEsDP4uYuV4dl--i9gHaE8?w=356&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    
    {
      id:1,
      name:"ashudhas",
      img:"https://th.bing.com/th/id/OIP.8eJNMEsDP4uYuV4dl--i9gHaE8?w=356&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    
    {
      id:1,
      name:"ashudhas",
      img:"https://th.bing.com/th/id/OIP.8eJNMEsDP4uYuV4dl--i9gHaE8?w=356&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    
    {
      id:1,
      name:"ashudhas",
      img:"https://th.bing.com/th/id/OIP.8eJNMEsDP4uYuV4dl--i9gHaE8?w=356&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    
    {
      id:1,
      name:"ashudhas",
      img:"https://th.bing.com/th/id/OIP.8eJNMEsDP4uYuV4dl--i9gHaE8?w=356&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
,<Button>hhello woprld</Button>
<Project1 data={data}/>
    </div>
  );
}

export default App;
