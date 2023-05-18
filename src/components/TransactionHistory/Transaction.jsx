import PropTypes from 'prop-types';
import css from './transactionhistory.module.css';

export default function Transaction({id, type, amount, currency}) {
    return (
            <tr key={id} className={css["table-raw"]}>
                <td className={css.type}>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
   )
};

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};