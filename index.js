//js
// List of micro-organisms
var microOrganisms = ['Amoeba', 'Euglena', 'Hydra', 'Paramecium', 'Rod bacteria', 'Spherical bacteria', 'Spiral bacteria', 'Yeast'];

// Function to preview the uploaded image
function previewImage(event) {
    var reader = new FileReader();
    reader.onload = function() {
        var output = document.getElementById('imagePreview');
        output.innerHTML = '<img src="' + reader.result + '" style="max-width: 100%; max-height: 200px;" />';
    };
    reader.readAsDataURL(event.target.files[0]);
}

// Function to generate a random prediction
function generatePrediction(image) {
    // Dummy prediction generation based on the uploaded image (replace with your actual prediction logic)
    var randomIndex = Math.floor(Math.random() * microOrganisms.length);
    var prediction = microOrganisms[randomIndex];
    var predictionResult = document.getElementById('predictionResult');
    predictionResult.innerHTML = '<h4>Prediction Result: ' + prediction + '</h4>';
}

// Trigger prediction generation on file upload
document.getElementById('uploadInput').addEventListener('change', function(event) {
    var uploadedImage = event.target.files[0];
    previewImage(event);
    generatePrediction(uploadedImage);
});
