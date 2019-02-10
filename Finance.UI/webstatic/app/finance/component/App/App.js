import React, {Component} from 'react';
import axios from "axios";

// http://localhost:6033/api/Finance/Get
const baseUrl = `http://localhost:6033`;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios
            .get(`${baseUrl}/api/Finance/Get`)
            .then(response => {
                this.setState({
                    data: response.data
                });
            });
    }

    cell = content =>
        <td style={{textAlign: 'center'}}>
            {content}
        </td>

    render() {
        return (
            <table>
                <tbody>
                {this.state.data.map(item=> (
                    <tr key={item.Id}>
                        {this.cell(item.Id)}
                        {this.cell(item.Money)}
                        {this.cell(item.Description)}
                    </tr>
                ))}
                </tbody>
            </table>
        )
    }
}