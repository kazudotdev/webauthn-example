/* esm.sh - esbuild bundle(ipaddr.js@2.1.0) denonext production */
var z=Object.create;var g=Object.defineProperty;var S=Object.getOwnPropertyDescriptor;var F=Object.getOwnPropertyNames;var L=Object.getPrototypeOf,V=Object.prototype.hasOwnProperty;var j=(u,a)=>()=>(a||u((a={exports:{}}).exports,a),a.exports),B=(u,a)=>{for(var c in a)g(u,c,{get:a[c],enumerable:!0})},m=(u,a,c,w)=>{if(a&&typeof a=="object"||typeof a=="function")for(let h of F(a))!V.call(u,h)&&h!==c&&g(u,h,{get:()=>a[h],enumerable:!(w=S(a,h))||w.enumerable});return u},l=(u,a,c)=>(m(u,a,"default"),c&&m(c,a,"default")),C=(u,a,c)=>(c=u!=null?z(L(u)):{},m(a||!u||!u.__esModule?g(c,"default",{value:u,enumerable:!0}):c,u));var $=j((M,P)=>{(function(u){"use strict";let a="(0?\\d+|0x[a-f0-9]+)",c={fourOctet:new RegExp(`^${a}\\.${a}\\.${a}\\.${a}$`,"i"),threeOctet:new RegExp(`^${a}\\.${a}\\.${a}$`,"i"),twoOctet:new RegExp(`^${a}\\.${a}$`,"i"),longValue:new RegExp(`^${a}$`,"i")},w=new RegExp("^0[0-7]+$","i"),h=new RegExp("^0x[a-f0-9]+$","i"),I="%[0-9a-z]{1,}",x="(?:[0-9a-f]+::?)+",v={zoneIndex:new RegExp(I,"i"),native:new RegExp(`^(::)?(${x})?([0-9a-f]+)?(::)?(${I})?$`,"i"),deprecatedTransitional:new RegExp(`^(?:::)(${a}\\.${a}\\.${a}\\.${a}(${I})?)$`,"i"),transitional:new RegExp(`^((?:${x})|(?:::)(?:${x})?)${a}\\.${a}\\.${a}\\.${a}(${I})?$`,"i")};function b(t,e){if(t.indexOf("::")!==t.lastIndexOf("::"))return null;let n=0,r=-1,o=(t.match(v.zoneIndex)||[])[0],s,f;for(o&&(o=o.substring(1),t=t.replace(/%.+$/,""));(r=t.indexOf(":",r+1))>=0;)n++;if(t.substr(0,2)==="::"&&n--,t.substr(-2,2)==="::"&&n--,n>e)return null;for(f=e-n,s=":";f--;)s+="0:";return t=t.replace("::",s),t[0]===":"&&(t=t.slice(1)),t[t.length-1]===":"&&(t=t.slice(0,-1)),e=function(){let E=t.split(":"),k=[];for(let y=0;y<E.length;y++)k.push(parseInt(E[y],16));return k}(),{parts:e,zoneId:o}}function R(t,e,n,r){if(t.length!==e.length)throw new Error("ipaddr: cannot match CIDR for objects with different lengths");let o=0,s;for(;r>0;){if(s=n-r,s<0&&(s=0),t[o]>>s!==e[o]>>s)return!1;r-=n,o+=1}return!0}function d(t){if(h.test(t))return parseInt(t,16);if(t[0]==="0"&&!isNaN(parseInt(t[1],10))){if(w.test(t))return parseInt(t,8);throw new Error(`ipaddr: cannot parse ${t} as octal`)}return parseInt(t,10)}function O(t,e){for(;t.length<e;)t=`0${t}`;return t}let i={};i.IPv4=function(){function t(e){if(e.length!==4)throw new Error("ipaddr: ipv4 octet count should be 4");let n,r;for(n=0;n<e.length;n++)if(r=e[n],!(0<=r&&r<=255))throw new Error("ipaddr: ipv4 octet should fit in 8 bits");this.octets=e}return t.prototype.SpecialRanges={unspecified:[[new t([0,0,0,0]),8]],broadcast:[[new t([255,255,255,255]),32]],multicast:[[new t([224,0,0,0]),4]],linkLocal:[[new t([169,254,0,0]),16]],loopback:[[new t([127,0,0,0]),8]],carrierGradeNat:[[new t([100,64,0,0]),10]],private:[[new t([10,0,0,0]),8],[new t([172,16,0,0]),12],[new t([192,168,0,0]),16]],reserved:[[new t([192,0,0,0]),24],[new t([192,0,2,0]),24],[new t([192,88,99,0]),24],[new t([198,18,0,0]),15],[new t([198,51,100,0]),24],[new t([203,0,113,0]),24],[new t([240,0,0,0]),4]]},t.prototype.kind=function(){return"ipv4"},t.prototype.match=function(e,n){let r;if(n===void 0&&(r=e,e=r[0],n=r[1]),e.kind()!=="ipv4")throw new Error("ipaddr: cannot match ipv4 address with non-ipv4 one");return R(this.octets,e.octets,8,n)},t.prototype.prefixLengthFromSubnetMask=function(){let e=0,n=!1,r={0:8,128:7,192:6,224:5,240:4,248:3,252:2,254:1,255:0},o,s,f;for(o=3;o>=0;o-=1)if(s=this.octets[o],s in r){if(f=r[s],n&&f!==0)return null;f!==8&&(n=!0),e+=f}else return null;return 32-e},t.prototype.range=function(){return i.subnetMatch(this,this.SpecialRanges)},t.prototype.toByteArray=function(){return this.octets.slice(0)},t.prototype.toIPv4MappedAddress=function(){return i.IPv6.parse(`::ffff:${this.toString()}`)},t.prototype.toNormalizedString=function(){return this.toString()},t.prototype.toString=function(){return this.octets.join(".")},t}(),i.IPv4.broadcastAddressFromCIDR=function(t){try{let e=this.parseCIDR(t),n=e[0].toByteArray(),r=this.subnetMaskFromPrefixLength(e[1]).toByteArray(),o=[],s=0;for(;s<4;)o.push(parseInt(n[s],10)|parseInt(r[s],10)^255),s++;return new this(o)}catch{throw new Error("ipaddr: the address does not have IPv4 CIDR format")}},i.IPv4.isIPv4=function(t){return this.parser(t)!==null},i.IPv4.isValid=function(t){try{return new this(this.parser(t)),!0}catch{return!1}},i.IPv4.isValidFourPartDecimal=function(t){return!!(i.IPv4.isValid(t)&&t.match(/^(0|[1-9]\d*)(\.(0|[1-9]\d*)){3}$/))},i.IPv4.networkAddressFromCIDR=function(t){let e,n,r,o,s;try{for(e=this.parseCIDR(t),r=e[0].toByteArray(),s=this.subnetMaskFromPrefixLength(e[1]).toByteArray(),o=[],n=0;n<4;)o.push(parseInt(r[n],10)&parseInt(s[n],10)),n++;return new this(o)}catch{throw new Error("ipaddr: the address does not have IPv4 CIDR format")}},i.IPv4.parse=function(t){let e=this.parser(t);if(e===null)throw new Error("ipaddr: string is not formatted like an IPv4 Address");return new this(e)},i.IPv4.parseCIDR=function(t){let e;if(e=t.match(/^(.+)\/(\d+)$/)){let n=parseInt(e[2]);if(n>=0&&n<=32){let r=[this.parse(e[1]),n];return Object.defineProperty(r,"toString",{value:function(){return this.join("/")}}),r}}throw new Error("ipaddr: string is not formatted like an IPv4 CIDR range")},i.IPv4.parser=function(t){let e,n,r;if(e=t.match(c.fourOctet))return function(){let o=e.slice(1,6),s=[];for(let f=0;f<o.length;f++)n=o[f],s.push(d(n));return s}();if(e=t.match(c.longValue)){if(r=d(e[1]),r>4294967295||r<0)throw new Error("ipaddr: address outside defined range");return function(){let o=[],s;for(s=0;s<=24;s+=8)o.push(r>>s&255);return o}().reverse()}else return(e=t.match(c.twoOctet))?function(){let o=e.slice(1,4),s=[];if(r=d(o[1]),r>16777215||r<0)throw new Error("ipaddr: address outside defined range");return s.push(d(o[0])),s.push(r>>16&255),s.push(r>>8&255),s.push(r&255),s}():(e=t.match(c.threeOctet))?function(){let o=e.slice(1,5),s=[];if(r=d(o[2]),r>65535||r<0)throw new Error("ipaddr: address outside defined range");return s.push(d(o[0])),s.push(d(o[1])),s.push(r>>8&255),s.push(r&255),s}():null},i.IPv4.subnetMaskFromPrefixLength=function(t){if(t=parseInt(t),t<0||t>32)throw new Error("ipaddr: invalid IPv4 prefix length");let e=[0,0,0,0],n=0,r=Math.floor(t/8);for(;n<r;)e[n]=255,n++;return r<4&&(e[r]=Math.pow(2,t%8)-1<<8-t%8),new this(e)},i.IPv6=function(){function t(e,n){let r,o;if(e.length===16)for(this.parts=[],r=0;r<=14;r+=2)this.parts.push(e[r]<<8|e[r+1]);else if(e.length===8)this.parts=e;else throw new Error("ipaddr: ipv6 part count should be 8 or 16");for(r=0;r<this.parts.length;r++)if(o=this.parts[r],!(0<=o&&o<=65535))throw new Error("ipaddr: ipv6 part should fit in 16 bits");n&&(this.zoneId=n)}return t.prototype.SpecialRanges={unspecified:[new t([0,0,0,0,0,0,0,0]),128],linkLocal:[new t([65152,0,0,0,0,0,0,0]),10],multicast:[new t([65280,0,0,0,0,0,0,0]),8],loopback:[new t([0,0,0,0,0,0,0,1]),128],uniqueLocal:[new t([64512,0,0,0,0,0,0,0]),7],ipv4Mapped:[new t([0,0,0,0,0,65535,0,0]),96],rfc6145:[new t([0,0,0,0,65535,0,0,0]),96],rfc6052:[new t([100,65435,0,0,0,0,0,0]),96],"6to4":[new t([8194,0,0,0,0,0,0,0]),16],teredo:[new t([8193,0,0,0,0,0,0,0]),32],reserved:[[new t([8193,3512,0,0,0,0,0,0]),32]],benchmarking:[new t([8193,2,0,0,0,0,0,0]),48],amt:[new t([8193,3,0,0,0,0,0,0]),32],as112v6:[new t([8193,4,274,0,0,0,0,0]),48],deprecated:[new t([8193,16,0,0,0,0,0,0]),28],orchid2:[new t([8193,32,0,0,0,0,0,0]),28]},t.prototype.isIPv4MappedAddress=function(){return this.range()==="ipv4Mapped"},t.prototype.kind=function(){return"ipv6"},t.prototype.match=function(e,n){let r;if(n===void 0&&(r=e,e=r[0],n=r[1]),e.kind()!=="ipv6")throw new Error("ipaddr: cannot match ipv6 address with non-ipv6 one");return R(this.parts,e.parts,16,n)},t.prototype.prefixLengthFromSubnetMask=function(){let e=0,n=!1,r={0:16,32768:15,49152:14,57344:13,61440:12,63488:11,64512:10,65024:9,65280:8,65408:7,65472:6,65504:5,65520:4,65528:3,65532:2,65534:1,65535:0},o,s;for(let f=7;f>=0;f-=1)if(o=this.parts[f],o in r){if(s=r[o],n&&s!==0)return null;s!==16&&(n=!0),e+=s}else return null;return 128-e},t.prototype.range=function(){return i.subnetMatch(this,this.SpecialRanges)},t.prototype.toByteArray=function(){let e,n=[],r=this.parts;for(let o=0;o<r.length;o++)e=r[o],n.push(e>>8),n.push(e&255);return n},t.prototype.toFixedLengthString=function(){let e=function(){let r=[];for(let o=0;o<this.parts.length;o++)r.push(O(this.parts[o].toString(16),4));return r}.call(this).join(":"),n="";return this.zoneId&&(n=`%${this.zoneId}`),e+n},t.prototype.toIPv4Address=function(){if(!this.isIPv4MappedAddress())throw new Error("ipaddr: trying to convert a generic ipv6 address to ipv4");let e=this.parts.slice(-2),n=e[0],r=e[1];return new i.IPv4([n>>8,n&255,r>>8,r&255])},t.prototype.toNormalizedString=function(){let e=function(){let r=[];for(let o=0;o<this.parts.length;o++)r.push(this.parts[o].toString(16));return r}.call(this).join(":"),n="";return this.zoneId&&(n=`%${this.zoneId}`),e+n},t.prototype.toRFC5952String=function(){let e=/((^|:)(0(:|$)){2,})/g,n=this.toNormalizedString(),r=0,o=-1,s;for(;s=e.exec(n);)s[0].length>o&&(r=s.index,o=s[0].length);return o<0?n:`${n.substring(0,r)}::${n.substring(r+o)}`},t.prototype.toString=function(){return this.toRFC5952String()},t}(),i.IPv6.broadcastAddressFromCIDR=function(t){try{let e=this.parseCIDR(t),n=e[0].toByteArray(),r=this.subnetMaskFromPrefixLength(e[1]).toByteArray(),o=[],s=0;for(;s<16;)o.push(parseInt(n[s],10)|parseInt(r[s],10)^255),s++;return new this(o)}catch(e){throw new Error(`ipaddr: the address does not have IPv6 CIDR format (${e})`)}},i.IPv6.isIPv6=function(t){return this.parser(t)!==null},i.IPv6.isValid=function(t){if(typeof t=="string"&&t.indexOf(":")===-1)return!1;try{let e=this.parser(t);return new this(e.parts,e.zoneId),!0}catch{return!1}},i.IPv6.networkAddressFromCIDR=function(t){let e,n,r,o,s;try{for(e=this.parseCIDR(t),r=e[0].toByteArray(),s=this.subnetMaskFromPrefixLength(e[1]).toByteArray(),o=[],n=0;n<16;)o.push(parseInt(r[n],10)&parseInt(s[n],10)),n++;return new this(o)}catch(f){throw new Error(`ipaddr: the address does not have IPv6 CIDR format (${f})`)}},i.IPv6.parse=function(t){let e=this.parser(t);if(e.parts===null)throw new Error("ipaddr: string is not formatted like an IPv6 Address");return new this(e.parts,e.zoneId)},i.IPv6.parseCIDR=function(t){let e,n,r;if((n=t.match(/^(.+)\/(\d+)$/))&&(e=parseInt(n[2]),e>=0&&e<=128))return r=[this.parse(n[1]),e],Object.defineProperty(r,"toString",{value:function(){return this.join("/")}}),r;throw new Error("ipaddr: string is not formatted like an IPv6 CIDR range")},i.IPv6.parser=function(t){let e,n,r,o,s,f;if(r=t.match(v.deprecatedTransitional))return this.parser(`::ffff:${r[1]}`);if(v.native.test(t))return b(t,8);if((r=t.match(v.transitional))&&(f=r[6]||"",e=b(r[1].slice(0,-1)+f,6),e.parts)){for(s=[parseInt(r[2]),parseInt(r[3]),parseInt(r[4]),parseInt(r[5])],n=0;n<s.length;n++)if(o=s[n],!(0<=o&&o<=255))return null;return e.parts.push(s[0]<<8|s[1]),e.parts.push(s[2]<<8|s[3]),{parts:e.parts,zoneId:e.zoneId}}return null},i.IPv6.subnetMaskFromPrefixLength=function(t){if(t=parseInt(t),t<0||t>128)throw new Error("ipaddr: invalid IPv6 prefix length");let e=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],n=0,r=Math.floor(t/8);for(;n<r;)e[n]=255,n++;return r<16&&(e[r]=Math.pow(2,t%8)-1<<8-t%8),new this(e)},i.fromByteArray=function(t){let e=t.length;if(e===4)return new i.IPv4(t);if(e===16)return new i.IPv6(t);throw new Error("ipaddr: the binary input is neither an IPv6 nor IPv4 address")},i.isValid=function(t){return i.IPv6.isValid(t)||i.IPv4.isValid(t)},i.parse=function(t){if(i.IPv6.isValid(t))return i.IPv6.parse(t);if(i.IPv4.isValid(t))return i.IPv4.parse(t);throw new Error("ipaddr: the address has neither IPv6 nor IPv4 format")},i.parseCIDR=function(t){try{return i.IPv6.parseCIDR(t)}catch{try{return i.IPv4.parseCIDR(t)}catch{throw new Error("ipaddr: the address has neither IPv6 nor IPv4 CIDR format")}}},i.process=function(t){let e=this.parse(t);return e.kind()==="ipv6"&&e.isIPv4MappedAddress()?e.toIPv4Address():e},i.subnetMatch=function(t,e,n){let r,o,s,f;n==null&&(n="unicast");for(o in e)if(Object.prototype.hasOwnProperty.call(e,o)){for(s=e[o],s[0]&&!(s[0]instanceof Array)&&(s=[s]),r=0;r<s.length;r++)if(f=s[r],t.kind()===f[0].kind()&&t.match.apply(t,f))return o}return n},typeof P<"u"&&P.exports?P.exports=i:u.ipaddr=i})(M)});var p={};B(p,{IPv4:()=>_,IPv6:()=>N,default:()=>U,fromByteArray:()=>T,isValid:()=>q,parse:()=>G,parseCIDR:()=>H,process:()=>J,subnetMatch:()=>K});var D=C($());l(p,C($()));var{IPv4:_,IPv6:N,fromByteArray:T,isValid:q,parse:G,parseCIDR:H,process:J,subnetMatch:K}=D,{default:A,...Q}=D,U=A!==void 0?A:Q;export{_ as IPv4,N as IPv6,U as default,T as fromByteArray,q as isValid,G as parse,H as parseCIDR,J as process,K as subnetMatch};
//# sourceMappingURL=ipaddr.mjs.map