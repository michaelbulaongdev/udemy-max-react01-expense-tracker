import './Expenses.css';
import Card from './Card';
import ExpenseItem from './ExpenseItem';

export default function Expenses(props) {
	return (
		<Card className='expenses'>
			{props.expenses.map((item) => {
				return (
					<ExpenseItem
						key={item.id}
						title={item.title}
						amount={item.amount}
						date={item.date}
					/>
				);
			})}
		</Card>
	);
}
