document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    setTimeout(function () {
      document.title = "Come back 😢";
    }, 1000); // Delay of 2000 milliseconds (2 seconds)
  } else {
    setTimeout(function () {
      document.title = "Thank you for coming back! 😊";
      setTimeout(function () {
        document.title = "Sonny Taylor";
      }, 2000); // Delay of 2000 milliseconds (2 seconds)
    }, 1000); // Delay of 1000 milliseconds (1 second)
  }
});
