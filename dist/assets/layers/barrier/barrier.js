parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"tJ1o":[function(require,module,exports) {
module.exports={id:"barrier",name:{en:"Barriers",nl:"Barrières"},description:{en:"Obstacles while cycling, such as bollards and cycle barriers",nl:"Hindernissen tijdens het fietsen, zoals paaltjes en fietshekjes"},source:{osmTags:{or:["barrier=bollard","barrier=cycle_barrier"]}},minzoom:17,title:{render:{en:"Barrier",nl:"Barrière"},mappings:[{if:"barrier=bollard",then:{en:"Bollard",nl:"Paaltje"}},{if:"barrier=cycle_barrier",then:{en:"Cycling Barrier",nl:"Fietshekjes"}}]},icon:"./assets/layers/barrier/barrier.svg",width:"5",presets:[{title:{en:"Bollard",nl:"Paaltje"},tags:["barrier=bollard"],description:{en:"A bollard in the road",nl:"Een paaltje in de weg"},preciseInput:{preferredBackground:["photo"],snapToLayer:"cycleways_and_roads",maxSnapDistance:25}},{title:{en:"Cycle barrier",nl:"Fietshekjes"},tags:["barrier=bollard"],description:{en:"Cycle barrier, slowing down cyclists",nl:"Fietshekjes, voor het afremmen van fietsers"},preciseInput:{preferredBackground:["photo"],snapToLayer:"cycleways_and_roads",maxSnapDistance:25}}],tagRenderings:[{"#":"bicycle=yes/no",question:{en:"Can a bicycle go past this barrier?",nl:"Kan een fietser langs deze barrière?"},mappings:[{if:"bicycle=yes",then:{en:"A cyclist can go past this.",nl:"Een fietser kan hier langs."}},{if:"bicycle=no",then:{en:"A cyclist can not go past this.",nl:"Een fietser kan hier niet langs."}}]},{"#":"Bollard type",question:{en:"What kind of bollard is this?",nl:"Wat voor soort paal is dit?"},condition:"barrier=bollard",mappings:[{if:"bollard=removable",then:{en:"Removable bollard",nl:"Verwijderbare paal"}},{if:"bollard=fixed",then:{en:"Fixed bollard",nl:"Vaste paal"}},{if:"bollard=foldable",then:{en:"Bollard that can be folded down",nl:"Paal die platgevouwen kan worden"}},{if:"bollard=flexible",then:{en:"Flexible bollard, usually plastic",nl:"Flexibele paal, meestal plastic"}},{if:"bollard=rising",then:{en:"Rising bollard",nl:"Verzonken poller"}}]},{"#":"Cycle barrier type",question:{en:"What kind of cycling barrier is this?",nl:"Wat voor fietshekjes zijn dit?"},condition:"barrier=cycle_barrier",mappings:[{if:"cycle_barrier:type=single",then:{en:"Single, just two barriers with a space inbetween <img src='./assets/themes/cycle_infra/Cycle_barrier_single.png' style='width:8em'>",nl:"Enkelvoudig, slechts twee hekjes met ruimte ertussen <img src='./assets/themes/cycle_infra/Cycle_barrier_single.png' style='width:8em'>"}},{if:"cycle_barrier:type=double",then:{en:"Double, two barriers behind each other <img src='./assets/themes/cycle_infra/Cycle_barrier_double.png' style='width:8em'>",nl:"Dubbel, twee hekjes achter elkaar <img src='./assets/themes/cycle_infra/Cycle_barrier_double.png' style='width:8em'>"}},{if:"cycle_barrier:type=triple",then:{en:"Triple, three barriers behind each other <img src='./assets/themes/cycle_infra/Cycle_barrier_triple.png' style='width:8em'>",nl:"Drievoudig, drie hekjes achter elkaar <img src='./assets/themes/cycle_infra/Cycle_barrier_triple.png' style='width:8em'>"}},{if:"cycle_barrier:type=squeeze",then:{en:"Squeeze gate, gap is smaller at top, than at the bottom <img src='./assets/themes/cycle_infra/Cycle_barrier_squeeze.png' style='width:8em'>",nl:"Knijppoort, ruimte is smaller aan de top, dan aan de bodem <img src='./assets/themes/cycle_infra/Cycle_barrier_squeeze.png' style='width:8em'>"}}]},{"#":"MaxWidth",render:{en:"Maximum width: {maxwidth:physical} m",nl:"Maximumbreedte: {maxwidth:physical} m"},question:{en:"How wide is the gap left over besides the barrier?",nl:"Hoe breed is de ruimte naast de barrière?"},condition:{and:["cycle_barrier:type!=double","cycle_barrier:type!=triple"]},freeform:{key:"maxwidth:physical",type:"length",helperArgs:["20","map"]}},{"#":"Space between barrier (cyclebarrier)",render:{en:"Space between barriers (along the length of the road): {width:separation} m",nl:"Ruimte tussen barrières (langs de lengte van de weg): {width:separation} m"},question:{en:"How much space is there between the barriers (along the length of the road)?",nl:"Hoeveel ruimte is er tussen de barrières (langs de lengte van de weg)?"},condition:{or:["cycle_barrier:type=double","cycle_barrier:type=triple"]},freeform:{key:"width:separation",type:"length",helperArgs:["21","map"]}},{"#":"Width of opening (cyclebarrier)",render:{en:"Width of opening: {width:opening} m",nl:"Breedte van de opening: {width:opening} m"},question:{en:"How wide is the smallest opening next to the barriers?",nl:"Hoe breed is de smalste opening naast de barrières?"},condition:{or:["cycle_barrier:type=double","cycle_barrier:type=triple"]},freeform:{key:"width:opening",type:"length",helperArgs:["21","map"]}},{"#":"Overlap (cyclebarrier)",render:{en:"Overlap: {overlap} m"},question:{en:"How much overlap do the barriers have?",nl:"Hoeveel overlappen de barrières?"},condition:{or:["cycle_barrier:type=double","cycle_barrier:type=triple"]},freeform:{key:"overlap",type:"length",helperArgs:["21","map"]}}]};
},{}]},{},["tJ1o"], null)
//# sourceMappingURL=assets/layers/barrier/barrier.js.map