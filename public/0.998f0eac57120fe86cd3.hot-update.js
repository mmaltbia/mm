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
				console.log(firebaseRef + 'Hello');
				// this.firebaseRef = new Firebase('https://media-motion.firebaseio.com/videoBGs')
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h1',
						null,
						'Media Motion'
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

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAuanM/M2NlZCJdLCJuYW1lcyI6WyJ2aWRlb3MiLCJuYW1lIiwidXJsIiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImZpcmViYXNlUmVmIiwiZmlyZWJhc2UiLCJkYXRhYmFzZSIsInJlZiIsImNoaWxkIiwic2V0IiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBR0EsS0FBTUEsU0FBUyxDQUNkO0FBQ0NDLFFBQU0sY0FEUDtBQUVDQyxPQUFLO0FBRk4sRUFEYyxFQUtkO0FBQ0NELFFBQU0sY0FEUDtBQUVDQyxPQUFLO0FBRk4sRUFMYyxDQUFmOztLQVdxQkMsRzs7O0FBQ3BCLGVBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSx5R0FDWEEsS0FEVzs7QUFHakIsU0FBS0MsS0FBTCxHQUFhO0FBQ1pMO0FBRFksSUFBYjtBQUhpQjtBQU1qQjs7Ozt3Q0FFbUI7QUFDbkIsUUFBSU0sY0FBY0MsU0FBU0MsUUFBVCxHQUFvQkMsR0FBcEIsRUFBbEI7QUFDQUgsZ0JBQVlJLEtBQVosQ0FBa0IsVUFBbEIsRUFBOEJDLEdBQTlCLENBQWtDLHNFQUFsQztBQUNBQyxZQUFRQyxHQUFSLENBQVlQLGNBQWMsT0FBMUI7QUFDQTtBQUNBOzs7NEJBRVE7QUFDUixXQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERDtBQUVDLDREQUFhLFFBQVEsS0FBS0QsS0FBTCxDQUFXTCxNQUFoQyxHQUZEO0FBQUE7QUFBQSxLQUREO0FBT0E7Ozs7R0F4QitCLGdCQUFNYyxTOzttQkFBbEJYLEciLCJmaWxlIjoiMC45OThmMGVhYzU3MTIwZmU4NmNkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBWaWRlb0JHTGlzdCBmcm9tICcuL3ZpZGVvLWJnLWxpc3QnO1xuXG5cbmNvbnN0IHZpZGVvcyA9IFtcblx0e1xuXHRcdG5hbWU6ICdHb2xkIEdsaXR0ZXInLFxuXHRcdHVybDogJ2h0dHBzOi8veW91dHUuYmUvNDNuZ2tjMkVqZ3c/bGlzdD1QTFpTM1VwZ00yektNV2tjYkpuNVBTNUZoWkZtZVVNb3pTJ1xuXHR9LCBcblx0e1xuXHRcdG5hbWU6ICdMaW5lIG9mIEZpcmUnLFxuXHRcdHVybDogJ2h0dHBzOi8veW91dHUuYmUvaENtcGdBbjlxMEE/bGlzdD1QTFpTM1VwZ00yektNV2tjYkpuNVBTNUZoWkZtZVVNb3pTJyBcblx0fVxuXVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHZpZGVvc1xuXHRcdH07IFxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCl7XG5cdFx0dmFyIGZpcmViYXNlUmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoKTtcblx0XHRmaXJlYmFzZVJlZi5jaGlsZCgndmlkZW9CR3MnKS5zZXQoJ2h0dHBzOi8veW91dHUuYmUvNDNuZ2tjMkVqZ3c/bGlzdD1QTFpTM1VwZ00yektNV2tjYkpuNVBTNUZoWkZtZVVNb3pTJylcblx0XHRjb25zb2xlLmxvZyhmaXJlYmFzZVJlZiArICdIZWxsbycpO1xuXHRcdC8vIHRoaXMuZmlyZWJhc2VSZWYgPSBuZXcgRmlyZWJhc2UoJ2h0dHBzOi8vbWVkaWEtbW90aW9uLmZpcmViYXNlaW8uY29tL3ZpZGVvQkdzJylcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGgxPk1lZGlhIE1vdGlvbjwvaDE+XG5cdFx0XHRcdDxWaWRlb0JHTGlzdCB2aWRlb3M9e3RoaXMuc3RhdGUudmlkZW9zfS8+XG5cdFx0XHRcdGNvbnNvbGUubG9nKGZpcmViYXNlUmVmKTtcblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=