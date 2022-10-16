import './App.css';
import Header from './component/header/header'
import Feedbacklist from './component/feedbackItem/Feedbacklist'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Stats from './component/feedbackstats/stats'
import FeedbackForm from './component/forms/feedbackform'
import { FeedbackProvider } from './component/FeedbackContext/FeedbackContext'

function App()  {
 
  



  return (
    
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <Stats />
                  <Feedbacklist />
                </>
              }
            ></Route>

            {/* <Route path='/about' element={<AboutPage />} /> */}
          </Routes>

          
        </div>
      </Router>
    </FeedbackProvider>
  );
}



export default App;
