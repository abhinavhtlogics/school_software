<?php
 
namespace App\Models;  
use Illuminate\Database\Eloquent\Model;		
 
class Qualification extends Model		
{	
    protected $table = 'qualification_master';           			
    protected $fillable = ['id','qualification'];  	 		
}