// async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇
         //2nd test
//       
//         const createLearnerCard = (learner) => {
//           const card = document.createElement('div');
//           card.classList.add('card');
//           card.dataset.name = learner.fullName; // Store learner's name in dataset
      
//           
      
//           // [15] Hide mentors list on page load
//           const mentorsElement = document.createElement('ul');
//           mentorsElement.classList.add('mentor-list'); // Add mentor list class
//           mentorsElement.style.display = 'none'; // Hide mentors list initially
      
//          
      
//           // Add event listener to the card for handling clicks
//           card.addEventListener('click', () => {
//             const cards = document.querySelectorAll('.card');
      
//             // [19] Deselect other cards
//             cards.forEach(otherCard => {
//               if (otherCard !== card) {
//                 otherCard.classList.remove('selected');
//                 const otherMentorsElement = otherCard.querySelector('.mentor-list');
//                 otherMentorsElement.style.display = 'none';
//               }
//             });
      
//             // [16] Toggle selected class on the clicked card
//             card.classList.toggle('selected');
      
//             // [17] Update info element text when a card is selected or deselected
//             const infoElement = document.querySelector('.info');
//             const selectedCard = document.querySelector('.card.selected');
      
//            
      
//             // Show or hide mentors list when a card is selected or deselected
//             if (card.classList.contains('selected')) {
//               mentorsElement.style.display = 'block'; // Show mentors list
//             } else {
//               mentorsElement.style.display = 'none'; // Hide mentors list
//             }
//           });
      
//           return card;
//         };
      
//         
//             const cardContainer = document.querySelector('.cards');
//             cardContainer.innerHTML = ''; // Clear previous cards
      
//         
      
//           // [15] Hide mentors list on page load
//           const mentorList = document.querySelector('.mentor-list');
//           mentorList.style.display = 'none';
//         };
      
//         // Call the renderLearners function to initiate the rendering
//         renderLearners();
  

        
//   const footer = document.querySelector('footer')
//   const currentYear = new Date().getFullYear()
//   footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

//   // 👆 WORK WORK ABOVE THIS LINE 👆
// }

// // ❗ DO NOT CHANGE THE CODE  BELOW
// if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
// else sprintChallenge5()
//============================================================================================================================================

// async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇
  //        2nd test
//          const fetchData = async (endpoint) => {
//           try {
//             const response = await axios.get(endpoint);
//             return response.data;
//           } catch (error) {
//             console.error('Error fetching data:', error);
//             throw error;
//           }
//         };
      
//         const combineData = (endpointAData, endpointBData) => {
//           return endpointAData.map(learner => {
//             const mentors = learner.mentors.map(mentorId => {
//               const mentor = endpointBData.find(item => item.id === mentorId);
//               return mentor ? mentor.fullName : `Unknown Mentor ${mentorId}`;
//             });
      
//             return {
//               id: learner.id,
//               email: learner.email,
//               fullName: learner.fullName,
//               mentors: mentors,
//             };
//           });
//         };
// const createLearnerCard = (learner) => {
//   const card = document.createElement('div');
//   card.classList.add('card');
//   card.dataset.name = `${learner.fullName}, ID ${learner.id}`;

//   const fullNameElement = document.createElement('h3');
//   fullNameElement.textContent = learner.fullName;
//   card.appendChild(fullNameElement);

//   const emailElement = document.createElement('div');
//   emailElement.textContent = learner.email;
//   emailElement.classList.add('email');
//   card.appendChild(emailElement);

//   const mentorsHeading = document.createElement('h4');
//   mentorsHeading.textContent = 'Mentors';
//   mentorsHeading.classList.add('closed');
//   card.appendChild(mentorsHeading);

//   const mentorsElement = document.createElement('ul');
//   mentorsElement.classList.add('mentor-list');
//   mentorsElement.style.display = 'none';

//   learner.mentors.forEach(mentor => {
//     const mentorItem = document.createElement('li');
//     mentorItem.textContent = mentor;
//     mentorItem.classList.add('mentor');
//     mentorsElement.appendChild(mentorItem);
//   });

//   card.appendChild(mentorsElement);

//   // Update the event listener to handle mentors heading click
//   mentorsHeading.addEventListener('click', () => {
//     mentorsElement.style.display = mentorsElement.style.display === 'none' ? 'block' : 'none';
//     mentorsHeading.classList.toggle('closed');
//   });

//   // Update the click event listener to handle card click
//   card.addEventListener('click', () => {
//     const cards = document.querySelectorAll('.card');

//     cards.forEach(otherCard => {
//       if (otherCard !== card) {
//         otherCard.classList.remove('selected');
//         const otherMentorsElement = otherCard.querySelector('.mentor-list');
//         otherMentorsElement.style.display = 'none';
//       }
//     });

//     card.classList.toggle('selected');

//     const infoElement = document.querySelector('.info');
//     const selectedCard = document.querySelector('.card.selected');

//     if (selectedCard) {
//       infoElement.textContent = `The selected learner is ${selectedCard.dataset.name}`;
//       const selectedMentorsElement = selectedCard.querySelector('.mentor-list');
//       selectedMentorsElement.style.display = 'block';
//     } else {
//       infoElement.textContent = "No learner is selected";
//     }

//     if (card.classList.contains('selected')) {
//       mentorsElement.style.display = 'block';
//     } else {
//       mentorsElement.style.display = 'none';
//     }
//   });

//   return card;
// };

// const renderLearners = async () => {
//             try {
//               const [endpointAData, endpointBData] = await Promise.all([
//                 fetchData('http://localhost:3003/api/learners'),
//                 fetchData('http://localhost:3003/api/mentors'),
//               ]);
        
//               const combinedData = combineData(endpointAData, endpointBData);
        
//               const cardContainer = document.querySelector('.cards');
//               cardContainer.innerHTML = ''; // Clear previous cards
        
//               const infoElement = document.querySelector('.info');
//               infoElement.textContent = "No learner is selected";
        
//               combinedData.forEach(learner => {
//                 const card = createLearnerCard(learner);
//                 cardContainer.appendChild(card);
//               });
//             } catch (error) {
//               console.error('Error:', error);
//             }
        
//             // [15] Hide mentors list on page load
//             const mentorList = document.querySelector('.mentor-list');
//             mentorList.style.display = 'none';
//           };
        
//           // Call the renderLearners function to initiate the rendering
//           renderLearners();
    
  
          
//     const footer = document.querySelector('footer')
//     const currentYear = new Date().getFullYear()
//     footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`
  
    // 👆 WORK WORK ABOVE THIS LINE 👆
  // }
  
  //=====================================================================================================================================

//=================================================================================================================
// async function sprintChallenge5() {
// // Helper function to fetch data from an endpoint
// const fetchData = async (endpoint) => {
//   try {
//     const response = await axios.get(endpoint);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// };

// // Helper function to combine data from two endpoints
// const combineData = (endpointAData, endpointBData) => {
//   return endpointAData.map(learner => {
//     const mentors = learner.mentors.map(mentorId => {
//       const mentor = endpointBData.find(item => item.id === mentorId);
//       return mentor ? `${mentor.firstName} ${mentor.lastName}` : `Unknown Mentor ${mentorId}`;
//     });

//     return {
//       id: learner.id,
//       email: learner.email,
//       fullName: learner.fullName,
//       mentors: mentors,
//     };
//   });
// };
 
// // Helper function to create a learner card
// const createLearnerCard = (learner) => {
//   const card = document.createElement('div');
//   card.classList.add('card');
//   card.dataset.name = learner.fullName; // Store learner's name in dataset

//   const fullNameElement = document.createElement('h3');
//   fullNameElement.textContent = learner.fullName;
//   card.appendChild(fullNameElement);

//   const emailElement = document.createElement('div');
//   emailElement.textContent = learner.email;
//   emailElement.classList.add('email');
//   card.appendChild(emailElement);

//   const mentorsElement = document.createElement('ul');
//   mentorsElement.classList.add('mentor-list');
//   mentorsElement.style.display = 'none';

//   // Handle empty mentor names
//   learner.mentors.forEach(mentor => {
//     const mentorItem = document.createElement('li');
//     mentorItem.textContent = mentor ? `${mentor.firstName} ${mentor.lastName}` : 'Unknown Mentor';
//     mentorItem.classList.add('mentor');
//     mentorsElement.appendChild(mentorItem);
//   });

//   card.appendChild(mentorsElement);

//   // Add 'closed' class to the <h4> element
//   const mentorsTitle = document.createElement('h4');
//   mentorsTitle.textContent = 'Mentors:';
//   mentorsTitle.classList.add('closed');
//   card.appendChild(mentorsTitle);

//   // Add event listener to the card for handling clicks
//   card.addEventListener('click', () => {
//     const cards = document.querySelectorAll('.card');

//     // Deselect other cards
//     cards.forEach(otherCard => {
//       if (otherCard !== card) {
//         otherCard.classList.remove('selected');
//         const otherMentorsElement = otherCard.querySelector('.mentor-list');
//         otherMentorsElement.style.display = 'none';
//       }
//     });

//     // Toggle selected class on the clicked card
//     card.classList.toggle('selected');

//     // Update info element text when a card is selected or deselected
//     const infoElement = document.querySelector('.info');
//     const selectedCard = document.querySelector('.card.selected');

//     if (selectedCard) {
//       infoElement.textContent = `The selected learner is ${selectedCard.dataset.name || 'Unknown Learner'}`;
//       const selectedMentorsElement = selectedCard.querySelector('.mentor-list');
//       selectedMentorsElement.style.display = 'block';
//     } else {
//       infoElement.textContent = "No learner is selected";
//     }

//     // Show or hide mentors list when a card is selected or deselected
//     const mentorsElement = card.querySelector('.mentor-list');
//     if (card.classList.contains('selected')) {
//       mentorsElement.style.display = 'block'; // Show mentors list
//     } else {
//       mentorsElement.style.display = 'none'; // Hide mentors list
//     }
//   });

//   return card;
// };

// // ... (rest of the code remains the same)


// // Helper function to render learner cards
// const renderLearners = async () => {
//   try {
//     const [endpointAData, endpointBData] = await Promise.all([
//       fetchData('http://localhost:3003/api/learners'),
//       fetchData('http://localhost:3003/api/mentors'),
//     ]);

//     const combinedData = combineData(endpointAData, endpointBData);

//     const cardContainer = document.querySelector('.cards');
//     cardContainer.innerHTML = ''; // Clear previous cards

//     const infoElement = document.querySelector('.info');
//     infoElement.textContent = "No learner is selected";

//     combinedData.forEach(learner => {
//       const card = createLearnerCard(learner);
//       cardContainer.appendChild(card);
//     });
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// // Call the renderLearners function to initiate the rendering
// renderLearners();

// // Update footer text
// const footer = document.querySelector('footer');
// const currentYear = new Date().getFullYear();
// footer.textContent = "© BLOOM INSTITUTE OF TECHNOLOGY 2023";

// }
// // ❗ DO NOT CHANGE THE CODE BELOW
// if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 };
// else sprintChallenge5();
//========================================================================================================

// async function sprintChallenge5() {
//   let mentorsData = [];
//   // Helper function to fetch data from an endpoint
//   const fetchData = async (endpoint) => {
//     try {
//       const response = await axios.get(endpoint);
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       throw error;
//     }
//   };

//   // Helper function to combine data from two endpoints
//   const combineData = (endpointAData, endpointBData) => {
//     return endpointAData.map(learner => {
//       const mentors = learner.mentors.map(mentorId => {
//         const mentor = endpointBData.find(item => item.id === mentorId);
//         return mentor ? `${mentor.firstName} ${mentor.lastName}` : `Unknown Mentor ${mentorId}`;
//       });

//       return {
//         id: learner.id,
//         email: learner.email,
//         fullName: learner.fullName,
//         mentors: mentors,
//       };
//     });
//   };

//   // Helper function to create a learner card
//   const createLearnerCard = (learner) => {
//     const card = document.createElement('div');
//     card.classList.add('card');
//     card.dataset.name = learner.fullName; // Store learner's name in dataset

//     const fullNameElement = document.createElement('h3');
//     fullNameElement.textContent = learner.fullName;
//     card.appendChild(fullNameElement);

//     const emailElement = document.createElement('div');
//     emailElement.textContent = learner.email;
//     emailElement.classList.add('email');
//     card.appendChild(emailElement);

//     const mentorsElement = document.createElement('ul');
//     mentorsElement.classList.add('mentor-list');
//     mentorsElement.style.display = 'none';

//     // Handle empty mentor names test[14]
//     learner.mentors.forEach(mentorId => {
//       const mentor = mentorsData.find(item => item.id === mentorId);
//       const mentorItem = document.createElement('li');
//       mentorItem.textContent = mentor ? `${mentor.firstName} ${mentor.lastName}` : 'Unknown Mentor';
//       mentorItem.classList.add('mentor');
//       mentorsElement.appendChild(mentorItem);
//     });

//     card.appendChild(mentorsElement);

//     // Add 'closed' class to the <h4> element
//     const mentorsTitle = document.createElement('h4');
//     mentorsTitle.textContent = 'Mentors';
//     mentorsTitle.classList.add('closed'); // Add 'closed' class
//     card.appendChild(mentorsTitle);

//     // Add event listener to the card for handling clicks
//     card.addEventListener('click', () => {
//       const cards = document.querySelectorAll('.card');

//       // Deselect other cards
//       cards.forEach(otherCard => {
//         if (otherCard !== card) {
//           otherCard.classList.remove('selected');
//           const otherMentorsElement = otherCard.querySelector('.mentor-list');
//           otherMentorsElement.style.display = 'none';
//         }
//       });

//       // Toggle selected class on the clicked card
//       card.classList.toggle('selected');

//       // Update info element text when a card is selected or deselected
//       const infoElement = document.querySelector('.info');
//       const selectedCard = document.querySelector('.card.selected');

//       if (selectedCard) {
//         infoElement.textContent = `The selected learner is ${selectedCard.dataset.name || 'Unknown Learner'}`;
//         const selectedMentorsElement = selectedCard.querySelector('.mentor-list');
//         selectedMentorsElement.style.display = 'block';
//       } else {
//         infoElement.textContent = "No learner is selected";
//       }

//       // Show or hide mentors list when a card is selected or deselected
//       const mentorsElement = card.querySelector('.mentor-list');
//       if (card.classList.contains('selected')) {
//         mentorsElement.style.display = 'block'; // Show mentors list
//       } else {
//         mentorsElement.style.display = 'none'; // Hide mentors list
//       }
//     });

//     return card;
//   };

//   // ... (rest of the code remains the same)

//   // Helper function to render learner cards
//   const renderLearners = async () => {
//     try {
//       const [endpointAData, endpointBData] = await Promise.all([
//         fetchData('http://localhost:3003/api/learners'),
//         fetchData('http://localhost:3003/api/mentors'),
//       ]);
//       mentorsData = endpointBData;
//       const combinedData = combineData(endpointAData, endpointBData);
//       mentorsData = endpointBData; // Add this line to make mentorsData accessible

//       const cardContainer = document.querySelector('.cards');
//       cardContainer.innerHTML = ''; // Clear previous cards

//       const infoElement = document.querySelector('.info');
//       infoElement.textContent = "No learner is selected";

//       combinedData.forEach(learner => {
//         const card = createLearnerCard(learner); // No need to pass endpointBData here
//         cardContainer.appendChild(card);
//       });
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   // Call the renderLearners function to initiate the rendering
//   renderLearners();

//   // Update footer text
//   const footer = document.querySelector('footer');
//   const currentYear = new Date().getFullYear();
//   footer.textContent = "© BLOOM INSTITUTE OF TECHNOLOGY 2023";
// }

// // ❗ DO NOT CHANGE THE CODE BELOW
// if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 };
// else sprintChallenge5();

//==============================================================================

// async function sprintChallenge5() {
//   let mentorsData = [];

//   // Helper function to fetch data from an endpoint
//   const fetchData = async (endpoint) => {
//     try {
//       const response = await axios.get(endpoint);
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       throw error;
//     }
//   };

//   // Helper function to combine data from two endpoints
//   const combineData = (endpointAData, endpointBData) => {
//     return endpointAData.map(learner => {
//       const mentors = learner.mentors
//         .map(mentorId => {
//           const mentor = endpointBData.find(item => item.id === mentorId);
//           return mentor ? `${mentor.firstName} ${mentor.lastName}` : null;
//         })
//         .filter(mentor => mentor); // Filter out any null values
  
//       return {
//         id: learner.id,
//         email: learner.email,
//         fullName: learner.fullName,
//         mentors: mentors,
//       };
//     });
//   };

//   // Helper function to create a learner card
//   const createLearnerCard = (learner) => {
//     const card = document.createElement('div');
//     card.classList.add('card');
//     card.dataset.name = learner.fullName; // Store learner's name in dataset

//     const fullNameElement = document.createElement('h3');
//     fullNameElement.textContent = learner.fullName;
//     card.appendChild(fullNameElement);

//     const emailElement = document.createElement('div');
//     emailElement.textContent = learner.email;
//     emailElement.classList.add('email');
//     card.appendChild(emailElement);

//     const mentorsElement = document.createElement('ul');
//     mentorsElement.classList.add('mentor-list');
//     mentorsElement.style.display = 'none';

    
//      // Fetch mentor names when creating the card
//      learner.mentors.forEach(mentorId => {
//       const mentor = mentorsData.find(item => item.id === mentorId);
//       const mentorItem = document.createElement('li');
//       mentorItem.textContent = mentor ? `${mentor.firstName} ${mentor.lastName}` : `Unknown Mentor ${mentorId}`;
//       mentorItem.classList.add('mentor');
//       mentorsElement.appendChild(mentorItem);
//     });

//     card.appendChild(mentorsElement);

//     // Add 'closed' class to the <h4> element
//     const mentorsTitle = document.createElement('h4');
//     mentorsTitle.textContent = 'Mentors';
//     mentorsTitle.classList.add('closed'); // Add 'closed' class
//     card.appendChild(mentorsTitle);

//     // Add event listener to the card for handling clicks
//     card.addEventListener('click', () => {
//       const cards = document.querySelectorAll('.card');

//       // Deselect other cards
//       cards.forEach(otherCard => {
//         if (otherCard !== card) {
//           otherCard.classList.remove('selected');
//           const otherMentorsElement = otherCard.querySelector('.mentor-list');
//           otherMentorsElement.style.display = 'none';
//         }
//       });

//       // Toggle selected class on the clicked card
//       card.classList.toggle('selected');

//       // Update info element text when a card is selected or deselected
//       const infoElement = document.querySelector('.info');
//       const selectedCard = document.querySelector('.card.selected');

//       if (selectedCard) {
//         infoElement.textContent = `The selected learner is ${selectedCard.dataset.name || 'Unknown Learner'}`;
//         const selectedMentorsElement = selectedCard.querySelector('.mentor-list');
//         selectedMentorsElement.style.display = 'block';
//       } else {
//         infoElement.textContent = "No learner is selected";
//       }

//       // Show or hide mentors list when a card is selected or deselected
//       const mentorsElement = card.querySelector('.mentor-list');
//       if (card.classList.contains('selected')) {
//         mentorsElement.style.display = 'block'; // Show mentors list
//       } else {
//         mentorsElement.style.display = 'none'; // Hide mentors list
//       }
//     });

//     return card;
//   };

//   // Helper function to render learner cards
//   const renderLearners = async () => {
//     try {
//       const [endpointAData, endpointBData] = await Promise.all([
//         fetchData('http://localhost:3003/api/learners'),
//         fetchData('http://localhost:3003/api/mentors'),
//       ]);

//       // Assign mentorsData right after fetching the data
//       mentorsData = endpointBData;

//       const combinedData = combineData(endpointAData, endpointBData);
//       const cardContainer = document.querySelector('.cards');
//       cardContainer.innerHTML = ''; // Clear previous cards

//       const infoElement = document.querySelector('.info');
//       infoElement.textContent = "No learner is selected";

//       combinedData.forEach(learner => {
//         const card = createLearnerCard(learner);
//         cardContainer.appendChild(card);
//       });
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   // Call the renderLearners function to initiate the rendering
//   renderLearners();

//   // Update footer text
//   const footer = document.querySelector('footer');
//   const currentYear = new Date().getFullYear();
//   footer.textContent = "© BLOOM INSTITUTE OF TECHNOLOGY 2023"
// }

// // ❗ DO NOT CHANGE THE CODE BELOW
// if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 };
// else sprintChallenge5();

//==============================================================================

async function sprintChallenge5() {
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

  const mentorsElement = document.createElement('ul');
  mentorsElement.classList.add('mentor-list');
  mentorsElement.style.display = 'none';

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
    
    // Deselect other cards
    cards.forEach(otherCard => {
      if (otherCard !== card) {
        otherCard.classList.remove('selected');
        const otherMentorsElement = otherCard.querySelector('.mentor-list');
        otherMentorsElement.style.display = 'none';
      }
    });

    // Toggle selected class on the clicked card
    card.classList.toggle('selected');

    // Update info element text when a card is selected or deselected
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
}

// ❗ DO NOT CHANGE THE CODE BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 };
else sprintChallenge5();

