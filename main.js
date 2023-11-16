document.addEventListener("DOMContentLoaded", () => {
  const freelancers = [
    { name: "Alice", occupation: "Writer", price: 30 },
    { name: "Bob", occupation: "Teacher", price: 50 },
  ];

  function renderFreelancers() {
    const listElement = document.querySelector("#freelancers-list");
    listElement.innerHTML =
      "<tr><th>Name</th><th>Occupation</th><th>Starting Price ($)</th></tr>";
    freelancers.forEach((f) => {
      listElement.innerHTML += `<tr><td>${f.name}</td><td>${f.occupation}</td><td>${f.price}</td></tr>`;
    });
    updateAveragePrice();
  }

  function calculateAveragePrice() {
    const total = freelancers.reduce(
      (sum, freelancer) => sum + freelancer.price,
      0
    );
    return total / freelancers.length;
  }

  function updateAveragePrice() {
    const averagePrice = calculateAveragePrice();
    document.querySelector(
      "#average-price"
    ).textContent = `Average Starting Price: $${averagePrice.toFixed(2)}`;
  }

  function addRandomFreelancer() {
    const names = ["Carol", "Dave", "Eve"]; // Extend this list as needed
    const occupations = ["Programmer", "Designer", "Artist"]; // Extend this list as needed
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation =
      occupations[Math.floor(Math.random() * occupations.length)];
    const randomPrice = Math.floor(Math.random() * 100) + 20; // Random price between 20 and 120
    freelancers.push({
      name: randomName,
      occupation: randomOccupation,
      price: randomPrice,
    });
    renderFreelancers();
  }

  // Initial render
  renderFreelancers();

  // Update freelancers list every few seconds
  setInterval(addRandomFreelancer, 3000);
});
