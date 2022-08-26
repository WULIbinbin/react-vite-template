import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppLayout from '@/layout/index';
import store from '@/store';

import 'tdesign-react/dist/reset.css';
import 'tdesign-react/es/style/index.css';
import '@/styles/index.less';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </Provider>
  );
}

const container = createRoot(document.getElementById('container'));
container.render(<App />);
