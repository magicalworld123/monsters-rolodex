import React,{ Component } from 'react';
//import logo from './logo.svg';
import {SearchBox} from './component/search-box/search-box.component';
import './App.css';
import { CardList } from './component/card-list/card-list.component';


class App extends Component {
  constructor()
  {
    super();
    this.state={
      monsters:[ ],
      searchField: ''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=> this.setState({monsters: users}));

  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

render(){
  const { monsters, searchField} = this.state;
  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

 return  (
    <div className='App'>
    
    <h1>Monsters Vanshu Ravi Ashu Rolodex</h1>
     <SearchBox
     placeholder='search monsters'
     handleChange={ this.handleChange}
    
     />
     <CardList monsters={filteredMonsters} />
      
        
    </div>
   );
}
}
export default App

