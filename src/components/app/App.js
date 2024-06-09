import React, { useState, useEffect, useContext } from 'react';
import Main from '../main/Main';
import './app.css';
import { Context } from '../../context';

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

const App = () => {
  const [isLoading, setIsLoading] = useState(false)

  const { state, dispatch } = useContext(Context)

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const url = 'https://jsonplaceholder.typicode.com/todos?_start=0&_limit=1';
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        const json = await response.json();
        const newArr = json.map(item => ({
          name: item.title, completed: false, id: item.id
        }));
        dispatch({ type: 'GET_DATA', payload: newArr })
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!state.data.length) {
      fetchData();
    }
  }, [!state.data]);

  

  return (
    <div className="dark:bg-dark-veryDarkBlue h-dvh">
      <Main
        isLoading={isLoading}
      />
    </div>
  );

}

export default App;
