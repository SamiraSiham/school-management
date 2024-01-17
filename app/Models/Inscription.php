<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inscription extends Model
{
    use HasFactory;
    protected $table = 'inscription';
    protected $primaryKey = 'cin';
    protected $keyType = 'string';
    public $incrementing = false;
    protected $guarded =[];
}
