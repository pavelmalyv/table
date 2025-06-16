import type { Override } from '@/types/utils';
import type { InitialSortedState, TableAppBodyRows, TableAppHeadCells } from './TableApp.types';

import { memo } from 'react';

import TableContainer, { type TableContainerProps } from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableAppHead from './TableAppHead';
import TableAppBody from './TableAppBody';
import useSortedTableApp from '@/hooks/useSortedTableApp';

type TableAppOwn = {
	head: TableAppHeadCells;
	body: TableAppBodyRows;
	initialSorted?: InitialSortedState;
};

type TableAppProps = Override<TableContainerProps, TableAppOwn>;

const TableApp = memo(({ head, body, initialSorted, ...props }: TableAppProps) => {
	const { sortedBody, sortedState, setSortedState } = useSortedTableApp({ body, initialSorted });

	return (
		<TableContainer {...props}>
			<Table>
				<TableAppHead head={head} sortedState={sortedState} setSortedState={setSortedState} />
				<TableAppBody head={head} body={sortedBody} />
			</Table>
		</TableContainer>
	);
});

TableApp.displayName = 'TableApp';

export default TableApp;
