import type { Order, SortType } from '@/types/sort';

export type TableAppHeadId = string;
export type SortedState = { sortedBy: TableAppHeadId; order: Order; type: SortType } | null;
export type InitialSortedState = {
	sortedBy: TableAppHeadId;
	order?: Order;
	type?: SortType;
};

export type TableAppHeadCells = {
	id: TableAppHeadId;
	label: string;
	sortType?: SortType;
}[];

export type TableAppBodyLabel = string;
export type TableAppBodyRows = {
	id: string;
	[key: string]: TableAppBodyLabel;
}[];
