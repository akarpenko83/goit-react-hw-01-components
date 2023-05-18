import PropTypes from 'prop-types';
import css from './transactionhistory.module.css';
import Transaction from './Transaction';

export default function TransactionHistory(props) {
//   console.dir(items);
    return (
        <table>
        <thead>
            <tr>
            <th className={css.headrow}>Type</th>
            <th className={css.headrow}>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {props.items.map(({ id, type, amount, currency }) => (
                <Transaction id={id} type={type} amount={amount} currency={currency} />
                ))}
        </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.exact({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
   }))
};