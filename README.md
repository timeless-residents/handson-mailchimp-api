# Mailchimp API ハンズオン

Mailchimp Marketing APIを統合して使用する方法を示すシンプルなNode.jsプロジェクトです。このプロジェクトにはAPIの接続テストの基本的な実装が含まれています。

## 前提条件

- Node.js (v12以上)
- MailchimpアカウントとAPI認証情報
- npm (Node Package Manager)

## インストール

1. リポジトリをクローン:
```bash
git clone https://github.com/timeless-town/handson-mailchimp-api.git
cd handson-mailchimp-api
```

2. 依存関係のインストール:
```bash
npm install
```

## 設定

1. ルートディレクトリに`.env`ファイルを作成
2. 以下の環境変数を設定:

### Mailchimp API設定
```env
MAILCHIMP_API_KEY=あなたのAPIキー
MAILCHIMP_SERVER_PREFIX=あなたのサーバープレフィックス
MAILCHIMP_LIST_ID=メーリングリストのID
MAILCHIMP_CAMPAIGN_ID=キャンペーンのID
```

### テストメンバー設定
```env
TEST_EMAIL=テスト用メールアドレス
TEST_FNAME=名
TEST_LNAME=姓
TEST_ADDR1=住所1
TEST_CITY=市区町村
TEST_STATE=都道府県コード
TEST_ZIP=郵便番号
TEST_COUNTRY=国コード
TEST_LANGUAGE=言語コード
TEST_TAGS=タグ
```

### キャンペーン設定
```env
CAMPAIGN_SUBJECT_LINE=メールの件名
CAMPAIGN_PREVIEW_TEXT=プレビューテキスト
CAMPAIGN_TITLE=キャンペーンのタイトル
CAMPAIGN_FROM_NAME=送信者名
CAMPAIGN_REPLY_TO=返信先メールアドレス
CAMPAIGN_LANGUAGE=キャンペーンの言語
```

API認証情報の確認方法:
1. Mailchimpアカウントにログイン
2. アカウント → その他 → APIキー に移動
3. 新しいAPIキーを作成するか、既存のものを使用
4. サーバープレフィックスはAPIキーの最後の部分です（例：APIキーが「us6」で終わる場合、「us6」がサーバープレフィックス）

## 使用方法

接続テストの実行:
```bash
node index.js
```

これにより、Mailchimp APIへの接続を確認するための簡単なpingテストが実行されます。

## プロジェクト構成

- `index.js` - Mailchimp API接続テストを含むメインアプリケーションファイル
- `.env` - 環境変数の設定（作成が必要）
- `package.json` - プロジェクトの依存関係とスクリプト

## 依存パッケージ

- [@mailchimp/mailchimp_marketing](https://www.npmjs.com/package/@mailchimp/mailchimp_marketing) - 公式Mailchimp Marketing APIクライアント
- [dotenv](https://www.npmjs.com/package/dotenv) - 環境変数の管理

## ライセンス

ISC
