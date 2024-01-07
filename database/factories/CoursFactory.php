<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Cours;
use Illuminate\Support\Str;
use Faker\Factory as Faker;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Cours>
 */
class CoursFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Cours::class;
    public function definition()
    {
        $faker = Faker::create();
        return [
            'id' => Str::random(3),
            'nom_cours'=>$faker->firstName,
            'masse_horaire'=>rand(30,120),
            'support'=>$this->faker->image(
                dir: storage_path('app'),
                width : 250,
                height: 250
            )
        ];
    }
}
