export default {
	name: 'partners',
	title: 'Partners',
	type: 'document',
	fields: [
		{
			name: 'image',
			title: 'Image',
			type: 'image',
		},
		{
			name: 'imageAlt',
			title: 'Image Description (For accessability)',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
	],
};
