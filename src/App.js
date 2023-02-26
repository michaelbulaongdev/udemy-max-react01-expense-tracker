import {expenses} from './components/lists';
import Expenses from './components/Expenses';

export default function App() {
	return (
		<div>
			<h1>Expense Tracker</h1>
			<Expenses expenses={expenses} />
		</div>
	);
}
