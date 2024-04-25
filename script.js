document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Verhindert das Standardverhalten des Formulars (Seiten-Neuladen)

  var password = document.getElementById("password").value;

  // Hier überprüfen wir das Passwort
  if (password === "jga") {
    // Speichere das Login-Token im localStorage
    localStorage.setItem("isLoggedIn", "true");

    document.getElementById("loginPage").style.display = "none";
    var roadmapElements = document.getElementsByClassName("roadmap");
    var timelineElement = document.getElementsByTagName("details")[0];

    // Zeige Roadmap-Elemente an
    for (var i = 0; i < roadmapElements.length; i++) {
      roadmapElements[i].style.display = "block";
    }

    // Zeige Timeline-Element an
    timelineElement.style.display = "block";
  } else {
    document.getElementById("loginMessage").textContent = "Falsches Passwort. Bitte versuche es erneut.";
  }
});

// Überprüfe beim Laden der Seite, ob der Benutzer eingeloggt ist
window.onload = function() {
  var isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn === "true") {
    var roadmapElements = document.getElementsByClassName("roadmap");
    var timelineElement = document.getElementsByTagName("details")[0];

    // Zeige Roadmap-Elemente an
    for (var i = 0; i < roadmapElements.length; i++) {
      roadmapElements[i].style.display = "block";
    }

    // Zeige Timeline-Element an
    timelineElement.style.display = "block";
    document.getElementById("loginPage").style.display = "none";
  }
};