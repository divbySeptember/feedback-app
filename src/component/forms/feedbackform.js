import Card from '../shared/Card'
import {useState} from 'react'


function Feedbackform() {
    const [submit, setSubmit ] = useState('')

    const handleTextChange = (e) => {
        setSubmit(e.target.value)
    }
  return (
    <Card>
        <form>
            <h2>How woulf you rate React JS?</h2>
            <div className='input-group'>
                <input 
                onChange={handleTextChange} 
                type='text' placeholder='Write a review!' 
                value={submit} />
                <button type='submit'>Send</button>
            </div>
        </form>
    </Card>
  )
}

export default Feedbackform