const regNname = /^[a-zA-Z]+$/;
const regPhone = new RegExp("^[0-9]{10}$");
const regEmail = RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')

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
                }
                else if(!regPhone.test(data))
                    {
                        $("#phoneErr").html("<p style='color:red'>* Invalid Phone Number</p>");
                    }
                else {
                    $("#phoneErr").html("");
                }
            }
    $("#email").keyup(emailErr);
            function emailErr() {
                let data = $(this).val();
                console.log(data);
                if (data.length < 1) {
                    $("#emailErr").html("<p style='color:red'>* Required Field</p>");
                }
                else if(!regEmail.test(data))
                    {
                        $("#emailErr").html("<p style='color:red'>* Invalid Email</p>");
                    }
                   else {
                    $("#emailErr").html("");
                }
            }


  const $menuToggle = $("#menuToggle");
  const $navbarItems = $("#navbarItems");
  const $icon = $menuToggle.find("i");

  // Toggle menu on click
  $menuToggle.on("click", function () {
    $navbarItems.toggleClass("active");

    if ($navbarItems.hasClass("active")) {
      $icon.removeClass("ri-menu-3-line").addClass("ri-close-line");
    } else {
      $icon.removeClass("ri-close-line").addClass("ri-menu-3-line");
    }
  });

  // Close menu when clicking a nav link (on small screens)
  $(".nav-list a").on("click", function () {
    if ($(window).width() <= 991) {
      $navbarItems.removeClass("active");
      $icon.removeClass("ri-close-line").addClass("ri-menu-3-line");
    }
  });

  // Close menu when window is resized above 991px
  $(window).on("resize", function () {
    if ($(window).width() > 991) {
      $navbarItems.removeClass("active");
      $icon.removeClass("ri-close-line").addClass("ri-menu-3-line");
    }
  });
  
  let stickyNavTop = $(".navbar").offset().top;
  console.log(stickyNavTop)
  function stickyNav() {
    let scrollTop = $(window).scrollTop();
    console.log(scrollTop)

    if (scrollTop > stickyNavTop) {
      $(".navbar").addClass("sticky");
      console.log("added");
    } else {
      $(".navbar").removeClass("sticky");
    }
  }

  stickyNav();

  $(window).on("scroll", function () {
    stickyNav();
  });
});

