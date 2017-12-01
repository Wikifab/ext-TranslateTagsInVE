<?php
namespace TranslateTagsInVE;

class Hooks {

	public static function start() {
		global $wgOut;

		$wgOut->addModules( [
				'ext.ttive.init'
		] );
	}
}