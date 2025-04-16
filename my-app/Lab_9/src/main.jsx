import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider, useSelector } from 'react-redux';
import { store } from './app/store';

// Custom wrapper để gắn theme
const ThemeWrapper = ({ children }) => {
  const theme = useSelector((state) => state.theme);

  React.useEffect(() => {
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [theme]);

  return children;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeWrapper>
      <App />
    </ThemeWrapper>
  </Provider>
);
