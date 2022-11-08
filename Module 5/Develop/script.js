let dayoftime = $("#currentDay");
let timec = $(".fa-save");


// Time display
let currentHour = moment().format("HH:mm");

dayoftime.text(moment().format("dddd, MMMM Do, YYYY h:mm A")); // Displays date and time

setInterval(function () { // Reloads date and time every minute.
  dayoftime.text (moment().format("dddd, MMMM Do, YYYY h:mm A")); // Edit 
  if (moment().format("mm") === "00") {
    reload_colours();
  }
}, 1000)

let content = []; // Initiate data storage

// Initiate local storage
if (localStorage.getItem("slot-0") === null) {
  for (i = 0; i < 9; i++) {
    let new_store_key = "slot-"+i;
    localStorage.setItem(new_store_key,""); 
  }
} 

for (i = 0; i < 9; i++) {
  content.push(localStorage.getItem("slot-"+i));
}
fill_spaces(content);

function fill_spaces(content) {
  for (i = 0; i< 9; i++) {
    let index = 9+i;
    let tag = "#"+index;
    if (tag.length===2) {
      tag = "#0" + index;
      console.log(tag)
    }
    if (index<moment().format("H")) { // Format colour
      let box = tag+"-box";
      $(box).addClass("past");
    } else if (index == moment().format("H")) {
      let box = tag+"-box";
      $(box).addClass("present");
    } else {
      let box = tag+"-box";
      $(box).addClass("future");
    }
    $(tag).text(content[i]);
  }
}

function reload_colours() {
  for (i = 0; i< 9; i++) {
    let index = 9+i;
    let tag = "#"+index;
    if (tag.length===2) {
      tag = "#0" + index;
      console.log(tag)
    }
    if (index<moment().format("H")) { // Format colour
      let box = tag+"-box";
      $(box).addClass("past");
    } else if (index == moment().format("H")) {
      let box = tag+"-box";
      $(box).addClass("present");
    } else {
      let box = tag+"-box";
      $(box).addClass("future");
    }
  }
}

timec.on("click", function(event) {
  let timesave = event.target.id;
  timesave = timesave.substring(0,2);
  let text = document.getElementById(timesave).value;
  timesave++;
  timesave-=10;
  localStorage.setItem("slot-"+timesave,text)
}) 