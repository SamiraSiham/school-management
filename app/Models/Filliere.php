<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Filliere extends Model
{
    use HasFactory;
    protected $table = 'filliere';
    // protected $fillable = ['id','intitule'];
    protected $guarded = [];
    protected $primaryKey = 'id';
    protected $incrementing = false;
}
