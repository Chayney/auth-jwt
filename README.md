# laravel-api  
laravelAPIを構築するための環境です。  

フロントエンド構築  
プロジェクトルートで、npm create vite@latest or npx create-react-app [ディレクトリ名] or npx create-next-app [ディレクトリ名]  

クロスサイトオリジン設定  
laravel/config/cors.php  
'allowed_origins' => ['http://localhost:3000'], // Next.jsのURL  
'allowed_origins' => ['http://localhost:5173'], // React(vite)のURL  
'allowed_origins' => ['http://localhost:3000'], // React(CRA)のURL  

フロントエンドからAPIを取得  
http://localhost/api/  
api/以降のパスはご自身で設定してください。

## 環境構築

### コマンドライン上
$git clone https://github.com/Chayney/laravel-api.git  
$docker-compose up -d --build  
$docker-compose exec php bash

### PHPコンテナ内
$composer install

### laravel上
$cp .env.example .env

### PHPコンテナ内
$php artisan key:generate  
$php artisan migrate  

## URL
・開発環境: http://localhost    
・phpMyAdmin: http://localhost:8080/
