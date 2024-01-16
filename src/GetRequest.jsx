import React from 'react';

class GetRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalReactPackages: null
        };
    }

    componentDidMount() {
        // Simple GET request using fetch
        fetch('https://api.binance.com/api/v3/avgPrice?symbol=BTCEUR')
            .then(response => response.json())
            .then(data => this.setState({ totalReactPackages: data.price }));
    }

    render() {
        const { totalReactPackages } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Binance</h5>
                <div className="card-body">
                    BTC price in EUR: {totalReactPackages}
                </div>
            </div>
        );
    }
}

export { GetRequest }; 