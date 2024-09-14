/* eslint-disable react/react-in-jsx-scope */
import { RouterProvider } from 'react-router-dom';
import { router } from './utils/routes';
import './App.css'
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
