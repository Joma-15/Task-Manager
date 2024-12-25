async function getQuote() {
    const url = 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info';
    const options = {
        method: "GET",
        headers: {
            'x-rapidapi-key': '5c56749bb7msh7821f666f6ec6a6p15f5d2jsn8efce2933aeb',
            'x-rapidapi-host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            console.error("Failed to fetch the data");
            return;
        }
        const data = await response.json();
        displayQuote(data.text); // Pass the quote text to the display function
    } catch (error) {
        console.error("Error:", error);
    }
}

function displayQuote(quoteText) {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerHTML = ""; // Clear previous content
    let index = 0;

    const interval = setInterval(() => {
        quoteElement.innerHTML += quoteText[index]; // Append one character at a time
        index++;

        if (index === quoteText.length) {
            clearInterval(interval);
            setTimeout(getQuote, 2000); // Fetch a new quote after a 2-second pause
        }
    }, 50);
}

// Call the function initially
getQuote();
