# Responsive Boxes on Home Page
$ ->
  $('#response').imagesLoaded ->
    $('#response').masonry
      itemSelector: '.box'
      isFitWidth: true