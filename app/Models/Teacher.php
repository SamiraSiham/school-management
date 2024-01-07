<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    use HasFactory;
    protected $table = 'teacher';
    protected $primaryKey = 'cin';
    public $incrementing = false;
    protected $guarded = [];
    // protected $fillable = [
    //     'cin' , 'last_name' , 'first_name' , 'phone_number' , 
    //     'date_inscription' , 'salaire' , 'email' , 'mot_de_passe'
    // ];
}
