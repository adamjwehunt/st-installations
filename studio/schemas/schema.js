// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

import basicInfo from './basicInfo';
import homeView from './homeView';
import services from './services';
import partners from './partners';
import servicesView from './servicesView';
import aboutView from './aboutView';
import faqsView from './faqsView';
import qAndAs from './qAndAs';
import testimonialsView from './testimonialsView';
import reviews from './reviews';
import contactUsView from './contactUsView';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: 'default',
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		basicInfo,
		homeView,
		services,
		partners,
		servicesView,
		aboutView,
		faqsView,
		qAndAs,
		testimonialsView,
		reviews,
		contactUsView,
	]),
});
