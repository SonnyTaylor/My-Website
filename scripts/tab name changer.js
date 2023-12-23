// Event listener for visibility change
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    // Set a timeout to change the document title after 2 seconds
    setTimeout(function () {
      document.title = "Come back 😢";
    }, 2000);
  } else {
    // Set a timeout to change the document title after 1 second
    setTimeout(function () {
      document.title = "Thanks for coming back! 😊";
      // Set another timeout to change the document title back to the original after 2 seconds
      setTimeout(function () {
        document.title = "Sonny Taylor";
      }, 2000);
    }, 1000);
  }
});
