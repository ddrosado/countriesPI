import { useEffect } from 'react';
import './detail.styles.css'
import { useDispatch } from 'react-redux';
import { getDetail } from '../../redux/asyncActions';
function Detail() {

const { id } = useParams() // this hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the Route path
const dispatch = useDispatch()

const detail = useSelector(state => state.details)
const render = Array.isArray(detail.detail) ? console.log(detail) : console.log("no")

useEffect(() => {
  dispatch(getDetail(id))
}, [dispatch, id])

  return (

      <div>
        <p>Detail</p>
      </div>
  )
}

export default Detail;