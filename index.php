<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0//EN">
<html>
<head>
	<title>HMI GEI-car</title>
	<meta charset="utf-8">
	
	<script type="text/javascript" src="./script/roslib.js"></script>
	<script type="text/javascript" src="./script/roslib-min.js"></script>
	
	<script type="text/javascript" type="text/javascript">
	  // Connecting to ROS
	  // -----------------

	  var ros = new ROSLIB.Ros({
	    url : 'ws://localhost:9090'
	  });

	  ros.on('connection', function() {
	    console.log('Connected to websocket server.');
	  });

	  ros.on('error', function(error) {
	    console.log('Error connecting to websocket server: ', error);
	  });

	  ros.on('close', function() {
	    console.log('Connection to websocket server closed.');
	  });

	  // Publishing a Topic
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

	</script>



</head>

<body>
	<h1>HMI</h1>
	<img class="bg-logo" src="./media/bg-logo.svg">
	<img class="logo" src="./media/logo.png">
	<div id="dashboard"></div>
	<footer>
		<p>Created by the HMI team</p>
		<p>Backend by the ROS team</p>
	</footer>

		<!-- CSS Style sheet-->
		<link rel="stylesheet" type="text/css" href="./media/common.css">
		<link rel="stylesheet" type="text/css" href="./media/layout.css">

	<!-- Replace all development by production when not in development-->

	<!-- Load React. -->
	<!-- Note: when deploying, replace "development.js" with "production.min.js". -->
	<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
	<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

	<!-- Don't use this in production: -->
	<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

	<!-- JavaScript source codes -->
	<script type="text/babel" src="./components/development/standard.js"></script>
	<script type="text/javascript" src="./components/development/commands.js"></script>
</body>
</html>
