(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{259:function(t,e,n){t.exports=n.p+"a98249e9c7a35a180e7dc5d5b9c82674.svg"},260:function(t,e,n){t.exports=n.p+"img/main-screenshot.bf1b5ab.png"},261:function(t,e,n){t.exports=n.p+"3ea2c744c7450fab46bb0201579e3c76.svg"},262:function(t,e,n){t.exports=n.p+"d7ccdf866debeb42d38bd3665d9600da.svg"},263:function(t,e,n){"use strict";var r=n(5),l=n(21),o=n(26),c=n(133),f=n(62),d=n(13),h=n(46).f,m=n(63).f,v=n(11).f,_=n(264).trim,x=r.Number,w=x,C=x.prototype,y="Number"==o(n(82)(C)),E="trim"in String.prototype,k=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var n,r,l,o=(e=E?e.trim():_(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+e}for(var code,c=e.slice(2),i=0,d=c.length;i<d;i++)if((code=c.charCodeAt(i))<48||code>l)return NaN;return parseInt(c,r)}}return+e};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(y?d((function(){C.valueOf.call(n)})):"Number"!=o(n))?c(new w(k(e)),n,x):k(e)};for(var I,N=n(9)?h(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;N.length>S;S++)l(w,I=N[S])&&!l(x,I)&&v(x,I,m(w,I));x.prototype=C,C.constructor=x,n(14)(r,"Number",x)}},264:function(t,e,n){var r=n(7),l=n(27),o=n(13),c=n(265),f="["+c+"]",d=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),m=function(t,e,n){var l={},f=o((function(){return!!c[t]()||"​"!="​"[t]()})),d=l[t]=f?e(v):c[t];n&&(l[n]=d),r(r.P+r.F*f,"String",l)},v=m.trim=function(t,e){return t=String(l(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(h,"")),t};t.exports=m},265:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},266:function(t,e,n){t.exports=n.p+"8952a2957ff9013f20fcd0b2a0a8f080.svg"},267:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"relative -mt-12 lg:-mt-24"},[e("img",{attrs:{src:n(259),alt:""}})])}],l=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full md:w-3/5 py-6 md:pr-2 text-center"},[e("img",{staticClass:"w-full ",attrs:{src:n(260),alt:""}})])}],o={name:"HeroContent",components:{DownloadButton:n(126).a}},c=n(6),f={name:"Hero",components:{"hero-content":Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-24 md:mb-4 lg:mb-16 xl:mb-3"},[n("div",{staticClass:"container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"},[n("div",{staticClass:"flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-right"},[n("p",{staticClass:"uppercase tracking-loose w-full"},[t._v("\n        קשה לך לעקוב אחרי ההוצאות?\n      ")]),t._v(" "),n("h1",{staticClass:"my-4 text-5xl font-bold leading-tight"},[t._v('\n        עו"שי מרכז למקום אחד את כל פירוטי ההוצאות שלך\n      ')]),t._v(" "),n("p",{staticClass:"leading-normal text-2xl mb-8"},[t._v("\n        בצורה מאובטחת, ללא צד שלישי ובפיקוח הקהילה\n      ")]),t._v(" "),n("div",{staticClass:"mx-auto my-6"},[n("DownloadButton",{attrs:{"button-style":"bg-white text-gray-800 shadow-lg"}})],1)]),t._v(" "),t._m(0)])])}),l,!1,null,null,null).exports}},d=Object(c.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"hero"}},[e("hero-content"),this._v(" "),this._m(0)],1)}),r,!1,null,null,null).exports,h={name:"FeatureRight",props:{headline:{type:String,required:!0},content:{type:String,required:!0}}},m=Object(c.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap items-center"},[n("div",{staticClass:"w-5/6 sm:w-1/2 p-6"},[n("h3",{staticClass:"text-3xl text-gray-800 font-bold leading-none mb-3"},[t._v("\n      "+t._s(t.headline)+"\n    ")]),t._v(" "),n("p",{staticClass:"text-gray-600 mb-8"},[t._v("\n      "+t._s(t.content)+"\n      "),n("br"),t._v(" "),n("br"),t._v("Images from:\n      "),n("a",{staticClass:"text-orange-500 underline",attrs:{href:"https://undraw.co/"}},[t._v("undraw.co")])])]),t._v(" "),n("div",{staticClass:"w-full sm:w-1/2 p-6"},[t._t("svg")],2)])}),[],!1,null,null,null).exports,v={name:"FeatureLeft",props:{headline:{type:String,required:!0},content:{type:String,required:!0}}},_=Object(c.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap flex-col-reverse sm:flex-row items-center"},[n("div",{staticClass:"w-full sm:w-1/2 p-6 mt-6"},[t._t("svg")],2),t._v(" "),n("div",{staticClass:"w-full sm:w-1/2 p-6 mt-6"},[n("div",{staticClass:"align-middle"},[n("h3",{staticClass:"text-3xl text-gray-800 font-bold leading-none mb-3"},[t._v("\n        "+t._s(t.headline)+"\n      ")]),t._v(" "),n("p",{staticClass:"text-gray-600 mb-8"},[t._v("\n        "+t._s(t.content)+"\n        "),n("br"),t._v(" "),n("br"),t._v("Images from:\n        "),n("a",{staticClass:"text-orange-500 underline",attrs:{href:"https://undraw.co/"}},[t._v("undraw.co")])])])])])}),[],!1,null,null,null).exports,x={name:"SectionTitle",props:{white:{type:Boolean}},computed:{h1:function(){return this.white?"text-white":"text-gray-800"},line:function(){return this.white?"bg-white w-1/6":"gradient w-64"}}},w=Object(c.a)(x,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full"},[e("h1",{staticClass:"w-full my-2 text-5xl font-bold leading-tight text-center",class:this.h1},[this._t("default")],2),this._v(" "),e("div",{staticClass:"w-full mb-4"},[e("div",{staticClass:"h-1 mx-auto opacity-25 my-0 py-0 rounded-t",class:this.line})])])}),[],!1,null,null,null).exports,C={name:"Features",components:{"feature-right":m,"feature-left":_,"section-title":w}},y=Object(c.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"bg-white border-b py-8",attrs:{id:"features"}},[e("div",{staticClass:"container max-w-5xl mx-auto m-8"},[e("section-title",[this._v("תכונות")]),this._v(" "),e("feature-right",{attrs:{headline:"ייבוא מאתר הבנק",content:'בעו"שי ניתן לייבא נתונים בצורה אוטומטית מפירוט העובר ושב של חשבונות הבנק והאשראי.'}},[e("img",{attrs:{slot:"svg",src:n(261),alt:""},slot:"svg"})]),this._v(" "),e("feature-left",{attrs:{headline:"ייצוא לתוכנות ניהול",content:'את הנתונים שעו"שי מושך מחשבונות הבנק והאשראי ניתן לייצא לתוכנות ניהול נתונים שונות.'}},[e("img",{attrs:{slot:"svg",src:n(262),alt:""},slot:"svg"})])],1)])}),[],!1,null,null,null).exports,E=(n(263),{name:"TeaserColumn",props:{rows:{type:Number,required:!0,validator:function(t){return t>=1&&t<=6}},action:{type:String,default:""},link:{type:String,required:!1,default:null}},computed:{classList:function(){return"md:w-1/".concat(this.rows)},renderAction:function(){return""!==this.action}},methods:{onClick:function(){this.$emit("clicked")}}}),k={name:"Teasers",components:{"teaser-column":Object(c.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full p-6 flex flex-col flex-grow flex-shrink",class:t.classList},[n("div",{staticClass:"flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"},[n("a",{staticClass:"flex flex-wrap no-underline hover:no-underline",attrs:{href:t.link}},[n("p",{staticClass:"w-full text-gray-600 text-xs md:text-sm px-6"},[t._t("overline")],2),t._v(" "),n("div",{staticClass:"w-full font-bold text-xl text-gray-800 px-6"},[t._t("headline")],2),t._v(" "),n("p",{staticClass:"text-gray-800 text-base px-6 mb-5"},[t._t("content")],2)])]),t._v(" "),t.renderAction?n("div",{staticClass:"flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"},[n("div",{staticClass:"flex items-center justify-end"},[n("button",{staticClass:"mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg",on:{click:function(e){return e.preventDefault(),t.onClick(e)}}},[t._v("\n        "+t._s(t.action)+"\n      ")])])]):t._e()])}),[],!1,null,null,null).exports,"section-title":w},methods:{openGithub:function(){window.open("https://github.com/".concat("baruchiro/israeli-bank-scrapers-desktop"),"_blank")}}},I=Object(c.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"bg-white border-b py-8",attrs:{id:"security"}},[n("div",{staticClass:"container mx-auto flex flex-wrap pt-4 pb-12"},[n("section-title",[t._v("עקרונות האבטחה")]),t._v(" "),n("teaser-column",{attrs:{rows:3},scopedSlots:t._u([{key:"overline",fn:function(){return[t._v("\n        עקרון #1\n      ")]},proxy:!0},{key:"headline",fn:function(){return[t._v("\n        ריצה מקומית\n      ")]},proxy:!0},{key:"content",fn:function(){return[t._v("\n        האפליקצייה רצה מקומית אצלך במחשב. הסיסמאות לא נשלחות לאף אחד, ולא מתבצעת שום בקשה לשירות חיצוני כלשהו כדי לקבל את המידע.\n      ")]},proxy:!0}])}),t._v(" "),n("teaser-column",{attrs:{rows:3,action:"GitHub"},on:{clicked:t.openGithub},scopedSlots:t._u([{key:"overline",fn:function(){return[t._v("\n        עקרון #2\n      ")]},proxy:!0},{key:"headline",fn:function(){return[t._v("\n        קוד פתוח\n      ")]},proxy:!0},{key:"content",fn:function(){return[t._v("\n        ניתן ממש לראות את הקוד בו כתובה האפליקצייה, ובמקרה הצורך גם להריץ אותה ישירות מהקוד, כדי להיות בטוחים באמינות השירות.\n      ")]},proxy:!0}])})],1)])}),[],!1,null,null,null).exports,N={name:"CallToActionContent",components:{"section-title":w}},S={name:"CallToAction",components:{"call-to-action-content":Object(c.a)(N,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container mx-auto text-center py-6 mb-12"},[e("section-title",{attrs:{white:""}},[this._v("\n    צור קשר\n  ")]),this._v(" "),e("h3",{staticClass:"my-4 text-3xl leading-tight"},[this._v("\n    אנחנו שמחים לשמוע פידבקים, דיווחי באגים ובקשות לשיפור.\n  ")]),this._v(" "),this._m(0),this._v(" "),e("a",{staticClass:"inline-block mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg",attrs:{href:"mailto:baruchiro@gmail.com",target:"_blank"}},[this._v("\n    שלח מייל!\n  ")])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n    אם יש לך רעיון לייבוא נתונים ממקומות נוספים חוץ מאשר הבנקים וחברות האשראי."),e("br"),this._v("\n    או תוכנה נוספת שאפשר לייצא אליה את הנתונים."),e("br"),this._v("\n    נשמח מאוד לשמוע!\n  ")])}],!1,null,null,null).exports}},$=Object(c.a)(S,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"contact"}},[e("img",{attrs:{src:n(266),alt:""}}),this._v(" "),e("call-to-action-content")],1)}),[],!1,null,null,null).exports,A={name:"QA",props:{md:{type:String,required:!0}},data:function(){return{qaClass:"qa-close"}},mounted:function(){this.$el.querySelector("h1").addEventListener("click",this.collapse)},methods:{collapse:function(){"qa-close"===this.qaClass?this.qaClass="qa-open":this.qaClass="qa-close"}}},O={components:{"section-title":w,qa:Object(c.a)(A,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"qa",class:this.qaClass,domProps:{innerHTML:this._s(this.$md.render(this.md))}})}),[],!1,null,null,null).exports},computed:{allQuestions:function(){return['# למה לא רואים פירוט אשראי?\n\nאמנם נכון שחלק מהבנקים מציגים גם פירוט הוצאות מהאשראי, אבל כדי לראות את פירוט האשראי בעו"שי, יש להוסיף את פרטי האשראי כדי למשוך את הנתונים המדויקים ישירות מאתר האשראי.\n','# כמה זמן לוקח לייבא את הנתונים?\n\nתלוי במהירות הגלישה, אבל בכל מקרה לא יותר מדקה (מלבד הפעם הראשונה).\n\nבמידה ומהירות הגלישה נמוכה מידי, עו"שי לא יצליח לייבא את הנתונים.\n\nבמידה והסיסמה שגויה, ייתכן שייקח מעט יותר זמן לגלות זאת.\n\nבכל אופן, במידה ויש ספק מומלץ לסמן את כפתור **Show Browser** כדי לראות בפועל את תהליך הורדת הנתונים ולזהות איפה יש בעיה.\n','# למה לא קורה כלום אחרי שלחצתי Import?\n\nבפעם הראשונה שלוחצים Import, עו"שי מוריד את המנוע של דפדפן כרום כדי להיכנס לאתר הבנק בדיוק כמו שאתה בעצמך נכנס.\n\nאם אתה גולש על אינטרנט סלולרי זה יכול לקחת הרבה זמן.\n']}}},j={name:"LandingPage",components:{hero:d,features:y,teasers:I,"call-to-action":$,faq:Object(c.a)(O,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-white border-b py-8 px-6",attrs:{id:"FAQ"}},[e("section-title",[this._v("שאלות נפוצות")]),this._v(" "),this._l(this.allQuestions,(function(t){return e("qa",{key:t.trim(),attrs:{md:t}})}))],2)}),[],!1,null,null,null).exports}},T=Object(c.a)(j,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("hero"),this._v(" "),e("features"),this._v(" "),e("teasers"),this._v(" "),e("faq"),this._v(" "),e("call-to-action")],1)}),[],!1,null,null,null);e.default=T.exports}}]);