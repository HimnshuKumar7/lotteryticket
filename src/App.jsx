import './App.css'
import CommentsForm from './CommentsForm';
import Counter from './Counter';
import Form from './Form';
import Joker from './Joker';

import Lottery from './Lottery';
import Ticket from './Ticket';


function App() {
  
  let winCondition=(ticket) =>{
    let sum=0;
    for(let num of ticket)
      {
        if(num==ticket[0])
          {sum++;}
      }
      return (sum==3);
    };
  

  return (
      <Lottery n={7} winCondition={winCondition} />
      // <CommentsForm/>
      // <Counter/>
      // <Joker/>
    )
};

export default App
