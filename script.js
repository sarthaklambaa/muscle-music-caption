const url = "https://api.api-ninjas.com/v1/quotes?category=fitness";
const headers = { 'X-Api-Key': 'JPMjzIxrUtgBwkKJ1D9yBQ==4zcXRO2clmB8IFqR' };

fetch(url, { headers })
  .then(response => response.json())
  .then(data => {
    const myquote = data[0].quote;

    const boiler_plate = `\n📍Visit us now at - 2nd Floor, Plot Number 18, Vikas Surya Shopping Mall, Sector 3, Rohini, New Delhi, Delhi 110085

    📞Call us at +91 9667-987-111
    
    ✅ Cardio & Strength Training
    ✅ Functional & HIIT Training
    ✅ Best Gym Machines
    ✅ Diet Plan provided by the Certified Nutritionists
    ✅ Health café
    ✅ Steam Bath
    .
    .
    .
    .
    .
    .
    .  
    #gym #gymrat #gymaddict #gymfreak #gymfood #gymislife #gymstyle #gymoutfit #gymnastique #gymbuddy #gymtime💪 #gymequipment #gymtraining #gymmode #gymdays #gympassion #gymer #gymismytherapy #gymjourney #gymdone #training #instafitness #fitnessgoals #shredded #musclemusic #healthcafe #steambath`;

    const final_caption = myquote + "\n" + boiler_plate;

    const outputDiv = document.getElementById("output");
    outputDiv.innerText = final_caption;

    console.log(final_caption);
  })
  .catch(error => console.error(error));

  function copyOutput() {
    const output = document.getElementById("output").innerText;
    navigator.clipboard.writeText(output)
      .then(() => {
        const successMessage = document.getElementById("success-message");
        successMessage.classList.remove("hide");
        setTimeout(() => successMessage.classList.add("hide"), 2000);
      })
      .catch((error) => console.error(error));
  }
  