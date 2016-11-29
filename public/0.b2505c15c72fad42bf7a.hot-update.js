webpackHotUpdate(0,{

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(143); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(143);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _videoBgList = __webpack_require__(304);
	
	var _videoBgList2 = _interopRequireDefault(_videoBgList);
	
	var _nav = __webpack_require__(314);
	
	var _nav2 = _interopRequireDefault(_nav);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var videos = [{
		name: 'Gold Glitter',
		url: 'https://youtu.be/43ngkc2Ejgw?list=PLZS3UpgM2zKMWkcbJn5PS5FhZFmeUMozS'
	}, {
		name: 'Line of Fire',
		url: 'https://youtu.be/hCmpgAn9q0A?list=PLZS3UpgM2zKMWkcbJn5PS5FhZFmeUMozS'
	}];
	
	var App = function (_React$Component) {
		_inherits(App, _React$Component);
	
		function App(props) {
			_classCallCheck(this, App);
	
			var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
			_this.state = {
				videos: videos
			};
			return _this;
		}
	
		_createClass(App, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				var firebaseRef = firebase.database().ref();
				firebaseRef.child('videoBGs').set('https://youtu.be/43ngkc2Ejgw?list=PLZS3UpgM2zKMWkcbJn5PS5FhZFmeUMozS');
				// console.log(firebaseRef.child('videoBGs');
				// this.firebaseRef = new Firebase('https://media-motion.firebaseio.com/videoBGs')
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_nav2.default, null),
					_react2.default.createElement(
						'button',
						{ className: 'btn btn-primary' },
						'Upload Background'
					),
					_react2.default.createElement(_videoBgList2.default, { videos: this.state.videos }),
					'console.log(firebaseRef);'
				);
			}
		}]);
	
		return App;
	}(_react2.default.Component);
	
	exports.default = App;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(307); if (makeExportsHot(module, __webpack_require__(143))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "app.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },

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
	                "//Sidebar",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAuanM/M2NlZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXYuanM/NmI5YiJdLCJuYW1lcyI6WyJ2aWRlb3MiLCJuYW1lIiwidXJsIiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImZpcmViYXNlUmVmIiwiZmlyZWJhc2UiLCJkYXRhYmFzZSIsInJlZiIsImNoaWxkIiwic2V0IiwiQ29tcG9uZW50IiwiTmF2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUdBLEtBQU1BLFNBQVMsQ0FDZDtBQUNDQyxRQUFNLGNBRFA7QUFFQ0MsT0FBSztBQUZOLEVBRGMsRUFLZDtBQUNDRCxRQUFNLGNBRFA7QUFFQ0MsT0FBSztBQUZOLEVBTGMsQ0FBZjs7S0FXcUJDLEc7OztBQUNwQixlQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEseUdBQ1hBLEtBRFc7O0FBR2pCLFNBQUtDLEtBQUwsR0FBYTtBQUNaTDtBQURZLElBQWI7QUFIaUI7QUFNakI7Ozs7d0NBRW1CO0FBQ25CLFFBQUlNLGNBQWNDLFNBQVNDLFFBQVQsR0FBb0JDLEdBQXBCLEVBQWxCO0FBQ0FILGdCQUFZSSxLQUFaLENBQWtCLFVBQWxCLEVBQThCQyxHQUE5QixDQUFrQyxzRUFBbEM7QUFDQTtBQUNBO0FBQ0E7Ozs0QkFFUTtBQUNSLFdBQ0M7QUFBQTtBQUFBO0FBQ0MsdURBREQ7QUFFQztBQUFBO0FBQUEsUUFBUSxXQUFVLGlCQUFsQjtBQUFBO0FBQUEsTUFGRDtBQUdDLDREQUFhLFFBQVEsS0FBS04sS0FBTCxDQUFXTCxNQUFoQyxHQUhEO0FBQUE7QUFBQSxLQUREO0FBUUE7Ozs7R0F6QitCLGdCQUFNWSxTOzttQkFBbEJULEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJyQjs7Ozs7Ozs7Ozs7O0tBRXFCVSxHOzs7Ozs7Ozs7OztrQ0FFWDtBQUNSLG9CQUNDO0FBQUE7QUFBQSxtQkFBSyxJQUFHLFNBQVI7QUFBQTtBQUdLO0FBQUE7QUFBQSx1QkFBSyxJQUFHLGlCQUFSO0FBQ0k7QUFBQTtBQUFBLDJCQUFJLFNBQU0sYUFBVjtBQUNJO0FBQUE7QUFBQSwrQkFBSSxTQUFNLGVBQVY7QUFDSTtBQUFBO0FBQUEsbUNBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQURKLDBCQURKO0FBTUk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLG1DQUFHLE1BQUssR0FBUjtBQUFBO0FBQUE7QUFESiwwQkFOSjtBQVNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxtQ0FBRyxNQUFLLEdBQVI7QUFBQTtBQUFBO0FBREosMEJBVEo7QUFZSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsbUNBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQURKLDBCQVpKO0FBZUk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLG1DQUFHLE1BQUssR0FBUjtBQUFBO0FBQUE7QUFESiwwQkFmSjtBQWtCSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsbUNBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQURKLDBCQWxCSjtBQXFCSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsbUNBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQURKLDBCQXJCSjtBQXdCSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsbUNBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQURKO0FBeEJKO0FBREosa0JBSEw7QUFBQTtBQW9DSztBQUFBO0FBQUEsdUJBQUssSUFBRyxzQkFBUjtBQUNJO0FBQUE7QUFBQSwyQkFBSyxTQUFNLGlCQUFYO0FBQ0k7QUFBQTtBQUFBLCtCQUFLLFNBQU0sS0FBWDtBQUNJO0FBQUE7QUFBQSxtQ0FBSyxTQUFNLFdBQVg7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQWlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBQWpEO0FBQUE7QUFBQSxrQ0FISjtBQUlJO0FBQUE7QUFBQSx1Q0FBRyxNQUFLLGNBQVIsRUFBdUIsU0FBTSxpQkFBN0IsRUFBK0MsSUFBRyxhQUFsRDtBQUFBO0FBQUE7QUFKSjtBQURKO0FBREo7QUFESixrQkFwQ0w7QUFBQTtBQUFBO0FBbURDO0FBcERGO0FBc0RBOzs7O0dBekQrQixnQkFBTUQsUzs7bUJBQWxCQyxHIiwiZmlsZSI6IjAuYjI1MDVjMTVjNzJmYWQ0MmJmN2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVmlkZW9CR0xpc3QgZnJvbSAnLi92aWRlby1iZy1saXN0JztcbmltcG9ydCBOYXYgZnJvbSAnLi9uYXYnO1xuXG5cbmNvbnN0IHZpZGVvcyA9IFtcblx0e1xuXHRcdG5hbWU6ICdHb2xkIEdsaXR0ZXInLFxuXHRcdHVybDogJ2h0dHBzOi8veW91dHUuYmUvNDNuZ2tjMkVqZ3c/bGlzdD1QTFpTM1VwZ00yektNV2tjYkpuNVBTNUZoWkZtZVVNb3pTJ1xuXHR9LCBcblx0e1xuXHRcdG5hbWU6ICdMaW5lIG9mIEZpcmUnLFxuXHRcdHVybDogJ2h0dHBzOi8veW91dHUuYmUvaENtcGdBbjlxMEE/bGlzdD1QTFpTM1VwZ00yektNV2tjYkpuNVBTNUZoWkZtZVVNb3pTJyBcblx0fVxuXVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHZpZGVvc1xuXHRcdH07IFxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCl7XG5cdFx0dmFyIGZpcmViYXNlUmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoKTtcblx0XHRmaXJlYmFzZVJlZi5jaGlsZCgndmlkZW9CR3MnKS5zZXQoJ2h0dHBzOi8veW91dHUuYmUvNDNuZ2tjMkVqZ3c/bGlzdD1QTFpTM1VwZ00yektNV2tjYkpuNVBTNUZoWkZtZVVNb3pTJyk7XG5cdFx0Ly8gY29uc29sZS5sb2coZmlyZWJhc2VSZWYuY2hpbGQoJ3ZpZGVvQkdzJyk7XG5cdFx0Ly8gdGhpcy5maXJlYmFzZVJlZiA9IG5ldyBGaXJlYmFzZSgnaHR0cHM6Ly9tZWRpYS1tb3Rpb24uZmlyZWJhc2Vpby5jb20vdmlkZW9CR3MnKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8TmF2IC8+XG5cdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+VXBsb2FkIEJhY2tncm91bmQ8L2J1dHRvbj4gXG5cdFx0XHRcdDxWaWRlb0JHTGlzdCB2aWRlb3M9e3RoaXMuc3RhdGUudmlkZW9zfS8+XG5cdFx0XHRcdGNvbnNvbGUubG9nKGZpcmViYXNlUmVmKTtcblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2FwcC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPVwid3JhcHBlclwiPlxuXG4gICAgICAgIC8vU2lkZWJhclxuICAgICAgICA8ZGl2IGlkPVwic2lkZWJhci13cmFwcGVyXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJzaWRlYmFyLW5hdlwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNpZGViYXItYnJhbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IEJvb3RzdHJhcFxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+RGFzaGJvYXJkPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlNob3J0Y3V0czwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5PdmVydmlldzwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5FdmVudHM8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+QWJvdXQ8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+U2VydmljZXM8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Q29udGFjdDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIC8vIC8jc2lkZWJhci13cmFwcGVyXG5cbiAgICAgICAgLy8gUGFnZSBDb250ZW50XG4gICAgICAgIDxkaXYgaWQ9XCJwYWdlLWNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlNpbXBsZSBTaWRlYmFyPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoaXMgdGVtcGxhdGUgaGFzIGEgcmVzcG9uc2l2ZSBtZW51IHRvZ2dsaW5nIHN5c3RlbS4gVGhlIG1lbnUgd2lsbCBhcHBlYXIgY29sbGFwc2VkIG9uIHNtYWxsZXIgc2NyZWVucywgYW5kIHdpbGwgYXBwZWFyIG5vbi1jb2xsYXBzZWQgb24gbGFyZ2VyIHNjcmVlbnMuIFdoZW4gdG9nZ2xlZCB1c2luZyB0aGUgYnV0dG9uIGJlbG93LCB0aGUgbWVudSB3aWxsIGFwcGVhci9kaXNhcHBlYXIuIE9uIHNtYWxsIHNjcmVlbnMsIHRoZSBwYWdlIGNvbnRlbnQgd2lsbCBiZSBwdXNoZWQgb2ZmIGNhbnZhcy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5NYWtlIHN1cmUgdG8ga2VlcCBhbGwgcGFnZSBjb250ZW50IHdpdGhpbiB0aGUgPGNvZGU+I3BhZ2UtY29udGVudC13cmFwcGVyPC9jb2RlPi48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI21lbnUtdG9nZ2xlXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBpZD1cIm1lbnUtdG9nZ2xlXCI+VG9nZ2xlIE1lbnU8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAvLyAvI3BhZ2UtY29udGVudC13cmFwcGVyXG5cbiAgICA8L2Rpdj5cbiAgICAvLyAvI3dyYXBwZXJcblx0XHQpO1xuXHR9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9uYXYuanMiXSwic291cmNlUm9vdCI6IiJ9