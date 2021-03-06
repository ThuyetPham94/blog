<?php

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
Route::group(['middleware' => 'api', 'namespace' => 'Api', 'as' => 'api.'], function () {
    // Route::resource('products', 'ProductController', ['except' => ['create', 'edit']]);
    Route::resource('items', 'ItemController');
});

Route::group(['prefix' => 'api'], function () {
    Route::resource('users', 'UserController');    
});
