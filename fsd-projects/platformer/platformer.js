$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0, 600, 300, 20, "blue");
    createPlatform(350, 670, 150, 20, "blue");

    createPlatform(430, 230, 350, 15, "blue");
    createPlatform(650, 360, 150, 15, "blue");
    createPlatform(970, 450, 20, 10, "blue");
    createPlatform(950, 540, 300, 15, "blue");
    createPlatform(1200, 650, 300, 15, "blue");

    createPlatform(0, 500, 20, 10, "blue");
    createPlatform(0, 400, 20, 10, "blue");
    createPlatform(0, 300, 20, 10, "blue");
    createPlatform(0, 200, 20, 10, "blue");



    // TODO 3 - Create Collectables
    // createCollectable();
    createCollectable("diamond", 0, 130, 0,);
    createCollectable("database", 25, 650, 0);
    createCollectable("diamond", 950, 140 , 0);
    createCollectable("grace", 300, 170, 0.5, 0.7);
    createCollectable("kennedi", 350, 170, 0.5, 0.7);
    createCollectable("max", 450, 170, 0.5, 0.7);
    createCollectable("steve", 500, 170, 0.5, 0.7);


    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
