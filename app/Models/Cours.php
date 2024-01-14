<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cours extends Model
{
    use HasFactory;
    protected $table = 'cours';
    // protected $fillable = ['id','cours','masse_horaire','support'];
    protected $guarded = [];
    protected $primaryKey = 'id';
    protected $keyType = 'string';
}