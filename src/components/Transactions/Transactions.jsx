import {TableItem, TableStyle} from './Transactions.styled'

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