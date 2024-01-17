<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Cours;
use App\Models\Etudiant;
use App\Models\Filliere;

class Teacher extends Model
{
    use HasFactory;
    protected $table = 'teacher';
    protected $primaryKey = 'cin';
    protected $keyType = 'string';
    public $incrementing = false;
    protected $guarded = [];
    // protected $fillable = [
    //     'cin' , 'last_name' , 'first_name' , 'phone_number' , 
    //     'date_inscription' , 'salaire' , 'email' , 'mot_de_passe'
    // ];

    public function cours(){
        return $this->belongsToMany(
            Cours::class, 'cours_teacher_filliere'
        );
    }
    public function fillieres(){
        return $this->belongsToMany(
            Filliere::class, 'cours_teacher_filliere'
        );
    }
    
    
    public function etudiants(): HasMany
    {
        return $this->hasMany(Etudiant::class, 'teacher_etudiant', 'teacher_id', 'etudiant_id');
    }
    // 'role_user', 'user_id', 'role_id'
}