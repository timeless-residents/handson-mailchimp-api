require('dotenv').config();
const mailchimp = require('@mailchimp/mailchimp_marketing');

// 設定値をログ出力（APIキーは一部のみ表示）
const apiKey = process.env.MAILCHIMP_API_KEY;
console.log('API Key (first 6 chars):', apiKey?.substring(0, 6));
console.log('Server Prefix:', process.env.MAILCHIMP_SERVER_PREFIX);

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX
});

async function testListAccess() {
  try {
    // まず既存のリストを取得してみる
    const lists = await mailchimp.lists.getAllLists();
    console.log('Existing Lists:', lists);
  } catch (error) {
    console.error('Error Details:', {
      status: error.status,
      message: error.message,
      response: error.response?.text
    });
  }
}

testListAccess();