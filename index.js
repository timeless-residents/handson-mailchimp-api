require('dotenv').config();
const mailchimp = require('@mailchimp/mailchimp_marketing');

// 環境変数から設定を読み込む
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX
});

// 接続テスト用の関数
async function testConnection() {
  try {
    const response = await mailchimp.ping.get();
    console.log('Mailchimp API Connection Test:', response);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testConnection();