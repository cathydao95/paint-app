window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  // Resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  // TO RESIZE? bring in resizing characteristics into window.addEventListener('resize', )

  let painting = false;

  function startPosition(e) {
    painting = true;
    draw(e);
  }

  function finishedPosition() {
    painting = false;
    ctx.beginPath();
  }

  function draw(e) {
    //   IF NOT PAINTING, DON'T DO ANYTHING
    if (!painting) return;
    ctx.lineWidth = 10;
    // lineCAP to make the line Round
    ctx.lineCap = "round";

    // WHERE TO DRAW TO? CLIENT X AND CLIENT Y IS THE LOCATION OF MOUSE
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }
  //   Event Listeners
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);
});
