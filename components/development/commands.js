function StopVehicle(){
    // ------------------

    var cmdVel = new ROSLIB.Topic({
    ros : ros,
    name : '/cmd_vel',
    messageType : 'geometry_msgs/Twist'
    });

    var twist = new ROSLIB.Message({
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
    });
    cmdVel.publish(twist);
    console.log("Stop the vehicle");
}
