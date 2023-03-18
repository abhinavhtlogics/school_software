<?php

namespace App\Http\Controllers;		
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;  
use Illuminate\Http\Request;  	

use App\Models\StudentRegisterOne;   
//use App\Models\StudentRegisterTwo; 
use App\Models\District;             
use App\Models\State;       
use DB;  

class StudentRegisterController extends Controller		  
{
	public function __construct()
    {
        // DB::statement("SET SQL_MODE=''");   
    }

    public function index()   
	{ 
		/* $modes=PaymentMode::all();   
		if(count($modes)>0) {   
			return response()->json(["status" => 'successed',"data" => $modes]);    	  	
		}
		else {
			return response()->json(["status" => "failed","message" => "Whoops! no record found","data" =>[]]);
		}    */
		
    }
    
	public function add(Request $request)					
	{
		$inputs=$request->all();		
		$insert_id=$request->insert_id;  
		$tab=$request->tab;  

		if($tab=='personal_detail')	
		{
			if($request->file('images')!=null)
			{				
				$image_rule = 'required|image|mimes:jpeg,png,jpg|max:2048';					
			}
			else
			{
				$image_rule = '';		  
			}				
			
			$rules=[            	 			 				
				'images.*' => $image_rule,		  	
				'student_name' => 'required',   
				'dob' => 'required',   	
				'gender' => 'required',   
				'nationality' => 'required',  
				'caste' => 'required',   
				'religion' => 'required',   	
				'mobile' => 'required',   
				'email' => 'required',
				'blood_group' => 'required',   
				'aadhar_no' => 'required',   	
				'permanent_address' => 'required',   		
				'state_id' => 'required', 
				'district_id' => 'required',   	
				'pincode' => 'required'			  	
			];   
			
			$fields = [  				
				'images.*' => 'Image',  
				'student_name' => 'Student Name',     	
				'dob' => 'Date of Birth',  
				'gender' => 'Gender', 
				'nationality' => 'Nationality',
				'caste' => 'Caste',   
				'religion' => 'Religion',   	
				'mobile' => 'Mobile No.',   
				'email' => 'Email',
				'blood_group' => 'Blood Group',   
				'aadhar_no' => 'Aadhar No.',   	
				'permanent_address' => 'Permanent Address',   		
				'state_id' => 'State', 
				'district_id' => 'District',   	
				'pincode' => 'Pincode'	       	
			]; 

			$messages = [
				'required' => 'The :attribute field is required.',    
			];  	
		}
		else if($tab=='parents_detail')	
		{
			$rules=[            	 			
				'father_name' => 'required',
				'mother_name' => 'required',  
				'f_occupation' => 'required',
				'f_income' => 'required', 
				'f_designation' => 'required',
				'f_mobile' => 'required',  
				'f_email' => 'required',		
				'residence_no' => 'required',    	
				'images.*' => 'required|image|mimes:jpeg,png,jpg|max:2048'			
			];   
			
			$messages = [
				'required' => 'The :attribute field is required.',  
			];  
			
			$fields = [  				
				'images.*' => 'Image',  
				'father_name' => 'Father Name',		
				'mother_name' => 'Mother Name',  
				'f_occupation' => "Father's Occupation",	
				'f_income' => "Father's Annual Income", 
				'f_designation' => 'Designation',
				'f_mobile' => 'Mobile No (For SMS)',  
				'f_email' => 'E-Mail ID',		
				'residence_no' => 'Phone(Office/Res.)',      	  	
			];  
		}
		else if($tab=='admission_detail')	  
		{
			$rules=[            	 			
				'images' => 'required',
				'images.*' => 'required|image|mimes:jpeg,png,jpg|max:2048'			
			];   
			
			$messages = [
				'required' => 'The :attribute field is required.',  
			];  
			
			$fields = [
				'images' => 'Student Photo Image'   
			];  
		}
		else if($tab=='subject_detail')	  
		{
			$rules=[            	 			
				'images' => 'required',
				'images.*' => 'required|image|mimes:jpeg,png,jpg|max:2048'			
			];   
			
			$messages = [
				'required' => 'The :attribute field is required.',  
			];  
			
			$fields = [
				'images' => 'Student Photo Image'   
			];  
		}
		else if($tab=='setting_detail')	  
		{
			$rules=[            	 			
				'images' => 'required',
				'images.*' => 'required|image|mimes:jpeg,png,jpg|max:2048'			
			];   
			
			$messages = [
				'required' => 'The :attribute field is required.',  
			];  
			
			$fields = [
				'images' => 'Student Photo Image'   
			];  
		}
		else
		{
			$rules=[              	 			
				'images' => 'required',
				'images.*' => 'required|image|mimes:jpeg,png,jpg|max:2048'			
			];   
			
			$messages = [
				'required' => 'The :attribute field is required.',  
			];  
			
			$fields = [
				'images' => 'Student Photo Image'   
			];  
		}  	
		
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
			
			$response_arr=array("status"=>"failed","success"=>false,"message"=>$message);	  
            
        }  		
		else
		{
			$image_arr=array();  
			if($tab=='personal_detail')	
			{
				if($request->has('images'))   
				{   
					foreach($request->file('images') as $image) {
						$filename = time().rand(3, 9). '.'.$image->getClientOriginalExtension();
						array_push($image_arr,$filename);   
						$image->move('uploads/', $filename);		
					}

					$message="Image uploaded successfully";   
					$response_arr=array("status"=>'successed',"success"=>true,"message"=>$message,"data" =>$image_arr);	
				} 
				else
				{
					$message="could not created!!";  
					$response_arr=array("status"=>'failed',"success"=>false,"message"=>$message,"data"=>[]);	
					
				}
				
				if($insert_id)
				{
					$update_arr=array(		
						'student_name'=>$request->student_name,		
						'dob'=>$request->dob,
						'gender'=>$request->gender,
						'nationality'=>$request->nationality,
						'caste'=>$request->caste,
						'religion'=>$request->religion,
						'mobile'=>$request->mobile,
						'email'=>$request->email,
						'blood_group'=>$request->blood_group,
						'aadhar_no'=>$request->aadhar_no,
						'permanent_address'=>$request->permanent_address,
						'state_id'=>$request->state_id,
						'district_id'=>$request->district_id,
						'pincode'=>$request->pincode, 
						'student_image'=>(count($image_arr)>0)?$image_arr[0]:''     
					);	
					
					$update=StudentRegisterOne::where('id',$insert_id)->update($update_arr); 		
		  
					if($update)		
					{	
						$message="Details updated successfully";   
						$response_arr=array("status"=>'successed',"success"=>true,"message"=>$message,"data" =>$insert_id);	
					}
					else
					{
						$message="could not saved!!";  
						$response_arr=array("status"=>'failed',"success"=>false,"message"=>$message,"data"=>[]);	
					}				
					//
				}
				else
				{ 				
					$insert_arr=array(
						'student_name'=>$request->student_name,		
						'dob'=>$request->dob,
						'gender'=>$request->gender,
						'nationality'=>$request->nationality,
						'caste'=>$request->caste,
						'religion'=>$request->religion,
						'mobile'=>$request->mobile,
						'email'=>$request->email,
						'blood_group'=>$request->blood_group,
						'aadhar_no'=>$request->aadhar_no,
						'permanent_address'=>$request->permanent_address,
						'state_id'=>$request->state_id,
						'district_id'=>$request->district_id,
						'pincode'=>$request->pincode, 
						'student_image'=>(count($image_arr)>0)?$image_arr[0]:''     
					);	
					
					$register = StudentRegisterOne::create($insert_arr);  
					if($register->id)		
					{	
						$message="Details saved successfully";   
						$response_arr=array("status"=>'successed',"success"=>true,"message"=>$message,"data" =>$register->id);	
					}
					else
					{
						$message="could not saved!!";  
						$response_arr=array("status"=>'failed',"success"=>false,"message"=>$message,"data"=>[]);	
					}
					
				}
				
				//
			}
			else if($tab=='parents_detail')	
			{
				
				if($request->has('images'))   
				{   
					foreach($request->file('images') as $image) {
						$filename = time().rand(3, 9). '.'.$image->getClientOriginalExtension();
						array_push($image_arr,$filename);   
						$image->move('uploads/', $filename);		
					}

					$message="Image uploaded successfully";   
					$response_arr=array("status"=>'successed',"success"=>true,"message"=>$message,"data" =>$image_arr);	
				} 
				else
				{
					$message="could not created!!";  
					$response_arr=array("status"=>'failed',"success"=>false,"message"=>$message,"data"=>[]);
				}			
				
				if($insert_id)
				{
					$update_arr=array(		
						'father_name'=>$request->father_name,	  	
						'mother_name'=>$request->mother_name,
						'f_occupation'=>$request->f_occupation,
						'f_income'=>$request->f_income,
						'f_designation'=>$request->f_designation,
						'f_mobile'=>$request->f_mobile,
						'f_email'=>$request->f_email,
						'residence_no'=>$request->residence_no,  
						'father_image'=>(count($image_arr)>0)?$image_arr[0]:'',     
						'mother_image'=>(count($image_arr)>0)?$image_arr[1]:'',    
					);	
					
					$update=StudentRegisterOne::where('id',$insert_id)->update($update_arr); 		
		  
					if($update)		
					{	
						$message="Details updated successfully";   
						$response_arr=array("status"=>'successed',"success"=>true,"message"=>$message,"data" =>$insert_id);	
					}
					else
					{
						$message="could not saved!!";  
						$response_arr=array("status"=>'failed',"success"=>false,"message"=>$message,"data"=>[]);	
					}				
					//
				}
				else
				{  					
			
					$insert_arr=array(
						'father_name'=>$request->father_name,		
						'mother_name'=>$request->mother_name,
						'f_occupation'=>$request->f_occupation,
						'f_income'=>$request->f_income,
						'f_designation'=>$request->f_designation,
						'f_mobile'=>$request->f_mobile,
						'f_email'=>$request->f_email,
						'residence_no'=>$request->residence_no,  
						'father_image'=>(count($image_arr)>0)?$image_arr[0]:'',     
						'mother_image'=>(count($image_arr)>0)?$image_arr[1]:'',  
					);	
					
					$register = StudentRegisterOne::create($insert_arr);  
					if($register->id)		
					{	
						$message="Details saved successfully";   
						$response_arr=array("status"=>'successed',"success"=>true,"message"=>$message,"data" =>$register->id);	
					}
					else
					{
						$message="could not saved!!";  
						$response_arr=array("status"=>'failed',"success"=>false,"message"=>$message,"data"=>[]);	
					}
					
				}
				
				//
			}
			else
			{


			}
			
			
      		
		}	 	

		return response()->json($response_arr);	 	  			
		
	}

   public function edit($id)		 
   {		 
		$info = PaymentMode::where('id',$id)->get();    		
		
		if(count($info)>0){  
			return response()->json(["status" =>'successed', "success" => true, "message" => "Payment mode record found successfully","data" =>$info]);   				
		}     
		else {  	
			return response()->json(["status" => "failed", "message" => "Whoops! failed to edit, payment mode does not exist!!","errors" =>'']); 	 		  			
		}  
					
   }	
	
   public function update(Request $request, $id)		
   {
	    $inputs=$request->all();   		
		
		$info = PaymentMode::where('id',$id)->get();       		
		$pay_title = $info[0]->pay_mode??'';  
		
		if($pay_title !=$request->pay_mode)		
		{				
			$pay_rule='required|unique:payment_modes|max:255';	
		}
		else
		{
			$pay_rule='required|min:3|max:255';		  	
		}	

		$rules=[            	 			
			'pay_mode' => $pay_rule,       				
			'pay_type' => 'required'  				
		];   
		
		$messages = [
			'required' => 'The :attribute field is required.',  
		];  
		
		$fields = [
			'pay_mode' => 'Payment Mode',  
			'pay_type' => 'Payment Type'  
		];    	
		
        // validate inputs 		
        $validator = Validator::make($inputs, $rules, $messages, $fields);   

        // if validation fails
        if($validator->fails()) {  
			
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
			$updateArr       =  array(  				
				"pay_mode"   =>      $request->pay_mode,  
				"pay_type"   =>     $request->pay_type
			);
		   
			$updated=PaymentMode::where('id',$id)->update($updateArr);	
			if($updated)
			{
				return response()->json(["status" =>'successed', "success" => true, "message" => "Payment mode record edited successfully","data" =>$updated]);  
			}
			else
			{				
				return response()->json(["status" =>'failed', "success" => false, "message" => "could not edited!!","data" =>[]]);  
			}
			
		}	
   }
   public function delete($id)
   {
		$info = PaymentMode::where('id',$id)->get();    		
		
		if(count($info)>0)
		{  		
			$del=PaymentMode::where('id',$id)->delete();
			if($del)	
			{
				return response()->json(["status" =>'successed', "success" => true, "message" => "Payment mode record deleted successfully","data" =>[]]);  
			}
			else    
			{
				return response()->json(["status" => "failed","success" => false,"message" => "Whoops! failed to delete,!!","errors" =>'']); 	
			} 	
			
		}
		else
		{
			return response()->json(["status" => "failed","success" => false,"message" => "Whoops! payment mode does not exist!!","errors" =>'']); 	  
		} 		 
		
    }
	public function getStates()  
	{ 
        $states = State::all();  							
		 
        if(count($states)>0) {  
            return response()->json(["status" => "successed", "success" => true, "data" => $states]);	  
        }
        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! no record found"]);
        } 
    }  
	public function getDistrict($id)  
	{ 		
        $districts = District::where('state_id',$id)->get();  									
		 
        if(count($districts)>0) {  
            return response()->json(["status" => "successed", "success" => true, "data" => $districts]);	  
        }
        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! no record found"]);
        }  
    }

	public function getSuggestion($search)    
	{ 		
		 $result=StudentRegisterOne::leftJoin('class_master as cs','student_registrations1.class_id','=','cs.classId')  
			 ->select('student_registrations1.*','cs.className')	  
			 ->where('cs.className','like','%'.$search.'%')  			
			 ->orWhere('student_registrations1.student_name','like','%'.$search.'%')    
			 ->orWhere('student_registrations1.father_name','like','%'.$search.'%')    
			 ->orWhere('student_registrations1.sibling_admission_no','like','%'.$search.'%')       
			 ->get();     			 												
		  
		 if(count($result)>0) {  
			 return response()->json(["status" => "successed", "success" => true, "data" => $result]);  	  
		 }
		 else {
			 return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! no result found"]);
		 }    
	}  	


	
	public function getSuggestion2($search)    
	{ 		
		 $result=StudentRegisterOne::leftJoin('class_master as cs','student_registrations1.class_id','=','cs.classId')  
			 ->select('student_registrations1.*','cs.className')	  
			 ->where('cs.className','like','%'.$search.'%')  			
			 ->orWhere('student_registrations1.student_name','like','%'.$search.'%')    
			 ->orWhere('student_registrations1.father_name','like','%'.$search.'%')    
			 ->orWhere('student_registrations1.admission_no','like','%'.$search.'%')       
			 ->get();     			 												
		  
		 if(count($result)>0) {  
			 return response()->json(["status" => "successed", "success" => true, "data" => $result]);  	  
		 }
		 else {
			 return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! no result found"]);
		 }    
	}  	
	
   
}