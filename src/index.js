import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './components/GlobalStyle/GlobalStyle';
import { AuthContextProvider } from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <AuthContextProvider>
     <ChatContextProvider>
      <React.StrictMode>
        <GlobalStyle>

          <App />
        </GlobalStyle>
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>
);
