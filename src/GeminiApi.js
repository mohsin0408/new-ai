const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const apiUrl = `${import.meta.env.VITE_GEMINI_API_URL}key=${apiKey}`;

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
