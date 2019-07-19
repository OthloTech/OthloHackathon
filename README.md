## OthloHackathon

## How to Use
1. `git clone https://github.com/OthloTech/OthloHackathon.git`
2. `git checkout feature/2017`
3. `npm install`
4. `npm start`    // 変更を検知 & サーバ立ち上げ
5. `localhost:8080`にアクセス

## How to Use with Docker Compose
1. `git clone https://github.com/OthloTech/OthloHackathon.git`
2. `git checkout feature/2017`
3. `docker-compose build`
4. `docker-compose up -d` // サーバ立ち上げ
5. `localhost:8080`にアクセス

- ローカルでファイルを変更しサーバを起動し直すとき、`docker-compose restart`
- コンテナ内のファイルを確認したいとき、`docker-compose exec othlohack_LP bash`
- サーバを片付けたいとき、`docker-compose down -v`

## Requirements
- Python3

## サイトイメージ
![othlohack](https://raw.githubusercontent.com/OthloTech/OthloHackathon/master/othlohack.png)
