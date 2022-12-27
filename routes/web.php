<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/login', function () {
    return view('login');
});


Route::get('/users', function () {
    return view('users');
});

Route::get('/section_add', function () {
    return view('section_add');
});

Route::get('/section_edit/{id}', function () {
    return view('section_edit');
});

Route::get('/course_add', function () {
    return view('course_add');
});

Route::get('/course_list', function () {
    return view('course_list');
});

Route::get('/section_list', function () {
    return view('section_list');
});

Route::get('/dashboard', function () {
    return view('dashboard');
});