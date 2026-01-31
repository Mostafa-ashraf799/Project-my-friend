import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// شاشة التحميل المؤقتة
const LoadingFallback = () => (
  React.createElement('div', {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
      color: 'white',
      fontFamily: "'Inter', sans-serif",
      textAlign: 'center',
      zIndex: 9999
    }
  },
    React.createElement('div', null,
      React.createElement('div', { style: { fontSize: '2rem', marginBottom: '1rem', fontFamily: "'Poppins', sans-serif" } }, 'Keeping Distances'),
      React.createElement('div', { style: { marginBottom: '2rem' } }, 'تطبيق الدردشة الآمن'),
      React.createElement('div', { style: { fontSize: '0.9rem', opacity: 0.8 } }, 'جاري التحميل...')
    )
  )
);

// احصل على عنصر الجذر
const rootElement = document.getElementById('root');

if (rootElement) {
  // عرض شاشة التحميل أولاً
  const root = ReactDOM.createRoot(rootElement);
  root.render(React.createElement(LoadingFallback));

  // تحميل التطبيق الرئيسي بعد تأخير بسيط
  setTimeout(() => {
    root.render(
      React.createElement(React.StrictMode, null,
        React.createElement(App)
      )
    );
  }, 500);
} else {
  console.error('لم يتم العثور على عنصر الجذر في الصفحة');
}