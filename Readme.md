
# webcam

  Capture video from webcam

## Installation

    $ component install michalmiskernik/webcam

## Examples

  See `example.html`.

## API

### webcam.record(success, fail)
  
  Try to start recording video from the webcam. The `success` callback is then
  called with `video` element, which can be inserted into DOM or drawn on a canvas.

  In case of failure, the `fail` callback is called with a error message.

### webcam.supported
  
  Boolean value that can be used to check for webcam recording support.

## License

  MIT
