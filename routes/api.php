<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\SectionController;
use App\Http\Controllers\ClassController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\ClassWiseSubjectController;
use App\Http\Controllers\StationController;   	
use App\Http\Controllers\RouteController;  
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("data",[LoginController::class,'test']);
Route::post("add_course_process",[CourseController::class,'add_course_process']);
Route::post("add_section_process",[SectionController::class,'add_section_process']);
Route::post("edit_section_process",[SectionController::class,'edit_section_process']);
Route::get("course_list",[CourseController::class,'course_list']);
Route::get("section_list",[SectionController::class,'section_list']);
Route::get("subject_list",[SubjectController::class,'subject_list']);
Route::post("edit_subject_process",[SubjectController::class,'edit_subject_process']);
Route::get("section_by_id/{id}",[SectionController::class,'section_by_id']);
Route::get("subject_by_id/{id}",[SubjectController::class,'subject_by_id']);
Route::get("class_list_by_id/{id}",[ClassController::class,'class_list_by_id']);
Route::post("add_subject_process",[SubjectController::class,'add_subject_process']);
Route::post("update_course_process",[CourseController::class,'update_course_process']);
Route::get("course_list_id/{id}",[CourseController::class,'course_list_id']);

Route::post("add_student_process",[StudentController::class,'add_student_process']);

Route::post("add_class_wise_sub_process",[ClassWiseSubjectController::class,'add_class_wise_sub_process']);

Route::get("section_list_by_course_class/{course_id}/{class_id}",[SectionController::class,'section_list_by_course_class']);

Route::get("feecat_list",[FeeCategoryController::class,'feecat_list']);
Route::post("update_feecat_process",[FeeCategoryController::class,'update_feecat_process']);
Route::get("feecat_list_id/{id}",[FeeCategoryController::class,'feecat_list_id']);
Route::delete("delete_feecat/{courseId}",[FeeCategoryController::class,'delete_feecat']);				
Route::get('/station/index',[StationController::class,'index']);   	
Route::post('/station/create',[StationController::class,'create']);   						 
Route::get('/station/edit/{id}', [StationController::class, 'edit']);   
Route::post('/station/update/{id}', [StationController::class, 'update']);    	
Route::delete('/station/delete/{id}', [StationController::class, 'delete']);   
Route::get('/route/index',[RouteController::class,'index']);      
Route::post('/route/create',[RouteController::class,'create']);     				
Route::get('/route/edit/{id}', [RouteController::class, 'edit']);
Route::post('/route/update/{id}', [RouteController::class, 'update']);    			
Route::delete('/route/delete/{id}', [RouteController::class, 'delete']);      
Route::get('/route/getstations', [RouteController::class, 'getStations']);		    


Route::get("class_wise_subject",[ClassWiseSubjectController::class,'class_wise_subject_list']);
		 