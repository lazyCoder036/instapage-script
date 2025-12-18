//Begin "facebook datalayer push
//Add to settings -> Javascript -> Footer
//<script>
//add page url into the url input field - without query string;
//cdn.jsdelivr.net is being used to deliver the script
//make sure to purge the CDN cache if you make any changes to the script
document.addEventListener("DOMContentLoaded", function () {
    var link = window.location.href.toString().split("?")[0];
    console.log("This is the link after update : " + link);
    var fieldName = "url";
    var urlArray = document.getElementsByName(fieldName);
    for (let i = 0; i < urlArray.length; i++) {
        urlArray[i].value = link;
    }
});
//add page url into the url input field - without query string; --END HERE


window.instapageFormSubmitSuccess = function (form) {
    // Get values from form fields
    console.log(form.querySelectorAll('input'));
    let param1 = form.querySelector('input[name="First Name"]');
    if (param1) {
        param1 = encodeURIComponent(param1.value);
    } else {
        param1 = "N/A";
    }
    
    let param2 = form.querySelector('input[name="Last Name"]');
    if (param2) {
        param2 = encodeURIComponent(param2.value);
    } else {
        param2 = "N/A";
    }
    
    let param3 = form.querySelector('input[name="Email"]');
    if (param3) {
        param3 = param3.value;
    } else {
        param3 = "N/A";
    }
    
    let param4 = form.querySelector('input[name="Phone number"]');
    if (param4) {
        param4 = encodeURIComponent(param4.value);
    } else {
        if (form.querySelector('input[name="Phone"]')) {
            param4 = encodeURIComponent(form.querySelector('input[name="Phone"]').value);
        } else {
            param4 = "N/A";
        }           
    }
    
    let param5 = form.querySelector('input[name="Postcode"]');
    if (param5) {
        param5 = encodeURIComponent(param5.value);
    } else {
        param5 = "N/A";
    }
    // Get values from form fields -- END HERE
    
    
    // Log the values to the console
    console.log(param1 + "  " + param2 + "  " + param3 + "  " + param4 + "  " + param5);
    
    //push customer info into data layer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'formSubmissionSuccess',
        'formId': 'contactForm',
        'first_name': param1,
        'last_name': param2,
        'email': param3,
        'phone': param4,
        'postcode': param5
    });
};

//accordion code starts here
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
//accordion code ends here

//to the top button code START HERE

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // Get the button:
    let mybutton = document.getElementById("myBtn");
    if (mybutton) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }else{
        return;
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//to the top button code END HERE
//   </script>


