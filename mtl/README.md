# Pier 9 Exhibition (Listener + Word Cloud) 
Quick code for exhibition

# Setup (for the backend code) 
This is one time setup which you'll need to do on the computer that projects the word cloud. 

1. Install [node.js](https://nodejs.org)
2. Open a terminal and run `npm install -g peer`

# Running the code 
For this part, make sure to follow this order of instructions every time. 

1. On the word cloud computer, open up a terminal and run `peerjs -p 9000`. This will run the backend server that connects the two computers. 
2. Open `wordcloud.html` in chrome on the computer you want to show it on.
3. Find the IP address of the word cloud computer under Network -> Wifi (it will be something like 192.111.111.111)
4. Open up `listener.html` in a text editor and change the hostname variable to this IP address
5. Open `listener.html` in chrome and you should be all set!
