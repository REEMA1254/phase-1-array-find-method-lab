function superbowlWin(arrayOfObjects) {
    const win = arrayOfObjects.find((game) => game.result === "W");
    return win ? win.year : undefined;
  }
  const superBowlGames = [
    { year: 2020, result: "L" },
    { year: 2021, result: "W" },
    { year: 2022, result: "L" },
  ];
  
  const winningYear = superbowlWin(superBowlGames);
  console.log(winningYear);
