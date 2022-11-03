export default {
	name: 'servicesView',
	title: 'Services View',
	type: 'document',
	fields: [
		{
			name: 'header',
			title: 'Header',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'headerImage',
			title: 'Header Image',
			type: 'image',
		},
		{
			name: 'ourPartnersHeader',
			title: 'Our Partners Header',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
	],
};
