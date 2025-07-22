const apiKey = "AIzaSyDwnibzP9tF5ntvQO8Y4TPY46mqBDgyqh8";
const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

const GeminiApi = async (message) => {
  if (!apiKey) {
    throw new Error("API key is missing");
  }

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: message }],
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(" API Error:", errorText);
      throw new Error(errorText);
    }

    const data = await response.json();
    console.log("data", data);

    return data;
  } catch (error) {
    console.error(" Request failed:", error);
    throw error;
  }
};

export default GeminiApi;
