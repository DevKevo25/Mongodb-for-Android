# 🚀 Mongodb in android 🚀 

Here is some simple steps you can use to get started using mongodb in your phone offline for learning or simple development.
Mongodb is mot supported for Android so here we'll use the old mongodb version.
You can use any backend language here but I'll be using nodejs for this tutorial.

# steps to gwt started
1️⃣ Download Dory Mongodb server from APKPure
<a href="https://apkpure.com/dory-mongodb-server/io.tempage.dorymongo">Dory</a>

This will be the local mongodb server

2️⃣ Download MongoLime from APKPure 
<a href="https://apkpure.com/mongolime/com.mongolime">MongoLime</a>

you'll use this to view mongodb databases and collections in interactive environment 
just like in mongodb compass

3️⃣ Download termux from Fdroid 
<a href="https://f-droid.org/en/packages/com.termux/">Termux</a>

This will be used to run shell commands

# 🍃 Setting up termux environment 🍃
open termux and run these commands 

update packages
```shell
pkg update && pkg upgrade
```

install git
```shell
pkg install git
```

install nodejs stable version 
```shell
pkg install nodejs-lts
```

clone this repository 
```shell
git clone https://github.com/DevKevo25/Mongodb-for-Android.git
cd Mongodb-for-Android
```

install dependencies
```shell
npm install
```

🚀 open Dory mongodb server and click on start button. Make sure at the bottom you can see ```connections on port 27017```  if you can't see that click on the red button  🛑 to stop the server, at the top click on 'repair' checkbox, start the server again, after 5-10 secs click on the red button again and click on 'default' checkbox and start the server by clicking on the red button. After that you should see ```connections on port 27017```

Go back to termux at the same directory ```Mongodb-for-Android``` and run this
```shell
npm start
```

You should see 'database created successfully'

# Setting Up mongolime
open mongolime app

click on ```new connection```

Type host as ```localhost``` and port as ```27017```

Click on save

After that you'll get a to view your collections in mongolime.

# Daily use
The steps above are to get started after that everything becomes easy

1. Open Dory and start server
2. Use nodejs or any backend language to query the database
3. use mongolime to view your database

🚀 if in future you want to use mongoose you'll need to use the old version. install it like this
```shell
npm install mongoose@5
```

# Don't forget to leave a star ⭐ 
