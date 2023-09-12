// Function to fetch a random quote from the Quotable API
function fetchRandomQuote() {
    // API endpoint for a random quote
    const apiUrl = 'https://api.quotable.io/random';
  
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Update the HTML with the random quote
        const quoteContainer = document.querySelector('.quote');
        quoteContainer.innerHTML = `<p>"${data.content}"</p><p>- ${data.author}</p>`;
      })
      .catch((error) => {
        console.error('There was a problem fetching the random quote:', error);
      });
  }
  
  // Event listener for the "New Quote" button
  const newQuoteButton = document.getElementById('new-quote-btn');
  newQuoteButton.addEventListener('click', fetchRandomQuote);
  
  // Initial fetch of a random quote when the page loads
  fetchRandomQuote();
  