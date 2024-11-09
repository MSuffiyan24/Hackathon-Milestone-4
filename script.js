var form = document.getElementById('Resume-Builder');
var displayform = document.getElementById('Resume-Display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var FatherName = document.getElementById('FatherName').value;
    var Age = document.getElementById('Age').value;
    var Phone = document.getElementById('Phone').value;
    var Email = document.getElementById('Email').value;
    var Address = document.getElementById('Address').value;
    var Experience = document.getElementById('Experience').value;
    var Education1 = document.getElementById('Education1').value;
    var Education2 = document.getElementById('Education2').value;
    var Education3 = document.getElementById('Education3').value;
    var Skills1 = document.getElementById('Skills1').value;
    var Skills2 = document.getElementById('Skills2').value;
    var Skills3 = document.getElementById('Skills3').value;
    var Skills4 = document.getElementById('Skills4').value;
    var Objective = document.getElementById('Objective').value;
    var Reference = document.getElementById('Reference').value;
    var resumedisplay = "\n<h1><b>Editable Resume</b></h1>\n\n<h2><b>Objective:</b></h2\n<p  contenteditable='true'>".concat(Objective, "</p>\n\n<h2><b>Education:</b></h2>\n<p  contenteditable='true'>").concat(Education1, "</p>\n<p  contenteditable='true'>").concat(Education2, "</p>\n<p  contenteditable='true'>").concat(Education3, "</p>\n\n<h2><b>Experience:</b></h2\n<p  contenteditable='true'>").concat(Experience, "</p>\n\n<h2><b>Skills:</b></h2>\n<p  contenteditable='true'>").concat(Skills1, "</p>;\n<p  contenteditable='true'>").concat(Skills2, "</p>;\n<p  contenteditable='true'>").concat(Skills3, "</p>;\n<p  contenteditable='true'>").concat(Skills4, "</p>;\n\n<h2><b>Personal Information</b></h2>\n<p><b>Name:</b><span contenteditable='true'>").concat(name, "</span></p>\n<p><b>Father Name:</b><span contenteditable='true'>").concat(FatherName, "</span></p>\n<p><b>Age:</b><span contenteditable='true'>").concat(Age, "</span></p>\n<p><b>Phone:</b><span contenteditable='true'>").concat(Phone, "</span></p>\n<p><b>Email:</b><span contenteditable='true'>").concat(Email, "</span></p>\n<p><b>Address:</b><span contenteditable='true'>").concat(Address, "</span></p>\n\n<h2><b>Reference:</b></h2\n<p  contenteditable='true'>").concat(Reference, "</p>\n\n");
    if (displayform) {
        displayform.innerHTML = resumedisplay;
    }
    else {
        console.error('missing feild');
    }
});
