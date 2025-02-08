require('dotenv').config();
const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX
});

async function addTestMember() {
  try {
    // テストメンバーの追加（アドレス情報を追加）
    const newMember = await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
      email_address: process.env.TEST_EMAIL,
      status: "subscribed",
      merge_fields: {
        FNAME: process.env.TEST_FNAME,
        LNAME: process.env.TEST_LNAME,
        ADDRESS: {
          addr1: process.env.TEST_ADDR1,
          city: process.env.TEST_CITY,
          state: process.env.TEST_STATE,
          zip: process.env.TEST_ZIP,
          country: process.env.TEST_COUNTRY
        }
      },
      language: process.env.TEST_LANGUAGE,
      tags: [process.env.TEST_TAGS]
    });
    console.log('New Member Added:', newMember);

    // 更新後のメンバーリストを確認
    const updatedMembers = await mailchimp.lists.getListMembersInfo(process.env.MAILCHIMP_LIST_ID);
    console.log('Updated Members List:', updatedMembers);
  } catch (error) {
    console.error('Error:', error.message);
    if (error.response) {
      console.error('Error Details:', error.response.text);
    }
  }
}

addTestMember();
