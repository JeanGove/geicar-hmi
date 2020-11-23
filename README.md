# The GEI-car's Human Machine Interface

HMI for the GEI-car project

Needs rosbridge_server installed.
Needs apache2 server installed.


##How to launch rosbridge_server:

$ roslaunch rosbridge_server rosbridge_websocket.launch


##How to install Apache2 server
###Ubuntu-based linux distribution
(Remove the "sudo" for Debian)

Enter the command on your terminal (Ctrl + Alt + T)
$ sudo apt update
$ sudo apt install apache2 php libapache2-mod-php

When installed go to the /var directory and change the owner of www
$ cd /var/
$ sudo chown -R <"username"> www

Then delete the html folder
$ cd www
$ sudo rm -R html
Or rename it
$ sudo mv html old.html

Clone the git in the /var/www directory
$ git clone https://github.com/JeanGove/geicar-hmi

Rename the directory to html
$ mv geicar-hmi html

Then go to this url http://127.0.0.1/ , to see the hmi

