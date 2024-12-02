// Function to draw a circular meter
function drawMeter(canvasId, percentage, color) {
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext('2d');
    var radius = canvas.width / 2;
    var lineWidth = 15;
    var endAngle = (percentage / 100) * 2 * Math.PI;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the background circle
    ctx.beginPath();
    ctx.arc(radius, radius, radius - lineWidth / 2, 0, 2 * Math.PI);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = '#e6e6e6'; // Light grey for the background
    ctx.stroke();

    // Draw the foreground circle representing the percentage
    ctx.beginPath();
    ctx.arc(radius, radius, radius - lineWidth / 2, -Math.PI / 2, endAngle - Math.PI / 2);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color; // Color for the percentage
    ctx.stroke();

    // Draw the percentage text
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = color;
    ctx.fillText(percentage + '%', radius, radius);
}

// Ensure the function runs after the page loads
window.onload = function() {
    drawMeter('blocked-canvas', 75, '#007f00'); // Example: 75% blocked
    drawMeter('identified-canvas', 60, '#007f00'); // Example: 60% identified
    drawMeter('score-canvas', 85, '#007f00'); // Example: 85% score
};
