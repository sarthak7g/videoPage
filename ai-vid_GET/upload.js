$( document).ready(function() {
    $("form").submit(function(e) {
        e.preventDefault();
        var fd = new FormData($("form")[0]);
        $.ajax({
          url: $(this).attr('action'),
          data: fd,
          processData: false,
          contentType: false,
          crossDomain: true,
          headers: {'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'},
          type: 'POST',
          success: function(data, textStatus, xhr){
            $(".video-display").html('<p>' + data.html + '</p>');
            console.log('success:' + data.url);
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) {
            // do something with error
            console.log("Upload Failed for video: "  + errorThrown);
          },
          xhr: function()
          {
            var xhr = new window.XMLHttpRequest();
            xhr.upload.addEventListener("progress", function(evt){
              if (evt.lengthComputable) {
                var percentComplete = (evt.loaded / evt.total) * 100.0;
                console.log('upload completion: ' + percentComplete.toFixed(2) + '%');
              }
            }, false);
            return xhr;
          }
      });
    });
  
  });