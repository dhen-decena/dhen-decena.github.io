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

    // left 2
    createPlatform(150, 600, 100, 20, "yellow", 150, 300, 2, 600, 600, 0);
    createPlatform(0, 600, 300, 20, "blue");
    createPlatform(350, 670, 100, 20, "blue");

    //right
    createPlatform(650, 360, 170, 15, "blue");
    createPlatform(970, 450, 20, 10, "blue");
    createPlatform(950, 540, 300, 15, "blue");
    createPlatform(1200, 650, 300, 15, "blue");

    // mini platforms
    createPlatform(0, 500, 35, 10, "green");
    createPlatform(0, 400, 30, 10, "green");
    createPlatform(0, 300, 25, 10, "green");
    createPlatform(0, 200, 20, 10, "green");

    // createBadPlatform(650, 720, 20, 10, "red");
    // createBadPlatform(750, 720, 20, 10, "red");

    createPlatform(650, 600, 20, 150, "yellow", 650, 650, 0, 600, 750, 1);
    createPlatform(750, 650, 20, 150, "yellow", 750, 750, 0, 600, 750, 1);
    createPlatform(400, 300, 40, 10, "yellow", 400, 500, 0, 300, 500, 1);

    // kill blocks
    createBadPlatform(650, 500, 20, 100, "red");
    createBadPlatform(750, 500, 20, 100, "red");
    createBadPlatform(950, 555, 100, 5, "red");


    // TODO 3 - Create Collectables
    // createCollectable();
    createCollectable("diamond", 0, 130, 0,);
    createCollectable("database", 25, 650, 0);
    createCollectable("diamond", 950, 140 , 0);

    createCollectable("database", 702, 310 , 0);
    createCollectable("database", 1325, 600 , 0);

    
    // TODO 4 - Create Cannons

      createCannon("right", 120, 1500);
      createCannon("bottom", 450, 1400);
      // createCannon("top", 930, 1200);
      createCannon("top", 1200, 1700, 20, 20, 1100, 1400, 3);
      // for sm reason last function is wrong

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
