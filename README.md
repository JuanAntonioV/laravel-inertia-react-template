<h1>Laravel Inertia React</h1>

## Table of Contents

-   [About](#about)
-   [Getting Started](#getting_started)
-   [Packages](#packages)
-   [Usage](#usage)

## About <a name = "about"></a>

This is a boilerplate for Laravel Inertia with React. It pure Laravel with Inertia and React. It is a simple boilerplate for you to start your project with Laravel Inertia and React. This boilerplate is not included with Authentication. You can add it by yourself.

## Getting Started <a name = "getting_started"></a>

### Prerequisites

You need to have PHP 8.2.0 or above and NodeJS 18.18.0 or above.

### Installing

Clone this repository

```
git clone
```

Install composer dependencies

```
composer install
```

Install npm dependencies

```
npm install
```

Copy .env.example to .env

```
cp .env.example .env
```

Set your database credentials in .env

```
DB_CONNECTION=mysql
DB_HOST=
DB_PORT=
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```

Generate application key

```
php artisan key:generate
```

Run migration

```
php artisan migrate
```

Run npm

```
npm run dev
```

Run the application

```
php artisan serve
```

Open your browser and go to http://localhost:8000

## Packages <a name = "packages"></a>

-   [Laravel](https://laravel.com/)
-   [Inertia](https://inertiajs.com/)
-   [React](https://reactjs.org/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [Zustand](https://github.com/pmndrs/zustand)
-   [React Icons](https://react-icons.github.io/react-icons/)
-   [Vite](https://vitejs.dev/)
-   [Pest Testing](https://pestphp.com/)

## Usage <a name = "usage"></a>

### React

React components are located in resources/js/Components. You can create your own components there.

### TailwindCSS

TailwindCSS is located in resources/css/app.css. You can add your own TailwindCSS classes there.

### Laravel

Laravel is located in app/Http/Controllers. You can create your own controllers there. and also the routes are located in routes/web.php.

## Packages Version <a name = "packages_version"></a>

-   Laravel: ^10.10
-   Inertia Laravel: ^0.6.10
-   Inertia React: ^1.0.13
-   React: ^18.2.0
-   TailwindCSS: ^3.3.5
-   Zustand: ^4.4.4
-   React Icons: ^4.11.0
-   Vite: ^4.5.0
-   Pest Testing: ^2.0
