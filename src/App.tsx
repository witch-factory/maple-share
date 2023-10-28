import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import IdInquiryPage from './pages/id-inquiry';
import LoginPage from './pages/login';
import MainPage from './pages/main';
import PwInquiryPage from './pages/pw-inquiry';
import RegisterPage from './pages/register';

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
    path: 'register',
    element: <RegisterPage />,
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
