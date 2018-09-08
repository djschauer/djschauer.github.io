$(document).ready(function(){

var config = {
    apiKey: "AIzaSyD7DiUHP3uzdIyM2b7TWeOoA_Nd1V-IBgU",
    authDomain: "train-schedule-3c078.firebaseapp.com",
    databaseURL: "https://train-schedule-3c078.firebaseio.com",
    projectId: "train-schedule-3c078",
    storageBucket: "train-schedule-3c078.appspot.com",
    messagingSenderId: "89937320734"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#subBtn").click(function(event){
    event.preventDefault()

    trainName = $("#train").val().trim();
    destination = $("#destination").val().trim();
    firstTrainTime = $("#time").val().trim()
    frequency = $("#frequency").val().trim();

    console.log(firstTrainTime);

    database.ref().push({    
        trainName: trainName,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
    $("#train").val("");
    $("#destination").val("");
    $("#time").val("");
    $("#frequency").val("");
});

database.ref().on("child_added", function(snapshot){
        
    var sv = snapshot.val();
    var currentTime = moment()

    var newRow = $("<tr>");
    var trainTd = $("<td>");
    var destinationTd = $("<td>");
    var frequencyTd = $("<td>");
    var timeTd = $("<td>");
    var minutesTd = $("<td>");

    var convertedTime = moment(sv.firstTrainTime, 'HH:mm').subtract(1, 'years');
    var trainTime = moment(convertedTime).format('HH:mm');
    var convertedTrainTime = moment(trainTime, 'HH:mm').subtract(1, 'years');
    var timeDiff = currentTime.diff(moment(convertedTrainTime), 'minutes');
    var timeRemainder = timeDiff % sv.frequency;
    var minutesAway = sv.frequency - timeRemainder;
    var nextTrain = currentTime.add(minutesAway, 'minutes');


    trainTd.text(sv.trainName);
    destinationTd.text(sv.destination);
    timeTd.text(nextTrain);
    frequencyTd.text(sv.frequency);
    minutesTd.text(minutesAway);

    newRow.append(trainTd);
    newRow.append(destinationTd);
    newRow.append(frequencyTd);
    newRow.append(timeTd);
    newRow.append(minutesTd);

    $("#tBody").append(newRow);
    
});


});