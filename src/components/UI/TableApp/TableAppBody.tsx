import type { Override } from '@/types/utils';
import type { TableAppBodyRows, TableAppHeadCells } from './TableApp.types';
import type { TableBodyProps } from '@mui/material';

import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableAppCell from './TableAppRow';

type TableAppBodyOwn = {
	body: TableAppBodyRows;
	head: TableAppHeadCells;
};
type TableAppBodyProps = Override<TableBodyProps, TableAppBodyOwn>;

const TableAppBody = ({ head, body, ...props }: TableAppBodyProps) => {
	return (
		<TableBody {...props}>
			{body.map((row) => (
				<TableRow key={row.id}>
					{head.map(({ id: idColumn }) => {
						const cell: string | undefined = row[idColumn];
						if (cell === undefined) {
							console.error(`Row with id="${row.id}" has no field "${idColumn}"`);
						}

						return <TableAppCell key={idColumn}>{cell ?? null}</TableAppCell>;
					})}
				</TableRow>
			))}
		</TableBody>
	);
};

export default TableAppBody;
