<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web開発プロジェクト</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        header {
            text-align: center;
            padding: 20px;
            background-color: #333;
            color: white;
        }
        header h1 {
            margin: 0;
            font-size: 2.5rem;
        }
        section {
            background-color: white;
            margin-bottom: 30px;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        section h2 {
            font-size: 2rem;
            margin-bottom: 10px;
        }
        section ul {
            list-style-type: none;
            padding: 0;
        }
        section ul li {
            margin-bottom: 10px;
        }
        a {
            color: #1E90FF;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .links {
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
        }
        .links a {
            margin: 10px 20px;
        }
        .code {
            background-color: #f9f9f9;
            padding: 10px;
            border-radius: 8px;
            border: 1px solid #ddd;
            font-family: 'Courier New', monospace;
        }
        footer {
            text-align: center;
            padding: 20px;
            background-color: #333;
            color: white;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>
    <header>
        <h1>Web開発プロジェクト</h1>
    </header>

    <div class="container">
        <section>
            <h2>概要</h2>
            <p>
                このリポジトリには、私が開発したウェブサイト、ホームページテンプレート、フルスタックアプリケーションなどが含まれています。
                これらのプロジェクトは、HTML、CSS、Bootstrap、JavaScript、Node.js、React、Express.js、MongoDB、SQLの組み合わせを使用しています。
                各プロジェクトはレスポンシブでユーザーフレンドリーに設計されており、モダンなWeb開発のさまざまな側面を示しています。
            </p>
            <div class="links">
                <a href="https://fashionhub.netlify.app" target="_blank">Fashion Hub</a>
                <a href="https://animehubtemp.netlify.app" target="_blank">Anime Hub Template</a>
                <a href="https://animetemp.netlify.app" target="_blank">Anime Template</a>
                <a href="https://simpleporfile.netlify.app" target="_blank">Simple Profile</a>
            </div>
        </section>

        <section>
            <h2>使用技術</h2>
            <ul>
                <li><strong>HTML と CSS:</strong> フロントエンドの構造とスタイリングに使用。</li>
                <li><strong>Bootstrap:</strong> レスポンシブでモバイルファーストのWebデザインに使用。</li>
                <li><strong>JavaScript:</strong> インタラクティブな要素と動的コンテンツに使用。</li>
                <li><strong>Node.js:</strong> アプリケーションのサーバーサイドの構築に使用。</li>
                <li><strong>Express.js:</strong> HTTPリクエストとルーティングの処理に使用。</li>
                <li><strong>React:</strong> インタラクティブなユーザーインターフェースの構築に使用。</li>
                <li><strong>MongoDB:</strong> 一部のプロジェクトでデータストレージ用に使用するNoSQLデータベース。</li>
                <li><strong>SQL:</strong> 他のプロジェクトで使用するリレーショナルデータベース。</li>
                <li><strong>Particle.js:</strong> インタラクティブなパーティクルアニメーションを追加するために使用。</li>
            </ul>
        </section>

        <section>
            <h2>セットアップ手順</h2>
            <p>以下の手順でプロジェクトをローカルにセットアップできます。</p>
            <div class="code">
                <pre><code>git clone https://github.com/<username>/Web-Development-Projects.git</code></pre>
            </div>
            <p>プロジェクトフォルダに移動します:</p>
            <div class="code">
                <pre><code>cd Web-Development-Projects/Project-Name</code></pre>
            </div>
            <p>フルスタックのプロジェクトの場合、npmを使って依存関係をインストールします:</p>
            <div class="code">
                <pre><code>npm install</code></pre>
            </div>
            <p>サーバーを開始します（該当する場合）:</p>
            <div class="code">
                <pre><code>npm start</code></pre>
            </div>
            <p>ブラウザでアプリを開きます:</p>
            <div class="code">
                <pre><code>http://localhost:3000</code></pre>
            </div>
        </section>

        <section>
            <h2>貢献</h2>
            <p>
                このリポジトリをフォークしたり、課題を作成したり、プルリクエストを送ったりすることができます。
                バグ修正、機能改善、新しい機能の追加など、どんな貢献でも歓迎します。
            </p>
        </section>

        <section>
            <h2>ライセンス</h2>
            <p>
                このリポジトリはMITライセンスの下で公開されています。LICENSEファイルで詳細を確認できます。
            </p>
        </section>
    </div>

    <footer>
        <p>© 2024 Web開発プロジェクト. All rights reserved.</p>
    </footer>
</body>
</html>
