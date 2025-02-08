require('dotenv').config();
const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX
});

async function checkCampaignStatus() {
  try {
    // キャンペーンの詳細情報を取得
    const campaign = await mailchimp.campaigns.get(process.env.MAILCHIMP_CAMPAIGN_ID);
    console.log('Campaign Status:', {
      status: campaign.status,
      emails_sent: campaign.emails_sent,
      send_time: campaign.send_time,
      archive_url: campaign.archive_url
    });

    // レポート情報を取得
    if (campaign.status === 'sent') {
      const report = await mailchimp.reports.getCampaignReport(process.env.MAILCHIMP_CAMPAIGN_ID);
      console.log('Campaign Report:', {
        opens: report.opens,
        clicks: report.clicks,
        subscribers: report.emails_sent,
        unsubscribed: report.unsubscribed,
        bounces: report.bounces
      });
    }
  } catch (error) {
    console.error('Error:', error.message);
    if (error.response) {
      console.error('Error Details:', error.response.text);
    }
  }
}

checkCampaignStatus();
