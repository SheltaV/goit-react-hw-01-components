import { TableItem, TableStyle } from './Transactions.styled';
// import PropTypes from 'prop-types';

export const Transactions = ({ items }) => {
return <TableStyle>
    <thead>
    <tr>
      <TableItem>Type</TableItem>
      <TableItem>Amount</TableItem>
      <TableItem>Currency</TableItem>
    </tr>
  </thead>
  <tbody>
{items.map(item => (<tr key={item.id}>
<TableItem>{item.type}</TableItem>
<TableItem>{item.amount}</TableItem>
<TableItem>{item.currency}</TableItem>
    </tr>))}
    </tbody>
    </TableStyle>
}

// Transactions.PropTypes = {
//     id: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     amount: PropTypes.string.isRequired,
//     currency: PropTypes.string.isRequired
// }