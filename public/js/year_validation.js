function validateBranch () {
    console.log("Branch Changed");

    if ($("#Branch").val() == "MCA") {
        $("#Year").val("1");
    }
    else  {
        $("#Year").val("2");
    }
}

$(document).ready(function () {
    $("#Name").focusout(function (event) {
        if (event.charCode!=0) {
            var regex = new RegExp("^[a-zA-Z ]+$");
            if (!regex.test($(this).val())) {
                $( "#Name" ).after( "<span class='validationerror'>Invalid Name </span>" );
            }
        }
    });

    $("#Name").focusin(function () {
        if (event.charCode!=0) {
            $("#Name").siblings("span").each(function () {
                $(this).remove()
            });
        }
    });

    $("#Email").focusout(function (event) {
        if (event.charCode!=0) {
            var regex = new RegExp("^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$");
            if (!regex.test($("#Email").val())) {
                $( "#Email" ).after( "<span class='validationerror'>Invalid Email</span>" );
            }
        }
    });

    $("#Email").focusin(function () {
        if (event.charCode!=0) {
            $("#Email").siblings("span").each(function () {
                $(this).remove()
            });
        }
    });


    $("#Contact").focusout(function (event) {
        if (event.charCode!=0) {
            var regex = new RegExp("^[0-9]{10}$");
            if (!regex.test($("#Contact").val())) {
                $( "#Contact" ).after( "<span class='validationerror'>Invalid Mobile Number </span>" );
            }
        }
    });

    $("#Contact").focusin(function () {
        if (event.charCode!=0) {
            $("#Contact").siblings("span").each(function () {
                $(this).remove()
            });
        }
    });


    $("#Student").focusout(function (event) {
        if (event.charCode!=0) {
            var regex = new RegExp("^[0-9]{7}[dD]?$");
            if (!regex.test($("#Student").val())) {
                $( "#Student" ).after( "<span class='validationerror'>Invalid Student Number </span>" );
            }
        }
    });

    $("#Student").focusin(function () {
        if (event.charCode!=0) {
            $("#Student").siblings("span").each(function () {
                $(this).remove()
            });
        }
    });


});


$(document).ready(function () {
    $("#Year").val("2");
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the year select element
  const yearSelect = document.getElementById('year');
  
  if (yearSelect) {
    // Add event listener for change event
    yearSelect.addEventListener('change', function() {
      const selectedYear = this.value;
      const rollNumberInput = document.getElementById('rollNumber');
      
      if (rollNumberInput) {
        // Validate roll number based on selected year
        rollNumberInput.addEventListener('input', function() {
          const rollNumber = this.value;
          let isValid = true;
          let errorMessage = '';
          
          // Basic validation rules based on year
          if (selectedYear === '1') {
            // First year students should have roll numbers starting with current year
            const currentYear = new Date().getFullYear().toString().substr(-2);
            if (!rollNumber.startsWith(currentYear)) {
              isValid = false;
              errorMessage = `First year roll numbers should start with ${currentYear}`;
            }
          } else if (selectedYear === '2') {
            // Second year students should have roll numbers starting with last year
            const lastYear = (new Date().getFullYear() - 1).toString().substr(-2);
            if (!rollNumber.startsWith(lastYear)) {
              isValid = false;
              errorMessage = `Second year roll numbers should start with ${lastYear}`;
            }
          } else if (selectedYear === '3') {
            // Third year students should have roll numbers starting with two years ago
            const twoYearsAgo = (new Date().getFullYear() - 2).toString().substr(-2);
            if (!rollNumber.startsWith(twoYearsAgo)) {
              isValid = false;
              errorMessage = `Third year roll numbers should start with ${twoYearsAgo}`;
            }
          } else if (selectedYear === '4') {
            // Fourth year students should have roll numbers starting with three years ago
            const threeYearsAgo = (new Date().getFullYear() - 3).toString().substr(-2);
            if (!rollNumber.startsWith(threeYearsAgo)) {
              isValid = false;
              errorMessage = `Fourth year roll numbers should start with ${threeYearsAgo}`;
            }
          }
          
          // Display validation message
          let validationMessage = document.getElementById('rollNumberValidation');
          if (!validationMessage) {
            validationMessage = document.createElement('div');
            validationMessage.id = 'rollNumberValidation';
            rollNumberInput.parentNode.appendChild(validationMessage);
          }
          
          if (!isValid && rollNumber.length > 0) {
            validationMessage.textContent = errorMessage;
            validationMessage.className = 'text-danger small';
            rollNumberInput.classList.add('is-invalid');
          } else {
            validationMessage.textContent = '';
            rollNumberInput.classList.remove('is-invalid');
            if (rollNumber.length > 0) {
              rollNumberInput.classList.add('is-valid');
            } else {
              rollNumberInput.classList.remove('is-valid');
            }
          }
        });
      }
    });
  }
});