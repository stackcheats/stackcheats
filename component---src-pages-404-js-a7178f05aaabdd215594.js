(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{155:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return l});var a=n(8),r=n.n(a),i=n(0),o=n.n(i),c=n(162),s=n(165),u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return o.a.createElement(c.a,{location:this.props.location,title:t},o.a.createElement(s.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(o.a.Component);e.default=u;var l="3171288131"},160:function(t,e,n){"use strict";n.d(e,"b",function(){return l});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(159),s=n.n(c);n.d(e,"a",function(){return s.a});n(28),n(161),n(40);var u=r.a.createContext({}),l=function(t){return r.a.createElement(u.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},161:function(t,e,n){var a;t.exports=(a=n(163))&&a.default||a},162:function(t,e,n){"use strict";var a=n(8),r=n.n(a),i=(n(167),n(164),n(168),n(170),n(0)),o=n.n(i),c=n(160),s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,r=e.children;return t="/"===n.pathname?o.a.createElement("div",{className:"container pt-5"}):o.a.createElement("h4",{className:"display-5 py-5 px-3 font-weight-light text-muted"},o.a.createElement(c.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),o.a.createElement("div",{className:"container"},t,r)},e}(o.a.Component);e.a=s},163:function(t,e,n){"use strict";n.r(e);n(41);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(57),s=n(1),u=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},165:function(t,e,n){"use strict";var a=n(166),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(171),u=n.n(s),l=n(160);function d(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,c=t.title;return i.a.createElement(l.b,{query:p,render:function(t){var a=e||t.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=d;var p="2515784693"},166:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"stackcheats","description":"Static Site Generator for stackcheats","author":"Athiththan"}}}}')}}]);
//# sourceMappingURL=component---src-pages-404-js-a7178f05aaabdd215594.js.map