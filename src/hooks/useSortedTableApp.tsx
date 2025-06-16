import type {
	InitialSortedState,
	SortedState,
	TableAppBodyLabel,
	TableAppBodyRows,
} from '@/components/UI/TableApp/TableApp.types';

import { compareSortIp, compareSortString } from '@/utils/sort/sort';
import { useMemo, useState } from 'react';

interface SortedTableAppOptions {
	body: TableAppBodyRows;
	initialSorted?: InitialSortedState;
}

const useSortedTableApp = ({ body, initialSorted }: SortedTableAppOptions) => {
	const [sortedState, setSortedState] = useState<SortedState>(() => {
		if (!initialSorted) return null;

		const { sortedBy, order = 'asc', type = 'string' } = initialSorted;
		return { sortedBy, order, type };
	});

	const sortedBody = useMemo(() => {
		if (sortedState === null) {
			return body;
		}

		return [...body].sort((a, b) => {
			const { sortedBy, order, type } = sortedState;

			const aSortingValue: TableAppBodyLabel | undefined = a[sortedBy];
			if (aSortingValue === undefined) {
				console.error(`Sort error: row id "${a.id}" missing "${sortedBy}" value.`);
				return 0;
			}

			const bSortingValue: TableAppBodyLabel | undefined = b[sortedBy];
			if (bSortingValue === undefined) {
				console.error(`Sort error: row id "${b.id}" missing "${sortedBy}" value.`);
				return 0;
			}

			switch (type) {
				case 'string': {
					return compareSortString({ a: aSortingValue, b: bSortingValue, order });
				}
				case 'ip': {
					return compareSortIp({ a: aSortingValue, b: bSortingValue, order });
				}
				default: {
					console.error(`Unknown sort type: ${type}`);
					return 0;
				}
			}
		});
	}, [body, sortedState]);

	return { sortedBody, sortedState, setSortedState };
};

export default useSortedTableApp;
