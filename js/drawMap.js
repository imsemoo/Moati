document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("mapCanvas");
  const ctx = canvas.getContext("2d");

  const originalWidth = 900;
  const originalHeight = 2664;
  const scaleX = canvas.width / originalWidth;
  const scaleY = canvas.height / originalHeight;

  // Function to draw a city
  const drawCity = (city, highlight = false) => {
    const points = city.points.split(",").map(Number);
    ctx.beginPath();
    ctx.moveTo(points[0] * scaleX, points[1] * scaleY);
    for (let i = 2; i < points.length; i += 2) {
      ctx.lineTo(points[i] * scaleX, points[i + 1] * scaleY);
    }
    ctx.closePath();

    if (highlight) {
      ctx.fillStyle = city.color;
      ctx.globalAlpha = 0.75; // Darken color
      ctx.fill();
      ctx.globalAlpha = 1; // Reset alpha
      ctx.strokeStyle = "#000"; // Border color for highlight
      ctx.lineWidth = 1; // Thicker border for highlight
      ctx.font = "12px Rubik"; // Use a font that supports Arabic script
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
    } else {
      ctx.font = "10px Rubik "; // Use a font that supports Arabic script
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      ctx.fillStyle = city.color;
      ctx.fill();
      ctx.strokeStyle = "#fff"; // Regular border color
      ctx.lineWidth = 1;
    }
    ctx.stroke(); // Apply border
    ctx.fillStyle = "#fff";
    canvas.addEventListener("click", function (event) {
      const rect = canvas.getBoundingClientRect();
      const clickX = (event.clientX - rect.left) / scaleX;
      const clickY = (event.clientY - rect.top) / scaleY;

      let clickedCity = null;

      citiesData.forEach((city) => {
        const points = city.points.split(",").map(Number);
        ctx.beginPath();
        ctx.moveTo(points[0], points[1]);
        for (let i = 2; i < points.length; i += 2) {
          ctx.lineTo(points[i], points[i + 1]);
        }
        ctx.closePath();

        if (ctx.isPointInPath(clickX, clickY)) {
          clickedCity = city;
        }
      });

      if (clickedCity) {
        window.location.href = clickedCity.link;
      }
    });

    // Label in the center
    const centerX =
      (points.filter((_, i) => i % 2 === 0).reduce((a, b) => a + b, 0) /
        (points.length / 2)) *
      scaleX;
    const centerY =
      (points.filter((_, i) => i % 2 !== 0).reduce((a, b) => a + b, 0) /
        (points.length / 2)) *
      scaleY;
    ctx.fillText(city.name, centerX, centerY);
  };

  // Draw all cities
  citiesData.forEach((city) => drawCity(city));

  // Hover effect
  const checkHover = (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = (event.clientX - rect.left) / scaleX;
    const mouseY = (event.clientY - rect.top) / scaleY;

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    citiesData.forEach((city) => {
      const points = city.points.split(",").map(Number);
      ctx.beginPath();
      for (let i = 0; i < points.length; i += 2) {
        ctx.lineTo(points[i], points[i + 1]);
      }
      ctx.closePath();

      // Check if the mouse is in the current city's path
      if (ctx.isPointInPath(mouseX, mouseY)) {
        drawCity(city, true); // Highlight city
      } else {
        drawCity(city);
      }
    });
  };

  canvas.addEventListener("mousemove", checkHover);
});
