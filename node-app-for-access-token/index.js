const { GoogleAuth } = require('google-auth-library');

async function getAccessToken() {
  const auth = new GoogleAuth({
    keyFile: 'services-account.json', // path to your downloaded JSON
    scopes: ['https://www.googleapis.com/auth/firebase.messaging'],
  });

  const client = await auth.getClient();
  const token = await client.getAccessToken();
  console.log('✅ Access Token:', token.token);
}

getAccessToken();
