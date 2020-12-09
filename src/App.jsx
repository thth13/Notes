import Sidebar from './components/sidebar/Sidebar';
import Editor from './components/editor/Editor';

import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="root">
        <Sidebar />
        <Editor />
      </div>
    </Provider>
  );
};

export default App;
