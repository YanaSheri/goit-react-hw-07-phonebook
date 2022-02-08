import ContactListItem from "../ContactListItem/ContactListItem";
import PropTypes from "prop-types";

const ContactList = ({contacts, filter, deleteListItem}) => {
    return (<ul><ContactListItem contacts={contacts} filter={filter} deleteListItem={ deleteListItem}/></ul> );
}

ContactList.propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
    deleteListItem: PropTypes.func,
}
 
export default ContactList;