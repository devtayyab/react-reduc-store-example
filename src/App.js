
import Main from './componenet/main'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'
import store from './store/index'
function App() {
  return (
    <Provider store ={store} >
    <div className="App">
      <Main></Main>
    </div>
    </Provider>
  );
}

export default App;
