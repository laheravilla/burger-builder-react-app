import React from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: [],
            isLoading: true
        };
    }
    componentDidMount() {
        axios.get("/orders.json")
            .then(response => {
                const orders = [];
                for (let key in response.data) {
                    orders.push({
                        ...response.data[key],
                        id: key
                    });
                }

                this.setState({isLoading: false, orders});
            })
            .catch(error => {
                this.setState({isLoading: false});
            })
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={+order.price}
                    />
                    ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);