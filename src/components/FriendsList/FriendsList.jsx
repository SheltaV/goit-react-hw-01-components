import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { List } from './FriendsList.styled';
import PropTypes from 'prop-types';

export const FriendsList = ({items}) => {
    return (<List>
        {items.map(item => <FriendListItem friends={item} key={item.id} />)}
        </List>)
}

FriendsList.propTypes = {
        items: PropTypes.arrayOf(
            PropTypes.exact({
                id: PropTypes.number.isRequired,
                avatar: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                isOnline: PropTypes.bool
            })  
    )}