import { ListItem } from './FriendListItem.styled'
import { BsDot } from 'react-icons/bs';
import { IconContext } from "react-icons";

export const FriendListItem = ({ friends }) => {
    return (<ListItem>
    <p>{friends.isOnline ? <IconContext.Provider value={{color: "red"}}><BsDot/></IconContext.Provider> : <IconContext.Provider value={{color: "green"}}><BsDot/></IconContext.Provider>}</p>
            <img src={friends.avatar} alt="User avatar" width="48" />
        <p>{friends.name}</p>
    </ListItem>)
}

