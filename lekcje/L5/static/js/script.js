$(document).ready(function () {
    $("#sendDiv").on("click", function () {
        let numer1 = $("#numer1").val()
        let numer2 = $("#numer2").val()
        $.ajax({
            url: "/post",
            contentType: 'application/json',
            data: JSON.stringify({
                numer1: numer1,
                numer2: numer2,
            }),
            type: "POST",
            success: function (data) {
                var obj = JSON.parse(data)
                console.log(obj)

                alert(`Suma: ${obj.suma}, Iloczyn: ${obj.iloczyn}`)

            },
            error: function (xhr, status, error) {
                console.log('Error: ' + error.message);
            },
        });
    })
})