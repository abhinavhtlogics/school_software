<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Htl_user;
use DB;
use Illuminate\Http\Request;


class ClassWiseSubjectController extends Controller
{
    
    public function add_class_wise_sub_process(Request $req){
       
        $sectionNames=$req->input('sectionName');
        $classId=$req->input('classId');
        $courseId=$req->input('courseId');
       

        // print_r($sectionNames);
        // print '<pre>';
       // echo "<br>";


       foreach($sectionNames as $sectionName){
        $values = array('sectionId' => $sectionName,'classId'=>$classId,'courseId'=>$courseId);
        

        $data= DB::table('classwisesubject')
         ->select('*')
         ->where('sectionId', $sectionName)
         ->where('classId',$classId)
         ->where('courseId',$courseId)
         ->get();
              
        //  echo count($data);
        //  echo '<br>';
       if(count($data) == 0){


            // echo count($data);
            $subjectIds=$req->input('subjectId');
            $compulsary=$req->input('compulsary');
            $elective=$req->input('elective');
            $priority=$req->input('priority');
            $addition=$req->input('addition');
    
           $last_id= DB::table('classWiseSubject')->insertGetId($values);
     
        //    echo $last_id;
             if($last_id){
     
               
                for($i=0;$i<count($subjectIds); $i++){
                    $data= array('subjectId' => $subjectIds[$i],'compulsary'=>$compulsary[$i],'addition'=>$addition[$i],'elective'=>$elective[$i],'priority'=>$priority[$i],'csId'=>$last_id);
                    DB::table('class_wise_sub_desc')->insert($data);
                }
             
             }
       }  
     
       else{

        return ['status'=>False, 'message'=>'section already added'];
       }
    
       }
       return ['status'=>True, 'message'=> 'Data Added'];
        
    }


    public function class_wise_subject_list(){
        $data=array();
        $data= DB::table('classwisesubject')
        ->join('course_master', 'classwisesubject.courseId', '=', 'course_master.courseId')
        ->join('class_master', 'classwisesubject.classId', '=', 'class_master.classId')
        ->join('section_master', 'classwisesubject.sectionId', '=', 'section_master.sectionId')
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


    public function class_wise_sub_list_id($id){
        $data=array();
        $data= DB::table('classwisesubject')
        ->join('course_master', 'classwisesubject.courseId', '=', 'course_master.courseId')
        ->join('class_master', 'classwisesubject.classId', '=', 'class_master.classId')
        ->join('section_master', 'classwisesubject.sectionId', '=', 'section_master.sectionId')
         ->select('*')
         ->where('classwisesubject.id',$id)
         ->get();
 
        
      
        // echo count($data);
 
         if(count($data) > 0){
             return ['status'=>True, 'data'=> $data];
         }
         else{
             return ['status'=>False, 'data'=>$data];
         }
    }



    public function class_wise_sub_desc_id($id){
        $data=array();
        $data= DB::table('class_wise_sub_desc')
        ->join('subject_master', 'class_wise_sub_desc.subjectId', '=', 'subject_master.subjectId')
         ->select('*')
         ->where('class_wise_sub_desc.csId',$id)
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
