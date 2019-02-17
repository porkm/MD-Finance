import React, {Component} from 'react';


export default class FinanceTable extends Component {

    cell = content =>
        <td style={{textAlign: 'center'}}>
            {content}
        </td>

    renderTable = (data) =>{
        return (
            <table>
                <tbody>
                {data.map(item=> (
                    <tr key={item.Id}>
                        {this.cell(item.Id)}
                        {this.cell(item.Money)}
                        {this.cell(item.Description)}
                    </tr>
                ))}
                </tbody>
            </table>);
    }

    render() {
        const {data} = this.props;

        debugger;
        if (data.length === 0) {
            return <p> Loading </p>;
        }
        return this.renderTable(data);


    }
}