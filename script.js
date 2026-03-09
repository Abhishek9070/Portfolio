// JS will be expanded later if needed
console.log("Portfolio Loaded");

// Load Projects Section
fetch("projects/projects.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("projects").innerHTML = data;
  })
  .catch(error => {
    console.error("Projects section failed to load:", error);
  });

// Load Skills Section
fetch("skills/skills.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("skills").innerHTML = data;
  })
  .catch(error => {
    console.error("Skills section failed to load:", error);
  });

// Load Contact Section
fetch("contact/contact.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("contact").innerHTML = data;
  })
  .catch(error => {
    console.error("Contact section failed to load:", error);
  });

// Load Footer
fetch("footer/footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch(error => {
    console.error("Footer failed to load:", error);
  });
