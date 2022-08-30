import './App.css';
import { Body } from './components/Body';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Body/> 
      </Router>
    </Provider>
  );
}

export default App;
