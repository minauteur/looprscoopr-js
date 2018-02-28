import React, {Component} from 'react';
export class Loopr extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
        this.getLoops();
        this.checkLoops();
    }
    getLoops() {
        this.getLoops = function () {
            fetch('https://microwavemansion.com/loopinfo') // returns a promise object
            .then(result => result.json()) // still returns a promise object, U need to chain it again
            .then(items => this.setState({items}));
        };
    }
    checkLoops() {
        this.checkLoops = function () { 
            fetch('https://microwavemansion.com/loopinfo')
                .then(result => result.json())
                .then(items => {
                    if (items !== this.state.items) {
                       this.setState({items});
                    }
                }
            )
        }
    }
    componentDidMount() {
        this.getLoops();
        setInterval(() => this.checkLoops(), 3000);
    }
    // shouldComponentUpdate() {
    //     var checked = setInterval(this.checkLoops(), 30000)
    //     if (checked === this.state.items) {
    //         return false
    //     } else return true
    // }
    // shouldComponentUpdate() {
    //     setInterval(this.checkLoops(), 30000);
    // }
    // componentWillUpdate() {
    //     var update = this.checkLoops();
    //     var state = this.state.items;
    //     var get = this.getLoops();
    //     // var interval = setInterval(update, 30000)
    //     setInterval(function() {
    //         if (!(update === state)) {
    //         get;
    //     }
    //     }, 30000);
    // }
    // // componentWillUpdate() {
    //     setInterval(
    //         fetch('https://microwavemansion.com/loopinfo')
    //         .then(result => result.json())
    //         .then(items => this.setState({items})), 300000
    //     )
    // }
    render() {
        return (
            <div className="Container">
                <ul>
                    {this.state.items.map(item=><li key={item.name}>{item.name} <a href={item.url}><img src={item.uri} alt={item.name}></img></a></li>)}
                </ul>
            </div>
        );
    }

}
export default Loopr;