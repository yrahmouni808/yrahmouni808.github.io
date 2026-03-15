const form = document.getElementById('nameForm');
const passwordInput = document.getElementById('password');
const display = document.getElementById('response');

let currentName = "";

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const submitBtn = document.getElementById('submit-button');
  const password = passwordInput.value.trim();

  //disables button
  submitBtn.disabled = true;
  submitBtn.innerText = "Aan het zoeken...";

  // shows "loading screen"
  display.innerHTML = 'Momentje...<br><div class="spinner"></div>';
  display.style.opacity = 0.5;

  let message = bericht(password);

  setTimeout(() => {
    //result
    display.innerHTML = message;
    changeBGImage(currentName);
    display.style.opacity = 1;

    //button reset
    submitBtn.disabled = false;
    submitBtn.innerText = "Wie heb ik?";
  }, 2000);
});

function bericht(password) {
  let response = "";
  const pw = password.toLowerCase();

  if (pw === "michmich") {
    currentName = "samira";
    response = "Jij hebt <span class='highlight'>Zahira</span>!";
  } else if (pw === "diva") {
    currentName = "zahira";
    response = "Jij hebt <span class='highlight'>Samira</span>!";
  } else if (pw === "bobert lewangoalski") {
    currentName = "khalil";
    response = "Jij hebt <span class='highlight'>Majid</span>!";
  } else if (pw === "honda fireblade") {
    currentName = "majid";
    response = "Jij hebt <span class='highlight'>Wakil</span>!";
  } else if (pw === "hbiba") {
    currentName = "wakil";
    response = "Jij hebt <span class='highlight'>Hana</span>!";
  } else if (pw === "lieflief") {
    currentName = "hana";
    response = "Jij hebt <span class='highlight'>Khalil</span>!";
  } else if (pw === "sigma") {
    currentName = "sigma";
    response = "<span class='highlight'>erm wattesigma</span>";
  } else {
    currentName = ""; // Reset if wrong
    response = "Onjuist wachtwoord of geen match gevonden.";
  }
  return response;
}

function changeBGImage (name) {
  switch (name) {
    case 'samira':
      document.body.style.backgroundImage = "url('../img/samira.avif')";
      break;
    case 'zahira':
      document.body.style.backgroundImage = "url('../img/zahira.jpg')";
      break;
    case 'khalil': // Changed from khalid to khalil to match your logic
      document.body.style.backgroundImage = "url('../img/khalil.webp')";
      break;
    case 'hana':
      document.body.style.backgroundImage = "url('../img/hana.avif')";
      break;
    case 'wakil':
      document.body.style.backgroundImage = "url('../img/wakil.jpg')";
      break;
    case 'majid':
      document.body.style.backgroundImage = "url('../img/majid.webp')";
      break;
    case 'sigma':
      document.body.style.backgroundImage = "url('../img/sigma.jpg')";
      break;
    default:
      document.body.style.backgroundImage = "url('../img/wrong.png')";
      break;
  }
}
