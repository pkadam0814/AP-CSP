var convos = 0;
var mindmeter = 0;
var overallscore = [];
var selection = 0;
// Main Function
function updateOS(interactions) {

  var sessionScore = mindmeter + convos +interactions;

// List Usage
  appendItem(overallscore, sessionScore);

  
  var total = 0;
  var highest = overallscore[0];

  for (var i = 0; i < overallscore.length; i++) {
    total = total + overallscore[i];

    if (overallscore[i] > highest) {
      highest = overallscore[i];
    }
  }

  if (total >= 10) {
   showElement("label39");
    setText("label39", "You're on Fire!");
  } else {
    showElement("label41");
    setText("label41", "Keep Going!");
  }
  setText("label10", total);
  
  var average= total/overallscore.length;
  setText("label47",average);
  setText ("label54",interactions);
  setText("label49",highest);
}



onEvent("welcomelogoimage", "click", function( ) {
  setScreen("mindmeterq1");
});
onEvent("statsbutton", "click", function( ) {
  setScreen("statspage");
  
});
onEvent("chattersmap", "click", function( ) {
  setScreen("chattersmappage");
});
onEvent("actionrank", "click", function( ) {
  setScreen("convotrackerpage");
});
onEvent("settingsbutton", "click", function( ) {
  setScreen("settings");
// ConvoTracker: Lines 58-73
});
onEvent("record", "click", function( ) {
  playSpeech("Lets Ignite the Spark!", "male", "English");
  showElement("sparksteractionrank");
  showElement("label1");
  showElement("stoprecord");
  convos = convos+1;
  setText("label3",convos);
  
});
onEvent("stoprecord", "click", function( ) {
    hideElement("sparksteractionrank");
  hideElement("label1");
  hideElement("stoprecord");
  
});  
onEvent("homeconvotracker", "click", function( ) {
  setScreen("homescreen");
});
onEvent("button8", "click", function( ) {
   setScreen("homescreen");
});
onEvent("button14", "click", function( ) {
   setScreen("homescreen");
});
onEvent("button4", "click", function( ) {
   setScreen("homescreen");
});
onEvent("button6", "click", function( ) {
   setScreen("chattersmappage");
});
onEvent("button7", "click", function( ) {
   setScreen("homescreen");
});
onEvent("button15", "click", function( ) {
   setScreen("homescreen");
});
onEvent("button16", "click", function( ) {
   setScreen("sparkconnect");
});
onEvent("connectbutton", "click", function( ) {
   setScreen("sparkconnect");
});
onEvent("button10", "click", function( ) {
  setScreen("halepark");
  
});
onEvent("button3", "click", function( ) {
  setScreen("soccer");
});
onEvent("button22", "click", function( ) {
 setScreen("homescreen");
});
onEvent("button23", "click", function( ) {
   setScreen("sparkconnect");
});
onEvent("button11", "click", function( ) {
  setScreen("Pranav");
  // SocialSparkConnect: Lines 117-123
});
onEvent("button19", "click", function( ) {
  playSpeech("Send a Message!", "male", "English");
  hideElement("image13");
  showElement("text_input2");
  // Call to function
});
onEvent("text_input2", "click", function( ) {
  updateOS(1);
});

onEvent("home3", "click", function( ) {
  setScreen("homescreen");
});
onEvent("button25", "click", function( ) {
  setScreen("mindmeterq2");
});
onEvent("firstbutton", "click", function( ) {
   setScreen("mindmeterq3");
});
onEvent("button24", "click", function( ) {
   setScreen("mindmeterq4");
});
onEvent("button27", "click", function( ) {
   setScreen("mindmeterq5");
});
onEvent("button28", "click", function( ) {
   setScreen("mindmeterq6");
});
onEvent("button29", "click", function( ) {
   setScreen("mindmeter7");
});
onEvent("button57", "click", function( ) {
   setScreen("homescreen");
});
onEvent("button35", "click", function( ) {
   setScreen("mindmeterq8");
});
onEvent("button44", "click", function( ) {
   setScreen("mindmeterq9");
});
onEvent("button48", "click", function( ) {
   setScreen("mindmeterq10");
});
onEvent("button53", "click", function( ) {
   setScreen("mindmetefinish");
});
onEvent("image14", "click", function( ) {
  playSpeech("Congrats! You've finished your first Mind Meter", "male", "English");
});
onEvent("button59", "click", function( ) {
   setScreen("homescreen");
  // MindMeter functionality
});
onEvent("button43", "click", function( ) {
   mindmeter= mindmeter+ 1;
});
onEvent("button45", "click", function( ) {
   mindmeter= mindmeter+ 1;
});
onEvent("dropdown2", "change", function( ) {
  
  selection = getNumber("dropdown2");
  if (selection===10) {
    mindmeter= mindmeter+3;
  } else if (selection>5) {
    mindmeter= mindmeter+2;
  } else {
     mindmeter= mindmeter+ 1;
  }
  
});
onEvent("dropdown3", "change", function( ) {
  
  selection = getNumber("dropdown3");
  if (selection===10) {
    mindmeter=mindmeter+3;
  } else if (selection>5) {
    mindmeter=mindmeter+2;
  } else {
     mindmeter= mindmeter+ 1;
  }
});
onEvent("button54", "click", function( ) {
  mindmeter= mindmeter+ 1;
  setText("label38", mindmeter);
});
