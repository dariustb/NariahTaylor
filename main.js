// Function to use paid fonts in project without
// Making the paid fonts publicly accessible
fetch('/.netlify/functions/getSecret')
    .then(response => response.text())
    .then(font_url => {
        // Update the HTML content with the secret value
        document.getElementById("font-css").href = font_url;
    })
    .catch(error => {
        console.error(error);
    });
