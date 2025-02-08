require('dotenv').config();
const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX
});

async function createTestCampaign() {
  try {
    // キャンペーンの作成
    const campaign = await mailchimp.campaigns.create({
      type: "regular",
      recipients: {
        list_id: process.env.MAILCHIMP_LIST_ID
      },
      settings: {
        subject_line: process.env.CAMPAIGN_SUBJECT_LINE,
        preview_text: process.env.CAMPAIGN_PREVIEW_TEXT,
        title: process.env.CAMPAIGN_TITLE,
        from_name: process.env.CAMPAIGN_FROM_NAME,
        reply_to: process.env.CAMPAIGN_REPLY_TO,
        language: process.env.CAMPAIGN_LANGUAGE
      }
    });
    console.log('Campaign Created:', campaign);

    // キャンペーンコンテンツの設定
    await mailchimp.campaigns.setContent(campaign.id, {
      html: `
        <h1>Mailchimp APIテスト</h1>
        <p>これはAPIを使用して作成された配信テストです。</p>
        <p>配信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}</p>
      `
    });
    console.log('Campaign Content Set');

    // キャンペーン情報の取得
    const campaignInfo = await mailchimp.campaigns.get(campaign.id);
    console.log('Campaign Details:', campaignInfo);

  } catch (error) {
    console.error('Error:', error.message);
    if (error.response) {
      console.error('Error Details:', error.response.text);
    }
  }
}

createTestCampaign();
