import{s as rt,P as it,f as at,g as ot,h as ut,d as et,j as nt,k as K,i as ct,Q as ht,R as dt,S as ft}from"./scheduler.7a274a43.js";import{S as lt,i as mt,a as $t,t as gt}from"./index.28409b7f.js";var st=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},X={},yt={get exports(){return X},set exports(u){X=u}};(function(u,l){(function(p,c){u.exports=c()})(st,function(){var p=1e3,c=6e4,M=36e5,$="millisecond",f="second",D="minute",F="hour",H="day",A="week",O="month",N="quarter",x="year",L="date",I="Invalid Date",Q=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,j=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,R={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var n=["th","st","nd","rd"],t=r%100;return"["+r+(n[(t-20)%10]||n[t]||n[0])+"]"}},C=function(r,n,t){var i=String(r);return!i||i.length>=n?r:""+Array(n+1-i.length).join(t)+r},V={s:C,z:function(r){var n=-r.utcOffset(),t=Math.abs(n),i=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+C(i,2,"0")+":"+C(e,2,"0")},m:function r(n,t){if(n.date()<t.date())return-r(t,n);var i=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(i,O),h=t-e<0,d=n.clone().add(i+(h?-1:1),O);return+(-(i+(t-e)/(h?e-d:d-e))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:O,y:x,w:A,d:H,D:L,h:F,m:D,s:f,ms:$,Q:N}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},W="en",g={};g[W]=R;var a="$isDayjsObject",s=function(r){return r instanceof w||!(!r||!r[a])},y=function r(n,t,i){var e;if(!n)return W;if(typeof n=="string"){var h=n.toLowerCase();g[h]&&(e=h),t&&(g[h]=t,e=h);var d=n.split("-");if(!e&&d.length>1)return r(d[0])}else{var v=n.name;g[v]=n,e=v}return!i&&e&&(W=e),e||!i&&W},m=function(r,n){if(s(r))return r.clone();var t=typeof n=="object"?n:{};return t.date=r,t.args=arguments,new w(t)},o=V;o.l=y,o.i=s,o.w=function(r,n){return m(r,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var w=function(){function r(t){this.$L=y(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[a]=!0}var n=r.prototype;return n.parse=function(t){this.$d=function(i){var e=i.date,h=i.utc;if(e===null)return new Date(NaN);if(o.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var d=e.match(Q);if(d){var v=d[2]-1||0,S=(d[7]||"0").substring(0,3);return h?new Date(Date.UTC(d[1],v,d[3]||1,d[4]||0,d[5]||0,d[6]||0,S)):new Date(d[1],v,d[3]||1,d[4]||0,d[5]||0,d[6]||0,S)}}return new Date(e)}(t),this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return o},n.isValid=function(){return this.$d.toString()!==I},n.isSame=function(t,i){var e=m(t);return this.startOf(i)<=e&&e<=this.endOf(i)},n.isAfter=function(t,i){return m(t)<this.startOf(i)},n.isBefore=function(t,i){return this.endOf(i)<m(t)},n.$g=function(t,i,e){return o.u(t)?this[i]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,i){var e=this,h=!!o.u(i)||i,d=o.p(t),v=function(U,Y){var J=o.w(e.$u?Date.UTC(e.$y,Y,U):new Date(e.$y,Y,U),e);return h?J:J.endOf(H)},S=function(U,Y){return o.w(e.toDate()[U].apply(e.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(Y)),e)},b=this.$W,k=this.$M,T=this.$D,E="set"+(this.$u?"UTC":"");switch(d){case x:return h?v(1,0):v(31,11);case O:return h?v(1,k):v(0,k+1);case A:var P=this.$locale().weekStart||0,Z=(b<P?b+7:b)-P;return v(h?T-Z:T+(6-Z),k);case H:case L:return S(E+"Hours",0);case F:return S(E+"Minutes",1);case D:return S(E+"Seconds",2);case f:return S(E+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,i){var e,h=o.p(t),d="set"+(this.$u?"UTC":""),v=(e={},e[H]=d+"Date",e[L]=d+"Date",e[O]=d+"Month",e[x]=d+"FullYear",e[F]=d+"Hours",e[D]=d+"Minutes",e[f]=d+"Seconds",e[$]=d+"Milliseconds",e)[h],S=h===H?this.$D+(i-this.$W):i;if(h===O||h===x){var b=this.clone().set(L,1);b.$d[v](S),b.init(),this.$d=b.set(L,Math.min(this.$D,b.daysInMonth())).$d}else v&&this.$d[v](S);return this.init(),this},n.set=function(t,i){return this.clone().$set(t,i)},n.get=function(t){return this[o.p(t)]()},n.add=function(t,i){var e,h=this;t=Number(t);var d=o.p(i),v=function(k){var T=m(h);return o.w(T.date(T.date()+Math.round(k*t)),h)};if(d===O)return this.set(O,this.$M+t);if(d===x)return this.set(x,this.$y+t);if(d===H)return v(1);if(d===A)return v(7);var S=(e={},e[D]=c,e[F]=M,e[f]=p,e)[d]||1,b=this.$d.getTime()+t*S;return o.w(b,this)},n.subtract=function(t,i){return this.add(-1*t,i)},n.format=function(t){var i=this,e=this.$locale();if(!this.isValid())return e.invalidDate||I;var h=t||"YYYY-MM-DDTHH:mm:ssZ",d=o.z(this),v=this.$H,S=this.$m,b=this.$M,k=e.weekdays,T=e.months,E=e.meridiem,P=function(Y,J,z,B){return Y&&(Y[J]||Y(i,h))||z[J].slice(0,B)},Z=function(Y){return o.s(v%12||12,Y,"0")},U=E||function(Y,J,z){var B=Y<12?"AM":"PM";return z?B.toLowerCase():B};return h.replace(j,function(Y,J){return J||function(z){switch(z){case"YY":return String(i.$y).slice(-2);case"YYYY":return o.s(i.$y,4,"0");case"M":return b+1;case"MM":return o.s(b+1,2,"0");case"MMM":return P(e.monthsShort,b,T,3);case"MMMM":return P(T,b);case"D":return i.$D;case"DD":return o.s(i.$D,2,"0");case"d":return String(i.$W);case"dd":return P(e.weekdaysMin,i.$W,k,2);case"ddd":return P(e.weekdaysShort,i.$W,k,3);case"dddd":return k[i.$W];case"H":return String(v);case"HH":return o.s(v,2,"0");case"h":return Z(1);case"hh":return Z(2);case"a":return U(v,S,!0);case"A":return U(v,S,!1);case"m":return String(S);case"mm":return o.s(S,2,"0");case"s":return String(i.$s);case"ss":return o.s(i.$s,2,"0");case"SSS":return o.s(i.$ms,3,"0");case"Z":return d}return null}(Y)||d.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,i,e){var h,d=this,v=o.p(i),S=m(t),b=(S.utcOffset()-this.utcOffset())*c,k=this-S,T=function(){return o.m(d,S)};switch(v){case x:h=T()/12;break;case O:h=T();break;case N:h=T()/3;break;case A:h=(k-b)/6048e5;break;case H:h=(k-b)/864e5;break;case F:h=k/M;break;case D:h=k/c;break;case f:h=k/p;break;default:h=k}return e?h:o.a(h)},n.daysInMonth=function(){return this.endOf(O).$D},n.$locale=function(){return g[this.$L]},n.locale=function(t,i){if(!t)return this.$L;var e=this.clone(),h=y(t,i,!0);return h&&(e.$L=h),e},n.clone=function(){return o.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},r}(),_=w.prototype;return m.prototype=_,[["$ms",$],["$s",f],["$m",D],["$H",F],["$W",H],["$M",O],["$y",x],["$D",L]].forEach(function(r){_[r[1]]=function(n){return this.$g(n,r[0],r[1])}}),m.extend=function(r,n){return r.$i||(r(n,w,m),r.$i=!0),m},m.locale=y,m.isDayjs=s,m.unix=function(r){return m(1e3*r)},m.en=g[W],m.Ls=g,m.p={},m})})(yt);const G=X;var q={},Mt={get exports(){return q},set exports(u){q=u}};(function(u,l){(function(p,c){u.exports=c()})(st,function(){var p,c,M=1e3,$=6e4,f=36e5,D=864e5,F=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,H=31536e6,A=2628e6,O=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,N={years:H,months:A,days:D,hours:f,minutes:$,seconds:M,milliseconds:1,weeks:6048e5},x=function(g){return g instanceof V},L=function(g,a,s){return new V(g,s,a.$l)},I=function(g){return c.p(g)+"s"},Q=function(g){return g<0},j=function(g){return Q(g)?Math.ceil(g):Math.floor(g)},R=function(g){return Math.abs(g)},C=function(g,a){return g?Q(g)?{negative:!0,format:""+R(g)+a}:{negative:!1,format:""+g+a}:{negative:!1,format:""}},V=function(){function g(s,y,m){var o=this;if(this.$d={},this.$l=m,s===void 0&&(this.$ms=0,this.parseFromMilliseconds()),y)return L(s*N[I(y)],this);if(typeof s=="number")return this.$ms=s,this.parseFromMilliseconds(),this;if(typeof s=="object")return Object.keys(s).forEach(function(r){o.$d[I(r)]=s[r]}),this.calMilliseconds(),this;if(typeof s=="string"){var w=s.match(O);if(w){var _=w.slice(2).map(function(r){return r!=null?Number(r):0});return this.$d.years=_[0],this.$d.months=_[1],this.$d.weeks=_[2],this.$d.days=_[3],this.$d.hours=_[4],this.$d.minutes=_[5],this.$d.seconds=_[6],this.calMilliseconds(),this}}return this}var a=g.prototype;return a.calMilliseconds=function(){var s=this;this.$ms=Object.keys(this.$d).reduce(function(y,m){return y+(s.$d[m]||0)*N[m]},0)},a.parseFromMilliseconds=function(){var s=this.$ms;this.$d.years=j(s/H),s%=H,this.$d.months=j(s/A),s%=A,this.$d.days=j(s/D),s%=D,this.$d.hours=j(s/f),s%=f,this.$d.minutes=j(s/$),s%=$,this.$d.seconds=j(s/M),s%=M,this.$d.milliseconds=s},a.toISOString=function(){var s=C(this.$d.years,"Y"),y=C(this.$d.months,"M"),m=+this.$d.days||0;this.$d.weeks&&(m+=7*this.$d.weeks);var o=C(m,"D"),w=C(this.$d.hours,"H"),_=C(this.$d.minutes,"M"),r=this.$d.seconds||0;this.$d.milliseconds&&(r+=this.$d.milliseconds/1e3,r=Math.round(1e3*r)/1e3);var n=C(r,"S"),t=s.negative||y.negative||o.negative||w.negative||_.negative||n.negative,i=w.format||_.format||n.format?"T":"",e=(t?"-":"")+"P"+s.format+y.format+o.format+i+w.format+_.format+n.format;return e==="P"||e==="-P"?"P0D":e},a.toJSON=function(){return this.toISOString()},a.format=function(s){var y=s||"YYYY-MM-DDTHH:mm:ss",m={Y:this.$d.years,YY:c.s(this.$d.years,2,"0"),YYYY:c.s(this.$d.years,4,"0"),M:this.$d.months,MM:c.s(this.$d.months,2,"0"),D:this.$d.days,DD:c.s(this.$d.days,2,"0"),H:this.$d.hours,HH:c.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:c.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:c.s(this.$d.seconds,2,"0"),SSS:c.s(this.$d.milliseconds,3,"0")};return y.replace(F,function(o,w){return w||String(m[o])})},a.as=function(s){return this.$ms/N[I(s)]},a.get=function(s){var y=this.$ms,m=I(s);return m==="milliseconds"?y%=1e3:y=m==="weeks"?j(y/N[m]):this.$d[m],y||0},a.add=function(s,y,m){var o;return o=y?s*N[I(y)]:x(s)?s.$ms:L(s,this).$ms,L(this.$ms+o*(m?-1:1),this)},a.subtract=function(s,y){return this.add(s,y,!0)},a.locale=function(s){var y=this.clone();return y.$l=s,y},a.clone=function(){return L(this.$ms,this)},a.humanize=function(s){return p().add(this.$ms,"ms").locale(this.$l).fromNow(!s)},a.valueOf=function(){return this.asMilliseconds()},a.milliseconds=function(){return this.get("milliseconds")},a.asMilliseconds=function(){return this.as("milliseconds")},a.seconds=function(){return this.get("seconds")},a.asSeconds=function(){return this.as("seconds")},a.minutes=function(){return this.get("minutes")},a.asMinutes=function(){return this.as("minutes")},a.hours=function(){return this.get("hours")},a.asHours=function(){return this.as("hours")},a.days=function(){return this.get("days")},a.asDays=function(){return this.as("days")},a.weeks=function(){return this.get("weeks")},a.asWeeks=function(){return this.as("weeks")},a.months=function(){return this.get("months")},a.asMonths=function(){return this.as("months")},a.years=function(){return this.get("years")},a.asYears=function(){return this.as("years")},g}(),W=function(g,a,s){return g.add(a.years()*s,"y").add(a.months()*s,"M").add(a.days()*s,"d").add(a.hours()*s,"h").add(a.minutes()*s,"m").add(a.seconds()*s,"s").add(a.milliseconds()*s,"ms")};return function(g,a,s){p=s,c=s().$utils(),s.duration=function(o,w){var _=s.locale();return L(o,{$l:_},w)},s.isDuration=x;var y=a.prototype.add,m=a.prototype.subtract;a.prototype.add=function(o,w){return x(o)?W(this,o,1):y.bind(this)(o,w)},a.prototype.subtract=function(o,w){return x(o)?W(this,o,-1):m.bind(this)(o,w)}}})})(Mt);const vt=q;G.extend(vt);const bt=(u,l=new Date)=>{let p=0,c=0,M=0;return l.getFullYear()!==u.getFullYear()?(M=l.getMonth(),c=(l.getFullYear()-u.getFullYear()-1)*12,p=12-u.getMonth()):p=l.getMonth()-u.getMonth(),p+c+M+1},_t=u=>["January","February","March","April","May","June","July","August","September","October","November","December"][u],kt=(u,l)=>`${u} | ${l}`;function Yt(u,l=new Date(Date.now()+1e3*60*60*24)){const p=G(u),c=G(l),M=G.duration(c.diff(p));let $=0,f="day";return M.as("days")<=7?(f="day",$=M.as("days")):M.as("months")<=1?(f="week",$=M.as("weeks")):M.as("years")<=1?(f="month",$=M.as("months")):(f="year",$=M.as("years")),$=Math.trunc($),`${Math.trunc($)} ${f}${$>1?"s":""}`}function Ot(u,l){const p=["logo","links","color","screenshots"];return l=l.toLowerCase(),u.filter(c=>tt(c,l,p))}function tt(u,l,p=[]){return Array.isArray(u)?u.some(c=>tt(c,l)):typeof u=="object"&&u!==null?u instanceof Date?[u.toString().toLowerCase(),u.toLocaleDateString("default",{month:"long",year:"numeric"}).toLowerCase(),u.toLocaleDateString("default",{day:"numeric",month:"long",year:"numeric"}).toLowerCase(),u.toLocaleDateString("en-US").toLowerCase(),u.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}).toLowerCase()].some(M=>M.includes(l)):Object.keys(u).some(c=>!p.includes(c)&&tt(u[c],l)):u.toString().toLowerCase().includes(l)}function pt(u){let l,p,c;const M=u[2].default,$=it(M,u,u[1],null);return{c(){l=at("h1"),$&&$.c(),this.h()},l(f){l=ot(f,"H1",{class:!0,style:!0});var D=ut(l);$&&$.l(D),D.forEach(et),this.h()},h(){nt(l,"class",p=`font-[var(--title-f)] font-black tracking-[4px] text-center text-2.5em sm:text-[3em] md:text-[3.5em] lg:text-[4em] ${u[0]}`),K(l,"background","linear-gradient(var(--main-text), var(--accent-text-hover))"),K(l,"-webkit-background-clip","text"),K(l,"background-clip","text")},m(f,D){ct(f,l,D),$&&$.m(l,null),c=!0},p(f,[D]){$&&$.p&&(!c||D&2)&&ht($,M,f,f[1],c?ft(M,f[1],D,null):dt(f[1]),null),(!c||D&1&&p!==(p=`font-[var(--title-f)] font-black tracking-[4px] text-center text-2.5em sm:text-[3em] md:text-[3.5em] lg:text-[4em] ${f[0]}`))&&nt(l,"class",p)},i(f){c||($t($,f),c=!0)},o(f){gt($,f),c=!1},d(f){f&&et(l),$&&$.d(f)}}}function St(u,l,p){let{$$slots:c={},$$scope:M}=l,{classes:$=""}=l;return u.$$set=f=>{"classes"in f&&p(0,$=f.classes),"$$scope"in f&&p(1,M=f.$$scope)},[$,M,c]}class xt extends lt{constructor(l){super(),mt(this,l,St,pt,rt,{classes:0})}}const Ht="Slick template with Svelte";export{xt as M,_t as a,bt as b,st as c,Ot as f,Yt as g,Ht as t,kt as u};
