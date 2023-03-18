<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Htl_user;
use DB;
use Illuminate\Http\Request;


class ClassController extends Controller
{
    
  


    public function class_list_by_id($id){
        $data=array();
        $data= DB::table('class_master')
       
         ->select('*')
         ->where('courseId',$id)
         ->get();
 
        
      
        // echo count($data);
 
         if(count($data) > 0){
             return ['status'=>True, 'data'=> $data];
         }
         else{
             return ['status'=>False, 'data'=>$data];
         }
    }



    public function section_list_by_id($id){
        $data=array();
        $data= DB::table('section_master')
        
       
         ->select('*')
         ->where('courseId',$id)
         ->get();
 
        
      
        // echo count($data);
 
         if(count($data) > 0){
             return ['status'=>True, 'data'=> $data];
         }
         else{
             return ['status'=>False, 'data'=>$data];
         }
    }





    public function student_list(){
        $data=array();
        $data= DB::table('student_registrations1')
        
       
         ->select('*')
        
         ->get();
 
        
      
        // echo count($data);
 
         if(count($data) > 0){
             return ['status'=>True, 'data'=> $data];
         }
         else{
             return ['status'=>False, 'data'=>$data];
         }
    }



    public function class_list(){
        $data=array();
        $data= DB::table('class_master')
        
       
         ->select('*')
        
         ->get();
 
        
      
        // echo count($data);
 
         if(count($data) > 0){
             return ['status'=>True, 'data'=> $data];
         }
         else{
             return ['status'=>False, 'data'=>$data];
         }
    }
}
