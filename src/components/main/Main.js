import { Component } from 'react'
import ToDoListItem from '../to-do-list-item/To-do-list-item'
import Footer from '../footer/Footer'
import { moonIcon, sunIcon } from '../../assets/icons'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      showIcon: true,
    }
  }

  changeHandlerInput = e => {
    this.setState({
      name: e.target.value
    })
  }

  addFormHandler = e => {
    e.preventDefault();
    this.props.onAddForm({ name: this.state.name });
    this.setState({ name: '' })
  }

  modeHandler = () => {
    document.documentElement.classList.toggle('dark');
    this.setState((prev) => ({
      showIcon: !prev.showIcon
    }))
  }

  render() {
    const { data, onDelete, updateFilterHandler, clearCompleted, completedHandler, filter } = this.props
    return (
      <div className='bg-desktop-light h-[29dvh] bg-no-repeat bg-cover dark:bg-desktop-dark'>
        <div className='container flex justify-center'>
          <div className='w-full max-w-[540px] mt-[70px] max-md:mt-[52px]'>
            <div className='flex justify-between items-center'>
              <h1 className='text-[#fff] font-bold text-[2.5rem] max-md:text-[30px]'>TODO</h1>
              <button id='mode-toggler' type='button' onClick={this.modeHandler} >
                {this.state.showIcon ? (
                  <img src={sunIcon} alt="Sun icon" />
                ) : (
                  <img src={moonIcon} alt="Moon icon" />
                )}
              </button>
            </div>
            <form onSubmit={this.addFormHandler} className='mt-12 mb-6 flex items-center special-background max-md:py-[15px] max-md:px-[18px] bg-light-veryLightGray dark:bg-dark-veryDarkDesaturatedBlue border border-light-veryLightGrayishBlue dark:border-dark-veryDarkGrayishBlue2'>
              <div className='w-6 h-6 rounded-full bg-transparent border border-light-veryLightGrayishBlue dark:border-dark-veryDarkGrayishBlue2'></div>
              <input type="text" className='ms-5 w-[90%] bg-bgTransparent border-none outline-none text-base placeholder:text-dark-darkGrayishBlue text-dark-veryDarkDesaturatedBlue dark:text-dark-lightGrayishBlue' placeholder='Create a new todo' onChange={this.changeHandlerInput} value={this.state.name} />
            </form>
            <ul className='shadow-shadow'>
              {data.map(item => (
                <ToDoListItem key={item.id} name={item.name} completed={item.completed} onDelete={() => onDelete(item.id)} completedHandler={() => completedHandler(item.id)} />
              ))}
            </ul>
            <Footer
              dataLength={data.length}
              filter={filter}
              btnArr={btnArr}
              updateFilterHandler={updateFilterHandler}
              clearCompleted={clearCompleted}
              isMobile={false}
            />
            <Footer
              dataLength={data.length}
              filter={filter}
              btnArr={btnArr}
              updateFilterHandler={updateFilterHandler}
              clearCompleted={clearCompleted}
              isMobile={true}
            />
          </div>
        </div>
      </div>
    )
  }
}

const btnArr = [
  { name: 'All' },
  { name: 'Active' },
  { name: 'Completed' },
]

export default Main