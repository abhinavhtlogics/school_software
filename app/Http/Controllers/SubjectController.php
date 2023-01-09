<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Htl_user;
use DB;
use Illuminate\Http\Request;


class SubjectController extends Controller
{
    
    public function add_subject_process(Request $req){
       
       
        $SubjectName=$req->input('subjectName');
        $remark=$req->input('remark');
        $shortCode=$req->input('shortCode');
        
       
        // echo $userId;
        // echo $password;
        $values = array('remark' => $remark,'shortCode'=>$shortCode,'subjectName'=> ucfirst($SubjectName));
        

       
     
       // echo count($data);

        if( DB::table('subject_master')->insert($values)){
            return ['status'=>True, 'message'=>'Subject Added'];
        }
        else{
            return ['status'=>False, 'message'=>'Subject Not Added'];
        }
       // echo "<br>";
        
    }



    public function edit_Subject_process(Request $req){
       
      
        $subjectName=$req->input('subjectName');
        $remark=$req->input('remark');
        $shortCode=$req->input('shortCode');
      
        $id=$req->input('id');
        // echo $userId;
        // echo $password;
        $values = array('remark' => $remark,'shortCode'=>$shortCode,'subjectName'=> ucfirst($subjectName));
        

       
     
       // echo count($data);

        if( DB::table('subject_master')->where('subjectId','=',$id)->update($values)){
            return ['status'=>True, 'message'=>'Subject Edited'];
        }
        else{
            return ['status'=>False, 'message'=>'Subject Not Edited'];
        }
       // echo "<br>";
        
    }



    public function subject_list(){
        $data=array();
        $data= DB::table('subject_master')
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

    public function subject_by_id($id){
        $data=array();
        $data= DB::table('subject_master')
         ->select('*')
         ->where('subjectId',$id)
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
