import type { Order } from '@/types/sort';
import { IPv4, IPv4CidrRange } from 'ip-num';

export const compareSortIp = ({ a, b, order }: { a: string; b: string; order: Order }) => {
	let result: number;

	const getParseRange = (ip: string) => {
		try {
			if (ip.includes('/')) {
				const ipv4Range = IPv4CidrRange.fromCidr(ip);
				return { start: ipv4Range.getFirst().getValue(), end: ipv4Range.getLast().getValue() };
			} else {
				const ipv4 = new IPv4(ip);
				return { start: ipv4.getValue(), end: ipv4.getValue() };
			}
		} catch (error) {
			console.error(error);
			return { start: 0, end: 0 };
		}
	};

	const { start: startA, end: endA } = getParseRange(a);
	const { start: startB, end: endB } = getParseRange(b);

	if (startA !== startB) {
		result = startA < startB ? -1 : 1;
	} else if (endA !== endB) {
		result = endA < endB ? -1 : 1;
	} else {
		result = 0;
	}

	return order === 'asc' ? result : -result;
};

export const compareSortString = ({ a, b, order }: { a: string; b: string; order: Order }) => {
	const result = a.localeCompare(b);
	return order === 'asc' ? result : -result;
};
