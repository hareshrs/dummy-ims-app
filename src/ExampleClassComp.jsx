import { Component } from "react";
import { SubComponent, SubComponent2 } from "./SubComponent";

export default class ExampleClassComp extends Component {
    constructor(props) {
        super(props);
        console.log("Parent Data", props)
        this.state = {
            ui: 'show',
            showSub: true
        }
    }

    actionFunction() {
        let ui = this.state.ui;
        if (this.state.ui === "show") ui = 'zoom';
        else if (this.state.ui === "zoom") ui = 'static';
        else if (this.state.ui === "hide") ui = 'show';
        else ui = 'hide'
        this.setState({ ui }, () => {
            if (this.state.ui === "hide")
                this.setState({ showSub: false });
            else
                this.setState({ showSub: true });
        })
    }

    imageUI() {
        let x;
        switch (this.state.ui) {
            case 'zoom':
                x = <img src="assets/icons/stock-vector-phone-volume-vector-icon-on-transparent-background-phone-volume-icon-1135845185.jpg" className={"App-logo"} alt="logo" />
                break;
            case 'static':
                x = <img src="logo.svg" alt="logo" height={140} width="140px" />
                break;
            case 'hide':
                x = <div style={{ background: 'red' }}>hidden</div>
                break;
            default:
                x = <img src="logo.svg" className={"App-logo"} alt="logo" />
        }
        return x
    }

    // componentDidMount() {
    //     document.addEventListener('scroll', this.actionFunction.bind(this))
    // }

    // componentDidUpdate() {
    //     alert('I am updating')
    // }

    // componentWillUnmount() {
    //     document.removeEventListener('scroll', this.actionFunction.bind(this))
    // }

    render() {
        return <>
            {/* <span onClick={this.actionFunction.bind(this)}>
                {this.imageUI()}
                {JSON.stringify(this.state.ui)}
            </span>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a> */}
            {/* {this.state.showSub && (<div> */}
            <SubComponent2 />
            {/* </div>) */}
            {/* } */}
        </>
    }
}