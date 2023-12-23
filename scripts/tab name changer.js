// BEGIN: Change tab name based on user's focus
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    setTimeout(function () {
      document.title = "Come back 😢";
    }, 1000); // Delay of 2000 milliseconds (2 seconds)
  } else {
    document.title = "Sonny Taylor";
  }
});
// END: Change tab name based on user's focus
