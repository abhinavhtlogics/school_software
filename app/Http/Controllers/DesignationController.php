<?php

namespace App\Http\Controllers;		
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;  
use Illuminate\Http\Request;
use Carbon\Carbon;
use Carbon\CarbonPeriod;		

use App\Models\FeeAmount;  
use App\Models\FeeSlot;  
use App\Models\Classic;		  
use App\Models\Course;     
use App\Models\Department;     
use App\Models\Qualification;  
use App\Models\Designation;  
use DB;  

class DesignationController extends Controller		
{
	public function __construct()
    {
        DB::statement("SET SQL_MODE=''");   
    }

    public function index()   
	{ 
		$designation=Designation::leftjoin('department_master', 'designation_master.department_id', '=', 'department_master.id')
        ->select('department_master.department_name', 'designation_master.designation','designation_master.id')
        ->get();

        if(!empty($designation)) {   
			return response()->json(["status" => 'successed',"data" => $designation]);    	  	
		}
		else {
			return response()->json(["status" => "failed","message" => "Whoops! no record found","data" =>[]]);
		}   
		
    }
    
	public function create(Request $request)			
	{
		$inputs=$request->all();
		
		$validator = Validator::make($request->all(), [
            'designation_name' => 'required|unique:designation_master,designation',
            'departmentid' => 'required'
        ]);
		
		//$validator = Validator::make($inputs, $rules, $messages, $fields);       		
		
        if ($validator->fails()) {  	
			$message='';	
			$errors=$validator->errors();  	
			
			for($i=0;$i<count($errors->all());$i++)  
			{				
				if($i==count($errors->all())-1)
				{
					$message .=$errors->all()[$i];		
				}
				else
				{
					$message .=$errors->all()[$i].",";
				}	 
			}	  			
			
			$response_arr=array("status"=>"failed","message"=>$message,"errors"=>$errors);	
            return response()->json($response_arr);		
        }
		
		else
		{
			
				$insert_arr[]=array(
					 
					'designation'=>$request->designation_name,
                    'department_id'=>$request->departmentid
				);
			
			
			$inserts=Designation::insert($insert_arr);  
			
			if($inserts)		
			{	
				$message="Designation created successfully"; 
				$response_arr=array("status"=>'successed',"success"=>true,"message"=>$message,"errors"=>[],"data" =>$inserts);	
			}
			else
			{
				$message="could not created!!";  
				$response_arr=array("status"=>'failed',"success"=>false,"message"=>$message,"errors"=>[],"data"=>[]);	
			} 
			
			return response()->json($response_arr);	  		
      		
		}	 		     
		
	}  	  
	
   public function edit($id)		
   {		 
		$info = FeeAmount::where('id',$id)->get();   
		$courses = Course::all();  	  		 
		
		if(empty($info)){   
			return response()->json(["status" => "failed", "message" => "Whoops! failed to edit, fee amount does not exist!!","errors" =>'']); 					
		}     
		else { 
			$classes = Classic::where('courseId',$info[0]->course_id)->get();         		
			$data=array('fee_data'=>$info,'course_data'=>$courses,'class_data'=>$classes);  
		
			return response()->json(["status" =>'successed', "success" => true, "message" => "fee amount record found successfully","data" =>$data]);   			
		}  
					
   }

   public function update(Request $request,$id)		
   {
	    $inputs=$request->all();  
		$info = FeeAmount::where('id',$id)->get();   
		$course_id=$request->course_id;
		$class_id=$request->class_id;	
		
		if($course_id !=$info[0]->course_id || $class_id !=$info[0]->class_id)   
		{
			$checkExist= FeeAmount::select(DB::raw('count(*) as record_count'))
						 ->where('course_id',$course_id)   						 
						 ->where('class_id',$class_id)	
						 ->get(); 				
		}
		else
		{
			$checkExist= FeeAmount::select(DB::raw('count(*) as record_count'))
						 ->where('course_id',0)   						 
						 ->where('class_id',0)	     
						 ->get(); 	
		}  
		
		$rules=[            	 			
			'course_id' => 'required|integer|gt:0',		
			'class_id' => 'required|integer|gt:0'  	
		];   

		$messages = [
			'required' => 'The :attribute field is required.',  
		];  

		$fields = [
			'course_id' => 'Course Name',
			'class_id' => 'Class Name'    	
		];  

		$validator = Validator::make($inputs, $rules, $messages, $fields); 
		if ($validator->fails()) {  	
			$message='';	
			$errors=$validator->errors();  	
			
			for($i=0;$i<count($errors->all());$i++)  
			{				
				if($i==count($errors->all())-1)
				{
					$message .=$errors->all()[$i];		
				}
				else
				{
					$message .=$errors->all()[$i].",";
				}	 
			}	  			
			
			$response_arr=array("status"=>"failed","message"=>$message);	
			return response()->json($response_arr);		
		}
		else if($checkExist[0]->record_count >0)
		{
			return response()->json(["status" =>'failed', "success" => false, "message" => "could not edited, class with fee amount already exist!!"]);return response()->json($response_arr);						     
		}
		else
		{
			//
			$updateArr             =       array(  				
				"course_id"        =>     $request->course_id,  
				"class_id"         =>     $request->class_id,             
				"admission_fee"    =>     $request->admission_fee,
				"sport_fee"        =>     $request->sport_fee,  
				"library_fee"      =>     $request->library_fee,             
				"fine_fee"         =>     $request->fine_fee, 				
				"cultural_fee"     =>     $request->cultural_fee,             
				"fest_fee"         =>     $request->fest_fee,
				"tution_fee"       =>     $request->tution_fee,  
				"h_fee"            =>     $request->h_fee      
			);
		   
			$updated=FeeAmount::where('id',$id)->update($updateArr);	
			if($updated)
			{
				return response()->json(["status" =>'successed', "success" => true, "message" => "Fee amount record edited successfully","data" =>$updated]);     		
			}
			else
			{				
				return response()->json(["status" =>'failed', "success" => false, "message" => "could not edited!!","data" =>[]]);  
			}
			
		}		
		
		
   }
   
   public function delete($id)
   {
		$info = FeeAmount::where('id',$id)->get(); 
		
        if(!empty($info))   
		{			
			$course_info = Course::where('courseId',$info[0]->course_id)->get();  
			$class_info = Classic::where('classId',$info[0]->class_id)->get();  
			 
			if(!empty($course_info) || !empty($class_info))    
			{
				return response()->json(["status" => "failed","success" => false,"message" => "Whoops! failed to delete, fee amount having course/class!!","errors" =>'',"data" => []]);   
			}
			else
			{
				FeeAmount::where('id',$id)->delete();			  
				return response()->json(["status" =>'successed', "success" => true, "message" => "fee amount record deleted successfully","data" => []]);   
			}
			
		}
		else
		{
			return response()->json(["status" => "failed","success" => false,"message" => "Whoops! failed to delete,!!","errors" =>'']); 				
		} 		 
		
    }



	public function get_fee_amt_ind($id)   
	{ 
		$data= DB::table('feeamtsingle')
		->join('student_registrations1', 'feeamtsingle.AdmissionNo', '=', 'student_registrations1.admission_no')
		->select('*')
		->where('AdmissionNo',$id)
		->get();

        if(!empty($data)) {   
			return response()->json(["status" => 'success',"data" => $data]);    	  	
		}
		else {
			return response()->json(["status" => "false","message" => "Whoops! no record found","data" =>[]]);
		}   
		
    }
	
	public function add(Request $req){
       
        $admission_fee=$req->input('admission_fee');
		$cultural_fee=$req->input('cultural_fee');
		$fine_fee=$req->input('fine_fee');
		$h_fee=$req->input('h_fee');
		$library_fee=$req->input('library_fee');
		$science_fee=$req->input('science_fee');
		$sport_fee=$req->input('sport_fee');
		$tution_fee=$req->input('tution_fee');
		$admission_no=$req->input('admission_no');


		$err=0;

		$data= DB::table('feeamtsingle')
		->where('AdmissionNo',$admission_no)
		->where('feeCatId',1)
		->get();

		if(count($data)> 0){

			$values = array('feeAmount' => $admission_fee);

			if(DB::table('feeamtsingle')->where('feeCatId','=',1)->update($values))
			
			{
				$err=0;
        }
        else{
			$err= $err +1;
           
        }
		}

		else{

			$values = array('feeAmount' => $admission_fee,'feeCatId'=>1,'AdmissionNo'=>$admission_no);

			if(DB::table('feeamtsingle')->insert($values))
			
			{
				$err=0;
				
        }
        else{
			$err= $err +1;
           
        }




	}



		$data= DB::table('feeamtsingle')
		->where('AdmissionNo',$admission_no)
		->where('feeCatId',2)
		->get();

		if(count($data)> 0){

			$values = array('feeAmount' => $sport_fee);

			if(DB::table('feeamtsingle')->where('feeCatId','=',2)->update($values))
			
			{
				$err=0;
        }
        else{
			$err= $err +1;
           
        }
		}

		else{

			$values = array('feeAmount' => $sport_fee,'feeCatId'=>2,'AdmissionNo'=>$admission_no);

			if(DB::table('feeamtsingle')->insert($values))
			
			{
				$err=0;
				
        }
        else{
			$err= $err +1;
           
        }

	}









		$data= DB::table('feeamtsingle')
		->where('AdmissionNo',$admission_no)
		->where('feeCatId',3)
		->get();

		if(count($data)> 0){

			$values = array('feeAmount' => $library_fee);

			if(DB::table('feeamtsingle')->where('feeCatId','=',3)->update($values))
			
			{
				$err=0;
        }
        else{
			$err= $err +1;
           
        }
		}

		else{

			$values = array('feeAmount' => $library_fee,'feeCatId'=>3,'AdmissionNo'=>$admission_no);

			if(DB::table('feeamtsingle')->insert($values))
			
			{
				$err=0;
				
        }
        else{
			$err= $err +1;
           
        }

	}


		$data= DB::table('feeamtsingle')
		->where('AdmissionNo',$admission_no)
		->where('feeCatId',4)
		->get();

		if(count($data)> 0){

			$values = array('feeAmount' => $fine_fee);

			if(DB::table('feeamtsingle')->where('feeCatId','=',4)->update($values))
			
			{
				$err=0;
        }
        else{
			$err= $err +1;
           
        }
		}

		else{

			$values = array('feeAmount' => $fine_fee,'feeCatId'=>4,'AdmissionNo'=>$admission_no);

			if(DB::table('feeamtsingle')->insert($values))
			
			{
				$err=0;
				
        }
        else{
			$err= $err +1;
           
        }

	}


		$data= DB::table('feeamtsingle')
		->where('AdmissionNo',$science_fee)
		->where('feeCatId',5)
		->get();

		if(count($data)> 0){

			$values = array('feeAmount' => $cultural_fee);

			if(DB::table('feeamtsingle')->where('feeCatId','=',5)->update($values))
			
			{
				$err=0;
        }
        else{
			$err= $err +1;
           
        }
		}

		else{

			$values = array('feeAmount' => $cultural_fee,'feeCatId'=>5,'AdmissionNo'=>$admission_no);

			if(DB::table('feeamtsingle')->insert($values))
			
			{
				$err=0;
				
        }
        else{
			$err= $err +1;
           
        }


	}

		$data= DB::table('feeamtsingle')
		->where('AdmissionNo',$admission_no)
		->where('feeCatId',6)
		->get();

		if(count($data)> 0){

			$values = array('feeAmount' => $science_fee);

			if(DB::table('feeamtsingle')->where('feeCatId','=',6)->update($values))
			
			{
				$err=0;
        }
        else{
			$err= $err +1;
           
        }
		}

		else{

			$values = array('feeAmount' => $science_fee,'feeCatId'=>6,'AdmissionNo'=>$admission_no);

			if(DB::table('feeamtsingle')->insert($values))
			
			{
				$err=0;
				
        }
        else{
			$err= $err +1;
           
        }
	}

		$data= DB::table('feeamtsingle')
		->where('AdmissionNo',$admission_no)
		->where('feeCatId',7)
		->get();

		if(count($data)> 0){

			$values = array('feeAmount' => $tution_fee);

			if(DB::table('feeamtsingle')->where('feeCatId','=',7)->update($values))
			
			{
				$err=0;
        }
        else{
			$err= $err +1;
           
        }
		}

		else{

			$values = array('feeAmount' => $tution_fee,'feeCatId'=>7,'AdmissionNo'=>$admission_no);

			if(DB::table('feeamtsingle')->insert($values))
			
			{
				$err=0;
				
        }
        else{
			$err= $err +1;
           
        }
	}


		$data= DB::table('feeamtsingle')
		->where('AdmissionNo',$admission_no)
		->where('feeCatId',8)
		->get();

		if(count($data)> 0){

			$values = array('feeAmount' => $h_fee);

			if(DB::table('feeamtsingle')->where('feeCatId','=',8)->update($values))
			
			{
				$err=0;
        }
        else{
			$err= $err +1;
           
        }
		}

		else{

			$values = array('feeAmount' => $h_fee,'feeCatId'=>8,'AdmissionNo'=>$admission_no);

			if(DB::table('feeamtsingle')->insert($values))
			
			{
				$err=0;
				
        }
        else{
			$err= $err +1;
           
        }

	}

		if($err == 0){
			return ['status'=>True, 'message'=>'feeamtsingle Added'];
		}
		else{
			return ['status'=>False, 'message'=>'feeamtsingle Not Added'];
		}

		}


		
        // echo $userId;
        // echo $password;
       
        

       
     
       // echo count($data);

        
            
       // echo "<br>";




	   public function get_fee_category()   
	   { 
		   $data= DB::table('fee_category_master')
		   ->select('*')
		   ->get();
   
		   if(!empty($data)) {   
			   return response()->json(["status" => 'success',"data" => $data]);    	  	
		   }
		   else {
			   return response()->json(["status" => "false","message" => "Whoops! no record found","data" =>[]]);
		   }   
		   
	   }








	   public function addFeeSingle(Request $req){
		   
        $fee_cat=$req->input('feeCat');
		$fee_cat_val=$req->input('feeCatVal');
		$admission_no=$req->input('admission_no');


		print_r($fee_cat);

		print_r($fee_cat_val);


		$err=0;
		if(count($fee_cat)> 0){


			for ($i=0; $i <count($fee_cat) ; $i++) { 
				
				$data= DB::table('feeamtsingle')
		->where('AdmissionNo',$admission_no)
		->where('feeCatId',$fee_cat[$i]['fee_id'])
		->get();

		if(count($data)> 0){

			$values = array('feeAmount' => $fee_cat_val[$i]);

			if(DB::table('feeamtsingle')->where('feeCatId','=',$fee_cat[$i]['fee_id'])->update($values))
			
			{
				$err=0;
        }
        else{
			$err= $err +1;
           
        }
			}


			else{

		$values = array('feeAmount' => $fee_cat_val[$i],'feeCatId'=>$fee_cat[$i]['fee_id'],'AdmissionNo'=>$admission_no);

			if(DB::table('feeamtsingle')->insert($values))
			
			{
				$err=0;
				
        }
        else{
			$err= $err +1;
           
        }


			}
		}

	}


	if($err == 0){
		return ['status'=>True, 'message'=>'feeamtsingle Added'];
	}
	else{
		return ['status'=>False, 'message'=>'feeamtsingle Not Added'];
	}

	// 	$err=0;

	// 	$data= DB::table('feeamtsingle')
	// 	->where('AdmissionNo',$admission_no)
	// 	->where('feeCatId',1)
	// 	->get();

	// 	if(count($data)> 0){

	// 		$values = array('feeAmount' => $admission_fee);

	// 		if(DB::table('feeamtsingle')->where('feeCatId','=',1)->update($values))
			
	// 		{
	// 			$err=0;
    //     }
    //     else{
	// 		$err= $err +1;
           
    //     }
	// 	}

	// 	else{

	// 		$values = array('feeAmount' => $admission_fee,'feeCatId'=>1,'AdmissionNo'=>$admission_no);

	// 		if(DB::table('feeamtsingle')->insert($values))
			
	// 		{
	// 			$err=0;
				
    //     }
    //     else{
	// 		$err= $err +1;
           
    //     }




	// }
	   }


        
    }

  

	
	

   

