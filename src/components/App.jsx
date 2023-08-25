import {Profile} from './Profile/Profile';
import {Statistics} from './Statistics/Statistics';
import {FriendsList} from './FriendsList/FriendsList';
import {Transactions} from './Transactions/Transactions';

import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <div>
      <Profile items={user}/>
      <Statistics items={data}/>
      <FriendsList items={friends}/>
      <Transactions items={transactions}/>
    </div>
  );
};
