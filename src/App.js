import {expenses} from './components/lists';
import Expenses from './components/Expenses';

export default function App() {
	return (
		<div>
			<Expenses expenses={expenses} />
		</div>
	);
}
