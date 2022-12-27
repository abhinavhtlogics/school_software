<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\SectionController;
use App\Http\Controllers\ClassController;

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
Route::get("section_by_id/{id}",[SectionController::class,'section_by_id']);
Route::get("class_list_by_id/{id}",[ClassController::class,'class_list_by_id']);