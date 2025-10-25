const regNname = /^[a-zA-Z]+$/;

$(document).ready(function() {
    $("#firstName").keyup(firstNameErr);
       function firstNameErr() {
         let data = $(this).val();
        console.log(data);
        if (data.length < 1) {
            $("#firstNameErr").html("<p style='color:red'>* Required Field</p>");
        }
        else if(!regFname.test(data))
            {
                $("#firstNameErr").html("<p style='color:red'>* Invalid Name</p>");
            } 
            else {
            $("#firstNameErr").html("");
        }
    }
    $("#lastName").keyup(lastNameErr);
         function lastNameErr() {
              let data = $(this).val();
                console.log(data);
                if (data.length < 1) {
                    $("#lastNameErr").html("<p style='color:red'>* Required Field</p>");
                }
                else if(!regNname.test(data))
                    {
                        $("#lastNameErr").html("<p style='color:red'>* Invalid Name</p>");
                    }
                else {
                    $("#lastNameErr").html("");
                }
            }
    $("#phone").keyup(phoneErr);
            function phoneErr() {
                let data = $(this).val();
                console.log(data);  
                if (data.length < 1) {
                    $("#phoneErr").html("<p style='color:red'>* Required Field</p>");
                } else {
                    $("#phoneErr").html("");
                }
            }
    $("#email").keyup(emailErr);
            function emailErr() {
                let data = $(this).val();
                console.log(data);
                if (data.length < 1) {
                    $("#emailErr").html("<p style='color:red'>* Required Field</p>");
                } else {
                    $("#emailErr").html("");
                }
            }
});