import PropTypes from "prop-types";
import {handleFilter} from '../../redux/contactActions';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
    const filter = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch();
    return <label>
        Find contacts by name
        <input
            type="text"
            onChange={(e) => dispatch(handleFilter(e.currentTarget.value))}
            value={filter}
        />
    </label>
}

Filter.propTypes = {
    filter: PropTypes.string,
    handleFilter: PropTypes.func,
}

export default Filter;

// sfc
// cc