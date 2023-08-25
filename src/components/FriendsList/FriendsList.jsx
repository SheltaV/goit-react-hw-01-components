import {List, ListItem} from './FriendsList.styled';
import {BsDot} from 'react-icons/bs';
import { IconContext } from "react-icons";
// import PropTypes from 'prop-types';

export const FriendsList = ({items}) => {
    return <List>
        {items.map(item => (<ListItem key={item.id}>
            <p>{item.isOnline ? <IconContext.Provider value={{color: "red"}}><BsDot/></IconContext.Provider> : <IconContext.Provider value={{color: "green"}}><BsDot/></IconContext.Provider>}</p>
            <img src={item.avatar} alt="User avatar" width="48" />
            <p>{item.name}</p>

        </ListItem>))}
        </List>
}

// FriendsList.PropTypes = {
//     id: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired
// }