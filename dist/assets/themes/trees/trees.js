parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"gJTS":[function(require,module,exports) {
module.exports={id:"trees",title:{nl:"Bomen",en:"Trees",fr:"Arbres",it:"Alberi",ru:"Деревья",ja:"樹木",zh_Hant:"樹木",pl:"Drzewa"},shortDescription:{nl:"Breng bomen in kaart",en:"Map all the trees",fr:"Carte des arbres",it:"Mappa tutti gli alberi",ja:"すべての樹木をマッピングする",zh_Hant:"所有樹木的地圖",ru:"Карта деревьев",pl:"Sporządzić mapę wszystkich drzew"},description:{nl:"Breng bomen in kaart!",en:"Map all the trees!",fr:"Cartographions tous les arbres !",it:"Mappa tutti gli alberi!",ja:"すべての樹木をマッピングします!",zh_Hant:"繪製所有樹木！",ru:"Нанесите все деревья на карту!"},language:["nl","en","fr","it","ru","ja","zh_Hant","pl"],maintainer:"Midgard",icon:"./assets/themes/trees/logo.svg",version:"0",startLat:50.642,startLon:4.482,startZoom:8,widenFactor:.01,socialImage:"./assets/themes/trees/logo.svg",clustering:{maxZoom:18},layers:["tree_node"],roamingRenderings:[],defaultBackgroundId:"AGIV"};
},{}]},{},["gJTS"], null)
//# sourceMappingURL=assets/themes/trees/trees.js.map