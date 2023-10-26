import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import IdInquiryPage from './pages/id-inquiry';
import LoginPage from './pages/login';
import MainPage from './pages/main';
import PwInquiryPage from './pages/pw-inquiry';
import SignUpPage from './pages/signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: 'signup',
    element: <SignUpPage />,
  },
  {
    path: 'id-inquiry',
    element: <IdInquiryPage />,
  },
  {
    path: 'pw-inquiry',
    element: <PwInquiryPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
