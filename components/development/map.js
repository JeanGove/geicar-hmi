
'use strict';

var add_GPS_track;

class GMap extends React.Component{
  constructor(props){
    super(props)


    this.poly;
    this.rover;
    this.map;
    this.center_gps = new google.maps.LatLng(43.571105, 1.466366);
    this.html = React.createRef();
    
    // Variable used to draw/delete a trajectory
    this.mapPath; //Last point placed on the map
    this.path = new Array(); // Set of coordinate got from the map

    /** Requires
     * Latitude
     * Longitude
     * Zoom
     * 
     */

    //Make initMap linked to the React object when used from outside the object
    this.initMap = this.initMap.bind(this);
    this.addLatLng = this.addLatLng.bind(this);
    this.addLine = this.addLine.bind(this);
    this.removeLine = this.removeLine.bind(this);
    add_GPS_track = add_GPS_track.bind(this);
  }

  initMap(){
    let element = this.html.current;

    this.map = new google.maps.Map(element, {
      zoom: 18,
      center: this.center_gps,
      mapTypeId: "satellite"
    });

    this.poly = new google.maps.Polyline({
      strokeColor: '#F00000',
      strokeOpacity: 1.0,
      strokeWeight: 3
    });
    this.poly.setMap(this.map);

    this.rover = new google.maps.Polyline({
      strokeColor: '#00FF33',
      strokeOpacity: 1.0,
      strokeWeight: 3
    });
    this.rover.setMap(this.map);


    // Add a listener for the click event
    this.map.addListener('click', this.addLatLng);

    element.id = "map";
  }

  addLatLng(event){
    this.path = this.poly.getPath();

    // Because path is an MVCArray, we can simply append a new coordinate
    // and it will automatically appear.
    this.path.push(event.latLng);
    this.mapPath = event.latLng;//.toString();   
  }

  addLine() {
    this.poly.setMap(this.map);
  }


  removeLine() {
    this.map = null;
    this.poly.setMap(this.map);
  //poly = [{lat : 0, long : 0}];
  }

  componentDidMount(){
    this.initMap();
  }

  render(){
    return <div>
            <div id="map" ref={this.html}></div>
            <button onClick={this.removeLine}>Remove line</button>
            <button onClick={this.addLine}>Add line</button>
          </div>;
  }
}


///trace sur maps le chemin du rover/////////////
add_GPS_track = function(){
  var rover_Coords = new google.maps.LatLng(document.getElementById("lat").value, document.getElementById("long").value);

  var rover_path = this.rover.getPath();

  // Because path is an MVCArray, we can simply append a new coordinate
  // and it will automatically appear.
  rover_path.push(rover_Coords);
  //rover.setMap("map");
  //document.getElementById("map_path").value = event.latLng;//.toString();   
}

/*
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: center_gps,
      mapTypeId: "satellite"
    });

    poly = new google.maps.Polyline({
      strokeColor: '#F00000',
      strokeOpacity: 1.0,
      strokeWeight: 3
    });
    poly.setMap(map);

    rover = new google.maps.Polyline({
      strokeColor: '#00FF33',
      strokeOpacity: 1.0,
      strokeWeight: 3
    });
    rover.setMap(map);


    // Add a listener for the click event
    map.addListener('click', addLatLng);

    element = document.getElementById("map");
    document.getElementById("map").style.width="500px";
    document.getElementById("map").style.height="400px";
}

// Handles click events on a map, and adds a new point to the Polyline.
function addLatLng(event) {
var path = poly.getPath();

// Because path is an MVCArray, we can simply append a new coordinate
// and it will automatically appear.
    path.push(event.latLng);
    document.getElementById("map_path").value = event.latLng;//.toString();    
}

///trace sur maps le chemin du rover/////////////
add_GPS_track = function(){
  var rover_Coords = new google.maps.LatLng(document.getElementById("lat").value, document.getElementById("long").value);


  var rover_path = rover.getPath();

  // Because path is an MVCArray, we can simply append a new coordinate
  // and it will automatically appear.
  rover_path.push(rover_Coords);
  //rover.setMap("map");
  //document.getElementById("map_path").value = event.latLng;//.toString();   
}

function addLine() {
    poly.setMap(map);
}


function removeLine() {
    poly.setMap(null);
//poly = [{lat : 0, long : 0}];
}


initMap();

*/