import{c as Mt,g as tc}from"./index-Cc7csuwH.js";var nc={};(function(){var n;function e(h){var m=0;return function(){return m<h.length?{done:!1,value:h[m++]}:{done:!0}}}var t=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,m,y){return h==Array.prototype||h==Object.prototype||(h[m]=y.value),h};function r(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mt=="object"&&Mt];for(var m=0;m<h.length;++m){var y=h[m];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=r(this);function a(h,m){if(m)e:{var y=s;h=h.split(".");for(var $=0;$<h.length-1;$++){var R=h[$];if(!(R in y))break e;y=y[R]}h=h[h.length-1],$=y[h],m=m($),m!=$&&m!=null&&t(y,h,{configurable:!0,writable:!0,value:m})}}a("Symbol",function(h){function m(j){if(this instanceof m)throw new TypeError("Symbol is not a constructor");return new y($+(j||"")+"_"+R++,j)}function y(j,L){this.g=j,t(this,"description",{configurable:!0,writable:!0,value:L})}if(h)return h;y.prototype.toString=function(){return this.g};var $="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",R=0;return m}),a("Symbol.iterator",function(h){if(h)return h;h=Symbol("Symbol.iterator");for(var m="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),y=0;y<m.length;y++){var $=s[m[y]];typeof $=="function"&&typeof $.prototype[h]!="function"&&t($.prototype,h,{configurable:!0,writable:!0,value:function(){return i(e(this))}})}return h});function i(h){return h={next:h},h[Symbol.iterator]=function(){return this},h}function o(h){var m=typeof Symbol<"u"&&Symbol.iterator&&h[Symbol.iterator];return m?m.call(h):{next:e(h)}}function u(h){if(!(h instanceof Array)){h=o(h);for(var m,y=[];!(m=h.next()).done;)y.push(m.value);h=y}return h}var c=typeof Object.create=="function"?Object.create:function(h){function m(){}return m.prototype=h,new m},f;if(typeof Object.setPrototypeOf=="function")f=Object.setPrototypeOf;else{var p;e:{var b={a:!0},v={};try{v.__proto__=b,p=v.a;break e}catch{}p=!1}f=p?function(h,m){if(h.__proto__=m,h.__proto__!==m)throw new TypeError(h+" is not extensible");return h}:null}var S=f;function A(h,m){if(h.prototype=c(m.prototype),h.prototype.constructor=h,S)S(h,m);else for(var y in m)if(y!="prototype")if(Object.defineProperties){var $=Object.getOwnPropertyDescriptor(m,y);$&&Object.defineProperty(h,y,$)}else h[y]=m[y];h.ea=m.prototype}function _(){this.l=!1,this.i=null,this.h=void 0,this.g=1,this.s=this.m=0,this.j=null}function C(h){if(h.l)throw new TypeError("Generator is already running");h.l=!0}_.prototype.o=function(h){this.h=h};function K(h,m){h.j={U:m,V:!0},h.g=h.m||h.s}_.prototype.return=function(h){this.j={return:h},this.g=this.s};function U(h,m,y){return h.g=y,{value:m}}function B(h){this.g=new _,this.h=h}function W(h,m){C(h.g);var y=h.g.i;return y?G(h,"return"in y?y.return:function($){return{value:$,done:!0}},m,h.g.return):(h.g.return(m),Q(h))}function G(h,m,y,$){try{var R=m.call(h.g.i,y);if(!(R instanceof Object))throw new TypeError("Iterator result "+R+" is not an object");if(!R.done)return h.g.l=!1,R;var j=R.value}catch(L){return h.g.i=null,K(h.g,L),Q(h)}return h.g.i=null,$.call(h.g,j),Q(h)}function Q(h){for(;h.g.g;)try{var m=h.h(h.g);if(m)return h.g.l=!1,{value:m.value,done:!1}}catch(y){h.g.h=void 0,K(h.g,y)}if(h.g.l=!1,h.g.j){if(m=h.g.j,h.g.j=null,m.V)throw m.U;return{value:m.return,done:!0}}return{value:void 0,done:!0}}function re(h){this.next=function(m){return C(h.g),h.g.i?m=G(h,h.g.i.next,m,h.g.o):(h.g.o(m),m=Q(h)),m},this.throw=function(m){return C(h.g),h.g.i?m=G(h,h.g.i.throw,m,h.g.o):(K(h.g,m),m=Q(h)),m},this.return=function(m){return W(h,m)},this[Symbol.iterator]=function(){return this}}function q(h,m){return m=new re(new B(m)),S&&h.prototype&&S(m,h.prototype),m}function te(h,m){h instanceof String&&(h+="");var y=0,$=!1,R={next:function(){if(!$&&y<h.length){var j=y++;return{value:m(j,h[j]),done:!1}}return $=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}var ue=typeof Object.assign=="function"?Object.assign:function(h,m){for(var y=1;y<arguments.length;y++){var $=arguments[y];if($)for(var R in $)Object.prototype.hasOwnProperty.call($,R)&&(h[R]=$[R])}return h};a("Object.assign",function(h){return h||ue}),a("Promise",function(h){function m(L){this.h=0,this.i=void 0,this.g=[],this.o=!1;var z=this.j();try{L(z.resolve,z.reject)}catch(X){z.reject(X)}}function y(){this.g=null}function $(L){return L instanceof m?L:new m(function(z){z(L)})}if(h)return h;y.prototype.h=function(L){if(this.g==null){this.g=[];var z=this;this.i(function(){z.l()})}this.g.push(L)};var R=s.setTimeout;y.prototype.i=function(L){R(L,0)},y.prototype.l=function(){for(;this.g&&this.g.length;){var L=this.g;this.g=[];for(var z=0;z<L.length;++z){var X=L[z];L[z]=null;try{X()}catch(ne){this.j(ne)}}}this.g=null},y.prototype.j=function(L){this.i(function(){throw L})},m.prototype.j=function(){function L(ne){return function(oe){X||(X=!0,ne.call(z,oe))}}var z=this,X=!1;return{resolve:L(this.C),reject:L(this.l)}},m.prototype.C=function(L){if(L===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(L instanceof m)this.F(L);else{e:switch(typeof L){case"object":var z=L!=null;break e;case"function":z=!0;break e;default:z=!1}z?this.u(L):this.m(L)}},m.prototype.u=function(L){var z=void 0;try{z=L.then}catch(X){this.l(X);return}typeof z=="function"?this.G(z,L):this.m(L)},m.prototype.l=function(L){this.s(2,L)},m.prototype.m=function(L){this.s(1,L)},m.prototype.s=function(L,z){if(this.h!=0)throw Error("Cannot settle("+L+", "+z+"): Promise already settled in state"+this.h);this.h=L,this.i=z,this.h===2&&this.D(),this.A()},m.prototype.D=function(){var L=this;R(function(){if(L.B()){var z=s.console;typeof z<"u"&&z.error(L.i)}},1)},m.prototype.B=function(){if(this.o)return!1;var L=s.CustomEvent,z=s.Event,X=s.dispatchEvent;return typeof X>"u"?!0:(typeof L=="function"?L=new L("unhandledrejection",{cancelable:!0}):typeof z=="function"?L=new z("unhandledrejection",{cancelable:!0}):(L=s.document.createEvent("CustomEvent"),L.initCustomEvent("unhandledrejection",!1,!0,L)),L.promise=this,L.reason=this.i,X(L))},m.prototype.A=function(){if(this.g!=null){for(var L=0;L<this.g.length;++L)j.h(this.g[L]);this.g=null}};var j=new y;return m.prototype.F=function(L){var z=this.j();L.J(z.resolve,z.reject)},m.prototype.G=function(L,z){var X=this.j();try{L.call(z,X.resolve,X.reject)}catch(ne){X.reject(ne)}},m.prototype.then=function(L,z){function X(de,le){return typeof de=="function"?function(se){try{ne(de(se))}catch(l){oe(l)}}:le}var ne,oe,we=new m(function(de,le){ne=de,oe=le});return this.J(X(L,ne),X(z,oe)),we},m.prototype.catch=function(L){return this.then(void 0,L)},m.prototype.J=function(L,z){function X(){switch(ne.h){case 1:L(ne.i);break;case 2:z(ne.i);break;default:throw Error("Unexpected state: "+ne.h)}}var ne=this;this.g==null?j.h(X):this.g.push(X),this.o=!0},m.resolve=$,m.reject=function(L){return new m(function(z,X){X(L)})},m.race=function(L){return new m(function(z,X){for(var ne=o(L),oe=ne.next();!oe.done;oe=ne.next())$(oe.value).J(z,X)})},m.all=function(L){var z=o(L),X=z.next();return X.done?$([]):new m(function(ne,oe){function we(se){return function(l){de[se]=l,le--,le==0&&ne(de)}}var de=[],le=0;do de.push(void 0),le++,$(X.value).J(we(de.length-1),oe),X=z.next();while(!X.done)})},m}),a("Object.is",function(h){return h||function(m,y){return m===y?m!==0||1/m===1/y:m!==m&&y!==y}}),a("Array.prototype.includes",function(h){return h||function(m,y){var $=this;$ instanceof String&&($=String($));var R=$.length;for(y=y||0,0>y&&(y=Math.max(y+R,0));y<R;y++){var j=$[y];if(j===m||Object.is(j,m))return!0}return!1}}),a("String.prototype.includes",function(h){return h||function(m,y){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(m instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(m,y||0)!==-1}}),a("Array.prototype.keys",function(h){return h||function(){return te(this,function(m){return m})}});var Ne=this||self;function ie(h,m){h=h.split(".");var y=Ne;h[0]in y||typeof y.execScript>"u"||y.execScript("var "+h[0]);for(var $;h.length&&($=h.shift());)h.length||m===void 0?y[$]&&y[$]!==Object.prototype[$]?y=y[$]:y=y[$]={}:y[$]=m}function ke(h,m){return m=String.fromCharCode.apply(null,m),h==null?m:h+m}var Be,He=typeof TextDecoder<"u",Ve,xt=typeof TextEncoder<"u";function mt(h){if(xt)h=(Ve||(Ve=new TextEncoder)).encode(h);else{var m=void 0;m=m===void 0?!1:m;for(var y=0,$=new Uint8Array(3*h.length),R=0;R<h.length;R++){var j=h.charCodeAt(R);if(128>j)$[y++]=j;else{if(2048>j)$[y++]=j>>6|192;else{if(55296<=j&&57343>=j){if(56319>=j&&R<h.length){var L=h.charCodeAt(++R);if(56320<=L&&57343>=L){j=1024*(j-55296)+L-56320+65536,$[y++]=j>>18|240,$[y++]=j>>12&63|128,$[y++]=j>>6&63|128,$[y++]=j&63|128;continue}else R--}if(m)throw Error("Found an unpaired surrogate");j=65533}$[y++]=j>>12|224,$[y++]=j>>6&63|128}$[y++]=j&63|128}}h=$.subarray(0,y)}return h}var En={},Ft=null;function ts(h,m){m===void 0&&(m=0),rs(),m=En[m];for(var y=Array(Math.floor(h.length/3)),$=m[64]||"",R=0,j=0;R<h.length-2;R+=3){var L=h[R],z=h[R+1],X=h[R+2],ne=m[L>>2];L=m[(L&3)<<4|z>>4],z=m[(z&15)<<2|X>>6],X=m[X&63],y[j++]=ne+L+z+X}switch(ne=0,X=$,h.length-R){case 2:ne=h[R+1],X=m[(ne&15)<<2]||$;case 1:h=h[R],y[j]=m[h>>2]+m[(h&3)<<4|ne>>4]+X+$}return y.join("")}function br(h){var m=h.length,y=3*m/4;y%3?y=Math.floor(y):"=.".indexOf(h[m-1])!=-1&&(y="=.".indexOf(h[m-2])!=-1?y-2:y-1);var $=new Uint8Array(y),R=0;return ns(h,function(j){$[R++]=j}),$.subarray(0,R)}function ns(h,m){function y(X){for(;$<h.length;){var ne=h.charAt($++),oe=Ft[ne];if(oe!=null)return oe;if(!/^[\s\xa0]*$/.test(ne))throw Error("Unknown base64 encoding at char: "+ne)}return X}rs();for(var $=0;;){var R=y(-1),j=y(0),L=y(64),z=y(64);if(z===64&&R===-1)break;m(R<<2|j>>4),L!=64&&(m(j<<4&240|L>>2),z!=64&&m(L<<6&192|z))}}function rs(){if(!Ft){Ft={};for(var h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),m=["+/=","+/","-_=","-_.","-_"],y=0;5>y;y++){var $=h.concat(m[y].split(""));En[y]=$;for(var R=0;R<$.length;R++){var j=$[R];Ft[j]===void 0&&(Ft[j]=R)}}}}var Ct=typeof Uint8Array.prototype.slice=="function",wr;function Zn(h,m,y){return m===y?wr||(wr=new Uint8Array(0)):Ct?h.slice(m,y):new Uint8Array(h.subarray(m,y))}var gt=0,yt=0;function Ce(h,m){m=m===void 0?{}:m,m=m.v===void 0?!1:m.v,this.h=null,this.g=this.j=this.l=0,this.m=!1,this.v=m,h&&on(this,h)}function on(h,m){m=m.constructor===Uint8Array?m:m.constructor===ArrayBuffer?new Uint8Array(m):m.constructor===Array?new Uint8Array(m):m.constructor===String?br(m):m instanceof Uint8Array?new Uint8Array(m.buffer,m.byteOffset,m.byteLength):new Uint8Array(0),h.h=m,h.l=0,h.j=h.h.length,h.g=h.l}Ce.prototype.reset=function(){this.g=this.l};function xn(h){for(var m=128,y=0,$=0,R=0;4>R&&128<=m;R++)m=h.h[h.g++],y|=(m&127)<<7*R;if(128<=m&&(m=h.h[h.g++],y|=(m&127)<<28,$|=(m&127)>>4),128<=m)for(R=0;5>R&&128<=m;R++)m=h.h[h.g++],$|=(m&127)<<7*R+3;if(128>m)return h=y>>>0,m=$>>>0,($=m&2147483648)&&(h=~h+1>>>0,m=~m>>>0,h==0&&(m=m+1>>>0)),h=4294967296*m+(h>>>0),$?-h:h;h.m=!0}Ce.prototype.i=function(){var h=this.h,m=h[this.g],y=m&127;return 128>m?(this.g+=1,y):(m=h[this.g+1],y|=(m&127)<<7,128>m?(this.g+=2,y):(m=h[this.g+2],y|=(m&127)<<14,128>m?(this.g+=3,y):(m=h[this.g+3],y|=(m&127)<<21,128>m?(this.g+=4,y):(m=h[this.g+4],y|=(m&15)<<28,128>m?(this.g+=5,y>>>0):(this.g+=5,128<=h[this.g++]&&128<=h[this.g++]&&128<=h[this.g++]&&128<=h[this.g++]&&this.g++,y)))))},Ce.prototype.o=function(){var h=this.h[this.g],m=this.h[this.g+1],y=this.h[this.g+2],$=this.h[this.g+3];return this.g+=4,y=(h<<0|m<<8|y<<16|$<<24)>>>0,h=2*(y>>31)+1,m=y>>>23&255,y&=8388607,m==255?y?NaN:1/0*h:m==0?h*Math.pow(2,-149)*y:h*Math.pow(2,m-150)*(y+Math.pow(2,23))};var Qn=[];function bt(){this.g=new Uint8Array(64),this.h=0}bt.prototype.push=function(h){if(!(this.h+1<this.g.length)){var m=this.g;this.g=new Uint8Array(Math.ceil(1+2*this.g.length)),this.g.set(m)}this.g[this.h++]=h},bt.prototype.length=function(){return this.h},bt.prototype.end=function(){var h=this.g,m=this.h;return this.h=0,Zn(h,0,m)};function kt(h,m){for(;127<m;)h.push(m&127|128),m>>>=7;h.push(m)}function un(h){var m={},y=m.N===void 0?!1:m.N;this.o={v:m.v===void 0?!1:m.v},this.N=y,m=this.o,Qn.length?(y=Qn.pop(),m&&(y.v=m.v),h&&on(y,h),h=y):h=new Ce(h,m),this.g=h,this.m=this.g.g,this.h=this.i=this.l=-1,this.j=!1}un.prototype.reset=function(){this.g.reset(),this.h=this.l=-1};function nt(h){var m=h.g;if((m=m.g==m.j)||(m=h.j)||(m=h.g,m=m.m||0>m.g||m.g>m.j),m)return!1;h.m=h.g.g,m=h.g.i();var y=m&7;return y!=0&&y!=5&&y!=1&&y!=2&&y!=3&&y!=4?(h.j=!0,!1):(h.i=m,h.l=m>>>3,h.h=y,!0)}function _t(h){switch(h.h){case 0:if(h.h!=0)_t(h);else{for(h=h.g;h.h[h.g]&128;)h.g++;h.g++}break;case 1:h.h!=1?_t(h):(h=h.g,h.g+=8);break;case 2:if(h.h!=2)_t(h);else{var m=h.g.i();h=h.g,h.g+=m}break;case 5:h.h!=5?_t(h):(h=h.g,h.g+=4);break;case 3:m=h.l;do{if(!nt(h)){h.j=!0;break}if(h.h==4){h.l!=m&&(h.j=!0);break}_t(h)}while(!0);break;default:h.j=!0}}function er(h,m,y){var $=h.g.j,R=h.g.i(),j=h.g.g+R;if(h.g.j=j,y(m,h),y=j-h.g.g,y!==0)throw Error("Message parsing ended unexpectedly. Expected to read "+R+" bytes, instead read "+(R-y)+" bytes, either the data ended unexpectedly or the message misreported its own length");return h.g.g=j,h.g.j=$,m}function je(h){return h.g.o()}function kn(h){var m=h.g.i();h=h.g;var y=h.g;h.g+=m,h=h.h;var $;if(He)($=Be)||($=Be=new TextDecoder("utf-8",{fatal:!1})),$=$.decode(h.subarray(y,y+m));else{m=y+m;for(var R=[],j=null,L,z,X;y<m;)L=h[y++],128>L?R.push(L):224>L?y>=m?R.push(65533):(z=h[y++],194>L||(z&192)!==128?(y--,R.push(65533)):R.push((L&31)<<6|z&63)):240>L?y>=m-1?R.push(65533):(z=h[y++],(z&192)!==128||L===224&&160>z||L===237&&160<=z||(($=h[y++])&192)!==128?(y--,R.push(65533)):R.push((L&15)<<12|(z&63)<<6|$&63)):244>=L?y>=m-2?R.push(65533):(z=h[y++],(z&192)!==128||(L<<28)+(z-144)>>30||(($=h[y++])&192)!==128||((X=h[y++])&192)!==128?(y--,R.push(65533)):(L=(L&7)<<18|(z&63)<<12|($&63)<<6|X&63,L-=65536,R.push((L>>10&1023)+55296,(L&1023)+56320))):R.push(65533),8192<=R.length&&(j=ke(j,R),R.length=0);$=ke(j,R)}return $}function vr(h,m,y){var $=h.g.i();for($=h.g.g+$;h.g.g<$;)y.push(m.call(h.g))}function Nr(h,m){h.h==2?vr(h,Ce.prototype.o,m):m.push(je(h))}function Ut(){this.h=[],this.i=0,this.g=new bt}function wt(h,m){m.length!==0&&(h.h.push(m),h.i+=m.length)}function _n(h){var m=h.i+h.g.length();if(m===0)return new Uint8Array(0);m=new Uint8Array(m);for(var y=h.h,$=y.length,R=0,j=0;j<$;j++){var L=y[j];L.length!==0&&(m.set(L,R),R+=L.length)}return y=h.g,$=y.h,$!==0&&(m.set(y.g.subarray(0,$),R),y.h=0),h.h=[m],m}function rt(h,m,y){if(y!=null){kt(h.g,8*m+5),h=h.g;var $=y;$=(y=0>$?1:0)?-$:$,$===0?0<1/$?gt=yt=0:(yt=0,gt=2147483648):isNaN($)?(yt=0,gt=2147483647):34028234663852886e22<$?(yt=0,gt=(y<<31|2139095040)>>>0):11754943508222875e-54>$?($=Math.round($/Math.pow(2,-149)),yt=0,gt=(y<<31|$)>>>0):(m=Math.floor(Math.log($)/Math.LN2),$*=Math.pow(2,-m),$=Math.round(8388608*$),16777216<=$&&++m,yt=0,gt=(y<<31|m+127<<23|$&8388607)>>>0),y=gt,h.push(y>>>0&255),h.push(y>>>8&255),h.push(y>>>16&255),h.push(y>>>24&255)}}var $n=typeof Uint8Array=="function";function Tr(h,m,y){if(h!=null)return typeof h=="object"?$n&&h instanceof Uint8Array?y(h):Sr(h,m,y):m(h)}function Sr(h,m,y){if(Array.isArray(h)){for(var $=Array(h.length),R=0;R<h.length;R++)$[R]=Tr(h[R],m,y);return Array.isArray(h)&&h.W&&qe($),$}$={};for(R in h)$[R]=Tr(h[R],m,y);return $}function ss(h){return typeof h=="number"?isFinite(h)?h:String(h):h}var as={W:{value:!0,configurable:!0}};function qe(h){return Array.isArray(h)&&!Object.isFrozen(h)&&Object.defineProperties(h,as),h}var Re;function Le(h,m,y){var $=Re;Re=null,h||(h=$),$=this.constructor.ca,h||(h=$?[$]:[]),this.j=$?0:-1,this.m=this.g=null,this.h=h;e:{if($=this.h.length,h=$-1,$&&($=this.h[h],!($===null||typeof $!="object"||Array.isArray($)||$n&&$ instanceof Uint8Array))){this.l=h-this.j,this.i=$;break e}m!==void 0&&-1<m?(this.l=Math.max(m,h+1-this.j),this.i=null):this.l=Number.MAX_VALUE}if(y)for(m=0;m<y.length;m++)h=y[m],h<this.l?(h+=this.j,($=this.h[h])?qe($):this.h[h]=Ze):(An(this),($=this.i[h])?qe($):this.i[h]=Ze)}var Ze=Object.freeze(qe([]));function An(h){var m=h.l+h.j;h.h[m]||(h.i=h.h[m]={})}function xe(h,m,y){return m===-1?null:y!==void 0&&y||m>=h.l?h.i?h.i[m]:void 0:h.h[m+h.j]}function In(h,m){var y=y===void 0?!1:y,$=xe(h,m,y);return $==null&&($=Ze),$===Ze&&($=qe([]),ge(h,m,$,y)),$}function Er(h){var m=In(h,3);if(h.m||(h.m={}),!h.m[3]){for(var y=0;y<m.length;y++)m[y]=+m[y];h.m[3]=!0}return m}function Rt(h,m,y){return h=xe(h,m),h??y}function ct(h,m,y){return h=xe(h,m),h=h==null?h:+h,h??(y===void 0?0:y)}function ge(h,m,y,$){$!==void 0&&$||m>=h.l?(An(h),h.i[m]=y):h.h[m+h.j]=y}function is(h,m,y){if(y===-1)return null;if(h.g||(h.g={}),!h.g[y]){var $=xe(h,y,!1);$&&(h.g[y]=new m($))}return h.g[y]}function tr(h,m){h.g||(h.g={});var y=h.g[1];if(!y){var $=In(h,1);y=[];for(var R=0;R<$.length;R++)y[R]=new m($[R]);h.g[1]=y}return y}function On(h,m,y){var $=$===void 0?!1:$;h.g||(h.g={});var R=y&&Lt(y);h.g[m]=y,ge(h,m,R,$)}function Dn(h,m,y,$){var R=tr(h,y);m=m||new y,h=In(h,1),$!=null?(R.splice($,0,m),h.splice($,0,Lt(m))):(R.push(m),h.push(Lt(m)))}Le.prototype.toJSON=function(){var h=Lt(this);return Sr(h,ss,ts)};function Lt(h,m){if(h.g)for(var y in h.g){var $=h.g[y];if(Array.isArray($))for(var R=0;R<$.length;R++)$[R]&&Lt($[R]);else $&&Lt($)}return h.h}Le.prototype.toString=function(){return Lt(this).toString()};function nr(h,m){if(h=h.o){wt(m,m.g.end());for(var y=0;y<h.length;y++)wt(m,h[y])}}function lt(h,m){if(m.h==4)return!1;var y=m.m;return _t(m),m.N||(m=Zn(m.g.h,y,m.g.g),(y=h.o)?y.push(m):h.o=[m]),!0}function Pt(h){Le.call(this,h,-1,Ys)}A(Pt,Le),Pt.prototype.getRows=function(){return xe(this,1)},Pt.prototype.getCols=function(){return xe(this,2)},Pt.prototype.getPackedDataList=function(){return Er(this)},Pt.prototype.getLayout=function(){return Rt(this,4,0)};function os(h,m){for(;nt(m);)switch(m.i){case 8:var y=m.g.i();ge(h,1,y);break;case 16:y=m.g.i(),ge(h,2,y);break;case 29:case 26:Nr(m,h.getPackedDataList());break;case 32:y=xn(m.g),ge(h,4,y);break;default:if(!lt(h,m))return h}return h}var Ys=[3];function Ue(h,m){var y=void 0;return new(y||(y=Promise))(function($,R){function j(X){try{z(m.next(X))}catch(ne){R(ne)}}function L(X){try{z(m.throw(X))}catch(ne){R(ne)}}function z(X){X.done?$(X.value):new y(function(ne){ne(X.value)}).then(j,L)}z((m=m.apply(h,void 0)).next())})}function Bt(h){Le.call(this,h)}A(Bt,Le);function us(h,m){for(;nt(m);)switch(m.i){case 8:var y=m.g.i();ge(h,1,y);break;case 21:y=je(m),ge(h,2,y);break;case 26:y=kn(m),ge(h,3,y);break;case 34:y=kn(m),ge(h,4,y);break;default:if(!lt(h,m))return h}return h}function rr(h){Le.call(this,h,-1,cs)}A(rr,Le),rr.prototype.addClassification=function(h,m){return Dn(this,h,Bt,m),this};var cs=[1];function cn(h){Le.call(this,h)}A(cn,Le);function Js(h,m){for(;nt(m);)switch(m.i){case 13:var y=je(m);ge(h,1,y);break;case 21:y=je(m),ge(h,2,y);break;case 29:y=je(m),ge(h,3,y);break;case 37:y=je(m),ge(h,4,y);break;case 45:y=je(m),ge(h,5,y);break;default:if(!lt(h,m))return h}return h}function ls(h){Le.call(this,h,-1,fs)}A(ls,Le);function hs(h){e:{var m=new ls;for(h=new un(h);nt(h);)switch(h.i){case 10:var y=er(h,new cn,Js);Dn(m,y,cn,void 0);break;default:if(!lt(m,h))break e}}return m}var fs=[1];function sr(h){Le.call(this,h)}A(sr,Le);function Wt(h){Le.call(this,h,-1,Qs)}A(Wt,Le),Wt.prototype.getVertexType=function(){return Rt(this,1,0)},Wt.prototype.getPrimitiveType=function(){return Rt(this,2,0)},Wt.prototype.getVertexBufferList=function(){return Er(this)},Wt.prototype.getIndexBufferList=function(){return In(this,4)};function Zs(h,m){for(;nt(m);)switch(m.i){case 8:var y=xn(m.g);ge(h,1,y);break;case 16:y=xn(m.g),ge(h,2,y);break;case 29:case 26:Nr(m,h.getVertexBufferList());break;case 32:case 34:y=m;var $=h.getIndexBufferList();y.h==2?vr(y,Ce.prototype.i,$):$.push(y.g.i());break;default:if(!lt(h,m))return h}return h}var Qs=[3,4];function ar(h){Le.call(this,h)}A(ar,Le),ar.prototype.getMesh=function(){return is(this,Wt,1)},ar.prototype.getPoseTransformMatrix=function(){return is(this,Pt,2)};function ps(h){e:{var m=new ar;for(h=new un(h);nt(h);)switch(h.i){case 10:var y=er(h,new Wt,Zs);On(m,1,y);break;case 18:y=er(h,new Pt,os),On(m,2,y);break;default:if(!lt(m,h))break e}}return m}function xr(h,m,y){if(y=h.createShader(y===0?h.VERTEX_SHADER:h.FRAGMENT_SHADER),h.shaderSource(y,m),h.compileShader(y),!h.getShaderParameter(y,h.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+h.getShaderInfoLog(y));return y}function kr(h){return tr(h,Bt).map(function(m){return{index:Rt(m,1,0),Y:ct(m,2),label:xe(m,3)!=null?Rt(m,3,""):void 0,displayName:xe(m,4)!=null?Rt(m,4,""):void 0}})}function _r(h){return{x:ct(h,1),y:ct(h,2),z:ct(h,3),visibility:xe(h,4)!=null?ct(h,4):void 0}}function Fn(h,m){this.h=h,this.g=m,this.l=0}function ln(h,m,y){return ht(h,m),typeof h.g.canvas.transferToImageBitmap=="function"?Promise.resolve(h.g.canvas.transferToImageBitmap()):y?Promise.resolve(h.g.canvas):typeof createImageBitmap=="function"?createImageBitmap(h.g.canvas):(h.i===void 0&&(h.i=document.createElement("canvas")),new Promise(function($){h.i.height=h.g.canvas.height,h.i.width=h.g.canvas.width,h.i.getContext("2d",{}).drawImage(h.g.canvas,0,0,h.g.canvas.width,h.g.canvas.height),$(h.i)}))}function ht(h,m){var y=h.g;if(h.m===void 0){var $=xr(y,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),R=xr(y,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),j=y.createProgram();if(y.attachShader(j,$),y.attachShader(j,R),y.linkProgram(j),!y.getProgramParameter(j,y.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+y.getProgramInfoLog(j));$=h.m=j,y.useProgram($),R=y.getUniformLocation($,"sampler0"),h.j={I:y.getAttribLocation($,"aVertex"),H:y.getAttribLocation($,"aTex"),da:R},h.s=y.createBuffer(),y.bindBuffer(y.ARRAY_BUFFER,h.s),y.enableVertexAttribArray(h.j.I),y.vertexAttribPointer(h.j.I,2,y.FLOAT,!1,0,0),y.bufferData(y.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),y.STATIC_DRAW),y.bindBuffer(y.ARRAY_BUFFER,null),h.o=y.createBuffer(),y.bindBuffer(y.ARRAY_BUFFER,h.o),y.enableVertexAttribArray(h.j.H),y.vertexAttribPointer(h.j.H,2,y.FLOAT,!1,0,0),y.bufferData(y.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),y.STATIC_DRAW),y.bindBuffer(y.ARRAY_BUFFER,null),y.uniform1i(R,0)}$=h.j,y.useProgram(h.m),y.canvas.width=m.width,y.canvas.height=m.height,y.viewport(0,0,m.width,m.height),y.activeTexture(y.TEXTURE0),h.h.bindTexture2d(m.glName),y.enableVertexAttribArray($.I),y.bindBuffer(y.ARRAY_BUFFER,h.s),y.vertexAttribPointer($.I,2,y.FLOAT,!1,0,0),y.enableVertexAttribArray($.H),y.bindBuffer(y.ARRAY_BUFFER,h.o),y.vertexAttribPointer($.H,2,y.FLOAT,!1,0,0),y.bindFramebuffer(y.DRAW_FRAMEBUFFER?y.DRAW_FRAMEBUFFER:y.FRAMEBUFFER,null),y.clearColor(0,0,0,0),y.clear(y.COLOR_BUFFER_BIT),y.colorMask(!0,!0,!0,!0),y.drawArrays(y.TRIANGLE_FAN,0,4),y.disableVertexAttribArray($.I),y.disableVertexAttribArray($.H),y.bindBuffer(y.ARRAY_BUFFER,null),h.h.bindTexture2d(0)}function ea(h){this.g=h}var ta=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function ds(h,m){return m+h}function $r(h,m){window[h]=m}function st(h){var m=document.createElement("script");return m.setAttribute("src",h),m.setAttribute("crossorigin","anonymous"),new Promise(function(y){m.addEventListener("load",function(){y()},!1),m.addEventListener("error",function(){y()},!1),document.body.appendChild(m)})}function ms(){return Ue(this,function h(){return q(h,function(m){switch(m.g){case 1:return m.m=2,U(m,WebAssembly.instantiate(ta),4);case 4:m.g=3,m.m=0;break;case 2:return m.m=0,m.j=null,m.return(!1);case 3:return m.return(!0)}})})}function Gt(h){if(this.g=h,this.listeners={},this.j={},this.F={},this.m={},this.s={},this.G=this.o=this.R=!0,this.C=Promise.resolve(),this.P="",this.B={},this.locateFile=h&&h.locateFile||ds,typeof window=="object")var m=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")m=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.S=m,h.options){m=o(Object.keys(h.options));for(var y=m.next();!y.done;y=m.next()){y=y.value;var $=h.options[y].default;$!==void 0&&(this.j[y]=typeof $=="function"?$():$)}}}n=Gt.prototype,n.close=function(){return this.i&&this.i.delete(),Promise.resolve()};function gs(h,m){return h.g.files===void 0?[]:typeof h.g.files=="function"?h.g.files(m):h.g.files}function Ar(h){return Ue(h,function m(){var y=this,$,R,j,L,z,X,ne,oe,we,de,le;return q(m,function(se){switch(se.g){case 1:return $=y,y.R?(R=gs(y,y.j),U(se,ms(),2)):se.return();case 2:if(j=se.h,typeof window=="object")return $r("createMediapipeSolutionsWasm",{locateFile:y.locateFile}),$r("createMediapipeSolutionsPackedAssets",{locateFile:y.locateFile}),X=R.filter(function(l){return l.data!==void 0}),ne=R.filter(function(l){return l.data===void 0}),oe=Promise.all(X.map(function(l){var g=hn($,l.url);if(l.path!==void 0){var w=l.path;g=g.then(function(N){return $.overrideFile(w,N),Promise.resolve(N)})}return g})),we=Promise.all(ne.map(function(l){return l.simd===void 0||l.simd&&j||!l.simd&&!j?st($.locateFile(l.url,$.S)):Promise.resolve()})).then(function(){return Ue($,function l(){var g,w,N=this;return q(l,function(k){if(k.g==1)return g=window.createMediapipeSolutionsWasm,w=window.createMediapipeSolutionsPackedAssets,U(k,g(w),2);N.h=k.h,k.g=0})})}),de=function(){return Ue($,function l(){var g=this;return q(l,function(w){return g.g.graph&&g.g.graph.url?w=U(w,hn(g,g.g.graph.url),0):(w.g=0,w=void 0),w})})}(),U(se,Promise.all([we,oe,de]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return L=R.filter(function(l){return l.simd===void 0||l.simd&&j||!l.simd&&!j}).map(function(l){return $.locateFile(l.url,$.S)}),importScripts.apply(null,u(L)),U(se,createMediapipeSolutionsWasm(Module),6);case 6:y.h=se.h,y.l=new OffscreenCanvas(1,1),y.h.canvas=y.l,z=y.h.GL.createContext(y.l,{antialias:!1,alpha:!1,ba:typeof WebGL2RenderingContext<"u"?2:1}),y.h.GL.makeContextCurrent(z),se.g=4;break;case 7:if(y.l=document.createElement("canvas"),le=y.l.getContext("webgl2",{}),!le&&(le=y.l.getContext("webgl",{}),!le))return alert("Failed to create WebGL canvas context when passing video frame."),se.return();y.D=le,y.h.canvas=y.l,y.h.createContext(y.l,!0,!0,{});case 4:y.i=new y.h.SolutionWasm,y.R=!1,se.g=0}})})}function na(h){return Ue(h,function m(){var y=this,$,R,j,L,z,X,ne,oe;return q(m,function(we){if(we.g==1){if(y.g.graph&&y.g.graph.url&&y.P===y.g.graph.url)return we.return();if(y.o=!0,!y.g.graph||!y.g.graph.url){we.g=2;return}return y.P=y.g.graph.url,U(we,hn(y,y.g.graph.url),3)}for(we.g!=2&&($=we.h,y.i.loadGraph($)),R=o(Object.keys(y.B)),j=R.next();!j.done;j=R.next())L=j.value,y.i.overrideFile(L,y.B[L]);if(y.B={},y.g.listeners)for(z=o(y.g.listeners),X=z.next();!X.done;X=z.next())ne=X.value,sa(y,ne);oe=y.j,y.j={},y.setOptions(oe),we.g=0})})}n.reset=function(){return Ue(this,function h(){var m=this;return q(h,function(y){m.i&&(m.i.reset(),m.m={},m.s={}),y.g=0})})},n.setOptions=function(h,m){var y=this;if(m=m||this.g.options){for(var $=[],R=[],j={},L=o(Object.keys(h)),z=L.next();!z.done;j={K:j.K,L:j.L},z=L.next()){var X=z.value;X in this.j&&this.j[X]===h[X]||(this.j[X]=h[X],z=m[X],z!==void 0&&(z.onChange&&(j.K=z.onChange,j.L=h[X],$.push(function(ne){return function(){return Ue(y,function oe(){var we,de=this;return q(oe,function(le){if(le.g==1)return U(le,ne.K(ne.L),2);we=le.h,we===!0&&(de.o=!0),le.g=0})})}}(j))),z.graphOptionXref&&(X={valueNumber:z.type===1?h[X]:0,valueBoolean:z.type===0?h[X]:!1,valueString:z.type===2?h[X]:""},z=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),z.graphOptionXref),X),R.push(z))))}($.length!==0||R.length!==0)&&(this.o=!0,this.A=(this.A===void 0?[]:this.A).concat(R),this.u=(this.u===void 0?[]:this.u).concat($))}};function ra(h){return Ue(h,function m(){var y=this,$,R,j,L,z,X,ne;return q(m,function(oe){switch(oe.g){case 1:if(!y.o)return oe.return();if(!y.u){oe.g=2;break}$=o(y.u),R=$.next();case 3:if(R.done){oe.g=5;break}return j=R.value,U(oe,j(),4);case 4:R=$.next(),oe.g=3;break;case 5:y.u=void 0;case 2:if(y.A){for(L=new y.h.GraphOptionChangeRequestList,z=o(y.A),X=z.next();!X.done;X=z.next())ne=X.value,L.push_back(ne);y.i.changeOptions(L),L.delete(),y.A=void 0}y.o=!1,oe.g=0}})})}n.initialize=function(){return Ue(this,function h(){var m=this;return q(h,function(y){return y.g==1?U(y,Ar(m),2):y.g!=3?U(y,na(m),3):U(y,ra(m),0)})})};function hn(h,m){return Ue(h,function y(){var $=this,R,j;return q(y,function(L){return m in $.F?L.return($.F[m]):(R=$.locateFile(m,""),j=fetch(R).then(function(z){return z.arrayBuffer()}),$.F[m]=j,L.return(j))})})}n.overrideFile=function(h,m){this.i?this.i.overrideFile(h,m):this.B[h]=m},n.clearOverriddenFiles=function(){this.B={},this.i&&this.i.clearOverriddenFiles()},n.send=function(h,m){return Ue(this,function y(){var $=this,R,j,L,z,X,ne,oe,we,de;return q(y,function(le){switch(le.g){case 1:return $.g.inputs?(R=1e3*(m??performance.now()),U(le,$.C,2)):le.return();case 2:return U(le,$.initialize(),3);case 3:for(j=new $.h.PacketDataList,L=o(Object.keys(h)),z=L.next();!z.done;z=L.next())if(X=z.value,ne=$.g.inputs[X]){e:{var se=$,l=h[X];switch(ne.type){case"video":var g=se.m[ne.stream];if(g||(g=new Fn(se.h,se.D),se.m[ne.stream]=g),se=g,se.l===0&&(se.l=se.h.createTexture()),typeof HTMLVideoElement<"u"&&l instanceof HTMLVideoElement){var w=l.videoWidth;g=l.videoHeight}else typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement?(w=l.naturalWidth,g=l.naturalHeight):(w=l.width,g=l.height);g={glName:se.l,width:w,height:g},w=se.g,w.canvas.width=g.width,w.canvas.height=g.height,w.activeTexture(w.TEXTURE0),se.h.bindTexture2d(se.l),w.texImage2D(w.TEXTURE_2D,0,w.RGBA,w.RGBA,w.UNSIGNED_BYTE,l),se.h.bindTexture2d(0),se=g;break e;case"detections":for(g=se.m[ne.stream],g||(g=new ea(se.h),se.m[ne.stream]=g),se=g,se.data||(se.data=new se.g.DetectionListData),se.data.reset(l.length),g=0;g<l.length;++g){w=l[g];var N=se.data,k=N.setBoundingBox,E=g,I=w.T,D=new sr;ge(D,1,I.Z),ge(D,2,I.$),ge(D,3,I.height),ge(D,4,I.width),ge(D,5,I.rotation),ge(D,6,I.X);var P=I=new Ut;rt(P,1,xe(D,1)),rt(P,2,xe(D,2)),rt(P,3,xe(D,3)),rt(P,4,xe(D,4)),rt(P,5,xe(D,5));var M=xe(D,6);if(M!=null&&M!=null){kt(P.g,48);var H=P.g,Y=M;M=0>Y,Y=Math.abs(Y);var Z=Y>>>0;for(Y=Math.floor((Y-Z)/4294967296),Y>>>=0,M&&(Y=~Y>>>0,Z=(~Z>>>0)+1,4294967295<Z&&(Z=0,Y++,4294967295<Y&&(Y=0))),gt=Z,yt=Y,M=gt,Z=yt;0<Z||127<M;)H.push(M&127|128),M=(M>>>7|Z<<25)>>>0,Z>>>=7;H.push(M)}if(nr(D,P),I=_n(I),k.call(N,E,I),w.O)for(N=0;N<w.O.length;++N)D=w.O[N],P=!!D.visibility,k=se.data,E=k.addNormalizedLandmark,I=g,D=Object.assign(Object.assign({},D),{visibility:P?D.visibility:0}),P=new cn,ge(P,1,D.x),ge(P,2,D.y),ge(P,3,D.z),D.visibility&&ge(P,4,D.visibility),H=D=new Ut,rt(H,1,xe(P,1)),rt(H,2,xe(P,2)),rt(H,3,xe(P,3)),rt(H,4,xe(P,4)),rt(H,5,xe(P,5)),nr(P,H),D=_n(D),E.call(k,I,D);if(w.M)for(N=0;N<w.M.length;++N){if(k=se.data,E=k.addClassification,I=g,D=w.M[N],P=new Bt,ge(P,2,D.Y),D.index&&ge(P,1,D.index),D.label&&ge(P,3,D.label),D.displayName&&ge(P,4,D.displayName),H=D=new Ut,Z=xe(P,1),Z!=null&&Z!=null)if(kt(H.g,8),M=H.g,0<=Z)kt(M,Z);else{for(Y=0;9>Y;Y++)M.push(Z&127|128),Z>>=7;M.push(1)}rt(H,2,xe(P,2)),M=xe(P,3),M!=null&&(M=mt(M),kt(H.g,26),kt(H.g,M.length),wt(H,H.g.end()),wt(H,M)),M=xe(P,4),M!=null&&(M=mt(M),kt(H.g,34),kt(H.g,M.length),wt(H,H.g.end()),wt(H,M)),nr(P,H),D=_n(D),E.call(k,I,D)}}se=se.data;break e;default:se={}}}switch(oe=se,we=ne.stream,ne.type){case"video":j.pushTexture2d(Object.assign(Object.assign({},oe),{stream:we,timestamp:R}));break;case"detections":de=oe,de.stream=we,de.timestamp=R,j.pushDetectionList(de);break;default:throw Error("Unknown input config type: '"+ne.type+"'")}}return $.i.send(j),U(le,$.C,4);case 4:j.delete(),le.g=0}})})};function ys(h,m,y){return Ue(h,function $(){var R,j,L,z,X,ne,oe=this,we,de,le,se,l,g,w,N;return q($,function(k){switch(k.g){case 1:if(!y)return k.return(m);for(R={},j=0,L=o(Object.keys(y)),z=L.next();!z.done;z=L.next())X=z.value,ne=y[X],typeof ne!="string"&&ne.type==="texture"&&m[ne.stream]!==void 0&&++j;1<j&&(oe.G=!1),we=o(Object.keys(y)),z=we.next();case 2:if(z.done){k.g=4;break}if(de=z.value,le=y[de],typeof le=="string")return w=R,N=de,U(k,bs(oe,de,m[le]),14);if(se=m[le.stream],le.type==="detection_list"){if(se){for(var E=se.getRectList(),I=se.getLandmarksList(),D=se.getClassificationsList(),P=[],M=0;M<E.size();++M){var H=E.get(M);e:{var Y=new sr;for(H=new un(H);nt(H);)switch(H.i){case 13:var Z=je(H);ge(Y,1,Z);break;case 21:Z=je(H),ge(Y,2,Z);break;case 29:Z=je(H),ge(Y,3,Z);break;case 37:Z=je(H),ge(Y,4,Z);break;case 45:Z=je(H),ge(Y,5,Z);break;case 48:Z=xn(H.g),ge(Y,6,Z);break;default:if(!lt(Y,H))break e}}Y={Z:ct(Y,1),$:ct(Y,2),height:ct(Y,3),width:ct(Y,4),rotation:ct(Y,5,0),X:Rt(Y,6,0)},H=tr(hs(I.get(M)),cn).map(_r);var ee=D.get(M);e:for(Z=new rr,ee=new un(ee);nt(ee);)switch(ee.i){case 10:Z.addClassification(er(ee,new Bt,us));break;default:if(!lt(Z,ee))break e}Y={T:Y,O:H,M:kr(Z)},P.push(Y)}E=P}else E=[];R[de]=E,k.g=7;break}if(le.type==="proto_list"){if(se){for(E=Array(se.size()),I=0;I<se.size();I++)E[I]=se.get(I);se.delete()}else E=[];R[de]=E,k.g=7;break}if(se===void 0){k.g=3;break}if(le.type==="float_list"){R[de]=se,k.g=7;break}if(le.type==="proto"){R[de]=se,k.g=7;break}if(le.type!=="texture")throw Error("Unknown output config type: '"+le.type+"'");return l=oe.s[de],l||(l=new Fn(oe.h,oe.D),oe.s[de]=l),U(k,ln(l,se,oe.G),13);case 13:g=k.h,R[de]=g;case 7:le.transform&&R[de]&&(R[de]=le.transform(R[de])),k.g=3;break;case 14:w[N]=k.h;case 3:z=we.next(),k.g=2;break;case 4:return k.return(R)}})})}function bs(h,m,y){return Ue(h,function $(){var R=this,j;return q($,function(L){return typeof y=="number"||y instanceof Uint8Array||y instanceof R.h.Uint8BlobList?L.return(y):y instanceof R.h.Texture2dDataOut?(j=R.s[m],j||(j=new Fn(R.h,R.D),R.s[m]=j),L.return(ln(j,y,R.G))):L.return(void 0)})})}function sa(h,m){for(var y=m.name||"$",$=[].concat(u(m.wants)),R=new h.h.StringList,j=o(m.wants),L=j.next();!L.done;L=j.next())R.push_back(L.value);j=h.h.PacketListener.implement({onResults:function(z){for(var X={},ne=0;ne<m.wants.length;++ne)X[$[ne]]=z.get(ne);var oe=h.listeners[y];oe&&(h.C=ys(h,X,m.outs).then(function(we){we=oe(we);for(var de=0;de<m.wants.length;++de){var le=X[$[de]];typeof le=="object"&&le.hasOwnProperty&&le.hasOwnProperty("delete")&&le.delete()}we&&(h.C=we)}))}}),h.i.attachMultiListener(R,j),R.delete()}n.onResults=function(h,m){this.listeners[m||"$"]=h},ie("Solution",Gt),ie("OptionType",{BOOL:0,NUMBER:1,aa:2,0:"BOOL",1:"NUMBER",2:"STRING"});function aa(h){h=ps(h);var m=h.getMesh();if(!m)return h;var y=new Float32Array(m.getVertexBufferList());m.getVertexBufferList=function(){return y};var $=new Uint32Array(m.getIndexBufferList());return m.getIndexBufferList=function(){return $},h}var Ir={files:[{url:"face_mesh_solution_packed_assets_loader.js"},{simd:!0,url:"face_mesh_solution_simd_wasm_bin.js"},{simd:!1,url:"face_mesh_solution_wasm_bin.js"}],graph:{url:"face_mesh.binarypb"},listeners:[{wants:["multi_face_geometry","image_transformed","multi_face_landmarks"],outs:{image:"image_transformed",multiFaceGeometry:{type:"proto_list",stream:"multi_face_geometry",transform:function(h){return h.map(aa)}},multiFaceLandmarks:{type:"proto_list",stream:"multi_face_landmarks",transform:function(h){return h.map(function(m){return tr(hs(m),cn).map(_r)})}}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},enableFaceGeometry:{type:0,graphOptionXref:{calculatorName:"EnableFaceGeometryConstant",calculatorType:"ConstantSidePacketCalculator",fieldName:"bool_value"}},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumFaces:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorNumFaces",fieldName:"int_value"}},refineLandmarks:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorRefineLandmarks",fieldName:"bool_value"}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"facelandmarkfrontgpu__facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"facelandmarkfrontgpu__facelandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}},cameraNear:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"near"}},cameraFar:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"far"}},cameraVerticalFovDegrees:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"vertical_fov_degrees"}}}},Or=[[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]],Dr=[[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]],Fr=[[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]],Cr=[[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]],Rr=[[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]],Lr=[[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]],ws=[].concat(u(Or),u(Dr),u(Fr),u(Cr),u(Rr),u(Lr));function vs(h){h=h||{},h=Object.assign(Object.assign({},Ir),h),this.g=new Gt(h)}n=vs.prototype,n.close=function(){return this.g.close(),Promise.resolve()},n.onResults=function(h){this.g.onResults(h)},n.initialize=function(){return Ue(this,function h(){var m=this;return q(h,function(y){return U(y,m.g.initialize(),0)})})},n.reset=function(){this.g.reset()},n.send=function(h){return Ue(this,function m(){var y=this;return q(m,function($){return U($,y.g.send(h),0)})})},n.setOptions=function(h){this.g.setOptions(h)},ie("FACE_GEOMETRY",{Layout:{COLUMN_MAJOR:0,ROW_MAJOR:1,0:"COLUMN_MAJOR",1:"ROW_MAJOR"},PrimitiveType:{TRIANGLE:0,0:"TRIANGLE"},VertexType:{VERTEX_PT:0,0:"VERTEX_PT"},DEFAULT_CAMERA_PARAMS:{verticalFovDegrees:63,near:1,far:1e4}}),ie("FaceMesh",vs),ie("FACEMESH_LIPS",Or),ie("FACEMESH_LEFT_EYE",Dr),ie("FACEMESH_LEFT_EYEBROW",Fr),ie("FACEMESH_LEFT_IRIS",[[474,475],[475,476],[476,477],[477,474]]),ie("FACEMESH_RIGHT_EYE",Cr),ie("FACEMESH_RIGHT_EYEBROW",Rr),ie("FACEMESH_RIGHT_IRIS",[[469,470],[470,471],[471,472],[472,469]]),ie("FACEMESH_FACE_OVAL",Lr),ie("FACEMESH_CONTOURS",ws),ie("FACEMESH_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]]),ie("matrixDataToMatrix",function(h){for(var m=h.getCols(),y=h.getRows(),$=h.getPackedDataList(),R=[],j=0;j<y;j++)R.push(Array(m));for(j=0;j<y;j++)for(var L=0;L<m;L++){var z=h.getLayout()===1?j*m+L:L*y+j;R[j][L]=$[z]}return R}),ie("VERSION","0.4.1633559619")}).call(Mt);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rc=1e-7,sc=1e-4;class ac{refCount(e){return it("refCount")}incRef(e){return it("incRef")}timerAvailable(){return!0}time(e){return it("time")}read(e){return it("read")}readSync(e){return it("readSync")}readToGPU(e,t){return it("readToGPU")}numDataIds(){return it("numDataIds")}disposeData(e,t){return it("disposeData")}write(e,t,r){return it("write")}move(e,t,r,s,a){return it("move")}createTensorFromGPUData(e,t,r){return it("createTensorFromGPUData")}memory(){return it("memory")}floatPrecision(){return it("floatPrecision")}epsilon(){return this.floatPrecision()===32?rc:sc}dispose(){return it("dispose")}}function it(n){throw new Error(`'${n}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x(n,e){if(!n)throw new Error(typeof e=="string"?e:e())}function Et(n,e,t=""){x(Jt(n,e),()=>t+` Shapes ${n} and ${e} must match`)}function mr(n){x(n!=null,()=>"The input to the tensor constructor must be a non-null value.")}function Pe(n){if(n.length===0)return 1;let e=n[0];for(let t=1;t<n.length;t++)e*=n[t];return e}function ic(n,e){if(n===e)return!0;if(n==null||e==null||n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==null&&e[t]!==null&&n[t]!==e[t])return!1;return!0}function Jt(n,e){if(n===e)return!0;if(n==null||e==null||n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function Ur(n){return n%1===0}function Es(n,e){return e<=n.length?n:n+" ".repeat(e-n.length)}function zs(n,e){const t=e.length;return n=n==null?e.map((r,s)=>s):[].concat(n),x(n.every(r=>r>=-t&&r<t),()=>`All values in axis param must be in range [-${t}, ${t}) but got axis ${n}`),x(n.every(r=>Ur(r)),()=>`All values in axis param must be integers but got axis ${n}`),n.map(r=>r<0?t+r:r)}function oc(n,e){const t=[],r=[],s=e!=null&&Array.isArray(e)&&e.length===0,a=e==null||s?null:zs(e,n).sort();let i=0;for(let o=0;o<n.length;++o){if(a!=null){if(a[i]===o&&n[o]!==1)throw new Error(`Can't squeeze axis ${o} since its dim '${n[o]}' is not 1`);(a[i]==null||a[i]>o)&&n[o]===1&&(t.push(n[o]),r.push(o)),a[i]<=o&&i++}n[o]!==1&&(t.push(n[o]),r.push(o))}return{newShape:t,keptDims:r}}function uc(n,e){return yo(n,e)}function yo(n,e){let t=null;if(n==null||n==="float32")t=new Float32Array(e);else if(n==="int32")t=new Int32Array(e);else if(n==="bool")t=new Uint8Array(e);else if(n==="string")t=new Array(e);else throw new Error(`Unknown data type ${n}`);return t}function cc(n,e){for(let t=0;t<n.length;t++){const r=n[t];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${e} being uploaded contains ${r}.`)}}function lc(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function Sa(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error(`Unknown dtype ${n}`)}function hc(n){if(n==null)return 0;let e=0;return n.forEach(t=>e+=t.length),e}function ei(n){return typeof n=="string"||n instanceof String}function fc(n){return typeof n=="boolean"}function pc(n){return typeof n=="number"}function Vs(n){return Array.isArray(n)?Vs(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray?"int32":pc(n)?"float32":ei(n)?"string":fc(n)?"bool":"float32"}function Ea(n){return!!(n&&n.constructor&&n.call&&n.apply)}function ti(n){const e=n.length;if(e<2)return[];const t=new Array(e-1);t[e-2]=n[e-1];for(let r=e-3;r>=0;--r)t[r]=t[r+1]*n[r+1];return t}function bo(n,e,t,r=!1){const s=new Array;if(e.length===1){const a=e[0]*(r?2:1);for(let i=0;i<a;i++)s[i]=t[n+i]}else{const a=e[0],i=e.slice(1),o=i.reduce((u,c)=>u*c)*(r?2:1);for(let u=0;u<a;u++)s[u]=bo(n+u*o,i,t,r)}return s}function xa(n,e,t=!1){if(n.length===0)return e[0];const r=n.reduce((s,a)=>s*a)*(t?2:1);if(r===0)return[];if(r!==e.length)throw new Error(`[${n}] does not match the input size ${e.length}${t?" for a complex tensor":""}.`);return bo(0,n,e,t)}function wo(n,e){const t=ni(n,e);for(let r=0;r<t.length;r++)t[r]=1;return t}function ni(n,e){if(e==null||e==="float32"||e==="complex64")return new Float32Array(n);if(e==="int32")return new Int32Array(n);if(e==="bool")return new Uint8Array(n);throw new Error(`Unknown data type ${e}`)}function dt(n){n.forEach(e=>{x(Number.isInteger(e)&&e>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${n}].`)})}function Vn(n){return n&&n.then&&typeof n.then=="function"}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Oi="tfjsflags";class dc{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=mc,this.populateURLFlags()}setPlatform(e,t){this.platform!=null&&(be().getBool("IS_TEST")||be().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=t}registerFlag(e,t,r){if(this.flagRegistry[e]={evaluationFn:t,setHook:r},this.urlFlags[e]!=null){const s=this.urlFlags[e];be().getBool("IS_TEST")||be().getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${s}.`),this.set(e,s)}}async getAsync(e){return e in this.flags?this.flags[e]:(this.flags[e]=await this.evaluateFlag(e),this.flags[e])}get(e){if(e in this.flags)return this.flags[e];const t=this.evaluateFlag(e);if(Vn(t))throw new Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=t,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getString(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,t){if(this.flagRegistry[e]==null)throw new Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=t,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(t)}evaluateFlag(e){if(this.flagRegistry[e]==null)throw new Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const e=this.getQueryParams(this.global.location.search);Oi in e&&e[Oi].split(",").forEach(r=>{const[s,a]=r.split(":");this.urlFlags[s]=yc(s,a)})}}function mc(n){const e={};return n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(t,...r)=>(gc(e,r[0],r[1]),r.join("="))),e}function gc(n,e,t){n[decodeURIComponent(e)]=decodeURIComponent(t||"")}function yc(n,e){const t=e.toLowerCase();return t==="true"||t==="false"?t==="true":`${+t}`===t?+t:e}function be(){return vo}let vo=null;function bc(n){vo=n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let oa;function No(){if(oa==null){let n;if(typeof window<"u")n=window;else if(typeof global<"u")n=global;else if(typeof process<"u")n=process;else if(typeof self<"u")n=self;else throw new Error("Could not find a global object");oa=n}return oa}function wc(){const n=No();return n._tfGlobals==null&&(n._tfGlobals=new Map),n._tfGlobals}function ri(n,e){const t=wc();if(t.has(n))return t.get(n);{const r=e();return t.set(n,r),t.get(n)}}const vc="Abs",Nc="Acos",Tc="Acosh",To="Add",Sc="AddN",Ec="All",xc="Any",kc="ArgMax",_c="ArgMin",$c="Asin",Ac="Asinh",Ic="Atan",Oc="Atanh",Dc="Atan2",Fc="AvgPool",Cc="AvgPool3D",Rc="BatchMatMul",Lc="BatchToSpaceND",Pc="Bincount",Bc="BitwiseAnd",jc="BroadcastArgs",So="Cast",Mc="Ceil",zc="ClipByValue",Vc="Complex",Uc="ComplexAbs",Wc="Concat",Gc="Conv2D",Kc="Conv2DBackpropFilter",Hc="Conv2DBackpropInput",qc="Conv3D",Xc="Conv3DBackpropInputV2",Yc="Cos",Jc="Cosh",Zc="Cumprod",Qc="Cumsum",el="CropAndResize",tl="DenseBincount",nl="DepthToSpace",rl="DepthwiseConv2dNative",sl="DepthwiseConv2dNativeBackpropFilter",al="DepthwiseConv2dNativeBackpropInput",il="Diag",ol="Dilation2D",ul="RealDiv",cl="Einsum",ll="Elu",hl="Erf",fl="Equal",pl="Exp",dl="ExpandDims",ml="Expm1",gl="FFT",yl="Fill",bl="FlipLeftRight",wl="Floor",vl="FloorDiv",Nl="FusedBatchNorm",Tl="GatherV2",Sl="GatherNd",El="Greater",xl="GreaterEqual",Eo="Identity",kl="IFFT",_l="Imag",$l="IsFinite",Al="IsInf",Il="IsNan",Ol="LeakyRelu",Dl="Less",Fl="LessEqual",Cl="LinSpace",Rl="Log",Ll="Log1p",Pl="LogicalAnd",Bl="LogicalNot",jl="LogicalOr",Ml="LRN",zl="Max",Vl="Maximum",Ul="MaxPool",Wl="MaxPool3D",Gl="MaxPoolWithArgmax",Kl="Mean",Hl="Min",ql="Minimum",Xl="MirrorPad",Yl="Mod",Jl="Multinomial",Zl="Multiply",Ql="Neg",e1="NotEqual",t1="NonMaxSuppressionV3",n1="NonMaxSuppressionV4",r1="NonMaxSuppressionV5",s1="OnesLike",a1="OneHot",i1="Pack",o1="PadV2",u1="Pow",c1="Prelu",l1="Prod",h1="RaggedGather",f1="RaggedRange",p1="RaggedTensorToTensor",d1="Range",m1="Real",g1="Reciprocal",y1="Relu",b1="Reshape",w1="ResizeNearestNeighbor",v1="ResizeBilinear",N1="Relu6",T1="Reverse",S1="Round",E1="Rsqrt",x1="ScatterNd",k1="TensorScatterUpdate",_1="SearchSorted",$1="Select",A1="Selu",I1="Slice",O1="Sin",D1="Sinh",F1="Sign",C1="Sigmoid",R1="Softplus",L1="Sqrt",P1="Sum",B1="SpaceToBatchND",j1="SplitV",M1="Softmax",z1="SparseFillEmptyRows",V1="SparseReshape",U1="SparseSegmentMean",W1="SparseSegmentSum",G1="SparseToDense",K1="SquaredDifference",H1="StaticRegexReplace",q1="StridedSlice",X1="StringNGrams",Y1="StringSplit",J1="StringToHashBucketFast",Z1="Sub",Q1="Tan",e2="Tanh",xo="Tile",t2="TopK",n2="Transform",ua="Transpose",r2="Unique",s2="Unpack",a2="UnsortedSegmentSum",i2="ZerosLike",o2="Step",Di="FromPixels",u2="RotateWithOffset",Fi="_FusedMatMul",Ci="FusedConv2D",Ri="FusedDepthwiseConv2D";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pr(...n){be().getBool("IS_TEST")||be().getBool("PROD")||console.warn(...n)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ko=ri("kernelRegistry",()=>new Map),c2=ri("gradRegistry",()=>new Map);function ka(n,e){const t=l2(n,e);return ko.get(t)}function Li(n){return c2.get(n)}function Pi(n){const e=ko.entries(),t=[];for(;;){const{done:r,value:s}=e.next();if(r)break;const[a,i]=s,[o]=a.split("_");o===n&&t.push(i)}return t}function l2(n,e){return`${e}_${n}`}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _o(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h2(n,e){return n instanceof Float32Array&&e==="float32"||n instanceof Int32Array&&e==="int32"||n instanceof Uint8Array&&e==="bool"}function $o(n,e){if(e==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=Wr(n)),be().getBool("DEBUG")&&cc(n,e),h2(n,e))return n;if(e==null||e==="float32"||e==="complex64")return new Float32Array(n);if(e==="int32")return new Int32Array(n);if(e==="bool"){const t=new Uint8Array(n.length);for(let r=0;r<t.length;++r)Math.round(n[r])!==0&&(t[r]=1);return t}else throw new Error(`Unknown data type ${e}`)}function As(){return be().platform.now()}function f2(n,e="utf-8"){return e=e||"utf-8",be().platform.encode(n,e)}function Bi(n,e="utf-8"){return e=e||"utf-8",be().platform.decode(n,e)}function St(n){return be().platform.isTypedArray!=null?be().platform.isTypedArray(n):_o(n)}function Wr(n,e=[],t=!1){if(e==null&&(e=[]),typeof n=="boolean"||typeof n=="number"||typeof n=="string"||Vn(n)||n==null||St(n)&&t)e.push(n);else if(Array.isArray(n)||St(n))for(let r=0;r<n.length;++r)Wr(n[r],e,t);else{let r=-1;for(const s of Object.keys(n))/^([1-9]+[0-9]*|0)$/.test(s)&&(r=Math.max(r,Number(s)));for(let s=0;s<=r;s++)Wr(n[s],e,t)}return e}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class p2{constructor(e,t){this.backendTimer=e,this.logger=t,t==null&&(this.logger=new m2)}profileKernel(e,t,r){let s;const a=()=>{s=r()};let i;const o=As();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(a);else{a();for(const c of s)c.dataSync();i=Promise.resolve({kernelMs:As()-o})}if(be().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let c=0;c<s.length;c++){const f=s[c];f.data().then(p=>{d2(p,f.dtype,e)})}return{kernelName:e,outputs:s,inputs:t,timeMs:i.then(c=>c.kernelMs),extraInfo:i.then(c=>c.getExtraProfileInfo!=null?c.getExtraProfileInfo():"")}}logKernelProfile(e){const{kernelName:t,outputs:r,timeMs:s,inputs:a,extraInfo:i}=e;r.forEach(o=>{Promise.all([o.data(),s,i]).then(u=>{this.logger.logKernelProfile(t,o,u[0],u[1],a,u[2])})})}}function d2(n,e,t){if(e!=="float32")return!1;for(let r=0;r<n.length;r++){const s=n[r];if(isNaN(s)||!isFinite(s))return console.warn(`Found ${s} in the result of '${t}'`),!0}return!1}class m2{logKernelProfile(e,t,r,s,a,i){const o=typeof s=="number"?Es(`${s}ms`,9):s.error,u=Es(e,25),c=t.rank,f=t.size,p=Es(t.shape.toString(),14);let b="";for(const v in a){const S=a[v];if(S!=null){const A=S.shape||t.shape,_=A.length;b+=`${v}: ${_}D ${_>0?A:""} `}}console.log(`%c${u}	%c${o}	%c${c}D ${p}	%c${f}	%c${b}	%c${i}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function g2(n,e,t){const r={},s={};for(let u=0;u<e.length;u++)r[e[u].id]=!0;for(let u=0;u<n.length;u++){const c=n[u],f=c.inputs;for(const p in f){const b=f[p];let v=!1;for(let S=0;S<e.length;S++)if(r[b.id]){c.outputs.forEach(A=>r[A.id]=!0),v=!0,s[c.id]=!0;break}if(v)break}}const a={};a[t.id]=!0;const i={};for(let u=n.length-1;u>=0;u--){const c=n[u],f=c.inputs;for(let p=0;p<c.outputs.length;p++)if(a[c.outputs[p].id]){for(const b in f)a[f[b].id]=!0,i[c.id]=!0;break}}const o=[];for(let u=0;u<n.length;u++){const c=n[u];if(s[c.id]&&i[c.id]){const f={};for(const b in c.inputs){const v=c.inputs[b];r[v.id]&&(f[b]=v)}const p=Object.assign({},c);p.inputs=f,p.outputs=c.outputs,o.push(p)}}return o}function y2(n,e,t,r){for(let s=e.length-1;s>=0;s--){const a=e[s],i=[];if(a.outputs.forEach(u=>{const c=n[u.id];c!=null?i.push(c):i.push(null)}),a.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${a.kernelName}.`);const o=a.gradient(i);for(const u in a.inputs){if(!(u in o))throw new Error(`Cannot backprop through input ${u}. Available gradients found: ${Object.keys(o)}.`);const c=t(()=>o[u]());if(c.dtype!=="float32")throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input ${u} must have 'float32' dtype, but has '${c.dtype}'`);const f=a.inputs[u];if(!Jt(c.shape,f.shape))throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input '${u}' has shape '${c.shape}', which does not match the shape of the input '${f.shape}'`);if(n[f.id]==null)n[f.id]=c;else{const p=n[f.id];n[f.id]=r(p,c),p.dispose()}}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ji=20,Br=3,ca=7;function b2(n,e,t,r){const s=ti(e),a=w2(n,e,t,s),i=e.length,o=xs(n,e,t,s,a),u=["Tensor"];return r&&(u.push(`  dtype: ${t}`),u.push(`  rank: ${i}`),u.push(`  shape: [${e}]`),u.push("  values:")),u.push(o.map(c=>"    "+c).join(`
`)),u.join(`
`)}function w2(n,e,t,r){const s=Pe(e),a=r[r.length-1],i=new Array(a).fill(0),o=e.length,u=t==="complex64"?zr(n):n;if(o>1)for(let c=0;c<s/a;c++){const f=c*a;for(let p=0;p<a;p++)i[p]=Math.max(i[p],Mr(u[f+p],0,t).length)}return i}function Mr(n,e,t){let r;return Array.isArray(n)?r=`${parseFloat(n[0].toFixed(ca))} + ${parseFloat(n[1].toFixed(ca))}j`:ei(n)?r=`'${n}'`:t==="bool"?r=Ao(n):r=parseFloat(n.toFixed(ca)).toString(),Es(r,e)}function Ao(n){return n===0?"false":"true"}function xs(n,e,t,r,s,a=!0){const i=t==="complex64"?2:1,o=e[0],u=e.length;if(u===0){if(t==="complex64"){const A=zr(n);return[Mr(A[0],0,t)]}return t==="bool"?[Ao(n[0])]:[n[0].toString()]}if(u===1){if(o>ji){const _=Br*i;let C=Array.from(n.slice(0,_)),K=Array.from(n.slice((o-Br)*i,o*i));return t==="complex64"&&(C=zr(C),K=zr(K)),["["+C.map((U,B)=>Mr(U,s[B],t)).join(", ")+", ..., "+K.map((U,B)=>Mr(U,s[o-Br+B],t)).join(", ")+"]"]}return["["+(t==="complex64"?zr(n):Array.from(n)).map((_,C)=>Mr(_,s[C],t)).join(", ")+"]"]}const c=e.slice(1),f=r.slice(1),p=r[0]*i,b=[];if(o>ji){for(let A=0;A<Br;A++){const _=A*p,C=_+p;b.push(...xs(n.slice(_,C),c,t,f,s,!1))}b.push("...");for(let A=o-Br;A<o;A++){const _=A*p,C=_+p;b.push(...xs(n.slice(_,C),c,t,f,s,A===o-1))}}else for(let A=0;A<o;A++){const _=A*p,C=_+p;b.push(...xs(n.slice(_,C),c,t,f,s,A===o-1))}const v=u===2?",":"";b[0]="["+(o>0?b[0]+v:"");for(let A=1;A<b.length-1;A++)b[A]=" "+b[A]+v;let S=`,
`;for(let A=2;A<u;A++)S+=`
`;return b[b.length-1]=" "+b[b.length-1]+"]"+(a?"":S),b}function zr(n){const e=[];for(let t=0;t<n.length;t+=2)e.push([n[t],n[t+1]]);return e}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class _a{constructor(e,t,r){if(this.dtype=t,this.shape=e.slice(),this.size=Pe(e),r!=null){const s=r.length;x(s===this.size,()=>`Length of values '${s}' does not match the size inferred by the shape '${this.size}'.`)}if(t==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||yo(t,this.size),this.strides=ti(e)}set(e,...t){t.length===0&&(t=[0]),x(t.length===this.rank,()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`);const r=this.locToIndex(t);this.values[r]=e}get(...e){e.length===0&&(e=[0]);let t=0;for(const s of e){if(s<0||s>=this.shape[t]){const a=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw new Error(a)}t++}let r=e[e.length-1];for(let s=0;s<e.length-1;++s)r+=this.strides[s]*e[s];return this.values[r]}locToIndex(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];let t=e[e.length-1];for(let r=0;r<e.length-1;++r)t+=this.strides[r]*e[r];return t}indexToLoc(e){if(this.rank===0)return[];if(this.rank===1)return[e];const t=new Array(this.shape.length);for(let r=0;r<t.length-1;++r)t[r]=Math.floor(e/this.strides[r]),e-=t[r]*this.strides[r];return t[t.length-1]=e,t}get rank(){return this.shape.length}toTensor(){return $t().makeTensor(this.values,this.shape,this.dtype)}}let $t=null,or=null;function v2(n){$t=n}function N2(n){or=n}class De{constructor(e,t,r,s){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||"float32",this.size=Pe(e),this.strides=ti(e),this.dataId=r,this.id=s,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const e=await this.data();return or.buffer(this.shape,this.dtype,e)}bufferSync(){return or.buffer(this.shape,this.dtype,this.dataSync())}async array(){const e=await this.data();return xa(this.shape,e,this.dtype==="complex64")}arraySync(){return xa(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const e=$t().read(this.dataId);if(this.dtype==="string"){const t=await e;try{return t.map(r=>Bi(r))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e}dataToGPU(e){return this.throwIfDisposed(),$t().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();const e=$t().readSync(this.dataId);if(this.dtype==="string")try{return e.map(t=>Bi(t))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}async bytes(){this.throwIfDisposed();const e=await $t().read(this.dataId);return this.dtype==="string"?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),$t().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(e=!1){return or.print(this,e)}clone(){return this.throwIfDisposed(),or.clone(this)}toString(e=!1){const t=this.dataSync();return b2(t,this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),or.cast(this,e)}variable(e=!0,t,r){return this.throwIfDisposed(),$t().makeVariable(this,e,t,r)}}Object.defineProperty(De,Symbol.hasInstance,{value:n=>!!n&&n.data!=null&&n.dataSync!=null&&n.throwIfDisposed!=null});function Io(){return ri("Tensor",()=>De)}Io();class Is extends De{constructor(e,t,r,s){super(e.shape,e.dtype,e.dataId,s),this.trainable=t,this.name=r}assign(e){if(e.dtype!==this.dtype)throw new Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!Jt(e.shape,this.shape))throw new Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);$t().disposeTensor(this),this.dataId=e.dataId,$t().incRef(this,null)}dispose(){$t().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(Is,Symbol.hasInstance,{value:n=>n instanceof De&&n.assign!=null&&n.assign instanceof Function});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Mi;(function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"})(Mi||(Mi={}));var $a;(function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"})($a||($a={}));var Aa;(function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"})(Aa||(Aa={}));var Ia;(function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"})(Ia||(Ia={}));var Oa;(function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"})(Oa||(Oa={}));const T2={float32:Ia,int32:$a,bool:Aa,complex64:Oa};function S2(n,e){if(n==="string"||e==="string"){if(n==="string"&&e==="string")return"string";throw new Error(`Can not upcast ${n} with ${e}`)}return T2[n][e]}function Oo(n){return n!=null&&typeof n=="object"&&"texture"in n&&n.texture instanceof WebGLTexture}function Do(n){return typeof GPUBuffer<"u"&&n!=null&&typeof n=="object"&&"buffer"in n&&n.buffer instanceof GPUBuffer}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fe(n,e){if(n.dtype===e.dtype)return[n,e];const t=S2(n.dtype,e.dtype);return[n.cast(t),e.cast(t)]}function E2(n,e){x(n.dtype===e.dtype,()=>`The dtypes of the first(${n.dtype}) and second(${e.dtype}) input must match`)}function Fo(n){const e=[];return Co(n,e,new Set),e}function Co(n,e,t){if(n==null)return;if(n instanceof De){e.push(n);return}if(!x2(n))return;const r=n;for(const s in r){const a=r[s];t.has(a)||(t.add(a),Co(a,e,t))}}function x2(n){return Array.isArray(n)||typeof n=="object"}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function la(n){return n.kernelName!=null}class zi{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(const e in this.registeredVariables)this.registeredVariables[e].dispose()}}class fr{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new zi}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const r=e[t];if(await this.initializeBackend(r).success){await this.setBackend(r);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:e,asyncInit:t}=this.initializeBackendsAndReturnBest();if(t)throw new Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry))if(e in this.registryFactory){const{asyncInit:t}=this.initializeBackend(e);if(t)return null}else return null;return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,t,r=1){return e in this.registryFactory?(Pr(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:t,priority:r},!0)}async setBackend(e){if(this.registryFactory[e]==null)throw new Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,this.registry[e]==null){this.backendInstance=null;const{success:t,asyncInit:r}=this.initializeBackend(e);if(!(r?await t:t))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new p2(this.backendInstance),!0}setupRegisteredKernels(){Pi(this.backendName).forEach(t=>{t.setupFunc!=null&&t.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){Pi(e).forEach(r=>{r.disposeFunc!=null&&r.disposeFunc(this.registry[e])})}initializeBackend(e){const t=this.registryFactory[e];if(t==null)throw new Error(`Cannot initialize backend ${e}, no registration found.`);try{const r=t.factory();if(r&&!(r instanceof ac)&&typeof r.then=="function"){const s=++this.pendingBackendInitId,a=r.then(i=>s<this.pendingBackendInitId?!1:(this.registry[e]=i,this.pendingBackendInit=null,!0)).catch(i=>(s<this.pendingBackendInitId||(this.pendingBackendInit=null,Pr(`Initialization of backend ${e} failed`),Pr(i.stack||i.message)),!1));return this.pendingBackendInit=a,{success:a,asyncInit:!0}}else return this.registry[e]=r,{success:!0,asyncInit:!1}}catch(r){return Pr(`Initialization of backend ${e} failed`),Pr(r.stack||r.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw new Error(`${e} backend not found in registry`);this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((e,t)=>this.registryFactory[t].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const r=e[t],{success:s,asyncInit:a}=this.initializeBackend(r);if(a||s)return{name:r,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,t){const r=this.state.tensorInfo.get(t),s=r.backend,a=this.readSync(t),i=s.refCount(t);s.disposeData(t,!0),r.backend=e,e.move(t,a,r.shape,r.dtype,i),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,t){let r=null;if(t==null){if(typeof e!="function")throw new Error("Please provide a function to tidy()");t=e}else{if(typeof e!="string"&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof t!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=e}let s;return this.scopedRun(()=>this.startScope(r),()=>this.endScope(s),()=>(s=t(),s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),s))}scopedRun(e,t,r){e();try{const s=r();return t(),s}catch(s){throw t(),s}}nextTensorId(){return fr.nextTensorId++}nextVariableId(){return fr.nextVariableId++}clone(e){const t=F.runKernel(Eo,{x:e}),r={x:e},s=i=>({x:()=>{const o="float32",u={x:i},c={dtype:o};return F.runKernel(So,u,c)}}),a=[];return this.addTapeNode(this.state.activeScope.name,r,[t],s,a,{}),t}runKernel(e,t,r){if(this.backendName==null&&this.backend,!(ka(e,this.backendName)!=null))throw new Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:t,attrs:r})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,t,r){const s=this.backend.numDataIds();let a=0;r.forEach(u=>{a+=u.dtype==="complex64"?3:1});const i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],o=s-t-a-i;if(o>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${o} data ids) after running '${e}'`)}runKernelFunc(e){let t,r=[];const s=this.isTapeOn(),a=this.state.numBytes,i=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let o;this.backendName==null&&this.backend;let u;const c=la(e)?e.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(la(e)){const{kernelName:S,inputs:A,attrs:_}=e;this.backendName==null&&this.backend;const C=ka(S,this.backendName);x(C!=null,()=>`Cannot find registered kernel '${S}' for backend '${this.backendName}'`),o=()=>{const K=this.backend.numDataIds();u=C.kernelFunc({inputs:A,attrs:_,backend:this.backend});const U=Array.isArray(u)?u:[u];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(S,K,U);const B=U.map(W=>W.rank!=null?W:this.makeTensorFromTensorInfo(W));if(s){const W=this.getTensorsForGradient(S,A,B);r=this.saveTensorsForBackwardMode(W)}return B}}else{const{forwardFunc:S}=e,A=_=>{s&&(r=_.map(C=>this.keep(this.clone(C))))};o=()=>{const _=this.backend.numDataIds();u=this.tidy(()=>S(this.backend,A));const C=Array.isArray(u)?u:[u];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,_,C),C}}const{inputs:f,attrs:p}=e,b=la(e)?null:e.backwardsFunc;let v;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?t=o():(v=this.profiler.profileKernel(c,f,()=>o()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(v),t=v.outputs)}),s&&this.addTapeNode(c,f,t,b,r,p),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-a,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-i,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(f).map(S=>f[S]!=null?f[S].shape:null),outputShapes:t.map(S=>S.shape),kernelTimeMs:v.timeMs,extraInfo:v.extraInfo}),Array.isArray(u)?t:t[0]}saveTensorsForBackwardMode(e){return e.map(r=>this.keep(this.clone(r)))}getTensorsForGradient(e,t,r){const s=Li(e);if(s!=null){const a=s.inputsToSave||[],i=s.outputsToSave||[];let o;s.saveAllInputs?(x(Array.isArray(t),()=>"saveAllInputs is true, expected inputs to be an array."),o=Object.keys(t).map(c=>t[c])):o=a.map(c=>t[c]);const u=r.filter((c,f)=>i[f]);return o.concat(u)}return[]}makeTensor(e,t,r,s){if(e==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",s=s||this.backend;let a=e;r==="string"&&ei(e[0])&&(a=e.map(u=>f2(u)));const i=s.write(a,t,r),o=new De(t,r,i,this.nextTensorId());if(this.trackTensor(o,s),r==="string"){const u=this.state.tensorInfo.get(i),c=hc(a);this.state.numBytes+=c-u.bytes,u.bytes=c}return o}makeTensorFromDataId(e,t,r,s){r=r||"float32";const a={dataId:e,shape:t,dtype:r};return this.makeTensorFromTensorInfo(a,s)}makeTensorFromTensorInfo(e,t){const{dataId:r,shape:s,dtype:a}=e,i=new De(s,a,r,this.nextTensorId());return this.trackTensor(i,t),i}makeVariable(e,t=!0,r,s){r=r||this.nextVariableId().toString(),s!=null&&s!==e.dtype&&(e=e.cast(s));const a=new Is(e,t,r,this.nextTensorId());if(this.state.registeredVariables[a.name]!=null)throw new Error(`Variable with name ${a.name} was already registered`);return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a}trackTensor(e,t){this.state.numTensors++,e.dtype==="string"&&this.state.numStringTensors++;let r=0;e.dtype!=="complex64"&&e.dtype!=="string"&&(r=e.size*Sa(e.dtype)),this.state.numBytes+=r,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:r})),e instanceof Is||this.track(e)}incRef(e,t){this.trackTensor(e,t),this.backend.incRef(e.dataId)}removeDataId(e,t){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===t&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;const t=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,e.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=t.bytes),e.dtype!=="complex64"&&e.dtype!=="string"){const r=e.size*Sa(e.dtype);this.state.numBytes-=r}t.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,t.backend)}disposeVariables(){for(const e in this.state.registeredVariables){const t=this.state.registeredVariables[e];this.disposeVariable(t)}}disposeVariable(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]}memory(){const e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons==null&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}async profile(e){this.state.profiling=!0;const t=this.state.numBytes,r=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(s=>s.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-r;for(const s of this.state.activeProfile.kernels)s.kernelTimeMs=await s.kernelTimeMs,s.extraInfo=await s.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(e,t,r,s,a,i){const o={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:r,saved:a},u=Li(e);u!=null&&(s=u.gradFunc),s!=null&&(o.gradient=c=>(c=c.map((f,p)=>{if(f==null){const b=r[p],v=ni(b.size,b.dtype);return this.makeTensor(v,b.shape,b.dtype)}return f}),s(c.length>1?c:c[0],a,i))),this.state.activeTape.push(o)}keep(e){return e.kept=!0,e}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){const t={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t}endScope(e){const t=Fo(e),r=new Set(t.map(a=>a.id));for(let a=0;a<this.state.activeScope.track.length;a++){const i=this.state.activeScope.track[a];!i.kept&&!r.has(i.id)&&i.dispose()}const s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach(a=>{!a.kept&&a.scopeId===s.id&&this.track(a)})}gradients(e,t,r,s=!1){if(x(t.length>0,()=>"gradients() received an empty list of xs."),r!=null&&r.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${r.dtype}'`);const a=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",e));x(a instanceof De,()=>"The result y returned by f() must be a tensor.");const i=g2(this.state.activeTape,t,a);if(!s&&i.length===0&&t.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const o={};o[a.id]=r??k2(a.shape),y2(o,i,c=>this.tidy(c),_2);const u=t.map(c=>o[c.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(c=>{for(const f of c.saved)f.dispose()}),this.state.activeTape=null),{value:a,grads:u}})}customGrad(e){return x(Ea(e),()=>"The f passed in customGrad(f) must be a function."),(...t)=>{x(t.every(o=>o instanceof De),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let r;const s={};t.forEach((o,u)=>{s[u]=o});const a=(o,u)=>(r=e(...t,u),x(r.value instanceof De,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),x(Ea(r.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),r.value),i=(o,u)=>{const c=r.gradFunc(o,u),f=Array.isArray(c)?c:[c];x(f.length===t.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),x(f.every(b=>b instanceof De),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const p={};return f.forEach((b,v)=>{p[v]=()=>b}),p};return this.runKernelFunc({forwardFunc:a,backwardsFunc:i,inputs:s})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,t){return this.state.tensorInfo.get(e).backend.readToGPU(e,t)}async time(e){const t=As(),r=await this.backend.time(e);return r.wallMs=As()-t,r}track(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new zi;for(const e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}fr.nextTensorId=0;fr.nextVariableId=0;function k2(n){const e=wo(Pe(n),"float32");return F.makeTensor(e,n,"float32")}function Ro(){const n=No();if(n._tfengine==null){const e=new dc(n);n._tfengine=new fr(e)}return bc(n._tfengine.ENV),v2(()=>n._tfengine),n._tfengine}const F=Ro();function _2(n,e){const t={a:n,b:e};return F.runKernel(To,t)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $2(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tt=be();tt.registerFlag("DEBUG",()=>!1,n=>{n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});tt.registerFlag("IS_BROWSER",()=>$2());tt.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");tt.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));tt.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));tt.registerFlag("PROD",()=>!1);tt.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>tt.getBool("DEBUG"));tt.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);tt.registerFlag("IS_TEST",()=>!1);tt.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>tt.getBool("DEBUG"));tt.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);tt.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);tt.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nn(n,e){let t=n;if(St(n))return e==="string"?[]:[n.length];if(Oo(n)){const s=n.channels||"RGBA";return[n.height,n.width*s.length]}else if(Do(n))return[n.buffer.size/(e==null?4:Sa(e))];if(!Array.isArray(n))return[];const r=[];for(;Array.isArray(t)||St(t)&&e!=="string";)r.push(t.length),t=t[0];return Array.isArray(n)&&be().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&Lo(n,r,[]),r}function Lo(n,e,t){if(t=t||[],!Array.isArray(n)&&!St(n)){x(e.length===0,()=>`Element arr[${t.join("][")}] is a primitive, but should be an array/TypedArray of ${e[0]} elements`);return}x(e.length>0,()=>`Element arr[${t.join("][")}] should be a primitive, but is an array of ${n.length} elements`),x(n.length===e[0],()=>`Element arr[${t.join("][")}] should have ${e[0]} elements, but has ${n.length} elements`);const r=e.slice(1);for(let s=0;s<n.length;++s)Lo(n[s],r,t.concat(s))}function Vi(n,e,t,r){if(n!=="string_or_numeric"){if(n==null)throw new Error("Expected dtype cannot be null.");if(n!=="numeric"&&n!==e||n==="numeric"&&e==="string")throw new Error(`Argument '${t}' passed to '${r}' must be ${n} tensor, but got ${e} tensor`)}}function T(n,e,t,r="numeric"){if(n instanceof Io())return Vi(r,n.dtype,e,t),n;let s=Vs(n);if(s!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(s=r),Vi(r,s,e,t),n==null||!St(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){const u=n==null?"null":n.constructor.name;throw new Error(`Argument '${e}' passed to '${t}' must be a Tensor or TensorLike, but got '${u}'`)}const a=Nn(n,s);!St(n)&&!Array.isArray(n)&&(n=[n]);const o=s!=="string"?$o(n,s):Wr(n,[],!0);return F.makeTensor(o,a,s)}function Os(n,e,t,r="numeric"){if(!Array.isArray(n))throw new Error(`Argument ${e} passed to ${t} must be a \`Tensor[]\` or \`TensorLike[]\``);return n.map((a,i)=>T(a,`${e}[${i}]`,t,r))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Po="__op";function O(n){const e=Object.keys(n);if(e.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${e.length} keys.`);let t=e[0];const r=n[t];t.endsWith("_")&&(t=t.substring(0,t.length-1)),t=t+Po;const s=(...a)=>{F.startScope(t);try{const i=r(...a);return Vn(i)&&console.error("Cannot return a Promise inside of tidy."),F.endScope(i),i}catch(i){throw F.endScope(null),i}};return Object.defineProperty(s,"name",{value:t,configurable:!0}),s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function A2(n,e){const t=T(n,"real","complex"),r=T(e,"imag","complex");Et(t.shape,r.shape,`real and imag shapes, ${t.shape} and ${r.shape}, must match in call to tf.complex().`);const s={real:t,imag:r};return F.runKernel(Vc,s)}const bn=O({complex_:A2});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tn(n,e,t,r){if(r==null)r=Vs(n);else if(r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(Do(n)||Oo(n)){if(r!=="float32"&&r!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${r}.`);return F.backend.createTensorFromGPUData(n,e||t,r)}if(!St(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(e!=null){dt(e);const s=Pe(e),a=Pe(t);x(s===a,()=>`Based on the provided shape, [${e}], the tensor should have ${s} values but has ${a}`);for(let i=0;i<t.length;++i){const o=t[i],u=i===t.length-1?o!==Pe(e.slice(i)):!0;x(t[i]===e[i]||!u,()=>`Error creating a new Tensor. Inferred shape (${t}) does not match the provided shape (${e}). `)}}return!St(n)&&!Array.isArray(n)&&(n=[n]),e=e||t,n=r!=="string"?$o(n,r):Wr(n,[],!0),F.makeTensor(n,e,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zt(n,e,t){const r=Nn(n,t);return Tn(n,e,r,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Un={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};class Ot{static join(e){return new Ot(e).slice()}constructor(e){if(this.shards=[],this.previousShardIndex=0,e==null||(e instanceof Array||(e=[e]),e=e.map(r=>St(r)?r.buffer:r),e.length===0))return;this.bufferUniformSize=e[0].byteLength;let t=0;for(let r=0;r<e.length;r++){const s=e[r];r!==e.length-1&&s.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const a=t+s.byteLength;this.shards.push({buffer:s,start:t,end:a}),t=a}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(e=0,t=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(e=isNaN(Number(e))?0:e,t=isNaN(Number(t))?0:t,e=Math.max(0,e),t=Math.min(this.byteLength,t),t<=e)return new ArrayBuffer(0);const r=this.findShardForByte(e);if(r===-1)throw new Error(`Could not find start shard for byte ${e}`);const s=t-e,a=new ArrayBuffer(s),i=new Uint8Array(a);let o=0;for(let u=r;u<this.shards.length;u++){const c=this.shards[u],p=e+o-c.start,b=o,S=Math.min(t,c.end)-c.start,A=new Uint8Array(c.buffer,p,S-p);if(i.set(A,b),o+=A.length,t<c.end)break}return a}findShardForByte(e){if(this.shards.length===0||e<0||e>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(e/this.bufferUniformSize),this.previousShardIndex;function t(s){return e<s.start?-1:e>=s.end?1:0}if(t(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;const r=I2(this.shards,t);return r===-1?-1:(this.previousShardIndex=r,this.previousShardIndex)}}function I2(n,e){let t=0,r=n.length;for(;t<=r;){const s=Math.floor((r-t)/2)+t,a=e(n[s]);if(a===0)return s;a<0?r=s:t=s+1}return-1}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function me(n,e){return F.tidy(n,e)}function Oe(n){Fo(n).forEach(t=>t.dispose())}function jt(n){return F.keep(n)}function O2(){return F.backendName}function D2(){return F.backend}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wn=4;async function F2(n,e){const t=[],r=[],s=Array.isArray(n)?n.map(i=>i.name):Object.keys(n);for(let i=0;i<s.length;++i){const o=s[i],u=Array.isArray(n)?n[i].tensor:n[o];if(u.dtype!=="float32"&&u.dtype!=="int32"&&u.dtype!=="bool"&&u.dtype!=="string"&&u.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${o}': ${u.dtype}`);const c={name:o,shape:u.shape,dtype:u.dtype};if(u.dtype==="string"){const f=new Promise(async p=>{const b=await u.bytes(),v=b.reduce((_,C)=>_+C.length,0)+wn*b.length,S=new Uint8Array(v);let A=0;for(let _=0;_<b.length;_++){const C=b[_],K=new Uint8Array(new Uint32Array([C.length]).buffer);S.set(K,A),A+=wn,S.set(C,A),A+=C.length}p(S)});r.push(f)}else r.push(u.data());e!=null&&(c.group=e),t.push(c)}const a=await Promise.all(r);return{data:L2(a),specs:t}}function Bo(n,e){const t=new Ot(n),r={};let s=0;for(const a of e){const i=C2(a,(o,u)=>t.slice(s+o,s+u));r[a.name]=jo(a,t.slice(s,s+i)),s+=i}return r}function C2(n,e){const t=Pe(n.shape);let r;if("quantization"in n){const s=n.quantization;r=Un[s.dtype]}else if(n.dtype==="string"){let s=0;for(let a=0;a<t;a++)s+=wn+new Uint32Array(e(s,s+wn))[0];return s}else r=Un[n.dtype];return t*r}async function R2(n,e){const t=Pe(n.shape);let r;if("quantization"in n){const s=n.quantization;r=Un[s.dtype]}else if(n.dtype==="string"){let s=0;for(let a=0;a<t;a++)s+=wn+new Uint32Array(await e(s,s+wn))[0];return s}else r=Un[n.dtype];return t*r}function jo(n,e){const t=n.name,r=n.dtype,s=n.shape,a=Pe(s);let i,o=0;if("quantization"in n){const u=n.quantization;if(u.dtype==="uint8"||u.dtype==="uint16"){if(!("min"in u&&"scale"in u))throw new Error(`Weight ${n.name} with quantization ${u.dtype} doesn't have corresponding metadata min and scale.`)}else if(u.dtype==="float16"){if(r!=="float32")throw new Error(`Weight ${n.name} is quantized with ${u.dtype} which only supports weights of type float32 not ${r}.`)}else throw new Error(`Weight ${n.name} has unknown quantization dtype ${u.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const c=Un[u.dtype],f=u.dtype==="uint8"?new Uint8Array(e):new Uint16Array(e);if(r==="float32")if(u.dtype==="uint8"||u.dtype==="uint16"){i=new Float32Array(f.length);for(let p=0;p<f.length;p++){const b=f[p];i[p]=b*u.scale+u.min}}else if(u.dtype==="float16")i=U2()(f);else throw new Error(`Unsupported quantization type ${u.dtype} for weight type float32.`);else if(r==="int32"){if(u.dtype!=="uint8"&&u.dtype!=="uint16")throw new Error(`Unsupported quantization type ${u.dtype} for weight type int32.`);i=new Int32Array(f.length);for(let p=0;p<f.length;p++){const b=f[p];i[p]=Math.round(b*u.scale+u.min)}}else throw new Error(`Unsupported dtype in weight '${t}': ${r}`);o+=a*c}else if(r==="string"){const u=Pe(n.shape);i=[];for(let c=0;c<u;c++){const f=new Uint32Array(e.slice(o,o+wn))[0];o+=wn;const p=new Uint8Array(e.slice(o,o+f));i.push(p),o+=f}}else{const u=Un[r];if(r==="float32")i=new Float32Array(e);else if(r==="int32")i=new Int32Array(e);else if(r==="bool")i=new Uint8Array(e);else if(r==="complex64"){i=new Float32Array(e);const c=new Float32Array(i.length/2),f=new Float32Array(i.length/2);for(let S=0;S<c.length;S++)c[S]=i[S*2],f[S]=i[S*2+1];const p=zt(c,s,"float32"),b=zt(f,s,"float32"),v=bn(p,b);return p.dispose(),b.dispose(),v}else throw new Error(`Unsupported dtype in weight '${t}': ${r}`);o+=a*u}return zt(i,s,r)}async function Ui(n,e,t){let r=new Uint8Array(e);for(;r.byteLength<t;){const{done:s,value:a}=await n.read();if(s&&a==null){const o=t-r.byteLength;throw new Error(`Reader is done but ${o} bytes are still expected`)}const i=new Uint8Array(r.length+a.byteLength);i.set(r,0),i.set(new Uint8Array(a),r.length),r=i}return r.buffer}async function Mo(n,e){const t={},r=n.getReader();let s=new ArrayBuffer(0);for(const a of e){const i=await R2(a,async(c,f)=>(s=await Ui(r,s,f),s.slice(c,f)));s=await Ui(r,s,i);const o=s.slice(0,i);s=s.slice(i);const u=jo(a,o);if(t[a.name]=u,O2()==="webgpu"){const c=D2();"uploadToGPU"in c&&Pe(u.shape)>=be().get("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD")&&c.uploadToGPU(u.dataId)}}return t}function L2(n){if(n===null)throw new Error(`Invalid input value: ${JSON.stringify(n)}`);let e=0;const t=[];n.forEach(a=>{if(e+=a.byteLength,t.push(a.byteLength===a.buffer.byteLength?a:new a.constructor(a)),!(a instanceof Float32Array||a instanceof Int32Array||a instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${a.constructor.name}`)});const r=new Uint8Array(e);let s=0;return t.forEach(a=>{r.set(new Uint8Array(a.buffer),s),s+=a.byteLength}),r.buffer}const si=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Wi(n){return si?Buffer.byteLength(n,"utf8"):new Blob([n]).size}function P2(n){if(si)return Buffer.from(n).toString("base64");const e=new Uint8Array(n);let t="";for(let r=0,s=e.length;r<s;r++)t+=String.fromCharCode(e[r]);return btoa(t)}function B2(n){if(si){const r=Buffer.from(n,"base64");return r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength)}const e=atob(n),t=new Uint8Array(e.length);for(let r=0;r<e.length;++r)t.set([e.charCodeAt(r)],r);return t.buffer}function j2(n){return Ot.join(n)}function Gi(n){const e="/";for(n=n.trim();n.endsWith(e);)n=n.slice(0,n.length-1);const t=n.split(e);return t[t.length-1]}function zo(n,e){const t={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,weightsManifest:e};return n.signature!=null&&(t.signature=n.signature),n.userDefinedMetadata!=null&&(t.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(t.modelInitializer=n.modelInitializer),n.initializerSignature!=null&&(t.initializerSignature=n.initializerSignature),n.trainingConfig!=null&&(t.trainingConfig=n.trainingConfig),t}function Vo(n,e,t){const r={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy};if(n.trainingConfig!=null&&(r.trainingConfig=n.trainingConfig),n.weightsManifest!=null){if(!e)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!t)throw new Error("modelJSON has weightsManifest but weightData is null");r.weightSpecs=e,r.weightData=t}return n.signature!=null&&(r.signature=n.signature),n.userDefinedMetadata!=null&&(r.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(r.modelInitializer=n.modelInitializer),n.initializerSignature!=null&&(r.initializerSignature=n.initializerSignature),r}async function ai(n,e){let t,r;return n.weightsManifest!=null&&([t,r]=await e(n.weightsManifest)),Vo(n,t,r)}function Zr(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:Wi(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:Wi(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:new Ot(n.weightData).byteLength}}function Da(n){const e=[];for(const t of n)e.push(...t.weights);return e}function M2(){const n=t=>{let r=t<<13,s=0;for(;!(r&8388608);)s-=8388608,r<<=1;return r&=-8388609,s+=947912704,r|s},e=new Uint32Array(2048);e[0]=0;for(let t=1;t<1024;t++)e[t]=n(t);for(let t=1024;t<2048;t++)e[t]=939524096+(t-1024<<13);return e}function z2(){const n=new Uint32Array(64);n[0]=0,n[31]=1199570944,n[32]=2147483648,n[63]=3347054592;for(let e=1;e<31;e++)n[e]=e<<23;for(let e=33;e<63;e++)n[e]=2147483648+(e-32<<23);return n}function V2(){const n=new Uint32Array(64);for(let e=0;e<64;e++)n[e]=1024;return n[0]=n[32]=0,n}function U2(){const n=M2(),e=z2(),t=V2();return r=>{const s=new ArrayBuffer(4*r.length),a=new Uint32Array(s);for(let i=0;i<r.length;i++){const o=r[i],u=n[t[o>>10]+(o&1023)]+e[o>>10];a[i]=u}return new Float32Array(s)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ie{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return Ie.instance==null&&(Ie.instance=new Ie),Ie.instance}static registerSaveRouter(e){Ie.getInstance().saveRouters.push(e)}static registerLoadRouter(e){Ie.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return Ie.getHandlers(e,"save")}static getLoadHandlers(e,t){return Ie.getHandlers(e,"load",t)}static getHandlers(e,t,r){const s=[];return(t==="load"?Ie.getInstance().loadRouters:Ie.getInstance().saveRouters).forEach(i=>{const o=i(e,r);o!==null&&s.push(o)}),s}}const W2=n=>Ie.registerSaveRouter(n),G2=n=>Ie.registerLoadRouter(n),K2=n=>Ie.getSaveHandlers(n),H2=(n,e)=>Ie.getLoadHandlers(n,e);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fa="tensorflowjs",Ca=1,jn="models_store",dn="model_info_store";function Uo(){if(!be().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const n=typeof window>"u"?self:window,e=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(e==null)throw new Error("The current browser does not appear to support IndexedDB.");return e}function Ra(n){const e=n.result;e.createObjectStore(jn,{keyPath:"modelPath"}),e.createObjectStore(dn,{keyPath:"modelPath"})}class Wn{constructor(e){if(this.indexedDB=Uo(),e==null||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,t){return new Promise((r,s)=>{const a=this.indexedDB.open(Fa,Ca);a.onupgradeneeded=()=>Ra(a),a.onsuccess=()=>{const i=a.result;if(t==null){const o=i.transaction(jn,"readonly"),c=o.objectStore(jn).get(this.modelPath);c.onsuccess=()=>{if(c.result==null)return i.close(),s(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));r(c.result.modelArtifacts)},c.onerror=f=>(i.close(),s(c.error)),o.oncomplete=()=>i.close()}else{t.weightData=Ot.join(t.weightData);const o=Zr(t),u=i.transaction(dn,"readwrite");let c=u.objectStore(dn),f;try{f=c.put({modelPath:this.modelPath,modelArtifactsInfo:o})}catch(b){return s(b)}let p;f.onsuccess=()=>{p=i.transaction(jn,"readwrite");const b=p.objectStore(jn);let v;try{v=b.put({modelPath:this.modelPath,modelArtifacts:t,modelArtifactsInfo:o})}catch(S){return s(S)}v.onsuccess=()=>r({modelArtifactsInfo:o}),v.onerror=S=>{c=u.objectStore(dn);const A=c.delete(this.modelPath);A.onsuccess=()=>(i.close(),s(v.error)),A.onerror=_=>(i.close(),s(v.error))}},f.onerror=b=>(i.close(),s(f.error)),u.oncomplete=()=>{p==null?i.close():p.oncomplete=()=>i.close()}}},a.onerror=i=>s(a.error)})}}Wn.URL_SCHEME="indexeddb://";const Wo=n=>be().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Wn.URL_SCHEME)?q2(n.slice(Wn.URL_SCHEME.length)):null;Ie.registerSaveRouter(Wo);Ie.registerLoadRouter(Wo);function q2(n){return new Wn(n)}function X2(n){return n.startsWith(Wn.URL_SCHEME)?n.slice(Wn.URL_SCHEME.length):n}class Y2{constructor(){this.indexedDB=Uo()}async listModels(){return new Promise((e,t)=>{const r=this.indexedDB.open(Fa,Ca);r.onupgradeneeded=()=>Ra(r),r.onsuccess=()=>{const s=r.result,a=s.transaction(dn,"readonly"),o=a.objectStore(dn).getAll();o.onsuccess=()=>{const u={};for(const c of o.result)u[c.modelPath]=c.modelArtifactsInfo;e(u)},o.onerror=u=>(s.close(),t(o.error)),a.oncomplete=()=>s.close()},r.onerror=s=>t(r.error)})}async removeModel(e){return e=X2(e),new Promise((t,r)=>{const s=this.indexedDB.open(Fa,Ca);s.onupgradeneeded=()=>Ra(s),s.onsuccess=()=>{const a=s.result,i=a.transaction(dn,"readwrite"),o=i.objectStore(dn),u=o.get(e);let c;u.onsuccess=()=>{if(u.result==null)return a.close(),r(new Error(`Cannot find model with path '${e}' in IndexedDB.`));{const f=o.delete(e),p=()=>{c=a.transaction(jn,"readwrite");const v=c.objectStore(jn).delete(e);v.onsuccess=()=>t(u.result.modelArtifactsInfo),v.onerror=S=>r(u.error)};f.onsuccess=p,f.onerror=b=>(p(),a.close(),r(u.error))}},u.onerror=f=>(a.close(),r(u.error)),i.oncomplete=()=>{c==null?a.close():c.oncomplete=()=>a.close()}},s.onerror=a=>r(s.error)})}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qt="/",ur="tensorflowjs_models",Go="info",J2="model_topology",Z2="weight_specs",Q2="weight_data",e3="model_metadata";function Ko(n){return{info:[ur,n,Go].join(qt),topology:[ur,n,J2].join(qt),weightSpecs:[ur,n,Z2].join(qt),weightData:[ur,n,Q2].join(qt),modelMetadata:[ur,n,e3].join(qt)}}function Ho(n){for(const e of Object.values(n))window.localStorage.removeItem(e)}function t3(n){const e=n.split(qt);if(e.length<3)throw new Error(`Invalid key format: ${n}`);return e.slice(1,e.length-1).join(qt)}function n3(n){return n.startsWith(Gn.URL_SCHEME)?n.slice(Gn.URL_SCHEME.length):n}class Gn{constructor(e){if(!be().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,e==null||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=Ko(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const t=JSON.stringify(e.modelTopology),r=JSON.stringify(e.weightSpecs),s=Zr(e),a=Ot.join(e.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(s)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,P2(a));const i={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:e.signature!=null?e.signature:void 0,userDefinedMetadata:e.userDefinedMetadata!=null?e.userDefinedMetadata:void 0,modelInitializer:e.modelInitializer!=null?e.modelInitializer:void 0,initializerSignature:e.initializerSignature!=null?e.initializerSignature:void 0,trainingConfig:e.trainingConfig!=null?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(i)),{modelArtifactsInfo:s}}catch{throw Ho(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${s.modelTopologyBytes}, weightSpecsBytes=${s.weightSpecsBytes}, weightDataBytes=${s.weightDataBytes}.`)}}}async load(){const e=JSON.parse(this.LS.getItem(this.keys.info));if(e==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(e.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const t={},r=JSON.parse(this.LS.getItem(this.keys.topology));if(r==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);t.modelTopology=r;const s=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(s==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);t.weightSpecs=s;const a=this.LS.getItem(this.keys.modelMetadata);if(a!=null){const o=JSON.parse(a);t.format=o.format,t.generatedBy=o.generatedBy,t.convertedBy=o.convertedBy,o.signature!=null&&(t.signature=o.signature),o.userDefinedMetadata!=null&&(t.userDefinedMetadata=o.userDefinedMetadata),o.modelInitializer!=null&&(t.modelInitializer=o.modelInitializer),o.initializerSignature!=null&&(t.initializerSignature=o.initializerSignature),o.trainingConfig!=null&&(t.trainingConfig=o.trainingConfig)}const i=this.LS.getItem(this.keys.weightData);if(i==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return t.weightData=B2(i),t}}Gn.URL_SCHEME="localstorage://";const qo=n=>be().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Gn.URL_SCHEME)?r3(n.slice(Gn.URL_SCHEME.length)):null;Ie.registerSaveRouter(qo);Ie.registerLoadRouter(qo);function r3(n){return new Gn(n)}class s3{constructor(){x(be().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),x(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const e={},t=ur+qt,r=qt+Go;for(let s=0;s<this.LS.length;++s){const a=this.LS.key(s);if(a.startsWith(t)&&a.endsWith(r)){const i=t3(a);e[i]=JSON.parse(this.LS.getItem(a))}}return e}async removeModel(e){e=n3(e);const t=Ko(e);if(this.LS.getItem(t.info)==null)throw new Error(`Cannot find model at path '${e}'`);const r=JSON.parse(this.LS.getItem(t.info));return Ho(t),r}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lr="://";class Je{constructor(){this.managers={}}static getInstance(){return Je.instance==null&&(Je.instance=new Je),Je.instance}static registerManager(e,t){x(e!=null,()=>"scheme must not be undefined or null."),e.endsWith(lr)&&(e=e.slice(0,e.indexOf(lr))),x(e.length>0,()=>"scheme must not be an empty string.");const r=Je.getInstance();x(r.managers[e]==null,()=>`A model store manager is already registered for scheme '${e}'.`),r.managers[e]=t}static getManager(e){const t=Je.getInstance().managers[e];if(t==null)throw new Error(`Cannot find model manager for scheme '${e}'`);return t}static getSchemes(){return Object.keys(Je.getInstance().managers)}}function ks(n){if(n.indexOf(lr)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${Je.getSchemes().join(",")}`);return{scheme:n.split(lr)[0],path:n.split(lr)[1]}}async function Xo(n,e,t=!1){x(n!==e,()=>`Old path and new path are the same: '${n}'`);const r=Ie.getLoadHandlers(n);x(r.length>0,()=>`Copying failed because no load handler is found for source URL ${n}.`),x(r.length<2,()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${n}.`);const s=r[0],a=Ie.getSaveHandlers(e);x(a.length>0,()=>`Copying failed because no save handler is found for destination URL ${e}.`),x(a.length<2,()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${e}.`);const i=a[0],o=ks(n).scheme,u=ks(n).path,c=o===ks(n).scheme,f=await s.load();t&&c&&await Je.getManager(o).removeModel(u);const p=await i.save(f);return t&&!c&&await Je.getManager(o).removeModel(u),p.modelArtifactsInfo}async function a3(){const n=Je.getSchemes(),e={};for(const t of n){const r=await Je.getManager(t).listModels();for(const s in r){const a=t+lr+s;e[a]=r[s]}}return e}async function i3(n){const e=ks(n);return Je.getManager(e.scheme).removeModel(e.path)}async function o3(n,e){return Xo(n,e,!1)}async function u3(n,e){return Xo(n,e,!0)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class c3{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,t){return fetch(e,t)}now(){return performance.now()}encode(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${t}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,t){return new TextDecoder(t).decode(e)}setTimeoutCustom(e,t){if(typeof window>"u"||!be().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(e,t);return}this.functionRefs.push(e),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},t),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",r=>{if(r.source===window&&r.data.name===this.messageName){r.stopPropagation();const s=this.functionRefs[r.data.index];s(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(e){return _o(e)}}if(be().get("IS_BROWSER")){be().setPlatform("browser",new c3);try{Je.registerManager(Gn.URL_SCHEME,new s3)}catch{}try{Je.registerManager(Wn.URL_SCHEME,new Y2)}catch{}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const l3={importFetch:()=>require("node-fetch")};let ha;class h3{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(e,t){return be().global.fetch!=null?be().global.fetch(e,t):(ha==null&&(ha=l3.importFetch()),ha(e,t))}now(){const e=process.hrtime();return e[0]*1e3+e[1]/1e6}encode(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${t}`);return this.textEncoder.encode(e)}decode(e,t){return e.length===0?"":new this.util.TextDecoder(t).decode(e)}isTypedArray(e){return this.util.types.isFloat32Array(e)||this.util.types.isInt32Array(e)||this.util.types.isUint8Array(e)||this.util.types.isUint8ClampedArray(e)}}be().get("IS_NODE")&&!be().get("IS_BROWSER")&&be().setPlatform("node",new h3);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zt(n,e="float32",t){return e=e||"float32",dt(n),new _a(n,e,t)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f3(n,e){const t=T(n,"x","cast");if(!lc(e))throw new Error(`Failed to cast to unknown dtype ${e}`);if(e==="string"&&t.dtype!=="string"||e!=="string"&&t.dtype==="string")throw new Error("Only strings can be casted to strings");const r={x:t},s={dtype:e};return F.runKernel(So,r,s)}const Ae=O({cast_:f3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function p3(n){const t={x:T(n,"x","clone","string_or_numeric")};return F.runKernel(Eo,t)}const mn=O({clone_:p3});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yo(n,e=!1){console.log(n.toString(e))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Ro();const d3={buffer:Zt,cast:Ae,clone:mn,print:Yo};N2(d3);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m3(n,e){let t=T(n,"a","add"),r=T(e,"b","add");[t,r]=Fe(t,r);const s={a:t,b:r};return F.runKernel(To,s)}const ae=O({add_:m3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function g3(n,e){let t=T(n,"a","floorDiv"),r=T(e,"b","floorDiv");[t,r]=Fe(t,r);const s={a:t,b:r};return F.runKernel(vl,s)}const Jo=O({floorDiv_:g3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function y3(n,e){let t=T(n,"a","div"),r=T(e,"b","div");if([t,r]=Fe(t,r),t.dtype==="int32"&&r.dtype==="int32")return Jo(t,r);const s={a:t,b:r},a={};return F.runKernel(ul,s,a)}const ye=O({div_:y3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function b3(n,e){let t=T(n,"a","mul"),r=T(e,"b","mul");[t,r]=Fe(t,r);const s={a:t,b:r};return F.runKernel(Zl,s)}const J=O({mul_:b3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w3(n){const e=T(n,"x","abs");if(e.dtype==="complex64"){const t={x:e};return F.runKernel(Uc,t)}else{const t={x:e};return F.runKernel(vc,t)}}const ft=O({abs_:w3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function v3(n){const t={x:T(n,"x","acos")};return F.runKernel(Nc,t)}const N3=O({acos_:v3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T3(n){const t={x:T(n,"x","acosh")};return F.runKernel(Tc,t)}const S3=O({acosh_:T3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function E3(n){x(Array.isArray(n),()=>"The argument passed to tf.addN() must be a list of tensors"),x(n.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${n.length}`);const e=n.map((s,a)=>T(s,`tensors${a}`,"addN")),t=e[0];e.forEach(s=>{if(s.dtype!==t.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),e.forEach(s=>{if(!Jt(s.shape,t.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const r=e;return F.runKernel(Sc,r)}const x3=O({addN_:E3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function k3(n,e=null,t=!1){const s={x:T(n,"x","all","bool")},a={axis:e,keepDims:t};return F.runKernel(Ec,s,a)}const _3=O({all_:k3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $3(n,e=null,t=!1){const s={x:T(n,"x","any","bool")},a={axis:e,keepDims:t};return F.runKernel(xc,s,a)}const A3=O({any_:$3});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function I3(n,e=0){const r={x:T(n,"x","argMax")},s={axis:e};return F.runKernel(kc,r,s)}const O3=O({argMax_:I3});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D3(n,e=0){const r={x:T(n,"x","argMin")},s={axis:e};return F.runKernel(_c,r,s)}const F3=O({argMin_:D3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function C3(n){const t={x:T(n,"x","asin")};return F.runKernel($c,t)}const R3=O({asin_:C3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function L3(n){const t={x:T(n,"x","asinh")};return F.runKernel(Ac,t)}const P3=O({asinh_:L3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function B3(n){const t={x:T(n,"x","atan")};return F.runKernel(Ic,t)}const j3=O({atan_:B3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function M3(n,e){let t=T(n,"a","atan2"),r=T(e,"b","atan2");[t,r]=Fe(t,r);const s={a:t,b:r};return F.runKernel(Dc,s)}const z3=O({atan2_:M3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function V3(n){const t={x:T(n,"x","atanh")};return F.runKernel(Oc,t)}const U3=O({atanh_:V3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function W3(n,e,t,r,s,a,i="channelsLast"){const[o,u]=Gr(e);let c;if(i==="channelsLast")c=[o,u,n[3],n[3]];else if(i==="channelsFirst")c=[o,u,n[1],n[1]];else throw new Error(`Unknown dataFormat ${i}`);return ii(n,c,t,r,s,a,!1,i)}function ii(n,e,t,r,s,a,i=!1,o="channelsLast"){let[u,c,f,p]=[-1,-1,-1,-1];if(o==="channelsLast")[u,c,f,p]=n;else if(o==="channelsFirst")[u,p,c,f]=n;else throw new Error(`Unknown dataFormat ${o}`);const[b,v,,S]=e,[A,_]=Gr(t),[C,K]=Gr(r),U=La(b,C),B=La(v,K),{padInfo:W,outHeight:G,outWidth:Q}=H3(s,c,f,A,_,U,B,a,o),re=i?S*p:S;let q;return o==="channelsFirst"?q=[u,re,G,Q]:o==="channelsLast"&&(q=[u,G,Q,re]),{batchSize:u,dataFormat:o,inHeight:c,inWidth:f,inChannels:p,outHeight:G,outWidth:Q,outChannels:re,padInfo:W,strideHeight:A,strideWidth:_,filterHeight:b,filterWidth:v,effectiveFilterHeight:U,effectiveFilterWidth:B,dilationHeight:C,dilationWidth:K,inShape:n,outShape:q,filterShape:e}}function G3(n,e,t,r,s){r==null&&(r=K3(n,e,t));const a=n[0],i=n[1],o=Ds((a-e+2*r)/t+1,s),u=Ds((i-e+2*r)/t+1,s);return[o,u]}function K3(n,e,t,r=1){const s=La(e,r);return Math.floor((n[0]*(t-1)-t+s)/2)}function Gr(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function La(n,e){return e<=1?n:n+(n-1)*(e-1)}function H3(n,e,t,r,s,a,i,o,u){let c,f,p;if(typeof n=="number"){c={top:n,bottom:n,left:n,right:n,type:n===0?"VALID":"NUMBER"};const v=G3([e,t],a,r,n,o);f=v[0],p=v[1]}else if(n==="same"){f=Math.ceil(e/r),p=Math.ceil(t/s);const b=Math.max(0,(f-1)*r+a-e),v=Math.max(0,(p-1)*s+i-t),S=Math.floor(b/2),A=b-S,_=Math.floor(v/2),C=v-_;c={top:S,bottom:A,left:_,right:C,type:"SAME"}}else if(n==="valid")c={top:0,bottom:0,left:0,right:0,type:"VALID"},f=Math.ceil((e-a+1)/r),p=Math.ceil((t-i+1)/s);else if(typeof n=="object"){const b=u==="channelsLast"?n[1][0]:n[2][0],v=u==="channelsLast"?n[1][1]:n[2][1],S=u==="channelsLast"?n[2][0]:n[3][0],A=u==="channelsLast"?n[2][1]:n[3][1];c={top:b,bottom:v,left:S,right:A,type:b===0&&v===0&&S===0&&A===0?"VALID":"EXPLICIT"},f=Ds((e-a+b+v)/r+1,o),p=Ds((t-i+S+A)/s+1,o)}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:c,outHeight:f,outWidth:p}}function Ds(n,e){if(!e)return Math.trunc(n);switch(e){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error(`Unknown roundingMode ${e}`)}}function Fs(n){const[e,t,r]=Gr(n);return e===1&&t===1&&r===1}function Sn(n,e){return Fs(n)||Fs(e)}function pr(n){return Gr(n).every(e=>e>0)}function Dt(n,e,t){if(t!=null){if(typeof e=="string")throw Error(`Error in ${n}: pad must be an integer when using dimRoundingMode ${t} but got pad ${e}.`);if(typeof e=="number")x(Ur(e),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${t} but got pad ${e}.`);else if(typeof e=="object")e.forEach(r=>{r.forEach(s=>{x(Ur(s),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${t} but got pad ${s}.`)})});else throw Error(`Error in ${n}: Unknown padding parameter: ${e}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function q3(n,e){const r={x:T(n,"x","reshape","string_or_numeric")},s={shape:e};return F.runKernel(b1,r,s)}const V=O({reshape_:q3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function X3(n,e,t,r,s){const a=T(n,"x","avgPool","float32"),i=1;x(Sn(t,i),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${t} and dilations '${i}'`);let o=a,u=!1;a.rank===3&&(u=!0,o=V(a,[1,a.shape[0],a.shape[1],a.shape[2]])),x(o.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${o.rank}.`),Dt("avgPool",r,s);const c={x:o},f={filterSize:e,strides:t,pad:r,dimRoundingMode:s};let p=F.runKernel(Fc,c,f);return p=Ae(p,a.dtype),u?V(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const Zo=O({avgPool_:X3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Y3(n,e,t,r,s,a="NDHWC"){const i=T(n,"x","avgPool3d","float32");let o=i,u=!1;i.rank===4&&(u=!0,o=V(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),x(o.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${o.rank}.`),x(a==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),x(typeof t=="number"&&t>0||Array.isArray(t)&&t[0]>0&&t[1]>0&&t[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${t}'`),Dt("avgPool3d",r,s);const c={x:o},f={filterSize:e,strides:t,pad:r,dimRoundingMode:s,dataFormat:a};let p=F.runKernel(Cc,c,f);return p=Ae(p,o.dtype),u?V(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const J3=O({avgPool3d_:Y3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z3(n,e=0){x(n.length>=1,()=>"Pass at least one tensor to concat");const t=Os(n,"tensors","concat","string_or_numeric");if(t[0].dtype==="complex64"&&t.forEach(a=>{if(a.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${a.dtype}. `)}),t.length===1)return mn(t[0]);const r=t,s={axis:e};return F.runKernel(Wc,r,s)}const Ge=O({concat_:Z3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q3(n,e,t=!1,r=!1){let s=T(n,"a","matMul"),a=T(e,"b","matMul");[s,a]=Fe(s,a);const i={a:s,b:a},o={transposeA:t,transposeB:r};return F.runKernel(Rc,i,o)}const Se=O({matMul_:Q3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eh(n){const t={x:T(n,"x","sigmoid","float32")};return F.runKernel(C1,t)}const zn=O({sigmoid_:eh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function th(n,e,t){const r=T(n,"x","slice","string_or_numeric");if(r.rank===0)throw new Error("Slicing scalar is not possible");const s={x:r},a={begin:e,size:t};return F.runKernel(I1,s,a)}const fe=O({slice_:th});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nh(n){const t={x:T(n,"x","tanh","float32")};return F.runKernel(e2,t)}const Pa=O({tanh_:nh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rh(n,e,t,r,s,a){const i=T(n,"forgetBias","basicLSTMCell"),o=T(e,"lstmKernel","basicLSTMCell"),u=T(t,"lstmBias","basicLSTMCell"),c=T(r,"data","basicLSTMCell"),f=T(s,"c","basicLSTMCell"),p=T(a,"h","basicLSTMCell"),b=Ge([c,p],1),v=Se(b,o),S=ae(v,u),A=S.shape[0],_=S.shape[1]/4,C=[A,_],K=fe(S,[0,0],C),U=fe(S,[0,_],C),B=fe(S,[0,_*2],C),W=fe(S,[0,_*3],C),G=ae(J(zn(K),Pa(U)),J(f,zn(ae(i,B)))),Q=J(Pa(G),zn(W));return[G,Q]}const sh=O({basicLSTMCell_:rh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ah(n,e,t){const r=T(n,"x","batchToSpaceND"),s=e.reduce((o,u)=>o*u);x(r.rank>=1+e.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${e.length}`),x(t.length===e.length,()=>`crops.length is ${t.length} but should be equal to blockShape.length  ${e.length}`),x(r.shape[0]%s===0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${e.join(" * ")} === ${s}`);const a={x:r},i={blockShape:e,crops:t};return F.runKernel(Lc,a,i)}const Qo=O({batchToSpaceND_:ah});function ih(n){let e;return n.rank===0||n.rank===1?e=V(n,[1,1,1,n.size]):n.rank===2?e=V(n,[1,1,n.shape[0],n.shape[1]]):n.rank===3?e=V(n,[1,n.shape[0],n.shape[1],n.shape[2]]):e=n,e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oh(n,e,t,r,s,a){a==null&&(a=.001);const i=T(n,"x","batchNorm"),o=T(e,"mean","batchNorm"),u=T(t,"variance","batchNorm");let c;s!=null&&(c=T(s,"scale","batchNorm"));let f;r!=null&&(f=T(r,"offset","batchNorm")),x(o.rank===u.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),x(f==null||o.rank===f.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),x(c==null||o.rank===c.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const b={x:ih(i),scale:c,offset:f,mean:o,variance:u},v={varianceEpsilon:a},S=F.runKernel(Nl,b,v);return V(S,i.shape)}const Us=O({batchNorm_:oh});function uh(n,e,t,r,s,a){const i=T(n,"x","batchNorm"),o=T(e,"mean","batchNorm"),u=T(t,"variance","batchNorm");let c;s!=null&&(c=T(s,"scale","batchNorm"));let f;return r!=null&&(f=T(r,"offset","batchNorm")),x(i.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${i.rank}.`),x(o.rank===2||o.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${o.rank}.`),x(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${u.rank}.`),c!=null&&x(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${c.rank}.`),f!=null&&x(f.rank===2||f.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${f.rank}.`),Us(i,o,u,f,c,a)}const ch=O({batchNorm2d_:uh});function lh(n,e,t,r,s,a){const i=T(n,"x","batchNorm"),o=T(e,"mean","batchNorm"),u=T(t,"variance","batchNorm");let c;s!=null&&(c=T(s,"scale","batchNorm"));let f;return r!=null&&(f=T(r,"offset","batchNorm")),x(i.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${i.rank}.`),x(o.rank===3||o.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${o.rank}.`),x(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${u.rank}.`),c!=null&&x(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${c.rank}.`),f!=null&&x(f.rank===3||f.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${f.rank}.`),Us(i,o,u,f,c,a)}const hh=O({batchNorm3d_:lh});function fh(n,e,t,r,s,a){const i=T(n,"x","batchNorm"),o=T(e,"mean","batchNorm"),u=T(t,"variance","batchNorm");let c;s!=null&&(c=T(s,"scale","batchNorm"));let f;return r!=null&&(f=T(r,"offset","batchNorm")),x(i.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${i.rank}.`),x(o.rank===4||o.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${o.rank}.`),x(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${u.rank}.`),c!=null&&x(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${c.rank}.`),f!=null&&x(f.rank===4||f.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${f.rank}.`),Us(i,o,u,f,c,a)}const ph=O({batchNorm4d_:fh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dh(n,e,t){const r=T(n,"x","bincount"),s=T(e,"weights","bincount");x(r.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`),x(t>=0,()=>`size must be non-negative, but got ${t}.`),x(s.size===r.size||s.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${s.shape}.`);const a={x:r,weights:s},i={size:t};return F.runKernel(Pc,a,i)}const eu=O({bincount_:dh});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mh(n,e){const t=T(n,"x","bitwiseAnd"),r=T(e,"y","bitwiseAnd");if(!Jt(t.shape,r.shape))throw new Error(`BitwiseAnd: Tensors must have the same shape. x: ${t.shape}, y: ${r.shape}`);if(t.dtype!=="int32"||r.dtype!=="int32")throw new Error(`BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ${t.dtype} and type of y: ${r.dtype}`);const s={a:t,b:r};return F.runKernel(Bc,s)}const gh=O({bitwiseAnd_:mh});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yh(n,e){const t=T(n,"s0","broadcastArgs","int32"),r=T(e,"s1","broadcastArgs","int32");if(t.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${t.rank}`);if(r.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${r.rank}`);const s={s0:t,s1:r};return F.runKernel(jc,s)}const bh=O({broadcastArgs_:yh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wh(n,e){let t=T(n,"broadcastTo","x");const r=t.shape;if(dt(e),e.length<t.rank)throw new Error(`broadcastTo(): shape.length=${e.length} < input.rank=${t.rank}.`);if(e.length>t.rank){const c=t.shape.slice();for(;c.length<e.length;)c.unshift(1);t=V(t,c)}const s=t.shape,a=Array.from(e);for(let c=e.length-1;c>=0;c--)if(s[c]===e[c])a[c]=1;else if(t.shape[c]!==1)throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${e}].`);if(a.map((c,f)=>c>1?f:-1).filter(c=>c>=0).length===0)return mn(t);const o={x:t},u={reps:a};return F.runKernel(xo,o,u)}const _s=O({broadcastTo_:wh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vh(n){const t={x:T(n,"x","ceil","float32")};return F.runKernel(Mc,t)}const Nh=O({ceil_:vh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qr(n,e,t){dt(n),t=t||Vs(e);const r={shape:n,value:e,dtype:t};return F.runKernel(yl,{},r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Th(n,e,t){const r=T(n,"x","clipByValue");if(x(e<=t,()=>`Error in clip: min (${e}) must be less than or equal to max (${t}).`),e===t)return Qr(r.shape,e,r.dtype);const s={x:r},a={clipValueMin:e,clipValueMax:t};return F.runKernel(zc,s,a)}const tu=O({clipByValue_:Th});function Sh(n){return Ge(n,0)}const Eh=O({concat1d_:Sh});function xh(n,e){return Ge(n,e)}const kh=O({concat2d_:xh});function _h(n,e){return Ge(n,e)}const $h=O({concat3d_:_h});function Ah(n,e){return Ge(n,e)}const Ih=O({concat4d_:Ah});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Oh(n,e,t,r,s="NHWC",a=[1,1],i){const o=T(n,"x","conv2d","float32"),u=T(e,"filter","conv2d","float32");let c=o,f=!1;o.rank===3&&(f=!0,c=V(o,[1,o.shape[0],o.shape[1],o.shape[2]])),x(c.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${c.rank}.`),x(u.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${u.rank}.`),Dt("conv2d",r,i);const p=s==="NHWC"?c.shape[3]:c.shape[1];x(p===u.shape[2],()=>`Error in conv2d: depth of input (${p}) must match input depth for filter ${u.shape[2]}.`),x(Sn(t,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${t} and dilations '${a}'`),x(pr(a),()=>"Error in conv2D: Dilated rates should be larger than 0."),x(pr(t),()=>"Error in conv2D: Strides should be larger than 0.");const b={x:c,filter:u},v={strides:t,pad:r,dataFormat:s,dilations:a,dimRoundingMode:i},S=F.runKernel(Gc,b,v);return f?V(S,[S.shape[1],S.shape[2],S.shape[3]]):S}const Ws=O({conv2d_:Oh});function Dh(n,e,t,r,s="NWC",a=1,i){const o=T(n,"x","conv1d"),u=T(e,"filter","conv1d");let c=o,f=!1;o.rank===2&&(f=!0,c=V(o,[1,o.shape[0],o.shape[1]])),x(c.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${c.rank}.`),x(u.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${u.rank}.`),Dt("conv1d",r,i),x(c.shape[2]===u.shape[1],()=>`Error in conv1d: depth of input (${c.shape[2]}) must match input depth for filter ${u.shape[1]}.`),x(Sn(t,a),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${t} and dilation '${a}'`),x(pr(a),()=>"Error in conv1D: Dilated rates should be larger than 0."),x(pr(t),()=>"Error in conv1D: Stride should be larger than 0."),x(s==="NWC",()=>`Error in conv1d: got dataFormat of ${s} but only NWC is currently supported.`);const p=V(u,[1,u.shape[0],u.shape[1],u.shape[2]]),b=V(c,[c.shape[0],1,c.shape[1],c.shape[2]]),_=Ws(b,p,[1,t],r,"NHWC",[1,a],i);return f?V(_,[_.shape[2],_.shape[3]]):V(_,[_.shape[0],_.shape[2],_.shape[3]])}const Fh=O({conv1d_:Dh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ch(n,e,t,r,s,a="NHWC",i){x(n.length===e.rank,()=>`Length of inShape (${n.length}) and rank of dy (${e.rank}) must match`);let o=n,u=e,c=!1;e.rank===3&&(c=!0,u=V(e,[1,e.shape[0],e.shape[1],e.shape[2]]),o=[1,n[0],n[1],n[2]]),x(o.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${o.length}.`),x(u.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${u.rank}`),x(t.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${t.rank}`);const f=a==="NHWC"?o[3]:o[1],p=a==="NHWC"?u.shape[3]:u.shape[1];x(f===t.shape[2],()=>`Error in conv2dDerInput: depth of input (${f}) must match input depth for filter ${t.shape[2]}.`),x(p===t.shape[3],()=>`Error in conv2dDerInput: depth of output (${p}) must match output depth for filter ${t.shape[3]}.`),Dt("conv2dDerInput",s,i);const b={dy:u,filter:t},v={strides:r,pad:s,dataFormat:a,dimRoundingMode:i,inputShape:o},S=F.runKernel(Hc,b,v);return c?V(S,[S.shape[1],S.shape[2],S.shape[3]]):S}const nu=O({conv2DBackpropInput_:Ch});function Rh(n,e,t,r,s,a){const i=T(n,"x","conv2dTranspose"),o=T(e,"filter","conv2dTranspose");return nu(t,i,o,r,s,"NHWC",a)}const Lh=O({conv2dTranspose_:Rh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ph(n,e,t,r,s="NDHWC",a=[1,1,1]){const i=T(n,"x","conv3d"),o=T(e,"filter","conv3d");let u=i,c=!1;i.rank===4&&(c=!0,u=V(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),x(u.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${u.rank}.`),x(o.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${o.rank}.`),x(u.shape[4]===o.shape[3],()=>`Error in conv3d: depth of input (${u.shape[4]}) must match input depth for filter ${o.shape[3]}.`),x(Sn(t,a),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${t} and dilations '${a}'`),x(s==="NDHWC",()=>`Error in conv3d: got dataFormat of ${s} but only NDHWC is currently supported.`),x(pr(a),()=>"Error in conv3D: Dilated rates should be larger than 0."),x(pr(t),()=>"Error in conv3D: Strides should be larger than 0.");const f={x:u,filter:o},p={strides:t,pad:r,dataFormat:s,dilations:a},b=F.runKernel(qc,f,p);return c?V(b,[b.shape[1],b.shape[2],b.shape[3],b.shape[4]]):b}const Bh=O({conv3d_:Ph});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jh(n,e,t,r,s){x(n.length===e.rank,()=>`Length of inShape (${n.length}) and rank of dy (${e.rank}) must match`);let a=n,i=e,o=!1;e.rank===4&&(o=!0,i=V(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]]),a=[1,n[0],n[1],n[2],n[3]]);const u=a[4],c=i.shape[4];x(a.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${a.length}.`),x(i.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${i.rank}`),x(t.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${t.rank}`),x(u===t.shape[3],()=>`Error in conv3dDerInput: depth of input (${u}) must match input depth for filter ${t.shape[3]}.`),x(c===t.shape[4],()=>`Error in conv3dDerInput: depth of output (${c}) must match output depth for filter ${t.shape[4]}.`);const f={dy:i,filter:t},p={pad:s,strides:r,inputShape:a},b=F.runKernel(Xc,f,p);return o?V(b,[b.shape[1],b.shape[2],b.shape[3],b.shape[4]]):b}const Mh=O({conv3DBackpropInput_:jh});function zh(n,e,t,r,s){const a=T(n,"x","conv3dTranspose"),i=T(e,"filter","conv3dTranspose");return Mh(t,a,i,r,s)}const Vh=O({conv3dTranspose_:zh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Uh(n){const t={x:T(n,"x","cos","float32")};return F.runKernel(Yc,t)}const Wh=O({cos_:Uh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gh(n){const t={x:T(n,"x","cosh","float32")};return F.runKernel(Jc,t)}const Kh=O({cosh_:Gh});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hh(n,e=0,t=!1,r=!1){const a={x:T(n,"x","cumprod")},i={axis:e,exclusive:t,reverse:r};return F.runKernel(Zc,a,i)}const qh=O({cumprod_:Hh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xh(n,e=0,t=!1,r=!1){const a={x:T(n,"x","cumsum")},i={axis:e,exclusive:t,reverse:r};return F.runKernel(Qc,a,i)}const Yh=O({cumsum_:Xh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jh(n,e,t,r=!1){const s=T(n,"x","denseBincount"),a=T(e,"weights","denseBincount");x(s.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${s.dtype}`),x(s.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${s.rank}.`),x(t>=0,()=>`size must be non-negative, but got ${t}.`),x(a.size===s.size||a.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${s.shape}, weights shape: ${a.shape}.`);const i={x:s,weights:a},o={size:t,binaryOutput:r};return F.runKernel(tl,i,o)}const Zh=O({denseBincount_:Jh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qh(n,e,t="NHWC"){const r=T(n,"x","depthToSpace","float32"),s=t==="NHWC"?r.shape[1]:r.shape[2],a=t==="NHWC"?r.shape[2]:r.shape[3],i=t==="NHWC"?r.shape[3]:r.shape[1];x(e>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${e}`),x(s*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${s} and ${e}  for depthToSpace with input shape
    ${r.shape}`),x(a*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${a} and ${e} for depthToSpace with input shape
        ${r.shape}`),x(i%(e*e)===0,()=>`Dimension size must be evenly divisible by ${e*e} but is ${i} for depthToSpace with input shape ${r.shape}`);const o={x:r},u={blockSize:e,dataFormat:t};return F.runKernel(nl,o,u)}const ef=O({depthToSpace_:Qh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tf(n,e,t,r,s="NHWC",a=[1,1],i){const o=T(n,"x","depthwiseConv2d","float32"),u=T(e,"filter","depthwiseConv2d","float32");let c=o,f=!1;o.rank===3&&(f=!0,c=V(o,[1,o.shape[0],o.shape[1],o.shape[2]])),x(c.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${c.rank}.`),x(u.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${u.rank}.`);const p=s==="NHWC"?c.shape[3]:c.shape[1];x(p===u.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${p}) must match the inChannels dimension in filter ${u.shape[2]}.`),Dt("depthwiseConv2d",r,i);const b={x:c,filter:u},v={strides:t,pad:r,dataFormat:s,dilations:a,dimRoundingMode:i},S=F.runKernel(rl,b,v);return f?V(S,[S.shape[1],S.shape[2],S.shape[3]]):S}const oi=O({depthwiseConv2d_:tf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nf(n){const t={x:T(n,"x","diag")};return F.runKernel(il,t)}const rf=O({diag_:nf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sf(n,e,t,r,s=[1,1],a="NHWC"){const i=T(n,"x","dilation2d"),o=T(e,"filter","dilation2d");x(i.rank===3||i.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${i.rank}.`),x(o.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${o.rank}.`),x(a==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${a}`);let u=i,c=!1;i.rank===3&&(u=V(i,[1,i.shape[0],i.shape[1],i.shape[2]]),c=!0),x(u.shape[3]===o.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${u.shape[3]} vs ${o.shape[2]}`);const f={x:u,filter:o},p={strides:t,pad:r,dilations:s},b=F.runKernel(ol,f,p);return c?V(b,[b.shape[1],b.shape[2],b.shape[3]]):b}const af=O({dilation2d_:sf});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function of(n,e){const t=[];for(let r=0;r<e.length;r++){const s=n[n.length-r-1],a=e.length-r-1,i=e[a];(s==null||s===1&&i>1)&&t.unshift(a)}return t}function ze(n,e){const t=Math.max(n.length,e.length),r=new Array(t);for(let s=0;s<t;s++){let a=n[n.length-s-1];a==null&&(a=1);let i=e[e.length-s-1];if(i==null&&(i=1),a===1)r[t-s-1]=i;else if(i===1)r[t-s-1]=a;else if(a!==i){const o=`Operands could not be broadcast together with shapes ${n} and ${e}.`;throw Error(o)}else r[t-s-1]=a}return r}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uf(n,e){let t=T(n,"a","equal","string_or_numeric"),r=T(e,"b","equal","string_or_numeric");[t,r]=Fe(t,r),ze(t.shape,r.shape);const s={a:t,b:r};return F.runKernel(fl,s)}const ru=O({equal_:uf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cf(n,e,t){const r=T(e,"a","where"),s=T(t,"b","where"),a=T(n,"condition","where","bool"),i=ze(ze(a.shape,r.shape),s.shape),o=_s(a,i),u=_s(r,i),c=_s(s,i),f={condition:o,t:u,e:c};return F.runKernel($1,f)}const gn=O({where_:cf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lf(n){const t={x:T(n,"x","zerosLike")};return F.runKernel(i2,t)}const pt=O({zerosLike_:lf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hf(n,e){let t=T(n,"a","div"),r=T(e,"b","div");[t,r]=Fe(t,r);const s=ye(t,r),a=pt(s),i=ru(r,a);return gn(i,a,s)}const ff=O({divNoNan_:hf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pf(n,e){const t=T(n,"t1","dot"),r=T(e,"t2","dot");x((t.rank===1||t.rank===2)&&(r.rank===1||r.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${t.rank} and ${r.rank}.`);const s=t.rank===1?t.size:t.shape[1],a=r.rank===1?r.size:r.shape[0];if(x(s===a,()=>`Error in dot: inner dimensions of inputs must match, but got ${s} and ${a}.`),t.rank===1&&r.rank===1){const i=V(t,[1,-1]),o=V(r,[-1,1]),u=Se(i,o);return V(u,[])}else if(t.rank===1&&r.rank===2){const i=V(t,[1,-1]),o=V(r,[r.shape[0],r.shape[1]]),u=Se(i,o);return V(u,[u.size])}else if(t.rank===2&&r.rank===1){const i=V(r,[-1,1]),o=Se(t,i);return V(o,[o.size])}else{const i=V(r,[r.shape[0],r.shape[1]]);return Se(t,i)}}const df=O({dot_:pf});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mf(n,...e){const t=e.map((s,a)=>T(s,`tensors${a}`,"einsum")),r={equation:n};return F.runKernel(cl,t,r)}const cr=O({einsum_:mf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gf(n){const t={x:T(n,"x","elu","float32")};return F.runKernel(ll,t)}const su=O({elu_:gf});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yf(n,e){const t=T(n,"x","ensureShape","string_or_numeric");if(!ic(t.shape,e))throw new Error(`EnsureShape: Shape of tensor ${t.shape} is not compatible with expected shape ${e}`);return n}const bf=O({ensureShape_:yf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wf(n){let e=T(n,"x","erf");x(e.dtype==="int32"||e.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),e.dtype==="int32"&&(e=Ae(e,"float32"));const t={x:e};return F.runKernel(hl,t)}const vf=O({erf_:wf});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nf(n,e,t){const r=n.length+e.length,s=[];let a=0,i=0;for(let o=0;o<r;o++)t.indexOf(o)===-1?s.push(n[a++]):s.push(e[i++]);return s}function Gs(n,e){const t=e.map(r=>1);return Nf(n,t,e)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tf(n,e=null,t=!1){const s={x:T(n,"x","max")},a={reductionIndices:e,keepDims:t};return F.runKernel(zl,s,a)}const hr=O({max_:Tf});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sf(n,e=null,t=!1){const s={x:T(n,"x","min")},a={axis:e,keepDims:t};return F.runKernel(Hl,s,a)}const Ba=O({min_:Sf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ef(n,e){let t=T(n,"base","pow"),r=T(e,"exp","pow");[t,r]=Fe(t,r);const s={a:t,b:r};return F.runKernel(u1,s)}const Kr=O({pow_:Ef});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ve(n,e){if((St(n)&&e!=="string"||Array.isArray(n))&&e!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(e==="string"&&St(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Tn(n,[],[],e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xf(n){const t={x:T(n,"x","sqrt","float32")};return F.runKernel(L1,t)}const Qt=O({sqrt_:xf});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kf(n){const e=T(n,"x","square"),t={};return F.runKernel("Square",{x:e},t)}const At=O({square_:kf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _f(n,e=null,t=!1){let r=T(n,"x","sum");r.dtype==="bool"&&(r=Ae(r,"int32"));const s={x:r},a={axis:e,keepDims:t};return F.runKernel(P1,s,a)}const $e=O({sum_:_f});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $f(n,e="euclidean",t=null,r=!1){n=T(n,"x","norm");const s=au(n,e,t);let a=s.shape;if(r){const i=zs(t,n.shape);a=Gs(s.shape,i)}return V(s,a)}function au(n,e,t=null){if(n.rank===0)return ft(n);if(n.rank!==1&&t===null)return au(V(n,[-1]),e,t);if(n.rank===1||typeof t=="number"||Array.isArray(t)&&t.length===1){if(e===1)return $e(ft(n),t);if(e===1/0)return hr(ft(n),t);if(e===-1/0)return Ba(ft(n),t);if(e==="euclidean"||e===2)return Qt($e(Kr(ft(n),ve(2,"int32")),t));throw new Error(`Error in norm: invalid ord value: ${e}`)}if(Array.isArray(t)&&t.length===2){if(e===1)return hr($e(ft(n),t[0]),t[1]-1);if(e===1/0)return hr($e(ft(n),t[1]),t[0]);if(e===-1/0)return Ba($e(ft(n),t[1]),t[0]);if(e==="fro"||e==="euclidean")return Qt($e(At(n),t));throw new Error(`Error in norm: invalid ord value: ${e}`)}throw new Error(`Error in norm: invalid axis: ${t}`)}const Ks=O({norm_:$f});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Af(n,e=null,t=!1){return Ks(n,"euclidean",e,t)}const If=O({euclideanNorm_:Af});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Of(n){const t={x:T(n,"x","exp")};return F.runKernel(pl,t)}const en=O({exp_:Of});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Df(n,e=0){const t=T(n,"x","expandDims","string_or_numeric");x(e<=t.rank,()=>"Axis must be <= rank of the tensor");const r={input:t},s={dim:e};return F.runKernel(dl,r,s)}const Tt=O({expandDims_:Df});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ff(n){const t={x:T(n,"x","expm1")};return F.runKernel(ml,t)}const Cf=O({expm1_:Ff});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rf(n,e){const t=T(n,"x","tile","string_or_numeric");x(t.rank===e.length,()=>`Error in transpose: rank of input ${t.rank} must match length of reps ${e}.`);const r={x:t},s={reps:e};return F.runKernel(xo,r,s)}const Vr=O({tile_:Rf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lf(n,e,t,r="float32"){e==null&&(e=n);const s=Zt([n,e],r),a=n<=e?n:e;for(let o=0;o<a;++o)s.set(1,o,o);const i=V(s.toTensor(),[n,e]);if(t==null)return i;if(t.length===1)return Vr(Tt(i,0),[t[0],1,1]);if(t.length===2)return Vr(Tt(Tt(i,0),0),[t[0],t[1],1,1]);if(t.length===3)return Vr(Tt(Tt(Tt(i,0),0),0),[t[0],t[1],t[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${t.length}D.`)}const iu=O({eye_:Lf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pf(n){const t={x:T(n,"x","floor","float32")};return F.runKernel(wl,t)}const ou=O({floor_:Pf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bf(n,e,t=0,r=0){const s=T(n,"x","gather"),a=T(e,"indices","gather","int32"),i={x:s,indices:a},o={axis:t,batchDims:r};return F.runKernel(Tl,i,o)}const uu=O({gather_:Bf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jf(n,e){let t=T(n,"a","greater","string_or_numeric"),r=T(e,"b","greater","string_or_numeric");[t,r]=Fe(t,r),ze(t.shape,r.shape);const s={a:t,b:r};return F.runKernel(El,s)}const Hs=O({greater_:jf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mf(n,e){let t=T(n,"a","greaterEqual","string_or_numeric"),r=T(e,"b","greaterEqual","string_or_numeric");[t,r]=Fe(t,r),ze(t.shape,r.shape);const s={a:t,b:r};return F.runKernel(xl,s)}const cu=O({greaterEqual_:Mf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zf(n){const t={input:T(n,"input","imag")};return F.runKernel(_l,t)}const qs=O({imag_:zf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vf(n){const t={x:T(n,"x","isFinite")};return F.runKernel($l,t)}const Uf=O({isFinite_:Vf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wf(n){const t={x:T(n,"x","isInf")};return F.runKernel(Al,t)}const Gf=O({isInf_:Wf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kf(n){const t={x:T(n,"x","isNaN")};return F.runKernel(Il,t)}const Hf=O({isNaN_:Kf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qf(n,e=.2){const r={x:T(n,"x","leakyRelu")},s={alpha:e};return F.runKernel(Ol,r,s)}const lu=O({leakyRelu_:qf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xf(n,e){let t=T(n,"a","less","string_or_numeric"),r=T(e,"b","less","string_or_numeric");[t,r]=Fe(t,r),ze(t.shape,r.shape);const s={a:t,b:r};return F.runKernel(Dl,s)}const ja=O({less_:Xf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yf(n,e){let t=T(n,"a","lessEqual","string_or_numeric"),r=T(e,"b","lessEqual","string_or_numeric");[t,r]=Fe(t,r),ze(t.shape,r.shape);const s={a:t,b:r};return F.runKernel(Fl,s)}const ui=O({lessEqual_:Yf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jf(n,e,t){if(t<=0)throw new Error("The number of values should be positive.");const r={start:n,stop:e,num:t};return F.runKernel(Cl,{},r)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zf(n,e=5,t=1,r=1,s=.5){const a=T(n,"x","localResponseNormalization");x(a.rank===4||a.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${a.rank}.`),x(Ur(e),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${e}.`);let i=a,o=!1;a.rank===3&&(o=!0,i=V(a,[1,a.shape[0],a.shape[1],a.shape[2]]));const u={x:i},c={depthRadius:e,bias:t,alpha:r,beta:s},f=F.runKernel(Ml,u,c);return o?V(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const Qf=O({localResponseNormalization_:Zf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ep(n){const t={x:T(n,"x","log","float32")};return F.runKernel(Rl,t)}const Hr=O({log_:ep});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tp(n){const t={x:T(n,"x","log1p")};return F.runKernel(Ll,t)}const hu=O({log1p_:tp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function np(n,e){x(Ea(n),()=>"The f passed in variableGrads(f) must be a function"),x(e==null||Array.isArray(e)&&e.every(c=>c instanceof Is),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const t=e!=null;if(!t){e=[];for(const c in F.registeredVariables)e.push(F.registeredVariables[c])}const r=t?e.filter(c=>!c.trainable):null,s=e.length;e=e.filter(c=>c.trainable),x(e.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${s} variables is trainable.`);const a=!0,{value:i,grads:o}=F.gradients(n,e,null,a);x(o.some(c=>c!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),x(i.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${i.rank} tensor`);const u={};return e.forEach((c,f)=>{o[f]!=null&&(u[c.name]=o[f])}),r!=null&&r.forEach(c=>u[c.name]=null),{value:i,grads:u}}function tn(n){return F.customGrad(n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rp(n){const t={x:T(n,"x","neg")};return F.runKernel(Ql,t)}const Vt=O({neg_:rp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sp(n){const t={x:T(n,"x","softplus")};return F.runKernel(R1,t)}const fu=O({softplus_:sp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ap(n){const e=T(n,"x","logSigmoid");return tn(r=>({value:Vt(fu(Vt(r))),gradFunc:i=>J(i,zn(Vt(r)))}))(e)}const ip=O({logSigmoid_:ap});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function op(n,e){let t=T(n,"a","sub"),r=T(e,"b","sub");[t,r]=Fe(t,r);const s={a:t,b:r};return F.runKernel(Z1,s)}const pe=O({sub_:op});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function up(n,e=-1){const t=T(n,"logits","logSoftmax");if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${t.rank} and axis was ${e}`);return tn((s,a)=>{const o=hr(s,e,!0),u=pe(s,o),c=pe(Ae(u,"float32"),Hr($e(en(u),e,!0)));return a([c]),{value:c,gradFunc:(p,b)=>{const[v]=b,S=!0,A=en(v);return pe(p,J($e(p,e,S),A))}}})(t)}const cp=O({logSoftmax_:up});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lp(n,e=null,t=!1){const r=T(n,"x","logSumExp"),s=zs(e,r.shape),a=hr(r,s,!0),i=pe(r,a),o=en(i),u=$e(o,s),c=Hr(u),f=ae(V(a,c.shape),c);if(t){const p=Gs(f.shape,s);return V(f,p)}return f}const pu=O({logSumExp_:lp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hp(n,e){const t=T(n,"a","logicalAnd","bool"),r=T(e,"b","logicalAnd","bool");ze(t.shape,r.shape);const s={a:t,b:r};return F.runKernel(Pl,s)}const Cs=O({logicalAnd_:hp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fp(n){const t={x:T(n,"x","logicalNot","bool")};return F.runKernel(Bl,t)}const du=O({logicalNot_:fp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pp(n,e){const t=T(n,"a","logicalOr","bool"),r=T(e,"b","logicalOr","bool");ze(t.shape,r.shape);const s={a:t,b:r};return F.runKernel(jl,s)}const mu=O({logicalOr_:pp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dp(n,e){const t=T(n,"a","logicalXor","bool"),r=T(e,"b","logicalXor","bool");return ze(t.shape,r.shape),Cs(mu(n,e),du(Cs(n,e)))}const mp=O({logicalXor_:dp});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ts=2147483648;function gp(n,e,t="left"){const r=T(n,"sortedSequence","searchSorted"),s=T(e,"values","searchSorted"),a=r.shape[r.shape.length-1],i=s.shape[s.shape.length-1],o=V(r,[-1,a]),u=V(s,[-1,i]);if(o.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(o.shape[0]!==u.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(Pe(u.shape)>=Ts)throw new Error(`values tensor size must less than ${Ts}`);if(o.shape[1]>=Ts)throw new Error(`trailing dim_size must less than ${Ts} for int32 output type, was ${o.shape[1]}`);const c={sortedSequence:o,values:u},f={side:t};return F.runKernel(_1,c,f)}const ci=O({searchSorted_:gp});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yp(n,e){return ci(n,e,"left")}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bp(n,e,t,r,s){const a=T(n,"x","maxPool"),i=1;let o=a,u=!1;a.rank===3&&(u=!0,o=V(a,[1,a.shape[0],a.shape[1],a.shape[2]])),x(o.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${o.rank}.`),x(Sn(t,i),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${t} and dilations '${i}'`),Dt("maxPool",r,s);const c={x:o},f={filterSize:e,strides:t,pad:r,dimRoundingMode:s},p=F.runKernel(Ul,c,f);return u?V(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const gu=O({maxPool_:bp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wp(n,e=[1,1,1],t,r,s,a="NDHWC"){const i=T(n,"x","maxPool3d");let o=i,u=!1;i.rank===4&&(u=!0,o=V(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),x(o.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${o.rank}.`),x(a==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),Dt("maxPool3d",r,s);const c={x:o},f={filterSize:e,strides:t,pad:r,dimRoundingMode:s,dataFormat:a},p=F.runKernel(Wl,c,f);return u?V(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const vp=O({maxPool3d_:wp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Np(n,e,t,r,s=!1){const i={x:T(n,"x","maxPoolWithArgmax")},o={filterSize:e,strides:t,pad:r,includeBatchInIndex:s},u=F.runKernel(Gl,i,o);return{result:u[0],indexes:u[1]}}const Tp=O({maxPoolWithArgmax_:Np});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sp(n,e){let t=T(n,"a","maximum"),r=T(e,"b","maximum");[t,r]=Fe(t,r),t.dtype==="bool"&&(t=Ae(t,"int32"),r=Ae(r,"int32")),ze(t.shape,r.shape);const s={a:t,b:r};return F.runKernel(Vl,s)}const yu=O({maximum_:Sp});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ep(n,e=null,t=!1){const s={x:T(n,"x","mean")},a={axis:e,keepDims:t};return F.runKernel(Kl,s,a)}const Rs=O({mean_:Ep});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dr(n,e="float32"){if(dt(n),e==="complex64"){const r=dr(n,"float32"),s=dr(n,"float32");return bn(r,s)}const t=ni(Pe(n),e);return F.makeTensor(t,n,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mn(n,e="float32"){if(dt(n),e==="complex64"){const r=Mn(n,"float32"),s=dr(n,"float32");return bn(r,s)}const t=wo(Pe(n),e);return F.makeTensor(t,n,e)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xp(n,e,{indexing:t="xy"}={}){if(t!=="xy"&&t!=="ij")throw new TypeError(`${t} is not a valid third argument to meshgrid`);if(n===void 0)return[];let r=T(n,"x","meshgrid",n instanceof De?n.dtype:"float32");if(e===void 0)return[r];let s=T(e,"y","meshgrid",e instanceof De?e.dtype:"float32");const a=Pe(r.shape),i=Pe(s.shape);return t==="xy"?(r=V(r,[1,-1]),s=V(s,[-1,1]),[Se(Mn([i,1],r.dtype),r),Se(s,Mn([1,a],s.dtype))]):(r=V(r,[-1,1]),s=V(s,[1,-1]),[Se(r,Mn([1,i],r.dtype)),Se(Mn([a,1],s.dtype),s)])}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kp(n,e){let t=T(n,"a","minimum"),r=T(e,"b","minimum");[t,r]=Fe(t,r),t.dtype==="bool"&&(t=Ae(t,"int32"),r=Ae(r,"int32")),ze(t.shape,r.shape);const s={a:t,b:r};return F.runKernel(ql,s)}const Ls=O({minimum_:kp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _p(n,e,t){x(t==="reflect"||t==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${t}.`);const r=T(n,"x","mirrorPad");if(r.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");x(e.length===r.rank,()=>`Padding doesn't match input. Must be ${r.rank}. Got ${e.length}.`);const s=t==="reflect"?1:0;for(let o=0;o<r.rank;o++)x(e[o].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),x(e[o][0]>=0&&e[o][0]<=r.shape[o]-s&&e[o][1]>=0&&e[o][1]<=r.shape[o]-s,()=>`Padding in dimension ${o} cannot be greater than or equal to ${r.shape[o]-s} or less than 0 for input of shape ${r.shape}`);const a={paddings:e,mode:t},i={x:r};return F.runKernel(Xl,i,a)}const $p=O({mirrorPad_:_p});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ap(n,e){let t=T(n,"a","mod"),r=T(e,"b","mod");[t,r]=Fe(t,r);const s={a:t,b:r};return F.runKernel(Yl,s)}const Ip=O({mod_:Ap});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Op(n,e=null,t=!1){n=T(n,"x","moments");const r=zs(e,n.shape),s=Rs(n,r,t);let a=s.shape;t||(a=Gs(s.shape,r));const i=At(pe(Ae(n,"float32"),V(s,a))),o=Rs(i,r,t);return{mean:s,variance:o}}const Dp=O({moments_:Op});function Fp(n,e,t,r){const s=T(e,"data","multiRNNCell"),a=Os(t,"c","multiRNNCell"),i=Os(r,"h","multiRNNCell");let o=s;const u=[];for(let p=0;p<n.length;p++){const b=n[p](o,a[p],i[p]);u.push(b[0]),u.push(b[1]),o=b[1]}const c=[],f=[];for(let p=0;p<u.length;p+=2)c.push(u[p]),f.push(u[p+1]);return[c,f]}const Cp=O({multiRNNCell_:Fp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rp(n,e,t,r=!1){const s=T(n,"logits","multinomial"),a=s.size,i=s.rank;if(a<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${a}.`);if(i>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${i}`);t=t||Math.random();const u={logits:i===1?V(s,[1,-1]):s},c={numSamples:e,seed:t,normalized:r},f=F.runKernel(Jl,u,c);return i===1?V(f,[f.size]):f}const Lp=O({multinomial_:Rp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pp(n,e){let t=T(n,"a","notEqual","string_or_numeric"),r=T(e,"b","notEqual","string_or_numeric");[t,r]=Fe(t,r),ze(t.shape,r.shape);const s={a:t,b:r};return F.runKernel(e1,s)}const bu=O({notEqual_:Pp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bp(n,e,t=1,r=0,s="int32"){if(e<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${e}`);const i={indices:T(n,"indices","oneHot","int32")},o={dtype:s,depth:e,onValue:t,offValue:r};return F.runKernel(a1,i,o)}const jp=O({oneHot_:Bp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mp(n){const t={x:T(n,"x","onesLike")};return F.runKernel(s1,t)}const zp=O({onesLike_:Mp});function Vp(n,e){const t=T(n,"v1","outerProduct"),r=T(e,"v2","outerProduct");x(t.rank===1&&r.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${t.rank} and ${r.rank}.`);const s=V(t,[-1,1]),a=V(r,[1,-1]);return Se(s,a)}const Up=O({outerProduct_:Vp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wp(n,e,t=0){const r=T(n,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const s={paddings:e,constantValue:t},a={x:r};return F.runKernel(o1,a,s)}const es=O({pad_:Wp});function Gp(n,e,t=0){return x(e.length===2,()=>"Invalid number of paddings. Must be length of 2."),es(n,[e],t)}const Kp=O({pad1d_:Gp});function Hp(n,e,t=0){return x(e.length===2&&e[0].length===2&&e[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),es(n,e,t)}const qp=O({pad2d_:Hp});function Xp(n,e,t=0){return x(e.length===3&&e[0].length===2&&e[1].length===2&&e[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),es(n,e,t)}const Yp=O({pad3d_:Xp});function Jp(n,e,t=0){return x(e.length===4&&e[0].length===2&&e[1].length===2&&e[2].length===2&&e[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),es(n,e,t)}const Zp=O({pad4d_:Jp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qp(n,e,t){const r=T(n,"x","spaceToBatchND");x(r.rank>=1+e.length,()=>`input rank ${r.rank} should be > than [blockShape] ${e.length}`),x(t.length===e.length,()=>`paddings.shape[0] ${t.length} must be equal to [blockShape] ${e.length}`),x(r.shape.reduce((i,o,u)=>u>0&&u<=e.length?i&&(o+t[u-1][0]+t[u-1][1])%e[u-1]===0:i,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${t.toString()} must be divisible by blockShapes ${e.toString()}`);const s={x:r},a={blockShape:e,paddings:t};return F.runKernel(B1,s,a)}const wu=O({spaceToBatchND_:Qp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function e4(n,e,t,r,s,a,i){s==null&&(s=[1,1]),a==null&&(a=1),r===0&&(r="valid");const o=T(n,"x","maxPool");let u=o,c=!1;o.rank===3&&(c=!0,u=V(o,[1,o.shape[0],o.shape[1],o.shape[2]])),x(Sn(a,s),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${a} and dilations '${s}'`);const f=W3(u.shape,e,a,s,r),p=[f.dilationHeight,f.dilationWidth];let b;r==="same"?b=n4([f.filterHeight,f.filterWidth],p):b=[[0,0],[0,0]];const v=p[0]===1&&p[1]===1,[S,A]=t4([f.inHeight,f.inWidth],p,b),_=v?r:"valid",C=v?u:wu(u,p,S),U=(t==="avg"?()=>Zo(C,e,a,_,i):()=>gu(C,e,a,_,i))(),B=v?U:Qo(U,p,A);return c?V(B,[B.shape[1],B.shape[2],B.shape[3]]):B}function t4(n,e,t){const r=t.map(f=>f[0]),s=t.map(f=>f[1]),a=n.concat(r,s),i=e.map((f,p)=>(f-a[p]%f)%f),o=s.map((f,p)=>f+i[p]),u=e.map((f,p)=>[r[p],o[p]]),c=e.map((f,p)=>[0,i[p]]);return[u,c]}function n4(n,e){const r=n.map((i,o)=>i+(i-1)*(e[o]-1)).map(i=>i-1),s=r.map(i=>Math.floor(i/2)),a=r.map((i,o)=>i-s[o]);return r.map((i,o)=>[s[o],a[o]])}const r4=O({pool_:e4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s4(n,e){const t=T(n,"x","prelu"),r=T(e,"alpha","prelu"),s={x:t,alpha:r};return F.runKernel(c1,s)}const vu=O({prelu_:s4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a4(n,e=null,t=!1){let r=T(n,"x","prod");r.dtype==="bool"&&(r=Ae(r,"int32"));const s={x:r},a={axis:e,keepDims:t};return F.runKernel(l1,s,a)}const i4=O({prod_:a4});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function o4(n,e,t,r){const s=n.map((f,p)=>T(f,`tensors${p}`,"raggedGather","int32")),a=T(e,"paramsDenseValues","raggedGather"),i=T(t,"indices","raggedGather","int32"),o={paramsNestedSplits:s,paramsDenseValues:a,indices:i},u={outputRaggedRank:r},c=F.runKernel(h1,o,u);return{outputNestedSplits:c.slice(0,c.length-1),outputDenseValues:c[c.length-1]}}const u4=O({raggedGather_:o4});/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c4(n,e,t){const r=T(n,"starts","raggedRange"),s=T(e,"limits","raggedRange",r.dtype),a=T(t,"deltas","raggedRange",r.dtype),i={starts:r,limits:s,deltas:a},o=F.runKernel(f1,i);return{rtNestedSplits:o[0],rtDenseValues:o[1]}}const l4=O({raggedRange_:c4});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h4(n,e,t,r,s){const a=T(n,"shape","raggedTensorToTensor","int32"),i=T(e,"values","raggedTensorToTensor"),o=T(t,"defaultValue","raggedTensorToTensor",i.dtype),u=r.map((p,b)=>T(p,`tensors${b}`,"raggedTensorToTensor","int32")),c={shape:a,values:i,defaultValue:o,rowPartitionTensors:u},f={rowPartitionTypes:s};return F.runKernel(p1,c,f)}const f4=O({raggedTensorToTensor_:h4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function p4(n,e,t){dt(n);const r=Pe(n);let s=null;if(t==null||t==="float32")s=new Float32Array(r);else if(t==="int32")s=new Int32Array(r);else if(t==="bool")s=new Uint8Array(r);else throw new Error(`Unknown data type ${t}`);for(let a=0;a<r;a++)s[a]=e();return F.makeTensor(s,n,t)}const d4=O({rand_:p4});var li={exports:{}};li.exports;(function(n){(function(e,t,r){function s(u){var c=this,f=o();c.next=function(){var p=2091639*c.s0+c.c*23283064365386963e-26;return c.s0=c.s1,c.s1=c.s2,c.s2=p-(c.c=p|0)},c.c=1,c.s0=f(" "),c.s1=f(" "),c.s2=f(" "),c.s0-=f(u),c.s0<0&&(c.s0+=1),c.s1-=f(u),c.s1<0&&(c.s1+=1),c.s2-=f(u),c.s2<0&&(c.s2+=1),f=null}function a(u,c){return c.c=u.c,c.s0=u.s0,c.s1=u.s1,c.s2=u.s2,c}function i(u,c){var f=new s(u),p=c&&c.state,b=f.next;return b.int32=function(){return f.next()*4294967296|0},b.double=function(){return b()+(b()*2097152|0)*11102230246251565e-32},b.quick=b,p&&(typeof p=="object"&&a(p,f),b.state=function(){return a(f,{})}),b}function o(){var u=4022871197,c=function(f){f=String(f);for(var p=0;p<f.length;p++){u+=f.charCodeAt(p);var b=.02519603282416938*u;u=b>>>0,b-=u,b*=u,u=b>>>0,b-=u,u+=b*4294967296}return(u>>>0)*23283064365386963e-26};return c}t&&t.exports?t.exports=i:this.alea=i})(Mt,n)})(li);var m4=li.exports,hi={exports:{}};hi.exports;(function(n){(function(e,t,r){function s(o){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var p=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^p^p>>>8},o===(o|0)?u.x=o:c+=o;for(var f=0;f<c.length+64;f++)u.x^=c.charCodeAt(f)|0,u.next()}function a(o,u){return u.x=o.x,u.y=o.y,u.z=o.z,u.w=o.w,u}function i(o,u){var c=new s(o),f=u&&u.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var b=c.next()>>>11,v=(c.next()>>>0)/4294967296,S=(b+v)/(1<<21);while(S===0);return S},p.int32=c.next,p.quick=p,f&&(typeof f=="object"&&a(f,c),p.state=function(){return a(c,{})}),p}t&&t.exports?t.exports=i:this.xor128=i})(Mt,n)})(hi);var g4=hi.exports,fi={exports:{}};fi.exports;(function(n){(function(e,t,r){function s(o){var u=this,c="";u.next=function(){var p=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^(p^p<<1))|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,o===(o|0)?u.x=o:c+=o;for(var f=0;f<c.length+64;f++)u.x^=c.charCodeAt(f)|0,f==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function a(o,u){return u.x=o.x,u.y=o.y,u.z=o.z,u.w=o.w,u.v=o.v,u.d=o.d,u}function i(o,u){var c=new s(o),f=u&&u.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var b=c.next()>>>11,v=(c.next()>>>0)/4294967296,S=(b+v)/(1<<21);while(S===0);return S},p.int32=c.next,p.quick=p,f&&(typeof f=="object"&&a(f,c),p.state=function(){return a(c,{})}),p}t&&t.exports?t.exports=i:this.xorwow=i})(Mt,n)})(fi);var y4=fi.exports,pi={exports:{}};pi.exports;(function(n){(function(e,t,r){function s(o){var u=this;u.next=function(){var f=u.x,p=u.i,b,v;return b=f[p],b^=b>>>7,v=b^b<<24,b=f[p+1&7],v^=b^b>>>10,b=f[p+3&7],v^=b^b>>>3,b=f[p+4&7],v^=b^b<<7,b=f[p+7&7],b=b^b<<13,v^=b^b<<9,f[p]=v,u.i=p+1&7,v};function c(f,p){var b,v=[];if(p===(p|0))v[0]=p;else for(p=""+p,b=0;b<p.length;++b)v[b&7]=v[b&7]<<15^p.charCodeAt(b)+v[b+1&7]<<13;for(;v.length<8;)v.push(0);for(b=0;b<8&&v[b]===0;++b);for(b==8?v[7]=-1:v[b],f.x=v,f.i=0,b=256;b>0;--b)f.next()}c(u,o)}function a(o,u){return u.x=o.x.slice(),u.i=o.i,u}function i(o,u){o==null&&(o=+new Date);var c=new s(o),f=u&&u.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var b=c.next()>>>11,v=(c.next()>>>0)/4294967296,S=(b+v)/(1<<21);while(S===0);return S},p.int32=c.next,p.quick=p,f&&(f.x&&a(f,c),p.state=function(){return a(c,{})}),p}t&&t.exports?t.exports=i:this.xorshift7=i})(Mt,n)})(pi);var b4=pi.exports,di={exports:{}};di.exports;(function(n){(function(e,t,r){function s(o){var u=this;u.next=function(){var f=u.w,p=u.X,b=u.i,v,S;return u.w=f=f+1640531527|0,S=p[b+34&127],v=p[b=b+1&127],S^=S<<13,v^=v<<17,S^=S>>>15,v^=v>>>12,S=p[b]=S^v,u.i=b,S+(f^f>>>16)|0};function c(f,p){var b,v,S,A,_,C=[],K=128;for(p===(p|0)?(v=p,p=null):(p=p+"\0",v=0,K=Math.max(K,p.length)),S=0,A=-32;A<K;++A)p&&(v^=p.charCodeAt((A+32)%p.length)),A===0&&(_=v),v^=v<<10,v^=v>>>15,v^=v<<4,v^=v>>>13,A>=0&&(_=_+1640531527|0,b=C[A&127]^=v+_,S=b==0?S+1:0);for(S>=128&&(C[(p&&p.length||0)&127]=-1),S=127,A=4*128;A>0;--A)v=C[S+34&127],b=C[S=S+1&127],v^=v<<13,b^=b<<17,v^=v>>>15,b^=b>>>12,C[S]=v^b;f.w=_,f.X=C,f.i=S}c(u,o)}function a(o,u){return u.i=o.i,u.w=o.w,u.X=o.X.slice(),u}function i(o,u){o==null&&(o=+new Date);var c=new s(o),f=u&&u.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var b=c.next()>>>11,v=(c.next()>>>0)/4294967296,S=(b+v)/(1<<21);while(S===0);return S},p.int32=c.next,p.quick=p,f&&(f.X&&a(f,c),p.state=function(){return a(c,{})}),p}t&&t.exports?t.exports=i:this.xor4096=i})(Mt,n)})(di);var w4=di.exports,mi={exports:{}};mi.exports;(function(n){(function(e,t,r){function s(o){var u=this,c="";u.next=function(){var p=u.b,b=u.c,v=u.d,S=u.a;return p=p<<25^p>>>7^b,b=b-v|0,v=v<<24^v>>>8^S,S=S-p|0,u.b=p=p<<20^p>>>12^b,u.c=b=b-v|0,u.d=v<<16^b>>>16^S,u.a=S-p|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,o===Math.floor(o)?(u.a=o/4294967296|0,u.b=o|0):c+=o;for(var f=0;f<c.length+20;f++)u.b^=c.charCodeAt(f)|0,u.next()}function a(o,u){return u.a=o.a,u.b=o.b,u.c=o.c,u.d=o.d,u}function i(o,u){var c=new s(o),f=u&&u.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var b=c.next()>>>11,v=(c.next()>>>0)/4294967296,S=(b+v)/(1<<21);while(S===0);return S},p.int32=c.next,p.quick=p,f&&(typeof f=="object"&&a(f,c),p.state=function(){return a(c,{})}),p}t&&t.exports?t.exports=i:this.tychei=i})(Mt,n)})(mi);var v4=mi.exports,Nu={exports:{}};const N4={},T4=Object.freeze(Object.defineProperty({__proto__:null,default:N4},Symbol.toStringTag,{value:"Module"})),S4=tc(T4);(function(n){(function(e,t,r){var s=256,a=6,i=52,o="random",u=r.pow(s,a),c=r.pow(2,i),f=c*2,p=s-1,b;function v(B,W,G){var Q=[];W=W==!0?{entropy:!0}:W||{};var re=C(_(W.entropy?[B,U(t)]:B??K(),3),Q),q=new S(Q),te=function(){for(var ue=q.g(a),Ne=u,ie=0;ue<c;)ue=(ue+ie)*s,Ne*=s,ie=q.g(1);for(;ue>=f;)ue/=2,Ne/=2,ie>>>=1;return(ue+ie)/Ne};return te.int32=function(){return q.g(4)|0},te.quick=function(){return q.g(4)/4294967296},te.double=te,C(U(q.S),t),(W.pass||G||function(ue,Ne,ie,ke){return ke&&(ke.S&&A(ke,q),ue.state=function(){return A(q,{})}),ie?(r[o]=ue,Ne):ue})(te,re,"global"in W?W.global:this==r,W.state)}function S(B){var W,G=B.length,Q=this,re=0,q=Q.i=Q.j=0,te=Q.S=[];for(G||(B=[G++]);re<s;)te[re]=re++;for(re=0;re<s;re++)te[re]=te[q=p&q+B[re%G]+(W=te[re])],te[q]=W;(Q.g=function(ue){for(var Ne,ie=0,ke=Q.i,Be=Q.j,He=Q.S;ue--;)Ne=He[ke=p&ke+1],ie=ie*s+He[p&(He[ke]=He[Be=p&Be+Ne])+(He[Be]=Ne)];return Q.i=ke,Q.j=Be,ie})(s)}function A(B,W){return W.i=B.i,W.j=B.j,W.S=B.S.slice(),W}function _(B,W){var G=[],Q=typeof B,re;if(W&&Q=="object")for(re in B)try{G.push(_(B[re],W-1))}catch{}return G.length?G:Q=="string"?B:B+"\0"}function C(B,W){for(var G=B+"",Q,re=0;re<G.length;)W[p&re]=p&(Q^=W[p&re]*19)+G.charCodeAt(re++);return U(W)}function K(){try{var B;return b&&(B=b.randomBytes)?B=B(s):(B=new Uint8Array(s),(e.crypto||e.msCrypto).getRandomValues(B)),U(B)}catch{var W=e.navigator,G=W&&W.plugins;return[+new Date,e,G,e.screen,U(t)]}}function U(B){return String.fromCharCode.apply(0,B)}if(C(r.random(),t),n.exports){n.exports=v;try{b=S4}catch{}}else r["seed"+o]=v})(typeof self<"u"?self:Mt,[],Math)})(Nu);var E4=Nu.exports,x4=m4,k4=g4,_4=y4,$4=b4,A4=w4,I4=v4,Xn=E4;Xn.alea=x4;Xn.xor128=k4;Xn.xorwow=_4;Xn.xorshift7=$4;Xn.xor4096=A4;Xn.tychei=I4;var gi=Xn;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class yi{constructor(e,t,r,s,a){this.mean=e,this.stdDev=t,this.dtype=r,this.nextVal=NaN,this.truncated=s,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const i=a||Math.random();this.random=gi.alea(i.toString())}nextValue(){if(!isNaN(this.nextVal)){const s=this.nextVal;return this.nextVal=NaN,s}let e,t,r=!1;for(;!r;){let s,a,i;do s=2*this.random()-1,a=2*this.random()-1,i=s*s+a*a;while(i>=1||i===0);const o=Math.sqrt(-2*Math.log(i)/i);e=this.mean+this.stdDev*s*o,t=this.mean+this.stdDev*a*o,(!this.truncated||this.isValidTruncated(e))&&(r=!0)}return(!this.truncated||this.isValidTruncated(t))&&(this.nextVal=this.convertValue(t)),this.convertValue(e)}convertValue(e){return this.dtype==null||this.dtype==="float32"?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}}class O4{constructor(e,t,r,s){this.alpha=e,this.beta=1/t,this.dtype=r;const a=s||Math.random();this.randu=gi.alea(a.toString()),this.randn=new yi(0,1,r,!1,this.randu()),e<1?this.d=e+2/3:this.d=e-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let e,t,r,s,a,i;for(;;){do s=this.randn.nextValue(),i=1+this.c*s;while(i<=0);if(i*=i*i,e=s*s,t=1-.331*e*e,r=.5*e+this.d*(1-i+Math.log(i)),a=this.randu(),a<t||Math.log(a)<r)break}return i=1/this.beta*this.d*i,this.alpha<1&&(i*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(i)}convertValue(e){return this.dtype==="float32"?e:Math.round(e)}}class D4{constructor(e=0,t=1,r,s){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=e,this.range=t-e,this.dtype=r,s==null&&(s=Math.random()),typeof s=="number"&&(s=s.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${e} - ${t} <= 1 and dtype is not float`);this.random=gi.alea(s)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F4(n,e,t=1,r="float32",s){if(dt(n),t==null&&(t=1),r==null&&(r="float32"),r!=="float32"&&r!=="int32")throw new Error(`Unsupported data type ${r}`);const a=new O4(e,t,r,s),i=Zt(n,r);for(let o=0;o<i.values.length;o++)i.values[o]=a.nextValue();return i.toTensor()}const C4=O({randomGamma_:F4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function R4(n,e=0,t=1,r,s){if(dt(n),r!=null&&r==="bool")throw new Error(`Unsupported data type ${r}`);const a=new yi(e,t,r,!1,s),i=Zt(n,r);for(let o=0;o<i.values.length;o++)i.values[o]=a.nextValue();return i.toTensor()}const Tu=O({randomNormal_:R4});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function L4(n,e,t){if(e!=null&&e==="bool")throw new Error(`Unsupported data type ${e}`);return Tu(n,0,1,e,t)}const P4=O({randomStandardNormal_:L4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function B4(n,e=0,t=1,r="float32",s){dt(n);const a=Zt(n,r),i=new D4(e,t,null,s);for(let o=0;o<a.values.length;o++)a.values[o]=i.nextValue();return a.toTensor()}const bi=O({randomUniform_:B4});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function j4(n,e,t,r){return bi(n,e,t,"int32",r)}const M4=O({randomUniformInt_:j4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qr(n,e,t=1,r="float32"){if(t===0)throw new Error("Cannot have a step of zero");const s={start:n,stop:e,step:t,dtype:r};return F.runKernel(d1,{},s)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z4(n){const t={input:T(n,"input","real")};return F.runKernel(m1,t)}const Xr=O({real_:z4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function V4(n){const t={x:T(n,"x","reciprocal")};return F.runKernel(g1,t)}const U4=O({reciprocal_:V4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function W4(n){const t={x:T(n,"x","relu")};return F.runKernel(y1,t)}const Xs=O({relu_:W4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function G4(n){const t={x:T(n,"x","relu6")};return F.runKernel(N1,t)}const Su=O({relu6_:G4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K4(n,e){const r={x:T(n,"x","reverse")},s={dims:e};return F.runKernel(T1,r,s)}const Kn=O({reverse_:K4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function H4(n){const e=T(n,"x","reverse");return x(e.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${e.rank}.`),Kn(e,0)}const q4=O({reverse1d_:H4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function X4(n,e){const t=T(n,"x","reverse");return x(t.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${t.rank}.`),Kn(t,e)}const Y4=O({reverse2d_:X4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J4(n,e){const t=T(n,"x","reverse");return x(t.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${t.rank}.`),Kn(t,e)}const Z4=O({reverse3d_:J4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q4(n,e){const t=T(n,"x","reverse");return x(t.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${t.rank}.`),Kn(t,e)}const ed=O({reverse4d_:Q4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function td(n){const t={x:T(n,"x","round")};return F.runKernel(S1,t)}const Eu=O({round_:td});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nd(n){const t={x:T(n,"x","rsqrt","float32")};return F.runKernel(E1,t)}const rd=O({rsqrt_:nd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sd(n){const t={x:T(n,"x","selu")};return F.runKernel(A1,t)}const ad=O({selu_:sd});function id(n,e,t,r,s,a=[1,1],i="NHWC"){const o=T(n,"x","separableConv2d"),u=T(e,"depthwiseFilter","separableConv2d"),c=T(t,"pointwiseFilter","separableConv2d");let f=o,p=!1;if(o.rank===3&&(p=!0,f=V(o,[1,o.shape[0],o.shape[1],o.shape[2]])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");x(f.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${f.rank}.`),x(u.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${u.rank}.`),x(c.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${u.rank}.`),x(c.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${c.shape[0]}.`),x(c.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${c.shape[1]}.`);const b=u.shape[2],v=u.shape[3];x(c.shape[2]===b*v,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${b*v}, but got ${c.shape[2]}.`);const S=oi(f,u,r,s,i,a),_=Ws(S,c,1,"valid",i);return p?V(_,[_.shape[1],_.shape[2],_.shape[3]]):_}const od=O({separableConv2d_:id});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function ud(n,e){const t=T(n,"x","setdiff1d"),r=T(e,"y","setdiff1d");x(t.dtype===r.dtype,()=>`x and y should have the same dtype, but got x (${t.dtype}) and y (${r.dtype}).`),x(t.rank===1,()=>`x should be 1D tensor, but got x (${t.shape}).`),x(r.rank===1,()=>`y should be 1D tensor, but got y (${r.shape}).`);const s=await t.data(),a=await r.data(),i=new Set(a);let o=0;for(let f=0;f<s.length;f++)i.has(s[f])||o++;const u=new _a([o],t.dtype),c=new _a([o],"int32");for(let f=0,p=0;f<s.length;f++)i.has(s[f])||(u.values[p]=s[f],c.values[p]=f,p++);return[u.toTensor(),c.toTensor()]}const cd=ud;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ld(n){const t={x:T(n,"x","sign")};return F.runKernel(F1,t)}const hd=O({sign_:ld});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fd(n){const t={x:T(n,"x","sin","float32")};return F.runKernel(O1,t)}const pd=O({sin_:fd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dd(n){const t={x:T(n,"x","sinh")};return F.runKernel(D1,t)}const md=O({sinh_:dd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gd(n,e,t){const r=T(n,"x","slice1d");return x(r.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),fe(r,[e],[t])}const yd=O({slice1d_:gd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bd(n,e,t){const r=T(n,"x","slice2d");return x(r.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),fe(r,e,t)}const wd=O({slice2d_:bd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vd(n,e,t){const r=T(n,"x","slice3d");return x(r.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),fe(r,e,t)}const Nd=O({slice3d_:vd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Td(n,e,t){const r=T(n,"x","slice4d");return x(r.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),fe(r,e,t)}const Sd=O({slice4d_:Td});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ed(n,e=-1){const t=T(n,"logits","softmax","float32");if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${t.rank} and dim was ${e}`);const r={logits:t},s={dim:e};return F.runKernel(M1,r,s)}const xd=O({softmax_:Ed});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kd(n){x(n.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${n.dtype}.`);const e={input:n};return F.runKernel(gl,e)}const wi=O({fft_:kd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _d(n){x(n.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${n.dtype}.`);const e={input:n};return F.runKernel(kl,e)}const Ps=O({ifft_:_d});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $d(n){const e=n.shape[n.shape.length-1],t=n.size/e;let r;if(e<=2){const s=V(n,[t,e]);r=Ps(s)}else{const s=[t,2*(e-1)],a=V(Xr(n),[t,e]),i=V(qs(n),[t,e]),o=Kn(fe(a,[0,1],[t,e-2]),1),u=J(Kn(fe(i,[0,1],[t,e-2]),1),ve(-1)),c=Ge([a,o],1),f=Ge([i,u],1),p=V(bn(c,f),[s[0],s[1]]);r=Ps(p)}if(r=Xr(r),n.rank===3&&n.shape[0]!==0){const s=r,a=n.shape[0];r=V(r,[a,r.shape[0]/a,r.shape[1]]),s.dispose()}return r}const xu=O({irfft_:$d});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ad(n,e,t=0){const s={x:T(n,"x","split")},a={numOrSizeSplits:e,axis:t};return F.runKernel(j1,s,a)}const Yr=O({split_:Ad});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Id(n,e){x(n.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${n.dtype}`);let t=n.shape[n.shape.length-1];const r=n.size/t;let s;if(e!=null&&e<t){const S=n.shape.map(_=>0),A=n.shape.map(_=>_);A[n.shape.length-1]=e,s=fe(n,S,A),t=e}else if(e!=null&&e>t){const S=n.shape.map(A=>A);S[n.shape.length-1]=e-t,s=Ge([n,dr(S)],n.shape.length-1),t=e}else s=n;const a=pt(s),i=V(bn(s,a),[r,t]),o=wi(i),u=Math.floor(t/2)+1,c=Xr(o),f=qs(o),p=Yr(c,[u,t-u],c.shape.length-1),b=Yr(f,[u,t-u],f.shape.length-1),v=s.shape.slice();return v[s.shape.length-1]=u,V(bn(p[0],b[0]),v)}const vi=O({rfft_:Id});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Od(n,e){let t=T(n,"a","squaredDifference"),r=T(e,"b","squaredDifference");[t,r]=Fe(t,r),ze(t.shape,r.shape);const s={a:t,b:r},a={};return F.runKernel(K1,s,a)}const ku=O({squaredDifference_:Od});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dd(n,e){const t=T(n,"x","squeeze","string_or_numeric");return V(t,oc(t.shape,e).newShape)}const Me=O({squeeze_:Dd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fd(n,e=0){const t=Os(n,"tensors","stack","string_or_numeric");x(t.length>=1,()=>"Pass at least one tensor to tf.stack"),t.length>0&&x(e<=t[0].rank,()=>"Axis must be <= rank of the tensor");const r=t,s={axis:e};return F.runKernel(i1,r,s)}const nn=O({stack_:Fd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cd(n,e=0){const r={x:T(n,"x","step")},s={alpha:e};return F.runKernel(o2,r,s)}const _u=O({step_:Cd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rd(n,e,t,r,s=0,a=0,i=0,o=0,u=0){const f={x:T(n,"x","stridedSlice","string_or_numeric")},p={begin:e,end:t,strides:r,beginMask:s,endMask:a,ellipsisMask:i,newAxisMask:o,shrinkAxisMask:u};return F.runKernel(q1,f,p)}const Ld=O({stridedSlice_:Rd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pd(n){const t={x:T(n,"x","tan","float32")};return F.runKernel(Q1,t)}const Bd=O({tan_:Pd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ye(n,e){mr(n);const t=Nn(n,e);if(t.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Tn(n,null,t,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yn(n,e,t){if(mr(n),e!=null&&e.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const r=Nn(n,t);if(r.length!==2&&r.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Tn(n,e,r,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $u(n,e,t){if(mr(n),e!=null&&e.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const r=Nn(n,t);if(r.length!==3&&r.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Tn(n,e,r,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jd(n,e,t){if(mr(n),e!=null&&e.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const r=Nn(n,t);if(r.length!==4&&r.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Tn(n,e,r,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Md(n,e,t){if(mr(n),e!=null&&e.length!==5)throw new Error("tensor5d() requires shape to have five numbers");const r=Nn(n,t);if(r.length!==5&&r.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return Tn(n,e,r,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zd(n,e,t){if(mr(n),e!=null&&e.length!==6)throw new Error("tensor6d() requires shape to have six numbers");const r=Nn(n,t);if(r.length!==6&&r.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return e=e||r,Tn(n,e,r,t)}function Vd(n,e,t){const r=e.rank>1?e.shape[e.rank-1]:1,s=e.rank>1?e.rank-1:1,a=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${t.shape}, indices.shape: ${e.shape}, shape: ${n}, sliceDim: ${r}, and batchDim: ${s}.`;if(t.rank<s)throw new Error(a+` update.rank < ${s}. `);if(n.length<r+(t.rank-s))throw new Error(a+` Output shape length < ${r+(t.rank-s)}`);if(t.rank!==s+n.length-r)throw new Error(a+` update.rank != ${s+n.length-r}`);for(let i=0;i<s;++i)if(t.shape[i]!==e.shape[i])throw new Error(a+` updates.shape[${i}] (${t.shape[i]}) != indices.shape[${i}] (${e.shape[i]}).`);for(let i=0;i<t.rank-s;++i)if(t.shape[i+s]!==n[i+r])throw new Error(a+` updates.shape[${i+s}] (${t.shape[i+s]}) != shape[${i+s}] (${n[i+s]})`)}function Au(n,e,t){if(e.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${e.rank}.`);if(n.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${n.rank}.`);if(e.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${e.dtype}`);if(t.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${t}`);if(t.length===0){if(e.size===0)throw new Error(`Indices specified for empty output. indices shape: ${e.shape}`);if(n.size===0)throw new Error(`Updates specified for empty output. updates shape: ${n.shape}`)}Vd(t,e,n)}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ud(n,e,t){const r=T(n,"tensor","tensorScatterupdate"),s=T(e,"indices","tensorScatterupdate","int32"),a=T(t,"updates","tensorScatterupdate");if(Au(a,s,r.shape),r.dtype!==a.dtype)throw new Error(`tensor and updates must have the same dtype, instead they are ${r.dtype} and ${a.dtype}.`);const i={tensor:r,indices:s,updates:a},o={};return F.runKernel(k1,i,o)}const Wd=O({tensorScatterUpdate_:Ud});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gd(n,e=1,t=!0){const r=T(n,"x","topk");if(r.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const s=r.shape[r.shape.length-1];if(e<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${e}`);if(e>s)throw new Error(`'k' passed to topk() must be <= the last dimension (${s}) but got ${e}`);const a={x:r},i={k:e,sorted:t},[o,u]=F.runKernel(t2,a,i);return{values:o,indices:u}}const Kd=O({topk_:Gd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hd(n,e=0,t=1,r,s){if(dt(n),r!=null&&r==="bool")throw new Error("Unsupported data type $ { dtype }");const a=new yi(e,t,r,!0,s),i=Zt(n,r);for(let o=0;o<i.values.length;o++)i.values[o]=a.nextValue();return i.toTensor()}const qd=O({truncatedNormal_:Hd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xd(n,e=0){const t=T(n,"x","unique","string_or_numeric");x(t.rank>0,()=>"The input tensor must be at least 1D");const r={x:t},s={axis:e},[a,i]=F.runKernel(r2,r,s);return{values:a,indices:i}}const Yd=O({unique_:Xd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jd(n,e,t){const r=T(n,"x","unsortedSegmentSum"),s=T(e,"segmentIds","unsortedSegmentSum","int32");x(Ur(t),()=>"numSegments must be of dtype int");const a={x:r,segmentIds:s},i={numSegments:t};return F.runKernel(a2,a,i)}const Zd=O({unsortedSegmentSum_:Jd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qd(n,e=0){const t=T(n,"x","unstack","string_or_numeric");x(e>=-t.shape.length&&e<t.shape.length,()=>`Axis = ${e} is not in [-${t.shape.length}, ${t.shape.length})`);const r={value:t},s={axis:e};return F.runKernel(s2,r,s)}const Yn=O({unstack_:Qd});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function em(n,e){return ci(n,e,"right")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tm(n,e=!0,t,r){return F.makeVariable(n,e,t,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nm(n,e){const t=[];for(let a=0;a<e.length;a++)e[a]&&t.push(a);const r=Zt(n,"int32"),s=Zt([t.length,n.length],"int32");for(let a=0;a<t.length;a++){const i=r.indexToLoc(t[a]),o=a*n.length;s.values.set(i,o)}return s.toTensor()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function rm(n){const e=T(n,"condition","whereAsync","bool"),t=await e.data(),r=nm(e.shape,t);return n!==e&&e.dispose(),r}const Iu=rm;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function sm(n,e,t){const r=T(n,"tensor","boolMask"),s=T(e,"mask","boolMask","bool"),a=t??0,i=s.rank,o=r.shape;x(i>0,()=>"mask cannot be scalar"),Et(o.slice(a,a+i),s.shape,"mask's shape must match the first K dimensions of tensor's shape,");let u=1;for(let A=a;A<a+i;A++)u*=o[A];const c=o.slice(0,a).concat([u],o.slice(a+i)),f=V(r,c),p=V(s,[-1]),b=await Iu(p),v=Me(b,[1]),S=uu(f,v,a);return n!==r&&r.dispose(),e!==s&&s.dispose(),v.dispose(),f.dispose(),p.dispose(),b.dispose(),S}const am=sm;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function im(n,e,t){const r=T(n,"x","transpose");if(e==null&&(e=r.shape.map((i,o)=>o).reverse()),x(r.rank===e.length,()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${e}.`),e.forEach(i=>{x(i>=0&&i<r.rank,()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${e}`)}),r.rank<=1)return r.clone();const s={x:r},a={perm:e};return r.dtype==="complex64"?me(()=>{let i=Xr(r),o=qs(r);return i=F.runKernel(ua,{x:i},a),o=F.runKernel(ua,{x:o},a),t&&(o=Vt(o)),bn(i,o)}):F.runKernel(ua,s,a)}const Ma=O({transpose_:im});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function om(n,e,t,r,s=!0){const a=T(n,"v","movingAverage"),i=T(e,"x","movingAverage"),o=T(t,"decay","movingAverage");E2(a,i),x(Jt(a.shape,i.shape),()=>"Shape mismatch in v and x");const u=ve(1),c=pe(u,o);let f=J(pe(i,a),c);if(s){x(r!=null,()=>"When using zeroDebias: true, step is required.");const p=T(r,"step","movingAverage");f=ye(f,pe(u,Kr(o,p)))}return ae(a,f)}const um=O({movingAverage_:om});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cm(n,e,t){dt(t);const r=T(n,"indices","scatterND","int32"),s=T(e,"updates","scatterND");Au(s,r,t);const a={indices:r,updates:s},i={shape:t};return F.runKernel(x1,a,i)}const lm=O({scatterND_:cm});function hm(n,e,t,r){if(n.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${n.dtype}.`);if(n.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${n.shape}.`);const s=n.rank>0?n.shape[0]:1,a=n.rank>1?n.shape[1]:1;if(t.length!==a)throw new Error(`outputShape has incorrect number of elements:, ${t.length}, should be: ${a}.`);const i=e.size;if(!(e.rank===0||e.rank===1&&i===s))throw new Error(`sparseValues has incorrect shape ${e.shape}, should be [] or [${s}]`);if(e.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fm(n,e,t,r=0){dt(t);const s=T(n,"sparseIndices","sparseToDense","int32"),a=T(e,"sparseValues","sparseToDense","string_or_numeric"),i=T(r,"defaultValue","sparseToDense",a.dtype);hm(s,a,t,i);const o={sparseIndices:s,sparseValues:a,defaultValue:i},u={outputShape:t};return F.runKernel(G1,o,u)}const pm=O({sparseToDense_:fm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dm(n,e){const t=T(e,"indices","gatherND","int32"),s={params:T(n,"x","gatherND","string_or_numeric"),indices:t};return F.runKernel(Sl,s)}const mm=O({gatherND_:dm});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gm(n,e){if(e==null)return n.shape.slice();if(Jt(n.shape,e))return e;if(n.shape.length===e.length){const t=[];for(let r=0;r<n.shape.length;r++)e[r]==null&&n.shape[r]!=null?t.push(n.shape[r]):t.push(e[r]);return t}return e}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ym(n,e,t,r){const s=T(n,"x","dropout");if(x(s.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${s.dtype} tensor instead.`),x(e>=0&&e<1,()=>`rate must be a float in the range [0, 1), but got ${e}.`),e===0)return n instanceof De?s.clone():s;const a=gm(s,t),i=1-e,o=ye(ou(ae(bi(a,0,1,"float32",r),i)),i);return J(s,o)}const bm=O({dropout_:ym});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ou(n){return Math.floor(Math.pow(2,Math.ceil(Math.log(n)/Math.log(2))))}function Ni(n,e,t){const r=1-n%2,s=new Float32Array(n);for(let a=0;a<n;++a){const i=2*Math.PI*a/(n+r-1);s[a]=e-t*Math.cos(i)}return Ye(s,"float32")}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function wm(n,e,t=1){const r=T(n,"predictions","inTopK"),s=T(e,"targets","inTopK");x(r.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${r.rank}`),x(r.rank-1===s.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${s.rank}`),Et(r.shape.slice(0,r.shape.length-1),s.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const a=r.shape[r.shape.length-1];x(t>0&&t<=a,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${a}), but got ${t}`);const i=await r.data(),o=await s.data(),[u,c]=[i.length/a,a],f=uc("bool",u);for(let p=0;p<u;p++){const b=p*c,v=i.subarray(b,b+c),S=[];for(let A=0;A<v.length;A++)S.push({value:v[A],index:A});S.sort((A,_)=>_.value-A.value),f[p]=0;for(let A=0;A<t;A++)if(S[A].index===o[p]){f[p]=1;break}}return n!==r&&r.dispose(),e!==s&&s.dispose(),zt(f,s.shape,"bool")}const vm=wm;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nm(n,e,t,r,s,a="NHWC",i){let o=n;n.rank===3&&(o=V(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let u=e;u.rank===3&&(u=V(e,[1,e.shape[0],e.shape[1],e.shape[2]])),x(o.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${o.shape}.`),x(u.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${u.shape}.`),x(t.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${t}.`);const c=a==="NHWC"?o.shape[3]:o.shape[1],f=a==="NHWC"?u.shape[3]:u.shape[1];x(c===t[2],()=>`Error in conv2dDerFilter: depth of input ${c}) must match input depth in filter (${t[2]}.`),x(f===t[3],()=>`Error in conv2dDerFilter: depth of dy (${f}) must match output depth for filter (${t[3]}).`),Dt("conv2dDerFilter",s,i);const p={x:o,dy:u},b={strides:r,pad:s,dataFormat:a,dimRoundingMode:i,filterShape:t};return F.runKernel(Kc,p,b)}const Tm=O({conv2DBackpropFilter_:Nm});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ti(n,e,t){if(t==null||t==="linear")return n;if(t==="relu")return J(n,_u(e));throw new Error(`Cannot compute gradient for fused activation ${t}.`)}function Si(n,e){let t=e;const r=of(n.shape,e.shape);return r.length>0&&(t=$e(t,r)),V(t,n.shape)}function Ei(n,e,t,r){if(e==="linear")return n;if(e==="relu")return Xs(n);if(e==="elu")return su(n);if(e==="relu6")return Su(n);if(e==="prelu")return vu(n,t);if(e==="leakyrelu")return lu(n,r);if(e==="sigmoid")return zn(n);throw new Error(`Unknown fused activation ${e}.`)}const xi=(n,e)=>!(n>0)||e==="linear";/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sm({x:n,filter:e,strides:t,pad:r,dataFormat:s="NHWC",dilations:a=[1,1],dimRoundingMode:i,bias:o,activation:u="linear",preluActivationWeights:c,leakyreluAlpha:f}){if(u=u||"linear",xi(F.state.gradientDepth,u)===!1){x(s==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${s} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let G=Ws(n,e,t,r,s,a,i);return o!=null&&(G=ae(G,o)),Ei(G,u,c,f)}const p=T(n,"x","conv2d","float32"),b=T(e,"filter","conv2d","float32");let v=p,S=!1;p.rank===3&&(S=!0,v=V(p,[1,p.shape[0],p.shape[1],p.shape[2]])),x(v.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${v.rank}.`),x(b.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${b.rank}.`),Dt("fused conv2d",r,i);const A=s==="NHWC"?v.shape[3]:v.shape[1];x(b.shape[2]===A,()=>`Error in conv2d: depth of input (${A}) must match input depth for filter ${b.shape[2]}.`),x(Sn(t,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${t} and dilations '${a}'`);const _=ii(v.shape,b.shape,t,a,r,i);let C;o!=null&&(C=T(o,"bias","fused conv2d"),[C]=Fe(C,p),s==="NHWC"?ze(_.outShape,C.shape):(x(C.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${C.shape.length}.`),x(C.shape.length===0||C.shape[0]===_.outChannels||C.shape[0]===1,()=>`Error in fused conv2d: bias shape (${C.shape}) is not compatible with the number of output channels (${_.outChannels})`)));let K;if(c!=null){const G=c.shape;if(x(G.length<=1||G.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${G.length}.`),G.length===1)x(G[0]===1||G[0]===_.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${G}) is not compatible with the number of output channels (${_.outChannels}).`);else if(G.length===3)try{ze(G,_.outShape)}catch{const re=`Error in fused conv2d: PReLU activation weights (${G}) is not compatible with the output shape of the conv2d (${_.outShape}).`;throw Error(re)}K=T(c,"prelu weights","fused conv2d")}const U=(G,Q)=>{x(s==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${s} but only NHWC is currently supported.`);const[re,q,te,ue]=Q,Ne=Ti(G,te,u);x(Fs(a),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${a}'`);const ie=nu(q.shape,Ne,re,t,r),ke=Tm(q,Ne,re.shape,t,r),Be=[ie,ke];if(ue!=null){const He=Si(ue,Ne);Be.push(He)}return Be},B={x:v,filter:b,bias:C,preluActivationWeights:K},W={strides:t,pad:r,dataFormat:s,dilations:a,dimRoundingMode:i,activation:u,leakyreluAlpha:f};return o==null?tn((Q,re,q)=>{let te=F.runKernel(Ci,B,W);return q([re,Q,te]),S&&(te=V(te,[te.shape[1],te.shape[2],te.shape[3]])),{value:te,gradFunc:U}})(v,b):tn((Q,re,q,te)=>{let ue=F.runKernel(Ci,B,W);return te([re,Q,ue,q]),S&&(ue=V(ue,[ue.shape[1],ue.shape[2],ue.shape[3]])),{value:ue,gradFunc:U}})(v,b,C)}const Em=O({fusedConv2d_:Sm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xm(n,e,t,r,s,a=[1,1],i){let o=n;n.rank===3&&(o=V(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let u=e;u.rank===3&&(u=V(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const c={x:o,dy:u},f={strides:r,pad:s,dimRoundingMode:i,dilations:a,filterShape:t};return F.runKernel(sl,c,f)}const km=O({depthwiseConv2dNativeBackpropFilter_:xm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _m(n,e,t,r,s,a=[1,1],i){let o=e,u=!1;e.rank===3&&(u=!0,o=V(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const c={dy:o,filter:t},f={strides:r,pad:s,dimRoundingMode:i,dilations:a,inputShape:n},p=F.runKernel(al,c,f);return u?V(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const $m=O({depthwiseConv2dNativeBackpropInput_:_m});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Am({x:n,filter:e,strides:t,pad:r,dataFormat:s="NHWC",dilations:a=[1,1],dimRoundingMode:i,bias:o,activation:u="linear",preluActivationWeights:c,leakyreluAlpha:f}){if(xi(F.state.gradientDepth,u)===!1){let W=oi(n,e,t,r,s,a,i);return o!=null&&(W=ae(W,o)),Ei(W,u,c,f)}const p=T(n,"x","depthwiseConv2d","float32"),b=T(e,"filter","depthwiseConv2d","float32");let v=p,S=!1;p.rank===3&&(S=!0,v=V(p,[1,p.shape[0],p.shape[1],p.shape[2]])),x(v.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${v.rank}.`),x(b.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${b.rank}.`),x(v.shape[3]===b.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${v.shape[3]}) must match the inChannels dimension in filter ${b.shape[2]}.`),a==null&&(a=[1,1]),x(Sn(t,a),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${t} and dilations '${a}'`),Dt("fused depthwiseConv2d",r,i);const A=ii(v.shape,b.shape,t,a,r,i,!0);let _;o!=null&&(_=T(o,"bias","fused conv2d"),[_]=Fe(_,p),ze(A.outShape,_.shape));let C;c!=null&&(C=T(c,"prelu weights","fused depthwiseConv2d"));const K=(W,G)=>{x(Fs(a),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`);const[Q,re,q,te]=G,ue=Ti(W,q,u),Ne=$m(re.shape,ue,Q,t,r,a,i),ie=km(re,ue,Q.shape,t,r,a,i);if(te!=null){const ke=Si(_,ue);return[Ne,ie,ke]}return[Ne,ie]},U={x:v,filter:b,bias:_,preluActivationWeights:C},B={strides:t,pad:r,dataFormat:s,dilations:a,dimRoundingMode:i,activation:u,leakyreluAlpha:f};return o==null?tn((G,Q,re)=>{let q=F.runKernel(Ri,U,B);return re([Q,G,q]),S&&(q=V(q,[q.shape[1],q.shape[2],q.shape[3]])),{value:q,gradFunc:K}})(v,b):tn((G,Q,re,q)=>{let te=F.runKernel(Ri,U,B);return q([Q,G,te,re]),S&&(te=V(te,[te.shape[1],te.shape[2],te.shape[3]])),{value:te,gradFunc:K}})(v,b,_)}const Im=O({fusedDepthwiseConv2d_:Am});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Om({a:n,b:e,transposeA:t=!1,transposeB:r=!1,bias:s,activation:a="linear",preluActivationWeights:i,leakyreluAlpha:o=.2}){if(xi(F.state.gradientDepth,a)===!1){let ue=Se(n,e,t,r);return s!=null&&(ue=ae(ue,s)),Ei(ue,a,i,o)}let u=T(n,"a","fused matMul"),c=T(e,"b","fused matMul");[u,c]=Fe(u,c);const f=t?u.shape[u.rank-2]:u.shape[u.rank-1],p=r?c.shape[c.rank-1]:c.shape[c.rank-2],b=t?u.shape[u.rank-1]:u.shape[u.rank-2],v=r?c.shape[c.rank-2]:c.shape[c.rank-1],S=u.shape.slice(0,-2),A=c.shape.slice(0,-2),_=Pe(S),C=Pe(A);x(f===p,()=>`Error in fused matMul: inner shapes (${f}) and (${p}) of Tensors with shapes ${u.shape} and ${c.shape} and transposeA=${t} and transposeB=${r} must match.`);const U=ze(u.shape.slice(0,-2),c.shape.slice(0,-2)).concat([b,v]),B=t?V(u,[_,f,b]):V(u,[_,b,f]),W=r?V(c,[C,v,p]):V(c,[C,p,v]);let G;s!=null&&(G=T(s,"bias","fused matMul"),[G]=Fe(G,u),ze(U,G.shape));let Q;i!=null&&(Q=T(i,"prelu weights","fused matMul"));const re=(ue,Ne)=>{const[ie,ke,Be,He]=Ne,Ve=Ti(V(ue,Be.shape),Be,a);let xt,mt;if(!t&&!r?(xt=Se(Ve,ke,!1,!0),mt=Se(ie,Ve,!0,!1)):!t&&r?(xt=Se(Ve,ke,!1,!1),mt=Se(Ve,ie,!0,!1)):t&&!r?(xt=Se(ke,Ve,!1,!0),mt=Se(ie,Ve,!1,!1)):(xt=Se(ke,Ve,!0,!0),mt=Se(Ve,ie,!0,!0)),s!=null){const En=Si(He,Ve);return[xt,mt,En]}else return[xt,mt]},q={a:B,b:W,bias:G,preluActivationWeights:Q},te={transposeA:t,transposeB:r,activation:a,leakyreluAlpha:o};return s==null?tn((Ne,ie,ke)=>{const Be=F.runKernel(Fi,q,te);return ke([Ne,ie,Be]),{value:V(Be,U),gradFunc:re}})(B,W):tn((Ne,ie,ke,Be)=>{const He=F.runKernel(Fi,q,te);return Be([Ne,ie,He,ke]),{value:V(He,U),gradFunc:re}})(B,W,G)}const Dm=O({fusedMatMul_:Om});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fm=Object.freeze(Object.defineProperty({__proto__:null,conv2d:Em,depthwiseConv2d:Im,matMul:Dm},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cm(n){return Ni(n,.54,.46)}const Rm=O({hammingWindow_:Cm});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lm(n){return Ni(n,.5,.5)}const Du=O({hannWindow_:Lm});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pm(n,e,t,r=!1,s=0){let a=0;const i=[];for(;a+e<=n.size;)i.push(fe(n,a,e)),a+=t;if(r)for(;a<n.size;){const o=a+e-n.size,u=Ge([fe(n,a,e-o),Qr([o],s)]);i.push(u),a+=t}return i.length===0?yn([],[0,e]):V(Ge(i),[i.length,e])}const Fu=O({frame_:Pm});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bm(n,e,t,r,s=Du){r==null&&(r=Ou(e));const a=Fu(n,e,t),i=J(a,s(e));return vi(i,r)}const jm=O({stft_:Bm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mm(n,e,t,r,s="bilinear",a=0){const i=T(n,"image","cropAndResize"),o=T(e,"boxes","cropAndResize","float32"),u=T(t,"boxInd","cropAndResize","int32"),c=o.shape[0];x(i.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${i.rank}.`),x(o.rank===2&&o.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${c},4] but had shape ${o.shape}.`),x(u.rank===1&&u.shape[0]===c,()=>`Error in cropAndResize: boxInd must be have size [${c}] but had shape ${o.shape}.`),x(r.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),x(r[0]>=1&&r[1]>=1,()=>`cropSize must be atleast [1,1], but was ${r}`),x(s==="bilinear"||s==="nearest",()=>`method must be bilinear or nearest, but was ${s}`);const f={image:i,boxes:o,boxInd:u},p={method:s,extrapolationValue:a,cropSize:r};return F.runKernel(el,f,p)}const zm=O({cropAndResize_:Mm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vm(n){const e=T(n,"image","flipLeftRight","float32");x(e.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${e.rank}.`);const t={image:e};return F.runKernel(bl,t,{})}const Um=O({flipLeftRight_:Vm});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wm(n){const e=T(n,"image","grayscaleToRGB"),t=e.rank-1,r=e.shape[t];x(e.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${e.rank}.`),x(r===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`);const s=new Array(e.rank);return s.fill(1,0,t),s[t]=3,Vr(e,s)}const Gm=O({grayscaleToRGB_:Wm});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Km(n){const e=T(n,"image","RGBToGrayscale"),t=e.rank-1,r=e.shape[t];x(e.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${e.rank}.`),x(r===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${r}.`);const s=e.dtype,a=Ae(e,"float32"),i=Ye([.2989,.587,.114]);let o;switch(e.rank){case 2:o=cr("ij,j->i",a,i);break;case 3:o=cr("ijk,k->ij",a,i);break;case 4:o=cr("ijkl,l->ijk",a,i);break;case 5:o=cr("ijklm,m->ijkl",a,i);break;case 6:o=cr("ijklmn,n->ijklm",a,i);break;default:throw new Error("Not a valid tensor rank.")}return o=Tt(o,-1),Ae(o,s)}const Hm=O({rgbToGrayscale_:Km});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qm(n,e,t=0,r=.5){const s=T(n,"image","rotateWithOffset","float32");x(s.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${s.rank}.`);const a={image:s},i={radians:e,fillValue:t,center:r};return F.runKernel(u2,a,i)}const Xm=O({rotateWithOffset_:qm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gr(n,e,t,r,s,a){r==null&&(r=.5),s==null&&(s=Number.NEGATIVE_INFINITY),a==null&&(a=0);const i=n.shape[0];return t=Math.min(t,i),x(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),x(n.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${n.rank}'`),x(n.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${n.shape[1]}`),x(e.rank===1,()=>"scores must be a 1D tensor"),x(e.shape[0]===i,()=>`scores has incompatible shape with boxes. Expected ${i}, but was ${e.shape[0]}`),x(0<=a&&a<=1,()=>`softNmsSigma must be in [0, 1], but was '${a}'`),{maxOutputSize:t,iouThreshold:r,scoreThreshold:s,softNmsSigma:a}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ym(n,e,t,r=.5,s=Number.NEGATIVE_INFINITY){const a=T(n,"boxes","nonMaxSuppression","float32"),i=T(e,"scores","nonMaxSuppression","float32"),o=gr(a,i,t,r,s);t=o.maxOutputSize,r=o.iouThreshold,s=o.scoreThreshold;const u={maxOutputSize:t,iouThreshold:r,scoreThreshold:s};return F.runKernel(t1,{boxes:a,scores:i},u)}const Jm=O({nonMaxSuppression_:Ym});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zm(n,e,t){const r=Qm(n,e,t),s=r<0?-(r+1):r;n.splice(s,0,e)}function Qm(n,e,t){return t0(n,e,t||e0)}function e0(n,e){return n>e?1:n<e?-1:0}function t0(n,e,t){let r=0,s=n.length,a=0,i=!1;for(;r<s;){a=r+(s-r>>>1);const o=t(e,n[a]);o>0?r=a+1:(s=a,i=!o)}return i?r:-r-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function n0(n,e,t,r,s){return ki(n,e,t,r,s,0)}function r0(n,e,t,r,s,a){return ki(n,e,t,r,s,0,!1,a,!0)}function s0(n,e,t,r,s,a){return ki(n,e,t,r,s,a,!0)}function ki(n,e,t,r,s,a,i=!1,o=!1,u=!1){const c=[];for(let _=0;_<e.length;_++)e[_]>s&&c.push({score:e[_],boxIndex:_,suppressBeginIndex:0});c.sort(Ki);const f=a>0?-.5/a:0,p=[],b=[];for(;p.length<t&&c.length>0;){const _=c.pop(),{score:C,boxIndex:K,suppressBeginIndex:U}=_;if(C<s)break;let B=!1;for(let W=p.length-1;W>=U;--W){const G=a0(n,K,p[W]);if(G>=r){B=!0;break}if(_.score=_.score*i0(r,f,G),_.score<=s)break}_.suppressBeginIndex=p.length,B||(_.score===C?(p.push(K),b.push(_.score)):_.score>s&&Zm(c,_,Ki))}const v=p.length,S=t-v;o&&S>0&&(p.push(...new Array(S).fill(0)),b.push(...new Array(S).fill(0)));const A={selectedIndices:p};return i&&(A.selectedScores=b),u&&(A.validOutputs=v),A}function a0(n,e,t){const r=n.subarray(e*4,e*4+4),s=n.subarray(t*4,t*4+4),a=Math.min(r[0],r[2]),i=Math.min(r[1],r[3]),o=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),c=Math.min(s[0],s[2]),f=Math.min(s[1],s[3]),p=Math.max(s[0],s[2]),b=Math.max(s[1],s[3]),v=(o-a)*(u-i),S=(p-c)*(b-f);if(v<=0||S<=0)return 0;const A=Math.max(a,c),_=Math.max(i,f),C=Math.min(o,p),K=Math.min(u,b),U=Math.max(C-A,0)*Math.max(K-_,0);return U/(v+S-U)}function i0(n,e,t){const r=Math.exp(e*t*t);return t<=n?r:0}function Ki(n,e){return n.score-e.score||n.score===e.score&&e.boxIndex-n.boxIndex}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function o0(n,e,t,r=.5,s=Number.NEGATIVE_INFINITY){const a=T(n,"boxes","nonMaxSuppressionAsync"),i=T(e,"scores","nonMaxSuppressionAsync"),o=gr(a,i,t,r,s);t=o.maxOutputSize,r=o.iouThreshold,s=o.scoreThreshold;const u=await Promise.all([a.data(),i.data()]),c=u[0],f=u[1],{selectedIndices:p}=n0(c,f,t,r,s);return a!==n&&a.dispose(),i!==e&&i.dispose(),Ye(p,"int32")}const u0=o0;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c0(n,e,t,r=.5,s=Number.NEGATIVE_INFINITY,a=0){const i=T(n,"boxes","nonMaxSuppression"),o=T(e,"scores","nonMaxSuppression"),u=gr(i,o,t,r,s,a);t=u.maxOutputSize,r=u.iouThreshold,s=u.scoreThreshold,a=u.softNmsSigma;const c={boxes:i,scores:o},f={maxOutputSize:t,iouThreshold:r,scoreThreshold:s,softNmsSigma:a},p=F.runKernel(r1,c,f);return{selectedIndices:p[0],selectedScores:p[1]}}const l0=O({nonMaxSuppressionWithScore_:c0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function h0(n,e,t,r=.5,s=Number.NEGATIVE_INFINITY,a=0){const i=T(n,"boxes","nonMaxSuppressionAsync"),o=T(e,"scores","nonMaxSuppressionAsync"),u=gr(i,o,t,r,s,a);t=u.maxOutputSize,r=u.iouThreshold,s=u.scoreThreshold,a=u.softNmsSigma;const c=await Promise.all([i.data(),o.data()]),f=c[0],p=c[1],{selectedIndices:b,selectedScores:v}=s0(f,p,t,r,s,a);return i!==n&&i.dispose(),o!==e&&o.dispose(),{selectedIndices:Ye(b,"int32"),selectedScores:Ye(v)}}const f0=h0;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function p0(n,e,t,r=.5,s=Number.NEGATIVE_INFINITY,a=!1){const i=T(n,"boxes","nonMaxSuppression"),o=T(e,"scores","nonMaxSuppression"),u=gr(i,o,t,r,s,null),c=u.maxOutputSize,f=u.iouThreshold,p=u.scoreThreshold,b={boxes:i,scores:o},v={maxOutputSize:c,iouThreshold:f,scoreThreshold:p,padToMaxOutputSize:a},S=F.runKernel(n1,b,v);return{selectedIndices:S[0],validOutputs:S[1]}}const d0=O({nonMaxSuppressionPadded_:p0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function m0(n,e,t,r=.5,s=Number.NEGATIVE_INFINITY,a=!1){const i=T(n,"boxes","nonMaxSuppressionAsync"),o=T(e,"scores","nonMaxSuppressionAsync"),u=gr(i,o,t,r,s,null),c=u.maxOutputSize,f=u.iouThreshold,p=u.scoreThreshold,[b,v]=await Promise.all([i.data(),o.data()]),{selectedIndices:S,validOutputs:A}=r0(b,v,c,f,p,a);return i!==n&&i.dispose(),o!==e&&o.dispose(),{selectedIndices:Ye(S,"int32"),validOutputs:ve(A,"int32")}}const g0=m0;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function y0(n,e,t=!1,r=!1){const s=T(n,"images","resizeBilinear");x(s.rank===3||s.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${s.rank}.`),x(e.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${e}.`),x(r===!1||t===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let a=s,i=!1;s.rank===3&&(i=!0,a=V(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const o={images:a},u={alignCorners:t,halfPixelCenters:r,size:e},c=F.runKernel(v1,o,u);return i?V(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const b0=O({resizeBilinear_:y0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w0(n,e,t=!1,r=!1){const s=T(n,"images","resizeNearestNeighbor");x(s.rank===3||s.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${s.rank}.`),x(e.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${e}.`),x(s.dtype==="float32"||s.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),x(r===!1||t===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let a=s,i=!1;s.rank===3&&(i=!0,a=V(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const o={images:a},u={alignCorners:t,halfPixelCenters:r,size:e},c=F.runKernel(w1,o,u);return i?V(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const v0=O({resizeNearestNeighbor_:w0});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N0(n,e="binary",t=!1,r=.5){const s=T(n,"image","threshold"),a=.2989,i=.587,o=.114,u=s.shape[0]*s.shape[1];let c=J(Ye([r]),255),f,p,b,v;if(x(s.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${s.rank}.`),x(s.shape[2]===3||s.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${s.shape[2]}.`),x(s.dtype==="int32"||s.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${s.dtype}.`),x(e==="otsu"||e==="binary",()=>`Method must be binary or otsu, but was ${e}`),s.shape[2]===3){[f,p,b]=Yr(s,[1,1,1],-1);const _=J(f,a),C=J(p,i),K=J(b,o);v=ae(ae(_,C),K)}else v=n;if(e==="otsu"){const _=eu(Ae(Eu(v),"int32"),zt([]),256);c=T0(_,u)}const S=t?ui(v,c):Hs(v,c);return Ae(J(S,255),"int32")}function T0(n,e){let t=Ye([-1]),r=Ye([0]),s=Ye([0]),a,i,o,u,c,f;for(let p=0;p<n.size-1;p++){a=fe(n,0,p+1),i=fe(n,p+1),c=ye($e(a),e),f=ye($e(i),e);const b=$e(J(a,qr(0,a.size)));o=ye(b,$e(a));const v=Qr(i.shape,a.size),S=ae(qr(0,i.size),v),A=J(i,S);u=ye($e(A),$e(i));const _=pe(o,u),C=pe(o,u),K=J(c,f);s=J(J(K,_),C);const U=Hs(s,r);r=gn(U,s,r),t=gn(U,Ye([p]),t)}return t}const S0=O({threshold_:N0});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function E0(n,e,t="nearest",r="constant",s=0,a){const i=T(n,"image","transform","float32"),o=T(e,"transforms","transform","float32");x(i.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${i.rank}.`),x(o.rank===2&&(o.shape[0]===i.shape[0]||o.shape[0]===1)&&o.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),x(a==null||a.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${a}.`);const u={image:i,transforms:o},c={interpolation:t,fillMode:r,fillValue:s,outputShape:a};return F.runKernel(n2,u,c)}const x0=O({transform_:E0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function k0(n,e,t){const r=T(n,"a","bandPart");x(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);const s=r.shape,[a,i]=r.shape.slice(-2);let o,u;typeof e=="number"?(x(e%1===0,()=>`bandPart(): numLower must be an integer, got ${e}.`),x(e<=a,()=>`bandPart(): numLower (${e}) must not be greater than the number of rows (${a}).`),o=T(e<0?a:e,"numLower","bandPart")):(x(e.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),o=gn(ja(e,0),a,Ls(e,a))),typeof t=="number"?(x(t%1===0,()=>`bandPart(): numUpper must be an integer, got ${t}.`),x(t<=i,()=>`bandPart(): numUpper (${t}) must not be greater than the number of columns (${i}).`),u=T(t<0?i:t,"numUpper","bandPart")):(x(t.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),u=gn(ja(t,0),i,Ls(t,i)));const c=V(qr(0,a,1,"int32"),[-1,1]),f=qr(0,i,1,"int32"),p=pe(c,f),b=Cs(ui(p,o),cu(p,Vt(u))),v=dr([a,i],r.dtype);return V(nn(Yn(V(r,[-1,a,i])).map(S=>gn(b,S,v))),s)}const _0=O({bandPart_:k0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $0(n){let e;if(Array.isArray(n)){e=!1,x(n!=null&&n.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const s=n[0].shape[0];for(let a=1;a<n.length;++a)x(n[a].shape[0]===s,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${n[a].shape[0]} vs. ${s})`)}else e=!0,n=Yr(n,n.shape[0],0).map(s=>Me(s,[0]));x(n.length<=n[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${n.length}) exceeds number of dimensions (${n[0].shape[0]}).`);const t=[],r=n;for(let s=0;s<n.length;++s)t.push(F.tidy(()=>{let a=r[s];if(s>0)for(let i=0;i<s;++i){const o=J($e(J(t[i],a)),t[i]);a=pe(a,o)}return ye(a,Ks(a,"euclidean"))}));return e?nn(t,0):t}const A0=O({gramSchmidt_:$0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function I0(n,e=!1){if(x(n.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${n.rank}`),n.rank===2)return Hi(n,e);{const t=n.shape.slice(0,n.shape.length-2).reduce((u,c)=>u*c),r=Yn(V(n,[t,n.shape[n.shape.length-2],n.shape[n.shape.length-1]]),0),s=[],a=[];r.forEach(u=>{const[c,f]=Hi(u,e);s.push(c),a.push(f)});const i=V(nn(s,0),n.shape),o=V(nn(a,0),n.shape);return[i,o]}}function Hi(n,e=!1){return F.tidy(()=>{x(n.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${n.shape.length}D Tensor.`);const t=n.shape[0],r=n.shape[1];let s=iu(t),a=mn(n);const i=yn([[1]],[1,1]);let o=mn(i);const u=t>=r?r:t;for(let c=0;c<u;++c){const f=a,p=o,b=s;[o,a,s]=F.tidy(()=>{const v=fe(a,[c,c],[t-c,1]),S=Ks(v),A=fe(a,[c,c],[1,1]),_=gn(Hs(A,0),yn([[-1]]),yn([[1]])),C=pe(A,J(_,S)),K=ye(v,C);K.shape[0]===1?o=mn(i):o=Ge([i,fe(K,[1,0],[K.shape[0]-1,K.shape[1]])],0);const U=Vt(ye(Se(_,C),S)),B=fe(a,[c,0],[t-c,r]),W=J(U,o),G=Ma(o);if(c===0)a=pe(B,Se(W,Se(G,B)));else{const q=pe(B,Se(W,Se(G,B)));a=Ge([fe(a,[0,0],[c,r]),q],0)}const Q=Ma(W),re=fe(s,[0,c],[t,s.shape[1]-c]);if(c===0)s=pe(re,Se(Se(re,o),Q));else{const q=pe(re,Se(Se(re,o),Q));s=Ge([fe(s,[0,0],[t,c]),q],1)}return[o,a,s]}),Oe([f,p,b])}return!e&&t>r&&(s=fe(s,[0,0],[t,r]),a=fe(a,[0,0],[r,r])),[s,a]})}const O0=O({qr_:I0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var et;(function(n){n[n.NONE=0]="NONE",n[n.MEAN=1]="MEAN",n[n.SUM=2]="SUM",n[n.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(et||(et={}));function D0(n,e,t=et.SUM_BY_NONZERO_WEIGHTS){const r=T(n,"losses","computeWeightedLoss");let s=null;e!=null&&(s=T(e,"weights","computeWeightedLoss"));const a=s==null?r:J(r,s);if(t===et.NONE)return a;if(t===et.SUM)return $e(a);if(t===et.MEAN){if(s==null)return Rs(a);{const i=r.size/s.size,o=ye($e(a),$e(s));return i>1?ye(o,ve(i)):o}}if(t===et.SUM_BY_NONZERO_WEIGHTS){if(s==null)return ye($e(a),ve(r.size));{const i=J(s,Mn(r.shape)),o=Ae($e(bu(i,ve(0))),"float32");return ye($e(a),o)}}throw Error(`Unknown reduction: ${t}`)}const an=O({computeWeightedLoss_:D0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F0(n,e,t,r=et.SUM_BY_NONZERO_WEIGHTS){const s=T(n,"labels","absoluteDifference"),a=T(e,"predictions","absoluteDifference");let i=null;t!=null&&(i=T(t,"weights","absoluteDifference")),Et(s.shape,a.shape,"Error in absoluteDifference: ");const o=ft(pe(s,a));return an(o,i,r)}const C0=O({absoluteDifference_:F0});function R0(n,e,t,r,s=et.SUM_BY_NONZERO_WEIGHTS){const a=T(n,"labels","cosineDistance"),i=T(e,"predictions","cosineDistance");let o=null;r!=null&&(o=T(r,"weights","cosineDistance")),Et(a.shape,i.shape,"Error in cosineDistance: ");const u=ve(1),c=pe(u,$e(J(a,i),t,!0));return an(c,o,s)}const L0=O({cosineDistance_:R0});function P0(n,e,t,r=et.SUM_BY_NONZERO_WEIGHTS){let s=T(n,"labels","hingeLoss");const a=T(e,"predictions","hingeLoss");let i=null;t!=null&&(i=T(t,"weights","hingeLoss")),Et(s.shape,a.shape,"Error in hingeLoss: ");const o=ve(1);s=pe(J(ve(2),s),o);const u=Xs(pe(o,J(s,a)));return an(u,i,r)}const B0=O({hingeLoss_:P0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function j0(n,e,t,r=1,s=et.SUM_BY_NONZERO_WEIGHTS){const a=T(n,"labels","huberLoss"),i=T(e,"predictions","huberLoss");let o=null;t!=null&&(o=T(t,"weights","huberLoss")),Et(a.shape,i.shape,"Error in huberLoss: ");const u=ve(r),c=ft(pe(i,a)),f=Ls(c,u),p=pe(c,f),b=ae(J(ve(.5),At(f)),J(u,p));return an(b,o,s)}const M0=O({huberLoss_:j0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z0(n,e,t,r=1e-7,s=et.SUM_BY_NONZERO_WEIGHTS){const a=T(n,"labels","logLoss"),i=T(e,"predictions","logLoss");let o=null;t!=null&&(o=T(t,"weights","logLoss")),Et(a.shape,i.shape,"Error in logLoss: ");const u=ve(1),c=ve(r),f=Vt(J(a,Hr(ae(i,c)))),p=J(pe(u,a),Hr(ae(pe(u,i),c))),b=pe(f,p);return an(b,o,s)}const V0=O({logLoss_:z0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function U0(n,e,t,r=et.SUM_BY_NONZERO_WEIGHTS){const s=T(n,"labels","meanSquaredError"),a=T(e,"predictions","meanSquaredError");let i=null;t!=null&&(i=T(t,"weights","meanSquaredError")),Et(s.shape,a.shape,"Error in meanSquaredError: ");const o=ku(s,a);return an(o,i,r)}const W0=O({meanSquaredError_:U0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function G0(n,e){const t=T(n,"labels","sigmoidCrossEntropyWithLogits"),r=T(e,"logits","sigmoidCrossEntropyWithLogits");Et(t.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");const s=Xs(r),a=J(r,t),i=hu(en(Vt(ft(r))));return ae(pe(s,a),i)}function K0(n,e,t,r=0,s=et.SUM_BY_NONZERO_WEIGHTS){let a=T(n,"multiClassLabels","sigmoidCrossEntropy");const i=T(e,"logits","sigmoidCrossEntropy");let o=null;if(t!=null&&(o=T(t,"weights","sigmoidCrossEntropy")),Et(a.shape,i.shape,"Error in sigmoidCrossEntropy: "),r>0){const c=ve(r),f=ve(1),p=ve(.5);a=ae(J(a,pe(f,c)),J(p,c))}const u=G0(a,i);return an(u,o,s)}const H0=O({sigmoidCrossEntropy_:K0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function q0(n,e,t=-1){if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${e.rank} and dim was ${t}`);return tn((s,a,i)=>{const u=pu(a,[t],!0),c=pe(Ae(a,"float32"),u);i([s,c]);const f=Vt(J(c,s));return{value:$e(f,[t]),gradFunc:(v,S)=>{const[A,_]=S,C=Gs(v.shape,[t]);return[J(V(v,C),pe(Ae(A,"float32"),en(_))),J(V(v,C),pe(en(_),Ae(A,"float32")))]}}})(n,e)}function X0(n,e,t,r=0,s=et.SUM_BY_NONZERO_WEIGHTS){let a=T(n,"onehotLabels","softmaxCrossEntropy");const i=T(e,"logits","softmaxCrossEntropy");let o=null;if(t!=null&&(o=T(t,"weights","softmaxCrossEntropy")),Et(a.shape,i.shape,"Error in softmaxCrossEntropy: "),r>0){const c=ve(r),f=ve(1),p=ve(a.shape[1]);a=ae(J(a,pe(f,c)),ye(c,p))}const u=q0(a,i);return an(u,o,s)}const Y0=O({softmaxCrossEntropy_:X0});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J0(n,e,t,r){const s=T(n,"indices","sparseFillEmptyRows","int32"),a=T(e,"values","sparseFillEmptyRows"),i=T(t,"denseShape","sparseFillEmptyRows","int32"),o=T(r,"defaultValue","sparseFillEmptyRows",a.dtype);if(s.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${s.shape}`);if(a.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${a.shape}`);if(i.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${i.shape}`);if(o.rank!==0)throw new Error(`Default value should be a scalar but received shape ${o.shape}`);const u={indices:s,values:a,denseShape:i,defaultValue:o},c=F.runKernel(z1,u);return{outputIndices:c[0],outputValues:c[1],emptyRowIndicator:c[2],reverseIndexMap:c[3]}}const Z0=O({sparseFillEmptyRows_:J0});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q0(n,e,t){const r=T(n,"inputIndices","sparseReshape","int32"),s=T(e,"inputShape","sparseReshape","int32"),a=T(t,"newShape","sparseReshape","int32");if(r.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${r.shape}`);if(s.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${s.shape}`);if(a.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${a.shape}`);const i={inputIndices:r,inputShape:s,newShape:a},o=F.runKernel(V1,i);return{outputIndices:o[0],outputShape:o[1]}}const eg=O({sparseReshape_:Q0});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tg(n,e,t){const r=T(n,"data","sparseSegmentMean"),s=T(e,"indices","sparseSegmentMean","int32"),a=T(t,"segmentIds","sparseSegmentMean","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${s.shape}`);if(a.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${a.shape}`);const i={data:r,indices:s,segmentIds:a};return F.runKernel(U1,i)}const ng=O({sparseSegmentMean_:tg});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rg(n,e,t){const r=T(n,"data","sparseSegmentSum"),s=T(e,"indices","sparseSegmentSum","int32"),a=T(t,"segmentIds","sparseSegmentSum","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${s.shape}`);if(a.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${a.shape}`);const i={data:r,indices:s,segmentIds:a};return F.runKernel(W1,i)}const sg=O({sparseSegmentSum_:rg});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ag(n,e,t,r,s,a,i,o){const u=T(n,"data","stringNGrams","string");if(u.dtype!=="string")throw new Error("Data must be of datatype string");if(u.shape.length!==1)throw new Error(`Data must be a vector, saw: ${u.shape}`);const c=T(e,"dataSplits","stringNGrams");if(c.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const f={separator:t,nGramWidths:r,leftPad:s,rightPad:a,padWidth:i,preserveShortSequences:o},p={data:u,dataSplits:c},b=F.runKernel(X1,p,f);return{nGrams:b[0],nGramsSplits:b[1]}}const ig=O({stringNGrams_:ag});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function og(n,e,t=!0){const r=T(n,"input","stringSplit","string"),s=T(e,"delimiter","stringSplit","string");if(r.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${r.shape}`);if(s.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${s.shape}`);const a={skipEmpty:t},i={input:r,delimiter:s},o=F.runKernel(Y1,i,a);return{indices:o[0],values:o[1],shape:o[2]}}const ug=O({stringSplit_:og});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cg(n,e){const t=T(n,"input","stringToHashBucketFast","string"),r={numBuckets:e};if(e<=0)throw new Error("Number of buckets must be at least 1");const s={input:t};return F.runKernel(J1,s,r)}const lg=O({stringToHashBucketFast_:cg});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hg(n,e,t,r=!0){const s=T(n,"input","staticRegexReplace","string"),a={pattern:e,rewrite:t,replaceGlobal:r};return F.runKernel(H1,{x:s},a)}const fg=O({staticRegexReplace_:hg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pg={fft:wi,ifft:Ps,rfft:vi,irfft:xu},dg={hammingWindow:Rm,hannWindow:Du,frame:Fu,stft:jm},yr={flipLeftRight:Um,grayscaleToRGB:Gm,resizeNearestNeighbor:v0,resizeBilinear:b0,rgbToGrayscale:Hm,rotateWithOffset:Xm,cropAndResize:zm,nonMaxSuppression:Jm,nonMaxSuppressionAsync:u0,nonMaxSuppressionWithScore:l0,nonMaxSuppressionWithScoreAsync:f0,nonMaxSuppressionPadded:d0,nonMaxSuppressionPaddedAsync:g0,threshold:S0,transform:x0},mg={bandPart:_0,gramSchmidt:A0,qr:O0},gg={absoluteDifference:C0,computeWeightedLoss:an,cosineDistance:L0,hingeLoss:B0,huberLoss:M0,logLoss:V0,meanSquaredError:W0,sigmoidCrossEntropy:H0,softmaxCrossEntropy:Y0},yg={sparseFillEmptyRows:Z0,sparseReshape:eg,sparseSegmentMean:ng,sparseSegmentSum:sg},bg={stringNGrams:ig,stringSplit:ug,stringToHashBucketFast:lg,staticRegexReplace:fg};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wg=new Map,vg=new Map;class Ng{getClassName(){return this.constructor.className}static fromConfig(e,t){return new e(t)}}class Pn{constructor(){this.classNameMap={}}static getMap(){return Pn.instance==null&&(Pn.instance=new Pn),Pn.instance}static register(e){Pn.getMap().classNameMap[e.className]=[e,e.fromConfig]}}function Tg(n,e,t){x(n.className!=null,()=>"Class being registered does not have the static className property defined."),x(typeof n.className=="string",()=>"className is required to be a string, but got type "+typeof n.className),x(n.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof e>"u"&&(e="Custom"),typeof t>"u"&&(t=n.className);const r=t,s=e+">"+r;return Pn.register(n),wg.set(s,n),vg.set(n,s),n}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Jn extends Ng{minimize(e,t=!1,r){const{value:s,grads:a}=this.computeGradients(e,r);if(r!=null){const i=r.map(o=>({name:o.name,tensor:a[o.name]}));this.applyGradients(i)}else this.applyGradients(a);return Oe(a),t?s:(s.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(e,t){return np(e,t)}dispose(){this.iterations_!=null&&Oe(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:ve(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(e){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(e){return this.iterations_=(await e[0].tensor.data())[0],e.slice(1)}}Object.defineProperty(Jn,Symbol.hasInstance,{value:n=>n.minimize!=null&&n.computeGradients!=null&&n.applyGradients!=null});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Sg extends Jn{static get className(){return"Adadelta"}constructor(e,t,r=null){super(),this.learningRate=e,this.rho=t,this.epsilon=r,this.accumulatedGrads=[],this.accumulatedUpdates=[],r==null&&(this.epsilon=F.backend.epsilon())}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=F.registeredVariables[r],i=!1;this.accumulatedGrads[s]==null&&(this.accumulatedGrads[s]={originalName:`${r}/accum_grad`,variable:me(()=>pt(a).variable(i))}),this.accumulatedUpdates[s]==null&&(this.accumulatedUpdates[s]={originalName:`${r}/accum_var`,variable:me(()=>pt(a).variable(i))});const o=Array.isArray(e)?e[s].tensor:e[r];if(o==null)return;const u=this.accumulatedGrads[s].variable,c=this.accumulatedUpdates[s].variable;me(()=>{const f=ae(J(u,this.rho),J(At(o),1-this.rho)),p=J(ye(Qt(ae(c,this.epsilon)),Qt(ae(u,this.epsilon))),o),b=ae(J(c,this.rho),J(At(p),1-this.rho));u.assign(f),c.assign(b);const v=ae(J(p,-this.learningRate),a);a.assign(v)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(Oe(this.accumulatedGrads.map(e=>e.variable)),Oe(this.accumulatedUpdates.map(e=>e.variable)))}async getWeights(){const e=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(e){e=await this.extractIterations(e);const t=e.length/2,r=!1;this.accumulatedGrads=e.slice(0,t).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedUpdates=e.slice(t,t*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.rho,t.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Eg extends Jn{static get className(){return"Adagrad"}constructor(e,t=.1){super(),this.learningRate=e,this.initialAccumulatorValue=t,this.accumulatedGrads=[]}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=F.registeredVariables[r];this.accumulatedGrads[s]==null&&(this.accumulatedGrads[s]={originalName:`${r}/accumulator`,variable:me(()=>Qr(a.shape,this.initialAccumulatorValue).variable(!1))});const i=Array.isArray(e)?e[s].tensor:e[r];if(i==null)return;const o=this.accumulatedGrads[s].variable;me(()=>{const u=ae(o,At(i));o.assign(u);const c=ae(J(ye(i,Qt(ae(u,F.backend.epsilon()))),-this.learningRate),a);a.assign(c)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&Oe(this.accumulatedGrads.map(e=>e.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);const t=!1;this.accumulatedGrads=e.map(r=>({originalName:r.name,variable:r.tensor.variable(t)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(e,t){return new e(t.learningRate,t.initialAccumulatorValue)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class xg extends Jn{static get className(){return"Adam"}constructor(e,t,r,s=null){super(),this.learningRate=e,this.beta1=t,this.beta2=r,this.epsilon=s,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],me(()=>{this.accBeta1=ve(t).variable(),this.accBeta2=ve(r).variable()}),s==null&&(this.epsilon=F.backend.epsilon())}applyGradients(e){const t=Array.isArray(e)?e.map(r=>r.name):Object.keys(e);me(()=>{const r=pe(1,this.accBeta1),s=pe(1,this.accBeta2);t.forEach((a,i)=>{const o=F.registeredVariables[a],u=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${a}/m`,variable:me(()=>pt(o).variable(u))}),this.accumulatedSecondMoment[i]==null&&(this.accumulatedSecondMoment[i]={originalName:`${a}/v`,variable:me(()=>pt(o).variable(u))});const c=Array.isArray(e)?e[i].tensor:e[a];if(c==null)return;const f=this.accumulatedFirstMoment[i].variable,p=this.accumulatedSecondMoment[i].variable,b=ae(J(f,this.beta1),J(c,1-this.beta1)),v=ae(J(p,this.beta2),J(At(c),1-this.beta2)),S=ye(b,r),A=ye(v,s);f.assign(b),p.assign(v);const _=ae(J(ye(S,ae(Qt(A),this.epsilon)),-this.learningRate),o);o.assign(_)}),this.accBeta1.assign(J(this.accBeta1,this.beta1)),this.accBeta2.assign(J(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Oe(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedSecondMoment!=null&&Oe(this.accumulatedSecondMoment.map(e=>e.variable))}async getWeights(){const e=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(e){e=await this.extractIterations(e),me(()=>{this.accBeta1.assign(Kr(this.beta1,this.iterations_+1)),this.accBeta2.assign(Kr(this.beta2,this.iterations_+1))});const t=e.length/2,r=!1;this.accumulatedFirstMoment=e.slice(0,t).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedSecondMoment=e.slice(t,t*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class kg extends Jn{static get className(){return"Adamax"}constructor(e,t,r,s=null,a=0){super(),this.learningRate=e,this.beta1=t,this.beta2=r,this.epsilon=s,this.decay=a,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],me(()=>{this.iteration=ve(0).variable(),this.accBeta1=ve(t).variable()}),s==null&&(this.epsilon=F.backend.epsilon())}applyGradients(e){const t=Array.isArray(e)?e.map(r=>r.name):Object.keys(e);me(()=>{const r=pe(1,this.accBeta1),s=ye(-this.learningRate,ae(J(this.iteration,this.decay),1));t.forEach((a,i)=>{const o=F.registeredVariables[a],u=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${a}/m`,variable:pt(o).variable(u)}),this.accumulatedWeightedInfNorm[i]==null&&(this.accumulatedWeightedInfNorm[i]={originalName:`${a}/v`,variable:pt(o).variable(u)});const c=Array.isArray(e)?e[i].tensor:e[a];if(c==null)return;const f=this.accumulatedFirstMoment[i].variable,p=this.accumulatedWeightedInfNorm[i].variable,b=ae(J(f,this.beta1),J(c,1-this.beta1)),v=J(p,this.beta2),S=ft(c),A=yu(v,S);f.assign(b),p.assign(A);const _=ae(J(ye(s,r),ye(b,ae(A,this.epsilon))),o);o.assign(_)}),this.iteration.assign(ae(this.iteration,1)),this.accBeta1.assign(J(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Oe(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedWeightedInfNorm!=null&&Oe(this.accumulatedWeightedInfNorm.map(e=>e.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(e){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Cu extends Jn{static get className(){return"SGD"}constructor(e){super(),this.learningRate=e,this.setLearningRate(e)}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=Array.isArray(e)?e[s].tensor:e[r];if(a==null)return;const i=F.registeredVariables[r];me(()=>{const o=ae(J(this.c,a),i);i.assign(o)})}),this.incrementIterations()}setLearningRate(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=jt(ve(-e))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(e){if(e=await this.extractIterations(e),e.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(e,t){return new e(t.learningRate)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class _g extends Cu{static get className(){return"Momentum"}constructor(e,t,r=!1){super(e),this.learningRate=e,this.momentum=t,this.useNesterov=r,this.accumulations=[],this.m=ve(this.momentum)}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=F.registeredVariables[r];this.accumulations[s]==null&&(this.accumulations[s]={originalName:`${r}/momentum`,variable:me(()=>pt(a).variable(!1))});const i=this.accumulations[s].variable,o=Array.isArray(e)?e[s].tensor:e[r];o!=null&&me(()=>{let u;const c=ae(J(this.m,i),o);this.useNesterov?u=ae(J(this.c,ae(o,J(c,this.m))),a):u=ae(J(this.c,c),a),i.assign(c),a.assign(u)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&Oe(this.accumulations.map(e=>e.variable))}setMomentum(e){this.momentum=e}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);const t=!1;this.accumulations=e.map(r=>({originalName:r.name,variable:r.tensor.variable(t)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class $g extends Jn{static get className(){return"RMSProp"}constructor(e,t=.9,r=0,s=null,a=!1){if(super(),this.learningRate=e,this.decay=t,this.momentum=r,this.epsilon=s,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=a,s==null&&(this.epsilon=F.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=F.registeredVariables[r],i=!1;this.accumulatedMeanSquares[s]==null&&(this.accumulatedMeanSquares[s]={originalName:`${r}/rms`,variable:me(()=>pt(a).variable(i))}),this.accumulatedMoments[s]==null&&(this.accumulatedMoments[s]={originalName:`${r}/momentum`,variable:me(()=>pt(a).variable(i))}),this.accumulatedMeanGrads[s]==null&&this.centered&&(this.accumulatedMeanGrads[s]={originalName:`${r}/mg`,variable:me(()=>pt(a).variable(i))});const o=Array.isArray(e)?e[s].tensor:e[r];if(o==null)return;const u=this.accumulatedMeanSquares[s].variable,c=this.accumulatedMoments[s].variable;me(()=>{const f=ae(J(u,this.decay),J(At(o),1-this.decay));if(this.centered){const p=this.accumulatedMeanGrads[s].variable,b=ae(J(p,this.decay),J(o,1-this.decay)),v=ye(J(o,this.learningRate),Qt(pe(f,ae(At(b),this.epsilon)))),S=ae(J(c,this.momentum),v);u.assign(f),p.assign(b),c.assign(S);const A=pe(a,S);a.assign(A)}else{const p=ae(J(u,this.decay),J(At(o),1-this.decay)),b=ae(J(c,this.momentum),ye(J(o,this.learningRate),Qt(ae(p,this.epsilon))));u.assign(p),c.assign(b);const v=pe(a,b);a.assign(v)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&Oe(this.accumulatedMeanSquares.map(e=>e.variable)),this.accumulatedMeanGrads!=null&&this.centered&&Oe(this.accumulatedMeanGrads.map(e=>e.variable)),this.accumulatedMoments!=null&&Oe(this.accumulatedMoments.map(e=>e.variable))}async getWeights(){const e=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&e.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(e){e=await this.extractIterations(e);const t=this.centered?e.length/3:e.length/2,r=!1;this.accumulatedMeanSquares=e.slice(0,t).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedMoments=e.slice(t,t*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.centered&&(this.accumulatedMeanGrads=e.slice(t*2,t*3).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ag=[Sg,Eg,xg,kg,_g,$g,Cu];function Ig(){for(const n of Ag)Tg(n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Og="model",Dg=".json",Fg=".weights.bin";function qi(n){return new Promise(e=>setTimeout(e)).then(n)}class Hn{constructor(e){if(!be().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(Hn.URL_SCHEME)&&(e=e.slice(Hn.URL_SCHEME.length)),(e==null||e.length===0)&&(e=Og),this.modelJsonFileName=e+Dg,this.weightDataFileName=e+Fg}async save(e){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const t=Ot.join(e.weightData),r=window.URL.createObjectURL(new Blob([t],{type:"application/octet-stream"}));if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const s=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],a=zo(e,s),i=window.URL.createObjectURL(new Blob([JSON.stringify(a)],{type:"application/json"})),o=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(o.download=this.modelJsonFileName,o.href=i,await qi(()=>o.dispatchEvent(new MouseEvent("click"))),e.weightData!=null){const u=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;u.download=this.weightDataFileName,u.href=r,await qi(()=>u.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:Zr(e)}}}}Hn.URL_SCHEME="downloads://";class Cg{constructor(e){if(e==null||e.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);this.jsonFile=e[0],this.weightsFiles=e.slice(1)}async load(){return new Promise((e,t)=>{const r=new FileReader;r.onload=s=>{const a=JSON.parse(s.target.result),i=a.modelTopology;if(i==null){t(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(a.weightsManifest==null){t(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){e({modelTopology:i});return}const u=ai(a,c=>this.loadWeights(c));e(u)},r.onerror=s=>t(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),r.readAsText(this.jsonFile)})}loadWeights(e){const t=[],r=[];for(const i of e)t.push(...i.weights),r.push(...i.paths);const s=this.checkManifestAndWeightFiles(e),a=r.map(i=>this.loadWeightsFile(i,s[i]));return Promise.all(a).then(i=>[t,i])}loadWeightsFile(e,t){return new Promise((r,s)=>{const a=new FileReader;a.onload=i=>{const o=i.target.result;r(o)},a.onerror=i=>s(`Failed to weights data from file of path '${e}'.`),a.readAsArrayBuffer(t)})}checkManifestAndWeightFiles(e){const t=[],r=this.weightsFiles.map(a=>Gi(a.name)),s={};for(const a of e)a.paths.forEach(i=>{const o=Gi(i);if(t.indexOf(o)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${o}'`);if(t.push(o),r.indexOf(o)===-1)throw new Error(`Weight file with basename '${o}' is not provided.`);s[i]=this.weightsFiles[r.indexOf(o)]});if(t.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${t.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return s}}const Rg=n=>be().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Hn.URL_SCHEME)?Lg(n.slice(Hn.URL_SCHEME.length)):null;Ie.registerSaveRouter(Rg);function Lg(n="model"){return new Hn(n)}function Pg(n){return new Cg(n)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xi(n,e,t,r){i(n),t=t??0,r=r??1,o(t,r);let s=0;const a=u=>(u.then(c=>{const f=t+ ++s/n.length*(r-t);return e(f),c}),u);function i(u){x(u!=null&&Array.isArray(u)&&u.length>0,()=>"promises must be a none empty array")}function o(u,c){x(u>=0&&u<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${u}`),x(c>=0&&c<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${c}`),x(c>=u,()=>`startFraction must be no more than endFraction, but got startFraction ${u} and endFraction ${c}`)}return Promise.all(n.map(a))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Ru(n,e){e==null&&(e={});const t=e.fetchFunc==null?be().platform.fetch:e.fetchFunc,r=n.map(p=>t(p,e.requestInit,{isBinary:!0})),o=(e.onProgress==null?await Promise.all(r):await Xi(r,e.onProgress,0,.5)).map(p=>p.arrayBuffer());return e.onProgress==null?await Promise.all(o):await Xi(o,e.onProgress,.5,1)}function Bg(n,e){var t;const r=e.fetchFunc==null?be().platform.fetch:e.fetchFunc;let s=0,a;return(t=e.onProgress)===null||t===void 0||t.call(e,0),new ReadableStream({pull:async i=>{for(var o;s<n.length;){a||(a=(await r(n[s],e.requestInit,{isBinary:!0})).body.getReader());const{done:u,value:c}=await a.read();if(u){s++,a=void 0,(o=e.onProgress)===null||o===void 0||o.call(e,s/n.length);continue}i.enqueue(c);return}i.close()}})}async function jg(n,e="",t,r){return Lu(i=>Ru(i,{requestInit:r}))(n,e,t)}function Lu(n){return async(e,t="",r)=>{const s=e.map(()=>!1),a={},i=r!=null?r.map(()=>!1):[],o=[];if(e.forEach((v,S)=>{let A=0;v.weights.forEach(_=>{const C="quantization"in _?_.quantization.dtype:_.dtype,K=Un[C]*Pe(_.shape),U=()=>{s[S]=!0,a[S]==null&&(a[S]=[]),a[S].push({manifestEntry:_,groupOffset:A,sizeBytes:K})};r!=null?r.forEach((B,W)=>{B===_.name&&(U(),i[W]=!0)}):U(),o.push(_.name),A+=K})}),!i.every(v=>v)){const v=r.filter((S,A)=>!i[A]);throw new Error(`Could not find weights in manifest with names: ${v.join(", ")}. 
Manifest JSON has weights with names: ${o.join(", ")}.`)}const u=s.reduce((v,S,A)=>(S&&v.push(A),v),[]),c=[];u.forEach(v=>{e[v].paths.forEach(S=>{const A=t+(t.endsWith("/")?"":"/")+S;c.push(A)})});const f=await n(c),p={};let b=0;return u.forEach(v=>{const S=e[v].paths.length,A=new Ot(f.slice(b,b+S));a[v].forEach(C=>{const K=A.slice(C.groupOffset,C.groupOffset+C.sizeBytes),U=Bo(K,[C.manifestEntry]);for(const B in U)p[B]=U[B]}),b+=S}),p}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Mg="application/octet-stream",zg="application/json";class _i{constructor(e,t){if(this.DEFAULT_METHOD="POST",t==null&&(t={}),this.weightPathPrefix=t.weightPathPrefix,this.weightUrlConverter=t.weightUrlConverter,t.fetchFunc!=null?(x(typeof t.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=t.fetchFunc):this.fetch=be().platform.fetch,x(e!=null&&e.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(e)&&x(e.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,t.requestInit!=null&&t.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t.requestInit||{},this.loadOptions=t}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);t.body=new FormData;const r=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],s=zo(e,r);if(t.body.append("model.json",new Blob([JSON.stringify(s)],{type:zg}),"model.json"),e.weightData!=null){const i=Ot.join(e.weightData);t.body.append("model.weights.bin",new Blob([i],{type:Mg}),"model.weights.bin")}const a=await this.fetch(this.path,t);if(a.ok)return{modelArtifactsInfo:Zr(e),responses:[a]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${a.status}.`)}async loadModelJSON(){const e=await this.fetch(this.path,this.requestInit);if(!e.ok)throw new Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let t;try{t=await e.json()}catch{let i=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?i+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":i+=" Please make sure the server is serving valid JSON for this request.",new Error(i)}const r=t.modelTopology,s=t.weightsManifest;if(r==null&&s==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return t}async load(){if(this.loadOptions.streamWeights)return this.loadStream();const e=await this.loadModelJSON();return ai(e,t=>this.loadWeights(t))}async loadStream(){const e=await this.loadModelJSON(),t=await this.getWeightUrls(e.weightsManifest),r=Da(e.weightsManifest),s=()=>Bg(t,this.loadOptions);return Object.assign(Object.assign({},e),{weightSpecs:r,getWeightStream:s})}async getWeightUrls(e){const t=Array.isArray(this.path)?this.path[1]:this.path,[r,s]=Vg(t),a=this.weightPathPrefix||r,i=[],o=[];for(const u of e)for(const c of u.paths)this.weightUrlConverter!=null?o.push(this.weightUrlConverter(c)):i.push(a+c+s);return this.weightUrlConverter&&i.push(...await Promise.all(o)),i}async loadWeights(e){const t=await this.getWeightUrls(e),r=Da(e),s=await Ru(t,this.loadOptions);return[r,s]}}_i.URL_SCHEME_REGEX=/^https?:\/\//;function Vg(n){const e=n.lastIndexOf("/"),t=n.lastIndexOf("?"),r=n.substring(0,e),s=t>e?n.substring(t):"";return[r+"/",s]}function za(n){return n.match(_i.URL_SCHEME_REGEX)!=null}const Pu=(n,e)=>{if(typeof fetch>"u"&&(e==null||e.fetchFunc==null))return null;{let t=!0;if(Array.isArray(n)?t=n.every(r=>za(r)):t=za(n),t)return $i(n,e)}return null};Ie.registerSaveRouter(Pu);Ie.registerLoadRouter(Pu);function $i(n,e){return new _i(n,e)}function Ug(n,e){return $i(n,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class fa{constructor(e){this.modelArtifacts=e}load(){return this.modelArtifacts}}class Bu{constructor(e){this.saveHandler=e}save(e){return this.saveHandler(e)}}class Wg{constructor(e){e.load&&(this.load=()=>Promise.resolve(e.load())),e.save&&(this.save=t=>Promise.resolve(e.save(t)))}}function Gg(n,e,t,r){const s=arguments;return new Wg(ju(...s))}function ju(n,e,t,r){return arguments.length===1?n.modelTopology!=null||n.weightSpecs!=null?new fa(n):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new fa({modelTopology:n})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new fa({modelTopology:n,weightSpecs:e,weightData:t,trainingConfig:r}))}function Kg(n){return new Bu(n)}function Hg(n){return new Bu(n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Mu=Object.freeze(Object.defineProperty({__proto__:null,CompositeArrayBuffer:Ot,browserFiles:Pg,browserHTTPRequest:Ug,concatenateArrayBuffers:j2,copyModel:o3,decodeWeights:Bo,decodeWeightsStream:Mo,encodeWeights:F2,fromMemory:Gg,fromMemorySync:ju,getLoadHandlers:H2,getModelArtifactsForJSON:ai,getModelArtifactsForJSONSync:Vo,getModelArtifactsInfoForJSON:Zr,getSaveHandlers:K2,getWeightSpecs:Da,http:$i,isHTTPScheme:za,listModels:a3,loadWeights:jg,moveModel:u3,registerLoadRouter:G2,registerSaveRouter:W2,removeModel:i3,weightsLoaderFactory:Lu,withSaveHandler:Kg,withSaveHandlerSync:Hg},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Rn;function qg(n,e=3){if(e>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(n==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let t=!1,r=!1,s=!1,a=!1,i=!1,o=!1;if(n.data instanceof Uint8Array)t=!0;else if(typeof ImageData<"u"&&n instanceof ImageData)r=!0;else if(typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement)s=!0;else if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement)a=!0;else if(n.getContext!=null)i=!0;else if(typeof ImageBitmap<"u"&&n instanceof ImageBitmap)o=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${n.constructor.name}`);if(ka(Di,F.backendName)!=null){const S={pixels:n},A={numChannels:e};return F.runKernel(Di,S,A)}const[c,f]=s?[n.videoWidth,n.videoHeight]:[n.width,n.height];let p;if(i)p=n.getContext("2d").getImageData(0,0,c,f).data;else if(r||t)p=n.data;else if(a||s||o){if(Rn==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")Rn=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else Rn=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});Rn.canvas.width=c,Rn.canvas.height=f,Rn.drawImage(n,0,0,c,f),p=Rn.getImageData(0,0,c,f).data}let b;if(e===4)b=new Int32Array(p);else{const S=c*f;b=new Int32Array(S*e);for(let A=0;A<S;A++)for(let _=0;_<e;++_)b[A*e+_]=p[A*4+_]}return $u(b,[f,c,e],"int32")}function Xg(n){if(n.rank!==2&&n.rank!==3)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${n.rank}.`);const e=n.rank===2?1:n.shape[2];if(e>4||e===2)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${e}`);if(n.dtype!=="float32"&&n.dtype!=="int32")throw new Error(`Unsupported type for toPixels: ${n.dtype}. Please use float32 or int32 tensors.`)}async function zu(n,e){let t=T(n,"img","toPixels");if(!(n instanceof De)){const c=t;t=Ae(c,"int32"),c.dispose()}Xg(t);const[r,s]=t.shape.slice(0,2),a=t.rank===2?1:t.shape[2],i=await t.data(),o=t.dtype==="float32"?255:1,u=new Uint8ClampedArray(s*r*4);for(let c=0;c<r*s;++c){const f=[0,0,0,255];for(let b=0;b<a;b++){const v=i[c*a+b];if(t.dtype==="float32"){if(v<0||v>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${v}.`)}else if(t.dtype==="int32"&&(v<0||v>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${v}.`);a===1?(f[0]=v*o,f[1]=v*o,f[2]=v*o):f[b]=v*o}const p=c*4;u[p+0]=Math.round(f[0]),u[p+1]=Math.round(f[1]),u[p+2]=Math.round(f[2]),u[p+3]=Math.round(f[3])}return t!==n&&t.dispose(),u}const Vu=O({fromPixels_:qg});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Ig();/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yg=be();Yg.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,n=>{n&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */var ot;(function(n){n[n.DT_INVALID=0]="DT_INVALID",n[n.DT_FLOAT=1]="DT_FLOAT",n[n.DT_DOUBLE=2]="DT_DOUBLE",n[n.DT_INT32=3]="DT_INT32",n[n.DT_UINT8=4]="DT_UINT8",n[n.DT_INT16=5]="DT_INT16",n[n.DT_INT8=6]="DT_INT8",n[n.DT_STRING=7]="DT_STRING",n[n.DT_COMPLEX64=8]="DT_COMPLEX64",n[n.DT_INT64=9]="DT_INT64",n[n.DT_BOOL=10]="DT_BOOL",n[n.DT_QINT8=11]="DT_QINT8",n[n.DT_QUINT8=12]="DT_QUINT8",n[n.DT_QINT32=13]="DT_QINT32",n[n.DT_BFLOAT16=14]="DT_BFLOAT16",n[n.DT_QINT16=15]="DT_QINT16",n[n.DT_QUINT16=16]="DT_QUINT16",n[n.DT_UINT16=17]="DT_UINT16",n[n.DT_COMPLEX128=18]="DT_COMPLEX128",n[n.DT_HALF=19]="DT_HALF",n[n.DT_RESOURCE=20]="DT_RESOURCE",n[n.DT_VARIANT=21]="DT_VARIANT",n[n.DT_UINT32=22]="DT_UINT32",n[n.DT_UINT64=23]="DT_UINT64",n[n.DT_FLOAT_REF=101]="DT_FLOAT_REF",n[n.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",n[n.DT_INT32_REF=103]="DT_INT32_REF",n[n.DT_UINT8_REF=104]="DT_UINT8_REF",n[n.DT_INT16_REF=105]="DT_INT16_REF",n[n.DT_INT8_REF=106]="DT_INT8_REF",n[n.DT_STRING_REF=107]="DT_STRING_REF",n[n.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",n[n.DT_INT64_REF=109]="DT_INT64_REF",n[n.DT_BOOL_REF=110]="DT_BOOL_REF",n[n.DT_QINT8_REF=111]="DT_QINT8_REF",n[n.DT_QUINT8_REF=112]="DT_QUINT8_REF",n[n.DT_QINT32_REF=113]="DT_QINT32_REF",n[n.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",n[n.DT_QINT16_REF=115]="DT_QINT16_REF",n[n.DT_QUINT16_REF=116]="DT_QUINT16_REF",n[n.DT_UINT16_REF=117]="DT_UINT16_REF",n[n.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",n[n.DT_HALF_REF=119]="DT_HALF_REF",n[n.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",n[n.DT_VARIANT_REF=121]="DT_VARIANT_REF",n[n.DT_UINT32_REF=122]="DT_UINT32_REF",n[n.DT_UINT64_REF=123]="DT_UINT64_REF"})(ot||(ot={}));var Yi;(function(n){(function(e){e[e.LEGACY=0]="LEGACY",e[e.V1=1]="V1",e[e.V2=2]="V2"})(n.CheckpointFormatVersion||(n.CheckpointFormatVersion={}))})(Yi||(Yi={}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jg={};function Uu(n){return Jg[n]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d(n,e,t,r,s){const a=e.inputParams[n];if(a&&a.inputIndexStart!==void 0){const o=a.inputIndexStart,u=a.inputIndexEnd===0?void 0:a.inputIndexEnd===void 0?o+1:a.inputIndexEnd,c=o<0?e.inputNames.length+o:o;if(a.type==="tensor")return We(e.inputNames[c],t,r,s);if(a.type==="tensors"){const b=e.inputs.slice(o,u);return e.inputNames.slice(o,u).filter((S,A)=>{var _;return((_=b[A])===null||_===void 0?void 0:_.op)!=="NoOp"}).map(S=>We(S,t,r,s))}const f=We(e.inputNames[c],t,r,s),p=f.dataSync();return a.type==="number"?p[0]:xa(f.shape,p)}const i=e.attrParams[n];return i&&i.value}function We(n,e,t,r){const[s,a]=ut(n,t);if(r!=null){const o=r.getHashTableHandleByName(s);if(o!=null)return o}const i=t.currentContextIds.find(o=>!!e[Bs(s,o)]);return i!==void 0?e[Bs(s,i)][a]:void 0}function Ji(n,e,t){return e[Bs(n,t.currentContextId)]}function Kt(n,e){const[t,r,s]=ut(n,e);return[Bs(t,e&&e.currentContextId),r,s]}function Bs(n,e){return e?`${n}-${e}`:n}function ut(n,e){if(n==="")return["",0,void 0];const t=e!=null&&e.parseNodeNameCache!=null;if(t){const a=e.parseNodeNameCache.get(n);if(a!=null)return a}const r=n.split(":");let s;if(r.length===1)s=[n,0,void 0];else{const a=r[0],i=r.length===3?r[1]:void 0,o=Number(r[r.length-1]);s=[a,o,i]}return t&&e.parseNodeNameCache.set(n,s),s}function $s(n,e,t){let r=d("pad",n,e,t);if(r==="explicit"){r=d("explicitPaddings",n,e,t);const s=[[0,0],[0,0],[0,0],[0,0]];for(let a=0;a<4;a++)s[a][0]=r[a*2],s[a][1]=r[a*2+1];return s}return r}function Ht(n){return n.kept?n:mn(n)}/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zg=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],Qg=Object.freeze(Object.defineProperty({__proto__:null,json:Zg},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ey=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsFinite",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsInf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],ty=Object.freeze(Object.defineProperty({__proto__:null,json:ey},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ny=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}],ry=Object.freeze(Object.defineProperty({__proto__:null,json:ny},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sy=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}],ay=Object.freeze(Object.defineProperty({__proto__:null,json:sy},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const iy=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniformInt",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number"},{tfName:"maxval",name:"maxval",type:"number"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}],oy=Object.freeze(Object.defineProperty({__proto__:null,json:iy},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const uy=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],cy=Object.freeze(Object.defineProperty({__proto__:null,json:uy},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ly=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}],hy=Object.freeze(Object.defineProperty({__proto__:null,json:ly},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fy=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}],py=Object.freeze(Object.defineProperty({__proto__:null,json:fy},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dy=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"InitializeTable",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]},{tfOpName:"InitializeTableV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],my=Object.freeze(Object.defineProperty({__proto__:null,json:dy},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gy=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}],yy=Object.freeze(Object.defineProperty({__proto__:null,json:gy},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const by=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BitwiseAnd",category:"logical",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}]}],wy=Object.freeze(Object.defineProperty({__proto__:null,json:by},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vy=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"MatrixBandPart",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"numLower",type:"tensor"},{start:1,name:"numUpper",type:"tensor"}]}],Ny=Object.freeze(Object.defineProperty({__proto__:null,json:vy},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ty=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]}],Sy=Object.freeze(Object.defineProperty({__proto__:null,json:Ty},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ey=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}],xy=Object.freeze(Object.defineProperty({__proto__:null,json:Ey},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ky=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]},{tfOpName:"TensorScatterUpdate",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],_y=Object.freeze(Object.defineProperty({__proto__:null,json:ky},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $y=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}],Ay=Object.freeze(Object.defineProperty({__proto__:null,json:$y},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Iy=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}],Oy=Object.freeze(Object.defineProperty({__proto__:null,json:Iy},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dy=[{tfOpName:"StaticRegexReplace",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"pattern",name:"pattern",type:"string"},{tfName:"rewrite",name:"rewrite",type:"string"},{tfName:"replace_global",name:"replaceGlobal",type:"bool"}]},{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}],Fy=Object.freeze(Object.defineProperty({__proto__:null,json:Dy},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cy=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"EnsureShape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}],Ry=Object.freeze(Object.defineProperty({__proto__:null,json:Cy},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Zi{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const e=[Qg,ty,ry,ay,oy,cy,hy,py,my,yy,wy,Ny,Sy,xy,_y,Ay,Oy,Fy,Ry],t=[].concat(...e.map(r=>r.json));this.opMappers=t.reduce((r,s)=>(r[s.tfOpName]=s,r),{})}transformGraph(e,t={}){const r=e.node,s=[],a=[],i=[],o=r.reduce((A,_)=>(A[_.name]=this.mapNode(_),_.op.startsWith("Placeholder")?s.push(A[_.name]):_.op==="Const"?a.push(A[_.name]):(_.input==null||_.input.length===0)&&i.push(A[_.name]),A),{});let u=[];const c=[];let f={},p={};t!=null&&(f=this.mapSignatureEntries(t.inputs),p=this.mapSignatureEntries(t.outputs));const b=Object.keys(o);b.forEach(A=>{const _=o[A];_.inputNames.forEach((C,K)=>{const[U,,B]=Kt(C),W=o[U];if(W.outputs!=null){const G=W.outputs.indexOf(B);if(G!==-1){const Q=`${U}:${G}`;_.inputNames[K]=Q}}_.inputs.push(W),W.children.push(_)})}),Object.keys(p).length===0?b.forEach(A=>{const _=o[A];_.children.length===0&&c.push(_)}):Object.keys(p).forEach(A=>{const[_]=Kt(A),C=o[_];C!=null&&(C.signatureKey=p[A],c.push(C))}),Object.keys(f).length>0?Object.keys(f).forEach(A=>{const[_]=Kt(A),C=o[_];C&&(C.signatureKey=f[A],u.push(C))}):u=s;let v={};e.library!=null&&e.library.function!=null&&(v=e.library.function.reduce((A,_)=>(A[_.signature.name]=this.mapFunction(_),A),{}));const S={nodes:o,inputs:u,outputs:c,weights:a,placeholders:s,signature:t,functions:v};return i.length>0&&(S.initNodes=i),S}mapSignatureEntries(e){return Object.keys(e||{}).reduce((t,r)=>(t[e[r].name]=r,t),{})}mapNode(e){const t=Uu(e.op)||this.opMappers[e.op]||{};e.attr==null&&(e.attr={});const r={name:e.name,op:e.op,category:t.category,inputNames:(e.input||[]).map(s=>s.startsWith("^")?s.slice(1):s),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:e.attr,outputs:t.outputs};return t.inputs!=null&&(r.inputParams=t.inputs.reduce((s,a)=>(s[a.name]={type:a.type,inputIndexStart:a.start,inputIndexEnd:a.end},s),{})),t.attrs!=null&&(r.attrParams=t.attrs.reduce((s,a)=>{const i=a.type;let o;switch(a.type){case"string":o=Va(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=Va(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"string[]":o=Xa(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=Xa(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"number":o=Wa(e.attr,a.tfName,a.defaultValue||0),o===void 0&&a.tfDeprecatedName&&(o=Wa(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"number[]":o=qa(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=qa(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"bool":o=Ua(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=Ua(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"bool[]":o=Ja(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=Ja(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"shape":o=Ha(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=Ha(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"shape[]":o=Ya(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=Ya(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"dtype":o=Ga(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=Ga(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"dtype[]":o=Ka(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=Ka(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"func":o=Qi(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=Qi(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${a.type} for op: ${e.op}`)}return s[a.name]={value:o,type:i},s},{})),r}mapFunction(e){const t=e.nodeDef,r=[],s=[];let a={};t!=null&&(a=t.reduce((p,b)=>(p[b.name]=this.mapNode(b),b.op==="Const"&&s.push(p[b.name]),p),{}));const i=[],o=[];e.signature.inputArg.forEach(p=>{const[b]=Kt(p.name),v={name:b,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:Ai(p.type),type:"dtype"}},children:[]};v.signatureKey=p.name,i.push(v),a[b]=v}),Object.keys(a).forEach(p=>{const b=a[p];b.inputNames.forEach((v,S)=>{const[A,,_]=Kt(v),C=a[A];if(C.outputs!=null){const K=C.outputs.indexOf(_);if(K!==-1){const U=`${A}:${K}`;b.inputNames[S]=U}}b.inputs.push(C),C.children.push(b)})});const c=e.ret;e.signature.outputArg.forEach(p=>{const[b,v]=Kt(c[p.name]),S=a[b];S!=null&&(S.defaultOutput=v,o.push(S))});const f=this.mapArgsToSignature(e);return{nodes:a,inputs:i,outputs:o,weights:s,placeholders:r,signature:f}}mapArgsToSignature(e){return{methodName:e.signature.name,inputs:e.signature.inputArg.reduce((t,r)=>(t[r.name]=this.mapArgToTensorInfo(r),t),{}),outputs:e.signature.outputArg.reduce((t,r)=>(t[r.name]=this.mapArgToTensorInfo(r,e.ret),t),{})}}mapArgToTensorInfo(e,t){let r=e.name;return t!=null&&(r=t[r]),{name:r,dtype:e.type}}}function Ly(n){const e=be().global;if(typeof e.atob<"u")return e.atob(n);if(typeof Buffer<"u")return new Buffer(n,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function Wu(n,e){const t=Array.isArray(n)?String.fromCharCode.apply(null,n):Ly(n);return e?t:t.toLowerCase()}function Va(n,e,t,r=!1){const s=n[e];return s!=null?Wu(s.s,r):t}function Ua(n,e,t){const r=n[e];return r?r.b:t}function Wa(n,e,t){const r=n[e]||{},s=r.i!=null?r.i:r.f!=null?r.f:t;return typeof s=="number"?s:parseInt(s,10)}function Ai(n){switch(typeof n=="string"&&(n=ot[n]),n){case ot.DT_FLOAT:case ot.DT_HALF:return"float32";case ot.DT_INT32:case ot.DT_INT64:case ot.DT_INT8:case ot.DT_UINT8:return"int32";case ot.DT_BOOL:return"bool";case ot.DT_DOUBLE:return"float32";case ot.DT_STRING:return"string";case ot.DT_COMPLEX64:case ot.DT_COMPLEX128:return"complex64";default:return null}}function Qi(n,e,t){const r=n[e];return r&&r.func?r.func.name:t}function Ga(n,e,t){const r=n[e];return r&&r.type?Ai(r.type):t}function Ka(n,e,t){const r=n[e];return r&&r.list&&r.list.type?r.list.type.map(s=>Ai(s)):t}function Gu(n){if(!n.unknownRank)return n.dim!=null?n.dim.map(e=>typeof e.size=="number"?e.size:parseInt(e.size,10)):[]}function Ha(n,e,t){const r=n[e];return r&&r.shape?Gu(r.shape):t}function qa(n,e,t){const r=n[e];return r?((r.list.f&&r.list.f.length?r.list.f:r.list.i)||[]).map(s=>typeof s=="number"?s:parseInt(s,10)):t}function Xa(n,e,t,r=!1){const s=n[e];return s&&s.list&&s.list.s?s.list.s.map(a=>Wu(a,r)):t}function Ya(n,e,t){const r=n[e];return r&&r.list&&r.list.shape?r.list.shape.map(s=>Gu(s)):t}function Ja(n,e,t){const r=n[e];return r&&r.list&&r.list.b?r.list.b:t}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Py{constructor(e,t,r){this.node=e,this.tensorMap=t,this.context=r,this.inputs=[],this.attrs={},this.inputs=e.inputNames.map(s=>this.getInput(s)),e.rawAttrs!=null&&(this.attrs=Object.keys(e.rawAttrs).reduce((s,a)=>(s[a]=this.getAttr(a),s),{}))}getInput(e){return We(e,this.tensorMap,this.context)}getAttr(e,t){const r=this.node.rawAttrs[e];if(r.tensor!=null)return We(e,this.tensorMap,this.context);if(r.i!=null||r.f!=null)return Wa(this.node.rawAttrs,e,t);if(r.s!=null)return Va(this.node.rawAttrs,e,t);if(r.b!=null)return Ua(this.node.rawAttrs,e,t);if(r.shape!=null)return Ha(this.node.rawAttrs,e,t);if(r.type!=null)return Ga(this.node.rawAttrs,e,t);if(r.list!=null){if(r.list.i!=null||r.list.f!=null)return qa(this.node.rawAttrs,e,t);if(r.list.s!=null)return Xa(this.node.rawAttrs,e,t);if(r.list.shape!=null)return Ya(this.node.rawAttrs,e,t);if(r.list.b!=null)return Ja(this.node.rawAttrs,e,t);if(r.list.type!=null)return Ka(this.node.rawAttrs,e,t)}return t}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ke=Object.freeze(Object.defineProperty({__proto__:null,OP_SCOPE_SUFFIX:Po,abs:ft,acos:N3,acosh:S3,add:ae,addN:x3,all:_3,any:A3,argMax:O3,argMin:F3,asin:R3,asinh:P3,atan:j3,atan2:z3,atanh:U3,avgPool:Zo,avgPool3d:J3,basicLSTMCell:sh,batchNorm:Us,batchNorm2d:ch,batchNorm3d:hh,batchNorm4d:ph,batchToSpaceND:Qo,bincount:eu,bitwiseAnd:gh,booleanMaskAsync:am,broadcastArgs:bh,broadcastTo:_s,buffer:Zt,cast:Ae,ceil:Nh,clipByValue:tu,clone:mn,complex:bn,concat:Ge,concat1d:Eh,concat2d:kh,concat3d:$h,concat4d:Ih,conv1d:Fh,conv2d:Ws,conv2dTranspose:Lh,conv3d:Bh,conv3dTranspose:Vh,cos:Wh,cosh:Kh,cosineWindow:Ni,cumprod:qh,cumsum:Yh,denseBincount:Zh,depthToSpace:ef,depthwiseConv2d:oi,diag:rf,dilation2d:af,div:ye,divNoNan:ff,dot:df,dropout:bm,einsum:cr,elu:su,enclosingPowerOfTwo:Ou,ensureShape:bf,equal:ru,erf:vf,euclideanNorm:If,exp:en,expandDims:Tt,expm1:Cf,eye:iu,fft:wi,fill:Qr,floor:ou,floorDiv:Jo,fused:Fm,gather:uu,gatherND:mm,greater:Hs,greaterEqual:cu,ifft:Ps,imag:qs,image:yr,inTopKAsync:vm,irfft:xu,isFinite:Uf,isInf:Gf,isNaN:Hf,leakyRelu:lu,less:ja,lessEqual:ui,linalg:mg,linspace:Jf,localResponseNormalization:Qf,log:Hr,log1p:hu,logSigmoid:ip,logSoftmax:cp,logSumExp:pu,logicalAnd:Cs,logicalNot:du,logicalOr:mu,logicalXor:mp,losses:gg,lowerBound:yp,matMul:Se,max:hr,maxPool:gu,maxPool3d:vp,maxPoolWithArgmax:Tp,maximum:yu,mean:Rs,meshgrid:xp,min:Ba,minimum:Ls,mirrorPad:$p,mod:Ip,moments:Dp,movingAverage:um,mul:J,multiRNNCell:Cp,multinomial:Lp,neg:Vt,norm:Ks,notEqual:bu,oneHot:jp,ones:Mn,onesLike:zp,op:O,outerProduct:Up,pad:es,pad1d:Kp,pad2d:qp,pad3d:Yp,pad4d:Zp,pool:r4,pow:Kr,prelu:vu,print:Yo,prod:i4,raggedGather:u4,raggedRange:l4,raggedTensorToTensor:f4,rand:d4,randomGamma:C4,randomNormal:Tu,randomStandardNormal:P4,randomUniform:bi,randomUniformInt:M4,range:qr,real:Xr,reciprocal:U4,relu:Xs,relu6:Su,reshape:V,reverse:Kn,reverse1d:q4,reverse2d:Y4,reverse3d:Z4,reverse4d:ed,rfft:vi,round:Eu,rsqrt:rd,scalar:ve,scatterND:lm,searchSorted:ci,selu:ad,separableConv2d:od,setdiff1dAsync:cd,sigmoid:zn,sign:hd,signal:dg,sin:pd,sinh:md,slice:fe,slice1d:yd,slice2d:wd,slice3d:Nd,slice4d:Sd,softmax:xd,softplus:fu,spaceToBatchND:wu,sparse:yg,sparseToDense:pm,spectral:pg,split:Yr,sqrt:Qt,square:At,squaredDifference:ku,squeeze:Me,stack:nn,step:_u,stridedSlice:Ld,string:bg,sub:pe,sum:$e,tan:Bd,tanh:Pa,tensor:zt,tensor1d:Ye,tensor2d:yn,tensor3d:$u,tensor4d:jd,tensor5d:Md,tensor6d:zd,tensorScatterUpdate:Wd,tile:Vr,topk:Kd,transpose:Ma,truncatedNormal:qd,unique:Yd,unsortedSegmentSum:Zd,unstack:Yn,upperBound:em,variable:tm,where:gn,whereAsync:Iu,zeros:dr,zerosLike:pt},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const By=(n,e,t,r=Ke)=>{switch(n.op){case"BiasAdd":case"AddV2":case"Add":return[r.add(d("a",n,e,t),d("b",n,e,t))];case"AddN":return[r.addN(d("tensors",n,e,t))];case"FloorMod":case"Mod":return[r.mod(d("a",n,e,t),d("b",n,e,t))];case"Mul":return[r.mul(d("a",n,e,t),d("b",n,e,t))];case"RealDiv":case"Div":return[r.div(d("a",n,e,t),d("b",n,e,t))];case"DivNoNan":return[r.divNoNan(d("a",n,e,t),d("b",n,e,t))];case"FloorDiv":return[r.floorDiv(d("a",n,e,t),d("b",n,e,t))];case"Sub":return[r.sub(d("a",n,e,t),d("b",n,e,t))];case"Minimum":return[r.minimum(d("a",n,e,t),d("b",n,e,t))];case"Maximum":return[r.maximum(d("a",n,e,t),d("b",n,e,t))];case"Pow":return[r.pow(d("a",n,e,t),d("b",n,e,t))];case"SquaredDifference":return[r.squaredDifference(d("a",n,e,t),d("b",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jy=(n,e,t,r=Ke)=>{switch(n.op){case"Abs":case"ComplexAbs":return[r.abs(d("x",n,e,t))];case"Acos":return[r.acos(d("x",n,e,t))];case"Acosh":return[r.acosh(d("x",n,e,t))];case"Asin":return[r.asin(d("x",n,e,t))];case"Asinh":return[r.asinh(d("x",n,e,t))];case"Atan":return[r.atan(d("x",n,e,t))];case"Atan2":return[r.atan2(d("x",n,e,t),d("y",n,e,t))];case"Atanh":return[r.atanh(d("x",n,e,t))];case"Ceil":return[r.ceil(d("x",n,e,t))];case"Complex":return[r.complex(d("real",n,e,t),d("imag",n,e,t))];case"Cos":return[r.cos(d("x",n,e,t))];case"Cosh":return[r.cosh(d("x",n,e,t))];case"Elu":return[r.elu(d("x",n,e,t))];case"Erf":return[r.erf(d("x",n,e,t))];case"Exp":return[r.exp(d("x",n,e,t))];case"Expm1":return[r.expm1(d("x",n,e,t))];case"Floor":return[r.floor(d("x",n,e,t))];case"Log":return[r.log(d("x",n,e,t))];case"Log1p":return[r.log1p(d("x",n,e,t))];case"Imag":return[r.imag(d("x",n,e,t))];case"Neg":return[r.neg(d("x",n,e,t))];case"Reciprocal":return[r.reciprocal(d("x",n,e,t))];case"Real":return[r.real(d("x",n,e,t))];case"Relu":return[r.relu(d("x",n,e,t))];case"Round":return[r.round(d("x",n,e,t))];case"Selu":return[r.selu(d("x",n,e,t))];case"Sigmoid":return[r.sigmoid(d("x",n,e,t))];case"Sin":return[r.sin(d("x",n,e,t))];case"Sign":return[r.sign(d("x",n,e,t))];case"Sinh":return[r.sinh(d("x",n,e,t))];case"Softplus":return[r.softplus(d("x",n,e,t))];case"Sqrt":return[r.sqrt(d("x",n,e,t))];case"Square":return[r.square(d("x",n,e,t))];case"Tanh":return[r.tanh(d("x",n,e,t))];case"Tan":return[r.tan(d("x",n,e,t))];case"ClipByValue":return[r.clipByValue(d("x",n,e,t),d("clipValueMin",n,e,t),d("clipValueMax",n,e,t))];case"Relu6":return[r.relu6(d("x",n,e,t))];case"Rsqrt":return[r.rsqrt(We(n.inputNames[0],e,t))];case"LeakyRelu":return[r.leakyRelu(d("x",n,e,t),d("alpha",n,e,t))];case"Prelu":return[r.prelu(d("x",n,e,t),d("alpha",n,e,t))];case"IsNan":return[r.isNaN(We(n.inputNames[0],e,t))];case"IsInf":return[r.isInf(We(n.inputNames[0],e,t))];case"IsFinite":return[r.isFinite(We(n.inputNames[0],e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nt(n,e,t=""){if(!(typeof n=="number"||typeof e=="number")){x(n.length===e.length,()=>t+` Shapes ${n} and ${e} must match`);for(let r=0;r<n.length;r++){const s=n[r],a=e[r];x(s<0||a<0||s===a,()=>t+` Shapes ${n} and ${e} must match`)}}}function eo(n){return!(typeof n=="number"||n.some(e=>e<0))}function jr(n,e,t){let r=Za(n,t);const s=!eo(r);if(s&&e.length===0)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${r}`);if(s&&e.forEach(a=>{r=Za(a.shape,r)}),!eo(r))throw new Error(`Non-fully-defined elementShape: ${r}`);return r}function Za(n,e){if(typeof n=="number")return e;if(typeof e=="number")return n;if(n.length!==e.length)throw new Error(`Incompatible ranks during merge: ${n} vs. ${e}`);const t=[];for(let r=0;r<n.length;++r){const s=n[r],a=e[r];if(s>=0&&a>=0&&s!==a)throw new Error(`Incompatible shape during merge: ${n} vs. ${e}`);t[r]=s>=0?s:a}return t}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class My{constructor(e,t,r,s,a,i,o){this.name=e,this.dtype=t,this.maxSize=r,this.elementShape=s,this.identicalElementShapes=a,this.dynamicSize=i,this.clearAfterRead=o,this.tensors=[],this.closed_=!1,this.idTensor=ve(0),jt(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(e){this.tensors.forEach(t=>{(e==null||!e.has(t.tensor.id))&&t.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||e>=this.size())throw new Error(`Tried to read from index ${e}, but array size is: ${this.size()}`);const t=this.tensors[e];if(t.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${e} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(t.cleared=!0),t.read=!0,t.tensor}readMany(e){return e.map(t=>this.read(t))}write(e,t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||!this.dynamicSize&&e>=this.maxSize)throw new Error(`Tried to write to index ${e}, but array is not resizeable and size is: ${this.maxSize}`);const r=this.tensors[e]||{};if(t.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e},
          because the value dtype is ${t.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=t.shape),Nt(this.elementShape,t.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${e}.`),r.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been read.`);if(r.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been written.`);r.tensor=t,jt(t),r.written=!0,this.tensors[e]=r}writeMany(e,t){if(e.length!==t.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${e.length} is not the same as tensors size: ${t.length}.`);e.forEach((r,s)=>this.write(r,t[s]))}gather(e,t){if(t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${t}`);if(e)e=e.slice(0,this.size());else{e=[];for(let s=0;s<this.size();s++)e.push(s)}if(e.length===0)return zt([],[0].concat(this.elementShape));const r=this.readMany(e);return Nt(this.elementShape,r[0].shape,"TensorArray shape mismatch: "),nn(r,0)}concat(e){if(e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${e}`);if(this.size()===0)return zt([],[0].concat(this.elementShape));const t=[];for(let s=0;s<this.size();s++)t.push(s);const r=this.readMany(t);return Nt(this.elementShape,r[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${r[0].shape})`),Ge(r,0)}scatter(e,t){if(t.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);if(e.length!==t.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);const r=Math.max(...e);if(!this.dynamicSize&&r>=this.maxSize)throw new Error(`Max index must be < array size (${r}  vs. ${this.maxSize})`);this.writeMany(e,Yn(t,0))}split(e,t){if(t.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);let r=0;const s=e.map(u=>(r+=u,r));if(r!==t.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${t.shape}`);if(!this.dynamicSize&&e.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${e.length}), and the TensorArray is not marked as dynamically resizeable`);const a=r===0?0:t.size/r,i=[];me(()=>{t=V(t,[1,r,a]);for(let u=0;u<e.length;++u){const f=[0,u===0?0:s[u-1],0],p=[1,e[u],a];i[u]=V(fe(t,f,p),this.elementShape)}return i});const o=[];for(let u=0;u<e.length;u++)o[u]=u;this.writeMany(o,i)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class qn{get id(){return this.idTensor.id}constructor(e,t,r,s=-1){this.tensors=e,this.elementShape=t,this.elementDtype=r,e!=null&&e.forEach(a=>{if(r!==a.dtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${a.dtype}`);Nt(t,a.shape,"TensorList shape mismatch: "),jt(a)}),this.idTensor=ve(0),this.maxNumElements=s,jt(this.idTensor)}copy(){return new qn([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(e){this.tensors.forEach(t=>{(e==null||!e.has(t.id))&&t.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(e,t,r=-1){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(r!==-1&&this.tensors.length!==r)throw new Error(`Operation expected a list with ${r} elements but got a list with ${this.tensors.length} elements.`);Nt(e,this.elementShape,"TensorList shape mismatch: ");const s=jr(this.elementShape,this.tensors,e);return me(()=>{const a=this.tensors.map(i=>V(i,s));return nn(a,0)})}popBack(e,t){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(this.size()===0)throw new Error("Trying to pop from an empty list.");const r=jr(this.elementShape,this.tensors,e),s=this.tensors.pop();return s.kept=!1,Nt(s.shape,e,"TensorList shape mismatch: "),V(s,r)}pushBack(e){if(e.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(Nt(e.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");jt(e),this.tensors.push(e)}resize(e){if(e<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${e}`);if(this.maxNumElements!==-1&&e>this.maxNumElements)throw new Error(`TensorListResize input size ${e} is greater maxNumElement ${this.maxNumElements}.`);const t=new qn([],this.elementShape,this.elementDtype,this.maxNumElements);t.tensors.length=e;for(let r=0;r<Math.min(this.tensors.length,e);++r)t.tensors[r]=this.tensors[r];return t}getItem(e,t,r){if(r!==this.elementDtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${this.elementDtype}`);if(e<0||e>this.tensors.length)throw new Error(`Trying to access element ${e} in a list with ${this.tensors.length} elements.`);if(this.tensors[e]==null)throw new Error(`element at index ${e} is null.`);Nt(this.tensors[e].shape,t,"TensorList shape mismatch: ");const s=jr(this.elementShape,this.tensors,t);return V(this.tensors[e],s)}setItem(e,t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(e<0||this.maxNumElements!==-1&&e>=this.maxNumElements)throw new Error(`Trying to set element ${e} in a list with max ${this.maxNumElements} elements.`);Nt(this.elementShape,t.shape,"TensorList shape mismatch: "),jt(t),this.tensors[e]!=null&&(this.tensors[e].kept=!1),this.tensors[e]=t}gather(e,t,r){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);Nt(this.elementShape,r,"TensorList shape mismatch: "),e=e.slice(0,this.size());const s=jr(this.elementShape,this.tensors,r);return e.length===0?zt([],[0].concat(s)):me(()=>{const a=e.map(i=>V(this.tensors[i],s));return nn(a,0)})}concat(e,t){if(e&&e!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${e}`);Nt(this.elementShape,t,"TensorList shape mismatch: ");const r=jr(this.elementShape,this.tensors,t);return this.size()===0?zt([],[0].concat(r)):me(()=>{const s=this.tensors.map(a=>V(a,r));return Ge(s,0)})}}function zy(n,e,t){const r=n.dtype;if(n.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${n.shape}`);if(n.dtype!==t)throw new Error(`Invalid data types; op elements ${n.dtype}, but list elements ${t}`);const s=n.shape.slice(1);Nt(s,e,"TensorList shape mismatch: ");const a=Yn(n);return new qn(a,e,r)}function Vy(n,e,t,r){return new qn([],n,e,r)}function Uy(n,e,t,r){if(e.length!==n.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${n.shape[0]}`);const s=Math.max(...e);if(r!=null&&r!==-1&&s>=r)throw new Error(`Max index must be < array size (${s}  vs. ${r})`);const a=new qn([],t,n.dtype,r),i=Yn(n,0);return e.forEach((o,u)=>{a.setItem(o,i[u])}),a}function Wy(n,e,t){let r=0;const s=e.map(f=>(r+=f,r));if(r!==n.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${n.shape}`);const a=n.shape.slice(1),i=Za(a,t),o=r===0?0:n.size/r,u=me(()=>{const f=[];n=V(n,[1,r,o]);for(let p=0;p<e.length;++p){const v=[0,p===0?0:s[p-1],0],S=[1,e[p],o];f[p]=V(fe(n,v,S),i)}return n.dispose(),f}),c=new qn([],t,n.dtype,e.length);for(let f=0;f<u.length;f++)c.setItem(f,u[f]);return c}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gy=async(n,e,t)=>{switch(n.op){case"If":case"StatelessIf":{const r=d("thenBranch",n,e,t),s=d("elseBranch",n,e,t),a=d("cond",n,e,t),i=d("args",n,e,t);return(await a.data())[0]?t.functionMap[r].executeFunctionAsync(i,t.tensorArrayMap,t.tensorListMap):t.functionMap[s].executeFunctionAsync(i,t.tensorArrayMap,t.tensorListMap)}case"While":case"StatelessWhile":{const r=d("body",n,e,t),s=d("cond",n,e,t),a=d("args",n,e,t),i=await t.functionMap[s].executeFunctionAsync(a,t.tensorArrayMap,t.tensorListMap),o=a.map(f=>f.id);let u=await i[0].data();i.forEach(f=>{!f.kept&&o.indexOf(f.id)===-1&&f.dispose()});let c=a;for(;u[0];){const f=c;c=await t.functionMap[r].executeFunctionAsync(c,t.tensorArrayMap,t.tensorListMap);const p=c.map(v=>v.id);f.forEach(v=>{!v.kept&&o.indexOf(v.id)===-1&&p.indexOf(v.id)===-1&&v.dispose()});const b=await t.functionMap[s].executeFunctionAsync(c,t.tensorArrayMap,t.tensorListMap);u=await b[0].data(),b.forEach(v=>{!v.kept&&o.indexOf(v.id)===-1&&p.indexOf(v.id)===-1&&v.dispose()})}return c}case"LoopCond":{const r=d("pred",n,e,t);return[Ht(r)]}case"Switch":{const r=d("pred",n,e,t);let s=d("data",n,e,t);return s.kept||(s=Ht(s)),(await r.data())[0]?[void 0,s]:[s,void 0]}case"Merge":{const r=n.inputNames.find(s=>We(s,e,t)!==void 0);if(r){const s=We(r,e,t);return[Ht(s)]}return}case"Enter":{const r=d("frameName",n,e,t),s=d("tensor",n,e,t);return t.enterFrame(r),[Ht(s)]}case"Exit":{const r=d("tensor",n,e,t);return t.exitFrame(),[Ht(r)]}case"NextIteration":{const r=d("tensor",n,e,t);return t.nextIteration(),[Ht(r)]}case"TensorArrayV3":{const r=d("size",n,e,t),s=d("dtype",n,e,t),a=d("elementShape",n,e,t),i=d("dynamicSize",n,e,t),o=d("clearAfterRead",n,e,t),u=d("identicalElementShapes",n,e,t),c=d("name",n,e,t),f=new My(c,s,r,a,u,i,o);return t.addTensorArray(f),[f.idTensor,ve(1)]}case"TensorArrayWriteV3":{const r=d("tensorArrayId",n,e,t),s=d("index",n,e,t),a=d("tensor",n,e,t),i=t.getTensorArray(r.id);return i.write(s,a),[i.idTensor]}case"TensorArrayReadV3":{const r=d("tensorArrayId",n,e,t),s=d("index",n,e,t);return[t.getTensorArray(r.id).read(s)]}case"TensorArrayGatherV3":{const r=d("tensorArrayId",n,e,t),s=d("indices",n,e,t),a=d("dtype",n,e,t);return[t.getTensorArray(r.id).gather(s,a)]}case"TensorArrayScatterV3":{const r=d("tensorArrayId",n,e,t),s=d("indices",n,e,t),a=d("tensor",n,e,t),i=t.getTensorArray(r.id);return i.scatter(s,a),[i.idTensor]}case"TensorArrayConcatV3":{const r=d("tensorArrayId",n,e,t),s=t.getTensorArray(r.id),a=d("dtype",n,e,t);return[s.concat(a)]}case"TensorArraySplitV3":{const r=d("tensorArrayId",n,e,t),s=d("tensor",n,e,t),a=d("lengths",n,e,t),i=t.getTensorArray(r.id);return i.split(a,s),[i.idTensor]}case"TensorArraySizeV3":{const r=d("tensorArrayId",n,e,t),s=t.getTensorArray(r.id);return[ve(s.size(),"int32")]}case"TensorArrayCloseV3":{const r=d("tensorArrayId",n,e,t),s=t.getTensorArray(r.id);return s.clearAndClose(),[s.idTensor]}case"TensorListSetItem":{const r=d("tensorListId",n,e,t),s=d("index",n,e,t),a=d("tensor",n,e,t),i=t.getTensorList(r.id);return i.setItem(s,a),[i.idTensor]}case"TensorListGetItem":{const r=d("tensorListId",n,e,t),s=d("index",n,e,t),a=d("elementShape",n,e,t),i=d("elementDType",n,e,t);return[t.getTensorList(r.id).getItem(s,a,i)]}case"TensorListScatterV2":case"TensorListScatter":{const r=d("indices",n,e,t),s=d("tensor",n,e,t),a=d("elementShape",n,e,t),i=d("numElements",n,e,t),o=Uy(s,r,a,i);return t.addTensorList(o),[o.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const r=d("elementShape",n,e,t),s=d("elementDType",n,e,t);let a;n.op==="TensorListReserve"?a="numElements":a="maxNumElements";const i=d(a,n,e,t),o=n.op==="TensorListReserve"?-1:i,u=Vy(r,s,i,o);return t.addTensorList(u),[u.idTensor]}case"TensorListGather":{const r=d("tensorListId",n,e,t),s=d("indices",n,e,t),a=d("elementShape",n,e,t),i=d("elementDType",n,e,t);return[t.getTensorList(r.id).gather(s,i,a)]}case"TensorListStack":{const r=d("tensorListId",n,e,t),s=d("elementShape",n,e,t),a=d("elementDType",n,e,t),i=d("numElements",n,e,t);return[t.getTensorList(r.id).stack(s,a,i)]}case"TensorListFromTensor":{const r=d("tensor",n,e,t),s=d("elementShape",n,e,t),a=d("elementDType",n,e,t),i=zy(r,s,a);return t.addTensorList(i),[i.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const r=d("tensorListId",n,e,t),s=t.getTensorList(r.id),a=d("dtype",n,e,t),i=d("elementShape",n,e,t);return[s.concat(a,i)]}case"TensorListPushBack":{const r=d("tensorListId",n,e,t),s=d("tensor",n,e,t),a=t.getTensorList(r.id);return a.pushBack(s),[a.idTensor]}case"TensorListPopBack":{const r=d("tensorListId",n,e,t),s=d("elementShape",n,e,t),a=d("elementDType",n,e,t);return[t.getTensorList(r.id).popBack(s,a)]}case"TensorListSplit":{const r=d("tensor",n,e,t),s=d("elementShape",n,e,t),a=d("lengths",n,e,t),i=Wy(r,a,s);return t.addTensorList(i),[i.idTensor]}case"TensorListLength":{const r=d("tensorListId",n,e,t),s=t.getTensorList(r.id);return[ve(s.size(),"int32")]}case"TensorListResize":{const r=d("tensorListId",n,e,t),s=d("size",n,e,t),i=t.getTensorList(r.id).resize(s);return t.addTensorList(i),[i.idTensor]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function to(n,e,t){const[r,s]=d("fusedOps",n,e,t),a=r==="biasadd",i=!a,o=s==="prelu",u=r==="fusedbatchnorm",c=d("numArgs",n,e,t);if(a){if(o&&c!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!o&&a&&c!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(u)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const f=d("strides",n,e,t),p=$s(n,e,t),b=d("dataFormat",n,e,t).toUpperCase(),v=d("dilations",n,e,t);let[S,A]=d("args",n,e,t);i&&(A=S,S=void 0);const _=d("leakyreluAlpha",n,e,t);return{stride:f,pad:p,dataFormat:b,dilations:v,biasArg:S,preluArg:A,activationFunc:s,leakyreluAlpha:_}}const Ky=(n,e,t,r=Ke)=>{switch(n.op){case"Conv1D":{const s=d("stride",n,e,t),a=d("pad",n,e,t),i=d("dataFormat",n,e,t).toUpperCase(),o=d("dilation",n,e,t);return[r.conv1d(d("x",n,e,t),d("filter",n,e,t),s,a,i,o)]}case"Conv2D":{const s=d("strides",n,e,t),a=$s(n,e,t),i=d("dataFormat",n,e,t).toUpperCase(),o=d("dilations",n,e,t);return[r.conv2d(d("x",n,e,t),d("filter",n,e,t),[s[1],s[2]],a,i,[o[1],o[2]])]}case"_FusedConv2D":{const{stride:s,pad:a,dataFormat:i,dilations:o,biasArg:u,preluArg:c,activationFunc:f,leakyreluAlpha:p}=to(n,e,t);return[r.fused.conv2d({x:d("x",n,e,t),filter:d("filter",n,e,t),strides:[s[1],s[2]],pad:a,dataFormat:i,dilations:[o[1],o[2]],bias:u,activation:f,preluActivationWeights:c,leakyreluAlpha:p})]}case"FusedDepthwiseConv2dNative":{const{stride:s,pad:a,dataFormat:i,dilations:o,biasArg:u,preluArg:c,activationFunc:f,leakyreluAlpha:p}=to(n,e,t);return[r.fused.depthwiseConv2d({x:d("x",n,e,t),filter:d("filter",n,e,t),strides:[s[1],s[2]],pad:a,dataFormat:i,dilations:[o[1],o[2]],bias:u,activation:f,preluActivationWeights:c,leakyreluAlpha:p})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const s=d("outputShape",n,e,t),a=d("strides",n,e,t),i=$s(n,e,t);return[r.conv2dTranspose(d("x",n,e,t),d("filter",n,e,t),s,[a[1],a[2]],i)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const s=d("strides",n,e,t),a=$s(n,e,t),i=d("dilations",n,e,t),o=d("dataFormat",n,e,t).toUpperCase();return[r.depthwiseConv2d(d("input",n,e,t),d("filter",n,e,t),[s[1],s[2]],a,o,[i[1],i[2]])]}case"Conv3D":{const s=d("strides",n,e,t),a=d("pad",n,e,t),i=d("dataFormat",n,e,t).toUpperCase(),o=d("dilations",n,e,t);return[r.conv3d(d("x",n,e,t),d("filter",n,e,t),[s[1],s[2],s[3]],a,i,[o[1],o[2],o[3]])]}case"AvgPool":{const s=d("strides",n,e,t),a=d("pad",n,e,t),i=d("kernelSize",n,e,t);return[r.avgPool(d("x",n,e,t),[i[1],i[2]],[s[1],s[2]],a)]}case"MaxPool":{const s=d("strides",n,e,t),a=d("pad",n,e,t),i=d("kernelSize",n,e,t);return[r.maxPool(d("x",n,e,t),[i[1],i[2]],[s[1],s[2]],a)]}case"MaxPoolWithArgmax":{const s=d("strides",n,e,t),a=d("pad",n,e,t),i=d("kernelSize",n,e,t),o=d("includeBatchInIndex",n,e,t),{result:u,indexes:c}=r.maxPoolWithArgmax(d("x",n,e,t),[i[1],i[2]],[s[1],s[2]],a,o);return[u,c]}case"AvgPool3D":{const s=d("strides",n,e,t),a=d("pad",n,e,t),i=d("kernelSize",n,e,t);return[r.avgPool3d(d("x",n,e,t),[i[1],i[2],i[3]],[s[1],s[2],s[3]],a)]}case"MaxPool3D":{const s=d("strides",n,e,t),a=d("pad",n,e,t),i=d("kernelSize",n,e,t);return[r.maxPool3d(d("x",n,e,t),[i[1],i[2],i[3]],[s[1],s[2],s[3]],a)]}case"Dilation2D":{const s=d("strides",n,e,t),a=d("pad",n,e,t),i=d("dilations",n,e,t),o=s[1],u=s[2],c=i[1],f=i[2];return[r.dilation2d(d("x",n,e,t),d("filter",n,e,t),[o,u],a,[c,f],"NHWC")]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hy=(n,e,t,r=Ke)=>{switch(n.op){case"Fill":{const s=d("shape",n,e,t),a=d("dtype",n,e,t),i=d("value",n,e,t);return[r.fill(s,i,a)]}case"LinSpace":{const s=d("start",n,e,t),a=d("stop",n,e,t),i=d("num",n,e,t);return[r.linspace(s,a,i)]}case"Multinomial":{const s=d("logits",n,e,t),a=d("numSamples",n,e,t),i=d("seed",n,e,t);return[r.multinomial(s,a,i)]}case"OneHot":{const s=d("indices",n,e,t),a=d("depth",n,e,t),i=d("onValue",n,e,t),o=d("offValue",n,e,t),u=d("dtype",n,e,t);return[r.oneHot(s,a,i,o,u)]}case"Ones":return[r.ones(d("shape",n,e,t),d("dtype",n,e,t))];case"OnesLike":return[r.onesLike(d("x",n,e,t))];case"RandomStandardNormal":return[r.randomStandardNormal(d("shape",n,e,t),d("dtype",n,e,t),d("seed",n,e,t))];case"RandomUniform":return[r.randomUniform(d("shape",n,e,t),d("minval",n,e,t),d("maxval",n,e,t),d("dtype",n,e,t))];case"RandomUniformInt":return[r.randomUniformInt(d("shape",n,e,t),d("minval",n,e,t),d("maxval",n,e,t),d("seed",n,e,t))];case"Range":{const s=d("start",n,e,t),a=d("stop",n,e,t),i=d("step",n,e,t);return[r.range(s,a,i,d("dtype",n,e,t))]}case"TruncatedNormal":{const s=d("shape",n,e,t),a=d("mean",n,e,t),i=d("stdDev",n,e,t),o=d("seed",n,e,t);return[r.truncatedNormal(s,a,i,d("dtype",n,e,t),o)]}case"Zeros":return[r.zeros(d("shape",n,e,t),d("dtype",n,e,t))];case"ZerosLike":return[r.zerosLike(d("x",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pa(n,e,t){const r=d("boxes",n,e,t),s=d("scores",n,e,t),a=d("maxOutputSize",n,e,t),i=d("iouThreshold",n,e,t),o=d("scoreThreshold",n,e,t),u=d("softNmsSigma",n,e,t);return{boxes:r,scores:s,maxOutputSize:a,iouThreshold:i,scoreThreshold:o,softNmsSigma:u}}const qy=async(n,e,t,r,s=Ke)=>{switch(n.op){case"NonMaxSuppressionV5":{const{boxes:a,scores:i,maxOutputSize:o,iouThreshold:u,scoreThreshold:c,softNmsSigma:f}=pa(n,e,t),p=await s.image.nonMaxSuppressionWithScoreAsync(a,i,o,u,c,f);return[p.selectedIndices,p.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:a,scores:i,maxOutputSize:o,iouThreshold:u,scoreThreshold:c}=pa(n,e,t),f=d("padToMaxOutputSize",n,e,t),p=await s.image.nonMaxSuppressionPaddedAsync(a,i,o,u,c,f);return[p.selectedIndices,p.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:a,scores:i,maxOutputSize:o,iouThreshold:u,scoreThreshold:c}=pa(n,e,t);return[await s.image.nonMaxSuppressionAsync(a,i,o,u,c)]}case"Where":{const a=s.cast(d("condition",n,e,t),"bool"),i=[await s.whereAsync(a)];return a.dispose(),i}case"ListDiff":return s.setdiff1dAsync(d("x",n,e,t),d("y",n,e,t));default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xy=(n,e,t,r=Ke)=>{switch(n.op){case"LowerBound":{const s=d("sortedSequence",n,e,t),a=d("values",n,e,t);return[r.lowerBound(s,a)]}case"TopKV2":{const s=d("x",n,e,t),a=d("k",n,e,t),i=d("sorted",n,e,t),o=r.topk(s,a,i);return[o.values,o.indices]}case"UpperBound":{const s=d("sortedSequence",n,e,t),a=d("values",n,e,t);return[r.upperBound(s,a)]}case"Unique":{const s=d("x",n,e,t),a=r.unique(s);return[a.values,a.indices]}case"UniqueV2":{const s=d("x",n,e,t),a=d("axis",n,e,t),i=r.unique(s,a);return[i.values,i.indices]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yy=(n,e,t,r=Ke)=>{switch(n.op){case"Const":return e[n.name];case"PlaceholderWithDefault":const s=d("default",n,e,t);return[We(n.name,e,t)||s];case"Placeholder":return[We(n.name,e,t)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{const f=d("x",n,e,t);return[Ht(f)]}case"IdentityN":return d("x",n,e,t).map(f=>Ht(f));case"Snapshot":const a=d("x",n,e,t);return[Ht(a)];case"Shape":return[r.tensor1d(d("x",n,e,t).shape,"int32")];case"ShapeN":return d("x",n,e,t).map(f=>r.tensor1d(f.shape));case"Size":return[r.scalar(d("x",n,e,t).size,"int32")];case"Rank":return[r.scalar(d("x",n,e,t).rank,"int32")];case"NoOp":return[r.scalar(1)];case"Print":const i=d("x",n,e,t),o=d("data",n,e,t),u=d("message",n,e,t),c=d("summarize",n,e,t);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(u);for(let f=0;f<o.length;f++)console.log(Array.prototype.slice.call(o[f].dataSync()).slice(0,c));return[i];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Jy{get id(){return this.handle.id}constructor(e,t){this.keyDType=e,this.valueDType=t,this.handle=ve(0),this.tensorMap=new Map,jt(this.handle)}clearAndClose(){this.tensorMap.forEach(e=>e.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return ve(this.size(),"int32")}async import(e,t){this.checkKeyAndValueTensor(e,t);const r=await e.data();return this.tensorMap.forEach(s=>s.dispose()),this.tensorMap.clear(),me(()=>{const s=Yn(t),a=r.length,i=s.length;x(a===i,()=>`The number of elements doesn't match, keys has ${a} elements, the values has ${i} elements.`);for(let o=0;o<a;o++){const u=r[o],c=s[o];jt(c),this.tensorMap.set(u,c)}return this.handle})}async find(e,t){this.checkKeyAndValueTensor(e,t);const r=await e.data();return me(()=>{const s=[];for(let a=0;a<r.length;a++){const i=r[a],o=this.findWithDefault(i,t);s.push(o)}return nn(s)})}findWithDefault(e,t){const r=this.tensorMap.get(e);return r??t}checkKeyAndValueTensor(e,t){if(e.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${e.dtype}`);if(t.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${t.dtype}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zy=async(n,e,t,r)=>{switch(n.op){case"HashTable":case"HashTableV2":{const s=r.getHashTableHandleByName(n.name);if(s!=null)return[s];{const a=d("keyDType",n,e,t),i=d("valueDType",n,e,t),o=new Jy(a,i);return r.addHashTable(n.name,o),[o.handle]}}case"InitializeTable":case"InitializeTableV2":case"LookupTableImport":case"LookupTableImportV2":{const s=d("tableHandle",n,e,t,r),a=d("keys",n,e,t),i=d("values",n,e,t);return[await r.getHashTableById(s.id).import(a,i)]}case"LookupTableFind":case"LookupTableFindV2":{const s=d("tableHandle",n,e,t,r),a=d("keys",n,e,t),i=d("defaultValue",n,e,t);return[await r.getHashTableById(s.id).find(a,i)]}case"LookupTableSize":case"LookupTableSizeV2":{const s=d("tableHandle",n,e,t,r);return[r.getHashTableById(s.id).tensorSize()]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qy=(n,e,t,r=Ke)=>{switch(n.op){case"ResizeBilinear":{const s=d("images",n,e,t),a=d("size",n,e,t),i=d("alignCorners",n,e,t),o=d("halfPixelCenters",n,e,t);return[r.image.resizeBilinear(s,[a[0],a[1]],i,o)]}case"ResizeNearestNeighbor":{const s=d("images",n,e,t),a=d("size",n,e,t),i=d("alignCorners",n,e,t),o=d("halfPixelCenters",n,e,t);return[r.image.resizeNearestNeighbor(s,[a[0],a[1]],i,o)]}case"CropAndResize":{const s=d("image",n,e,t),a=d("boxes",n,e,t),i=d("boxInd",n,e,t),o=d("cropSize",n,e,t),u=d("method",n,e,t),c=d("extrapolationValue",n,e,t);return[r.image.cropAndResize(s,a,i,o,u,c)]}case"ImageProjectiveTransformV3":{const s=d("images",n,e,t),a=d("transforms",n,e,t),i=d("outputShape",n,e,t),o=d("fillValue",n,e,t),u=d("interpolation",n,e,t),c=d("fillMode",n,e,t);return[r.image.transform(s,a,u.toLowerCase(),c.toLowerCase(),o,i)]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const e6=(n,e,t,r=Ke)=>{switch(n.op){case"Equal":return[r.equal(d("a",n,e,t),d("b",n,e,t))];case"NotEqual":return[r.notEqual(d("a",n,e,t),d("b",n,e,t))];case"Greater":return[r.greater(d("a",n,e,t),d("b",n,e,t))];case"GreaterEqual":return[r.greaterEqual(d("a",n,e,t),d("b",n,e,t))];case"Less":return[r.less(d("a",n,e,t),d("b",n,e,t))];case"LessEqual":return[r.lessEqual(d("a",n,e,t),d("b",n,e,t))];case"LogicalAnd":return[r.logicalAnd(d("a",n,e,t),d("b",n,e,t))];case"LogicalNot":return[r.logicalNot(d("a",n,e,t))];case"LogicalOr":return[r.logicalOr(d("a",n,e,t),d("b",n,e,t))];case"Select":case"SelectV2":return[r.where(d("condition",n,e,t),d("a",n,e,t),d("b",n,e,t))];case"BitwiseAnd":return[r.bitwiseAnd(d("a",n,e,t),d("b",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const t6=(n,e,t,r=Ke)=>{switch(n.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[r.matMul(d("a",n,e,t),d("b",n,e,t),d("transposeA",n,e,t),d("transposeB",n,e,t))];case"Einsum":return[r.einsum(d("equation",n,e,t),...d("tensors",n,e,t))];case"Transpose":return[r.transpose(d("x",n,e,t),d("perm",n,e,t))];case"_FusedMatMul":const[s,a]=d("fusedOps",n,e,t),i=s==="biasadd",o=a==="prelu",u=d("numArgs",n,e,t),c=d("leakyreluAlpha",n,e,t);if(i){if(o&&u!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!o&&u!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[f,p]=d("args",n,e,t);return[r.fused.matMul({a:d("a",n,e,t),b:d("b",n,e,t),transposeA:d("transposeA",n,e,t),transposeB:d("transposeB",n,e,t),bias:f,activation:a,preluActivationWeights:p,leakyreluAlpha:c})];case"MatrixBandPart":return[r.linalg.bandPart(d("a",n,e,t),d("numLower",n,e,t),d("numUpper",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const n6=(n,e,t,r=Ke)=>{switch(n.op){case"EuclideanNorm":return[r.euclideanNorm(d("x",n,e,t),d("axis",n,e,t),d("keepDims",n,e,t))];case"FusedBatchNorm":case"FusedBatchNormV2":return[r.batchNorm(d("x",n,e,t),d("mean",n,e,t),d("variance",n,e,t),d("offset",n,e,t),d("scale",n,e,t),d("epsilon",n,e,t))];case"FusedBatchNormV3":return[r.batchNorm(d("x",n,e,t),d("mean",n,e,t),d("variance",n,e,t),d("offset",n,e,t),d("scale",n,e,t),d("epsilon",n,e,t))];case"LRN":return[r.localResponseNormalization(d("x",n,e,t),d("radius",n,e,t),d("bias",n,e,t),d("alpha",n,e,t),d("beta",n,e,t))];case"Softmax":return[r.softmax(d("x",n,e,t))];case"LogSoftmax":return[r.logSoftmax(d("x",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const r6=(n,e,t,r=Ke)=>{switch(n.op){case"RaggedGather":{const{outputNestedSplits:s,outputDenseValues:a}=r.raggedGather(d("paramsNestedSplits",n,e,t),d("paramsDenseValues",n,e,t),d("indices",n,e,t),d("outputRaggedRank",n,e,t));return s.concat(a)}case"RaggedRange":{const{rtNestedSplits:s,rtDenseValues:a}=r.raggedRange(d("starts",n,e,t),d("limits",n,e,t),d("splits",n,e,t));return[s,a]}case"RaggedTensorToTensor":return[r.raggedTensorToTensor(d("shape",n,e,t),d("values",n,e,t),d("defaultValue",n,e,t),d("rowPartitionTensors",n,e,t),d("rowPartitionTypes",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const s6=(n,e,t,r=Ke)=>{switch(n.op){case"Max":{const o=d("axis",n,e,t),u=d("keepDims",n,e,t);return[r.max(d("x",n,e,t),o,u)]}case"Mean":{const o=d("axis",n,e,t),u=d("keepDims",n,e,t);return[r.mean(d("x",n,e,t),o,u)]}case"Min":{const o=d("axis",n,e,t),u=d("keepDims",n,e,t);return[r.min(d("x",n,e,t),o,u)]}case"Sum":{const o=d("axis",n,e,t),u=d("keepDims",n,e,t);return[r.sum(d("x",n,e,t),o,u)]}case"All":{const o=d("axis",n,e,t),u=d("keepDims",n,e,t);return[r.all(d("x",n,e,t),o,u)]}case"Any":{const o=d("axis",n,e,t),u=d("keepDims",n,e,t);return[r.any(d("x",n,e,t),o,u)]}case"ArgMax":{const o=d("axis",n,e,t);return[r.argMax(d("x",n,e,t),o)]}case"ArgMin":{const o=d("axis",n,e,t);return[r.argMin(d("x",n,e,t),o)]}case"Prod":{const o=d("axis",n,e,t),u=d("keepDims",n,e,t);return[r.prod(d("x",n,e,t),o,u)]}case"Cumprod":{const o=d("axis",n,e,t),u=d("exclusive",n,e,t),c=d("reverse",n,e,t);return[r.cumprod(d("x",n,e,t),o,u,c)]}case"Cumsum":{const o=d("axis",n,e,t),u=d("exclusive",n,e,t),c=d("reverse",n,e,t);return[r.cumsum(d("x",n,e,t),o,u,c)]}case"Bincount":const s=d("x",n,e,t),a=d("weights",n,e,t),i=d("size",n,e,t);return[r.bincount(s,a,i)];case"DenseBincount":{const o=d("x",n,e,t),u=d("weights",n,e,t),c=d("size",n,e,t),f=d("binaryOutput",n,e,t);return[r.denseBincount(o,u,c,f)]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const a6=(n,e,t,r=Ke)=>{switch(n.op){case"ConcatV2":case"Concat":{const s=d("n",n,e,t),a=d("axis",n,e,t);let i=d("tensors",n,e,t);return i=i.slice(0,s),[r.concat(i,a)]}case"Gather":{const s=d("x",n,e,t),a=d("indices",n,e,t);return[r.gather(s,r.cast(a,"int32"),0)]}case"GatherV2":{const s=d("axis",n,e,t),a=d("batchDims",n,e,t),i=d("x",n,e,t),o=d("indices",n,e,t);return[r.gather(i,r.cast(o,"int32"),s,a)]}case"Reverse":{const s=d("dims",n,e,t),a=[];for(let o=0;o<s.length;o++)s[o]&&a.push(o);const i=d("x",n,e,t);return[r.reverse(i,a)]}case"ReverseV2":{const s=d("axis",n,e,t),a=d("x",n,e,t);return[r.reverse(a,s)]}case"Slice":{const s=d("begin",n,e,t),a=d("size",n,e,t);return[r.slice(d("x",n,e,t),s,a)]}case"StridedSlice":{const s=d("begin",n,e,t),a=d("end",n,e,t),i=d("strides",n,e,t),o=d("beginMask",n,e,t),u=d("endMask",n,e,t),c=d("ellipsisMask",n,e,t),f=d("newAxisMask",n,e,t),p=d("shrinkAxisMask",n,e,t),b=d("x",n,e,t);return[r.stridedSlice(b,s,a,i,o,u,c,f,p)]}case"Pack":return me(()=>{const s=d("axis",n,e,t),a=d("tensors",n,e,t),i=a[0].shape,o=r.squeeze(a[0]).shape,u=a.map(c=>{const f=Jt(c.shape,i);if(!f&&!Jt(r.squeeze(c).shape,o))throw new Error("the input tensors shape does not match");return f?c:r.reshape(c,i)});return[r.stack(u,s)]});case"Unpack":{const s=d("axis",n,e,t),a=d("tensor",n,e,t);return r.unstack(a,s)}case"Tile":{const s=d("reps",n,e,t);return[r.tile(d("x",n,e,t),s)]}case"Split":case"SplitV":{const s=d("axis",n,e,t),a=d("numOrSizeSplits",n,e,t),i=d("x",n,e,t);return r.split(i,a,s)}case"ScatterNd":{const s=d("indices",n,e,t),a=d("values",n,e,t),i=d("shape",n,e,t);return[r.scatterND(s,a,i)]}case"GatherNd":{const s=d("x",n,e,t),a=d("indices",n,e,t);return[r.gatherND(s,a)]}case"SparseToDense":{const s=d("sparseIndices",n,e,t),a=d("outputShape",n,e,t),i=d("sparseValues",n,e,t),o=d("defaultValue",n,e,t);return[r.sparseToDense(s,i,a,i.dtype===o.dtype?o:r.cast(o,i.dtype))]}case"TensorScatterUpdate":{const s=d("indices",n,e,t),a=d("values",n,e,t),i=d("tensor",n,e,t);return[r.tensorScatterUpdate(i,s,a)]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const i6=(n,e,t,r=Ke)=>{switch(n.op){case"SparseFillEmptyRows":{const{outputIndices:s,outputValues:a,emptyRowIndicator:i,reverseIndexMap:o}=r.sparse.sparseFillEmptyRows(d("indices",n,e,t),d("values",n,e,t),d("denseShape",n,e,t),d("defaultValue",n,e,t));return[s,a,i,o]}case"SparseReshape":{const{outputIndices:s,outputShape:a}=r.sparse.sparseReshape(d("inputIndices",n,e,t),d("inputShape",n,e,t),d("newShape",n,e,t));return[s,a]}case"SparseSegmentMean":return[r.sparse.sparseSegmentMean(d("data",n,e,t),d("indices",n,e,t),d("segmentIds",n,e,t))];case"SparseSegmentSum":return[r.sparse.sparseSegmentSum(d("data",n,e,t),d("indices",n,e,t),d("segmentIds",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const o6=(n,e,t,r=Ke)=>{switch(n.op){case"FFT":return[r.fft(d("x",n,e,t))];case"IFFT":return[r.ifft(d("x",n,e,t))];case"RFFT":return[r.rfft(d("x",n,e,t))];case"IRFFT":return[r.irfft(d("x",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const u6=(n,e,t,r=Ke)=>{switch(n.op){case"StaticRegexReplace":return[r.string.staticRegexReplace(d("input",n,e,t),d("pattern",n,e,t),d("rewrite",n,e,t),d("replaceGlobal",n,e,t))];case"StringNGrams":{const{nGrams:s,nGramsSplits:a}=r.string.stringNGrams(d("data",n,e,t),d("dataSplits",n,e,t),d("separator",n,e,t),d("nGramWidths",n,e,t),d("leftPad",n,e,t),d("rightPad",n,e,t),d("padWidth",n,e,t),d("preserveShortSequences",n,e,t));return[s,a]}case"StringSplit":{const{indices:s,values:a,shape:i}=r.string.stringSplit(d("input",n,e,t),d("delimiter",n,e,t),d("skipEmpty",n,e,t));return[s,a,i]}case"StringToHashBucketFast":return[r.string.stringToHashBucketFast(d("input",n,e,t),d("numBuckets",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const c6=(n,e,t,r=Ke)=>{switch(n.op){case"Cast":return[r.cast(d("x",n,e,t),d("dtype",n,e,t))];case"ExpandDims":{const s=d("axis",n,e,t);return[r.expandDims(d("x",n,e,t),s)]}case"Squeeze":{const s=d("axis",n,e,t);return[r.squeeze(d("x",n,e,t),s)]}case"Reshape":return[r.reshape(d("x",n,e,t),d("shape",n,e,t))];case"EnsureShape":return[r.ensureShape(d("x",n,e,t),d("shape",n,e,t))];case"MirrorPad":return[r.mirrorPad(d("x",n,e,t),d("padding",n,e,t),d("mode",n,e,t))];case"PadV2":case"Pad":return[r.pad(d("x",n,e,t),d("padding",n,e,t),d("constantValue",n,e,t))];case"SpaceToBatchND":{const s=d("blockShape",n,e,t),a=d("paddings",n,e,t);return[r.spaceToBatchND(d("x",n,e,t),s,a)]}case"BatchToSpaceND":{const s=d("blockShape",n,e,t),a=d("crops",n,e,t);return[r.batchToSpaceND(d("x",n,e,t),s,a)]}case"DepthToSpace":{const s=d("blockSize",n,e,t),a=d("dataFormat",n,e,t).toUpperCase();return[r.depthToSpace(d("x",n,e,t),s,a)]}case"BroadcastTo":return[r.broadcastTo(d("x",n,e,t),d("shape",n,e,t))];case"BroadcastArgs":return[r.broadcastArgs(d("s0",n,e,t),d("s1",n,e,t))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function no(n,e,t,r,s=me){const a=((i,o,u)=>{switch(i.category){case"arithmetic":return s(()=>By(i,o,u));case"basic_math":return s(()=>jy(i,o,u));case"control":return Gy(i,o,u);case"convolution":return s(()=>Ky(i,o,u));case"creation":return s(()=>Hy(i,o,u));case"dynamic":return qy(i,o,u);case"evaluation":return s(()=>Xy(i,o,u));case"image":return s(()=>Qy(i,o,u));case"graph":return s(()=>Yy(i,o,u));case"logical":return s(()=>e6(i,o,u));case"matrices":return s(()=>t6(i,o,u));case"normalization":return s(()=>n6(i,o,u));case"ragged":return s(()=>r6(i,o,u));case"reduction":return s(()=>s6(i,o,u));case"slice_join":return s(()=>a6(i,o,u));case"sparse":return s(()=>i6(i,o,u));case"spectral":return s(()=>o6(i,o,u));case"string":return s(()=>u6(i,o,u));case"transformation":return s(()=>c6(i,o,u));case"hash_table":return Zy(i,o,u,r);case"custom":const c=Uu(i.op);if(c&&c.customExecutor)return c.customExecutor(new Py(i,o,u));throw TypeError(`Custom op ${i.op} is not registered.`);default:throw TypeError(`Unknown op '${i.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(n,e,t);return Vn(a)?a.then(i=>[].concat(i)):[].concat(a)}class ro{constructor(e={},t={},r={},s={},a){this.weightMap=e,this.tensorArrayMap=t,this.tensorListMap=r,this.functionMap=s,this.parseNodeNameCache=a,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(e,t){return{id:e,frameName:t,iterationId:0}}set currentContext(e){this.contexts!==e&&(this.contexts=e,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const e=[];for(let t=0;t<this.contexts.length-1;t++){const r=this.contexts.slice(0,this.contexts.length-t);e.push(this.contextIdforContexts(r))}e.push(""),this._currentContextIds=e}contextIdforContexts(e){return e?e.map(t=>t.id===0&&t.iterationId===0?"":`${t.frameName}-${t.iterationId}`).join("/"):""}enterFrame(e){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,e)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw new Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;const e=Object.assign({},this.contexts[this.contexts.length-1]);e.iterationId+=1,e.id=this.lastId,this.contexts.splice(-1,1,e),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw new Error("Cannot increase frame iteration, the context is empty")}getWeight(e){return this.weightMap[e]}addTensorArray(e){this.tensorArrayMap[e.id]=e}getTensorArray(e){return this.tensorArrayMap[e]}addTensorList(e){this.tensorListMap[e.id]=e}getTensorList(e){return this.tensorListMap[e]}dispose(e){for(const t in this.tensorArrayMap)this.tensorArrayMap[t].clearAndClose(e);for(const t in this.tensorListMap)this.tensorListMap[t].clearAndClose(e)}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function so(n,e,t,r){const s=new Set,a=[];let i=null,o=null;const u=new Set,c=new Set(Object.keys(n).map(b=>ut(b)[0]));r=r||[];const f=new Set(r.map(b=>ut(b.name)[0])),p=[...e];for(;p.length>0;){const b=p.pop();if((Bn(b)||y6(b)||b6(b))&&i==null&&(i=b,o=i.children.map(v=>v.name).filter(v=>s.has(v))),s.add(b.name),t[b.name]==null&&!c.has(b.name)&&!f.has(b.name)){if(b.inputs.length===0){a.push(b.name);continue}b.inputs.forEach(v=>{u.has(v.name)||(u.add(v.name),p.push(v))})}}return{inputs:n,outputs:e,usedNodes:s,missingInputs:a,dynamicNode:i,syncInputs:o}}function l6(n,e){const{usedNodes:t,inputs:r}=e,s=Object.keys(r).map(_=>ut(_)[0]).map(_=>n.nodes[_]),a=n.initNodes||[],i=_=>t.has(typeof _=="string"?_:_.name);function o(_){return[...new Map(_.map(C=>[C.name,C])).values()]}const u=o([...s,...n.weights,...a]).filter(i),c=o([...u,...Object.values(n.nodes)]).filter(i),f=new Map(c.map(_=>[_.name,_])),p={};for(const _ of c){p[_.name]=p[_.name]||0;for(const C of _.children)i(C)||(p[C.name]=Number.POSITIVE_INFINITY),p[C.name]=(p[C.name]||0)+1}const b=Object.entries(p).filter(([,_])=>_===0).map(([_])=>_),v=[...b];for(;b.length>0;){const _=b.pop(),C=f.get(_);for(const K of C.children.filter(i))--p[K.name]===0&&(v.push(K.name),b.push(K.name))}const S=v.map(_=>f.get(_)),A=h6(S,u);return f6(A,u),A}function h6(n,e){const t=new Map(n.map(i=>[i.name,i])),r=e.map(i=>i.name),s=new Set(r);for(;r.length>0;){const i=r.pop(),o=t.get(i);for(const u of o.children)!t.has(u.name)||s.has(u.name)||(s.add(u.name),r.push(u.name))}return n.filter(i=>s.has(i.name))}class Ss extends Error{constructor(e){super(`NodesExecutionOrderError: ${e}`)}}function f6(n,e){const t=new Map(n.map((o,u)=>[o.name,u])),r=new Set(e.map(o=>o.name)),s=o=>r.has(typeof o=="string"?o:o.name),a=new Set(n.map(o=>o.name)),i=o=>a.has(typeof o=="string"?o:o.name);for(const o of n){for(const u of o.children.filter(i)){if(!t.has(u.name))throw new Ss(`Child ${u.name} of node ${o.name} is unreachable.`);if(t.get(o.name)>t.get(u.name))throw new Ss(`Node ${o.name} is scheduled to run after its child ${u.name}.`)}if(!s(o))for(const u of o.inputs){if(!t.has(u.name))throw new Ss(`Input ${u.name} of node ${o.name} is unreachable.`);if(t.get(u.name)>t.get(o.name))throw new Ss(`Node ${o.name} is scheduled to run before its input ${u.name}.`)}}}function p6(n){const e=new Map(n.map((o,u)=>[o.name,u])),t=Number.MAX_SAFE_INTEGER,r=n.map((o,u)=>Bn(o)?t:u),s=o=>{const u=r[e.get(o.name)];return u??-1},a=n.map((o,u)=>o.children.map(s).reduce((c,f)=>Math.max(c,f),r[u])),i=new Map;for(let o=0;o<n.length;++o){const u=a[o];if(u===t)continue;const c=n[o],f=n[u];i.has(f.name)||i.set(f.name,[]),i.get(f.name).push(c)}return i}const d6=new Set(["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"]),m6=new Set(["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"]),g6=new Set(["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"]);function Bn(n){return d6.has(n.op)}function y6(n){return m6.has(n.op)}function b6(n){return g6.has(n.op)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class js{get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(e){const t=Object.keys(e).map(r=>e[r].map(s=>s.id));this._weightIds=[].concat(...t),this._weightMap=e}set resourceManager(e){this._resourceManager=e}get inputs(){return this._inputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(e=>e.signatureKey||e.name)}get outputNodes(){return this._outputs.map(e=>{const t=e.signatureKey||e.name;return e.defaultOutput?`${t}:${e.defaultOutput}`:t})}get functions(){return Object.keys(this._functions).reduce((e,t)=>(e[t]=this._functions[t].signature,e),{})}constructor(e,t){this.graph=e,this.parent=t,this.compiledMap=new Map,this.parseNodeNameCache=new Map,this._weightMap={},this.SEPARATOR=",",this._functions={},this._functionExecutorMap={},this.keepIntermediateTensors=!1,this._outputs=e.outputs,this._inputs=e.inputs,this._initNodes=e.initNodes,this._signature=e.signature,this._functions=e.functions,e.functions!=null&&Object.keys(e.functions).forEach(r=>{this._functionExecutorMap[r]=new js(e.functions[r],this)})}getCompilationKey(e,t){const r=e.map(a=>a.name).sort(),s=t.map(a=>a.name).sort();return r.join(this.SEPARATOR)+"--"+s.join(this.SEPARATOR)}compile(e,t){const r=so(e,t,this.weightMap,this._initNodes),{missingInputs:s,dynamicNode:a,syncInputs:i}=r;if(a!=null)throw new Error(`This execution contains the node '${a.name}', which has the dynamic op '${a.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${i}]`);if(s.length>0){const c=t.map(p=>p.name),f=Object.keys(e);throw new Error(`Cannot compute the outputs [${c}] from the provided inputs [${f}]. Missing the following inputs: [${s}]`)}const o=l6(this.graph,r),u=p6(o);return{orderedNodes:o,nodeLiveUntilMap:u}}cloneAndKeepTensor(e){if(e==null)return null;const t=e.clone();return jt(t),t}cloneTensorList(e){return e?e.map(r=>this.cloneAndKeepTensor(r)):null}cloneTensorMap(e){return Object.fromEntries(Object.entries(e).map(([t,r])=>[t,this.cloneTensorList(r)]))}execute(e,t){this.disposeIntermediateTensors(),e=this.mapInputs(e);const r=Object.keys(e).sort();this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t);const s=r.map(b=>this.graph.nodes[ut(b)[0]]),a=t.map(b=>ut(b)[0]),i=new Set(a);let o=a.map(b=>this.graph.nodes[b]);o.length===0&&(o=this._outputs);const u=this.getCompilationKey(s,o);let c=this.compiledMap.get(u);c==null&&(c=this.compile(e,o),this.compiledMap.set(u,c));try{this.keepIntermediateTensors=be().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(b){this.keepIntermediateTensors=!1,console.warn(b.message)}const f={},p={};return me(()=>{const b=new ro(this.weightMap,f,p,this.functionExecutorMap,this.parseNodeNameCache),v=Object.assign({},this.weightMap);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap)),Object.keys(e).forEach(C=>{const[K,U]=ut(C,b),B=[];B[U]=e[C],v[K]=B,this.keepIntermediateTensors&&(this.clonedTensorsMap[K]=this.cloneTensorList(B))});const S=this.getFrozenTensorIds(v),{orderedNodes:A,nodeLiveUntilMap:_}=c;for(const C of A){if(v[C.name])continue;const K=no(C,v,b,this._resourceManager);if(Vn(K))throw new Error(`The execution of the op '${C.op}' returned a promise. Please use model.executeAsync() instead.`);v[C.name]=K,this.keepIntermediateTensors&&(this.clonedTensorsMap[C.name]=this.cloneTensorList(K)),this.checkTensorForDisposalWithNodeLiveUntilInfo(C,v,b,S,i,_.get(C.name))}return this.parent==null&&b.dispose(S),t.map(C=>We(C,v,b))})}getFrozenTensorIds(e){const t=[].concat.apply([],Object.keys(e).map(r=>e[r]).map(r=>r.map(s=>s.id)));return new Set(t)}checkTensorForDisposal(e,t,r,s,a,i,o){if(!(Bn(t)||i.has(e))){for(const u of r[e])u!=null&&(o[u.id]=(o[u.id]||0)+t.children.length);for(const u of t.inputs){if(Bn(u))continue;const c=Ji(u.name,r,s);if(c!=null)for(const f of c){if(!f||f.kept||a.has(f.id))continue;const p=o[f.id];p===1?(f.dispose(),delete o[f.id]):p!=null&&o[f.id]--}}}}checkTensorForDisposalWithNodeLiveUntilInfo(e,t,r,s,a,i){function o(u){return Bn(u)||a.has(u.name)}if(!(Bn(e)||i==null))for(const u of i){if(o(u))continue;const c=Ji(u.name,t,r);for(const f of c)!f||f.kept||s.has(f.id)||f.dispose()}}async executeAsync(e,t){return this._executeAsync(e,t)}disposeIntermediateTensors(){this.clonedTensorsMap&&(Object.values(this.clonedTensorsMap).forEach(e=>{for(const t of e)t&&!t.isDisposed&&t.dispose()}),this.clonedTensorsMap=null)}getIntermediateTensors(){return this.clonedTensorsMap}async _executeAsync(e,t,r=!1,s={},a={}){this.disposeIntermediateTensors(),r||(e=this.mapInputs(e),this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t));try{this.keepIntermediateTensors=be().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(b){this.keepIntermediateTensors=!1,console.warn(b.message)}const i=new ro(this.weightMap,s,a,this.functionExecutorMap,this.parseNodeNameCache);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap));const o=await this.executeWithControlFlow(e,i,t,r),u=t.map(b=>We(b,o,i)),c=u.map(b=>b.id),f=Object.keys(e).map(b=>e[b].id),p=new Set([...c,...f,...this.weightIds]);return Object.values(o).forEach(b=>{b.forEach(v=>{v&&!v.isDisposed&&!p.has(v.id)&&v.dispose()})}),this.parent==null&&i.dispose(p),u}async executeFunctionAsync(e,t,r){const s=e.reduce((a,i,o)=>(a[this.inputs[o].name]=i,a),{});return this._executeAsync(s,this.outputNodes,!0,t,r)}async executeWithControlFlow(e,t,r,s){const a=Object.keys(e),i=a.map(B=>this.graph.nodes[ut(B)[0]]),o=r.map(B=>ut(B)[0]),u=new Set(o);let c=o.map(B=>this.graph.nodes[B]);c.length===0&&(c=this._outputs);const{usedNodes:f,missingInputs:p,dynamicNode:b,syncInputs:v}=so(e,c,this.weightMap,this._initNodes),S=[...i,...this.graph.weights,...this._initNodes||[]].map(B=>({node:B,contexts:t.currentContext})),A=Object.assign({},this.weightMap);Object.keys(e).forEach(B=>{const[W,G]=ut(B),Q=[];Q[G]=e[B],A[W]=Q});const _={},C=this.getFrozenTensorIds(A),K={};for(;S.length>0;){const B=this.processStack(i,S,t,A,K,C,u,_,f);await Promise.all(B)}b==null&&!s&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const U=c.filter(B=>!Bn(B)&&!We(B.name,A,t)).map(B=>B.name);if(U.length>0){let B="";throw b!=null&&(B=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${v}]`),new Error(`Cannot compute the outputs [${U}] from the provided inputs [${a}]. Consider providing the following inputs: [${p}]. ${B}`)}return A}processStack(e,t,r,s,a,i,o,u,c){const f=[];for(;t.length>0;){const p=t.pop();r.currentContext=p.contexts;let b="";if(p.node.op==="Enter"&&d("isConstant",p.node,s,r)&&([b]=Kt(p.node.name,r)),s[p.node.name]==null){const v=no(p.node,s,r,this._resourceManager);b||([b]=Kt(p.node.name,r));const S=r.currentContext;Vn(v)?f.push(v.then(A=>(s[b]=A,this.keepIntermediateTensors&&(this.clonedTensorsMap[b]=this.cloneTensorList(A)),r.currentContext=S,this.checkTensorForDisposal(b,p.node,s,r,i,o,u),this.processChildNodes(p.node,t,r,s,a,c),A))):(s[b]=v,this.keepIntermediateTensors&&(this.clonedTensorsMap[b]=this.cloneTensorList(v)),this.checkTensorForDisposal(b,p.node,s,r,i,o,u),this.processChildNodes(p.node,t,r,s,a,c))}else this.processChildNodes(p.node,t,r,s,a,c)}return f}processChildNodes(e,t,r,s,a,i){e.children.forEach(o=>{const[u]=Kt(o.name,r);a[u]||!i.has(o.name)||(o.op==="Merge"?o.inputNames.some(c=>!!We(c,s,r))&&(a[u]=!0,t.push({contexts:r.currentContext,node:o})):o.inputNames.every(c=>!!We(c,s,r))&&(a[u]=!0,t.push({contexts:r.currentContext,node:o})))})}dispose(){Object.keys(this.weightMap).forEach(e=>this.weightMap[e].forEach(t=>t.dispose()))}checkInputShapeAndType(e){Object.keys(e).forEach(t=>{const r=e[t],[s]=ut(t),a=this.graph.nodes[s];if(a.attrParams.shape&&a.attrParams.shape.value){const i=a.attrParams.shape.value,o=i.length===r.shape.length&&r.shape.every((u,c)=>i[c]===-1||i[c]===u);x(o,()=>`The shape of dict['${a.name}'] provided in model.execute(dict) must be [${i}], but was [${r.shape}]`)}a.attrParams.dtype&&a.attrParams.dtype.value&&x(r.dtype===a.attrParams.dtype.value,()=>`The dtype of dict['${a.name}'] provided in model.execute(dict) must be ${a.attrParams.dtype.value}, but was ${r.dtype}`)})}mapInputs(e){var t,r;const s={};for(const a in e){const i=(r=(t=this._signature)===null||t===void 0?void 0:t.inputs)===null||r===void 0?void 0:r[a];i!=null?s[i.name]=e[a]:s[a]=e[a]}return s}checkInputs(e){const t=Object.keys(e).filter(r=>{const[s]=ut(r);return this.graph.nodes[s]==null});if(t.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${t}] that are not part of graph`)}mapOutputs(e){return e.map(t=>{var r,s;const a=(s=(r=this._signature)===null||r===void 0?void 0:r.outputs)===null||s===void 0?void 0:s[t];return a!=null?a.name:t},{})}checkOutputs(e){e.forEach(t=>{const[r]=ut(t);if(!this.graph.nodes[r])throw new Error(`The output '${t}' is not found in the graph`)})}}class w6{constructor(e={},t={}){this.hashTableNameToHandle=e,this.hashTableMap=t}addHashTable(e,t){this.hashTableNameToHandle[e]=t.handle,this.hashTableMap[t.id]=t}getHashTableHandleByName(e){return this.hashTableNameToHandle[e]}getHashTableById(e){return this.hashTableMap[e]}dispose(){for(const e in this.hashTableMap)this.hashTableMap[e].clearAndClose(),delete this.hashTableMap[e];for(const e in this.hashTableNameToHandle)this.hashTableNameToHandle[e].dispose(),delete this.hashTableNameToHandle[e]}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const v6="?tfjs-format=file",N6="model.json";class T6{get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}constructor(e,t={},r=Mu){this.modelUrl=e,this.loadOptions=t,this.version="n/a",this.io=r,t==null&&(this.loadOptions={}),this.resourceManager=new w6}findIOHandler(){const e=this.modelUrl;if(e.load!=null)this.handler=e;else if(this.loadOptions.requestInit!=null)this.handler=this.io.browserHTTPRequest(e,this.loadOptions);else{const t=this.io.getLoadHandlers(e,this.loadOptions);if(t.length===0)t.push(this.io.browserHTTPRequest(e,this.loadOptions));else if(t.length>1)throw new Error(`Found more than one (${t.length}) load handlers for URL '${[e]}'`);this.handler=t[0]}}load(){if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const e=this.handler.load();return Vn(e)?e.then(t=>t.getWeightStream==null?this.loadSync(t):this.loadStreaming(t)):this.loadSync(e)}loadSync(e){const t=this.io.decodeWeights(e.weightData,e.weightSpecs);return this.loadWithWeightMap(e,t)}async loadStreaming(e){if(e.getWeightStream==null)throw new Error("Model artifacts missing streamWeights function");const t=await Mo(e.getWeightStream(),e.weightSpecs);return this.loadWithWeightMap(e,t)}loadWithWeightMap(e,t){this.artifacts=e;const r=this.artifacts.modelTopology;let s=this.artifacts.signature;if(this.artifacts.userDefinedMetadata!=null){const a=this.artifacts.userDefinedMetadata;a.signature!=null&&(s=a.signature),a.structuredOutputKeys!=null&&(this.structuredOutputKeys=a.structuredOutputKeys)}if(this.signature=s,this.version=`${r.versions.producer}.${r.versions.minConsumer}`,this.executor=new js(Zi.Instance.transformGraph(r,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(t),this.executor.resourceManager=this.resourceManager,e.modelInitializer!=null&&e.modelInitializer.node!=null){const a=Zi.Instance.transformGraph(e.modelInitializer);this.initializer=new js(a),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializerSignature=e.initializerSignature}return!0}async save(e,t){if(typeof e=="string"){const r=this.io.getSaveHandlers(e);if(r.length===0)throw new Error(`Cannot find any save handlers for URL '${e}'`);if(r.length>1)throw new Error(`Found more than one (${r.length}) save handlers for URL '${e}'`);e=r[0]}if(e.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return e.save(this.artifacts)}addStructuredOutputNames(e){if(this.structuredOutputKeys){const t=e instanceof De?[e]:e,r={};return t.forEach((s,a)=>r[this.structuredOutputKeys[a]]=s),r}return e}predict(e,t){const r=this.execute(e,this.outputNodes);return this.addStructuredOutputNames(r)}async predictAsync(e,t){const r=await this.executeAsync(e,this.outputNodes);return this.addStructuredOutputNames(r)}normalizeInputs(e){var t;if(!(e instanceof De)&&!Array.isArray(e)){const a=(t=this.signature)===null||t===void 0?void 0:t.inputs;if(a!=null)for(const i in a){const o=a[i];o.resourceId!=null&&(e[i]=this.resourceIdToCapturedInput[o.resourceId])}return e}e=Array.isArray(e)?e:[e];const r=Object.keys(this.resourceIdToCapturedInput).length;if(e.length+r!==this.inputNodes.length)throw new Error(`Input tensor count mismatch, the graph model has ${this.inputNodes.length-r} non-resource placeholders, while there are ${e.length} input tensors provided.`);let s=0;return this.inputNodes.reduce((a,i)=>{var o,u,c;const f=(c=(u=(o=this.signature)===null||o===void 0?void 0:o.inputs)===null||u===void 0?void 0:u[i])===null||c===void 0?void 0:c.resourceId;return f!=null?a[i]=this.resourceIdToCapturedInput[f]:a[i]=e[s++],a},{})}normalizeOutputs(e){return e=e||this.outputNodes,Array.isArray(e)?e:[e]}executeInitializerGraph(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.execute({},[]):this.initializer.execute({},Object.keys(this.initializerSignature.outputs))}async executeInitializerGraphAsync(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.executeAsync({},[]):this.initializer.executeAsync({},Object.keys(this.initializerSignature.outputs))}setResourceIdToCapturedInput(e){if(this.resourceIdToCapturedInput={},this.initializerSignature){const t=this.initializerSignature.outputs,r=Object.keys(t);for(let s=0;s<r.length;s++){const a=r[s],i=t[a];this.resourceIdToCapturedInput[i.resourceId]=e[s]}}}execute(e,t){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(this.executeInitializerGraph()),e=this.normalizeInputs(e),t=this.normalizeOutputs(t);const r=this.executor.execute(e,t);return r.length>1?r:r[0]}async executeAsync(e,t){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(await this.executeInitializerGraphAsync()),e=this.normalizeInputs(e),t=this.normalizeOutputs(t);const r=await this.executor.executeAsync(e,t);return r.length>1?r:r[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(e){return Object.keys(e).reduce((t,r)=>(t[r]=[e[r]],t),{})}dispose(){this.executor.dispose(),this.initializer&&(this.initializer.dispose(),this.resourceIdToCapturedInput&&Oe(this.resourceIdToCapturedInput)),this.resourceManager.dispose()}}async function Ku(n,e={},t=Mu){if(n==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");e==null&&(e={}),e.fromTFHub&&typeof n=="string"&&(n=S6(n));const r=new T6(n,e,t);return await r.load(),r}function S6(n){return n.endsWith("/")||(n=n+"/"),`${n}${N6}${v6}`}/**
    * @license
    * Copyright 2024 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */var It=function(){return It=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var s in e=arguments[t])Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s]);return n},It.apply(this,arguments)};function Xt(n,e,t,r){return new(t||(t=Promise))(function(s,a){function i(c){try{u(r.next(c))}catch(f){a(f)}}function o(c){try{u(r.throw(c))}catch(f){a(f)}}function u(c){var f;c.done?s(c.value):(f=c.value,f instanceof t?f:new t(function(p){p(f)})).then(i,o)}u((r=r.apply(n,[])).next())})}function Yt(n,e){var t,r,s,a,i={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function o(u){return function(c){return function(f){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(s=2&f[0]?r.return:f[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,f[1])).done)return s;switch(r=0,s&&(f=[2&f[0],s.value]),f[0]){case 0:case 1:s=f;break;case 4:return i.label++,{value:f[1],done:!1};case 5:i.label++,r=f[1],f=[0];continue;case 7:f=i.ops.pop(),i.trys.pop();continue;default:if(s=i.trys,!((s=s.length>0&&s[s.length-1])||f[0]!==6&&f[0]!==2)){i=0;continue}if(f[0]===3&&(!s||f[1]>s[0]&&f[1]<s[3])){i.label=f[1];break}if(f[0]===6&&i.label<s[1]){i.label=s[1],s=f;break}if(s&&i.label<s[2]){i.label=s[2],i.ops.push(f);break}s[2]&&i.ops.pop(),i.trys.pop();continue}f=e.call(n,i)}catch(p){f=[6,p],r=0}finally{t=s=0}if(5&f[0])throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}([u,c])}}}function pn(n){var e=n.map(function(t){return t[0]});return e.push(n[n.length-1][1]),e}var Hu={lips:pn([[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]]),leftEye:pn([[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]]),leftEyebrow:pn([[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]]),leftIris:pn([[474,475],[475,476],[476,477],[477,474]]),rightEye:pn([[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]]),rightEyebrow:pn([[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]]),rightIris:pn([[469,470],[470,471],[471,472],[472,469]]),faceOval:pn([[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]])},E6=[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]],x6=Object.entries(Hu).map(function(n){var e=n[0];return n[1].map(function(t){return[t,e]})}).flat(),qu=new Map(x6);function Qa(n){for(var e={locationData:{relativeKeypoints:[]}},t=Number.MAX_SAFE_INTEGER,r=Number.MIN_SAFE_INTEGER,s=Number.MAX_SAFE_INTEGER,a=Number.MIN_SAFE_INTEGER,i=0;i<n.length;++i){var o=n[i];t=Math.min(t,o.x),r=Math.max(r,o.x),s=Math.min(s,o.y),a=Math.max(a,o.y),e.locationData.relativeKeypoints.push({x:o.x,y:o.y})}return e.locationData.relativeBoundingBox={xMin:t,yMin:s,xMax:r,yMax:a,width:r-t,height:a-s},e}var da={runtime:"mediapipe",maxFaces:1,refineLandmarks:!1},k6=function(){function n(e){var t=this;this.width=0,this.height=0,this.selfieMode=!1,this.faceMeshSolution=new nc.FaceMesh({locateFile:function(r,s){return e.solutionPath?e.solutionPath.replace(/\/+$/,"")+"/"+r:s+"/"+r}}),this.faceMeshSolution.setOptions({refineLandmarks:e.refineLandmarks,selfieMode:this.selfieMode,maxNumFaces:e.maxFaces}),this.faceMeshSolution.onResults(function(r){if(t.height=r.image.height,t.width=r.image.width,t.faces=[],r.multiFaceLandmarks!==null)for(var s=r.multiFaceLandmarks,a=0;a<s.length;a++){var i=t.translateOutput(s[a]);t.faces.push({keypoints:i,box:Qa(i).locationData.relativeBoundingBox})}})}return n.prototype.translateOutput=function(e){var t=this;return e.map(function(r,s){var a={x:r.x*t.width,y:r.y*t.height,z:r.z*t.width},i=qu.get(s);return i!=null&&(a.name=i),a})},n.prototype.estimateFaces=function(e,t){return Xt(this,void 0,void 0,function(){var r,s;return Yt(this,function(a){switch(a.label){case 0:return t&&t.flipHorizontal&&t.flipHorizontal!==this.selfieMode&&(this.selfieMode=t.flipHorizontal,this.faceMeshSolution.setOptions({selfieMode:this.selfieMode})),e instanceof De?(s=ImageData.bind,[4,zu(e)]):[3,2];case 1:return r=new(s.apply(ImageData,[void 0,a.sent(),e.shape[1],e.shape[0]])),[3,3];case 2:r=e,a.label=3;case 3:return e=r,[4,this.faceMeshSolution.send({image:e})];case 4:return a.sent(),[2,this.faces]}})})},n.prototype.dispose=function(){this.faceMeshSolution.close()},n.prototype.reset=function(){this.faceMeshSolution.reset(),this.width=0,this.height=0,this.faces=null,this.selfieMode=!1},n.prototype.initialize=function(){return this.faceMeshSolution.initialize()},n}();function _6(n){return Xt(this,void 0,void 0,function(){var e,t;return Yt(this,function(r){switch(r.label){case 0:return e=function(s){if(s==null)return It({},da);var a=It({},s);return a.runtime="mediapipe",a.maxFaces==null&&(a.maxFaces=da.maxFaces),a.refineLandmarks==null&&(a.refineLandmarks=da.refineLandmarks),a}(n),[4,(t=new k6(e)).initialize()];case 1:return r.sent(),[2,t]}})})}var ma=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$6={};(function(){var n;function e(l){var g=0;return function(){return g<l.length?{done:!1,value:l[g++]}:{done:!0}}}var t=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,g,w){return l==Array.prototype||l==Object.prototype||(l[g]=w.value),l},r=function(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof ma=="object"&&ma];for(var g=0;g<l.length;++g){var w=l[g];if(w&&w.Math==Math)return w}throw Error("Cannot find global object")}(this);function s(l,g){if(g)e:{var w=r;l=l.split(".");for(var N=0;N<l.length-1;N++){var k=l[N];if(!(k in w))break e;w=w[k]}(g=g(N=w[l=l[l.length-1]]))!=N&&g!=null&&t(w,l,{configurable:!0,writable:!0,value:g})}}function a(l){return(l={next:l})[Symbol.iterator]=function(){return this},l}function i(l){var g=typeof Symbol<"u"&&Symbol.iterator&&l[Symbol.iterator];return g?g.call(l):{next:e(l)}}function o(l){if(!(l instanceof Array)){l=i(l);for(var g,w=[];!(g=l.next()).done;)w.push(g.value);l=w}return l}s("Symbol",function(l){function g(k,E){this.g=k,t(this,"description",{configurable:!0,writable:!0,value:E})}if(l)return l;g.prototype.toString=function(){return this.g};var w="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",N=0;return function k(E){if(this instanceof k)throw new TypeError("Symbol is not a constructor");return new g(w+(E||"")+"_"+N++,E)}}),s("Symbol.iterator",function(l){if(l)return l;l=Symbol("Symbol.iterator");for(var g="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),w=0;w<g.length;w++){var N=r[g[w]];typeof N=="function"&&typeof N.prototype[l]!="function"&&t(N.prototype,l,{configurable:!0,writable:!0,value:function(){return a(e(this))}})}return l});var u,c=typeof Object.create=="function"?Object.create:function(l){function g(){}return g.prototype=l,new g};if(typeof Object.setPrototypeOf=="function")u=Object.setPrototypeOf;else{var f;e:{var p={};try{p.__proto__={a:!0},f=p.a;break e}catch{}f=!1}u=f?function(l,g){if(l.__proto__=g,l.__proto__!==g)throw new TypeError(l+" is not extensible");return l}:null}var b=u;function v(l,g){if(l.prototype=c(g.prototype),l.prototype.constructor=l,b)b(l,g);else for(var w in g)if(w!="prototype")if(Object.defineProperties){var N=Object.getOwnPropertyDescriptor(g,w);N&&Object.defineProperty(l,w,N)}else l[w]=g[w];l.na=g.prototype}function S(){this.l=!1,this.i=null,this.h=void 0,this.g=1,this.u=this.o=0,this.j=null}function A(l){if(l.l)throw new TypeError("Generator is already running");l.l=!0}function _(l,g){l.j={da:g,ea:!0},l.g=l.o||l.u}function C(l,g,w){return l.g=w,{value:g}}function K(l){this.g=new S,this.h=l}function U(l,g,w,N){try{var k=g.call(l.g.i,w);if(!(k instanceof Object))throw new TypeError("Iterator result "+k+" is not an object");if(!k.done)return l.g.l=!1,k;var E=k.value}catch(I){return l.g.i=null,_(l.g,I),B(l)}return l.g.i=null,N.call(l.g,E),B(l)}function B(l){for(;l.g.g;)try{var g=l.h(l.g);if(g)return l.g.l=!1,{value:g.value,done:!1}}catch(w){l.g.h=void 0,_(l.g,w)}if(l.g.l=!1,l.g.j){if(g=l.g.j,l.g.j=null,g.ea)throw g.da;return{value:g.return,done:!0}}return{value:void 0,done:!0}}function W(l){this.next=function(g){return A(l.g),l.g.i?g=U(l,l.g.i.next,g,l.g.s):(l.g.s(g),g=B(l)),g},this.throw=function(g){return A(l.g),l.g.i?g=U(l,l.g.i.throw,g,l.g.s):(_(l.g,g),g=B(l)),g},this.return=function(g){return function(w,N){A(w.g);var k=w.g.i;return k?U(w,"return"in k?k.return:function(E){return{value:E,done:!0}},N,w.g.return):(w.g.return(N),B(w))}(l,g)},this[Symbol.iterator]=function(){return this}}function G(l){return function(g){function w(k){return g.next(k)}function N(k){return g.throw(k)}return new Promise(function(k,E){(function I(D){D.done?k(D.value):Promise.resolve(D.value).then(w,N).then(I,E)})(g.next())})}(new W(new K(l)))}S.prototype.s=function(l){this.h=l},S.prototype.return=function(l){this.j={return:l},this.g=this.u},s("Promise",function(l){function g(I){this.h=0,this.i=void 0,this.g=[],this.s=!1;var D=this.j();try{I(D.resolve,D.reject)}catch(P){D.reject(P)}}function w(){this.g=null}function N(I){return I instanceof g?I:new g(function(D){D(I)})}if(l)return l;w.prototype.h=function(I){if(this.g==null){this.g=[];var D=this;this.i(function(){D.l()})}this.g.push(I)};var k=r.setTimeout;w.prototype.i=function(I){k(I,0)},w.prototype.l=function(){for(;this.g&&this.g.length;){var I=this.g;this.g=[];for(var D=0;D<I.length;++D){var P=I[D];I[D]=null;try{P()}catch(M){this.j(M)}}}this.g=null},w.prototype.j=function(I){this.i(function(){throw I})},g.prototype.j=function(){function I(M){return function(H){P||(P=!0,M.call(D,H))}}var D=this,P=!1;return{resolve:I(this.D),reject:I(this.l)}},g.prototype.D=function(I){if(I===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(I instanceof g)this.H(I);else{e:switch(typeof I){case"object":var D=I!=null;break e;case"function":D=!0;break e;default:D=!1}D?this.A(I):this.o(I)}},g.prototype.A=function(I){var D=void 0;try{D=I.then}catch(P){return void this.l(P)}typeof D=="function"?this.I(D,I):this.o(I)},g.prototype.l=function(I){this.u(2,I)},g.prototype.o=function(I){this.u(1,I)},g.prototype.u=function(I,D){if(this.h!=0)throw Error("Cannot settle("+I+", "+D+"): Promise already settled in state"+this.h);this.h=I,this.i=D,this.h===2&&this.G(),this.B()},g.prototype.G=function(){var I=this;k(function(){if(I.C()){var D=r.console;D!==void 0&&D.error(I.i)}},1)},g.prototype.C=function(){if(this.s)return!1;var I=r.CustomEvent,D=r.Event,P=r.dispatchEvent;return P===void 0||(typeof I=="function"?I=new I("unhandledrejection",{cancelable:!0}):typeof D=="function"?I=new D("unhandledrejection",{cancelable:!0}):(I=r.document.createEvent("CustomEvent")).initCustomEvent("unhandledrejection",!1,!0,I),I.promise=this,I.reason=this.i,P(I))},g.prototype.B=function(){if(this.g!=null){for(var I=0;I<this.g.length;++I)E.h(this.g[I]);this.g=null}};var E=new w;return g.prototype.H=function(I){var D=this.j();I.M(D.resolve,D.reject)},g.prototype.I=function(I,D){var P=this.j();try{I.call(D,P.resolve,P.reject)}catch(M){P.reject(M)}},g.prototype.then=function(I,D){function P(Z,ee){return typeof Z=="function"?function(ce){try{M(Z(ce))}catch(he){H(he)}}:ee}var M,H,Y=new g(function(Z,ee){M=Z,H=ee});return this.M(P(I,M),P(D,H)),Y},g.prototype.catch=function(I){return this.then(void 0,I)},g.prototype.M=function(I,D){function P(){switch(M.h){case 1:I(M.i);break;case 2:D(M.i);break;default:throw Error("Unexpected state: "+M.h)}}var M=this;this.g==null?E.h(P):this.g.push(P),this.s=!0},g.resolve=N,g.reject=function(I){return new g(function(D,P){P(I)})},g.race=function(I){return new g(function(D,P){for(var M=i(I),H=M.next();!H.done;H=M.next())N(H.value).M(D,P)})},g.all=function(I){var D=i(I),P=D.next();return P.done?N([]):new g(function(M,H){function Y(ce){return function(he){Z[ce]=he,--ee==0&&M(Z)}}var Z=[],ee=0;do Z.push(void 0),ee++,N(P.value).M(Y(Z.length-1),H),P=D.next();while(!P.done)})},g});var Q=typeof Object.assign=="function"?Object.assign:function(l,g){for(var w=1;w<arguments.length;w++){var N=arguments[w];if(N)for(var k in N)Object.prototype.hasOwnProperty.call(N,k)&&(l[k]=N[k])}return l};s("Object.assign",function(l){return l||Q}),s("Object.is",function(l){return l||function(g,w){return g===w?g!==0||1/g==1/w:g!=g&&w!=w}}),s("Array.prototype.includes",function(l){return l||function(g,w){var N=this;N instanceof String&&(N=String(N));var k=N.length;for(0>(w=w||0)&&(w=Math.max(w+k,0));w<k;w++){var E=N[w];if(E===g||Object.is(E,g))return!0}return!1}}),s("String.prototype.includes",function(l){return l||function(g,w){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(g instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(g,w||0)!==-1}}),s("Array.prototype.keys",function(l){return l||function(){return function(g,w){g instanceof String&&(g+="");var N=0,k=!1,E={next:function(){if(!k&&N<g.length){var I=N++;return{value:w(I,g[I]),done:!1}}return k=!0,{done:!0,value:void 0}}};return E[Symbol.iterator]=function(){return E},E}(this,function(g){return g})}});var re=this||self;function q(l,g){l=l.split(".");var w,N=re;for((l[0]in N)||N.execScript===void 0||N.execScript("var "+l[0]);l.length&&(w=l.shift());)l.length||g===void 0?N=N[w]&&N[w]!==Object.prototype[w]?N[w]:N[w]={}:N[w]=g}function te(){throw Error("Invalid UTF8")}function ue(l,g){return g=String.fromCharCode.apply(null,g),l==null?g:l+g}var Ne,ie,ke=typeof TextDecoder<"u",Be=typeof TextEncoder<"u",He={},Ve=null;function xt(l){var g;g===void 0&&(g=0),En(),g=He[g];for(var w=Array(Math.floor(l.length/3)),N=g[64]||"",k=0,E=0;k<l.length-2;k+=3){var I=l[k],D=l[k+1],P=l[k+2],M=g[I>>2];I=g[(3&I)<<4|D>>4],D=g[(15&D)<<2|P>>6],P=g[63&P],w[E++]=M+I+D+P}switch(M=0,P=N,l.length-k){case 2:P=g[(15&(M=l[k+1]))<<2]||N;case 1:l=l[k],w[E]=g[l>>2]+g[(3&l)<<4|M>>4]+P+N}return w.join("")}function mt(l){var g=l.length,w=3*g/4;w%3?w=Math.floor(w):"=.".indexOf(l[g-1])!=-1&&(w="=.".indexOf(l[g-2])!=-1?w-2:w-1);var N=new Uint8Array(w),k=0;return function(E,I){function D(ee){for(;P<E.length;){var ce=E.charAt(P++),he=Ve[ce];if(he!=null)return he;if(!/^[\s\xa0]*$/.test(ce))throw Error("Unknown base64 encoding at char: "+ce)}return ee}En();for(var P=0;;){var M=D(-1),H=D(0),Y=D(64),Z=D(64);if(Z===64&&M===-1)break;I(M<<2|H>>4),Y!=64&&(I(H<<4&240|Y>>2),Z!=64&&I(Y<<6&192|Z))}}(l,function(E){N[k++]=E}),k!==w?N.subarray(0,k):N}function En(){if(!Ve){Ve={};for(var l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),g=["+/=","+/","-_=","-_.","-_"],w=0;5>w;w++){var N=l.concat(g[w].split(""));He[w]=N;for(var k=0;k<N.length;k++){var E=N[k];Ve[E]===void 0&&(Ve[E]=k)}}}}var Ft,ts=typeof Uint8Array=="function";function br(l){return ts&&l!=null&&l instanceof Uint8Array}function ns(l){if(this.L=l,l!==null&&l.length===0)throw Error("ByteString should be constructed with non-empty values")}var rs=typeof Uint8Array.prototype.slice=="function",Ct=0;function wr(l,g){return Error("Invalid wire type: "+l+" (at position "+g+")")}function Zn(){return Error("Failed to read varint, encoding is invalid.")}function gt(l,g){g=(g=g===void 0?{}:g).v!==void 0&&g.v,this.h=null,this.g=this.i=this.j=0,this.v=g,l&&yt(this,l)}function yt(l,g){l.h=function(w,N){if(w.constructor===Uint8Array)return w;if(w.constructor===ArrayBuffer)return new Uint8Array(w);if(w.constructor===Array)return new Uint8Array(w);if(w.constructor===String)return mt(w);if(w.constructor===ns)return!N&&(N=w.L)&&N.constructor===Uint8Array?N:(N=(N=w.L)==null||br(N)?N:typeof N=="string"?mt(N):null,(w=w.L=N)?new Uint8Array(w):Ft||(Ft=new Uint8Array(0)));if(w instanceof Uint8Array)return new Uint8Array(w.buffer,w.byteOffset,w.byteLength);throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, or Array of numbers")}(g,l.v),l.j=0,l.i=l.h.length,l.g=l.j}function Ce(l){if(l.g>l.i)throw Error("Tried to read past the end of the data "+l.g+" > "+l.i)}function on(l){var g=l.h,w=g[l.g],N=127&w;if(128>w)return l.g+=1,Ce(l),N;if(N|=(127&(w=g[l.g+1]))<<7,128>w)return l.g+=2,Ce(l),N;if(N|=(127&(w=g[l.g+2]))<<14,128>w)return l.g+=3,Ce(l),N;if(N|=(127&(w=g[l.g+3]))<<21,128>w)return l.g+=4,Ce(l),N;if(w=g[l.g+4],l.g+=5,N|=(15&w)<<28,128>w)return Ce(l),N;if(128<=g[l.g++]&&128<=g[l.g++]&&128<=g[l.g++]&&128<=g[l.g++]&&128<=g[l.g++])throw Zn();return Ce(l),N}gt.prototype.reset=function(){this.g=this.j};var xn=[];function Qn(){this.g=[]}function bt(l,g){for(;127<g;)l.g.push(127&g|128),g>>>=7;l.g.push(g)}function kt(l){var g={},w=g.W!==void 0&&g.W;this.l={v:g.v!==void 0&&g.v},this.W=w,g=this.l,xn.length?(w=xn.pop(),g&&(w.v=g.v),l&&yt(w,l),l=w):l=new gt(l,g),this.g=l,this.j=this.g.g,this.h=this.i=-1}function un(l){var g=l.g;if(g.g==g.i)return!1;l.j=l.g.g;var w=on(l.g)>>>0;if(g=w>>>3,!(0<=(w&=7)&&5>=w))throw wr(w,l.j);if(1>g)throw Error("Invalid field number: "+g+" (at position "+l.j+")");return l.i=g,l.h=w,!0}function nt(l){switch(l.h){case 0:if(l.h!=0)nt(l);else e:{for(var g=(l=l.g).g,w=g+10;g<w;)if(!(128&l.h[g++])){l.g=g,Ce(l);break e}throw Zn()}break;case 1:(l=l.g).g+=8,Ce(l);break;case 2:l.h!=2?nt(l):(g=on(l.g)>>>0,(l=l.g).g+=g,Ce(l));break;case 5:(l=l.g).g+=4,Ce(l);break;case 3:for(g=l.i;;){if(!un(l))throw Error("Unmatched start-group tag: stream EOF");if(l.h==4){if(l.i!=g)throw Error("Unmatched end-group tag");break}nt(l)}break;default:throw wr(l.h,l.j)}}Qn.prototype.length=function(){return this.g.length},Qn.prototype.end=function(){var l=this.g;return this.g=[],l},kt.prototype.reset=function(){this.g.reset(),this.j=this.g.g,this.h=this.i=-1};var _t=[];function er(){this.i=[],this.h=0,this.g=new Qn}function je(l,g){g.length!==0&&(l.i.push(g),l.h+=g.length)}var kn=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol(void 0):void 0;function vr(l,g){Object.isFrozen(l)||(kn?l[kn]|=g:l.N!==void 0?l.N|=g:Object.defineProperties(l,{N:{value:g,configurable:!0,writable:!0,enumerable:!1}}))}function Nr(l){var g;return(g=kn?l[kn]:l.N)==null?0:g}function Ut(l){return vr(l,1),l}function wt(l){return!!Array.isArray(l)&&!!(2&Nr(l))}function _n(l){if(!Array.isArray(l))throw Error("cannot mark non-array as immutable");vr(l,2)}function rt(l){return l!==null&&typeof l=="object"&&!Array.isArray(l)&&l.constructor===Object}var $n=Object.freeze(Ut([]));function Tr(l){if(wt(l.m))throw Error("Cannot mutate an immutable Message")}var Sr,ss=typeof Symbol<"u"&&Symbol.hasInstance!==void 0;function as(l){return{value:l,configurable:!1,writable:!1,enumerable:!1}}function qe(l,g,w){return g===-1?null:g>=l.i?l.g?l.g[g]:void 0:w!==void 0&&w&&l.g&&(w=l.g[g])!=null?w:l.m[g+l.h]}function Re(l,g,w,N){N=N!==void 0&&N,Tr(l),g<l.i&&!N?l.m[g+l.h]=w:(l.g||(l.g=l.m[l.i+l.h]={}))[g]=w}function Le(l,g,w,N){w=w===void 0||w;var k=qe(l,g,N=N!==void 0&&N);return k==null&&(k=$n),wt(l.m)?w&&(_n(k),Object.freeze(k)):(k===$n||wt(k))&&Re(l,g,k=Ut(k.slice()),N),k}function Ze(l,g,w){return(l=(l=qe(l,g))==null?l:+l)==null?w===void 0?0:w:l}function An(l,g,w,N){l.j||(l.j={});var k=wt(l.m),E=l.j[w];if(!E){N=Le(l,w,!0,N!==void 0&&N),E=[],k=k||wt(N);for(var I=0;I<N.length;I++)E[I]=new g(N[I]),k&&_n(E[I].m);k&&(_n(E),Object.freeze(E)),l.j[w]=E}return E}function xe(l,g,w,N,k){var E=E!==void 0&&E;return Tr(l),E=An(l,w,g,E),w=N||new w,l=Le(l,g),k!=null?(E.splice(k,0,w),l.splice(k,0,w.m)):(E.push(w),l.push(w.m)),w}function In(l,g){return(l=qe(l,g))==null?0:l}function Er(l,g){return(l=qe(l,g))==null?"":l}function Rt(l){var g=is;return ge(l,g=g===void 0?tr:g)}function ct(l,g){if(l!=null){if(Array.isArray(l))l=ge(l,g);else if(rt(l)){var w,N={};for(w in l)N[w]=ct(l[w],g);l=N}else l=g(l);return l}}function ge(l,g){for(var w=l.slice(),N=0;N<w.length;N++)w[N]=ct(w[N],g);return Array.isArray(l)&&1&Nr(l)&&Ut(w),w}function is(l){return l&&typeof l=="object"&&l.toJSON?l.toJSON():(l=function(g){switch(typeof g){case"number":return isFinite(g)?g:String(g);case"object":if(g&&!Array.isArray(g)){if(br(g))return xt(g);if(g instanceof ns){var w=g.L;return w=w==null||typeof w=="string"?w:ts&&w instanceof Uint8Array?xt(w):null,(g.L=w)||""}}}return g}(l),Array.isArray(l)?Rt(l):l)}function tr(l){return br(l)?new Uint8Array(l):l}function On(l,g,w){l||(l=Sr),Sr=null;var N=this.constructor.h;if(l||(l=N?[N]:[]),this.h=(N?0:-1)-(this.constructor.g||0),this.j=void 0,this.m=l,l=(N=this.m.length)-1,N&&rt(N=this.m[l])?(this.i=l-this.h,this.g=N):g!==void 0&&-1<g?(this.i=Math.max(g,l+1-this.h),this.g=void 0):this.i=Number.MAX_VALUE,w)for(g=0;g<w.length;g++)if((l=w[g])<this.i)l+=this.h,(N=this.m[l])?Array.isArray(N)&&Ut(N):this.m[l]=$n;else{var k=(N=this.g||(this.g=this.m[this.i+this.h]={}))[l];k?Array.isArray(k)&&Ut(k):N[l]=$n}}function Dn(){On.apply(this,arguments)}if(On.prototype.toJSON=function(){return Rt(this.m)},On.prototype.toString=function(){return this.m.toString()},v(Dn,On),ss){var Lt={};Object.defineProperties(Dn,(Lt[Symbol.hasInstance]=as(function(){throw Error("Cannot perform instanceof checks for MutableMessage")}),Lt))}function nr(l,g,w){if(w){var N,k={};for(N in w){var E=w[N],I=E.ha;I||(k.F=E.la||E.fa.P,E.aa?(k.U=us(E.aa),I=function(D){return function(P,M,H){return D.F(P,M,H,D.U)}}(k)):E.ca?(k.T=rr(E.X.g,E.ca),I=function(D){return function(P,M,H){return D.F(P,M,H,D.T)}}(k)):I=k.F,E.ha=I),I(g,l,E.X),k={F:k.F,U:k.U,T:k.T}}}(function(D,P){if(P=P.ba){je(D,D.g.end());for(var M=0;M<P.length;M++)je(D,P[M])}})(g,l)}var lt=Symbol();function Pt(l,g,w){return l[lt]||(l[lt]=function(N,k){return g(N,k,w)})}function os(l){var g=l[lt];if(!g){var w=ps(l);g=function(N,k){return xr(N,k,w)},l[lt]=g}return g}function Ys(l){var g=function(k){var E=k.aa;return E?os(E):(E=k.ka)?Pt(k.X.g,E,k.ca):void 0}(l),w=l.X,N=l.fa.O;return g?function(k,E){return N(k,E,w,g)}:function(k,E){return N(k,E,w)}}function Ue(l,g,w,N,k,E){var I=0;for((l=l()).length&&typeof l[0]!="number"&&(w(g,l[0]),I++);I<l.length;){w=l[I++];for(var D=I+1;D<l.length&&typeof l[D]!="number";)D++;var P=l[I++];switch(D-=I){case 0:N(g,w,P);break;case 1:N(g,w,P,l[I++]);break;case 2:k(g,w,P,l[I++],l[I++]);break;case 3:D=l[I++];var M=l[I++],H=l[I++];Array.isArray(H)?k(g,w,P,D,M,H):E(g,w,P,D,M,H);break;case 4:E(g,w,P,l[I++],l[I++],l[I++],l[I++]);break;default:throw Error("unexpected number of binary field arguments: "+D)}}return g}var Bt=Symbol();function us(l){var g=l[Bt];if(!g){var w=fs(l);g=function(N,k){return _r(N,k,w)},l[Bt]=g}return g}function rr(l,g){var w=l[Bt];return w||(w=function(N,k){return nr(N,k,g)},l[Bt]=w),w}var cs=Symbol();function cn(l,g){l.push(g)}function Js(l,g,w){l.push(g,w.P)}function ls(l,g,w,N,k){var E=us(k),I=w.P;l.push(g,function(D,P,M){return I(D,P,M,N,E)})}function hs(l,g,w,N,k,E){var I=rr(N,E),D=w.P;l.push(g,function(P,M,H){return D(P,M,H,N,I)})}function fs(l){var g=l[cs];return g||Ue(l,l[cs]=[],cn,Js,ls,hs)}var sr=Symbol();function Wt(l,g){l[0]=g}function Zs(l,g,w,N){var k=w.O;l[g]=N?function(E,I,D){return k(E,I,D,N)}:k}function Qs(l,g,w,N,k,E){var I=w.O,D=os(k);l[g]=function(P,M,H){return I(P,M,H,N,D,E)}}function ar(l,g,w,N,k,E,I){var D=w.O,P=Pt(N,k,E);l[g]=function(M,H,Y){return D(M,H,Y,N,P,I)}}function ps(l){var g=l[sr];return g||Ue(l,l[sr]={},Wt,Zs,Qs,ar)}function xr(l,g,w){for(;un(g)&&g.h!=4;){var N=g.i,k=w[N];if(!k){var E=w[0];E&&(E=E[N])&&(k=w[N]=Ys(E))}if(!(k&&k(g,l,N)||(k=g,N=l,E=k.j,nt(k),k.W))){var I=k.g.h;k=E===(k=k.g.g)?Ft||(Ft=new Uint8Array(0)):rs?I.slice(E,k):new Uint8Array(I.subarray(E,k)),(E=N.ba)?E.push(k):N.ba=[k]}}return l}function kr(l,g,w){if(_t.length){var N=_t.pop();l&&(yt(N.g,l),N.i=-1,N.h=-1),l=N}else l=new kt(l);try{return xr(new g,l,ps(w))}finally{(g=l.g).h=null,g.j=0,g.i=0,g.g=0,g.v=!1,l.i=-1,l.h=-1,100>_t.length&&_t.push(l)}}function _r(l,g,w){for(var N=w.length,k=N%2==1,E=k?1:0;E<N;E+=2)(0,w[E+1])(g,l,w[E]);nr(l,g,k?w[0]:void 0)}function Fn(l,g){var w=new er;_r(l,w,fs(g)),je(w,w.g.end()),l=new Uint8Array(w.h);for(var N=(g=w.i).length,k=0,E=0;E<N;E++){var I=g[E];l.set(I,k),k+=I.length}return w.i=[l],l}function ln(l,g){return{O:l,P:g}}var ht=ln(function(l,g,w){if(l.h!==5)return!1;var N=(l=l.g).h[l.g],k=l.h[l.g+1],E=l.h[l.g+2],I=l.h[l.g+3];return l.g+=4,Ce(l),l=2*((k=(N<<0|k<<8|E<<16|I<<24)>>>0)>>31)+1,N=k>>>23&255,k&=8388607,Re(g,w,N==255?k?NaN:1/0*l:N==0?l*Math.pow(2,-149)*k:l*Math.pow(2,N-150)*(k+Math.pow(2,23))),!0},function(l,g,w){if((g=qe(g,w))!=null){bt(l.g,8*w+5),l=l.g;var N=g;(N=(w=0>N?1:0)?-N:N)===0?0<1/N?Ct=0:Ct=2147483648:isNaN(N)?Ct=2147483647:34028234663852886e22<N?Ct=(w<<31|2139095040)>>>0:11754943508222875e-54>N?(N=Math.round(N/Math.pow(2,-149)),Ct=(w<<31|N)>>>0):(g=Math.floor(Math.log(N)/Math.LN2),N*=Math.pow(2,-g),16777216<=(N=Math.round(8388608*N))&&++g,Ct=(w<<31|g+127<<23|8388607&N)>>>0),w=Ct,l.g.push(w>>>0&255),l.g.push(w>>>8&255),l.g.push(w>>>16&255),l.g.push(w>>>24&255)}}),ea=ln(function(l,g,w){if(l.h!==0)return!1;for(var N=l.g,k=128,E=0,I=l=0;4>I&&128<=k;I++)k=N.h[N.g++],Ce(N),E|=(127&k)<<7*I;if(128<=k&&(k=N.h[N.g++],Ce(N),E|=(127&k)<<28,l|=(127&k)>>4),128<=k)for(I=0;5>I&&128<=k;I++)k=N.h[N.g++],Ce(N),l|=(127&k)<<7*I+3;if(!(128>k))throw Zn();return N=E>>>0,(l=2147483648&(k=l>>>0))&&(k=~k>>>0,(N=1+~N>>>0)==0&&(k=k+1>>>0)),N=4294967296*k+(N>>>0),Re(g,w,l?-N:N),!0},function(l,g,w){if((g=qe(g,w))!=null&&g!=null){bt(l.g,8*w),l=l.g;var N=g;for(w=0>N,g=(N=Math.abs(N))>>>0,N=Math.floor((N-g)/4294967296),N>>>=0,w&&(N=~N>>>0,4294967295<(g=1+(~g>>>0))&&(g=0,4294967295<++N&&(N=0))),w=Ct=g,g=N;0<g||127<w;)l.g.push(127&w|128),w=(w>>>7|g<<25)>>>0,g>>>=7;l.g.push(w)}}),ta=ln(function(l,g,w){return l.h===0&&(Re(g,w,on(l.g)),!0)},function(l,g,w){if((g=qe(g,w))!=null&&g!=null)if(bt(l.g,8*w),l=l.g,0<=(w=g))bt(l,w);else{for(g=0;9>g;g++)l.g.push(127&w|128),w>>=7;l.g.push(1)}}),ds=ln(function(l,g,w){if(l.h!==2)return!1;var N,k=on(l.g)>>>0,E=(l=l.g).g;if(l.g+=k,Ce(l),l=l.h,ke)(N=Ne)||(N=Ne=new TextDecoder("utf-8",{fatal:!0})),N=N.decode(l.subarray(E,E+k));else{k=E+k;for(var I,D,P,M=[],H=null;E<k;)128>(I=l[E++])?M.push(I):224>I?E>=k?te():(D=l[E++],194>I||(192&D)!=128?(E--,te()):M.push((31&I)<<6|63&D)):240>I?E>=k-1?te():(192&(D=l[E++]))!=128||I===224&&160>D||I===237&&160<=D||(192&(N=l[E++]))!=128?(E--,te()):M.push((15&I)<<12|(63&D)<<6|63&N):244>=I?E>=k-2?te():(192&(D=l[E++]))!=128||D-144+(I<<28)>>30||(192&(N=l[E++]))!=128||(192&(P=l[E++]))!=128?(E--,te()):(I=(7&I)<<18|(63&D)<<12|(63&N)<<6|63&P,I-=65536,M.push(55296+(I>>10&1023),56320+(1023&I))):te(),8192<=M.length&&(H=ue(H,M),M.length=0);N=ue(H,M)}return Re(g,w,N),!0},function(l,g,w){if((g=qe(g,w))!=null){var N=!1;if(N=N!==void 0&&N,Be){if(N&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(g))throw Error("Found an unpaired surrogate");g=(ie||(ie=new TextEncoder)).encode(g)}else{for(var k=0,E=new Uint8Array(3*g.length),I=0;I<g.length;I++){var D=g.charCodeAt(I);if(128>D)E[k++]=D;else{if(2048>D)E[k++]=D>>6|192;else{if(55296<=D&&57343>=D){if(56319>=D&&I<g.length){var P=g.charCodeAt(++I);if(56320<=P&&57343>=P){D=1024*(D-55296)+P-56320+65536,E[k++]=D>>18|240,E[k++]=D>>12&63|128,E[k++]=D>>6&63|128,E[k++]=63&D|128;continue}I--}if(N)throw Error("Found an unpaired surrogate");D=65533}E[k++]=D>>12|224,E[k++]=D>>6&63|128}E[k++]=63&D|128}}g=E.subarray(0,k)}bt(l.g,8*w+2),bt(l.g,g.length),je(l,l.g.end()),je(l,g)}}),$r=ln(function(l,g,w,N,k){if(l.h!==2)return!1;g=xe(g,w,N),w=l.g.i,N=on(l.g)>>>0;var E=l.g.g+N,I=E-w;if(0>=I&&(l.g.i=E,k(g,l),I=E-l.g.g),I)throw Error("Message parsing ended unexpectedly. Expected to read "+N+" bytes, instead read "+(N-I)+" bytes, either the data ended unexpectedly or the message misreported its own length");return l.g.g=E,l.g.i=w,!0},function(l,g,w,N,k){if((g=An(g,N,w))!=null)for(N=0;N<g.length;N++){var E=l;bt(E.g,8*w+2);var I=E.g.end();je(E,I),I.push(E.h),E=I,k(g[N],l),I=l;var D=E.pop();for(D=I.h+I.g.length()-D;127<D;)E.push(127&D|128),D>>>=7,I.h++;E.push(D),I.h++}});function st(){Dn.apply(this,arguments)}if(v(st,Dn),ss){var ms={};Object.defineProperties(st,(ms[Symbol.hasInstance]=as(Object[Symbol.hasInstance]),ms))}function Gt(l){st.call(this,l)}function gs(){return[1,ta,2,ht,3,ds,4,ds]}function Ar(l){st.call(this,l,-1,ra)}function na(){return[1,$r,Gt,gs]}v(Gt,st),v(Ar,st),Ar.prototype.addClassification=function(l,g){return xe(this,1,Gt,l,g),this};var ra=[1];function hn(l){st.call(this,l)}function ys(){return[1,ht,2,ht,3,ht,4,ht,5,ht]}function bs(l){st.call(this,l,-1,aa)}function sa(){return[1,$r,hn,ys]}v(hn,st),v(bs,st);var aa=[1];function Ir(l){st.call(this,l)}function Or(){return[1,ht,2,ht,3,ht,4,ht,5,ht,6,ea]}v(Ir,st);var Dr=[[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]],Fr=[[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]],Cr=[[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]],Rr=[[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]],Lr=[[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]],ws=[[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]],vs=[].concat(o(Dr),o(Fr),o(Cr),o(Rr),o(Lr),o(ws));function h(l,g,w){if(w=l.createShader(w===0?l.VERTEX_SHADER:l.FRAGMENT_SHADER),l.shaderSource(w,g),l.compileShader(w),!l.getShaderParameter(w,l.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+l.getShaderInfoLog(w));return w}function m(l){return An(l,Gt,1).map(function(g){return{index:In(g,1),ga:Ze(g,2),label:qe(g,3)!=null?Er(g,3):void 0,displayName:qe(g,4)!=null?Er(g,4):void 0}})}function y(l){return{x:Ze(l,1),y:Ze(l,2),z:Ze(l,3),visibility:qe(l,4)!=null?Ze(l,4):void 0}}function $(l,g){this.h=l,this.g=g,this.l=0}function R(l,g,w){return function(N,k){var E=N.g;if(N.o===void 0){var I=h(E,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),D=h(E,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),P=E.createProgram();if(E.attachShader(P,I),E.attachShader(P,D),E.linkProgram(P),!E.getProgramParameter(P,E.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+E.getProgramInfoLog(P));I=N.o=P,E.useProgram(I),D=E.getUniformLocation(I,"sampler0"),N.j={K:E.getAttribLocation(I,"aVertex"),J:E.getAttribLocation(I,"aTex"),ma:D},N.u=E.createBuffer(),E.bindBuffer(E.ARRAY_BUFFER,N.u),E.enableVertexAttribArray(N.j.K),E.vertexAttribPointer(N.j.K,2,E.FLOAT,!1,0,0),E.bufferData(E.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),E.STATIC_DRAW),E.bindBuffer(E.ARRAY_BUFFER,null),N.s=E.createBuffer(),E.bindBuffer(E.ARRAY_BUFFER,N.s),E.enableVertexAttribArray(N.j.J),E.vertexAttribPointer(N.j.J,2,E.FLOAT,!1,0,0),E.bufferData(E.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),E.STATIC_DRAW),E.bindBuffer(E.ARRAY_BUFFER,null),E.uniform1i(D,0)}I=N.j,E.useProgram(N.o),E.canvas.width=k.width,E.canvas.height=k.height,E.viewport(0,0,k.width,k.height),E.activeTexture(E.TEXTURE0),N.h.bindTexture2d(k.glName),E.enableVertexAttribArray(I.K),E.bindBuffer(E.ARRAY_BUFFER,N.u),E.vertexAttribPointer(I.K,2,E.FLOAT,!1,0,0),E.enableVertexAttribArray(I.J),E.bindBuffer(E.ARRAY_BUFFER,N.s),E.vertexAttribPointer(I.J,2,E.FLOAT,!1,0,0),E.bindFramebuffer(E.DRAW_FRAMEBUFFER?E.DRAW_FRAMEBUFFER:E.FRAMEBUFFER,null),E.clearColor(0,0,0,0),E.clear(E.COLOR_BUFFER_BIT),E.colorMask(!0,!0,!0,!0),E.drawArrays(E.TRIANGLE_FAN,0,4),E.disableVertexAttribArray(I.K),E.disableVertexAttribArray(I.J),E.bindBuffer(E.ARRAY_BUFFER,null),N.h.bindTexture2d(0)}(l,g),typeof l.g.canvas.transferToImageBitmap=="function"?Promise.resolve(l.g.canvas.transferToImageBitmap()):w?Promise.resolve(l.g.canvas):typeof createImageBitmap=="function"?createImageBitmap(l.g.canvas):(l.i===void 0&&(l.i=document.createElement("canvas")),new Promise(function(N){l.i.height=l.g.canvas.height,l.i.width=l.g.canvas.width,l.i.getContext("2d",{}).drawImage(l.g.canvas,0,0,l.g.canvas.width,l.g.canvas.height),N(l.i)}))}function j(l){this.g=l}var L=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function z(l,g){return g+l}function X(l,g){window[l]=g}function ne(l){if(this.g=l,this.listeners={},this.j={},this.H={},this.o={},this.u={},this.I=this.s=this.Z=!0,this.D=Promise.resolve(),this.Y="",this.C={},this.locateFile=l&&l.locateFile||z,typeof window=="object")var g=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else{if(typeof location>"u")throw Error("solutions can only be loaded on a web page or in a web worker");g=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/"}if(this.$=g,l.options)for(var w=(g=i(Object.keys(l.options))).next();!w.done;w=g.next()){w=w.value;var N=l.options[w].default;N!==void 0&&(this.j[w]=typeof N=="function"?N():N)}}function oe(l){var g,w,N,k,E,I,D,P,M,H,Y;return G(function(Z){switch(Z.g){case 1:return l.Z?(g=l.g.files===void 0?[]:typeof l.g.files=="function"?l.g.files(l.j):l.g.files,C(Z,G(function(ee){switch(ee.g){case 1:return ee.o=2,C(ee,WebAssembly.instantiate(L),4);case 4:ee.g=3,ee.o=0;break;case 2:return ee.o=0,ee.j=null,ee.return(!1);case 3:return ee.return(!0)}}),2)):Z.return();case 2:if(w=Z.h,typeof window=="object")return X("createMediapipeSolutionsWasm",{locateFile:l.locateFile}),X("createMediapipeSolutionsPackedAssets",{locateFile:l.locateFile}),I=g.filter(function(ee){return ee.data!==void 0}),D=g.filter(function(ee){return ee.data===void 0}),P=Promise.all(I.map(function(ee){var ce=we(l,ee.url);if(ee.path!==void 0){var he=ee.path;ce=ce.then(function(Ee){return l.overrideFile(he,Ee),Promise.resolve(Ee)})}return ce})),M=Promise.all(D.map(function(ee){return ee.simd===void 0||ee.simd&&w||!ee.simd&&!w?function(ce){var he=document.createElement("script");return he.setAttribute("src",ce),he.setAttribute("crossorigin","anonymous"),new Promise(function(Ee){he.addEventListener("load",function(){Ee()},!1),he.addEventListener("error",function(){Ee()},!1),document.body.appendChild(he)})}(l.locateFile(ee.url,l.$)):Promise.resolve()})).then(function(){var ee,ce,he;return G(function(Ee){if(Ee.g==1)return ee=window.createMediapipeSolutionsWasm,ce=window.createMediapipeSolutionsPackedAssets,he=l,C(Ee,ee(ce),2);he.h=Ee.h,Ee.g=0})}),H=G(function(ee){return l.g.graph&&l.g.graph.url?ee=C(ee,we(l,l.g.graph.url),0):(ee.g=0,ee=void 0),ee}),C(Z,Promise.all([M,P,H]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return N=g.filter(function(ee){return ee.simd===void 0||ee.simd&&w||!ee.simd&&!w}).map(function(ee){return l.locateFile(ee.url,l.$)}),importScripts.apply(null,o(N)),k=l,C(Z,createMediapipeSolutionsWasm(Module),6);case 6:k.h=Z.h,l.l=new OffscreenCanvas(1,1),l.h.canvas=l.l,E=l.h.GL.createContext(l.l,{antialias:!1,alpha:!1,ja:typeof WebGL2RenderingContext<"u"?2:1}),l.h.GL.makeContextCurrent(E),Z.g=4;break;case 7:if(l.l=document.createElement("canvas"),!(Y=l.l.getContext("webgl2",{}))&&!(Y=l.l.getContext("webgl",{})))return alert("Failed to create WebGL canvas context when passing video frame."),Z.return();l.G=Y,l.h.canvas=l.l,l.h.createContext(l.l,!0,!0,{});case 4:l.i=new l.h.SolutionWasm,l.Z=!1,Z.g=0}})}function we(l,g){var w,N;return G(function(k){return g in l.H?k.return(l.H[g]):(w=l.locateFile(g,""),N=fetch(w).then(function(E){return E.arrayBuffer()}),l.H[g]=N,k.return(N))})}function de(l,g,w){var N,k,E,I,D,P,M,H,Y,Z,ee,ce,he,Ee;return G(function(_e){switch(_e.g){case 1:if(!w)return _e.return(g);for(N={},k=0,E=i(Object.keys(w)),I=E.next();!I.done;I=E.next())D=I.value,typeof(P=w[D])!="string"&&P.type==="texture"&&g[P.stream]!==void 0&&++k;1<k&&(l.I=!1),M=i(Object.keys(w)),I=M.next();case 2:if(I.done){_e.g=4;break}if(H=I.value,typeof(Y=w[H])=="string")return he=N,Ee=H,C(_e,function(Cn,Ii,ir){var Ns;return G(function(ia){return typeof ir=="number"||ir instanceof Uint8Array||ir instanceof Cn.h.Uint8BlobList?ia.return(ir):ir instanceof Cn.h.Texture2dDataOut?((Ns=Cn.u[Ii])||(Ns=new $(Cn.h,Cn.G),Cn.u[Ii]=Ns),ia.return(R(Ns,ir,Cn.I))):ia.return(void 0)})}(l,H,g[Y]),14);if(Z=g[Y.stream],Y.type==="detection_list"){if(Z){for(var Qe=Z.getRectList(),vt=Z.getLandmarksList(),at=Z.getClassificationsList(),Te=[],Xe=0;Xe<Qe.size();++Xe){var fn=kr(Qe.get(Xe),Ir,Or);fn={boundingBox:{xCenter:Ze(fn,1),yCenter:Ze(fn,2),height:Ze(fn,3),width:Ze(fn,4),rotation:Ze(fn,5,0),rectId:In(fn,6)},landmarks:An(kr(vt.get(Xe),bs,sa),hn,1).map(y),V:m(kr(at.get(Xe),Ar,na))},Te.push(fn)}Qe=Te}else Qe=[];N[H]=Qe,_e.g=7;break}if(Y.type==="proto_list"){if(Z){for(Qe=Array(Z.size()),vt=0;vt<Z.size();vt++)Qe[vt]=Z.get(vt);Z.delete()}else Qe=[];N[H]=Qe,_e.g=7;break}if(Z===void 0){_e.g=3;break}if(Y.type==="float_list"){N[H]=Z,_e.g=7;break}if(Y.type==="proto"){N[H]=Z,_e.g=7;break}if(Y.type!=="texture")throw Error("Unknown output config type: '"+Y.type+"'");return(ee=l.u[H])||(ee=new $(l.h,l.G),l.u[H]=ee),C(_e,R(ee,Z,l.I),13);case 13:ce=_e.h,N[H]=ce;case 7:Y.transform&&N[H]&&(N[H]=Y.transform(N[H])),_e.g=3;break;case 14:he[Ee]=_e.h;case 3:I=M.next(),_e.g=2;break;case 4:return _e.return(N)}})}function le(l,g){for(var w=g.name||"$",N=[].concat(o(g.wants)),k=new l.h.StringList,E=i(g.wants),I=E.next();!I.done;I=E.next())k.push_back(I.value);E=l.h.PacketListener.implement({onResults:function(D){for(var P={},M=0;M<g.wants.length;++M)P[N[M]]=D.get(M);var H=l.listeners[w];H&&(l.D=de(l,P,g.outs).then(function(Y){Y=H(Y);for(var Z=0;Z<g.wants.length;++Z){var ee=P[N[Z]];typeof ee=="object"&&ee.hasOwnProperty&&ee.hasOwnProperty("delete")&&ee.delete()}Y&&(l.D=Y)}))}}),l.i.attachMultiListener(k,E),k.delete()}function se(l){var g=this;l=l||{};var w={url:"face_detection_short.binarypb"},N={type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}};this.g=new ne({locateFile:l.locateFile,files:[{data:!0,url:"face_detection_short.binarypb"},{data:!0,url:"face_detection_short_range.tflite"},{simd:!0,url:"face_detection_solution_simd_wasm_bin.js"},{simd:!1,url:"face_detection_solution_wasm_bin.js"}],graph:w,listeners:[{wants:["detections","image_transformed"],outs:{image:"image_transformed",detections:{type:"detection_list",stream:"detections"}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window=="object"&&window.navigator!==void 0&&("iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document)},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},model:{type:0,onChange:function(k){var E,I,D,P,M;return G(function(H){switch(H.g){case 1:E=i(k==="short"?["face_detection_short_range.tflite"]:["face_detection_full_range_sparse.tflite"]),I=E.next();case 2:if(I.done){H.g=4;break}return D=I.value,P="third_party/mediapipe/modules/face_detection/"+D,C(H,we(g.g,D),5);case 5:M=H.h,g.g.overrideFile(P,M),I=E.next(),H.g=2;break;case 4:return w.url=k==="short"?"face_detection_short.binarypb":"face_detection_full.binarypb",N.graphOptionXref.calculatorName=k==="short"?"facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator":"facedetectionfullrangegpu__facedetectionfullrangecommon__TensorsToDetectionsCalculator",H.return(!0)}})}},minDetectionConfidence:N}})}(n=ne.prototype).close=function(){return this.i&&this.i.delete(),Promise.resolve()},n.reset=function(){var l=this;return G(function(g){l.i&&(l.i.reset(),l.o={},l.u={}),g.g=0})},n.setOptions=function(l,g){var w=this;if(g=g||this.g.options){for(var N=[],k=[],E={},I=i(Object.keys(l)),D=I.next();!D.done;E={R:E.R,S:E.S},D=I.next()){var P=D.value;P in this.j&&this.j[P]===l[P]||(this.j[P]=l[P],(D=g[P])!==void 0&&(D.onChange&&(E.R=D.onChange,E.S=l[P],N.push(function(M){return function(){return G(function(H){if(H.g==1)return C(H,M.R(M.S),2);H.h===!0&&(w.s=!0),H.g=0})}}(E))),D.graphOptionXref&&(P={valueNumber:D.type===1?l[P]:0,valueBoolean:D.type===0&&l[P],valueString:D.type===2?l[P]:""},D=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),D.graphOptionXref),P),k.push(D))))}N.length===0&&k.length===0||(this.s=!0,this.B=(this.B===void 0?[]:this.B).concat(k),this.A=(this.A===void 0?[]:this.A).concat(N))}},n.initialize=function(){var l=this;return G(function(g){return g.g==1?C(g,oe(l),2):g.g!=3?C(g,function(w){var N,k,E,I,D,P,M,H;return G(function(Y){if(Y.g==1)return w.g.graph&&w.g.graph.url&&w.Y===w.g.graph.url?Y.return():(w.s=!0,w.g.graph&&w.g.graph.url?(w.Y=w.g.graph.url,C(Y,we(w,w.g.graph.url),3)):void(Y.g=2));for(Y.g!=2&&(N=Y.h,w.i.loadGraph(N)),k=i(Object.keys(w.C)),E=k.next();!E.done;E=k.next())I=E.value,w.i.overrideFile(I,w.C[I]);if(w.C={},w.g.listeners)for(D=i(w.g.listeners),P=D.next();!P.done;P=D.next())M=P.value,le(w,M);H=w.j,w.j={},w.setOptions(H),Y.g=0})}(l),3):C(g,function(w){var N,k,E,I,D,P;return G(function(M){switch(M.g){case 1:if(!w.s)return M.return();if(!w.A){M.g=2;break}N=i(w.A),k=N.next();case 3:if(k.done){M.g=5;break}return C(M,(0,k.value)(),4);case 4:k=N.next(),M.g=3;break;case 5:w.A=void 0;case 2:if(w.B){for(E=new w.h.GraphOptionChangeRequestList,I=i(w.B),D=I.next();!D.done;D=I.next())P=D.value,E.push_back(P);w.i.changeOptions(E),E.delete(),w.B=void 0}w.s=!1,M.g=0}})}(l),0)})},n.overrideFile=function(l,g){this.i?this.i.overrideFile(l,g):this.C[l]=g},n.clearOverriddenFiles=function(){this.C={},this.i&&this.i.clearOverriddenFiles()},n.send=function(l,g){var w,N,k,E,I,D,P,M,H,Y=this;return G(function(Z){switch(Z.g){case 1:return Y.g.inputs?(w=1e3*(g??performance.now()),C(Z,Y.D,2)):Z.return();case 2:return C(Z,Y.initialize(),3);case 3:for(N=new Y.h.PacketDataList,k=i(Object.keys(l)),E=k.next();!E.done;E=k.next())if(I=E.value,D=Y.g.inputs[I]){e:{var ee=l[I];switch(D.type){case"video":var ce=Y.o[D.stream];if(ce||(ce=new $(Y.h,Y.G),Y.o[D.stream]=ce),ce.l===0&&(ce.l=ce.h.createTexture()),typeof HTMLVideoElement<"u"&&ee instanceof HTMLVideoElement)var he=ee.videoWidth,Ee=ee.videoHeight;else typeof HTMLImageElement<"u"&&ee instanceof HTMLImageElement?(he=ee.naturalWidth,Ee=ee.naturalHeight):(he=ee.width,Ee=ee.height);Ee={glName:ce.l,width:he,height:Ee},(he=ce.g).canvas.width=Ee.width,he.canvas.height=Ee.height,he.activeTexture(he.TEXTURE0),ce.h.bindTexture2d(ce.l),he.texImage2D(he.TEXTURE_2D,0,he.RGBA,he.RGBA,he.UNSIGNED_BYTE,ee),ce.h.bindTexture2d(0),ce=Ee;break e;case"detections":for((ce=Y.o[D.stream])||(ce=new j(Y.h),Y.o[D.stream]=ce),ce.data||(ce.data=new ce.g.DetectionListData),ce.data.reset(ee.length),Ee=0;Ee<ee.length;++Ee){he=ee[Ee];var _e=ce.data,Qe=_e.setBoundingBox,vt=Ee,at=he.boundingBox,Te=new Ir;if(Re(Te,1,at.xCenter),Re(Te,2,at.yCenter),Re(Te,3,at.height),Re(Te,4,at.width),Re(Te,5,at.rotation),Re(Te,6,at.rectId),at=Fn(Te,Or),Qe.call(_e,vt,at),he.landmarks)for(_e=0;_e<he.landmarks.length;++_e){var Xe=!!(Te=he.landmarks[_e]).visibility;vt=(Qe=ce.data).addNormalizedLandmark,at=Ee,Te=Object.assign(Object.assign({},Te),{visibility:Xe?Te.visibility:0}),Re(Xe=new hn,1,Te.x),Re(Xe,2,Te.y),Re(Xe,3,Te.z),Te.visibility&&Re(Xe,4,Te.visibility),Te=Fn(Xe,ys),vt.call(Qe,at,Te)}if(he.V)for(_e=0;_e<he.V.length;++_e)vt=(Qe=ce.data).addClassification,at=Ee,Te=he.V[_e],Re(Xe=new Gt,2,Te.ga),Te.index&&Re(Xe,1,Te.index),Te.label&&Re(Xe,3,Te.label),Te.displayName&&Re(Xe,4,Te.displayName),Te=Fn(Xe,gs),vt.call(Qe,at,Te)}ce=ce.data;break e;default:ce={}}}switch(P=ce,M=D.stream,D.type){case"video":N.pushTexture2d(Object.assign(Object.assign({},P),{stream:M,timestamp:w}));break;case"detections":(H=P).stream=M,H.timestamp=w,N.pushDetectionList(H);break;default:throw Error("Unknown input config type: '"+D.type+"'")}}return Y.i.send(N),C(Z,Y.D,4);case 4:N.delete(),Z.g=0}})},n.onResults=function(l,g){this.listeners[g||"$"]=l},q("Solution",ne),q("OptionType",{BOOL:0,NUMBER:1,ia:2,0:"BOOL",1:"NUMBER",2:"STRING"}),(n=se.prototype).close=function(){return this.g.close(),Promise.resolve()},n.onResults=function(l){this.g.onResults(l)},n.initialize=function(){var l=this;return G(function(g){return C(g,l.g.initialize(),0)})},n.reset=function(){this.g.reset()},n.send=function(l){var g=this;return G(function(w){return C(w,g.g.send(l),0)})},n.setOptions=function(l){this.g.setOptions(l)},q("FaceDetection",se),q("FACEDETECTION_LIPS",Dr),q("FACEDETECTION_LEFT_EYE",Fr),q("FACEDETECTION_LEFT_EYEBROW",Cr),q("FACEDETECTION_RIGHT_EYE",Rr),q("FACEDETECTION_RIGHT_EYEBROW",Lr),q("FACEDETECTION_FACE_OVAL",ws),q("FACEDETECTION_CONTOURS",vs),q("FACEDETECTION_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]]),q("VERSION","0.4.1646425229")}).call(ma);var vn=function(){return vn=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var s in e=arguments[t])Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s]);return n},vn.apply(this,arguments)};function rn(n,e,t,r){return new(t||(t=Promise))(function(s,a){function i(c){try{u(r.next(c))}catch(f){a(f)}}function o(c){try{u(r.throw(c))}catch(f){a(f)}}function u(c){var f;c.done?s(c.value):(f=c.value,f instanceof t?f:new t(function(p){p(f)})).then(i,o)}u((r=r.apply(n,[])).next())})}function sn(n,e){var t,r,s,a,i={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function o(u){return function(c){return function(f){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(s=2&f[0]?r.return:f[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,f[1])).done)return s;switch(r=0,s&&(f=[2&f[0],s.value]),f[0]){case 0:case 1:s=f;break;case 4:return i.label++,{value:f[1],done:!1};case 5:i.label++,r=f[1],f=[0];continue;case 7:f=i.ops.pop(),i.trys.pop();continue;default:if(!((s=(s=i.trys).length>0&&s[s.length-1])||f[0]!==6&&f[0]!==2)){i=0;continue}if(f[0]===3&&(!s||f[1]>s[0]&&f[1]<s[3])){i.label=f[1];break}if(f[0]===6&&i.label<s[1]){i.label=s[1],s=f;break}if(s&&i.label<s[2]){i.label=s[2],i.ops.push(f);break}s[2]&&i.ops.pop(),i.trys.pop();continue}f=e.call(n,i)}catch(p){f=[6,p],r=0}finally{t=s=0}if(5&f[0])throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}([u,c])}}}var Xu=["rightEye","leftEye","noseTip","mouthCenter","rightEarTragion","leftEarTragion"],ga={modelType:"short",runtime:"mediapipe",maxFaces:1},A6=function(){function n(e){var t=this;this.width=0,this.height=0,this.selfieMode=!1,this.faceDetectorSolution=new $6.FaceDetection({locateFile:function(r,s){if(e.solutionPath){var a=e.solutionPath.replace(/\/+$/,"");return"".concat(a,"/").concat(r)}return"".concat(s,"/").concat(r)}}),this.faceDetectorSolution.setOptions({selfieMode:this.selfieMode,model:e.modelType}),this.faceDetectorSolution.onResults(function(r){if(t.height=r.image.height,t.width=r.image.width,t.faces=[],r.detections!==null)for(var s=0,a=r.detections;s<a.length;s++){var i=a[s];t.faces.push(t.normalizedToAbsolute(i.landmarks,{xMin:u=(o=i.boundingBox).xCenter-o.width/2,xMax:u+o.width,yMin:c=o.yCenter-o.height/2,yMax:c+o.height,width:o.width,height:o.height}))}var o,u,c})}return n.prototype.normalizedToAbsolute=function(e,t){var r=this;return{keypoints:e.map(function(s,a){return{x:s.x*r.width,y:s.y*r.height,name:Xu[a]}}),box:{xMin:t.xMin*this.width,yMin:t.yMin*this.height,xMax:t.xMax*this.width,yMax:t.yMax*this.height,width:t.width*this.width,height:t.height*this.height}}},n.prototype.estimateFaces=function(e,t){return rn(this,void 0,void 0,function(){var r,s;return sn(this,function(a){switch(a.label){case 0:return t&&t.flipHorizontal&&t.flipHorizontal!==this.selfieMode&&(this.selfieMode=t.flipHorizontal,this.faceDetectorSolution.setOptions({selfieMode:this.selfieMode})),e instanceof De?(s=ImageData.bind,[4,zu(e)]):[3,2];case 1:return r=new(s.apply(ImageData,[void 0,a.sent(),e.shape[1],e.shape[0]])),[3,3];case 2:r=e,a.label=3;case 3:return e=r,[4,this.faceDetectorSolution.send({image:e})];case 4:return a.sent(),[2,this.faces]}})})},n.prototype.dispose=function(){this.faceDetectorSolution.close()},n.prototype.reset=function(){this.faceDetectorSolution.reset(),this.width=0,this.height=0,this.faces=null,this.selfieMode=!1},n.prototype.initialize=function(){return this.faceDetectorSolution.initialize()},n}();function I6(n){return rn(this,void 0,void 0,function(){var e,t;return sn(this,function(r){switch(r.label){case 0:return e=function(s){if(s==null)return vn({},ga);var a=vn({},s);return a.runtime="mediapipe",a.modelType==null&&(a.modelType=ga.modelType),a.maxFaces==null&&(a.maxFaces=ga.maxFaces),a}(n),[4,(t=new A6(e)).initialize()];case 1:return r.sent(),[2,t]}})})}function Yu(n){return n instanceof De?{height:n.shape[0],width:n.shape[1]}:{height:n.height,width:n.width}}function Ju(n){return n instanceof De?n:Vu(n)}function ya(n,e){x(n.width!==0,function(){return"".concat(e," width cannot be 0.")}),x(n.height!==0,function(){return"".concat(e," height cannot be 0.")})}function O6(n,e,t){var r=e.outputTensorSize,s=e.keepAspectRatio,a=e.borderMode,i=e.outputTensorFloatRange,o=Yu(n),u=function(b,v){return{xCenter:.5*b.width,yCenter:.5*b.height,width:b.width,height:b.height,rotation:0}}(o),c=function(b,v,S){if(S===void 0&&(S=!1),!S)return{top:0,left:0,right:0,bottom:0};var A=v.height,_=v.width;ya(v,"targetSize"),ya(b,"roi");var C,K,U=A/_,B=b.height/b.width,W=0,G=0;return U>B?(C=b.width,K=b.width*U,G=(1-B/U)/2):(C=b.height/U,K=b.height,W=(1-U/B)/2),b.width=C,b.height=K,{top:G,left:W,right:W,bottom:G}}(u,r,s),f=function(b,v,S,A){var _=b.width,C=b.height,K=1,U=Math.cos(b.rotation),B=Math.sin(b.rotation),W=b.xCenter,G=b.yCenter,Q=1/v,re=1/S,q=new Array(16);return q[0]=_*U*K*Q,q[1]=-C*B*Q,q[2]=0,q[3]=(-.5*_*U*K+.5*C*B+W)*Q,q[4]=_*B*K*re,q[5]=C*U*re,q[6]=0,q[7]=(-.5*C*U-.5*_*B*K+G)*re,q[8]=0,q[9]=0,q[10]=_*Q,q[11]=0,q[12]=0,q[13]=0,q[14]=0,q[15]=1,function(te){if(te.length!==16)throw new Error("Array length must be 16 but got ".concat(te.length));return[[te[0],te[1],te[2],te[3]],[te[4],te[5],te[6],te[7]],[te[8],te[9],te[10],te[11]],[te[12],te[13],te[14],te[15]]]}(q)}(u,o.width,o.height),p=me(function(){var b=Ju(n),v=yn(function(_,C,K){return ya(K,"inputResolution"),[1/K.width*_[0][0]*C.width,1/K.height*_[0][1]*C.width,_[0][3]*C.width,1/K.width*_[1][0]*C.height,1/K.height*_[1][1]*C.height,_[1][3]*C.height,0,0]}(f,o,r),[1,8]),S=a==="zero"?"constant":"nearest",A=yr.transform(Tt(Ae(b,"float32")),v,"bilinear",S,0,[r.height,r.width]);return i!=null?function(_,C){var K=function(U,B,W,G){var Q=(G-W)/255;return{scale:Q,offset:W-0*Q}}(0,0,C[0],C[1]);return me(function(){return ae(J(_,K.scale),K.offset)})}(A,i):A});return{imageTensor:p,padding:c,transformationMatrix:f}}function ao(n){n.reduceBoxesInLowestLayer==null&&(n.reduceBoxesInLowestLayer=!1),n.interpolatedScaleAspectRatio==null&&(n.interpolatedScaleAspectRatio=1),n.fixedAnchorSize==null&&(n.fixedAnchorSize=!1);for(var e=[],t=0;t<n.numLayers;){for(var r=[],s=[],a=[],i=[],o=t;o<n.strides.length&&n.strides[o]===n.strides[t];){var u=io(n.minScale,n.maxScale,o,n.strides.length);if(o===0&&n.reduceBoxesInLowestLayer)a.push(1),a.push(2),a.push(.5),i.push(.1),i.push(u),i.push(u);else{for(var c=0;c<n.aspectRatios.length;++c)a.push(n.aspectRatios[c]),i.push(u);if(n.interpolatedScaleAspectRatio>0){var f=o===n.strides.length-1?1:io(n.minScale,n.maxScale,o+1,n.strides.length);i.push(Math.sqrt(u*f)),a.push(n.interpolatedScaleAspectRatio)}}o++}for(var p=0;p<a.length;++p){var b=Math.sqrt(a[p]);r.push(i[p]/b),s.push(i[p]*b)}var v=0,S=0;if(n.featureMapHeight.length>0)v=n.featureMapHeight[t],S=n.featureMapWidth[t];else{var A=n.strides[t];v=Math.ceil(n.inputSizeHeight/A),S=Math.ceil(n.inputSizeWidth/A)}for(var _=0;_<v;++_)for(var C=0;C<S;++C)for(var K=0;K<r.length;++K){var U={xCenter:(C+n.anchorOffsetX)/S,yCenter:(_+n.anchorOffsetY)/v,width:0,height:0};n.fixedAnchorSize?(U.width=1,U.height=1):(U.width=s[K],U.height=r[K]),e.push(U)}t=o}return e}function io(n,e,t,r){return r===1?.5*(n+e):n+(e-n)*t/(r-1)}function oo(n,e){var t=e[0],r=e[1];return[t*n[0]+r*n[1]+n[3],t*n[4]+r*n[5]+n[7]]}function D6(n,e,t,r){return rn(this,void 0,void 0,function(){var s,a,i,o,u;return sn(this,function(c){switch(c.label){case 0:return n.sort(function(f,p){return Math.max.apply(Math,p.score)-Math.max.apply(Math,f.score)}),s=yn(n.map(function(f){return[f.locationData.relativeBoundingBox.yMin,f.locationData.relativeBoundingBox.xMin,f.locationData.relativeBoundingBox.yMax,f.locationData.relativeBoundingBox.xMax]})),a=Ye(n.map(function(f){return f.score[0]})),[4,yr.nonMaxSuppressionAsync(s,a,e,t)];case 1:return[4,(i=c.sent()).array()];case 2:return o=c.sent(),u=n.filter(function(f,p){return o.indexOf(p)>-1}),Oe([s,a,i]),[2,u]}})})}function F6(n,e,t){return rn(this,void 0,void 0,function(){var r,s,a,i,o;return sn(this,function(u){switch(u.label){case 0:return r=n[0],s=n[1],a=function(c,f,p){return me(function(){var b,v,S,A;p.reverseOutputOrder?(v=Me(fe(c,[0,p.boxCoordOffset+0],[-1,1])),b=Me(fe(c,[0,p.boxCoordOffset+1],[-1,1])),A=Me(fe(c,[0,p.boxCoordOffset+2],[-1,1])),S=Me(fe(c,[0,p.boxCoordOffset+3],[-1,1]))):(b=Me(fe(c,[0,p.boxCoordOffset+0],[-1,1])),v=Me(fe(c,[0,p.boxCoordOffset+1],[-1,1])),S=Me(fe(c,[0,p.boxCoordOffset+2],[-1,1])),A=Me(fe(c,[0,p.boxCoordOffset+3],[-1,1]))),v=ae(J(ye(v,p.xScale),f.w),f.x),b=ae(J(ye(b,p.yScale),f.h),f.y),p.applyExponentialOnBoxSize?(S=J(en(ye(S,p.hScale)),f.h),A=J(en(ye(A,p.wScale)),f.w)):(S=J(ye(S,p.hScale),f.h),A=J(ye(A,p.wScale),f.h));var _=pe(b,ye(S,2)),C=pe(v,ye(A,2)),K=ae(b,ye(S,2)),U=ae(v,ye(A,2)),B=Ge([V(_,[p.numBoxes,1]),V(C,[p.numBoxes,1]),V(K,[p.numBoxes,1]),V(U,[p.numBoxes,1])],1);if(p.numKeypoints)for(var W=0;W<p.numKeypoints;++W){var G=p.keypointCoordOffset+W*p.numValuesPerKeypoint,Q=void 0,re=void 0;p.reverseOutputOrder?(Q=Me(fe(c,[0,G],[-1,1])),re=Me(fe(c,[0,G+1],[-1,1]))):(re=Me(fe(c,[0,G],[-1,1])),Q=Me(fe(c,[0,G+1],[-1,1])));var q=ae(J(ye(Q,p.xScale),f.w),f.x),te=ae(J(ye(re,p.yScale),f.h),f.y);B=Ge([B,V(q,[p.numBoxes,1]),V(te,[p.numBoxes,1])],1)}return B})}(s,e,t),i=me(function(){var c=r;return t.sigmoidScore?(t.scoreClippingThresh!=null&&(c=tu(r,-t.scoreClippingThresh,t.scoreClippingThresh)),c=zn(c)):c}),[4,C6(a,i,t)];case 1:return o=u.sent(),Oe([a,i]),[2,o]}})})}function C6(n,e,t){return rn(this,void 0,void 0,function(){var r,s,a,i,o,u,c,f,p,b,v,S;return sn(this,function(A){switch(A.label){case 0:return r=[],[4,n.data()];case 1:return s=A.sent(),[4,e.data()];case 2:for(a=A.sent(),i=0;i<t.numBoxes;++i)if(!(t.minScoreThresh!=null&&a[i]<t.minScoreThresh||(o=i*t.numCoords,u=R6(s[o+0],s[o+1],s[o+2],s[o+3],a[i],t.flipVertically,i),(c=u.locationData.relativeBoundingBox).width<0||c.height<0))){if(t.numKeypoints>0)for((f=u.locationData).relativeKeypoints=[],p=t.numKeypoints*t.numValuesPerKeypoint,b=0;b<p;b+=t.numValuesPerKeypoint)v=o+t.keypointCoordOffset+b,S={x:s[v+0],y:t.flipVertically?1-s[v+1]:s[v+1]},f.relativeKeypoints.push(S);r.push(u)}return[2,r]}})})}function R6(n,e,t,r,s,a,i){return{score:[s],ind:i,locationData:{relativeBoundingBox:{xMin:e,yMin:a?1-t:n,xMax:r,yMax:a?1-n:t,width:r-e,height:t-n}}}}var Ms,L6={reduceBoxesInLowestLayer:!1,interpolatedScaleAspectRatio:1,featureMapHeight:[],featureMapWidth:[],numLayers:4,minScale:.1484375,maxScale:.75,inputSizeHeight:128,inputSizeWidth:128,anchorOffsetX:.5,anchorOffsetY:.5,strides:[8,16,16,16],aspectRatios:[1],fixedAnchorSize:!0},P6={reduceBoxesInLowestLayer:!1,interpolatedScaleAspectRatio:0,featureMapHeight:[],featureMapWidth:[],numLayers:1,minScale:.1484375,maxScale:.75,inputSizeHeight:192,inputSizeWidth:192,anchorOffsetX:.5,anchorOffsetY:.5,strides:[4],aspectRatios:[1],fixedAnchorSize:!0},ba={runtime:"tfjs",modelType:"short",maxFaces:1,detectorModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/face_detection/short/1"},B6={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:896,numCoords:16,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:6,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:128,yScale:128,hScale:128,wScale:128,minScoreThresh:.5},j6={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:2304,numCoords:16,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:6,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:192,yScale:192,hScale:192,wScale:192,minScoreThresh:.6},M6={outputTensorSize:{width:128,height:128},keepAspectRatio:!0,outputTensorFloatRange:[-1,1],borderMode:"zero"},z6={outputTensorSize:{width:192,height:192},keepAspectRatio:!0,outputTensorFloatRange:[-1,1],borderMode:"zero"},V6=function(){function n(e,t,r){this.detectorModel=t,this.maxFaces=r,e==="full"?(this.imageToTensorConfig=z6,this.tensorsToDetectionConfig=j6,this.anchors=ao(P6)):(this.imageToTensorConfig=M6,this.tensorsToDetectionConfig=B6,this.anchors=ao(L6));var s=Ye(this.anchors.map(function(u){return u.width})),a=Ye(this.anchors.map(function(u){return u.height})),i=Ye(this.anchors.map(function(u){return u.xCenter})),o=Ye(this.anchors.map(function(u){return u.yCenter}));this.anchorTensor={x:i,y:o,w:s,h:a}}return n.prototype.dispose=function(){this.detectorModel.dispose(),Oe([this.anchorTensor.x,this.anchorTensor.y,this.anchorTensor.w,this.anchorTensor.h])},n.prototype.reset=function(){},n.prototype.detectFaces=function(e,t){return t===void 0&&(t=!1),rn(this,void 0,void 0,function(){var r,s,a,i,o,u,c,f,p,b,v;return sn(this,function(S){switch(S.label){case 0:return e==null?(this.reset(),[2,[]]):(r=me(function(){var A=Ae(Ju(e),"float32");return t&&(A=Me(yr.flipLeftRight(Tt(A,0)),[0])),A}),s=O6(r,this.imageToTensorConfig),a=s.imageTensor,i=s.transformationMatrix,o=this.detectorModel.execute(a,"Identity:0"),u=function(A){return me(function(){var _=function(U){return me(function(){return[fe(U,[0,0,0],[1,-1,1]),fe(U,[0,0,1],[1,-1,-1])]})}(A),C=_[0],K=_[1];return{boxes:Me(K),logits:Me(C)}})}(o),c=u.boxes,[4,F6([f=u.logits,c],this.anchorTensor,this.tensorsToDetectionConfig)]);case 1:return(p=S.sent()).length===0?(Oe([r,a,o,f,c]),[2,p]):[4,D6(p,this.maxFaces,.3)];case 2:return b=S.sent(),v=function(A,_){A===void 0&&(A=[]);var C,K=(C=_,[].concat.apply([],C));return A.forEach(function(U){var B=U.locationData;B.relativeKeypoints.forEach(function(te){var ue=oo(K,[te.x,te.y]),Ne=ue[0],ie=ue[1];te.x=Ne,te.y=ie});var W=B.relativeBoundingBox,G=Number.MAX_VALUE,Q=Number.MAX_VALUE,re=Number.MIN_VALUE,q=Number.MIN_VALUE;[[W.xMin,W.yMin],[W.xMin+W.width,W.yMin],[W.xMin+W.width,W.yMin+W.height],[W.xMin,W.yMin+W.height]].forEach(function(te){var ue=oo(K,te),Ne=ue[0],ie=ue[1];G=Math.min(G,Ne),re=Math.max(re,Ne),Q=Math.min(Q,ie),q=Math.max(q,ie)}),B.relativeBoundingBox={xMin:G,xMax:re,yMin:Q,yMax:q,width:re-G,height:q-Q}}),A}(b,i),Oe([r,a,o,f,c]),[2,v]}})})},n.prototype.estimateFaces=function(e,t){return rn(this,void 0,void 0,function(){var r,s;return sn(this,function(a){return r=Yu(e),s=!!t&&t.flipHorizontal,[2,this.detectFaces(e,s).then(function(i){return i.map(function(o){for(var u=o.locationData.relativeKeypoints.map(function(S,A){return vn(vn({},S),{x:S.x*r.width,y:S.y*r.height,name:Xu[A]})}),c=o.locationData.relativeBoundingBox,f=0,p=["width","xMax","xMin"];f<p.length;f++)c[p[f]]*=r.width;for(var b=0,v=["height","yMax","yMin"];b<v.length;b++)c[v[b]]*=r.height;return{keypoints:u,box:c}})})]})})},n}();function U6(n){return rn(this,void 0,void 0,function(){var e,t,r;return sn(this,function(s){switch(s.label){case 0:return e=function(a){if(a==null)return vn({},ba);var i=vn({},a);return i.modelType==null&&(i.modelType=ba.modelType),i.maxFaces==null&&(i.maxFaces=ba.maxFaces),i.detectorModelUrl==null&&(i.modelType==="full"?i.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/face_detection/full/1":i.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/face_detection/short/1"),i}(n),t=typeof e.detectorModelUrl=="string"&&e.detectorModelUrl.indexOf("https://tfhub.dev")>-1,[4,Ku(e.detectorModelUrl,{fromTFHub:t})];case 1:return r=s.sent(),[2,new V6(e.modelType,r,e.maxFaces)]}})})}function W6(n,e){return rn(this,void 0,void 0,function(){var t,r;return sn(this,function(s){if(n===Ms.MediaPipeFaceDetector){if(r=void 0,(t=e)!=null){if(t.runtime==="tfjs")return[2,U6(t)];if(t.runtime==="mediapipe")return[2,I6(t)];r=t.runtime}throw new Error("Expect modelConfig.runtime to be either 'tfjs' "+"or 'mediapipe', but got ".concat(r))}throw new Error("".concat(n," is not a supported model name."))})})}function wa(n){return n.width*n.height}function uo(n){var e=n.xCenter-n.width/2,t=e+n.width,r=n.yCenter-n.height/2;return{xMin:e,xMax:t,yMin:r,yMax:r+n.height,width:n.width,height:n.height}}function G6(n,e){var t=uo(n),r=uo(e);if(!function(i,o){return!(i.xMax<o.xMin||o.xMax<i.xMin||i.yMax<o.yMin||o.yMax<i.yMin)}(t,r))return 0;var s=wa(function(i,o){var u=Math.max(i.xMin,o.xMin),c=Math.min(i.xMax,o.xMax),f=Math.max(i.yMin,o.yMin),p=Math.min(i.yMax,o.yMax);return{xMin:u,xMax:c,yMin:f,yMax:p,width:Math.max(c-u,0),height:Math.max(p-f,0)}}(t,r)),a=wa(t)+wa(r)-s;return a>0?s/a:0}function K6(n,e,t,r){var s=n.width,a=n.height,i=1,o=Math.cos(n.rotation),u=Math.sin(n.rotation),c=n.xCenter,f=n.yCenter,p=1/e,b=1/t,v=new Array(16);return v[0]=s*o*i*p,v[1]=-a*u*p,v[2]=0,v[3]=(-.5*s*o*i+.5*a*u+c)*p,v[4]=s*u*i*b,v[5]=a*o*b,v[6]=0,v[7]=(-.5*a*o-.5*s*u*i+f)*b,v[8]=0,v[9]=0,v[10]=s*p,v[11]=0,v[12]=0,v[13]=0,v[14]=0,v[15]=1,function(S){if(S.length!==16)throw new Error("Array length must be 16 but got "+S.length);return[[S[0],S[1],S[2],S[3]],[S[4],S[5],S[6],S[7]],[S[8],S[9],S[10],S[11]],[S[12],S[13],S[14],S[15]]]}(v)}function Zu(n){return n instanceof De?{height:n.shape[0],width:n.shape[1]}:{height:n.height,width:n.width}}function Qu(n){return n-2*Math.PI*Math.floor((n+Math.PI)/(2*Math.PI))}function ec(n){return n instanceof De?n:Vu(n)}function va(n,e){x(n.width!==0,function(){return e+" width cannot be 0."}),x(n.height!==0,function(){return e+" height cannot be 0."})}function H6(n,e){var t=function(r,s,a,i){var o=s-r,u=i-a,c=u/o;return{scale:c,offset:a-r*c}}(0,255,e[0],e[1]);return me(function(){return ae(J(n,t.scale),t.offset)})}function q6(n,e,t){var r=e.outputTensorSize,s=e.keepAspectRatio,a=e.outputTensorFloatRange,i=Zu(n),o=function(p,b){return b?{xCenter:b.xCenter*p.width,yCenter:b.yCenter*p.height,width:b.width*p.width,height:b.height*p.height,rotation:b.rotation}:{xCenter:.5*p.width,yCenter:.5*p.height,width:p.width,height:p.height,rotation:0}}(i,t),u=function(p,b,v){if(v===void 0&&(v=!1),!v)return{top:0,left:0,right:0,bottom:0};var S=b.height,A=b.width;va(b,"targetSize"),va(p,"roi");var _,C,K=S/A,U=p.height/p.width,B=0,W=0;return K>U?(_=p.width,C=p.width*K,W=(1-U/K)/2):(_=p.height/K,C=p.height,B=(1-K/U)/2),p.width=_,p.height=C,{top:W,left:B,right:B,bottom:W}}(o,r,s),c=K6(o,i.width,i.height),f=me(function(){var p=ec(n),b=yn(function(A,_,C){return va(C,"inputResolution"),[1/C.width*A[0][0]*_.width,1/C.height*A[0][1]*_.width,A[0][3]*_.width,1/C.width*A[1][0]*_.height,1/C.height*A[1][1]*_.height,A[1][3]*_.height,0,0]}(c,i,r),[1,8]),v="nearest",S=yr.transform(Tt(Ae(p,"float32")),b,"bilinear",v,0,[r.height,r.width]);return a!=null?H6(S,a):S});return{imageTensor:f,padding:u,transformationMatrix:c}}function co(n){return{xCenter:n.xMin+n.width/2,yCenter:n.yMin+n.height/2,width:n.width,height:n.height}}function X6(n){var e=n.relativeKeypoints;if(e.length<=1)throw new Error("2 or more keypoints required to calculate a rect.");var t=Number.MAX_VALUE,r=Number.MAX_VALUE,s=Number.MIN_VALUE,a=Number.MIN_VALUE;return e.forEach(function(i){t=Math.min(t,i.x),s=Math.max(s,i.x),r=Math.min(r,i.y),a=Math.max(a,i.y)}),{xCenter:(t+s)/2,yCenter:(r+a)/2,width:s-t,height:a-r}}function lo(n,e,t,r,s){var a=t==="rect"?function(i,o,u){var c,f=i.locationData;return c=co(f.boundingBox),c}(n):function(i,o){var u=i.locationData;return o==="boundingbox"?co(u.relativeBoundingBox):X6(u)}(n,e);return s&&(a.rotation=function(i,o,u){var c,f=i.locationData,p=u.rotationVectorStartKeypointIndex,b=u.rotationVectorEndKeypointIndex;c=u.rotationVectorTargetAngle?u.rotationVectorTargetAngle:Math.PI*u.rotationVectorTargetAngleDegree/180;var v=f.relativeKeypoints[p].x*o.width,S=f.relativeKeypoints[p].y*o.height,A=f.relativeKeypoints[b].x*o.width,_=f.relativeKeypoints[b].y*o.height;return Qu(c-Math.atan2(-(_-S),A-v))}(n,r,s)),a}function Y6(n,e,t){for(var r=0;r<e.length;++r){var s=e[r],a=t[n[r]];a.x=s.x,a.y=s.y}}function J6(n,e,t,r){if(typeof e=="string"){if(e==="copy")for(var s=0;s<t.length;++s)r[n[s]].z=t[s].z}else{var a=function(i,o){for(var u=0,c=0;c<o.length;++c)u+=i[o[c]].z;return u/o.length}(r,e);for(s=0;s<n.length;++s)r[n[s]].z=a}}function Z6(n,e){for(var t=function(o){var u=[].concat.apply([],o.map(function(v){return v.indexesMapping}));if(u.length===0)throw new Error("There should be at least one landmark in indexes mapping");var c=u[0],f=u[0],p=new Set(u);p.forEach(function(v){c=Math.min(c,v),f=Math.max(f,v)});var b=p.size;if(c!==0)throw new Error("Indexes are expected to start with 0 instead of "+c);if(f+1!==b)throw new Error("Indexes should have no gaps but "+(f-b+1)+" indexes are missing");return b}(e),r=new Array(t).fill(null).map(Object),s=0;s<n.length;++s){var a=n[s],i=e[s];if(a.length!==i.indexesMapping.length)throw new Error("There are "+a.length+" refinement landmarks while mapping has "+i.indexesMapping.length);Y6(i.indexesMapping,a,r),J6(i.indexesMapping,i.zRefinement,a,r)}return r}function Q6(n,e){return n.map(function(t){var r=It(It({},t),{x:t.x*e.width,y:t.y*e.height});return t.z!=null&&(r.z=t.z*e.width),r})}function e5(n,e){return n==="none"?e:function(t){return 1/(1+Math.exp(-t))}(e)}function Ln(n,e,t,r){return Xt(this,void 0,void 0,function(){var s,a,i,o,u,c,f,p;return Yt(this,function(b){switch(b.label){case 0:return t=t||e.flipHorizontally||!1,r=r||e.flipVertically||!1,s=n.size,a=s/e.numLandmarks,[4,n.data()];case 1:for(i=b.sent(),o=[],u=0;u<e.numLandmarks;++u)c=u*a,(p={x:0,y:0}).x=t?e.inputImageWidth-i[c]:i[c],a>1&&(p.y=r?e.inputImageHeight-i[c+1]:i[c+1]),a>2&&(p.z=i[c+2]),a>3&&(p.score=e5(e.visibilityActivation,i[c+3])),o.push(p);for(f=0;f<o.length;++f)(p=o[f]).x=p.x/e.inputImageWidth,p.y=p.y/e.inputImageHeight,p.z=p.z/e.inputImageWidth/(e.normalizeZ||1);return[2,o]}})})}function ho(n,e,t){var r=n.width,s=n.height,a=n.rotation;if(t.rotation==null&&t.rotationDegree==null||(a=function(c,f){return f.rotation!=null?c+=f.rotation:f.rotationDegree!=null&&(c+=Math.PI*f.rotationDegree/180),Qu(c)}(a,t)),a===0)n.xCenter=n.xCenter+r*t.shiftX,n.yCenter=n.yCenter+s*t.shiftY;else{var i=(e.width*r*t.shiftX*Math.cos(a)-e.height*s*t.shiftY*Math.sin(a))/e.width,o=(e.width*r*t.shiftX*Math.sin(a)+e.height*s*t.shiftY*Math.cos(a))/e.height;n.xCenter=n.xCenter+i,n.yCenter=n.yCenter+o}{var u=Math.max(r*e.width,s*e.height);r=u/e.width,s=u/e.height}return n.width=r*t.scaleX,n.height=s*t.scaleY,n}(Ms||(Ms={})).MediaPipeFaceDetector="MediaPipeFaceDetector";var Na={runtime:"tfjs",maxFaces:1,refineLandmarks:!1,landmarkModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/face_mesh/1"},Ta={flipHorizontal:!1,staticImageMode:!1},fo={shiftX:0,shiftY:0,scaleX:1.5,scaleY:1.5},t5={outputTensorSize:{width:192,height:192},outputTensorFloatRange:[0,1]},po={numLandmarks:468,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},n5={numLandmarks:80,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},mo={numLandmarks:71,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},go={numLandmarks:5,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},r5={indexesMapping:Array.from(Array(468).keys()),zRefinement:"copy"},s5={indexesMapping:[61,146,91,181,84,17,314,405,321,375,291,185,40,39,37,0,267,269,270,409,78,95,88,178,87,14,317,402,318,324,308,191,80,81,82,13,312,311,310,415,76,77,90,180,85,16,315,404,320,307,306,184,74,73,72,11,302,303,304,408,62,96,89,179,86,15,316,403,319,325,292,183,42,41,38,12,268,271,272,407],zRefinement:"none"},a5={indexesMapping:[33,7,163,144,145,153,154,155,133,246,161,160,159,158,157,173,130,25,110,24,23,22,26,112,243,247,30,29,27,28,56,190,226,31,228,229,230,231,232,233,244,113,225,224,223,222,221,189,35,124,46,53,52,65,143,111,117,118,119,120,121,128,245,156,70,63,105,66,107,55,193],zRefinement:"none"},i5={indexesMapping:[263,249,390,373,374,380,381,382,362,466,388,387,386,385,384,398,359,255,339,254,253,252,256,341,463,467,260,259,257,258,286,414,446,261,448,449,450,451,452,453,464,342,445,444,443,442,441,413,265,353,276,283,282,295,372,340,346,347,348,349,350,357,465,383,300,293,334,296,336,285,417],zRefinement:"none"},o5={indexesMapping:[468,469,470,471,472],zRefinement:[33,7,163,144,145,153,154,155,133,246,161,160,159,158,157,173]},u5={indexesMapping:[473,474,475,476,477],zRefinement:[263,249,390,373,374,380,381,382,362,466,388,387,386,385,384,398]},Jr,c5=function(){function n(e,t,r,s){this.detector=e,this.landmarkModel=t,this.maxFaces=r,this.withAttention=s,this.prevFaceRectsFromLandmarks=null}return n.prototype.estimateFaces=function(e,t){return Xt(this,void 0,void 0,function(){var r,s,a,i,o,u,c,f,p,b,v,S,A,_=this;return Yt(this,function(C){switch(C.label){case 0:return r=function(B){if(B==null)return It({},Ta);var W=It({},B);return W.flipHorizontal==null&&(W.flipHorizontal=Ta.flipHorizontal),W.staticImageMode==null&&(W.staticImageMode=Ta.staticImageMode),W}(t),e==null?(this.reset(),[2,[]]):(s=Zu(e),a=me(function(){var B=Ae(ec(e),"float32");return r.flipHorizontal&&(B=Me(yr.flipLeftRight(Tt(B,0)),[0])),B}),i=this.prevFaceRectsFromLandmarks,r.staticImageMode||i==null||i.length<this.maxFaces?[4,this.detector.detectFaces(a,!1)]:[3,2]);case 1:return(u=C.sent()).length===0?(this.reset(),a.dispose(),[2,[]]):(o=u.map(function(B){return _.faceDetectionFrontDetectionToRoi(B,s)}),[3,3]);case 2:o=[],C.label=3;case 3:return K=.5,U=[],[o,i||[]].forEach(function(B){return B.forEach(function(W){(U=U.filter(function(G){return G6(W,G)<=K})).push(W)})}),c=U,[4,Promise.all(c.map(function(B){return _.faceLandmark(B,a)}))];case 4:for(f=C.sent(),p=[],this.prevFaceRectsFromLandmarks=[],b=0;b<f.length;++b)(v=f[b])!=null&&(this.prevFaceRectsFromLandmarks.push(this.faceLandmarksToRoi(v,s)),(S=Q6(v,s))!=null&&S.forEach(function(B,W){var G=qu.get(W);G!=null&&(B.name=G)}),A=Qa(S),p.push({keypoints:S,box:A.locationData.relativeBoundingBox}));return a.dispose(),[2,p]}var K,U})})},n.prototype.dispose=function(){this.detector.dispose(),this.landmarkModel.dispose()},n.prototype.reset=function(){this.detector.reset(),this.prevFaceRectsFromLandmarks=null},n.prototype.faceDetectionFrontDetectionToRoi=function(e,t){return ho(lo(e,"boundingbox","normRect",t,{rotationVectorStartKeypointIndex:0,rotationVectorEndKeypointIndex:1,rotationVectorTargetAngleDegree:0}),t,fo)},n.prototype.faceLandmark=function(e,t){return Xt(this,void 0,void 0,function(){var r,s,a,i,o,u,c;return Yt(this,function(f){switch(f.label){case 0:return r=q6(t,t5,e).imageTensor,s=["output_faceflag"].concat(this.withAttention?["output_mesh_identity","output_lips","Identity_6:0","Identity_1:0","Identity_2:0","Identity_5:0"]:["output_mesh"]),a=this.landmarkModel.execute(r,s),i=a[0],o=a.slice(1),[4,i.data()];case 1:return f.sent()[0]<.5?(Oe(a),Oe(r),[2,null]):this.withAttention?[4,this.tensorsToFaceLandmarksWithAttention(o)]:[3,3];case 2:return u=f.sent(),[3,5];case 3:return[4,this.tensorsToFaceLandmarks(o)];case 4:u=f.sent(),f.label=5;case 5:return c=function(p,b,v){v===void 0&&(v={ignoreRotation:!1});for(var S=[],A=0,_=p;A<_.length;A++){var C=_[A],K=C.x-.5,U=C.y-.5,B=v.ignoreRotation?0:b.rotation,W=Math.cos(B)*K-Math.sin(B)*U,G=Math.sin(B)*K+Math.cos(B)*U;W=W*b.width+b.xCenter,G=G*b.height+b.yCenter;var Q=C.z*b.width,re=It({},C);re.x=W,re.y=G,re.z=Q,S.push(re)}return S}(u,e),Oe(a),Oe(r),[2,c]}})})},n.prototype.tensorsToFaceLandmarks=function(e){return Xt(this,void 0,void 0,function(){return Yt(this,function(t){return[2,Ln(e[0],po)]})})},n.prototype.tensorsToFaceLandmarksWithAttention=function(e){return Xt(this,void 0,void 0,function(){var t,r,s,a,i,o;return Yt(this,function(u){switch(u.label){case 0:return[4,Ln(e[0],po)];case 1:return t=u.sent(),[4,Ln(e[1],n5)];case 2:return r=u.sent(),[4,Ln(e[3],mo)];case 3:return s=u.sent(),[4,Ln(e[5],mo)];case 4:return a=u.sent(),[4,Ln(e[4],go)];case 5:return i=u.sent(),[4,Ln(e[2],go)];case 6:return o=u.sent(),[2,Z6([t,r,s,a,i,o],[r5,s5,a5,i5,o5,u5])]}})})},n.prototype.faceLandmarksToRoi=function(e,t){return ho(lo(Qa(e),"boundingbox","normRect",t,{rotationVectorStartKeypointIndex:33,rotationVectorEndKeypointIndex:263,rotationVectorTargetAngleDegree:0}),t,fo)},n}();function l5(n){return Xt(this,void 0,void 0,function(){var e,t,r,s;return Yt(this,function(a){switch(a.label){case 0:return e=function(i){if(i==null)return It({},Na);var o=It({},i);return o.runtime="tfjs",o.maxFaces==null&&(o.maxFaces=Na.maxFaces),o.refineLandmarks==null&&(o.refineLandmarks=Na.refineLandmarks),o.landmarkModelUrl==null&&(o.landmarkModelUrl=o.refineLandmarks?"https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/attention_mesh/1":"https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/face_mesh/1"),o}(n),t=typeof e.landmarkModelUrl=="string"&&e.landmarkModelUrl.indexOf("https://tfhub.dev")>-1,[4,Ku(e.landmarkModelUrl,{fromTFHub:t})];case 1:return r=a.sent(),[4,W6(Ms.MediaPipeFaceDetector,{modelType:"short",maxFaces:e.maxFaces,detectorModelUrl:e.detectorModelUrl,runtime:e.runtime})];case 2:return s=a.sent(),[2,new c5(s,r,e.maxFaces,e.refineLandmarks)]}})})}function f5(n,e){return Xt(this,void 0,void 0,function(){var t,r;return Yt(this,function(s){if(n===Jr.MediaPipeFaceMesh){if(r=void 0,(t=e)!=null){if(t.runtime==="tfjs")return[2,l5(t)];if(t.runtime==="mediapipe")return[2,_6(t)];r=t.runtime}throw new Error("Expect modelConfig.runtime to be either 'tfjs' or 'mediapipe', but got "+r)}throw new Error(n+" is not a supported model name.")})})}(function(n){n.MediaPipeFaceMesh="MediaPipeFaceMesh"})(Jr||(Jr={}));var p5=Object.freeze({__proto__:null,getKeypointIndexByContour:function(n){if(n===Jr.MediaPipeFaceMesh)return Hu;throw new Error("Model "+n+" is not supported.")},getAdjacentPairs:function(n){if(n===Jr.MediaPipeFaceMesh)return E6;throw new Error("Model "+n+" is not supported.")}});export{Jr as SupportedModels,f5 as createDetector,p5 as util};
