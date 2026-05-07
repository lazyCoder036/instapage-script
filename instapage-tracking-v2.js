//Begin "facebook datalayer push
//Add to settings -> Javascript -> Footer
//<script>

document.addEventListener("DOMContentLoaded", function () {
    // --- URL field (without query string) ---
    var link = window.location.href.toString().split("?")[0];
    console.log("This is the link after update : " + link);
    var urlArray = document.getElementsByName("url");
    for (let i = 0; i < urlArray.length; i++) {
        urlArray[i].value = link;
    }

    // --- UTM Parameter Population ---
    const utmMap = {
        utm_source:   'utm source',
        utm_campaign: 'utm campaign',
        utm_agid:     'utm agid',
        utm_term:     'utm term',
        utm_content:  'utm content',
        device:       'device',
        ttclid:       'ttclid',
        gclid:        'gclid',
        msclkid:      'msclkid',
        fbclid:       'fbclid',
    };

    const params = new URLSearchParams(window.location.search);

    Object.entries(utmMap).forEach(([param, fieldName]) => {
        const value = params.get(param);
        if (value) {
            const input = document.querySelector(`input[name="${fieldName}"]`);
            if (input) input.value = value;
        }
    });
    // --- UTM Parameter Population END ---
});

// --- Form Submit Success → DataLayer Push ---
window.instapageFormSubmitSuccess = function (form) {
    console.log(form.querySelectorAll('input'));

    let param1 = form.querySelector('input[name="First Name"]');
    param1 = param1 ? encodeURIComponent(param1.value) : "N/A";

    let param2 = form.querySelector('input[name="Last Name"]');
    param2 = param2 ? encodeURIComponent(param2.value) : "N/A";

    let param3 = form.querySelector('input[name="Email"]');
    param3 = param3 ? param3.value : "N/A";

    let param4 = form.querySelector('input[name="Phone number"]') || form.querySelector('input[name="Phone"]');
    param4 = param4 ? encodeURIComponent(param4.value) : "N/A";

    let param5 = form.querySelector('input[name="Postcode"]');
    param5 = param5 ? encodeURIComponent(param5.value) : "N/A";

    console.log(param1 + "  " + param2 + "  " + param3 + "  " + param4 + "  " + param5);

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

// --- Accordion ---
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
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

// --- Scroll To Top Button ---
window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
    let mybutton = document.getElementById("myBtn");
    if (!mybutton) return;
    mybutton.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
        ? "block"
        : "none";
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//   </script>
