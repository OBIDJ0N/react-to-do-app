import React, { Component } from 'react';
import Main from '../main/Main';
import './app.css';
import { v4 as uuidv4 } from 'uuid';

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
localStorage.theme = 'light'
localStorage.theme = 'dark'
localStorage.removeItem('theme')

class App extends Component {
  constructor(props) {
    super(props);
    const savedData = JSON.parse(localStorage.getItem('todoList'));
    this.state = {
      data: savedData || [
        { name: 'Welcome to TODO', completed: false, id: uuidv4() },
      ],
      filter: 'All',
    };
  }

  saveToLocalStorage = (data) => {
    localStorage.setItem('todoList', JSON.stringify(data));
  };

  onAddForm = (item) => {
    const newItem = { name: item.name, completed: false, id: uuidv4() };
    if(item.name.length > 1) {
      this.setState(
        ({ data }) => ({
          data: [...data, newItem],
        }),
        () => this.saveToLocalStorage(this.state.data) 
      );
    }
  };

  onDelete = (id) => {
    this.setState(
      ({ data }) => ({
        data: data.filter((item) => item.id !== id),
      }),
      () => this.saveToLocalStorage(this.state.data) 
    );
  };

  addFormHandler = e => {
    e.preventDefault();
    this.props.onAddForm({ name: this.state.name });
    this.setState({ name: '' })
  }

  filterHandler = (arr, filter) => {
    switch (filter) {
      case 'Active':
        return arr.filter(c => !c.completed)
      case 'Completed':
        return arr.filter(c => c.completed)
      default:
        return arr
    }
  }

  completedHandler = id => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, completed: !item.completed }
        }
        return item
      })
    }))
  }

  clearCompleted = () => {
    this.setState(({ data }) => ({
      data: data.filter(c => !c.completed)
    }))
  }
  updateFilterHandler = filter => this.setState({ filter })

  render() {
    const { data, filter } = this.state;
    const visibleData = this.filterHandler(data, filter);

    return (
      <div className="dark:bg-dark-veryDarkBlue h-dvh">
        <Main
          data={visibleData}
          onAddForm={this.onAddForm}
          onDelete={this.onDelete}
          updateFilterHandler={this.updateFilterHandler}
          clearCompleted={this.clearCompleted}
          completedHandler={this.completedHandler}
          filter={filter}
        />
      </div>
    );
  }
}

export default App;
