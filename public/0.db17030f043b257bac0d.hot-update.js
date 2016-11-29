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
							{ className: 'container-fluid' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAuanM/M2NlZCJdLCJuYW1lcyI6WyJ2aWRlb3MiLCJuYW1lIiwidXJsIiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImZpcmViYXNlUmVmIiwiZmlyZWJhc2UiLCJkYXRhYmFzZSIsInJlZiIsImNoaWxkIiwic2V0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBR0EsS0FBTUEsU0FBUyxDQUNkO0FBQ0NDLFFBQU0sY0FEUDtBQUVDQyxPQUFLO0FBRk4sRUFEYyxFQUtkO0FBQ0NELFFBQU0sY0FEUDtBQUVDQyxPQUFLO0FBRk4sRUFMYyxDQUFmOztLQVdxQkMsRzs7O0FBQ3BCLGVBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSx5R0FDWEEsS0FEVzs7QUFHakIsU0FBS0MsS0FBTCxHQUFhO0FBQ1pMO0FBRFksSUFBYjtBQUhpQjtBQU1qQjs7Ozt3Q0FFbUI7QUFDbkIsUUFBSU0sY0FBY0MsU0FBU0MsUUFBVCxHQUFvQkMsR0FBcEIsRUFBbEI7QUFDQUgsZ0JBQVlJLEtBQVosQ0FBa0IsVUFBbEIsRUFBOEJDLEdBQTlCLENBQWtDLHNFQUFsQztBQUNBO0FBQ0E7QUFDQTs7OzRCQUVRO0FBQ1IsV0FDQztBQUFBO0FBQUEsT0FBSyxJQUFHLFNBQVI7QUFDQyx1REFERDtBQUVPO0FBQUE7QUFBQSxRQUFLLElBQUcsc0JBQVI7QUFDSTtBQUFBO0FBQUEsU0FBSyxXQUFVLGlCQUFmO0FBQ0k7QUFBQTtBQUFBLFVBQVEsV0FBVSxpQkFBbEI7QUFBQTtBQUFBLFFBREo7QUFFUiw4REFBYSxRQUFRLEtBQUtOLEtBQUwsQ0FBV0wsTUFBaEM7QUFGUTtBQURKO0FBRlAsS0FERDtBQVdBOzs7O0dBNUIrQixnQkFBTVksUzs7bUJBQWxCVCxHIiwiZmlsZSI6IjAuZGIxNzAzMGYwNDNiMjU3YmFjMGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RCb290c3RyYXAgZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBWaWRlb0JHTGlzdCBmcm9tICcuL3ZpZGVvLWJnLWxpc3QnO1xuaW1wb3J0IE5hdiBmcm9tICcuL25hdic7XG5cblxuY29uc3QgdmlkZW9zID0gW1xuXHR7XG5cdFx0bmFtZTogJ0dvbGQgR2xpdHRlcicsXG5cdFx0dXJsOiAnaHR0cHM6Ly95b3V0dS5iZS80M25na2MyRWpndz9saXN0PVBMWlMzVXBnTTJ6S01Xa2NiSm41UFM1RmhaRm1lVU1velMnXG5cdH0sIFxuXHR7XG5cdFx0bmFtZTogJ0xpbmUgb2YgRmlyZScsXG5cdFx0dXJsOiAnaHR0cHM6Ly95b3V0dS5iZS9oQ21wZ0FuOXEwQT9saXN0PVBMWlMzVXBnTTJ6S01Xa2NiSm41UFM1RmhaRm1lVU1velMnIFxuXHR9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dmlkZW9zXG5cdFx0fTsgXG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKXtcblx0XHR2YXIgZmlyZWJhc2VSZWYgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigpO1xuXHRcdGZpcmViYXNlUmVmLmNoaWxkKCd2aWRlb0JHcycpLnNldCgnaHR0cHM6Ly95b3V0dS5iZS80M25na2MyRWpndz9saXN0PVBMWlMzVXBnTTJ6S01Xa2NiSm41UFM1RmhaRm1lVU1velMnKTtcblx0XHQvLyBjb25zb2xlLmxvZyhmaXJlYmFzZVJlZi5jaGlsZCgndmlkZW9CR3MnKTtcblx0XHQvLyB0aGlzLmZpcmViYXNlUmVmID0gbmV3IEZpcmViYXNlKCdodHRwczovL21lZGlhLW1vdGlvbi5maXJlYmFzZWlvLmNvbS92aWRlb0JHcycpXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJ3cmFwcGVyXCI+XG5cdFx0XHRcdDxOYXYgLz5cblx0XHQgICAgICAgIDxkaXYgaWQ9XCJwYWdlLWNvbnRlbnQtd3JhcHBlclwiPlxuXHRcdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cdFx0ICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+VXBsb2FkIEJhY2tncm91bmQ8L2J1dHRvbj4gXG5cdFx0XHRcdFx0XHQ8VmlkZW9CR0xpc3QgdmlkZW9zPXt0aGlzLnN0YXRlLnZpZGVvc30vPlxuXHRcdCAgICAgICAgICAgIDwvZGl2PlxuXHRcdCAgICAgICAgPC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hcHAuanMiXSwic291cmNlUm9vdCI6IiJ9