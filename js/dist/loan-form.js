function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

import Loan from "./loan.js";

var LoanForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoanForm, _React$Component);

  function LoanForm(props) {
    var _this;

    _classCallCheck(this, LoanForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoanForm).call(this, props));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleReset = _this.handleReset.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    if (_this.props.loan) {
      _this.state = {
        title: _this.props.loan.title,
        principal: _this.props.loan.principal,
        rate: _this.props.loan.rate * 100,
        //* 100 for display
        term: _this.props.loan.term,
        payment: _this.props.loan.payment(),
        cost: _this.props.loan.title.cost(),
        currentLoan: _this.props.loan
      };
    } else {
      _this.state = {
        title: '',
        principal: '0.00',
        rate: '0.00',
        term: '0',
        payment: '0.00',
        cost: '0.00',
        currentLoan: false
      };
    }

    return _this;
  }

  _createClass(LoanForm, [{
    key: "handleSubmit",
    value: function handleSubmit(evt) {
      evt.preventDefault();
      console.log("submit");

      if (!this.state.currentLoan) {
        this.state.currentLoan = new Loan(); // call the external submit listener

        this.props.submitListener(this.state.currentLoan);
      }

      this.state.currentLoan.set('title', this.state.title);
      this.state.currentLoan.set('principal', +this.state.principal);
      this.state.currentLoan.set('term', +this.state.term);
      this.state.currentLoan.set('rate', +this.state.rate / 100);
      this.setState({
        payment: this.state.currentLoan.payment(),
        cost: this.state.currentLoan.cost()
      });
    }
  }, {
    key: "handleReset",
    value: function handleReset(evt) {
      console.log("reset");
      this.setState({
        title: '',
        principal: '0.00',
        rate: '0.00',
        term: '0',
        payment: '0.00',
        cost: '0.00',
        currentLoan: false
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(evt) {
      console.log("".concat(evt.target.name, " changed..."));
      var obj = {};
      obj[evt.target.getAttribute('name')] = evt.target.value;
      this.setState(obj);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.loan) {
        this.setState({
          title: nextProps.loan.title,
          principal: nextProps.loan.principal,
          rate: nextProps.loan.rate * 100,
          //* 100 for display
          term: nextProps.loan.term,
          payment: nextProps.loan.payment(),
          cost: nextProps.loan.cost(),
          currentLoan: nextProps.loan
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("h3", null, "Loan Entry"), React.createElement("form", {
        onSubmit: this.handleSubmit
      }, React.createElement("div", {
        className: "form-group"
      }, React.createElement("input", {
        type: "text",
        className: "form-control",
        id: "loan-title",
        name: "title",
        placeholder: "title",
        value: this.state.title,
        onChange: this.handleChange
      })), React.createElement("div", {
        className: "input-group"
      }, React.createElement("span", {
        className: "input-group-addon"
      }, "$"), React.createElement("input", {
        type: "number",
        className: "form-control",
        id: "loan-principal",
        name: "principal",
        placeholder: "principal",
        "aria-label": "Amount (to the nearest dollar)",
        step: "1",
        value: this.state.principal,
        onChange: this.handleChange
      }), React.createElement("span", {
        className: "input-group-addon"
      }, ".00")), React.createElement("div", {
        className: "input-group"
      }, React.createElement("input", {
        type: "number",
        step: ".01",
        className: "form-control",
        id: "loan-rate",
        name: "rate",
        placeholder: "rate",
        "aria-label": "Rate (as a percent)",
        value: this.state.rate,
        onChange: this.handleChange
      }), React.createElement("span", {
        className: "input-group-addon"
      }, "%")), React.createElement("div", {
        className: "form-group"
      }, React.createElement("input", {
        type: "number",
        className: "form-control",
        id: "loan-term",
        name: "term",
        placeholder: "term",
        value: this.state.term,
        onChange: this.handleChange
      })), React.createElement("div", {
        className: "form-group"
      }, React.createElement("label", {
        htmlFor: "loan-payment"
      }, "Payment"), React.createElement("span", {
        className: "loan-payment",
        id: "loan-payment",
        value: this.state.payment
      }, "$0.00"), React.createElement("label", {
        htmlFor: "loan-cost"
      }, "Cost"), React.createElement("span", {
        className: "loan-cost  ",
        id: "loan-cost",
        value: this.state.cost
      }, "$0.00")), React.createElement("button", {
        type: "submit",
        className: "btn btn-default"
      }, "Add"), React.createElement("button", {
        onClick: this.handleReset,
        type: "reset",
        className: "btn btn-info"
      }, "Clear")));
    }
  }]);

  return LoanForm;
}(React.Component);

;
export default LoanForm;