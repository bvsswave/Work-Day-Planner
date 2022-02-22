// Just so I can remember the criteria

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// Variables

var saveBtn = $(".saveBtn");

// Functions

// THEN the current day is displayed at the top of the calendar
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// color coded to indicate if it is in the past, present, or future
function timeBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        // current hour
        var currHour = parseInt($(this).attr("id"));

        // console.log(this)

        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// WHEN I click into a time block
saveBtn.on("click", function() {

    var time = $(this).siblings(".hour").text();
    var plan = $(this).sibling("plan").val();
    
// THEN I can enter an event
    localStorage.setItem(time, plan);  
});

// WHEN I refresh the page
// THEN the saved events persist

function usePlanner() {
    $(".hour").each(function() {
        var currHour = $(this).text();
        var currPlan = localStorage.getItem(currHour);

        if(currPlan !== null) {
            $(this).siblings(".plan").val(currPlan);
        }
    });
}


timeBlockColor();
usePlanner();
