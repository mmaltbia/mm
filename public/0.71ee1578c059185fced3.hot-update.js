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
					_react2.default.createElement(_nav2.default, null),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAuanM/M2NlZCJdLCJuYW1lcyI6WyJ2aWRlb3MiLCJuYW1lIiwidXJsIiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImZpcmViYXNlUmVmIiwiZmlyZWJhc2UiLCJkYXRhYmFzZSIsInJlZiIsImNoaWxkIiwic2V0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUdBLEtBQU1BLFNBQVMsQ0FDZDtBQUNDQyxRQUFNLGNBRFA7QUFFQ0MsT0FBSztBQUZOLEVBRGMsRUFLZDtBQUNDRCxRQUFNLGNBRFA7QUFFQ0MsT0FBSztBQUZOLEVBTGMsQ0FBZjs7S0FXcUJDLEc7OztBQUNwQixlQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEseUdBQ1hBLEtBRFc7O0FBR2pCLFNBQUtDLEtBQUwsR0FBYTtBQUNaTDtBQURZLElBQWI7QUFIaUI7QUFNakI7Ozs7d0NBRW1CO0FBQ25CLFFBQUlNLGNBQWNDLFNBQVNDLFFBQVQsR0FBb0JDLEdBQXBCLEVBQWxCO0FBQ0FILGdCQUFZSSxLQUFaLENBQWtCLFVBQWxCLEVBQThCQyxHQUE5QixDQUFrQyxzRUFBbEM7QUFDQTtBQUNBO0FBQ0E7Ozs0QkFFUTtBQUNSLFdBQ0M7QUFBQTtBQUFBLE9BQUssSUFBRyxTQUFSO0FBQ0MsdURBREQ7QUFFTztBQUFBO0FBQUEsUUFBSyxJQUFHLHNCQUFSO0FBQ0k7QUFBQTtBQUFBLFNBQUssV0FBVSxpQkFBZjtBQUNDO0FBQUE7QUFBQSxVQUFHLE1BQUssY0FBUixFQUF1QixXQUFVLGlCQUFqQyxFQUFtRCxJQUFHLGFBQXREO0FBQUE7QUFBQSxRQUREO0FBRUk7QUFBQTtBQUFBLFVBQVEsV0FBVSxpQkFBbEI7QUFBQTtBQUFBLFFBRko7QUFHUiw4REFBYSxRQUFRLEtBQUtOLEtBQUwsQ0FBV0wsTUFBaEM7QUFIUTtBQURKO0FBRlAsS0FERDtBQVlBOzs7O0dBN0IrQixnQkFBTVksUzs7bUJBQWxCVCxHIiwiZmlsZSI6IjAuNzFlZTE1NzhjMDU5MTg1ZmNlZDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVmlkZW9CR0xpc3QgZnJvbSAnLi92aWRlby1iZy1saXN0JztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vbmF2JztcblxuXG5jb25zdCB2aWRlb3MgPSBbXG5cdHtcblx0XHRuYW1lOiAnR29sZCBHbGl0dGVyJyxcblx0XHR1cmw6ICdodHRwczovL3lvdXR1LmJlLzQzbmdrYzJFamd3P2xpc3Q9UExaUzNVcGdNMnpLTVdrY2JKbjVQUzVGaFpGbWVVTW96Uydcblx0fSwgXG5cdHtcblx0XHRuYW1lOiAnTGluZSBvZiBGaXJlJyxcblx0XHR1cmw6ICdodHRwczovL3lvdXR1LmJlL2hDbXBnQW45cTBBP2xpc3Q9UExaUzNVcGdNMnpLTVdrY2JKbjVQUzVGaFpGbWVVTW96UycgXG5cdH1cbl1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR2aWRlb3Ncblx0XHR9OyBcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpe1xuXHRcdHZhciBmaXJlYmFzZVJlZiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCk7XG5cdFx0ZmlyZWJhc2VSZWYuY2hpbGQoJ3ZpZGVvQkdzJykuc2V0KCdodHRwczovL3lvdXR1LmJlLzQzbmdrYzJFamd3P2xpc3Q9UExaUzNVcGdNMnpLTVdrY2JKbjVQUzVGaFpGbWVVTW96UycpO1xuXHRcdC8vIGNvbnNvbGUubG9nKGZpcmViYXNlUmVmLmNoaWxkKCd2aWRlb0JHcycpO1xuXHRcdC8vIHRoaXMuZmlyZWJhc2VSZWYgPSBuZXcgRmlyZWJhc2UoJ2h0dHBzOi8vbWVkaWEtbW90aW9uLmZpcmViYXNlaW8uY29tL3ZpZGVvQkdzJylcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cIndyYXBwZXJcIj5cblx0XHRcdFx0PFNpZGViYXIgLz5cblx0XHQgICAgICAgIDxkaXYgaWQ9XCJwYWdlLWNvbnRlbnQtd3JhcHBlclwiPlxuXHRcdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cdFx0ICAgICAgICAgICAgXHQ8YSBocmVmPVwiI21lbnUtdG9nZ2xlXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgaWQ9XCJtZW51LXRvZ2dsZVwiPlRvZ2dsZSBNZW51PC9hPlxuXHRcdCAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlVwbG9hZCBCYWNrZ3JvdW5kPC9idXR0b24+IFxuXHRcdFx0XHRcdFx0PFZpZGVvQkdMaXN0IHZpZGVvcz17dGhpcy5zdGF0ZS52aWRlb3N9Lz5cblx0XHQgICAgICAgICAgICA8L2Rpdj5cblx0XHQgICAgICAgIDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==