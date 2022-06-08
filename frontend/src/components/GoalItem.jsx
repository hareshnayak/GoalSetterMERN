import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteGoal } from '../features/goals/goalSlice'

function GoalItem({ goal }) {
const navigate = useNavigate()
  const dispatch = useDispatch()
    const onClick = () =>{
        dispatch(deleteGoal(goal._id))
        navigate('/login')
    }
  return (
    <div className='goal'>
      <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
      <h2>{goal.text}</h2>
      <button onClick={onClick} className='close'>
        X
      </button>
    </div>
  )
}

export default GoalItem