import PropTypes from "prop-types";
import { useSelector, useDispatch } from 'react-redux';
import { deleteListItem } from '../../redux/actions';

const ContactListItem = () => {
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch();
    return ( contacts.map(
      (contact) =>
        contact.name
          .toLowerCase()
          .includes(filter.toLowerCase()) && (
          <li key={contact.id}>
                {contact.name}: {contact.number} 
                <button onClick={() => dispatch(deleteListItem(contact.id))}>Delete</button>
          </li>
        )
    ) );
}

ContactListItem.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string
        })
    ),
    filter: PropTypes.string,
    deleteListItem: PropTypes.func,
}
 
export default ContactListItem;