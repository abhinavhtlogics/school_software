<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Htl_user;
use DB;
use Illuminate\Http\Request;


class SectionController extends Controller
{
    
    public function add_section_process(Request $req){
       
        $courseId=$req->input('courseId');
        $classId=$req->input('classId');
        $sectionName=$req->input('sectionName');
        $remark=$req->input('remark');
        $status=$req->input('status');
        // echo $userId;
        // echo $password;
        $values = array('courseId' => $courseId,'remark' => $remark,'classId'=>$classId, 'sectionName'=> ucfirst($sectionName), 'status'=>$status);
        

       
     
       // echo count($data);

        if( DB::table('section_master')->insert($values)){
            return ['status'=>True, 'message'=>'Section Added'];
        }
        else{
            return ['status'=>False, 'message'=>'Section Not Added'];
        }
       // echo "<br>";
        
    }



    public function edit_section_process(Request $req){
       
        $courseId=$req->input('courseId');
        $classId=$req->input('classId');
        $sectionName=$req->input('sectionName');
        $remark=$req->input('remark');
        $status=$req->input('status');
        $id=$req->input('id');
        // echo $userId;
        // echo $password;
        $values = array('courseId' => $courseId,'remark' => $remark,'classId'=>$classId, 'sectionName'=> ucfirst($sectionName), 'status'=>$status);
        

       
     
       // echo count($data);

        if( DB::table('section_master')->where('sectionId','=',$id)->update($values)){
            return ['status'=>True, 'message'=>'Section Added'];
        }
        else{
            return ['status'=>False, 'message'=>'Section Not Added'];
        }
       // echo "<br>";
        
    }



    public function section_list(){
        $data=array();
        $data= DB::table('section_master')
        ->join('course_master', 'section_master.courseId', '=', 'course_master.courseId')
        ->join('class_master', 'section_master.classId', '=', 'class_master.classId')
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

    public function section_by_id($id){
        $data=array();
        $data= DB::table('section_master')
         ->select('*')
         ->where('sectionId',$id)
         ->get();
 
        
      
        // echo count($data);
 
         if(count($data) > 0){
             return ['status'=>True, 'data'=> $data];
         }
         else{
             return ['status'=>False, 'data'=>$data];
         }
    }



       public function section_list_by_course_class($course_id,$class_id){
        $data=array();
        $data= DB::table('section_master')
         ->select('*')
         ->where('courseId',$course_id)
         ->where('classId',$class_id)
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
