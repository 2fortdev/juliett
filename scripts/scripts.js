
$(function () {
    $('#favSand').change(function() {
        $('#side').prop('disabled', false);
    })
    
    $("#submitButton").click(function () {

        if ($("#mainForm")[0].checkValidity())
            confirm("Is the information you entered correct?");
        else
            //Validate Form
            $("#mainForm")[0].reportValidity()
    
    })


    
  });
  
  // some more code to steal...
  // div class="container">
  //   <input type='text' id='name' placeholder='Enter your name'><br/><br/>
  //   <input type='text' id='age' placeholder='Enter your age'>
  // </div>
  
  // <!-- Script -->
  // <script>
  // $(document).ready(function(){
  //   $("#age").keypress(function(e){
  //     var keyCode = e.which;
  //     /*
  //     8 - (backspace)
  //     32 - (space)
  //     48-57 - (0-9)Numbers
  //     */
  //     if ( (keyCode != 8 || keyCode ==32 ) && (keyCode < 48 || keyCode > 57)) {
  //       return false;
  //     }
  //   });
  
  //   $("#name").keypress(function(e){
  //     var keyCode = e.which;
  
  //     /*
  //     48-57 - (0-9)Numbers
  //     65-90 - (A-Z)
  //     97-122 - (a-z)
  //     8 - (backspace)
  //     32 - (space)
  //     */
  //     // Not allow special
  //     if ( !( (keyCode >= 48 && keyCode <= 57)
  //       ||(keyCode >= 65 && keyCode <= 90)
  //       || (keyCode >= 97 && keyCode <= 122) )
  //       && keyCode != 8 && keyCode != 32) {
  //       e.preventDefault();
  //     }
  //   });
  // });
  // </script>