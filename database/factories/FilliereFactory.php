<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Filliere;
use Illuminate\Support\Str;
use Faker\Factory as Faker;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Filliere>
 */
class FilliereFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Filliere::class;
    public function definition()
    {
        $faker = Faker::create();
        return [
            'id' => "Filliere_".Str::random(3),
            'intitule'=>Str::random(20)
        ];
    }
}
