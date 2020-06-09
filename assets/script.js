// function to display time in the header
function displayTime() {
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#currentDay').html(time);
    setTimeout(displayTime, 1000);
}

// executing that function at the load of the page
$(document).ready(function() {
    displayTime();
});

// save on click
$(".saveBtn").on("click", function () {
    // nearby values to save on click
    var text = $(this).siblings(".text-entry").val();
    var time = $(this).parent().attr("id");

    // save to local storage on click
    localStorage.setItem(time, text);
})

// looping through the hours instead of writing them all out. 
for (let i = 9; i <= 17; i++) {
    $(`#hour${i} .text-entry`).val(localStorage.getItem(`hour${i}`));
}



function hourTracker() {
    // current time
    var currentHour = moment().hour();

    // let's add some conditions
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);

        // check if we've moved past this time
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}

hourTracker();