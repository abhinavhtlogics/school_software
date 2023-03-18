<?php
 
namespace App\Models;  
use Illuminate\Database\Eloquent\Model;		
 
class Department extends Model		
{	
    protected $table = 'department_master';           			
    protected $fillable = ['id','department_name'];  	 		
}