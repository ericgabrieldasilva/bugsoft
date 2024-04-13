$(window).on("load", function () {
  setTimeout(function () {
    $("div.overlay-load").css("display", "none")
  }, 1000)
  $("html, body").css("overflow", "visible")
})
