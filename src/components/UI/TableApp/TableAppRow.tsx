import { memo } from 'react';

import TableCell, { type TableCellProps } from '@mui/material/TableCell';

const TableAppCell = memo(({ children, ...props }: TableCellProps) => {
	return <TableCell {...props}>{children}</TableCell>;
});

TableAppCell.displayName = 'TableAppCell';

export default TableAppCell;
