var QuestionMsg = ''
var username = ''
var userEmail = ''
document.getElementById("questionText").innerHTML = QuestionMsg;

function detailSubmit(e){
  e.preventDefault();
  console.log(document.getElementById('username').value);
  console.log(document.getElementById('userEmail').value);
  username = document.getElementById('username').value;
  userEmail = document.getElementById('userEmail').value;
  questionTextChange(QuestionMsg);
}

function questionTextChange(msg){
  document.getElementById("questionText").innerHTML = msg;
  QuestionMsg = msg;
  if(username === ''){
    formSubmit();
  }else{
    startFrame();
  }
  

  function formSubmit() {
      if(QuestionMsg === ''){
        container.innerHTML = `
    <div class="adminSide">
        <video id="leftVideo" autoplay muted="muted" loop>
          <source src="./ai-vid_GET/matt_1_muted.mp4" type="video/mp4">
        </video>
        <img src="./ai-vid_GET/logo.png" class="logoImg"/>
        <div id="questionText" class="questionText">
          
        </div>
      </div>
      <div id="userSide">
        <div class="startVideo">
          <div class="recordStart" style="background-color: lightgrey;" onclick="">
          <i class="fas fa-video"></i> Record your video
          </div>
          <div class="recordStart" style="background-color: lightgrey;" onclick="">
                  <i class="fas fa-upload"></i> Upload your video
                  </div>
          <div>
            You can practice before sending.
          </div>
        </div>
      </div>
    `;
      document.getElementById("questionText").innerHTML = QuestionMsg;
      }else{
        container.innerHTML = `
    <div class="adminSide">
        <video id="leftVideo" autoplay muted="muted" loop>
          <source src="./ai-vid_GET/matt_1_muted.mp4" type="video/mp4">
        </video>
        <img src="./ai-vid_GET/logo.png" class="logoImg"/>
        <div id="questionText" class="questionText">
          
        </div>
      </div>
      <div id="userSide">
        <div class="startVideo">
          <div class="recordStart" onclick="startFrame()">
          <i class="fas fa-video"></i> Record your video
          </div>
          <div class="recordStart" onclick="">
                  <i class="fas fa-upload"></i> Upload your video
                  </div>
          <div>
            You can practice before sending.
          </div>
        </div>
      </div>
    `;
      document.getElementById("questionText").innerHTML = QuestionMsg;
      }

    }

  /////end/////
}


function startFrame() {
  if(username === '' || userEmail === ''){
    document.getElementById('userSide').innerHTML = `
    <div class="startVideo">
    <div><input id="username" type="text" placeholder="Username" required/></div>
    <div><input id="userEmail" type="email" placeholder="User Email" required/></div>
    <div><button id="detailSubmitButton" type="button" onclick="detailSubmit(event)">Submit</button></div>
  </div>
    `;
    return;
  }
  var container = document.getElementById("container");
  var videoDiv = document.getElementById("userSide");
  videoDiv.innerHTML =
    '<div id="userModal" class="userModal"><div>GET READY</div><div id="recordCounter">5</div></div><video id="gum" autoplay muted playsinline></video><div id="addData"></div>';
  var addData = document.getElementById("addData");
  addData.innerHTML = ` <div>
  
  <button id="record"></button>
  <div id="counter" style="position: absolute;top: 80px;left: 0px;width: 100%;font-size: 2rem;color:white;">60</div>
  <button id="close"><i class="fas fa-times"></i></button>
  </div>
  <button id="play" style="display: none;" disabled>Play</button>
  <button id="download" style="display: none;" disabled>Download</button>
<div>
  
<form
id="upload"
action="http://103.107.66.31:9006/upload-file"
method="POST"
enctype="multipart/form-data"
>
<input id="video_file" hidden name="filename" type="file" accept="video/*"/>
<label for="video_file" style="margin: 0px;" id="videoLabel" class="button"><i class="fas fa-cloud-upload-alt"></i></label>
<input type="submit" hidden/>
</form>
</div>
<video id="recorded" style="display: none;" autoplay loop controls playsinline></video>`;
  var mediaSource = new MediaSource();
  mediaSource.addEventListener("sourceopen", handleSourceOpen, false);
  var mediaRecorder;
  var recordedBlobs;
  var sourceBuffer;
  var uploadFile = document.getElementById("video_file");
  uploadFile.onchange = () => {
    formSubmit("yes");
  };
  var close = document.getElementById("close");
  close.onclick = () => formSubmit("no");
  var gumVideo = document.querySelector("video#gum");
  var recordedVideo = document.querySelector("video#recorded");

  var recordButton = document.querySelector("button#record");
  var playButton = document.querySelector("button#play");
  var downloadButton = document.querySelector("button#download");
  recordButton.onclick = toggleRecording;
  playButton.onclick = play;
  downloadButton.onclick = download;
  var isSecureOrigin =
    location.protocol === "https:" || location.host.includes("localhost");
  // if (!isSecureOrigin) {
  //   alert('getUserMedia() must be run from a secure origin: HTTPS or localhost.' +
  //     '\n\nChanging protocol to HTTPS');
  //   location.protocol = 'HTTPS';
  // }

  var constraints = {
    audio: false,
    video: true,
  };

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(successCallback, errorCallback);

  function successCallback(stream) {
    console.log("getUserMedia() got stream: ", stream);
    window.stream = stream;
    gumVideo.srcObject = stream;
  }

  function errorCallback(error) {
    console.log("navigator.getUserMedia error: ", error);
  }

  // navigator.mediaDevices.getUserMedia(constraints)
  // .then(function(stream) {
  //   console.log('getUserMedia() got stream: ', stream);
  //   window.stream = stream; // make available to browser console
  //   if (window.URL) {
  //     gumVideo.src = window.URL.createObjectURL(stream);
  //   } else {
  //     gumVideo.src = stream;
  //   }
  // }).catch(function(error) {
  //   console.log('navigator.getUserMedia error: ', error);
  // });

  function handleSourceOpen(event) {
    console.log("MediaSource opened");
    sourceBuffer = mediaSource.addSourceBuffer('video/webm; codecs="vp8"');
    console.log("Source buffer: ", sourceBuffer);
  }

  function handleDataAvailable(event) {
    if (event.data && event.data.size > 0) {
      recordedBlobs.push(event.data);
    }
  }

  function handleStop(event) {
    console.log("Recorder stopped: ", event);
    console.log("Recorded Blobs: ", recordedBlobs);
  }

  function toggleRecording() {
    if (recordButton.innerHTML === "") {
      document.getElementById("userModal").style.display = "flex";
      var count = 4;
      var counterId;
      setTimeout(function () {
        var recordCounter = document.getElementById("recordCounter");
        recordCounter.innerHTML = count;
        count--;

        counterId = setInterval(function () {
          var recordCounter = document.getElementById("recordCounter");
          recordCounter.innerHTML = count;
          count--;
        }, 2000);
      }, 1000);
      setTimeout(function () {
        startRecording();
        document.getElementById("userModal").style.display = "none";
        clearInterval(counterId);
        recordButton.innerHTML = '<i class="fas fa-stop"></i>';
        var counter = document.getElementById("counter");
        var digit = 60;
        setInterval(function () {
          digit -= 1;
          var dis;
          if (digit < 10) {
            dis = "0" + digit;
          } else {
            dis = digit;
          }
          counter.innerHTML = dis;
          if (digit === 0) {
            stopRecording();
            recordButton.innerHTML = "";
            playButton.disabled = false;
            downloadButton.disabled = false;
          }
        }, 1000);
      }, 9000);
    } else {
      stopRecording();
      recordButton.innerHTML = "";
      playButton.disabled = false;
      downloadButton.disabled = false;
    }
  }

  // The nested try blocks will be simplified when Chrome 47 moves to Stable
  function startRecording() {
    var options = { mimeType: "video/webm", bitsPerSecond: 100000 };
    recordedBlobs = [];
    try {
      mediaRecorder = new MediaRecorder(window.stream, options);
    } catch (e0) {
      console.log("Unable to create MediaRecorder with options Object: ", e0);
      try {
        options = { mimeType: "video/webm,codecs=vp9", bitsPerSecond: 100000 };
        mediaRecorder = new MediaRecorder(window.stream, options);
      } catch (e1) {
        console.log("Unable to create MediaRecorder with options Object: ", e1);
        try {
          options = "video/vp8"; // Chrome 47
          mediaRecorder = new MediaRecorder(window.stream, options);
        } catch (e2) {
          alert(
            "MediaRecorder is not supported by this browser.\n\n" +
              "Try Firefox 29 or later, or Chrome 47 or later, with Enable experimental Web Platform features enabled from chrome://flags."
          );
          console.error("Exception while creating MediaRecorder:", e2);
          return;
        }
      }
    }
    console.log(
      "Created MediaRecorder",
      mediaRecorder,
      "with options",
      options
    );
    recordButton.innerHTML = '<i class="fas fa-stop"></i>';
    playButton.disabled = true;
    downloadButton.disabled = true;
    mediaRecorder.onstop = handleStop;
    mediaRecorder.ondataavailable = handleDataAvailable;
    mediaRecorder.start(10); // collect 10ms of data
    console.log("MediaRecorder started", mediaRecorder);
  }

  function afterSelection(data) {
    data.name = "recordedData";
    console.log(data);
    // container.innerHTML += '<div class="confirmPage"><div class="confirmText">Thank you for uploading the video</div><div class="confirmChoice"><div id="noBtn" class="confirmBtn">Back</div></div></div>'

    // var noOption = document.getElementById('noBtn');

    // noOption.onclick = () => formSubmit('no');

    container.innerHTML += `<div class="confirmPage"><div class="confirmText">Uploading Data. Please wait ...</div></div>`;
    var formdata = new FormData();
    formdata.append("filename", data, "");
    // console.log(fd.get('#video_file'));
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
      mode: "no-cors",
    };

    fetch("http://103.107.66.31:9008/upload-file", requestOptions)
      .then((response) => response)
      .then((result) => {
        container.innerHTML +=
          '<div class="confirmPage"><div class="confirmText">Thank you for uploading the video</div><div class="confirmChoice"><div id="noBtn" class="confirmBtn">Back</div></div></div>';

        var noOption = document.getElementById("noBtn");

        noOption.onclick = () => {
          formSubmit("no");
        };
        return console.log(result);
      })
      .catch((error) => console.log("error", error));
    // fetch('http://103.107.66.31:9006/upload-file',{method: 'POST',mode: 'no-cors',body: data});
  }

  function stopRecording() {
    mediaRecorder.stop();
    container.innerHTML = `
  <div class="adminSide">
  <video id="leftVideo" autoplay muted="muted" loop>
    <source src="./ai-vid_GET/matt_1_muted.mp4" type="video/mp4">
  </video>
  <img src="./ai-vid_GET/logo.png" class="logoImg"/>
  <div id="questionText" class="questionText">
    
  </div>
</div>
<div id="readyState">
  <video height="100%" width="100%" id="readyVideo" autoplay loop>
  </video>
  <div id="sendMessage">
      <div>Ready to send?</div>
      <div id="sendMessageChoice">
        <div id="choiceYes">Yes</div>
        <div id="choiceNo">No</div>
      </div>
    </div>
</div>
  `;
    var yesChoice = document.getElementById("choiceYes");
    var noChoice = document.getElementById("choiceNo");
    noChoice.onclick = () => formSubmit("no");
    var readyVideo = document.getElementById("readyVideo");
    var type = (recordedBlobs[0] || {}).type;
    var superBuffer = new Blob(recordedBlobs, { type });
    readyVideo.src = window.URL.createObjectURL(superBuffer);
    yesChoice.onclick = () => afterSelection(superBuffer);
  }

  function yesClick(form) {
    container.innerHTML += `<div class="confirmPage"><div class="confirmText">Uploading Data. Please wait ...</div></div>`;
    console.log();
    var fd = form.childNodes[1].value;

    var fdata = new FormData(form);
    var fd1;
    for (var pair of fdata.entries()) {
      fd1 = pair[1];
    }
    console.log(fd1);
    console.log(fd);
    var formdata = new FormData();
    formdata.append("filename", fd1, fd);
    // console.log(fd.get('#video_file'));
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
      mode: "no-cors",
    };
    fetch("http://103.107.66.31:9008/upload-file", requestOptions)
      .then((response) => response)
      .then((result) => {
        container.innerHTML +=
          '<div class="confirmPage"><div class="confirmText">Thank you for uploading the video</div><div class="confirmChoice"><div id="noBtn" class="confirmBtn">Back</div></div></div>';

        var noOption = document.getElementById("noBtn");

        noOption.onclick = () => {
          formSubmit("no");
        };
        return console.log(result);
      })
      .catch((error) => console.log("error", error));
  }

  function formSubmit(value) {
    console.log(value);
    if (value === "yes") {
      var toUpload = document.getElementById("upload");
      // toUpload.submit();
      var fdata = new FormData(document.getElementById("upload"));
      var fd;
      for (var pair of fdata.entries()) {
        fd = pair[1];
      }
      container.innerHTML = `
    <div class="adminSide">
    <video id="leftVideo" autoplay muted="muted" loop>
      <source src="./ai-vid_GET/matt_1_muted.mp4" type="video/mp4">
    </video>
    <img src="./ai-vid_GET/logo.png" class="logoImg"/>
    <div id="questionText" class="questionText">
      
    </div>
  </div>
  <div id="readyState">
    <video height="100%" width="100%" id="readyVideo" autoplay loop>
    </video>
    <div id="sendMessage">
      <div>Ready to send?</div>
      <div id="sendMessageChoice">
        <div id="choiceYes">Yes</div>
        <div id="choiceNo">No</div>
      </div>
    </div>
  </div>
    `;
      var readyVideo = document.getElementById("readyVideo");
      readyVideo.src = window.URL.createObjectURL(fd);
      var yesChoice = document.getElementById("choiceYes");
      console.log(yesChoice);
      console.log(fd);
      var superBuffer = new Blob([fd], { type: fd.type });
      yesChoice.onclick = () => yesClick(toUpload);
      // yesChoice.onClick = () => {
      //   console.log('Hello');
      //   document.body.appendChild(toUpload);
      //   toUpload.submit();
      // };
      var noChoice = document.getElementById("choiceNo");
      noChoice.onclick = () => formSubmit("no");
    } else if (value === "yes123") {
      download();
      container.innerHTML = `
    <div class="adminSide">
        <video id="leftVideo" autoplay muted="muted" loop>
          <source src="./ai-vid_GET/matt_1_muted.mp4" type="video/mp4">
        </video>
        <img src="./ai-vid_GET/logo.png" class="logoImg"/>
        <div id="questionText" class="questionText">
          
        </div>
      </div>
      <div id="userSide">
        <div class="startVideo">
          <div class="recordStart" onclick="startFrame()">
            <i class="fas fa-video"></i> Record your video
          </div>
          <div class="recordStart" onclick="">
                  <i class="fas fa-upload"></i> Upload your video
                  </div>
          <div>
            You can practice before sending.
          </div>
        </div>
      </div>
    `;
      document.getElementById("questionText").innerHTML = QuestionMsg;
    } else {
      container.innerHTML = `
    <div class="adminSide">
        <video id="leftVideo" autoplay muted="muted" loop>
          <source src="./ai-vid_GET/matt_1_muted.mp4" type="video/mp4">
        </video>
        <img src="./ai-vid_GET/logo.png" class="logoImg"/>
        <div id="questionText" class="questionText">
          
        </div>
      </div>
      <div id="userSide">
        <div class="startVideo">
          <div class="recordStart" onclick="startFrame()">
          <i class="fas fa-video"></i> Record your video
          </div>
          <div class="recordStart" onclick="">
                  <i class="fas fa-upload"></i> Upload your video
                  </div>
          <div>
            You can practice before sending.
          </div>
        </div>
      </div>
    `;
      document.getElementById("questionText").innerHTML = QuestionMsg;
    }
  }

  function play() {
    var type = (recordedBlobs[0] || {}).type;
    var superBuffer = new Blob(recordedBlobs, { type });
    recordedVideo.src = window.URL.createObjectURL(superBuffer);
  }

  function download() {
    var blob = new Blob(recordedBlobs, { type: "video/webm" });
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "test.webm";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 100);
  }
}

// window.isSecureContext could be used for Chrome
