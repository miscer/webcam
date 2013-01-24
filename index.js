var URL = window.URL || window.webkitURL;

var getUserMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia;

module.exports = function(opts) {
  var video = document.createElement('video');
  video.autoplay = true;

  getUserMedia.call(navigator, {video: true}, function(stream) {
    video.src = URL.createObjectURL(stream);
    opts.success(video);
  }, opts.fail);
};
