var speech_recogniser = window.webkitSpeechRecognition;

var recogniser = new speech_recogniser();

var text_box = document.getElementById("textbox");

function start() {
    text_box.innerHTML = "";
    recogniser.start();
}

recogniser.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    text_box.innerHTML = content;
    speak();
}

function speak() {
    var synth = window.speechSynthesis;
    speakdata = document.getElementById("textbox").value;
    var utter = new SpeechSynthesisUtterance(speakdata);
    if (speakdata == "take me selfie") {
        var utter = new SpeechSynthesisUtterance("taking you selfie in 5 seconds");
        synth.speak(utter);
        setTimeout(function () {
            takeselfie();
            save();
        }, 5000);
    }
    else {
        synth.speak(utter);
    }
}

camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 300,
    image_formate: "png",
    png_quality: 1000
});
Webcam.attach("camera");

function takeselfie() {
    Webcam.snap(function (data_photo) {
        document.getElementById("result").innerHTML = '<img id="photo_img" src="' + data_photo + '">';
    })
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("photo_img").src;
    link.href = image;
    link.click();
}