import './App.css'
import Header from './components/Header'
import Courts from './components/Courts'
import { useState } from 'react'


function App() {
  const [courts, setCourts] = useState([
    {
      id: 0,
      area: 'Amherst',
      count: 0,
    },
    {
      id: 1,
      area: 'Amherst',
      count: 0,
    },
    {
      id: 2,
      area: 'Amherst',
      count: 0,
    },
    {
      id: 3,
      area: 'Amherst',
      count: 0,
    },
    {
      id: 4,
      area: 'Amherst',
      count: 0,
    },
  ]);
  
  //two state functions to be passed all the way to the court components.
  const joinCourt = (id) =>{
    //make copy, loop through, change correct court, setState w/ new list of courts.
    let crts = [...courts];
    for(let i = 0; i < crts.length; i++){
        if(crts[i].id === id){
        crts[i].count +=1;
        setCourts(crts);
        return;
        }
    }
    //if id not found:
    alert('Court not in list, state not changed.')
  }
    
  const leaveCourt = (id)=>{
    let crts = [...courts];
    for(let i = 0; i < crts.length; i++){
        if(crts[i].id === id && crts[i].count > 0){
        crts[i].count -=1;
        setCourts(crts);
        return;
        }
    }
    //if id not found:
    alert('Court not in list, or count is already 0. state not changed.')
  }
  return (
    <div>
      <Header />
      <Courts 
        courts={courts}
        onJoin={joinCourt}
        onLeave={leaveCourt}
        />
    </div>
    
  );
}

export default App;
