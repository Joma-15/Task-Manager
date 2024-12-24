
async function getQuote(){
    const url = 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info';
    const option = {
        method: "GET", 
        headers: {
            'x-rapidapi-key': '5c56749bb7msh7821f666f6ec6a6p15f5d2jsn8efce2933aeb',
		    'x-rapidapi-host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
        }
    }
    try {
        const response = await fetch(url, option);
        const data = await response.json();
        display_quote(await data)
    } catch (error) {
        console.error(error)
    }
}
function format_text(data){
    const text = String(data.text);
    const formatted_text = text.split(" ", 10);
    console.log(formatted_text)
    
}
function display_quote(data){
    document.getElementById("quote").innerHTML = data.text
}
// getQuote();
format_text()