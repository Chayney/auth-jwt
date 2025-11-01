# Todoアプリ  
laravelAPIとReactのViteを繋いだ環境です。  
ダミーデータとTodo一覧を取得するAPIは既に用意されています。  

## 認証方式  
JWTトークン認証  
https://manabupanda.net/practice_web_programming/php_laravel/laravel-react-jwt-authentication/  

フロントエンドはlocalStorageでトークンを保持  

## 技術構成  
### フロントエンド  
・typescript  
・react  
・react-dom  
・react-route  
・react-hook-form  
・zod  
・@hookform/resolvers  
・@tanstack/react-query  
・@fortawesome/react-fontawesom  
・@fortawesome/free-solid-svg-icons  

### バックエンド  
・laravel  
・tymon/jwt-auth  

## 環境構築

### コマンドライン上
$git clone https://github.com/Chayney/auth-jwt.git  
$docker-compose up -d --build  
$docker-compose exec php bash

### PHPコンテナ内
$composer install

### laravel上
$cp .env.example .env

### PHPコンテナ内
$php artisan key:generate  
$php artisan jwt:secret  
$php artisan migrate  
$php artisan db:seed  

### react上  
$cp .env.example .env  

## ダミーユーザー  
・email: test@example.com  
・password: password

## URL
・laravel-api: http://localhost/api/todos    
・phpMyAdmin: http://localhost:8080  
・ユーザー登録ページ: http://localhost:5173/signup  
・ログインページ: http://localhost:5173/login 
・1ユーザーのTodoリスト一覧ページ: http://localhost:5173/todos  
