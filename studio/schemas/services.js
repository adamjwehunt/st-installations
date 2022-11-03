export default {
	name: 'services',
	title: 'Services',
	type: 'document',
	fields: [
		{
			name: 'serviceId',
			title: 'Service id (single word, no spaces, must be unique from other services)',
			type: 'string',
			validation: (Rule) => Rule.required().regex(/^[a-zA-Z0-9]+$/),
		},
		{
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'icon',
			title: 'Icon Code Ex. "fa-shield" (Icon catalog: https://fontawesome.com/search?o=r&m=free)',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'description',
			title: 'Description',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
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
