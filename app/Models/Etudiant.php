<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Filliere;

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
}
