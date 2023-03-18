<?php
 
namespace App\Models;  
use Illuminate\Database\Eloquent\Model;
 
class StudentRegisterOne extends Model  		
{
    protected $table = 'student_registrations1';   			        			
    protected $fillable = ['student_name','dob','gender','nationality','caste','religion','mobile','email','blood_group','aadhar_no','permanent_address','state_id','district_id','pincode','student_image'];  			
}