# ボイスバイエル(R) 音声表現入門講座 ランディングページ

このフォルダーには、そのまま公開できる販売ページ一式が入っています。特別なソフトや外部サービスは使っていません。

## 公開前に変更するところ

### 申し込みページのURL

`script.js` の一番上にある `APPLICATION_URL` の `https://example.com/application` を、実際の申し込み先URLに置き換えてください。JavaScriptを使えない閲覧環境のために、`index.html` 内の `https://example.com/application` も同じURLに置き換えてください。

### プライバシーポリシーなどのURL

`script.js` の冒頭にある `PRIVACY_URL`、`LEGAL_URL`、`CONTACT_URL` の `#` を、それぞれ実際のページURLに置き換えてください。

### 講師写真

このフォルダー内に `images` フォルダーを作り、講師写真を `instructor.jpg` という名前で保存してください。写真がない状態でもページのレイアウトは崩れません。

### 受講料・募集人数・サポート期間・録画期間

`index.html` をメモ帳などで開き、現在の文字を検索して置き換えます。

- 受講料：`33,000円`
- 募集人数：`限定10名`
- LINEサポート：`30日間`
- 録画視聴期間：`60日間`

同じ内容がページ内に複数あるため、「すべて置換」を使うと変更漏れを防げます。講座の文章もすべて `index.html` にあります。

### キャンセル・返金条件

`index.html` の「キャンセルや返金はできますか？」付近に日本語のコメントがあります。実際の販売条件に合わせて回答文を修正してください。

## GitHub Pagesで公開する方法

1. GitHubで新しいリポジトリを作ります。
2. `index.html`、`style.css`、`script.js`、`README.md` と、写真がある場合は `images` フォルダーをアップロードします。
3. リポジトリの「Settings」→「Pages」を開きます。
4. 公開元として `Deploy from a branch`、ブランチとして `main` と `/ (root)` を選び、保存します。
5. 数分後に表示されるURLからページを確認します。

## Netlifyで公開する方法

1. Netlifyにログインします。
2. 「Add new site」→「Deploy manually」を選びます。
3. このページのファイルが入ったフォルダーをアップロード欄へドラッグします。
4. 公開されたURLで表示を確認します。

## 申込ボタンのクリック計測

Google Analytics 4またはGoogleタグマネージャーのタグを `index.html` に設定すると、申込ボタンを押した際に `application_button_click` イベントが送られます。Google Analyticsを使わない場合も、そのまま問題なく動作します。

イベントには `button_position` が付きます。

- `first_view`：ページ上部とファーストビューのボタン
- `middle`：ページ中盤のボタン
- `bottom`：ページ最下部のボタン

Google Analyticsでは「レポート」→「エンゲージメント」→「イベント」で `application_button_click` を確認します。位置別に詳しく見る場合は、`button_position` をカスタムディメンションとして登録してください。

申込先URLには、ボタン位置に応じて `source=voicebayer_lp` と `position=first_view`、`middle`、または `bottom` が自動で追加されます。

## ファイルの役割

- `index.html`：文章とページ構成
- `style.css`：色、文字サイズ、スマートフォン表示などの見た目
- `script.js`：URL設定とフェードイン演出
- `README.md`：この説明書

公開前には、申し込み先URL、各種案内リンク、キャンセル条件、講師写真、金額、募集人数を必ず確認してください。
