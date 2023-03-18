<?php
 
namespace App\Models;  
use Illuminate\Database\Eloquent\Model;		
 
class Designation extends Model		
{	
    protected $table = 'designation_master';           			
    protected $fillable = ['id','designation_name','department_id'];  	 		
}