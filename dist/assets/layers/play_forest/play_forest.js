parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"AOet":[function(require,module,exports) {
module.exports={id:"play_forest",name:{nl:"Speelbossen"},minzoom:13,source:{osmTags:{and:["playground=forest"]}},title:{render:{nl:"Speelbos"},mappings:[{if:"name~Speelbos.*",then:{nl:"{name}"}},{if:"name~*",then:{nl:"Speelbos {name}"}}]},description:{nl:"Een speelbos is een vrij toegankelijke zone in een bos"},tagRenderings:["images",{question:"Wie beheert dit gebied?",render:"Dit gebied wordt beheerd door {operator}",freeform:{key:"operator"},mappings:[{if:"operator~[aA][nN][bB]",then:"Dit gebied wordt beheerd door het <a href='https://www.natuurenbos.be/spelen'>Agentschap Natuur en Bos</a>",hideInAnswer:!0},{if:"operator=Agenstchap Natuur en Bos",then:"Dit gebied wordt beheerd door het <a href='https://www.natuurenbos.be/spelen'>Agentschap Natuur en Bos</a>"}]},{question:"Wanneer is deze speelzone toegankelijk?",mappings:[{if:"opening_hours=08:00-22:00",then:"Het hele jaar door overdag toegankelijk (van 08:00 tot 22:00)"},{if:"opening_hours=Jul-Aug 08:00-22:00",then:"Enkel in de <b>zomervakantie</b> en overdag toegankelijk (van 1 juli tot 31 augustus, van 08:00 tot 22:00"}]},{question:"Wie kan men emailen indien er problemen zijn met de speelzone?",render:"De bevoegde dienst kan bereikt worden via {email}",freeform:{key:"email",type:"email"}},{question:"Wie kan men bellen indien er problemen zijn met de speelzone?",render:"De bevoegde dienst kan getelefoneerd worden via {phone}",freeform:{key:"phone",type:"phone"}},"questions",{render:"{reviews(name, play_forest)}"}],hideFromOverview:!1,icon:{render:"./assets/layers/play_forest/icon.svg"},width:{render:"2"},iconSize:{render:"40,40,center"},color:{render:"#007055"},presets:[{title:"Speelbos",tags:["leisure=playground","playground=forest","fixme=Toegevoegd met MapComplete, geometry nog uit te tekenen"],description:"Een zone in het bos, duidelijk gemarkeerd als speelzone met de overeenkomstige borden.<br/><img src='./assets/layers/play_forest/icon.svg'/>"}],wayHandling:2};
},{}]},{},["AOet"], null)
//# sourceMappingURL=assets/layers/play_forest/play_forest.js.map