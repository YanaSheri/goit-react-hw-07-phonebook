import PropTypes from "prop-types";
const ContactListItem = ({ contacts, filter, deleteListItem }) => {
    return ( contacts.map(
      (contact) =>
        contact.name
          .toLowerCase()
          .includes(filter.toLowerCase()) && (
          <li key={contact.id}>
                {contact.name}: {contact.number} 
                <button onClick={() => deleteListItem(contact.id)}>Delete</button>
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