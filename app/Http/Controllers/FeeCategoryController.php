<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Htl_user;
use DB;
use Illuminate\Http\Request;


class FeeCategoryController extends Controller
{

    public function feecat_list(){
        $data=array();
        $data= DB::table('feecategorymaster')
         ->select('*')
         ->get();

         if(count($data) > 0){
             return ['status'=>True, 'data'=> $data];
         }
         else{
             return ['status'=>False, 'data'=>$data];
         }
    }
    
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



    
    public function course_list_id($id){
        $data=array();
        $data= DB::table('course_master')
         ->where('courseId',$id)
         ->get();
 
        // dd($data);
      
        // echo count($data);
 
         if(count($data) > 0){
             return ['status'=>True, 'data'=> $data];
         }
         else{
             return ['status'=>False, 'data'=>$data];
         }
    }
   
    public function update_course_process(Request $req){
       
        $courseName =   $req->input('courseName');
        $remark     =   $req->input('remark');
        $id         =   $req->input('id');

        // dd($req);
        $values = array('Remark' => $remark, 'courseName'=> ucfirst($courseName));
     
        if( DB::table('course_master')->where('courseId','=',$id)->update($values)){
            return ['status'=>True, 'message'=>'Course Updated'];
        }
        else{
            return ['status'=>False, 'message'=>'Course Not Updated'];
        }
        
    }

    public function delete_course($courseId){
        $delete = DB::table('course_master')->where('courseId','=',$courseId)->delete();
        if($delete){
            return ['status'=>True, 'message'=>'Course Deleted'];
        }else{
            return ['status'=>True, 'message'=>'Course not Deleted'];
        }

    }

}
