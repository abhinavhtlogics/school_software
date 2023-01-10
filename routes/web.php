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

Route::get('/subject_add', function () {
    return view('subject_add');
});

Route::get('/student_add', function () {
    return view('student_add');
});

Route::get('/subject_edit/{id}', function () {
    return view('subject_edit');
});

Route::get('/course_edit/{id}', function () {
    return view('course_edit');
});


Route::get('/subject_list', function () {
    return view('subject_list');
});

Route::get('/class_wise_subject_add', function () {
    return view('class_wise_subject_add');
});

Route::get('/class_wise_subject_edit/{id}', function () {
    return view('class_wise_subject_edit');
});


Route::get('/station_list', function () {
    return view('station_list');    
}); 

Route::get('/station_add', function () {
    return view('add_station');  
}); 

Route::get('/station_view/{id}', function () {
    return view('view_station');   		 				
}); 

Route::get('/station_edit/{id}', function () {
    return view('edit_station');  				
}); 

Route::get('/route_list', function () {
    return view('route_list');    		
});   

Route::get('/route_add', function () {
    return view('add_route');  				
}); 

Route::get('/route_edit/{id}', function () {
    return view('edit_route');  				
}); 

Route::get('/route_view/{id}', function () {
    return view('view_route');  				
}); 

Route::get('/feecat_list', function () {
    return view('feecat_list');
});
Route::get('/feecat_add', function () {
    return view('feecat_add');
});

Route::get('/feecat_edit/{id}', function () {
    return view('feecat_edit');
});
Route::get('/feecat_delete/{id}', function () {
    return view('feecat_delete');
});


Route::get('/class_wise_subject_list', function () {
    return view('class_wise_subject_list');    
}); 