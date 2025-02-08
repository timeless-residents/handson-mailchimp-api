require('dotenv').config();
const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX
});

async function sendCampaign() {
  try {
    // 送信前のチェックリストを確認
    const checklist = await mailchimp.campaigns.getSendChecklist(process.env.MAILCHIMP_CAMPAIGN_ID);
    console.log('Send Checklist Status:', checklist.is_ready);

    // is_readyがtrueの場合は送信を実行
    if (checklist.is_ready) {
      console.log('Campaign is ready to send. Sending...');
      const response = await mailchimp.campaigns.send(process.env.MAILCHIMP_CAMPAIGN_ID);
      console.log('Campaign Sent Successfully:', response);
    } else {
      console.log('Campaign is not ready to send. Critical issues found:');
      // エラー（type: 'error'）のみを表示
      checklist.items
        .filter(item => item.type === 'error')
        .forEach(item => {
          console.log(`- ${item.heading}: ${item.details}`);
        });
    }
  } catch (error) {
    console.error('Error:', error.message);
    if (error.response) {
      console.error('Error Details:', error.response.text);
    }
  }
}

sendCampaign();
