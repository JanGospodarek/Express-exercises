$(document).ready(function () {
  $("#inputRange").on("input", function () {
    let range = $("#inputRange").val();

    $.ajax({
      url: "/post",
      contentType: "application/json",
      data: JSON.stringify({
        range: range,
      }),
      type: "POST",
      success: function (data) {
        var obj = JSON.parse(data);
        console.log(obj);
        $("#outputRange").val(Number(obj.range));
      },
      error: function (xhr, status, error) {
        console.log("Error: " + error.message);
      },
    });
  });
});
