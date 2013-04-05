var URL = window.URL || window.webkitURL;

var getUserMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia;

exports.record = function(success, fail) {
  var video = document.createElement('video');

  video.addEventListener('canplay', function() {
    success(video);
  });

  getUserMedia.call(navigator, { video: true }, function(stream) {
    video.src = URL.createObjectURL(stream);
    video.play();
  }, fail);
};

exports.supported = !!getUserMedia && !!URL;
