//LoanList Component

class LoanList extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleClick(evt) {
        console.log(`Click...${evt.target.dataset.idx}`);
        this.props.clickListener(evt.target.dataset.idx);
    }

    handleChange() {
        this.forceUpdate();
    }

    componentDidMount() {
        this.props.loans.on('change', this.handleChange);
    }

    render() {
        if (this.props.loans.length === 0 ) {
            return (
                <div>
                    <h3>Loan List</h3>
                    <div className="list-group">
                        <button type="button" className="list-group-item">No Loans Entered</button>
                    </div>
                </div>

        );
        } else {
            return (
                <div>
                    <h3>Loan List</h3>
                    <div className="list-group">
                        {this.props.loans.map((loan, idx) => 
                            <button key={idx} onClick={this.handleClick} type="button" className="list-group-item" data-idx={idx}>
                                {loan.get('title')}
                            </button>
                        )}
                    </div>
                </div>
        );

        }
    }
};

export default LoanList;