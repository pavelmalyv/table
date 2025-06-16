export const routesHead = [
	{
		id: 'address',
		label: 'Адрес назначения',
		sortType: 'ip' as const,
	},
	{
		id: 'gateway',
		label: 'Шлюз',
		sortType: 'ip' as const,
	},
	{
		id: 'interface',
		label: 'Интерфейс',
		sortType: 'string' as const,
	},
];

export const routes = [
	{
		id: 'uuid0',
		address: '0.0.0.0/0',
		gateway: '192.0.174.1',
		interface: 'Подключение Ethernet',
	},
	{
		id: 'uuid1',
		address: '10.1.30.0/24',
		gateway: '0.0.0.0',
		interface: 'Гостевая сеть',
	},
	{
		id: 'uuid2',
		address: '192.168.1.0/24',
		gateway: '0.0.0.0',
		interface: 'Домашняя сеть',
	},
	{
		id: 'uuid3',
		address: '193.0.174.0/24',
		gateway: '0.0.0.0',
		interface: 'Подключение Ethernet',
	},
	{
		id: 'uuid4',
		address: '193.0.175.0/25',
		gateway: '193.0.174.10',
		interface: 'Подключение Ethernet',
	},
	{
		id: 'uuid5',
		address: '193.0.175.22/32',
		gateway: '193.0.174.1',
		interface: 'Подключение Ethernet',
	},
	{
		id: 'uuid6',
		address: '193.0.170.0/24',
		gateway: '193.1.174.1',
		interface: 'Гостевая сеть',
	},
	{
		id: 'uuid7',
		address: '10.1.30.0/24',
		gateway: '193.2.174.1',
		interface: 'Домашняя сеть',
	},
];
