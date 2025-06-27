const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const predictRisk = async (medications) => {
  try {
    const response = await fetch(`${BASE_URL}/groq`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        medications,
        age: 45,
        gender: 'Male',
        reason: '',
        conditions: [],
        pregnant: 'No',
        allergies: [],
      }),
    });

    const data = await response.json();

    return {
      label: extractRiskLabel(data.response.response),
      confidence: 0.85,
      fullText: data.response.response,
      summary: data.response.summary,
    };
  } catch (error) {
    console.error('Groq API Error:', error);
    return {
      label: 'Unknown',
      confidence: 0.5,
      fullText: '⚠️ LLM Error',
      summary: 'LLM analysis failed.',
    };
  }
};

export const extractRiskLabel = (text) => {
  const match = text.match(/1\. Risk Level:\s*(.*)/i);
  return match ? match[1].trim() : 'Unknown';
};

export const checkInteractions = async (medications) => {
  const response = await fetch(`${BASE_URL}/check`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ medications }),
  });

  const data = await response.json();
  return data;
};
