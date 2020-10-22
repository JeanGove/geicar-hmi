
/* This page will contain the standard React elements */

'use strict';

const e = React.createElement;

//React elements
//SimpleField, this component will render each simple variables (value, boolean, etc...)
class SimpleField extends React.Component{
    render(){
        //to add
        /*
        this.props = {
            modifiable

        }
        */
    }
}

class Block extends React.Component{
    render(){

    }
}

class DashBoard extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return e("div",{className:"dashboard"},"Dashboard");
    }
}

function Indicator(props){
    let message = 'Hello World';
    return e('p',null,message);
}

//Show a Dashboard
const domContainer = document.querySelector('#dashboard');
ReactDOM.render(e(DashBoard), domContainer);