export default {
	name: 'reviews',
	title: 'Reviews',
	type: 'document',
	fields: [
		{
			name: 'source',
			title: 'Source',
			options: {
				list: [
					{ title: 'Facebook', value: 'facebook' },
					{ title: 'Thumbtack', value: 'thumbtack' },
				],
			},
			type: 'string',
		},
		{
			name: 'name',
			title: 'Name',
			type: 'text',
		},
		{
			name: 'text',
			title: 'Text',
			type: 'string',
		},
		{
			name: 'date',
			title: 'Date',
			type: 'string',
		},
	],
};
