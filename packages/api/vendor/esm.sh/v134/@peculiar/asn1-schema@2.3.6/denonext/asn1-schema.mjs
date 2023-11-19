/* esm.sh - esbuild bundle(@peculiar/asn1-schema@2.3.6) denonext production */
import*as s from"/v134/asn1js@3.0.5/denonext/asn1js.mjs";var h;(function(e){e[e.Sequence=0]="Sequence",e[e.Set=1]="Set",e[e.Choice=2]="Choice"})(h||(h={}));var u;(function(e){e[e.Any=1]="Any",e[e.Boolean=2]="Boolean",e[e.OctetString=3]="OctetString",e[e.BitString=4]="BitString",e[e.Integer=5]="Integer",e[e.Enumerated=6]="Enumerated",e[e.ObjectIdentifier=7]="ObjectIdentifier",e[e.Utf8String=8]="Utf8String",e[e.BmpString=9]="BmpString",e[e.UniversalString=10]="UniversalString",e[e.NumericString=11]="NumericString",e[e.PrintableString=12]="PrintableString",e[e.TeletexString=13]="TeletexString",e[e.VideotexString=14]="VideotexString",e[e.IA5String=15]="IA5String",e[e.GraphicString=16]="GraphicString",e[e.VisibleString=17]="VisibleString",e[e.GeneralString=18]="GeneralString",e[e.CharacterString=19]="CharacterString",e[e.UTCTime=20]="UTCTime",e[e.GeneralizedTime=21]="GeneralizedTime",e[e.DATE=22]="DATE",e[e.TimeOfDay=23]="TimeOfDay",e[e.DateTime=24]="DateTime",e[e.Duration=25]="Duration",e[e.TIME=26]="TIME",e[e.Null=27]="Null"})(u||(u={}));import*as I from"/v134/asn1js@3.0.5/denonext/asn1js.mjs";import{BufferSourceConverter as G}from"/v134/pvtsutils@1.3.5/denonext/pvtsutils.mjs";var z=class{constructor(t,r=0){if(this.unusedBits=0,this.value=new ArrayBuffer(0),t)if(typeof t=="number")this.fromNumber(t);else if(G.isBufferSource(t))this.unusedBits=r,this.value=G.toArrayBuffer(t);else throw TypeError("Unsupported type of 'params' argument for BitString")}fromASN(t){if(!(t instanceof I.BitString))throw new TypeError("Argument 'asn' is not instance of ASN.1 BitString");return this.unusedBits=t.valueBlock.unusedBits,this.value=t.valueBlock.valueHex,this}toASN(){return new I.BitString({unusedBits:this.unusedBits,valueHex:this.value})}toSchema(t){return new I.BitString({name:t})}toNumber(){let t="",r=new Uint8Array(this.value);for(let o of r)t+=o.toString(2).padStart(8,"0");return t=t.split("").reverse().join(""),this.unusedBits&&(t=t.slice(this.unusedBits).padStart(this.unusedBits,"0")),parseInt(t,2)}fromNumber(t){let r=t.toString(2),o=r.length+7>>3;this.unusedBits=(o<<3)-r.length;let n=new Uint8Array(o);r=r.padStart(o<<3,"0").split("").reverse().join("");let f=0;for(;f<o;)n[f]=parseInt(r.slice(f<<3,(f<<3)+8),2),f++;this.value=n.buffer}};import*as O from"/v134/asn1js@3.0.5/denonext/asn1js.mjs";import{BufferSourceConverter as H}from"/v134/pvtsutils@1.3.5/denonext/pvtsutils.mjs";var V=class{constructor(t){typeof t=="number"?this.buffer=new ArrayBuffer(t):H.isBufferSource(t)?this.buffer=H.toArrayBuffer(t):Array.isArray(t)?this.buffer=new Uint8Array(t):this.buffer=new ArrayBuffer(0)}get byteLength(){return this.buffer.byteLength}get byteOffset(){return 0}fromASN(t){if(!(t instanceof O.OctetString))throw new TypeError("Argument 'asn' is not instance of ASN.1 OctetString");return this.buffer=t.valueBlock.valueHex,this}toASN(){return new O.OctetString({valueHex:this.buffer})}toSchema(t){return new O.OctetString({name:t})}};var J={fromASN:e=>e instanceof s.Null?null:e.valueBeforeDecodeView,toASN:e=>{if(e===null)return new s.Null;let t=s.fromBER(e);if(t.result.error)throw new Error(t.result.error);return t.result}},Q={fromASN:e=>e.valueBlock.valueHexView.byteLength>=4?e.valueBlock.toString():e.valueBlock.valueDec,toASN:e=>new s.Integer({value:+e})},X={fromASN:e=>e.valueBlock.valueDec,toASN:e=>new s.Enumerated({value:e})},Ee={fromASN:e=>e.valueBlock.valueHexView,toASN:e=>new s.Integer({valueHex:e})},ke={fromASN:e=>e.toBigInt(),toASN:e=>s.Integer.fromBigInt(e)},Y={fromASN:e=>e.valueBlock.valueHexView,toASN:e=>new s.BitString({valueHex:e})},Z={fromASN:e=>e.valueBlock.toString(),toASN:e=>new s.ObjectIdentifier({value:e})},_={fromASN:e=>e.valueBlock.value,toASN:e=>new s.Boolean({value:e})},K={fromASN:e=>e.valueBlock.valueHexView,toASN:e=>new s.OctetString({valueHex:e})},Ie={fromASN:e=>new V(e.getValue()),toASN:e=>e.toASN()};function d(e){return{fromASN:t=>t.valueBlock.value,toASN:t=>new e({value:t})}}var P=d(s.Utf8String),ee=d(s.BmpString),te=d(s.UniversalString),re=d(s.NumericString),ne=d(s.PrintableString),oe=d(s.TeletexString),se=d(s.VideotexString),ie=d(s.IA5String),ae=d(s.GraphicString),ce=d(s.VisibleString),ue=d(s.GeneralString),le=d(s.CharacterString),fe={fromASN:e=>e.toDate(),toASN:e=>new s.UTCTime({valueDate:e})},me={fromASN:e=>e.toDate(),toASN:e=>new s.GeneralizedTime({valueDate:e})},Se={fromASN:()=>null,toASN:()=>new s.Null};function x(e){switch(e){case u.Any:return J;case u.BitString:return Y;case u.BmpString:return ee;case u.Boolean:return _;case u.CharacterString:return le;case u.Enumerated:return X;case u.GeneralString:return ue;case u.GeneralizedTime:return me;case u.GraphicString:return ae;case u.IA5String:return ie;case u.Integer:return Q;case u.Null:return Se;case u.NumericString:return re;case u.ObjectIdentifier:return Z;case u.OctetString:return K;case u.PrintableString:return ne;case u.TeletexString:return oe;case u.UTCTime:return fe;case u.UniversalString:return te;case u.Utf8String:return P;case u.VideotexString:return se;case u.VisibleString:return ce;default:return null}}import*as S from"/v134/asn1js@3.0.5/denonext/asn1js.mjs";function w(e){return typeof e=="function"&&e.prototype?e.prototype.toASN&&e.prototype.fromASN?!0:w(e.prototype):!!(e&&typeof e=="object"&&"toASN"in e&&"fromASN"in e)}function $(e){var t;if(e){let r=Object.getPrototypeOf(e);return((t=r?.prototype)===null||t===void 0?void 0:t.constructor)===Array?!0:$(r)}return!1}function R(e,t){if(!(e&&t)||e.byteLength!==t.byteLength)return!1;let r=new Uint8Array(e),o=new Uint8Array(t);for(let n=0;n<e.byteLength;n++)if(r[n]!==o[n])return!1;return!0}var U=class{constructor(){this.items=new WeakMap}has(t){return this.items.has(t)}get(t,r=!1){let o=this.items.get(t);if(!o)throw new Error(`Cannot get schema for '${t.prototype.constructor.name}' target`);if(r&&!o.schema)throw new Error(`Schema '${t.prototype.constructor.name}' doesn't contain ASN.1 schema. Call 'AsnSchemaStorage.cache'.`);return o}cache(t){let r=this.get(t);r.schema||(r.schema=this.create(t,!0))}createDefault(t){let r={type:h.Sequence,items:{}},o=this.findParentSchema(t);return o&&(Object.assign(r,o),r.items=Object.assign({},r.items,o.items)),r}create(t,r){let o=this.items.get(t)||this.createDefault(t),n=[];for(let f in o.items){let i=o.items[f],a=r?f:"",c;if(typeof i.type=="number"){let m=u[i.type],p=S[m];if(!p)throw new Error(`Cannot get ASN1 class by name '${m}'`);c=new p({name:a})}else w(i.type)?c=new i.type().toSchema(a):i.optional?this.get(i.type).type===h.Choice?c=new S.Any({name:a}):(c=this.create(i.type,!1),c.name=a):c=new S.Any({name:a});let l=!!i.optional||i.defaultValue!==void 0;if(i.repeated){c.name="";let m=i.repeated==="set"?S.Set:S.Sequence;c=new m({name:"",value:[new S.Repeated({name:a,value:c})]})}if(i.context!==null&&i.context!==void 0)if(i.implicit)if(typeof i.type=="number"||w(i.type)){let m=i.repeated?S.Constructed:S.Primitive;n.push(new m({name:a,optional:l,idBlock:{tagClass:3,tagNumber:i.context}}))}else{this.cache(i.type);let m=!!i.repeated,p=m?c:this.get(i.type,!0).schema;p="valueBlock"in p?p.valueBlock.value:p.value,n.push(new S.Constructed({name:m?"":a,optional:l,idBlock:{tagClass:3,tagNumber:i.context},value:p}))}else n.push(new S.Constructed({optional:l,idBlock:{tagClass:3,tagNumber:i.context},value:[c]}));else c.optional=l,n.push(c)}switch(o.type){case h.Sequence:return new S.Sequence({value:n,name:""});case h.Set:return new S.Set({value:n,name:""});case h.Choice:return new S.Choice({value:n,name:""});default:throw new Error("Unsupported ASN1 type in use")}}set(t,r){return this.items.set(t,r),this}findParentSchema(t){let r=Object.getPrototypeOf(t);return r?this.items.get(r)||this.findParentSchema(r):null}};var g=new U;var D=e=>t=>{let r;g.has(t)?r=g.get(t):(r=g.createDefault(t),g.set(t,r)),Object.assign(r,e)},he=()=>D({type:h.Choice}),pe=e=>D({type:h.Set,...e}),ve=e=>D({type:h.Sequence,...e}),ge=e=>(t,r)=>{let o;g.has(t.constructor)?o=g.get(t.constructor):(o=g.createDefault(t.constructor),g.set(t.constructor,o));let n=Object.assign({},e);if(typeof n.type=="number"&&!n.converter){let f=x(e.type);if(!f)throw new Error(`Cannot get default converter for property '${r}' of ${t.constructor.name}`);n.converter=f}o.items[r]=n};import*as A from"/v134/asn1js@3.0.5/denonext/asn1js.mjs";var j=class extends Error{constructor(){super(...arguments),this.schemas=[]}};var b=class{static parse(t,r){let o=A.fromBER(t);if(o.result.error)throw new Error(o.result.error);return this.fromASN(o.result,r)}static fromASN(t,r){var o;try{if(w(r))return new r().fromASN(t);let n=g.get(r);g.cache(r);let f=n.schema;if(t.constructor===A.Constructed&&n.type!==h.Choice){f=new A.Constructed({idBlock:{tagClass:3,tagNumber:t.idBlock.tagNumber},value:n.schema.valueBlock.value});for(let c in n.items)delete t[c]}let i=A.compareSchema({},t,f);if(!i.verified)throw new j(`Data does not match to ${r.name} ASN1 schema. ${i.result.error}`);let a=new r;if($(r)){if(!("value"in t.valueBlock&&Array.isArray(t.valueBlock.value)))throw new Error("Cannot get items from the ASN.1 parsed value. ASN.1 object is not constructed.");let c=n.itemType;if(typeof c=="number"){let l=x(c);if(!l)throw new Error(`Cannot get default converter for array item of ${r.name} ASN1 schema`);return r.from(t.valueBlock.value,m=>l.fromASN(m))}else return r.from(t.valueBlock.value,l=>this.fromASN(l,c))}for(let c in n.items){let l=i.result[c];if(!l)continue;let m=n.items[c],p=m.type;if(typeof p=="number"||w(p)){let C=(o=m.converter)!==null&&o!==void 0?o:w(p)?new p:null;if(!C)throw new Error("Converter is empty");if(m.repeated)if(m.implicit){let B=m.repeated==="sequence"?A.Sequence:A.Set,N=new B;N.valueBlock=l.valueBlock;let y=A.fromBER(N.toBER(!1));if(y.offset===-1)throw new Error(`Cannot parse the child item. ${y.result.error}`);if(!("value"in y.result.valueBlock&&Array.isArray(y.result.valueBlock.value)))throw new Error("Cannot get items from the ASN.1 parsed value. ASN.1 object is not constructed.");let k=y.result.valueBlock.value;a[c]=Array.from(k,F=>C.fromASN(F))}else a[c]=Array.from(l,B=>C.fromASN(B));else{let B=l;if(m.implicit){let N;if(w(p))N=new p().toSchema("");else{let y=u[p],k=A[y];if(!k)throw new Error(`Cannot get '${y}' class from asn1js module`);N=new k}N.valueBlock=B.valueBlock,B=A.fromBER(N.toBER(!1)).result}a[c]=C.fromASN(B)}}else if(m.repeated){if(!Array.isArray(l))throw new Error("Cannot get list of items from the ASN.1 parsed value. ASN.1 value should be iterable.");a[c]=Array.from(l,C=>this.fromASN(C,p))}else a[c]=this.fromASN(l,p)}return a}catch(n){throw n instanceof j&&n.schemas.push(r.name),n}}};import*as v from"/v134/asn1js@3.0.5/denonext/asn1js.mjs";var E=class e{static serialize(t){return t instanceof v.BaseBlock?t.toBER(!1):this.toASN(t).toBER(!1)}static toASN(t){if(t&&typeof t=="object"&&w(t))return t.toASN();if(!(t&&typeof t=="object"))throw new TypeError("Parameter 1 should be type of Object.");let r=t.constructor,o=g.get(r);g.cache(r);let n=[];if(o.itemType){if(!Array.isArray(t))throw new TypeError("Parameter 1 should be type of Array.");if(typeof o.itemType=="number"){let i=x(o.itemType);if(!i)throw new Error(`Cannot get default converter for array item of ${r.name} ASN1 schema`);n=t.map(a=>i.toASN(a))}else n=t.map(i=>this.toAsnItem({type:o.itemType},"[]",r,i))}else for(let i in o.items){let a=o.items[i],c=t[i];if(c===void 0||a.defaultValue===c||typeof a.defaultValue=="object"&&typeof c=="object"&&R(this.serialize(a.defaultValue),this.serialize(c)))continue;let l=e.toAsnItem(a,i,r,c);if(typeof a.context=="number")if(a.implicit)if(!a.repeated&&(typeof a.type=="number"||w(a.type))){let m={};m.valueHex=l instanceof v.Null?l.valueBeforeDecodeView:l.valueBlock.toBER(),n.push(new v.Primitive({optional:a.optional,idBlock:{tagClass:3,tagNumber:a.context},...m}))}else n.push(new v.Constructed({optional:a.optional,idBlock:{tagClass:3,tagNumber:a.context},value:l.valueBlock.value}));else n.push(new v.Constructed({optional:a.optional,idBlock:{tagClass:3,tagNumber:a.context},value:[l]}));else a.repeated?n=n.concat(l):n.push(l)}let f;switch(o.type){case h.Sequence:f=new v.Sequence({value:n});break;case h.Set:f=new v.Set({value:n});break;case h.Choice:if(!n[0])throw new Error(`Schema '${r.name}' has wrong data. Choice cannot be empty.`);f=n[0];break}return f}static toAsnItem(t,r,o,n){let f;if(typeof t.type=="number"){let i=t.converter;if(!i)throw new Error(`Property '${r}' doesn't have converter for type ${u[t.type]} in schema '${o.name}'`);if(t.repeated){if(!Array.isArray(n))throw new TypeError("Parameter 'objProp' should be type of Array.");let a=Array.from(n,l=>i.toASN(l)),c=t.repeated==="sequence"?v.Sequence:v.Set;f=new c({value:a})}else f=i.toASN(n)}else if(t.repeated){if(!Array.isArray(n))throw new TypeError("Parameter 'objProp' should be type of Array.");let i=Array.from(n,c=>this.toASN(c)),a=t.repeated==="sequence"?v.Sequence:v.Set;f=new a({value:i})}else f=this.toASN(n);return f}};var T=class extends Array{constructor(t=[]){if(typeof t=="number")super(t);else{super();for(let r of t)this.push(r)}}};import*as W from"/v134/asn1js@3.0.5/denonext/asn1js.mjs";import{BufferSourceConverter as L}from"/v134/pvtsutils@1.3.5/denonext/pvtsutils.mjs";var M=class e{static serialize(t){return E.serialize(t)}static parse(t,r){return b.parse(t,r)}static toString(t){let r=L.isBufferSource(t)?L.toArrayBuffer(t):e.serialize(t),o=W.fromBER(r);if(o.offset===-1)throw new Error(`Cannot decode ASN.1 data. ${o.result.error}`);return o.result.toString()}};export{J as AsnAnyConverter,T as AsnArray,Y as AsnBitStringConverter,ee as AsnBmpStringConverter,_ as AsnBooleanConverter,le as AsnCharacterStringConverter,he as AsnChoiceType,Ie as AsnConstructedOctetStringConverter,M as AsnConvert,X as AsnEnumeratedConverter,ue as AsnGeneralStringConverter,me as AsnGeneralizedTimeConverter,ae as AsnGraphicStringConverter,ie as AsnIA5StringConverter,Ee as AsnIntegerArrayBufferConverter,ke as AsnIntegerBigIntConverter,Q as AsnIntegerConverter,Se as AsnNullConverter,re as AsnNumericStringConverter,Z as AsnObjectIdentifierConverter,K as AsnOctetStringConverter,b as AsnParser,ne as AsnPrintableStringConverter,ge as AsnProp,u as AsnPropTypes,j as AsnSchemaValidationError,ve as AsnSequenceType,E as AsnSerializer,pe as AsnSetType,oe as AsnTeletexStringConverter,D as AsnType,h as AsnTypeTypes,fe as AsnUTCTimeConverter,te as AsnUniversalStringConverter,P as AsnUtf8StringConverter,se as AsnVideotexStringConverter,ce as AsnVisibleStringConverter,z as BitString,V as OctetString,x as defaultConverter};
//# sourceMappingURL=asn1-schema.mjs.map