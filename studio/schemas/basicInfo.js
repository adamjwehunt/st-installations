export default {
	name: 'basicInfo',
	title: 'Basic Info',
	type: 'document',
	fields: [
		{
			name: 'email',
			title: 'Email',
			type: 'string',
			validation: (Rule) => Rule.required().email(),
		},
		{
			name: 'phone',
			title: 'Phone',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'thumbtackLink',
			title: 'Thumbtack Link',
			type: 'url',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'facebookLink',
			title: 'Facebook Link',
			type: 'url',
			validation: (Rule) => Rule.required(),
		},
    {
			name: 'aboutUs',
			title: 'About Us (Footer)',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'logoLarge',
			title: 'Large Logo',
			type: 'image',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'logoSmall',
			title: 'Small Logo',
			type: 'image',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'thumbtackLogo',
			title: 'Thumbtack Logo',
			type: 'image',
			validation: (Rule) => Rule.required(),
		},
	],
};
