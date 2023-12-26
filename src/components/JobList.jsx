import {JobPosition} from './JobPosition';
import {useDispatch, useSelector} from "react-redux";
import {selectAllPosition} from "../store/positions/position-selectors";
import {addFilter} from "../store/filters/filter-actions";

const JobList = () => {
    const positions = useSelector(selectAllPosition)
    const dispatch = useDispatch()

    const handleAddFilter = (filter) => {
        dispatch(addFilter(filter))
    }
    return (
        <div className='job-list'>
            {positions.map(item => (
                <JobPosition
                    key={item.id}
                    {...item} handleAddFilter={handleAddFilter}/>
            ))}
        </div>
    )
}

export {JobList};