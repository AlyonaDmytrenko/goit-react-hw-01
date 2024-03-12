// import clsx from 'clsx';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={css.transactionsBox}>
        <thead>
          <tr className={css.transactionsTitle}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(items => {
            return (
              <tr className={css.transactionsTable} key={items.id}>
                <td className={css.transactionsTable}>{items.type}</td>
                <td className={css.transactionsTable}>{items.amount}</td>
                <td className={css.transactionsTable}>{items.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
