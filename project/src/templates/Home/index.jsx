import { useState } from 'react';
import { useFetch } from './use-fetch';

function App() {
  const [postId, setPostId] = useState('');
  const [result, loading] = useFetch(`https://jsonplaceholder.typicode.com/posts/${
    postId}`, {
    headers: {
      abc: '200',
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleCLick = (id) => {
    setPostId(id);
  };

  if (!loading && result) {
    return (
      <div>
        {result?.length > 0 ? result.map((p) => (
          <div
            key={`post-${p.id}`}
            onClick={() => handleCLick(p.id)}>
            <p>{p.title}</p>
          </div>
        )) : (
          <div
            onClick={() => handleCLick(result.id)}>
          <p>{result.title}</p>
        </div>
        )}

      </div>
    );
  }

  return <h1>Oi</h1>;
}

export default App;