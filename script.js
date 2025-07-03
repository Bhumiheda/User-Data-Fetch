const userContainer = document.getElementById('user-container');
const errorMessage = document.getElementById('error-message');
const reloadBtn = document.getElementById('reloadBtn');

const apiURL = "https://jsonplaceholder.typicode.com/users";

async function fetchUsers() {
  userContainer.innerHTML = '';
  errorMessage.textContent = '';

  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const users = await response.json();

    users.forEach(user => {
      const card = document.createElement('div');
      card.className = 'user-card';
      card.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}, ${user.address.zipcode}</p>
      `;
      userContainer.appendChild(card);
    });
  } catch (error) {
    errorMessage.textContent = "⚠️ Failed to load data. Please check your connection.";
  }
}

reloadBtn.addEventListener('click', fetchUsers);

// Auto fetch on page load
fetchUsers();
