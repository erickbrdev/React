import logo from './logo.svg';
import './App.css';

const name = 'Erick'
const lastName = 'Andrade'
const job = 'Developer'
const skills = ['HTML, CSS, JavaScript, React']
const skillsMap = skills.map((hab, index) => <li key={index}>{hab}</li>)

function App() {
  return <div className= "div-flex">
    <p>{name} {lastName}</p>
    <p>Profession: {job}</p>
    <ul>Languages: {skillsMap}</ul>
  </div>
}

export default App;
