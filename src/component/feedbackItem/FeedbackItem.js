import Card from '../shared/Card'
import propTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'

function FeedbackItem({item, handleDel}) {
  
  
    
  return (
    <Card reverse="true">
        <div className="num-display">{item.rating}</div>
        <button className="close">
          <FaTimes onClick={() => handleDel(item.id)}  color="purple" />
        </button>
        <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: propTypes.object.isRequired
}

Card.propTypes = {
  children: propTypes.node.isRequired,
  
}

export default FeedbackItem