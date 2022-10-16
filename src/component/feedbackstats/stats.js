import { useContext }  from 'react'
import FeedbackContext from '../FeedbackContext/FeedbackContext'

function Stats() {
const { feedback } = useContext(FeedbackContext)

  // NOTE: simpler average calculation
  // Calculate ratings avg
  const avg = Math.round(
    feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length
  )

  // average = average.toFixed(1).replace(/[.,]0$/, '')
  // average = Math.round(average)

  return (
    <div className="feedback-stats">
        
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(avg) ? 0 : avg}</h4>
    </div>
  )
}



export default Stats