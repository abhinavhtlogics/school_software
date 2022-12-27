<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Htl_user;
use DB;
use Illuminate\Http\Request;


class CourseController extends Controller
{
    
    public function add_course_process(Request $req){
       
        $courseName=$req->input('courseName');
        $remark=$req->input('remark');
        // echo $userId;
        // echo $password;
        $values = array('courseName' => ucfirst($courseName),'remark' => $remark);
        

       
     
       // echo count($data);

        if( DB::table('course_master')->insert($values)){
            return ['status'=>True, 'message'=>'Course Added'];
        }
        else{
            return ['status'=>False, 'message'=>'Course Not Added'];
        }
       // echo "<br>";
        
    }



    public function course_list(){
        $data=array();
        $data= DB::table('course_master')
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
