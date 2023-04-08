import { useState , useEffect} from 'react'
import Quiz from './Quiz'


import './App.css'

function App() {

  const [startQuiz, setStartQuiz] = useState(false)
  const [result , setResult] = useState([])
  

  useEffect(() =>{
    fetch('https://opentdb.com/api.php?amount=5')
      .then(res => res.json())
      .then(data => setResult(data.results))
  },[])
 
  

  function startGame(){
    setStartQuiz(true)
  }
  function shuffle(arr) {
    // iteraring over the array
    for(let i =0; i < 0; i++){
      // save the current item to a temo variabels
      let temp = arr[i]
      // generating random number in the range of the array
      let randomNum = Math.floor(Math.random() * arr.length)
      // getting item at random index and replacing the current item with random item
      arr[i] = arr[randomNum]
      // replacing random item with current item  as temp
      arr[randomNum] = temp

      
    }

    return arr
  }

 
  const quesAndAns = result.map((item,index) => {
   
    return <Quiz 
      key ={index}
      question = {item.question}
      answers = {shuffle([item.correct_answer, ...item.incorrect_answers])}
      
      
    />
  })

  

  return (
    <>
      {!startQuiz  ?  <div className='start--quiz'>
        <h1 className='title'>Quizzical</h1>
        <button onClick={startGame} className='start--btn'>Start Quiz</button> 
      </div> :
        quesAndAns
      
      }
     
    </>
  ) 
}

export default App
