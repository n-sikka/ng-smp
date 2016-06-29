# Symptum Development Environement Setup (for Ubuntu)

##  SYMPTUM FRONT-END
  Enterprise application of Symptum.com
  This contains the front end of the main web application


##### TECHNOLOGIES USED

- AngularJS 1.5.7
- HTML/CSS
- Bootstrap 3.x
- Gulp
- Nginx
- NPM
- Bower
- LiveReload

## Tools Required
  - **nginx**
  - **git**
  - **nvm** (npm version manager)
  - **bower**
  - **gulp**
  - **node-sass** (at times)


NOTE: `sudo apt-get update` before you continue

##### 1. [NGINX](https://www.nginx.com/)
Open terminal and give the command `sudo apt-get install nginx`

> you can check status of the service using these commands as and when required   
`nginx -v` to check version details / if it installed correctly     
`sudo service nginx status` to check status     
`sudo service nginx restart` to restart service after every change done to config


##### 2. [GIT](https://git-scm.com/)
Open terminal and give the command `sudo apt-get install git`

> `git -v` to check version details / if it installed correctly



##### 3. [NVM](https://github.com/creationix/nvm)
Open terminal and give command `sudo apt-get install build-essential libssl-dev` to setup the base for node and nvm.        
after that type `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash`

> RESTART TERMINAL NOW FOR CHANGES TO REFLECT

after restart do `nvm install v5.10.1` (replace `v5.10.1` wth any version of node you need)       

`source ~/.profile` to activate nvm for that particular terminal session

> you can check all node versions using command `nvm ls-remote` (highlighted one is the one you are currently using)
and also check npm version using `npm -v`

to change node version you can simply do `nvm use v6.0.0`       
(*assuming you've installed it previously, if not then install it first*)



##### 4. [BOWER](https://bower.io)
Open terminal and type `npm install -g bower`       
> to check type `bower -v`        
*NOTE :- `-g` is used to install it globally on the machine, you can also do it just for a particular project.*



##### 5. [GULP](http://gulpjs.com/)
Open terminal and type `npm install -g gulp`       
> to check type `gulp -v`
*NOTE :- `-g` is used to install it globally on the machine, you can also do it just for a particular project.*



##### 6. [NODE-SASS](https://github.com/sass/node-sass)
Sometimes starting the project gives node-sass errors, so in that case you will need to install it manually (globally) using command     
`npm install node-sass`

___
___


### Setting up the project on local machine

Create a folder Symptum by typing `mkdir symptum && cd symptum`
next clone repo and install dependencies using npm and bower as followed

```sh
$* git clone git@bitbucket.org:symptum/symptum-app.git
$ cd symptum-app
$ npm install && bower install
$ gulp serve
```

_*[use https if this method(ssh) doesnt work go to symptum-app repo and click on clone/download zip]_

Now you will need to set up nginx to create a local development server in parallel to the production server.      
it will be named **symptum.dev**



##### nginx setup
follow steps to connfigure local nginx server

```sh
$ cd /etc
$ sudo vi hosts
```


```sh
127.0.0.1       localhost
127.0.0.1       symptum.dev    <-- [add this line]

# The following lines are desirable for IPv6 capable hosts
::1     ip6-localhost ip6-loopback
fe00::0 ip6-localnet
ff00::0 ip6-mcastprefix
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
```

NOTE: Your file may appear different. just add the line `127.0.0.1    symptum.dev`  
after `127.0.0.1    localhost`

next we need to set up the link between the host file and nginx

do the following

```sh
$ cd /etc/nginx/sites-available
$ sudo vi symptum.dev
```

Add the following to this and save it         
_(You willhave to edit the path of access_log, error_log and root, according to where you have kept your project, for it to work)_

```sh
server{
      server_name symptum.dev;
      listen 80;


     access_log "/home/[your username]/symptum/symptum-app/logs/sy.access.log";
     error_log  "/home/[your username]/symptum/symptum-app/logs/sy.error.log";


     root /home/[your username]/symptum/symptum-app;

      index index.html;

      location / {
       try_files $uri $uri/ /index.html;
      }


      # We don't need .ht files with nginx.
      location ~ /\.ht {
              deny all;
      }

}
```


**If you've been following the document, then just replace [your username] with your ubuntu username open terminal and type `whoami`**

next we create a symlink in sites-enabled.
Do the following:

```sh
$ sudo ln -s /etc/nginx/sites-available/symptum.dev /etc/nginx/sites-enabled/
```

check in sites-avialable that there should be a file **symptum.dev** with the given config and a symlink (shortcut) to it in sites-enabled.

Restart the nginx server now using `sudo service nginx restart` and
see if symptum.dev opens with the project or not.


### To being work
go to root, cd symptum/symptum-app  
do `gulp watch`

and open symptum.dev in browser.

if done correctly it should open the project with the landing page.

You can see errors and warning in the terminal where you gave the command `gulp watch`, for SASS and JS

_Keep the terminal clean!_


___
---- END ----
___     



### Todos
 - Write scripts and hooks for EC2 and git
 - Rethink Github contribution
 - Add wiki to repo
 - Add issue template for repo issue generation
