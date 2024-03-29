async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇
  //2nd test
  let mentorsData = [];
  // Helper function to fetch data from an endpoint
  const fetchData = async (endpoint) => {
    try {
      const response = await axios.get(endpoint);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  // Helper function to combine data from two endpoints
  const combineData = (endpointAData, endpointBData) => {
    return endpointAData.map(learner => {
      const mentors = learner.mentors
        .map(mentorId => {
          // const mentor = endpointBData.find(item => item.id === mentorId);
          const mentor = mentorsData.find(item => item.id === mentorId);
          return mentor ? `${mentor.firstName} ${mentor.lastName}` : null;
        })
        .filter(mentor => mentor); // Filter out any null values

      return {
        id: learner.id,
        email: learner.email,
        fullName: learner.fullName,
        mentors: mentors,
      };
    });
  };


  // Helper function to create a learner card
  const createLearnerCard = (learner) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = learner.fullName; // Store learner's name in dataset

    const fullNameElement = document.createElement('h3');
    fullNameElement.textContent = learner.fullName;
    card.appendChild(fullNameElement);

    const emailElement = document.createElement('div');
    emailElement.textContent = learner.email;
    emailElement.classList.add('email');
    card.appendChild(emailElement);

    // [15] Hide mentors list on page load
    const mentorsElement = document.createElement('ul');
    mentorsElement.classList.add('mentor-list');
    mentorsElement.style.display = 'none'; // Hide mentors list initially

    learner.mentors.forEach(mentorId => {
      const mentor = mentorsData.find(item => `${item.firstName} ${item.lastName}` === mentorId);
      const mentorItem = document.createElement('li');
      mentorItem.textContent = mentor ? `${mentor.firstName} ${mentor.lastName}` : 'Unknown Mentor (ID: ' + mentorId + ')';
      mentorItem.classList.add('mentor');
      mentorsElement.appendChild(mentorItem);
    });




    // Add 'closed' class to the <h4> element
    const mentorsTitle = document.createElement('h4');
    mentorsTitle.textContent = 'Mentors';
    mentorsTitle.classList.add('closed'); // Add 'closed' class
    card.appendChild(mentorsTitle);
    card.appendChild(mentorsElement);
    // Add event listener to the card for handling clicks
    card.addEventListener('click', () => {
      const cards = document.querySelectorAll('.card');

      // [19] Deselect other cards
      cards.forEach(otherCard => {
        if (otherCard !== card) {
          otherCard.classList.remove('selected');
          const otherMentorsElement = otherCard.querySelector('.mentor-list');
          otherMentorsElement.style.display = 'none';
        }
      });

      // [16] Toggle selected class on the clicked card
      card.classList.toggle('selected');

      // [17] Update info element text when a card is selected or deselected
      const infoElement = document.querySelector('.info');
      const selectedCard = document.querySelector('.card.selected');

      if (selectedCard) {
        infoElement.textContent = `The selected learner is ${selectedCard.dataset.name || 'Unknown Learner'}`;
        const selectedMentorsElement = selectedCard.querySelector('.mentor-list');
        selectedMentorsElement.style.display = 'block';
      } else {
        infoElement.textContent = "No learner is selected";
      }

      // Show or hide mentors list when a card is selected or deselected
      const mentorsElement = card.querySelector('.mentor-list');
      if (card.classList.contains('selected')) {
        mentorsElement.style.display = 'block'; // Show mentors list
      } else {
        mentorsElement.style.display = 'none'; // Hide mentors list
      }
    });

    return card;
  };

  // Helper function to render learner cards
  const renderLearners = async () => {
    try {
      const [endpointAData, endpointBData] = await Promise.all([
        fetchData('http://localhost:3003/api/learners'),
        fetchData('http://localhost:3003/api/mentors'),
      ]);

      // Assign mentorsData right after fetching the data
      mentorsData = endpointBData;

      const combinedData = combineData(endpointAData, endpointBData);
      const cardContainer = document.querySelector('.cards');
      cardContainer.innerHTML = ''; // Clear previous cards

      const infoElement = document.querySelector('.info');
      infoElement.textContent = "No learner is selected";

      combinedData.forEach(learner => {
        const card = createLearnerCard(learner);
        cardContainer.appendChild(card);
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Call the renderLearners function to initiate the rendering
  renderLearners();

  // Update footer text
  const footer = document.querySelector('footer');
  const currentYear = new Date().getFullYear();
  footer.textContent = "© BLOOM INSTITUTE OF TECHNOLOGY 2023"

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 };
else sprintChallenge5();