
import React, { Component } from 'react';

class CurrencyConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            currency: '',
        };

        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleAmountChange(event) {
        this.setState({ amount: event.target.value });
    }

    handleCurrencyChange(event) {
        this.setState({ currency: event.target.value });
    }


    handleSubmit(event) {
        event.preventDefault();

        const { amount, currency } = this.state;
        let convertedAmount = 0;


        const INR_TO_EUR_RATE = 1 / 90;

        if (amount && !isNaN(amount)) {

            convertedAmount = parseFloat(amount) * INR_TO_EUR_RATE;
            alert(`Converting to Euro Amount is ${convertedAmount.toFixed(2)}`);
        } else {
            alert("Please enter a valid amount.");
        }

        this.setState({ amount: '', currency: '' });
    }

    render() {
        return (
            <div>
                <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Amount:
                            <input
                                type="text"
                                value={this.state.amount}
                                onChange={this.handleAmountChange}
                                style={{ marginLeft: '10px' }}
                            />
                        </label>
                    </div>
                    <br />
                    <div>
                        <label>
                            Currency:
                            <input
                                type="text"
                                value={this.state.currency}
                                onChange={this.handleCurrencyChange}

                                style={{ marginLeft: '5px' }}
                            />
                        </label>
                    </div>
                    <br />
                    <button type="submit">Submit</button> {}
                </form>
            </div>
        );
    }
}

export default CurrencyConverter;