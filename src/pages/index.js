import React, { useEffect, useState } from 'react';

const Page = () => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const getTestFunction = async () => {
      try {
        const response = await fetch('/api/test-function');
        const data = await response.json();
        setResponse(data);
      } catch (error) {
        setResponse(error);
      }
    };

    getTestFunction();
  }, []);

  return (
    <main>
      <h1>Index</h1>
      {response ? <pre>{JSON.stringify(response, null, 2)}</pre> : null}
    </main>
  );
};

export default Page;
