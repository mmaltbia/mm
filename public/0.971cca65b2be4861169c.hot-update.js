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
				console.log(videos.length);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWRlby1iZy1saXN0LmpzPzQxZGYiXSwibmFtZXMiOlsiVmlkZW9CR0xpc3QiLCJ2aWRlb3MiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJpIiwicmVuZGVyTWVkaWEiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7S0FFcUJBLFc7Ozs7Ozs7Ozs7O2lDQUdQO0FBQ1osUUFBSUMsU0FBUyxLQUFLQyxLQUFMLENBQVdELE1BQXhCO0FBQ0FFLFlBQVFDLEdBQVIsQ0FBWUgsT0FBT0ksTUFBbkI7QUFDQSxTQUFJQyxJQUFFLENBQU4sRUFBU0EsS0FBSUwsT0FBT0ksTUFBcEIsRUFBNEJDLEdBQTVCLEVBQWdDO0FBQy9CSCxhQUFRQyxHQUFSLENBQVlFLENBQVo7QUFDQTtBQUNEOzs7NEJBRVE7QUFDUkgsWUFBUUMsR0FBUixDQUFZLEtBQUtGLEtBQUwsQ0FBV0QsTUFBdkI7QUFDQSxXQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUNFLFdBQUtNLFdBQUw7QUFERjtBQURELEtBREQ7QUFPQTs7OztHQXBCdUMsZ0JBQU1DLFM7O21CQUExQlIsVyIsImZpbGUiOiIwLjk3MWNjYTY1YjJiZTQ4NjExNjljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlb0JHTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdFxuXG5cdHJlbmRlck1lZGlhKCl7XG5cdFx0dmFyIHZpZGVvcyA9IHRoaXMucHJvcHMudmlkZW9zO1xuXHRcdGNvbnNvbGUubG9nKHZpZGVvcy5sZW5ndGgpO1xuXHRcdGZvcihpPTA7IGk8PSB2aWRlb3MubGVuZ3RoOyBpKyspe1xuXHRcdFx0Y29uc29sZS5sb2coaSk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucHJvcHMudmlkZW9zKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdHt0aGlzLnJlbmRlck1lZGlhKCl9XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy92aWRlby1iZy1saXN0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==