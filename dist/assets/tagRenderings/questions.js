parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Yspp":[function(require,module,exports) {
module.exports={images:{render:"{image_carousel()}{image_upload()}"},reviews:{render:"{reviews()}"},minimap:{render:"{minimap(18, id): width:100%; height:8rem; border-radius:2rem; overflow: hidden; pointer-events: none;}"},phone:{question:{en:"What is the phone number of {name}?",nl:"Wat is het telefoonnummer van {name}?",fr:"Quel est le numéro de téléphone de {name} ?",de:"Was ist die Telefonnummer von {name}?",nb_NO:"Hva er telefonnummeret til {name}?",ru:"Какой номер телефона у {name}?",sv:"Vad är telefonnumret till {name}?",zh_Hant:"{name} 的電話號碼是什麼？",it:"Qual è il numero di telefono di {name}?",pt_BR:"Qual o número de telefone de {name}?",id:"Nomor telepon dari {name|?",pl:"Jaki jest numer telefonu do {name}?"},render:"<a href='tel:{phone}'>{phone}</a>",freeform:{key:"phone",type:"phone"}},osmlink:{render:"<a href='https://openstreetmap.org/{id}' target='_blank'><img src='./assets/svg/osm-logo-us.svg'/></a>",mappings:[{if:"id~=-",then:"<span class='alert'>Uploading...</alert>"}]},wikipedialink:{render:"<a href='https://wikipedia.org/wiki/{wikipedia}' target='_blank'><img src='./assets/wikipedia.svg' alt='WP'/></a>",condition:"wikipedia~*"},email:{render:"<a href='mailto:{email}' target='_blank'>{email}</a>",question:{nl:"Wat is het email-adres van {name}?",fr:"Quelle est l'adresse courriel de {name} ?",en:"What is the email address of {name}?",nb_NO:"Hva er e-postadressen til {name}?",ru:"Какой адрес электронной почты у {name}?",id:"Apa alamat surel dari {name}?",zh_Hant:"{name} 的電子郵件地址是什麼？",it:"Qual è l'indirizzo email di {name}?",de:"Was ist die Mail-Adresse von {name}?",pt_BR:"Qual o endereço de e-mail de {name}?",pl:"Jaki jest adres e-mail do {name}?",sv:"Vad är e-postadressen till {name}?"},freeform:{key:"email",type:"email"}},website:{question:{en:"What is the website of {name}?",nl:"Wat is de website van {name}?",fr:"Quel est le site web de {name} ?",gl:"Cal é a páxina web de {name}?",nb_NO:"Hva er nettsiden til {name}?",ru:"Какой сайт у {name}?",id:"Apa situs web dari {name}?",zh_Hant:"{name} 網址是什麼？",it:"Qual è il sito web di {name}?",de:"Was ist die Website von {name}?",pt_BR:"Qual o site de {name}?",pl:"Jaka jest strona internetowa {name}?",sv:"Vad är webbplatsen för {name}?"},render:"<a href='{website}' target='_blank'>{website}</a>",freeform:{key:"website",type:"url"}},"wheelchair-access":{question:{nl:"Is deze plaats rolstoeltoegankelijk?",en:"Is this place accessible with a wheelchair?"},mappings:[{if:{and:["wheelchair=designated"]},then:{nl:"Deze plaats is speciaal aangepast voor gebruikers van een rolstoel",en:"This place is specially adapated for wheelchair users"}},{if:{and:["wheelchair=yes"]},then:{nl:"Deze plaats is vlot bereikbaar met een rolstoel",en:"This place is easily reachable with a wheelchair"}},{if:{and:["wheelchair=limited"]},then:{nl:"Deze plaats is bereikbaar met een rolstoel, maar het is niet makkelijk",en:"It is possible to reach this place in a wheelchair, but it is not easy"}},{if:{and:["wheelchair=no"]},then:{nl:"Niet rolstoeltoegankelijk",en:"This place is not reachable with a wheelchair"}}]},description:{question:{nl:"Zijn er extra zaken die je niet in de bovenstaande vragen kwijt kon? Zet deze in de description<span style='font-size: small'>Herhaal geen antwoorden die je reeds gaf</span>",fr:"Y a-t-il quelque chose de pertinent que vous n'avez pas pu donner à la dernière question ? Ajoutez-le ici.<br/><span style='font-size: small'>Ne répétez pas des réponses déjà données</span>",en:"Is there still something relevant you couldn't give in the previous questions? Add it here.<br/><span style='font-size: small'>Don't repeat already stated facts</span>",nb_NO:"Er det noe mer som er relevant du ikke kunne opplyse om i tidligere svar? Legg det til her.<br/><span style='font-size: small'>Ikke gjenta fakta som allerede er nevnt</span>",ru:"Есть ли ещё что-то важное, о чём вы не смогли рассказать в предыдущих вопросах? Добавьте это здесь.<br/><span style='font-size: small'>Не повторяйте уже изложенные факты</span>",zh_Hant:"有什麼相關的資訊你無法在先前的問題回應的嗎？請加在這邊吧。<br/><span style='font-size: small'>不要重覆答覆已經知道的事情</span>",it:"C'è ancora qualche informazione importante che non è stato possibile fornire nelle domande precedenti? Aggiungila qui.<br/><span style='font-size: small'>Non ripetere informazioni già fornite</span>",de:"Gibt es noch etwas, das die vorhergehenden Fragen nicht abgedeckt haben? Hier wäre Platz dafür.<br/><span style='font-size: small'>Bitte keine bereits erhobenen Informationen.</span>",pl:"Czy jest jeszcze coś istotnego, czego nie mogłeś podać w poprzednich pytaniach? Dodaj to tutaj.<br/><span style='font-size: small'>Nie powtarzaj już podanych faktów</span>",pt_BR:"Ainda há algo de relevante que não pôde dar nas perguntas anteriores? Adicione aqui.<br/><span style='font-size: small'> Não repita fatos já declarados</span>"},render:"{description}",freeform:{key:"description"}},opening_hours:{question:{en:"What are the opening hours of {name}?",fr:"Quelles sont les horaires d'ouverture de {name} ?",de:"Was sind die Öffnungszeiten von {name}?",nl:"Wat zijn de openingsuren van {name}?",nb_NO:"Hva er åpningstidene for {name})",ru:"Какое время работы у {name}?",zh_Hant:"{name} 的開放時間是什麼？",it:"Quali sono gli orari di apertura di {name}?",pt_BR:"Qual o horário de funcionamento de {name}?",pl:"Jakie są godziny otwarcia {name}?",sv:"Vilka är öppettiderna för {name}?"},render:{de:"<h3>Öffnungszeiten</h3>{opening_hours_table(opening_hours)}",fr:"<h3>Horaires d'ouverture</h3>{opening_hours_table(opening_hours)}",en:"<h3>Opening hours</h3>{opening_hours_table(opening_hours)}",nl:"<h3>Openingsuren</h3>{opening_hours_table(opening_hours)}",nb_NO:"<h3>Åpningstider</h3>{opening_hours_table(opening_hours)}",ru:"<h3>Часы работы</h3>{opening_hours_table(opening_hours)}",zh_Hant:"<h3>開放時間</h3>{opening_hours_table(opening_hours)}",it:"<h3>Orari di apertura</h3>{opening_hours_table(opening_hours)}",pl:"<h3> Godziny otwarcia</h3>{opening_hours_table(opening_hours)}",pt_BR:"<h3>Horário de funcionamento</h3>{opening_hours_table(opening_hours)}",sv:"<h3>Öppettider</h3> {opening_hours_table(opening_hours)}"},freeform:{key:"opening_hours",type:"opening_hours"}},"payment-options":{question:{en:"Which methods of payment are accepted here?",nl:"Welke betaalmiddelen worden hier geaccepteerd?"},multiAnswer:!0,mappings:[{if:"payment:cash=yes",ifnot:"payment:cash=no",then:{en:"Cash is accepted here",nl:"Cash geld wordt hier aanvaard"}},{if:"payment:cards=yes",ifnot:"payment:cards=no",then:{en:"Payment cards are accepted here",nl:"Betalen met bankkaarten kan hier"}}]},last_edit:{"#":"Gives some metainfo about the last edit and who did edit it - rendering only",condition:"_last_edit:contributor~*",render:"<div class='subtle' style='font-size: small; margin-top: 2em; margin-bottom: 0.5em;'><a href='https://www.openStreetMap.org/changeset/{_last_edit:changeset}' target='_blank'>Last edited on {_last_edit:timestamp}</a> by <a href='https://www.openStreetMap.org/user/{_last_edit:contributor}' target='_blank'>{_last_edit:contributor}</a></div>"},all_tags:{"#":"Prints all the tags",render:"{all_tags()}"},level:{question:{nl:"Op welke verdieping bevindt dit punt zich?",en:"On what level is this feature located?",de:"In welchem Stockwerk befindet sich dieses Objekt?",zh_Hant:"此圖徽位於哪個樓層／層級？",fr:"À quel étage se situe l’élément ?",pl:"Na jakim poziomie znajduje się ta funkcja?",pt_BR:"Em que nível esse recurso está localizado?",ru:"На каком этаже находится этот объект?"},render:{en:"Located on the {level}th floor",nl:"Bevindt zich op de {level}de verdieping",de:"Befindet sich im {level}ten Stock",pt_BR:"Localizado no {level}o andar",ru:"Расположено на {level}ом этаже",zh_Hant:"位於 {level} 樓",fr:"Étage {level}",pl:"Znajduje się na {level} piętrze",sv:"Ligger på {level}:e våningen"},freeform:{key:"level",type:"float"},mappings:[{if:"location=underground",then:{en:"Located underground",nl:"Bevindt zich ondergronds",pt_BR:"Localizado no subsolo",ru:"Расположено под землей",zh_Hant:"位於地下",fr:"En sous-sol",pl:"Znajduje się pod ziemią",sv:"Ligger under jorden"},hideInAnswer:!0},{if:"level=0",then:{en:"Located on the ground floor",nl:"Bevindt zich gelijkvloers",de:"Ist im Erdgeschoss",pt_BR:"Localizado no térreo",ru:"Расположено на первом этаже",zh_Hant:"位於 1 樓",fr:"Rez-de-chaussée",pl:"Znajduje się na parterze",sv:"Ligger på bottenvåningen"}},{if:"level=",hideInAnswer:!0,then:{en:"Located on the ground floor",nl:"Bevindt zich gelijkvloers",de:"Ist im Erdgeschoss",pt_BR:"Localizado no térreo",ru:"Расположено на первом этаже",zh_Hant:"位於 1 樓",fr:"Rez-de-chaussée",pl:"Znajduje się na parterze",sv:"Ligger på bottenvåningen"}},{if:"level=1",then:{en:"Located on the first floor",nl:"Bevindt zich op de eerste verdieping",de:"Ist im ersten Stock",pt_BR:"Localizado no primeiro andar",ru:"Расположено на первом этаже",zh_Hant:"位於 2 樓",fr:"Premier étage",pl:"Znajduje się na pierwszym piętrze",sv:"Ligger på första våningen"}}]}};
},{}]},{},["Yspp"], null)
//# sourceMappingURL=assets/tagRenderings/questions.js.map