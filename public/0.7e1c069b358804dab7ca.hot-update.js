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
	
	var _reactBootstrap = __webpack_require__(315);
	
	var _reactBootstrap2 = _interopRequireDefault(_reactBootstrap);
	
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
					{ id: 'wrapper' },
					_react2.default.createElement(_nav2.default, null),
					_react2.default.createElement(
						'div',
						{ id: 'page-content-wrapper' },
						_react2.default.createElement(
							'div',
							{ 'class': 'container-fluid' },
							_react2.default.createElement(
								'button',
								{ className: 'btn btn-primary' },
								'Upload Background'
							),
							_react2.default.createElement(_videoBgList2.default, { videos: this.state.videos })
						)
					)
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
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(143);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(315);
	
	var _reactBootstrap2 = _interopRequireDefault(_reactBootstrap);
	
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
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { id: 'sidebar-wrapper' },
	                _react2.default.createElement(
	                    'ul',
	                    { 'class': 'sidebar-nav' },
	                    _react2.default.createElement(
	                        'li',
	                        { 'class': 'sidebar-brand' },
	                        _react2.default.createElement(
	                            'a',
	                            { href: '#' },
	                            'Start Bootstrap'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            'a',
	                            { href: '#' },
	                            'Dashboard'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            'a',
	                            { href: '#' },
	                            'Shortcuts'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            'a',
	                            { href: '#' },
	                            'Overview'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            'a',
	                            { href: '#' },
	                            'Events'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            'a',
	                            { href: '#' },
	                            'About'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            'a',
	                            { href: '#' },
	                            'Services'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            'a',
	                            { href: '#' },
	                            'Contact'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAuanM/M2NlZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXYuanM/NmI5YiJdLCJuYW1lcyI6WyJ2aWRlb3MiLCJuYW1lIiwidXJsIiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImZpcmViYXNlUmVmIiwiZmlyZWJhc2UiLCJkYXRhYmFzZSIsInJlZiIsImNoaWxkIiwic2V0IiwiQ29tcG9uZW50IiwiTmF2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBR0EsS0FBTUEsU0FBUyxDQUNkO0FBQ0NDLFFBQU0sY0FEUDtBQUVDQyxPQUFLO0FBRk4sRUFEYyxFQUtkO0FBQ0NELFFBQU0sY0FEUDtBQUVDQyxPQUFLO0FBRk4sRUFMYyxDQUFmOztLQVdxQkMsRzs7O0FBQ3BCLGVBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSx5R0FDWEEsS0FEVzs7QUFHakIsU0FBS0MsS0FBTCxHQUFhO0FBQ1pMO0FBRFksSUFBYjtBQUhpQjtBQU1qQjs7Ozt3Q0FFbUI7QUFDbkIsUUFBSU0sY0FBY0MsU0FBU0MsUUFBVCxHQUFvQkMsR0FBcEIsRUFBbEI7QUFDQUgsZ0JBQVlJLEtBQVosQ0FBa0IsVUFBbEIsRUFBOEJDLEdBQTlCLENBQWtDLHNFQUFsQztBQUNBO0FBQ0E7QUFDQTs7OzRCQUVRO0FBQ1IsV0FDQztBQUFBO0FBQUEsT0FBSyxJQUFHLFNBQVI7QUFDQyx1REFERDtBQUVPO0FBQUE7QUFBQSxRQUFLLElBQUcsc0JBQVI7QUFDSTtBQUFBO0FBQUEsU0FBSyxTQUFNLGlCQUFYO0FBQ0k7QUFBQTtBQUFBLFVBQVEsV0FBVSxpQkFBbEI7QUFBQTtBQUFBLFFBREo7QUFFUiw4REFBYSxRQUFRLEtBQUtOLEtBQUwsQ0FBV0wsTUFBaEM7QUFGUTtBQURKO0FBRlAsS0FERDtBQVdBOzs7O0dBNUIrQixnQkFBTVksUzs7bUJBQWxCVCxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCckI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRXFCVSxHOzs7Ozs7Ozs7OztrQ0FFWDtBQUNSLG9CQUVNO0FBQUE7QUFBQSxtQkFBSyxJQUFHLGlCQUFSO0FBQ0k7QUFBQTtBQUFBLHVCQUFJLFNBQU0sYUFBVjtBQUNJO0FBQUE7QUFBQSwyQkFBSSxTQUFNLGVBQVY7QUFDSTtBQUFBO0FBQUEsK0JBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQURKLHNCQURKO0FBTUk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLCtCQUFHLE1BQUssR0FBUjtBQUFBO0FBQUE7QUFESixzQkFOSjtBQVNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSwrQkFBRyxNQUFLLEdBQVI7QUFBQTtBQUFBO0FBREosc0JBVEo7QUFZSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsK0JBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQURKLHNCQVpKO0FBZUk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLCtCQUFHLE1BQUssR0FBUjtBQUFBO0FBQUE7QUFESixzQkFmSjtBQWtCSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsK0JBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQURKLHNCQWxCSjtBQXFCSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsK0JBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQURKLHNCQXJCSjtBQXdCSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsK0JBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQURKO0FBeEJKO0FBREosY0FGTjtBQWtDQTs7OztHQXJDK0IsZ0JBQU1ELFM7O21CQUFsQkMsRyIsImZpbGUiOiIwLjdlMWMwNjliMzU4ODA0ZGFiN2NhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0Qm9vdHN0cmFwIGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgVmlkZW9CR0xpc3QgZnJvbSAnLi92aWRlby1iZy1saXN0JztcbmltcG9ydCBOYXYgZnJvbSAnLi9uYXYnO1xuXG5cbmNvbnN0IHZpZGVvcyA9IFtcblx0e1xuXHRcdG5hbWU6ICdHb2xkIEdsaXR0ZXInLFxuXHRcdHVybDogJ2h0dHBzOi8veW91dHUuYmUvNDNuZ2tjMkVqZ3c/bGlzdD1QTFpTM1VwZ00yektNV2tjYkpuNVBTNUZoWkZtZVVNb3pTJ1xuXHR9LCBcblx0e1xuXHRcdG5hbWU6ICdMaW5lIG9mIEZpcmUnLFxuXHRcdHVybDogJ2h0dHBzOi8veW91dHUuYmUvaENtcGdBbjlxMEE/bGlzdD1QTFpTM1VwZ00yektNV2tjYkpuNVBTNUZoWkZtZVVNb3pTJyBcblx0fVxuXVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHZpZGVvc1xuXHRcdH07IFxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCl7XG5cdFx0dmFyIGZpcmViYXNlUmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoKTtcblx0XHRmaXJlYmFzZVJlZi5jaGlsZCgndmlkZW9CR3MnKS5zZXQoJ2h0dHBzOi8veW91dHUuYmUvNDNuZ2tjMkVqZ3c/bGlzdD1QTFpTM1VwZ00yektNV2tjYkpuNVBTNUZoWkZtZVVNb3pTJyk7XG5cdFx0Ly8gY29uc29sZS5sb2coZmlyZWJhc2VSZWYuY2hpbGQoJ3ZpZGVvQkdzJyk7XG5cdFx0Ly8gdGhpcy5maXJlYmFzZVJlZiA9IG5ldyBGaXJlYmFzZSgnaHR0cHM6Ly9tZWRpYS1tb3Rpb24uZmlyZWJhc2Vpby5jb20vdmlkZW9CR3MnKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPVwid3JhcHBlclwiPlxuXHRcdFx0XHQ8TmF2IC8+XG5cdFx0ICAgICAgICA8ZGl2IGlkPVwicGFnZS1jb250ZW50LXdyYXBwZXJcIj5cblx0XHQgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cdFx0ICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+VXBsb2FkIEJhY2tncm91bmQ8L2J1dHRvbj4gXG5cdFx0XHRcdFx0XHQ8VmlkZW9CR0xpc3QgdmlkZW9zPXt0aGlzLnN0YXRlLnZpZGVvc30vPlxuXHRcdCAgICAgICAgICAgIDwvZGl2PlxuXHRcdCAgICAgICAgPC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hcHAuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0Qm9vdHN0cmFwIGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cbiAgICAgICAgPGRpdiBpZD1cInNpZGViYXItd3JhcHBlclwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwic2lkZWJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzaWRlYmFyLWJyYW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBTdGFydCBCb290c3RyYXBcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkRhc2hib2FyZDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5TaG9ydGN1dHM8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+T3ZlcnZpZXc8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+RXZlbnRzPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkFib3V0PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlNlcnZpY2VzPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkNvbnRhY3Q8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIFxuXHRcdCk7XG5cdH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL25hdi5qcyJdLCJzb3VyY2VSb290IjoiIn0=