const express = require('express');
const app = express();
Stream = require('node-rtsp-stream');
  stream1 = new Stream({
  name: 'Cam1',
 // streamUrl: 'rtsp://username:password@ip_address:port/cam/realmonitor?channel=1&subtype=0',
  //streamUrl:'rtsp://78.159.192.163/live/ch00_0',
  //streamUrl:'rtsp://116.197.222.158/live/ch00_0',
  streamUrl:'rtsp://tester:AsDfJkL-1234@clawcam.thddns.net:9773/cam/realmonitor?channel=1&subtype=0',
  wsPort: 9999,
  ffmpegOptions: { // options ffmpeg flags
    '-r': 25,// options with required values specify the value after the key
    '-q:v':32
    //'-s':'1280x720'
  }
});
app.get('/',(req, res) =>
res.send(`
  
  <canvas id="videoCanvas1"  style="display:block;width:70%;height:70%;margin:0"></canvas>

  <script src='https://cdnjs.cloudflare.com/ajax/libs/jsmpeg/0.2/jsmpg.min.js'></script>
  <script>
  var canvas1 = document.getElementById('videoCanvas1');
   var ws1 = new WebSocket("ws://localhost:9999")
     
        var player1 = new jsmpeg(ws1, {canvas:canvas1, autoplay:true,audio:false,loop: true});
       var canvas1 = document.getElementById('videoCanvas1');
    
    
  </script>
`),

)
console.log("Server Start on port: 8000")
app.listen(process.env.PORT||8000);