import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';
import NavBar from '../components/Navbar'


const useDarkMode = () => {
   const [mode, setMode] = useLocalStorage('mode');
  useEffect(() => {
    mode ? document.body.classList.add('dark-mode') :  document.body.classList.remove('dark-mode'); 
  },
  [mode]);
  
  return [mode, setMode];
};

export default useDarkMode;