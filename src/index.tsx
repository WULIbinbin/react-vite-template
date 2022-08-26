import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppLayout from '@/layout/index';

import 'tdesign-react/dist/reset.css';
import 'tdesign-react/es/style/index.css';
import '@/styles/index.less';

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

const container = createRoot(document.getElementById('container'));
container.render(<App />);
