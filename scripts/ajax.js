// $(function() {


    $('#btnLoadData').click(function() {
        console.log("clicked");
    
        //let jsonURL = "https://www.w3schools.com/jquery/demo_ajax_json.js";
    
        let jsonURL = "demo.json";
    
        // let jsonURL = "https://barrycumbie.github.io/376-india-lab/demo.json";
    
        $.ajax({
            url: jsonURL,
            dataType: "json",
            success: function(data) {
                //data = $.parseJSON(result);
                console.log(data);
                console.log(data.Firstname);
                $("#Firstname").val(data.Firstname);
                $("#Lastname").val(data.Lastname);
                $("#Age").val(data.Age);
                $("#Address").val(data.Address);
                $("#appt").val(data.appt);
                $("#favSand").val(data.fav_sandwich);
                $("#Italian").prop("checked", true).trigger("click");
                $("#side").val("1");
                // $.each(data, function(result) {
                //     $("#dataContainer").append(result + " ");
                // });
            }
        });
    });
    
    
    
    // end of doc ready f/n
    // });