// Function to get secret font.css file 
exports.handler = async (event, context) => {
    const { FONT_CSS_URL } = process.env;
    if (!FONT_CSS_URL) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Environment variable FONT_CSS_URL not found" })
        };
    }
    return {
        statusCode: 200,
        body: FONT_CSS_URL
    };
};
