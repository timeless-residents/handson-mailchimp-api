require('dotenv').config();
const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX
});

async function manageMembers() {
  try {
    // まず現在のメンバーリストを確認
    const currentMembers = await mailchimp.lists.getListMembersInfo(process.env.MAILCHIMP_LIST_ID);
    console.log('Current Members:', currentMembers);
    
  } catch (error) {
    console.error('Error:', error.message);
    console.error('Error Details:', error.response?.text);
  }
}

manageMembers();
