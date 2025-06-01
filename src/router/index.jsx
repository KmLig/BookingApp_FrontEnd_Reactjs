import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import AboutUs from '../pages/AboutUs';
import HotelDetail from '../pages/HotelDetail';
import Payment from '../pages/Payment';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'about',
        element: <AboutUs />,
      },
      {
        path: 'hotel/:id',
        element: <HotelDetail />,
      },
      {
        path: 'payment',
        element: <Payment />,
      },
    ],
  },
]);

export default router; 