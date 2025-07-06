   const originalTitle = document.title;

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        document.title = "🌿Come back! ";
      } else {
        document.title = originalTitle;
      }
    });