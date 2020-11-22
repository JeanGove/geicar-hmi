
/* This page will contain the standard React elements */

'use strict';

const e = React.createElement;

//React elements
//ReadOnlyField, this component will render each simple variables (value, boolean, etc...)
class ReadOnlyField extends React.Component{
    render(){
        var otherClasses = "";

        switch (this.props.type) {
            case "value":
                
                break;
            case "boolean":
                otherClasses += this.props.value;
                break;
            default:
                break;
        }

        /* Faire tout se passer ici */
        return (<div className={`readOnly field ${this.props.type} ${otherClasses}`}>{this.props.children} {this.renderValue()}</div>)
    }

    renderValue(){/*
        var component;
        switch (this.props.type) {
            case "boolean":
                component =                 break;
            case "text":

                break;
            case "value":
                let color = (this.props.color != undefined) ? this.props.color : "inherit";
                <div style={"color: "+ color} className={(this.props.type)}>{this.props.value}</div>
                break;
            default:
                component = <div>{this.props.type}</div>;
                console.warn(`The ${this.props.name}'s type is undefined`);
                console.log(this);
                break;
        }
        return component;*/
        return <div>{this.props.value}</div>;
    }
}

class Separator extends React.Component{
    render(){
        if (this.props.children != "") {
            
        } else {
            
        }
        return "Nope"
    }
}

class Block extends React.Component{
    render(){

       return (
            <div className="block" id={this.props.id}>
                <h2>{this.props.name}</h2>
                <div>{this.props.children}</div>
            </div>
        );
    }
}

class VideoBlock extends Block{
    constructor(props){
        super(props);

        this.toggleFullscreen = this.toggleFullscreen.bind(this);
        this.fullscreen = false;
    }

    toggleFullscreen(event){
        this.fullscreen = (this.fullscreen) ? false : true;
        let elem = event.target;

        if (this.fullscreen) {
        	//console.log('Go Fullscreen');

            if (elem.requestFullscreen) {
                elem.requestFullscreen();
              } else if (elem.webkitRequestFullscreen) { 
                elem.webkitRequestFullscreen();
              } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }
        }else{
        	//console.log('Leave Fullscreen');
            document.exitFullscreen();
        }
    }

    render(){

        let url = `http://${this.props.ip}:${this.props.port}/stream?topic=/raspicam_node/image&type=ros_compressed`;
        //let url = `http://${this.props.ip}/fond.png`;
        return (
        <div className="block video" id="video">
            <h2>Video</h2>
            <div>
                 <small>Server Address: {this.props.ip}</small>
                    <img id="video_flow" src={url} title="Click to show in fullscreen" onClick={this.toggleFullscreen}>
                    </img>
            </div>
        </div>
        )
    }
}

class DashBoard extends React.Component{
    constructor(props){
        super(props);
        
        //This Object will contain all the data
        this.state = {
            "blocks":{
                "test":{
                    
                },
                "video":{
                    "enabled":true,
                }
            },
            "speedValue":{
                linear : {
                  x : 0.0,
                  y : 0.0,
                  z : 0.0
                },
                angular : {
                  x : 0.0,
                  y : 0.0,
                  z : 0.0
                }
            }
        }
    }

    render(){
        return (<div><h4>Dashboard</h4><div className="content">
            <VideoBlock ip={LOCALHOST} port="8080"></VideoBlock>
            <Block name="Emergency" id="emergency">
                <button className="emergency" onClick={StopVehicle}>Stop vehicle</button>
                <button onClick={MoveForward}>Move Forward</button>
            </Block>
            <Block name="Controls" id="controls">
                <p></p>
                <button className="up" onClick={MoveForward}>S</button>
                <p></p>
                <button className="left" onClick={TurnLeft}>R</button>
                <button className="down" onClick={slowDown}>T</button>
                <button className="right" onClick={TurnRight}>Q</button>
            </Block>
            <Block name="State" id="block1">
                <ReadOnlyField 
                    name="first_field" 
                    type="boolean" 
                    value="true">
                        Hotspot actived
                </ReadOnlyField>
                <ReadOnlyField 
                    name="second_field" 
                    type="boolean" 
                    value="false">
                        Defaillance state
                </ReadOnlyField>
                <ReadOnlyField 
                    name="value_field" 
                    type="value" 
                    value="-56.25789">
                        Signal Strengh (dBm)
                </ReadOnlyField>
            </Block>
            <Block name="Velocity" id="block2">
            <ReadOnlyField 
                    name="rpm" 
                    type="value" 
                    value={speedValue.linear.x}>
                        Speed (Rpm)
                </ReadOnlyField>
                <ReadOnlyField 
                    name="value_field" 
                    type="text" 
                    value="working">
                        Engine state
                </ReadOnlyField>
            </Block>

            </div></div>);
    }
}

function doNothing(){
    console.log("This function isn't developed or connected yet");
}

function ShowWarning(){

}

function ShowAlert(){
    
}

//Show a Dashboard
const domContainer = document.querySelector('#dashboard');
dashboard = <DashBoard />;
ReactDOM.render( dashboard , domContainer);
