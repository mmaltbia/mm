webpackHotUpdate(0,{

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(143); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
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
	
	var VideoBGList = function (_React$Component) {
		_inherits(VideoBGList, _React$Component);
	
		function VideoBGList() {
			_classCallCheck(this, VideoBGList);
	
			return _possibleConstructorReturn(this, (VideoBGList.__proto__ || Object.getPrototypeOf(VideoBGList)).apply(this, arguments));
		}
	
		_createClass(VideoBGList, [{
			key: 'renderMedia',
			value: function renderMedia() {
				var videos = this.props.videos;
				for (i = 0; i <= videos.length; i++) {
					console.log(i);
				}
			}
		}, {
			key: 'render',
			value: function render() {
				console.log(this.props.videos);
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'ul',
						null,
						this.renderMedia()
					)
				);
			}
		}]);
	
		return VideoBGList;
	}(_react2.default.Component);
	
	exports.default = VideoBGList;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(304); if (makeExportsHot(module, __webpack_require__(143))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "video-bg-list.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWRlby1iZy1saXN0LmpzPzQxZGYiXSwibmFtZXMiOlsiVmlkZW9CR0xpc3QiLCJ2aWRlb3MiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyTWVkaWEiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7S0FFcUJBLFc7Ozs7Ozs7Ozs7O2lDQUdQO0FBQ1osUUFBSUMsU0FBUyxLQUFLQyxLQUFMLENBQVdELE1BQXhCO0FBQ0EsU0FBSUUsSUFBRSxDQUFOLEVBQVNBLEtBQUlGLE9BQU9HLE1BQXBCLEVBQTRCRCxHQUE1QixFQUFnQztBQUMvQkUsYUFBUUMsR0FBUixDQUFZSCxDQUFaO0FBQ0E7QUFDRDs7OzRCQUVRO0FBQ1JFLFlBQVFDLEdBQVIsQ0FBWSxLQUFLSixLQUFMLENBQVdELE1BQXZCO0FBQ0EsV0FDQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFDRSxXQUFLTSxXQUFMO0FBREY7QUFERCxLQUREO0FBT0E7Ozs7R0FuQnVDLGdCQUFNQyxTOzttQkFBMUJSLFciLCJmaWxlIjoiMC5lMzA2YzU0MWExYzBiOWFlYWY5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW9CR0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRcblxuXHRyZW5kZXJNZWRpYSgpe1xuXHRcdHZhciB2aWRlb3MgPSB0aGlzLnByb3BzLnZpZGVvcztcblx0XHRmb3IoaT0wOyBpPD0gdmlkZW9zLmxlbmd0aDsgaSsrKXtcblx0XHRcdGNvbnNvbGUubG9nKGkpO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnByb3BzLnZpZGVvcyk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDx1bD5cblx0XHRcdFx0XHR7dGhpcy5yZW5kZXJNZWRpYSgpfVxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdmlkZW8tYmctbGlzdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=