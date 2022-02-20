import ContactListItem from "../ContactListItem/ContactListItem";
import PropTypes from "prop-types";

const ContactList = () => {
    return (<ul><ContactListItem /></ul> );
}

ContactList.propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
    deleteListItem: PropTypes.func,
}
 
export default ContactList;