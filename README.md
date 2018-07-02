# vue-auth-laravel
Small learning project using Laravel and Vue JS

Command after clone:

`composer require tymon/jwt-auth:1.0.0-rc.1`

Publish the configuration file. This creates a `config/jwt.php` config file.

`php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"`

Run `php artisan jwt:secret` to enerate the secret key used to sign tokens.

And other Laravel things you have to do like Migration and Configuration and .env setup.