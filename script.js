   const originalTitle = document.title;

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        document.title = "🌿Come hereeeeeee! ";
      } else {
        document.title = originalTitle;
      }
    });