parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"tg2W":[function(require,module,exports) {
module.exports={id:"bike_monitoring_station",name:{en:"Monitoring stations",nl:"Telstation",fr:"Stations de contrôle",it:"Stazioni di monitoraggio",zh_Hant:"監視站",ru:"Станции мониторинга",pt_BR:"Estações de monitoramento"},minzoom:12,source:{osmTags:{and:["man_made=monitoring_station","monitoring:bicycle=yes"]}},title:{render:{nl:"Fietstelstation",en:"Bicycle counting station",fr:"Station de comptage de vélo",it:"Contabiciclette",de:"Fahrradzählstation",zh_Hant:"單車計數站",pt_BR:"Estação de contagem de bicicletas"},mappings:[{if:"name~*",then:{en:"Bicycle counting station {name}",nl:"Fietstelstation {name}",fr:"Station de comptage de vélo {name}",it:"Contabiciclette {name}",de:"Fahrradzählstation {name}",zh_Hant:"單車計數站 {name}",pl:"Stacja liczenia rowerów {name}",pt_BR:"Estação de contagem de bicicletas {name}"}},{if:"ref~*",then:{en:"Bicycle counting station {ref}",nl:"Fietstelstation {ref}",fr:"Station de comptage de vélo {ref}",it:"Contabiciclette {ref}",de:"Fahrradzählstation {ref}",zh_Hant:"單車計數站 {ref}",pl:"Stacja liczenia rowerów {ref}",pt_BR:"Estação de contagem de bicicletas {ref}"}}]},tagRenderings:["images",{render:"<b>{live({url},{url:format},hour)}</b> cyclists last hour<br/><b>{live({url},{url:format},day)}</b> cyclists today<br/><b>{live({url},{url:format},year)}</b> cyclists this year<br/>",condition:{and:["url~*","url:format~*"]}}],icon:{render:"./assets/layers/bike_monitoring_station/monitoring_station.svg"},width:{render:"8"},iconSize:{render:"40,40,center"},color:{render:"#00f"},presets:[]};
},{}]},{},["tg2W"], null)
//# sourceMappingURL=assets/layers/bike_monitoring_station/bike_monitoring_station.js.map