
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

    toggleFullscreen(){
        this.fullscreen = (this.fullscreen) ? false : true;
        let elem = this.target;
        console.log(elem);
/*
        if (this.fullscreen) {
            console.log('Go Fullscreen');

            if (elem.requestFullscreen) {
                elem.requestFullscreen();
              } else if (elem.webkitRequestFullscreen) { 
                elem.webkitRequestFullscreen();
              } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
        } else {
            console.log('Leave Fullscreen');
            document.exitFullscreen();
        }*/
    }

    render(){

        let url = `http://${this.props.ip}:${this.props.port}/stream_viewer?topic=/image_raw`;
        //let url = `http://${this.props.ip}:${this.props.port}/image_row`;

/*<div class="block video" id="video">
                <span>video Server Address: </span>
                <input required type="text" id="video_server_link_1" value="192.168.115.140:9090" title="<host>:<port>, default address is autodetected"/>
                <span>image stream: </span><input id="image_stream_link_1"/>
                <button id="start" style="background-color: green; color: white" onclick="start_video_1();">Call!</button>
                <button  style="background-color: green; color: white" onclick="document.getElementById('img_1').src=document.getElementById('image_stream_link_1').value">startvideo</button>
                <button  style="background-color: red; color: white" onclick="document.getElementById('img_1').src='' ">stopvideo</button>
                
                
                <h1>/image_raw</h1>
                <img id="img_1" src="http://192.168.115.140:8080/stream_viewer?topic=/image_raw">
                </img>
        </div>*/

        return (
        <div className="block video" id="video">
            <h2>Video</h2>
            <div>
                <span>video Server Address: {this.props.ip}</span>
                    <img id="video_flow" src={url} onClick={this.toggleFullscreen}>
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
            }
        }
    }

    render(){
        return (<div><h4>Dashboard</h4>
            <VideoBlock ip="localhost" port="8950"></VideoBlock>
            <Block name="Emergency" id="emergency">
                <button onClick={StopVehicle}>Stop vehicle</button>
            </Block>
            <Block name="Block 1" id="block1">
                <ReadOnlyField 
                    name="first_field" 
                    type="boolean" 
                    value="true">
                        First field to show
                </ReadOnlyField>
                <ReadOnlyField 
                    name="second_field" 
                    type="boolean" 
                    value="false">
                        Second field to show
                </ReadOnlyField>
                <ReadOnlyField 
                    name="value_field" 
                    type="value" 
                    value="17.25789">
                        Value field to show
                </ReadOnlyField>
            </Block>
            <Block name="Block 2" id="block2">
            <ReadOnlyField 
                    name="year" 
                    type="value" 
                    value="2020">
                        Year
                </ReadOnlyField>
                <ReadOnlyField 
                    name="value_field" 
                    type="text" 
                    value="Guttentag">
                        Good morning in german
                </ReadOnlyField>
            </Block>

        </div>);
    }
}

function Indicator(props){
    let message = 'Hello World';
    return (<p>{message}</p>);
}

//Show a Dashboard
const domContainer = document.querySelector('#dashboard');
ReactDOM.render( <DashBoard /> , domContainer);