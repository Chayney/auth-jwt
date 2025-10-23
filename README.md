# laravel-api  

## 環境構築

### コマンドライン上
$git clone   
$docker-compose up -d --build  
$docker-compose exec php bash

### PHPコンテナ内
$composer install

### src上
$cp .env.example .env

### PHPコンテナ内
$php artisan key:generate  
$php artisan migrate  

## URL
・開発環境: http://localhost/login  
・phpMyAdmin: http://localhost:8080/
