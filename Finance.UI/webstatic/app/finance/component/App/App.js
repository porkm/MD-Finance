import React, {Component} from 'react';
import financeService from './../../service/financeService';
import FinanceTable from "./component/FinanceTable/FinanceTable";



export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        financeService.getFinanceDataPromice().then(response => {
            this.setState({
                data: response.data
            });
        });
    }

    render() {
        return <FinanceTable data ={this.state.data}/>
    }
}