import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
  return (
    <ExpenseItem
      title={props.item.title}
      amount={props.item.amount}
      date={props.item.date}
    />
  );
};

export default Expenses;
