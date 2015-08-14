'use strict';

$(document).ready(function () {
  $("#myButton").on("click", function (e) {
    if ($("#name").val().length === 0 || $("#class").val().length === 0 || $("#number").val().length === 0) {
      $('#myModal').modal('show');
      e.preventDefault();
    }
  })
});


