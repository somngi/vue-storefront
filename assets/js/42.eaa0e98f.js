(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{168:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"direct-prices-sync-with-magento"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#direct-prices-sync-with-magento","aria-hidden":"true"}},[t._v("#")]),t._v(" Direct prices sync with Magento")]),t._v(" "),a("p",[t._v("As you may observed in our architecture we're synchronizing the whole product catalog with our Elastic Search data store. There are some edge cases among industries when such kind of synchronization may lead to non-invalidated prices and stock quantity problems.")]),t._v(" "),a("p",[t._v("Regarding these challenges we've introduced a special mode which allows vue-storefront to download the prices (in)directly from CMS (Magento or other).")]),t._v(" "),a("p",[t._v("To enable real-time prices sync please do change the following lines in the "),a("code",[t._v("config/local.json")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token property"}},[t._v('"products"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"preventConfigurableChildrenDirectAccess"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"alwaysSyncPlatformPricesOver"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"clearPricesBeforePlatformSync"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"waitForPlatformSync"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"endpoint"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"http://localhost:8080/api/product"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("This means that each time vue-storefront is downloading the product feed from Elastic Search it will call the "),a("code",[t._v("vue-storefront-api")]),t._v(" unified proxy method to get the prices in real time from Magento.")]),t._v(" "),a("p",[t._v("To use this feature you should also modify "),a("code",[t._v("config/local.json")]),t._v(" within your "),a("code",[t._v("vue-storefront-api")]),t._v(" installation:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("\t"),a("span",{attrs:{class:"token property"}},[t._v('"tax"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{attrs:{class:"token property"}},[t._v('"defaultCountry"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"PL"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{attrs:{class:"token property"}},[t._v('"defaultRegion"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('""')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{attrs:{class:"token property"}},[t._v('"calculateServerSide"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{attrs:{class:"token property"}},[t._v('"alwaysSyncPlatformPricesOver"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\t  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[a("em",[t._v("Important note")]),t._v(": As to use the dynamic Magento2 prices sync you should restore the database using "),a("code",[t._v("npm run restore")]),t._v(" within the "),a("code",[t._v("vue-storefront-api")]),t._v(" or re-run "),a("code",[t._v("mage2vuestorefront")]),t._v(' product sync, because a "id" field has been added to the '),a("code",[t._v("configurable_children")]),t._v(" products and it's required for the prices sync")])])}],!1,null,null,null);n.options.__file="direct-prices-sync.md";s.default=n.exports}}]);