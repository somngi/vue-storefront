(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{151:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Cart Store is designed to handle all actions related the shopping cart.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),s("p",[t._v("Cart state is automatically loaded from "),s("code",[t._v("localForage")]),t._v(" collection after page has been loaded whenever "),s("code",[t._v("core/components/blocks/Microcart.vue")]),t._v(" is included. The cart state is loaded by dispatching "),s("code",[t._v("cart/load")]),t._v(" action and "),s("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/c43b2966a9ae10661e5a62b10445403ed9789b32/core/store/index.js#L118",target:"_blank",rel:"noopener noreferrer"}},[t._v("stored automatically by any change to the cart state"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("The cart state data:")]),t._v(" "),s("ul",[t._m(3),t._v(" "),s("li",[s("code",[t._v("platformTotals")]),t._v(" - similarly to above item, here we have the full totals from Magento for the current shopping cart. These collections are populated by "),s("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/c43b2966a9ae10661e5a62b10445403ed9789b32/core/store/modules/cart/actions.js#L49",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("cart/serverTotals")]),s("OutboundLink")],1),t._v(" and the event handler for "),s("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/c43b2966a9ae10661e5a62b10445403ed9789b32/core/store/modules/cart/index.js#L30",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("servercart-after-totals")]),s("OutboundLink")],1)]),t._v(" "),t._m(4),t._v(" "),s("li",[s("code",[t._v("cartServerPullAt")]),t._v(" (int) - timestamp for the last server cart synchronization set by "),s("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/c43b2966a9ae10661e5a62b10445403ed9789b32/core/store/modules/cart/index.js#L45",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("servercart-after-pulled")]),s("OutboundLink")],1),t._v(" - enabled when "),s("code",[t._v("cart/synchronize")]),t._v(" is set to true in the config,")]),t._v(" "),s("li",[s("code",[t._v("cartServerTotalsAt")]),t._v(" - (int) timestamp for the latest server totals synchronization set by "),s("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/c43b2966a9ae10661e5a62b10445403ed9789b32/core/store/modules/cart/index.js#L30",target:"_blank",rel:"noopener noreferrer"}},[t._v("'servercart-after-totals`"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("code",[t._v("cartServerCreatedAt")]),t._v(" - (int) timestamp for the last server cart id sync set by "),s("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/c43b2966a9ae10661e5a62b10445403ed9789b32/core/store/modules/cart/index.js#L8",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("servercart-after-created")]),s("OutboundLink")],1)]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("li",[s("code",[t._v("cartItems")]),t._v(" - collection of the cart items; the item format is the same as described in "),s("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/master/doc/ElasticSearch%20data%20formats.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("ElasticSearch Data formats"),s("OutboundLink")],1),t._v(" - the "),s("code",[t._v("product")]),t._v(" class; the only difference is that the (int) "),s("code",[t._v("qty")]),t._v(" field is added")])]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),s("ul",[s("li",[s("code",[t._v("EventBus.$emit('cart-after-itemchanged', { item: cartItem })")]),t._v(" - executed after "),s("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/c43b2966a9ae10661e5a62b10445403ed9789b32/core/store/modules/cart/index.js#L108",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("servercart-after-itemupdated")]),s("OutboundLink")],1),t._v(" - after server cart sync, that signalize the specific shopping cart item has been changed; "),s("code",[t._v("Microcart/Product.vue")]),t._v(" component is subscribed to this event to refresh the shopping cart UI")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),s("li",[s("code",[t._v("EventBus.$emit('cart-before-itemchanged', { item: record })")]),t._v(" - item called before the specific item properties are going to be changed; for example called when "),s("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/c43b2966a9ae10661e5a62b10445403ed9789b32/core/store/modules/cart/index.js#L108",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("servercart-after-itemupdated")]),s("OutboundLink")],1),t._v(" is going to change the "),s("code",[t._v("server_item_id")]),t._v(" property")]),t._v(" "),s("li",[s("code",[t._v("EventBus.$emit('cart-after-itemchanged', { item: record })")]),t._v(" - item called after the specific item properites has been changed; for example called when "),s("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/c43b2966a9ae10661e5a62b10445403ed9789b32/core/store/modules/cart/index.js#L108",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("servercart-after-itemupdated")]),s("OutboundLink")],1),t._v(" is going to change the "),s("code",[t._v("server_item_id")]),t._v(" property")]),t._v(" "),t._m(15),t._v(" "),t._m(16)]),t._v(" "),t._m(17),t._v(" "),s("p",[t._v("The cart store provides following public actions:")]),t._v(" "),t._m(18),t._v(" "),s("p",[t._v("Helper method used to clear the current server cart id (used for cart synchronization)")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),s("p",[t._v("Action is dispatched to create the server cart and store the cart id (for further synchronization)")]),t._v(" "),t._m(28),t._v(" "),s("p",[t._v("Actions called whenever the shopping cart item should be synchronized with server side (pushes changes to the server). Basically this method is called within "),s("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/c43b2966a9ae10661e5a62b10445403ed9789b32/core/store/modules/cart/index.js#L45",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("servercart-after-pulled")]),s("OutboundLink")],1)]),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),s("p",[t._v("This action is used for search the particular item in the shopping cart (by SKU)")]),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),s("p",[t._v("This method sends request to the backend to collect cart totals. It calls different backend endpoints depending on if payment and shipping methods information is available or not.")]),t._v(" "),t._m(43),t._v(" "),s("p",[t._v("All state members should have been accessed only by getters. Please take a look at the state reference for data formats")]),t._v(" "),t._m(44)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"cart-vuex-store"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cart-vuex-store","aria-hidden":"true"}},[this._v("#")]),this._v(" Cart Vuex Store")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"state"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#state","aria-hidden":"true"}},[this._v("#")]),this._v(" State")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  state"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    itemsAfterPlatformTotals"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    platformTotals"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("null")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    platformTotalSegments"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("null")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    cartIsLoaded"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    cartServerPullAt"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    cartServerTotalsAt"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    cartServerCreatedAt"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    cartSavedAt"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bypassToAnon"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    cartServerToken"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("''")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// server side ID to synchronize with Backend (for example Magento)")]),t._v("\n    shipping"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    payment"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    cartItems"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// TODO: check if it's properly namespaced")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("itemsAfterPlatformTotals")]),this._v(" - helper collection, dictionary where the key is Magento cart item "),e("code",[this._v("item_id")]),this._v(" that stores the totals information per item - received from Magento; it's automatically populated when "),e("code",[this._v("config.cart.synchronize_totals")]),this._v(" is enabled;")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("cartIsLoaded")]),this._v(" (bool) - true after dispatching "),e("code",[this._v("cart/load")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("cartSavedAt")]),this._v(" - (int) timestamp for the latest cart - localForage (local browser) state sync,")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("bypassToAnon")]),this._v(" - (bool) whenever there is a client's quote lock on the cart (for example the cart is currently in sync with Magento etc.) we're using the guest cart for current order; in that case this value is set to true,")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("shipping")]),this._v(" - (object) currently selected shipping method - only when NOT using "),e("code",[this._v("cart.synchronize_totals")]),this._v(" (if so, the shipping and payment's data comes from Magento2),")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("payment")]),this._v(" - (object) currently selected shipping method - only when NOT using "),e("code",[this._v("cart.synchronize_totals")]),this._v(" (if so, the shipping and payment's data comes from Magento2),")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[this._v("#")]),this._v(" Events")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The following events are published from "),e("code",[this._v("cart")]),this._v(" store:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("EventBus.$emit('cart-before-add', { product: item })")]),this._v(" - fired after product has been added to the cart,")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("EventBus.$emit('cart-before-save', { items: state.cartItems })")]),this._v(" - fired after the product cart has been saved,")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("EventBus.$emit('cart-before-delete', { items: state.cartItems })")]),this._v(" - the event fired before the cart item is going to be deleted with the current cart state (before item is deleted)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("EventBus.$emit('cart-after-delete', { items: state.cartItems })")]),this._v(" - the event fired before the cart item has been deleted with the current cart state (after item is deleted)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("EventBus.$emit('application-after-loaded')")]),this._v(" - event called after "),e("code",[this._v("cart/load")]),this._v(" action has been dispatched to notify that cart is being available,")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("EventBus.$emit('cart-after-updatetotals', { platformTotals: totals, platformTotalSegments: platformTotalSegments })")]),this._v(" - event called after the totals from Magento has been synchronized with current state; it's going to be emitted only when "),e("code",[this._v("cart.synchronize_totals")]),this._v(" option is enabled.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Actions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"servertokenclear-context"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#servertokenclear-context","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("serverTokenClear (context)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"clear-context"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clear-context","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("clear (context)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This method is called after order has been placed to empty the "),e("code",[this._v("cartItems")]),this._v(" collection and create the new server cart when the "),e("code",[this._v("cart.synchronize_totals")]),this._v(" is set to true")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"save-context"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#save-context","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("save (context)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Method used to save the cart to the "),e("code",[this._v("localForage")]),this._v(" browser collection")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"serverpull-context-forceclientstate-false"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serverpull-context-forceclientstate-false","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("serverPull (context, { forceClientState = false })")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This method is used to synchronize the current state of the cart items back and forth between server and current client state. When the "),e("code",[this._v("forceClientState")]),this._v(" is set to false the communication is one-way only (client -> server). This action is called automatically on any shopping cart change when the "),e("code",[this._v("cart.synchronize")]),this._v(" is set to true.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"servertotals-context-forceclientstate-false"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#servertotals-context-forceclientstate-false","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("serverTotals (context, { forceClientState = false })")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Method is called whenever the cart totals should have been synchronized with the server (after "),e("code",[this._v("serverPull")]),this._v("). This method overrides local shopping cart grand totals and specific item values (for example prices after discount).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"servercreate-context-guestcart-false"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#servercreate-context-guestcart-false","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("serverCreate (context, { guestCart = false })")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"serverupdateitem-context-cartitem-serverdeleteitem-context-cartitem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serverupdateitem-context-cartitem-serverdeleteitem-context-cartitem","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("serverUpdateItem (context, cartItem)")]),this._v(", "),e("code",[this._v("serverDeleteItem (context, cartItem)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"load-context"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#load-context","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("load (context)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This method loads the cart items from "),e("code",[this._v("localForage")]),this._v(" browser state management.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"getitem-commit-dispatch-state-sku"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getitem-commit-dispatch-state-sku","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("getItem ({ commit, dispatch, state }, sku)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"additem-commit-dispatch-state-producttoadd-forceserversilence-false"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#additem-commit-dispatch-state-producttoadd-forceserversilence-false","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("addItem ({ commit, dispatch, state }, { productToAdd, forceServerSilence = false })")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("This action is used to add the "),s("code",[t._v("productToAdd")]),t._v(" to the cart, if "),s("code",[t._v("config.cart.synchronize")]),t._v(" is set to true the next action subsequently called will be "),s("code",[t._v("serverPull")]),t._v(" to synchronize the cart. The event "),s("code",[t._v("cart-before-add")]),t._v(" is called whenever new product lands in the shopping cart. The option "),s("code",[t._v("forceServerSilence")]),t._v(" is used to bypass the server synchronization and it's used for example then the item is added during the ... sync process to avoid circular synchronization cycles.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"removeitem-commit-dispatch-product"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#removeitem-commit-dispatch-product","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("removeItem ({ commit, dispatch }, product)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("As you may imagine 😃 This action simply removes the product from the shopping cart and synchronizes the server cart when set. You must at least specify the "),e("code",[this._v("product.sku")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"updatequantity-commit-dispatch-product-qty-forceserversilence-false"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updatequantity-commit-dispatch-product-qty-forceserversilence-false","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("updateQuantity ({ commit, dispatch }, { product, qty, forceServerSilence = false })")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This method is called whenever user changes the quantity of product in the cart (called from "),e("code",[this._v("Microcart.vue")]),this._v("). The parameter "),e("code",[this._v("qty")]),this._v(" is the new quantity of product and by using "),e("code",[this._v("forceServerSilence")]),this._v(" you may control if the server cart synchronization is being executed or not.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"getpaymentmethods-context"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getpaymentmethods-context","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("getPaymentMethods (context)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Gets a list of payment methods from the backend and saves them to "),e("code",[this._v("cart.payment")]),this._v(" store state.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"getshippingmethods-context-address"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getshippingmethods-context-address","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("getShippingMethods (context, address)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Gets a list of shipping methods from the backend and saves them to "),e("code",[this._v("cart.shipping")]),this._v(" store state. Country ID is passed to this method in a mandatory "),e("code",[this._v("address")]),this._v(" parameter.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"refreshtotals-context-methodsdata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#refreshtotals-context-methodsdata","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("refreshTotals (context, methodsData)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"getters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getters","aria-hidden":"true"}},[this._v("#")]),this._v(" Getters")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" getters "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  current"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" state "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" state"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  list"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" state "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" state"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);r.options.__file="cart-store.md";e.default=r.exports}}]);