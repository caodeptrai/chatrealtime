import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './components/GlobalStyle/GlobalStyle';
import AppProvider from './context/AppContext';
import { AuthContextProvider } from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext';
import { GroupContextProvider } from './context/GroupContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <GlobalStyle>
    <AuthContextProvider>
    
      <GroupContextProvider>
        <ChatContextProvider>
        <React.StrictMode>
            <App />
         </React.StrictMode>
        </ChatContextProvider>
      </GroupContextProvider>
    </AuthContextProvider>
  
  </GlobalStyle>
);
