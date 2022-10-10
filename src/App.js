import './App.css';
import InputForm from './components/InputForm';
import Tasks from './components/Tasks';
import ViewCompleted from './components/ViewCompleted';

function App() {
  return (
    <div>
      <h1 className='page-title'>To-do App</h1>
      <p className='caption'>By Zainal Shariff</p>
      <InputForm />
      <Tasks />
      <ViewCompleted />
    </div>
  );
}

export default App;
