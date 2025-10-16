export const exchangeToken = async (
  tokenExchange?: string
): Promise<string | undefined> => {
  try {
    const response = await fetch("https://api.example.com/exchange-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: tokenExchange,
      }),
    });
    const data = await response.json();
    console.log("Token obtained from API:", data.token);
    return data.token;
  } catch (error) {
    console.error("Error exchanging token:", error);
    return undefined;
  }
};
