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
					{ id: 'wrapper' },
					_react2.default.createElement(
						'div',
						{ id: 'page-content-wrapper' },
						_react2.default.createElement(
							'div',
							{ className: 'container-fluid' },
							_react2.default.createElement(
								'a',
								{ href: '#menu-toggle', className: 'btn btn-default', id: 'menu-toggle' },
								'Toggle Menu'
							),
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

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAuanM/M2NlZCJdLCJuYW1lcyI6WyJ2aWRlb3MiLCJuYW1lIiwidXJsIiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImZpcmViYXNlUmVmIiwiZmlyZWJhc2UiLCJkYXRhYmFzZSIsInJlZiIsImNoaWxkIiwic2V0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUdBLEtBQU1BLFNBQVMsQ0FDZDtBQUNDQyxRQUFNLGNBRFA7QUFFQ0MsT0FBSztBQUZOLEVBRGMsRUFLZDtBQUNDRCxRQUFNLGNBRFA7QUFFQ0MsT0FBSztBQUZOLEVBTGMsQ0FBZjs7S0FXcUJDLEc7OztBQUNwQixlQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEseUdBQ1hBLEtBRFc7O0FBR2pCLFNBQUtDLEtBQUwsR0FBYTtBQUNaTDtBQURZLElBQWI7QUFIaUI7QUFNakI7Ozs7d0NBRW1CO0FBQ25CLFFBQUlNLGNBQWNDLFNBQVNDLFFBQVQsR0FBb0JDLEdBQXBCLEVBQWxCO0FBQ0FILGdCQUFZSSxLQUFaLENBQWtCLFVBQWxCLEVBQThCQyxHQUE5QixDQUFrQyxzRUFBbEM7QUFDQTtBQUNBO0FBQ0E7Ozs0QkFFUTtBQUNSLFdBRUM7QUFBQTtBQUFBLE9BQUssSUFBRyxTQUFSO0FBQ087QUFBQTtBQUFBLFFBQUssSUFBRyxzQkFBUjtBQUNJO0FBQUE7QUFBQSxTQUFLLFdBQVUsaUJBQWY7QUFDQztBQUFBO0FBQUEsVUFBRyxNQUFLLGNBQVIsRUFBdUIsV0FBVSxpQkFBakMsRUFBbUQsSUFBRyxhQUF0RDtBQUFBO0FBQUEsUUFERDtBQUVJO0FBQUE7QUFBQSxVQUFRLFdBQVUsaUJBQWxCO0FBQUE7QUFBQSxRQUZKO0FBR1IsOERBQWEsUUFBUSxLQUFLTixLQUFMLENBQVdMLE1BQWhDO0FBSFE7QUFESjtBQURQLEtBRkQ7QUFZQTs7OztHQTdCK0IsZ0JBQU1ZLFM7O21CQUFsQlQsRyIsImZpbGUiOiIwLmIwNDFhZTE2ZDcyMjdkZWY0ZDM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFZpZGVvQkdMaXN0IGZyb20gJy4vdmlkZW8tYmctbGlzdCc7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL25hdic7XG5cblxuY29uc3QgdmlkZW9zID0gW1xuXHR7XG5cdFx0bmFtZTogJ0dvbGQgR2xpdHRlcicsXG5cdFx0dXJsOiAnaHR0cHM6Ly95b3V0dS5iZS80M25na2MyRWpndz9saXN0PVBMWlMzVXBnTTJ6S01Xa2NiSm41UFM1RmhaRm1lVU1velMnXG5cdH0sIFxuXHR7XG5cdFx0bmFtZTogJ0xpbmUgb2YgRmlyZScsXG5cdFx0dXJsOiAnaHR0cHM6Ly95b3V0dS5iZS9oQ21wZ0FuOXEwQT9saXN0PVBMWlMzVXBnTTJ6S01Xa2NiSm41UFM1RmhaRm1lVU1velMnIFxuXHR9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dmlkZW9zXG5cdFx0fTsgXG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKXtcblx0XHR2YXIgZmlyZWJhc2VSZWYgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigpO1xuXHRcdGZpcmViYXNlUmVmLmNoaWxkKCd2aWRlb0JHcycpLnNldCgnaHR0cHM6Ly95b3V0dS5iZS80M25na2MyRWpndz9saXN0PVBMWlMzVXBnTTJ6S01Xa2NiSm41UFM1RmhaRm1lVU1velMnKTtcblx0XHQvLyBjb25zb2xlLmxvZyhmaXJlYmFzZVJlZi5jaGlsZCgndmlkZW9CR3MnKTtcblx0XHQvLyB0aGlzLmZpcmViYXNlUmVmID0gbmV3IEZpcmViYXNlKCdodHRwczovL21lZGlhLW1vdGlvbi5maXJlYmFzZWlvLmNvbS92aWRlb0JHcycpXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblxuXHRcdFx0PGRpdiBpZD1cIndyYXBwZXJcIj5cblx0XHQgICAgICAgIDxkaXYgaWQ9XCJwYWdlLWNvbnRlbnQtd3JhcHBlclwiPlxuXHRcdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cdFx0ICAgICAgICAgICAgXHQ8YSBocmVmPVwiI21lbnUtdG9nZ2xlXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgaWQ9XCJtZW51LXRvZ2dsZVwiPlRvZ2dsZSBNZW51PC9hPlxuXHRcdCAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlVwbG9hZCBCYWNrZ3JvdW5kPC9idXR0b24+IFxuXHRcdFx0XHRcdFx0PFZpZGVvQkdMaXN0IHZpZGVvcz17dGhpcy5zdGF0ZS52aWRlb3N9Lz5cblx0XHQgICAgICAgICAgICA8L2Rpdj5cblx0XHQgICAgICAgIDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==