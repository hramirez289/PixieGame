document.addEventListener("DOMContentLoaded", function() {
  var clickableImages = document.querySelectorAll('.clickable-image');
  clickableImages.forEach(function(image) {
    image.addEventListener('click', function() {
      var url = image.getAttribute('data-url');
      if (url) {
        window.location.href = url;
      }
    });
  });
});