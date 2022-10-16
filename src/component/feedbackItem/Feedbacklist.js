import FeedbackItem from './FeedbackItem'
import propTypes from 'prop-types'


function Feedbacklist({feedback, handleDel}) {
    if (!feedback || feedback.length === 0) {
        return <p> No Feedback Yet!!!</p>
    }
  return (
    <div className='feedback-list'>
        {feedback.map((item) => (
            <FeedbackItem  key={item.id} item={item} handleDel={handleDel }/>

        ))}
    </div>
  )
}


Feedbacklist.propTypes = {
   feedback: propTypes.arrayOf(
    propTypes.shape({
        id: propTypes.number.isRequired,
        text: propTypes.string.isRequired,
        rating: propTypes.number.isRequired,
    })
   )
}
export default Feedbacklist