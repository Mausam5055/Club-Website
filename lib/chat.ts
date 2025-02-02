export async function chatbot(body: any) {
    try {
      const fetchResponse = await fetch("https://ayush-003-clubsite.hf.space/ask-question/", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
  
      if (!fetchResponse.ok) {
        throw new Error('Failed to fetch data from chatbot API');
      }
  
      const data = await fetchResponse.json();
      return data;
    } catch (error) {
      console.error('Error occurred:', error);
      return { error: error instanceof Error ? error.message : 'An unknown error occurred' };
    }
  }
  