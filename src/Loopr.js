import React, {Component} from 'react';
export class Loopr extends Component {
    constructor() {
        super();
        this.state = { items: [] };
    }
    componentDidMount() {
        fetch('http://127.0.0.1:8080') // returns a promise object
            .then(result => result.json()) // still returns a promise object, U need to chain it again
            .then(items => this.setState({items}));
    }
    render() {
        return (
            <div className="Container">
                <ul>
                    {this.state.items.map(item=><li key={item.name}>{item.name} <a href={item.url}><img src={item.img} alt={item.name}></img></a></li>)}
                </ul>
            </div>
        );
    }

}
export default Loopr;