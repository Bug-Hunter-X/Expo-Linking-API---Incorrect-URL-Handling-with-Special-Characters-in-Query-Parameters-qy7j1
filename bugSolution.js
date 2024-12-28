```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    async function handleInitialUrl() {
      const url = await Linking.getInitialURL();
      if (url) {
        setInitialUrl(url);
      }
    }
    handleInitialUrl();
  }, []);

  useEffect(() => {
    Linking.addEventListener('url', (event) => {
      // Handle URL changes after app launch
      console.log(event.url);
      //Properly parse url using URL API
      try {
        const url = new URL(event.url);
        const queryParams = Object.fromEntries(new URLSearchParams(url.search));
        console.log(queryParams);
      } catch (e) {
        console.error("Error parsing URL:",e)
      }
    });
    return () => {
      Linking.removeEventListener('url');
    };
  }, []);

  return (
    <View>
      {initialUrl ? (
        <Text>Initial URL: {initialUrl}</Text>
      ) : (
        <Text>No initial URL</Text>
      )}
    </View>
  );
}

export default App;
```