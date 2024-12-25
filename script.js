let quote = [
       `"It takes courage to grow up and become 
              who you really are."`, 
   
       `"Nothing is impossible."`, 
   
       `"You have brains in your head. You have feet in your shoes. 
              You can steer yourself any direction you choose."`,
   
       `"Attitude is a little thing that makes a big difference."`
   ];
   
   function display_quote() {
       let index = 0; 
       let quote_for_the_day = quote[Math.floor(Math.random() * quote.length)];
       let quoteElement = document.getElementById("quote");
   
       quoteElement.innerHTML = ""; // Clear previous quote
       const interval = setInterval(() => {
           if (index < quote_for_the_day.length) {
               quoteElement.innerHTML += quote_for_the_day[index] === "\n"
                   ? "<br>" // Replace line breaks with HTML `<br>` tags
                   : quote_for_the_day[index];
               index++;
           } else {
               clearInterval(interval);
               setTimeout(display_quote, 2000); // Show the next quote after a delay
           }
       }, 50);
   }
   
   display_quote();
   