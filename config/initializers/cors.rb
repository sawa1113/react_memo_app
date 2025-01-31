# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'http://localhost:3001'  # ReactのURLを指定
      resource '*',
        headers: :any,
        methods: [:get, :post, :patch, :put, :delete, :options]
    end
end
# Rack::Cors というミドルウェアをRailsの設定に追加しています。
# insert_before 0 は、ミドルウェアの一番最初に追加するという意味です。
# allow do ブロック内で、どのドメイン（オリジン）からのリクエストを許可するか指定します。
# 'http://localhost:3001' は、Reactの開発環境のURLです。
# Reactのフロントエンドは http://localhost:3001 で動いているため、それを許可しています。
# resource '*' は、すべてのURLパス (* で指定) でCORSを適用するという意味。
# headers: :any は、どんなHTTPヘッダーでも許可する設定です。
# methods: [:get, :post, :patch, :put, :delete, :options] は、許可するHTTPリクエストの種類を指定しています。
# GET: データを取得
# POST: データを作成
# PATCH / PUT: データを更新
# DELETE: データを削除
# OPTIONS: CORSの確認リクエスト（ブラウザが送る)を許可