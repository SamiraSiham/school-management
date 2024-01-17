<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Filliere;
use App\Models\Teacher;

class Etudiant extends Model
{
    use HasFactory;
    protected $table = 'etudiant';
    protected $primaryKey = 'cin';
    protected $keyType = 'string';
    public $incrementing = false;
    protected $guarded =[];
    /**
     * Get the filliere that owns the Etudiant
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function filliere(): BelongsTo
    {
        return $this->belongsTo(Filliere::class, 'filliere_id','cin');
    }
    
    
    public function teachers(): HasMany
    {
        return $this->hasMany(Teacher::class, 'teacher_etudiant', 'teacher_id', 'etudiant_id');
    }
}
