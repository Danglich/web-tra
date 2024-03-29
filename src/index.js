import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './components/GlobalStyle';
import './styles.css';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import LastViewProvider from './contexts/LastViewContext';
import CartContextProvider from './contexts/CartContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <GlobalStyle>
                <CartContextProvider>
                    <LastViewProvider>
                        <Router>
                            <App />
                        </Router>
                    </LastViewProvider>
                </CartContextProvider>
            </GlobalStyle>
        </QueryClientProvider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
