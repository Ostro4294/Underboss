// ==UserScript==
// @name        The Underboss
// @namespace   Underboss
// @author      MrAnderson
// @description A bot for the game The Godfather from kabam.com
// @include     https://www.kabam.com/games/the-godfather/play*
// @include     https://www.kabam.com/*/games/the-godfather/play*
// @include     https://*godfather.*.com/platforms/kabam/game*
// @version     2.0.3
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @downloadURL https://raw.githubusercontent.com/AndreasBomholtz/Underboss/master/Underboss.user.js
// require     http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
// @resource    underbossCSS res/underboss.css
// @require     res/buildings.js
// @require     res/research.js
// @require     res/prizes.js
// @require     res/attack_units.js
// @require     res/defense_units.js
// @require     util/frame.js
// @require     util/inject.js
// @require     bot/collect.js
// @require     bot/build.js
// @require     bot/research.js
// @require     bot/attack.js
// @require     bot/bailout.js
// @require     bot/bonds.js
// @require     bot/gui.js
// @require     bot/item.js
// @require     bot/prize.js
// @require     bot/report.js
// @require     bot/train.js
// @require     bot/bot.js
// ==/UserScript==


// Adds the CSS
var css = GM_getResourceText("underbossCSS");
GM_addStyle (css);

//Insert into the right iframe
if(window.location.href.indexOf("platforms/kabam/game") != -1) {
    console.debug("Injecting Godfather Bot script");

	// Inject resources
	injectVariable("attackUnits",attackUnits);
	injectVariable("defenseUnits",defenseUnits);
	injectVariable("buildings",buildings);
	injectVariable("research",research);
	injectVariable("prizes",prizes);

	// Inject sub bots
	injectVariable("attackBot",attackBot);
	injectVariable("bondsBot",bondsBot);
	injectVariable("buildBot",buildBot);
	injectVariable("guiBot",guiBot);
	injectVariable("itemBot",itemBot);
	injectVariable("reportBot",reportBot);
	injectVariable("trainBot",trainBot);
	injectVariable("bailoutBot",bailoutBot);
	injectVariable("collectBot",collectBot);
	injectVariable("prizeBot",prizeBot);
	injectVariable("researchBot",researchBot);

	// Inject main script
	injectFunction(bot);
}
