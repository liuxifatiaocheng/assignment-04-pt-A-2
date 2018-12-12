function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

//LoanList Component
var LoanList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoanList, _React$Component);

  function LoanList(props) {
    var _this;

    _classCallCheck(this, LoanList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoanList).call(this, props));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(LoanList, [{
    key: "handleClick",
    value: function handleClick(evt) {
      console.log("Click...".concat(evt.target.dataset.idx));
      this.props.clickListener(evt.target.dataset.idx);
    }
  }, {
    key: "handleChange",
    value: function handleChange() {
      this.forceUpdate();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.loans.on('change', this.handleChange);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.loans.length === 0) {
        return React.createElement("div", null, React.createElement("h3", null, "Loan List"), React.createElement("div", {
          className: "list-group"
        }, React.createElement("button", {
          type: "button",
          className: "list-group-item"
        }, "No Loans Entered")));
      } else {
        return React.createElement("div", null, React.createElement("h3", null, "Loan List"), React.createElement("div", {
          className: "list-group"
        }, this.props.loans.map(function (loan, idx) {
          return React.createElement("button", {
            key: idx,
            onClick: _this2.handleClick,
            type: "button",
            className: "list-group-item",
            "data-idx": idx
          }, loan.get('title'));
        })));
      }
    }
  }]);

  return LoanList;
}(React.Component);

;
export default LoanList;