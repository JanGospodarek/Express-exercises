$(document).ready(function () {
  $("#input").on("click", function (e) {
    let X = e.offsetX;
    let Y = e.offsetY;
    let div = $("<div>");
    div.addClass("clickDiv");
    div.css("top", `${Y}px`);
    div.css("left", `${X}px`);
    div.css("z-index", `1000`);

    $("#input").append(div);
    $.ajax({
      url: "/postHandle",
      contentType: "application/json",
      data: JSON.stringify({
        X: X,
        Y: Y,
      }),
      type: "POST",
      success: function (data) {
        // var obj = JSON.parse(data);
        console.log(data);
        let div = $("<div>");
        div.addClass("clickDiv");
        div.css("top", `${data.Y}px`);
        div.css("left", `${data.X}px`);
        $("#output").append(div);
      },
      error: function (xhr, status, error) {
        console.log("Error: " + error.message);
      },
    });
  });
});
