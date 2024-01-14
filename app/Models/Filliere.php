<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Etudiant;

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
}