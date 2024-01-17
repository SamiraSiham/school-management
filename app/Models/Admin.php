<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Admin extends Model
{
    use HasFactory;
    protected $table = 'admin';
    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $guarded = [];
    
    // public function role(): Attribute
    // {
    //     return new Attribute(
    //         get: fn ($value) => ["admin","etudiant","professeur","candidat"][$value],
    //         set: fn ($value) => $value,
    //     );
    // }
}
