<?php
 
namespace App\Models;  
use Illuminate\Database\Eloquent\Model;		
 
class FeeAmount extends Model		
{	
    protected $table = 'fee_amounts';           			
    protected $fillable = ['course_id','class_id','admission_fee','sport_fee','library_fee','fine_fee','cultural_fee','fest_fee','tution_fee','h_fee'];  	 		
}