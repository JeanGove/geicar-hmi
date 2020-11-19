var speedValue = {
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
};
// Define the sensibility of the arrow keys, It increases while pressing for long time
var sensibility;

function SendMoveCommand(){
  var cmdVel = new ROSLIB.Topic({
    ros : ros,
    name : '/cmd_vel',
    messageType : 'geometry_msgs/Twist'
    });

    var twist = new ROSLIB.Message(speedValue);
    cmdVel.publish(twist);
}

function StopVehicle(){
  console.log("Stop the vehicle");
  speedValue.linear = {
    x:0.0, y: 0.0, z: 0.0
  }
  SendMoveCommand();
}

function TurnLeft(){
  console.log("Turn to the left");
  if (speedValue.angular.z >= 20) {
    speedValue.angular.z = 20;
  } else {
    speedValue.angular.z += 20;
  }
  SendMoveCommand();
}

function TurnRight(){
  console.log("Turn to the right");
  if (speedValue.angular.z <= -20) {
    speedValue.angular.z = -20;
  } else {
    speedValue.angular.z -= 20;
  }
  SendMoveCommand();
}

function MoveForward(){
  console.log("Move the vehicle Forward");
  speedValue.linear.x = 20;
  SendMoveCommand();
}

function slowDown(){
  console.log("Slow Down");
  speedValue.linear.x -= 20;
  SendMoveCommand();
}



/**
* 
* aavancer en RPM
* RPM 0 -> 60
* 
* rotation en degré plus tard -20 -> 20
* remettre à 0 après
*  côté ROS ou HMI ( à voir )
* 
* 
*/