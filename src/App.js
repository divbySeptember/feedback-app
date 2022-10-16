import './App.css';
import Header from './component/header/header'
import Feedbacklist from './component/feedbackItem/Feedbacklist'
import {useState} from 'react'
import FeedbackData from './component/data/feedbackData';
import Stats from './component/feedbackstats/stats'
import FeedbackForm from './component/forms/feedbackform'

function App()  {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are You Sure?')) {
    setFeedback(feedback.filter((item) => item.id !== id))
    }
  }



  return (
    
    <>
    <Header  />
   
     <div className='container'>
     <FeedbackForm />
      <Stats feedback={feedback}/>
     <Feedbacklist 
     feedback={feedback} 
     handleDel={deleteFeedback} 
     />
     </div>
    </>
  );
}



export default App;
