import type { Override } from '@/types/utils';
import type { SortedState, TableAppHeadCells, TableAppHeadId } from './TableApp.types';
import type { Order, SortType } from '@/types/sort';

import { visuallyHidden } from '@mui/utils';
import { useCallback } from 'react';

import TableHead, { type TableHeadProps } from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Box from '@mui/material/Box';
import TableAppCell from './TableAppRow';

type TableAppHeadOwn = {
	head: TableAppHeadCells;
	sortedState: SortedState;
	setSortedState: React.Dispatch<React.SetStateAction<SortedState>>;
};

type TableAppProps = Override<TableHeadProps, TableAppHeadOwn>;

const TableAppHead = ({ head, sortedState, setSortedState, ...props }: TableAppProps) => {
	const handleSetSort = useCallback(
		(sortedBy: TableAppHeadId, order: Order, type: SortType) => {
			setSortedState({
				sortedBy,
				order,
				type,
			});
		},
		[setSortedState],
	);

	return (
		<TableHead {...props}>
			<TableRow>
				{head.map((cell) => {
					let cellBody: React.ReactNode;

					if (cell.sortType !== undefined) {
						const isCurrentSortable = cell.id === sortedState?.sortedBy;
						const isCurrentSortableAsc = sortedState?.order === 'asc';
						const sortType = cell.sortType;

						cellBody = (
							<TableAppCell
								key={cell.id}
								sortDirection={isCurrentSortable ? sortedState?.order : undefined}
							>
								<TableSortLabel
									active={isCurrentSortable}
									direction={sortedState?.order}
									onClick={() =>
										handleSetSort(cell.id, isCurrentSortableAsc ? 'desc' : 'asc', sortType)
									}
								>
									{cell.label}

									{isCurrentSortable ? (
										<Box component="span" sx={visuallyHidden}>
											{isCurrentSortableAsc
												? 'отсортированный по возрастанию'
												: 'отсортированный по убыванию'}
										</Box>
									) : null}
								</TableSortLabel>
							</TableAppCell>
						);
					} else {
						cellBody = <TableAppCell key={cell.id}>{cell.label}</TableAppCell>;
					}

					return cellBody;
				})}
			</TableRow>
		</TableHead>
	);
};

export default TableAppHead;
