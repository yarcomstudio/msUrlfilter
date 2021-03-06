msUrlfilter.panel.Home = function (config) {
	config = config || {};
	Ext.apply(config, {
		baseCls: 'modx-formpanel',
		layout: 'anchor',
		/*
		 stateful: true,
		 stateId: 'msurlfilter-panel-home',
		 stateEvents: ['tabchange'],
		 getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
		 */
		hideMode: 'offsets',
		items: [{
			xtype: 'modx-tabs',
			defaults: {border: false, autoHeight: true},
			border: false,
			hideMode: 'offsets',
			items: [{
				title: _('msurlfilter_items'),
				layout: 'anchor',
				items: [{
					html: _('msurlfilter_intro_msg'),
					cls: 'panel-desc',
				}, {
					xtype: 'msurlfilter-grid-items',
					cls: 'main-wrapper',
				}]
			}]
		}]
	});
	msUrlfilter.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(msUrlfilter.panel.Home, MODx.Panel);
Ext.reg('msurlfilter-panel-home', msUrlfilter.panel.Home);
