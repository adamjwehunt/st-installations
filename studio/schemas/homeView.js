export default {
	name: 'homeView',
	title: 'Home View',
	type: 'document',
	fields: [
		{
			name: 'headerTop',
			title: 'Header Top',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'headerBottom',
			title: 'Header Bottom',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'headerImage',
			title: 'Header Image',
			type: 'image',
		},
		{
			name: 'servicesHeader',
			title: 'Services Header',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'servicesSummary',
			title: 'Services Summary',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'facebookFeedHeader',
			title: 'Facebook Feed Header',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'ourPartnersHeader',
			title: 'Our Partners Header',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
	],
};
