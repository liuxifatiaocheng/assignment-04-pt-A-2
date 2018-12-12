import Events from './events.js';
import Loan from './loan.js';
import LoanList from './loan-list.js';
import LoanForm from './loan-form.js';

// Connect the UI to the data.
// There are three actions to consider:
// a) the user creates a new loan by filling the form and clicking 'Add'
// b) the user chooses to view/edit an existing loan by clicking on one in the list
// c) the user chooses to clear the form by clicking 'Clear'
// 
// We can use the submit button to determine whether a new Loan should be created or
// an existing Loan should be updated by changing/checking the current innerHTML of the button
// (e.g. display Add to create and Save to make changes)

let loans = []; // array to store Loan objects
  
// add observable support to the loans array
for (let prop in Events.prototype) {
    loans[prop] = Events.prototype[prop];
}

// update the push method of the loans array so that it now triggers a 'change' event
loans.push = function (loan) {
    // set the index for this newly added loan so that it can be tracked in the loans array
    loan.set('idx', this.length);
    // push the loan onto the array
    // listen to the loan for changes and refire
    loan.on('change', () => {
        this.trigger('change');
    });
    Array.prototype.push.call(this, loan);
    // update listeners that the array has been modified
    this.trigger('change');
}

let listRenderDOM = document.querySelector('.loan-display');
let formRenderDOM = document.querySelector('.loan-control');

const addLoan = (loan) => {
    loans.push(loan);
}

const loadLoan = (loanIdx) => {
    console.log(`Preparing to load loan #${loanIdx}`);
    ReactDOM.render(<LoanForm loan={loans[loanIdx]} submitListener={addLoan}/>, formRenderDOM);
}

window.loans = loans; //testing...
window.Loan = Loan;

ReactDOM.render(<LoanList loans={loans} clickListener={loadLoan} />, listRenderDOM);
ReactDOM.render(<LoanForm submitListener={addLoan} />, formRenderDOM);