// File: app/api/ask-question/route.ts (or .js for JavaScript)

export async function POST(request: Request) {
    try {
      // Parse incoming JSON request body
      const body = await request.json();
  
      // Forward the request to the external chatbot API
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
  
      const data = await fetchResponse.json(); // Parse the response JSON
  
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      console.error('Error occurred:', error);
      
      return new Response(
        JSON.stringify({ error: error instanceof Error ? error.message : 'An unknown error occurred' }),
        { status: 500 }
      );
    }
  }
  