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
Route::get('/feecat_view/{id}', function () {
    return view('feecat_view');		
});
Route::get('/feecat_edit/{id}', function () {
    return view('feecat_edit');
});
Route::get('/feecat_delete/{id}', function () {
    return view('feecat_delete');
});
Route::get('/feeslot', function () {
    return view('fee_slot');    					
});   
Route::get('/fee_amount', function () {	
    return view('fee_amount');    					
}); 
Route::get('/fee_amount_list', function () {	
    return view('fee_amount_list');       					
});    
Route::get('/fee_amount_add', function () {	
    return view('fee_amount_add');       					
});   
Route::get('/fee_amount_edit/{id}', function () {
    return view('fee_amount_edit');    				
});  
Route::get('/fine_setting', function () {	
    return view('fine_setting');    		  					
});  
Route::get('/fee_concession', function () {	
    return view('fee_concession');        		  					
});  
Route::get('/payment_mode_list', function () {	
    return view('payment_mode_list');             		   		  					
});     
Route::get('/payment_mode_add', function () {	
    return view('add_payment_mode');     		   		  					
});      
Route::get('/payment_mode_edit/{id}', function () {	  
    return view('edit_payment_mode');     		   		  					
});  

Route::get('/class_wise_subject_list', function () {
    return view('class_wise_subject_list');    
}); 


Route::get('/fee_amount_ind', function () {	
    return view('fee_amount_ind');       					
});   

Route::get('/print_id_card', function () {
    return view('print_id_card');    
}); 




//Added by abhinav

Route::get('/create_department', function () {
    return view('create_department');    
});

Route::get('/department_list', function () {
    return view('department_list');    
});


Route::get('/create_qualification', function () {
    return view('create_qualification');    
});

Route::get('/qualification_list', function () {
    return view('qualification_list');    
});

Route::get('/create_designation', function () {
    return view('create_designation');    
});


Route::get('/designation_list', function () {
    return view('designation_list');    
});