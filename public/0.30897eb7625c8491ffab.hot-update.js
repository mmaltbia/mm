webpackHotUpdate(0,{

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(143); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(143);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Nav = function (_React$Component) {
	    _inherits(Nav, _React$Component);
	
	    function Nav() {
	        _classCallCheck(this, Nav);
	
	        return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
	    }
	
	    _createClass(Nav, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { id: "wrapper" },
	                _react2.default.createElement(
	                    "div",
	                    { id: "sidebar-wrapper" },
	                    _react2.default.createElement(
	                        "ul",
	                        { "class": "sidebar-nav" },
	                        _react2.default.createElement(
	                            "li",
	                            { "class": "sidebar-brand" },
	                            _react2.default.createElement(
	                                "a",
	                                { href: "#" },
	                                "Start Bootstrap"
	                            )
	                        ),
	                        _react2.default.createElement(
	                            "li",
	                            null,
	                            _react2.default.createElement(
	                                "a",
	                                { href: "#" },
	                                "Dashboard"
	                            )
	                        ),
	                        _react2.default.createElement(
	                            "li",
	                            null,
	                            _react2.default.createElement(
	                                "a",
	                                { href: "#" },
	                                "Shortcuts"
	                            )
	                        ),
	                        _react2.default.createElement(
	                            "li",
	                            null,
	                            _react2.default.createElement(
	                                "a",
	                                { href: "#" },
	                                "Overview"
	                            )
	                        ),
	                        _react2.default.createElement(
	                            "li",
	                            null,
	                            _react2.default.createElement(
	                                "a",
	                                { href: "#" },
	                                "Events"
	                            )
	                        ),
	                        _react2.default.createElement(
	                            "li",
	                            null,
	                            _react2.default.createElement(
	                                "a",
	                                { href: "#" },
	                                "About"
	                            )
	                        ),
	                        _react2.default.createElement(
	                            "li",
	                            null,
	                            _react2.default.createElement(
	                                "a",
	                                { href: "#" },
	                                "Services"
	                            )
	                        ),
	                        _react2.default.createElement(
	                            "li",
	                            null,
	                            _react2.default.createElement(
	                                "a",
	                                { href: "#" },
	                                "Contact"
	                            )
	                        )
	                    )
	                ),
	                "// /#sidebar-wrapper // Page Content",
	                _react2.default.createElement(
	                    "div",
	                    { id: "page-content-wrapper" },
	                    _react2.default.createElement(
	                        "div",
	                        { "class": "container-fluid" },
	                        _react2.default.createElement(
	                            "div",
	                            { "class": "row" },
	                            _react2.default.createElement(
	                                "div",
	                                { "class": "col-lg-12" },
	                                _react2.default.createElement(
	                                    "h1",
	                                    null,
	                                    "Simple Sidebar"
	                                ),
	                                _react2.default.createElement(
	                                    "p",
	                                    null,
	                                    "This template has a responsive menu toggling system. The menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will appear/disappear. On small screens, the page content will be pushed off canvas."
	                                ),
	                                _react2.default.createElement(
	                                    "p",
	                                    null,
	                                    "Make sure to keep all page content within the ",
	                                    _react2.default.createElement(
	                                        "code",
	                                        null,
	                                        "#page-content-wrapper"
	                                    ),
	                                    "."
	                                ),
	                                _react2.default.createElement(
	                                    "a",
	                                    { href: "#menu-toggle", "class": "btn btn-default", id: "menu-toggle" },
	                                    "Toggle Menu"
	                                )
	                            )
	                        )
	                    )
	                ),
	                "// /#page-content-wrapper"
	            )
	            // /#wrapper
	            ;
	        }
	    }]);
	
	    return Nav;
	}(_react2.default.Component);
	
	exports.default = Nav;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(307); if (makeExportsHot(module, __webpack_require__(143))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "nav.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXYuanM/NmI5YiJdLCJuYW1lcyI6WyJOYXYiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7S0FFcUJBLEc7Ozs7Ozs7Ozs7O2tDQUVYO0FBQ1Isb0JBQ0M7QUFBQTtBQUFBLG1CQUFLLElBQUcsU0FBUjtBQUdLO0FBQUE7QUFBQSx1QkFBSyxJQUFHLGlCQUFSO0FBQ0k7QUFBQTtBQUFBLDJCQUFJLFNBQU0sYUFBVjtBQUNJO0FBQUE7QUFBQSwrQkFBSSxTQUFNLGVBQVY7QUFDSTtBQUFBO0FBQUEsbUNBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQURKLDBCQURKO0FBTUk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLG1DQUFHLE1BQUssR0FBUjtBQUFBO0FBQUE7QUFESiwwQkFOSjtBQVNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxtQ0FBRyxNQUFLLEdBQVI7QUFBQTtBQUFBO0FBREosMEJBVEo7QUFZSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsbUNBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQURKLDBCQVpKO0FBZUk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLG1DQUFHLE1BQUssR0FBUjtBQUFBO0FBQUE7QUFESiwwQkFmSjtBQWtCSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsbUNBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQURKLDBCQWxCSjtBQXFCSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsbUNBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQURKLDBCQXJCSjtBQXdCSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsbUNBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQURKO0FBeEJKO0FBREosa0JBSEw7QUFBQTtBQW9DSztBQUFBO0FBQUEsdUJBQUssSUFBRyxzQkFBUjtBQUNJO0FBQUE7QUFBQSwyQkFBSyxTQUFNLGlCQUFYO0FBQ0k7QUFBQTtBQUFBLCtCQUFLLFNBQU0sS0FBWDtBQUNJO0FBQUE7QUFBQSxtQ0FBSyxTQUFNLFdBQVg7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQWlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBQWpEO0FBQUE7QUFBQSxrQ0FISjtBQUlJO0FBQUE7QUFBQSx1Q0FBRyxNQUFLLGNBQVIsRUFBdUIsU0FBTSxpQkFBN0IsRUFBK0MsSUFBRyxhQUFsRDtBQUFBO0FBQUE7QUFKSjtBQURKO0FBREo7QUFESixrQkFwQ0w7QUFBQTtBQUFBO0FBbURDO0FBcERGO0FBc0RBOzs7O0dBekQrQixnQkFBTUMsUzs7bUJBQWxCRCxHIiwiZmlsZSI6IjAuMzA4OTdlYjc2MjVjODQ5MWZmYWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPVwid3JhcHBlclwiPlxuXG4gICAgICAgIHsvKlNpZGViYXIqL31cbiAgICAgICAgPGRpdiBpZD1cInNpZGViYXItd3JhcHBlclwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwic2lkZWJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzaWRlYmFyLWJyYW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBTdGFydCBCb290c3RyYXBcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkRhc2hib2FyZDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5TaG9ydGN1dHM8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+T3ZlcnZpZXc8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+RXZlbnRzPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkFib3V0PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlNlcnZpY2VzPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkNvbnRhY3Q8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAvLyAvI3NpZGViYXItd3JhcHBlclxuXG4gICAgICAgIC8vIFBhZ2UgQ29udGVudFxuICAgICAgICA8ZGl2IGlkPVwicGFnZS1jb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5TaW1wbGUgU2lkZWJhcjwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGlzIHRlbXBsYXRlIGhhcyBhIHJlc3BvbnNpdmUgbWVudSB0b2dnbGluZyBzeXN0ZW0uIFRoZSBtZW51IHdpbGwgYXBwZWFyIGNvbGxhcHNlZCBvbiBzbWFsbGVyIHNjcmVlbnMsIGFuZCB3aWxsIGFwcGVhciBub24tY29sbGFwc2VkIG9uIGxhcmdlciBzY3JlZW5zLiBXaGVuIHRvZ2dsZWQgdXNpbmcgdGhlIGJ1dHRvbiBiZWxvdywgdGhlIG1lbnUgd2lsbCBhcHBlYXIvZGlzYXBwZWFyLiBPbiBzbWFsbCBzY3JlZW5zLCB0aGUgcGFnZSBjb250ZW50IHdpbGwgYmUgcHVzaGVkIG9mZiBjYW52YXMuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TWFrZSBzdXJlIHRvIGtlZXAgYWxsIHBhZ2UgY29udGVudCB3aXRoaW4gdGhlIDxjb2RlPiNwYWdlLWNvbnRlbnQtd3JhcHBlcjwvY29kZT4uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNtZW51LXRvZ2dsZVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgaWQ9XCJtZW51LXRvZ2dsZVwiPlRvZ2dsZSBNZW51PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gLyNwYWdlLWNvbnRlbnQtd3JhcHBlclxuXG4gICAgPC9kaXY+XG4gICAgLy8gLyN3cmFwcGVyXG5cdFx0KTtcblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvbmF2LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==