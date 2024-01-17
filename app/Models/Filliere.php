<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Etudiant;
use App\Models\Cours;
use App\Models\Teacher;

class Filliere extends Model
{
    use HasFactory;
    protected $table = 'filliere';
    protected $guarded = [];
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $keyType = 'string';
    /**
     * Get all of the etudiants for the Filliere
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function etudiants(): HasMany
    {
        return $this->hasMany(Etudiant::class,'cin','id');
    }
    public function cours(){
        return $this->belongsToMany(
            Cours::class, 'cours_teacher_filliere'
        );
    }
    public function teachers(){
        return $this->belongsToMany(
            Teacher::class, 'cours_teacher_filliere'
        );
    }
}