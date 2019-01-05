(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{176:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"data-entity-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-entity-types","aria-hidden":"true"}},[t._v("#")]),t._v(" Data Entity Types")]),t._v(" "),a("p",[t._v("Vue-storefront uses multiple data entity types to cover the whole scope of storefront.\nDefault entity types are")]),t._v(" "),a("ul",[a("li",[t._v("Product")]),t._v(" "),a("li",[t._v("Category")]),t._v(" "),a("li",[t._v("Attribute")]),t._v(" "),a("li",[t._v("Taxrule")])]),t._v(" "),a("p",[t._v("These entity types were hardcoded and there were no ability to easy use another custom entity type required for customization.")]),t._v(" "),a("p",[t._v("Now Vue-storefront has a new logic to work with entities in the data fetching prospective: Entity Types.")]),t._v(" "),a("p",[t._v("Each search adapter should register an entity type to cover a search feature. Default API and new GraphQL search adapters are updated to register all required existing entity types. But developer can also inject custom entity types to work with some other custom entity type data (eg to get list of offline stores or something else).")]),t._v(" "),a("p",[t._v("To use it, an internal GraphQL server should be updated with adding a corresponding resolver for the new entity type. Also, you can use some other external GraphQL server that already have implemented a resolver for this entity type.")]),t._v(" "),a("p",[t._v("To register such an entity type, you should use "),a("code",[t._v("searchAdapter.registerEntityTypeByQuer")]),t._v("y` method like shown in the example below:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" factory "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("SearchAdapterFactory")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" searchAdapter "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" factory"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getSearchAdapter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'graphql'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsearchAdapter"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("registerEntityTypeByQuery")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'testentity'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  url"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'http://localhost:8080/graphql/'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  query"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./queries/testentity.gql'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  queryProcessor"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" query "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// function that can modify the query each time before it's being executed")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" query"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  resultPorcessor"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resp"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resp "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Invalid graphQl result - null not exepcted'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("hasOwnProperty")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'data'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("processESResponseType")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("testentity"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("stringify")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v("\"Unknown error with graphQl result in resultPorcessor for entity type 'category'\"")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Sample extension "),a("code",[t._v("sample-custom-entity-graphql")]),t._v(" was added to illustrate how it can be used. It injects a custom entity type "),a("code",[t._v("testentity")]),t._v(" and set a custom GraphQL server URL (it is the same as a default api host in the example just because a resolver for this "),a("code",[t._v("testentity")]),t._v(" was added there for testing. But please notice it was removed there)")]),t._v(" "),a("p",[t._v("To test a sample extension with resolver you can add GraphqQL schema file and resolver file in the separate "),a("code",[t._v("src/graphql/elastcisearch/testentity")]),t._v(" folder in the Vue Storefront API.")]),t._v(" "),a("p",[a("code",[t._v("schema.graphqls")]),t._v(" file:")]),t._v(" "),a("div",{staticClass:"language-graphql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-graphql"}},[a("code",[t._v("type Query "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  testentity"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token attr-name"}},[t._v("filter")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TestInput"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ESResponse\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\ninput TestInput\n  "),a("span",{attrs:{class:"token directive function"}},[t._v("@doc")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{attrs:{class:"token attr-name"}},[t._v("description")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"TaxRuleInput specifies the tax rules information to search"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" FilterTypeInput\n    "),a("span",{attrs:{class:"token directive function"}},[t._v("@doc")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token attr-name"}},[t._v("description")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"An ID that uniquely identifies the tax rule"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v("code")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" FilterTypeInput\n    "),a("span",{attrs:{class:"token directive function"}},[t._v("@doc")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{attrs:{class:"token attr-name"}},[t._v("description")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"The unique identifier for an tax rule. This value should be in lowercase letters without spaces."')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v("priority")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" FilterTypeInput "),a("span",{attrs:{class:"token directive function"}},[t._v("@doc")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token attr-name"}},[t._v("description")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Priority of the tax rule"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v("position")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" FilterTypeInput "),a("span",{attrs:{class:"token directive function"}},[t._v("@doc")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token attr-name"}},[t._v("description")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Position of the tax rule"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v("customer_tax_class_ids")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" FilterTypeInput\n    "),a("span",{attrs:{class:"token directive function"}},[t._v("@doc")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token attr-name"}},[t._v("description")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Cunstomer tax class ids of the tax rule"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v("product_tax_class_ids")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" FilterTypeInput\n    "),a("span",{attrs:{class:"token directive function"}},[t._v("@doc")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token attr-name"}},[t._v("description")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Products tax class ids of the tax rule"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v("tax_rate_ids")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" FilterTypeInput\n    "),a("span",{attrs:{class:"token directive function"}},[t._v("@doc")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token attr-name"}},[t._v("description")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Tax rates ids of the tax rule"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v("calculate_subtotal")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" FilterTypeInput\n    "),a("span",{attrs:{class:"token directive function"}},[t._v("@doc")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token attr-name"}},[t._v("description")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Calculating subtotals of the tax rule"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v("rates")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" FilterTypeInput "),a("span",{attrs:{class:"token directive function"}},[t._v("@doc")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token attr-name"}},[t._v("description")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Rates of the tax rule"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Resolver file "),a("code",[t._v("resolver.js")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" config "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'config'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" client "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'../client'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" buildQuery "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'../queryBuilder'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("testentity")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filter"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" query "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("buildQuery")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" filter"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pageSize"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("150")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'taxrule'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" response "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" client"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("search")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    index"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" config"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elasticsearch"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("indices"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    type"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" config"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elasticsearch"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("indexTypes"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("4")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    body"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" query"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" resolver "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Query"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    testentity"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" filter "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("testentity")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filter"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" resolver"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="entity-types.md";s.default=e.exports}}]);