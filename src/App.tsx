import Section from '@components/UI/Section/Section';
import TableApp from './components/UI/TableApp/TableApp';

import { routes, routesHead } from './data/routes';

const App = () => {
	return (
		<Section
			title={{
				text: 'Действующие маршруты IPv4',
				variant: 'h6',
				component: 'h1',
			}}
		>
			<TableApp
				head={routesHead}
				body={routes}
				initialSorted={{ sortedBy: 'address', type: 'ip' }}
			/>
		</Section>
	);
};

export default App;
