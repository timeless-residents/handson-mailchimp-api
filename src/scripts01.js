require('dotenv').config();
const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX
});

async function getAccountInfo() {
  try {
    // API接続テスト
    const pingResponse = await mailchimp.ping.get();
    console.log('API Connection:', pingResponse);

    // アカウント情報取得
    const response = await mailchimp.root.getRoot();
    console.log('Account Details:', response);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

getAccountInfo();