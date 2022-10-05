$(document).ready(function () {
  $("#menu-button").click(function () {
    $("header nav").slideToggle("slow", function () {
      $(this).toggleClass("showMenu");
    });
  });
});
