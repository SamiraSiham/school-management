<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Teacher;
use App\Models\Filliere;

class Cours extends Model
{
    use HasFactory;
    protected $table = 'cours';
    // protected $fillable = ['id','cours','masse_horaire','support'];
    protected $guarded = [];
    protected $primaryKey = 'id';
    protected $keyType = 'string';

    public function fillieres(){
        return $this->belongsToMany(
            Filliere::class, 'cours_teacher_filliere'
        );
    }
    public function teachers(){
        return $this->belongsToMany(
            Teacher::class, 'cours_teacher_filliere'
        );
    }
}