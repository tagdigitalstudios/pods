/*global jQuery, _, Backbone, Mn */
import { podsFieldsInit } from './pods-mv-fields-init'; // jQuery plugin
import * as fieldClasses from './pods-mv-fields-manifest'; // All fields

const PodsUI = {
	fieldClasses: fieldClasses,
	fields      : {}
};
export default PodsUI;

/**
 * This is the workhorse that currently kicks everything off
 */
jQuery.fn.podsFieldsInit = podsFieldsInit;
jQuery( function () {
	jQuery( '.pods-form-ui-field' ).podsFieldsInit( PodsUI.fields );
} );