
var Vol_mes = 0;
var Bat_mes = 0;
var VMG_mes = 0;
var VMD_mes = 0;

window.onload = function(){
      // Suscribing a Topic
      // ------------------
    var listener = new ROSLIB.Topic({
        ros : ros,
        name : '/mot_sens',
        messageType : 'std_msgs/Float32MultiArray'
    });


    listener.subscribe(function(message) {
        Vol_mes= message.data[0];
        Bat_mes= message.data[1];
        VMG_mes= message.data[2];
        VMD_mes= message.data[3];

        /*
        if(document.getElementById("speed_Lwheel") != null){
        document.getElementById("speed_Lwheel").innerHTML = VMG_mes;
        }
        if(document.getElementById("speed_Rwheel") != null){
        document.getElementById("speed_Rwheel").innerHTML = VMD_mes;
        }
        if(document.getElementById("bat_level") != null){
        document.getElementById("bat_level").innerHTML = Bat_mes.toFixed(2);
        }*/
    });
	
};