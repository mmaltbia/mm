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
	                )
	            );
	        }
	    }]);
	
	    return Nav;
	}(_react2.default.Component);
	
	exports.default = Nav;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(307); if (makeExportsHot(module, __webpack_require__(143))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "nav.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXYuanM/NmI5YiJdLCJuYW1lcyI6WyJOYXYiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7S0FFcUJBLEc7Ozs7Ozs7Ozs7O2tDQUVYO0FBQ1Isb0JBQ0M7QUFBQTtBQUFBLG1CQUFLLElBQUcsU0FBUjtBQUdLO0FBQUE7QUFBQSx1QkFBSyxJQUFHLGlCQUFSO0FBQ0k7QUFBQTtBQUFBLDJCQUFJLFNBQU0sYUFBVjtBQUNJO0FBQUE7QUFBQSwrQkFBSSxTQUFNLGVBQVY7QUFDSTtBQUFBO0FBQUEsbUNBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQURKLDBCQURKO0FBTUk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLG1DQUFHLE1BQUssR0FBUjtBQUFBO0FBQUE7QUFESiwwQkFOSjtBQVNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxtQ0FBRyxNQUFLLEdBQVI7QUFBQTtBQUFBO0FBREosMEJBVEo7QUFZSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsbUNBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQURKLDBCQVpKO0FBZUk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLG1DQUFHLE1BQUssR0FBUjtBQUFBO0FBQUE7QUFESiwwQkFmSjtBQWtCSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsbUNBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQURKLDBCQWxCSjtBQXFCSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsbUNBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQURKLDBCQXJCSjtBQXdCSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsbUNBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQURKO0FBeEJKO0FBREosa0JBSEw7QUFvQ0s7QUFBQTtBQUFBLHVCQUFLLElBQUcsc0JBQVI7QUFDSTtBQUFBO0FBQUEsMkJBQUssU0FBTSxpQkFBWDtBQUNJO0FBQUE7QUFBQSwrQkFBSyxTQUFNLEtBQVg7QUFDSTtBQUFBO0FBQUEsbUNBQUssU0FBTSxXQUFYO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFpRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUFqRDtBQUFBO0FBQUEsa0NBSEo7QUFJSTtBQUFBO0FBQUEsdUNBQUcsTUFBSyxjQUFSLEVBQXVCLFNBQU0saUJBQTdCLEVBQStDLElBQUcsYUFBbEQ7QUFBQTtBQUFBO0FBSko7QUFESjtBQURKO0FBREo7QUFwQ0wsY0FERDtBQXNEQTs7OztHQXpEK0IsZ0JBQU1DLFM7O21CQUFsQkQsRyIsImZpbGUiOiIwLmYxZTk1YjJjM2UxMGMzNDNjNmRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXYgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cIndyYXBwZXJcIj5cblxuICAgICAgICB7LypTaWRlYmFyKi99XG4gICAgICAgIDxkaXYgaWQ9XCJzaWRlYmFyLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInNpZGViYXItbmF2XCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2lkZWJhci1icmFuZFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnQgQm9vdHN0cmFwXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5EYXNoYm9hcmQ8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+U2hvcnRjdXRzPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPk92ZXJ2aWV3PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkV2ZW50czwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5BYm91dDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5TZXJ2aWNlczwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5Db250YWN0PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgaWQ9XCJwYWdlLWNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlNpbXBsZSBTaWRlYmFyPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoaXMgdGVtcGxhdGUgaGFzIGEgcmVzcG9uc2l2ZSBtZW51IHRvZ2dsaW5nIHN5c3RlbS4gVGhlIG1lbnUgd2lsbCBhcHBlYXIgY29sbGFwc2VkIG9uIHNtYWxsZXIgc2NyZWVucywgYW5kIHdpbGwgYXBwZWFyIG5vbi1jb2xsYXBzZWQgb24gbGFyZ2VyIHNjcmVlbnMuIFdoZW4gdG9nZ2xlZCB1c2luZyB0aGUgYnV0dG9uIGJlbG93LCB0aGUgbWVudSB3aWxsIGFwcGVhci9kaXNhcHBlYXIuIE9uIHNtYWxsIHNjcmVlbnMsIHRoZSBwYWdlIGNvbnRlbnQgd2lsbCBiZSBwdXNoZWQgb2ZmIGNhbnZhcy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5NYWtlIHN1cmUgdG8ga2VlcCBhbGwgcGFnZSBjb250ZW50IHdpdGhpbiB0aGUgPGNvZGU+I3BhZ2UtY29udGVudC13cmFwcGVyPC9jb2RlPi48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI21lbnUtdG9nZ2xlXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBpZD1cIm1lbnUtdG9nZ2xlXCI+VG9nZ2xlIE1lbnU8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcblxuICAgIDwvZGl2PlxuICAgIFxuXHRcdCk7XG5cdH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL25hdi5qcyJdLCJzb3VyY2VSb290IjoiIn0=