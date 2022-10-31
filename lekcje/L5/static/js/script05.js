$(document).ready(function () {
    $("#input").on("click", function (e) {
        let X = e.offsetX
        let Y = e.offsetY
        let div = $("<div>")
        div.addClass("clickDiv")
        div.css("top", `${Y}px`)
        div.css("left", `${X}px`)
        $("#input").append(div)
        $.ajax({
            url: "/post",
            contentType: 'application/json',
            data: JSON.stringify({
                X: X,
                Y: Y
            }),
            type: "POST",
            success: function (data) {
                var obj = JSON.parse(data)
                console.log(obj)
                let div = $("<div>")
                div.addClass("clickDiv")
                div.css("top", `${obj.Y}px`)
                div.css("left", `${obj.X}px`)
                $("#output").append(div)

            },
            error: function (xhr, status, error) {
                console.log('Error: ' + error.message);
            },
        });
    })
})