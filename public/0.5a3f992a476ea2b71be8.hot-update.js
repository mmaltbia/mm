webpackHotUpdate(0,{

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(143); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(308);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _react = __webpack_require__(143);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _videoBgListItem = __webpack_require__(309);
	
	var _videoBgListItem2 = _interopRequireDefault(_videoBgListItem);
	
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
				return _lodash2.default.map(this.props.videos, function (video, index) {
					return _react2.default.createElement(_videoBgListItem2.default, _extends({ key: index }, video));
				});
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					this.renderMedia()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWRlby1iZy1saXN0LmpzPzQxZGYiXSwibmFtZXMiOlsiVmlkZW9CR0xpc3QiLCJtYXAiLCJwcm9wcyIsInZpZGVvcyIsInZpZGVvIiwiaW5kZXgiLCJyZW5kZXJNZWRpYSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVxQkEsVzs7Ozs7Ozs7Ozs7aUNBRVA7QUFDWixXQUFPLGlCQUFFQyxHQUFGLENBQU0sS0FBS0MsS0FBTCxDQUFXQyxNQUFqQixFQUF5QixVQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSxZQUFrQixvRUFBaUIsS0FBS0EsS0FBdEIsSUFBaUNELEtBQWpDLEVBQWxCO0FBQUEsS0FBekIsQ0FBUDtBQUNBOzs7NEJBRVE7QUFDUixXQUNDO0FBQUE7QUFBQTtBQUNFLFVBQUtFLFdBQUw7QUFERixLQUREO0FBS0E7Ozs7R0FadUMsZ0JBQU1DLFM7O21CQUExQlAsVyIsImZpbGUiOiIwLjVhM2Y5OTJhNDc2ZWEyYjcxYmU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBWaWRlb0JHTGlzdEl0ZW0gZnJvbSAnLi92aWRlby1iZy1saXN0LWl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlb0JHTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdCBcblx0cmVuZGVyTWVkaWEoKXtcblx0XHRyZXR1cm4gXy5tYXAodGhpcy5wcm9wcy52aWRlb3MsICh2aWRlbywgaW5kZXgpID0+IDxWaWRlb0JHTGlzdEl0ZW0ga2V5PXtpbmRleH0gey4uLnZpZGVvfSAvPik7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdHt0aGlzLnJlbmRlck1lZGlhKCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy92aWRlby1iZy1saXN0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==