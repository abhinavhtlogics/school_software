<?php
 
namespace App\Http\Controllers;  
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;  
use Illuminate\Http\Request;

use App\Models\StationMaster;		
use App\Models\RouteMaster;		  
use DB;				
 
class StationController extends Controller
{  
  
	public function index()  
	{
		$stations = StationMaster::all();  			
		
		if(!empty($stations)) {  
			return response()->json(["status" => 'successed', "success" => true, "count" => count($stations), "data" => $stations]);		
		}
		else {
			return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! no record found","data" =>""]);
		}   
		
	} 	

    public function create(Request $request)	
	{
		$validator = Validator::make($request->all(), [
            'title' => 'required|unique:station_master,stationName|max:255',	 			
            'distance' => 'required',	
			'bus_fare' => 'required'  
        ]);
		
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
			$insert_arr = array(
				'stationName'=>$request->title, 
				'distance'=>$request->distance,
				'busFare'=>$request->bus_fare     
			);
			
			$station = StationMaster::create($insert_arr);				
			
			if($station->id)		
			{	
				$message="station created successfully"; 
				$response_arr=array("status"=>'successed',"success"=>true,"message"=>$message,"errors"=>[],"data" =>$station);	
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
		$stationInfo = StationMaster::where('stationId',$id)->get();   
		$recordExist = $stationInfo[0]->stationId ??0;	
		
		if(!$recordExist){
			return response()->json(["status" => "failed", "message" => "Whoops! failed to edit, station does not exist!!","errors" =>'']); 					
		}     
		else {  	 
			return response()->json(["status" =>'successed', "success" => true, "message" => "station record found successfully","data" =>$stationInfo]);   			
		}  
					
   }

   public function update(Request $request, $id)		
   {
	    $inputs=$request->all();   		
		
		$Info = StationMaster::where('stationId',$id)->get();    		
		$station_title = $Info[0]->stationName??'';   		
		
		if($station_title !=$request->title)		
		{				
			$title_rule='required|unique:station_master,stationName|min:3|max:255';	
		}
		else
		{
			$title_rule='required|min:3|max:255';			
		}			
		
        // validate inputs 		
        $validator = Validator::make($request->all(), [
            'title' => $title_rule,	 			
            'distance' => 'required|gt:0',	
			'busfare' => 'required|gt:0'  
        ]);

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
			$updateArr             =       array(  				
				"stationName"           =>      $request->title,  
				"distance"               =>     $request->distance,             
				"busFare"               =>     $request->busfare    				
			);
		   
			$updated=StationMaster::where('stationId',$id)->update($updateArr);	
			if($updated)
			{
				return response()->json(["status" =>'successed', "success" => true, "message" => "station record edited successfully","data" =>[]]);  
			}
			else
			{				
				return response()->json(["status" =>'failed', "success" => false, "message" => "could not edited!!","data" =>[]]);  
			}
			
		}	
   }
   public function delete($id)
    {
		$info = StationMaster::where('stationId',$id)->get();  
		
        if(!empty($info))   
		{
			$routes = RouteMaster::select(DB::raw('count(*) as record_count'))	
             ->whereRaw("FIND_IN_SET($id,stationList)")  
             ->get();
			 
			if($routes[0]->record_count>0)
			{
				return response()->json(["status" => "failed","success" => false,"message" => "Whoops! failed to delete, station having routes!!","errors" =>'']);   
			}
			else
			{
				StationMaster::where('stationId',$id)->delete();			  
				return response()->json(["status" =>'successed', "success" => true, "message" => "station record deleted successfully","data" => '']);   
			}
			
		}
		else
		{
			return response()->json(["status" => "failed","success" => false,"message" => "Whoops! failed to delete,!!","errors" =>'']); 	
		} 		 
		
    }

}