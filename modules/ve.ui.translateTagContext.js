/*!
 * VisualEditor TranslateTagContextItem class.
 *
 */

/**
 * Context item for a comment.
 *
 * @class
 * @extends ve.ui.LinearContextItem
 *
 * @param {ve.ui.Context} context Context item is in
 * @param {ve.dm.Model} model Model item is related to
 * @param {Object} config Configuration options
 */
ve.ui.TranslateTagContextItem = function VeUiTranslateTagContextItem( context, model, config ) {
	// Parent constructor
	ve.ui.TranslateTagContextItem.super.call( this, context, model, config );

	// Initialization
	this.$element.addClass( 've-ui-translateTagContextItem' );
};

/* Inheritance */

OO.inheritClass( ve.ui.TranslateTagContextItem, ve.ui.LinearContextItem );
//OO.inheritClass( ve.ui.TranslateTagContextItem, ve.ui.CommentContextItem );

/* Static Properties */

ve.ui.TranslateTagContextItem.static.name = 'comment';

ve.ui.TranslateTagContextItem.static.icon = 'notice';

ve.ui.TranslateTagContextItem.static.label = OO.ui.deferMsg( 'ttive-translate-tag-informations-title' );

ve.ui.TranslateTagContextItem.static.modelClasses = [ ve.dm.CommentNode ];

ve.ui.TranslateTagContextItem.static.embeddable = false;

ve.ui.TranslateTagContextItem.static.commandName = 'comment';


/* Methods */

ve.ui.TranslateTagContextItem.static.matchFunction = function ( domElement ) {
	/*var lang = domElement.getAttribute( 'lang' ),
		dir = ( domElement.getAttribute( 'dir' ) || '' ).toLowerCase();
	return lang || dir === 'ltr' || dir === 'rtl';*/

	alert('TranslateTagContextItem.static.matchFunction');
	alert(domElement );

};

/**
 * @inheritdoc
 */
ve.ui.TranslateTagContextItem.prototype.getDescription = function () {
	return mw.msg( 'ttive-translate-tag-informations-text' );
	//return this.model.getAttribute( 'text' ).trim();
};

/* Registration */

ve.ui.contextItemFactory.register( ve.ui.TranslateTagContextItem );
