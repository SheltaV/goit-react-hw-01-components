import {Profile} from './Profile/Profile';
import {Statistics} from './Statistics/Statistics';
import {FriendsList} from './FriendsList/FriendsList';
import {Transactions} from './Transactions/Transactions';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
      <Statistics title="Upload stats" stats={data} />
      <FriendsList items={friends}/>
      <Transactions items={transactions}/>
    </div>
  );
};
