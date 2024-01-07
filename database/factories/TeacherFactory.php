<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Teacher;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Faker\Factory as Faker;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Teacher>
 */
class TeacherFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Teacher::class;
    public function definition()
    {
        $faker = Faker::create();
        return [
            'cin' => Str::random(6),
            'last_name' => Str::random(10),
            'first_name' => Str::random(10),
            'phone_number' => $faker->phoneNumber,
            'email' => $faker->email(),
            'salaire' => rand(1000,7000),
            'date_inscription' => $faker->date,
            'mot_de_passe' => Hash::make(Str::random(10))
        ];
    }
}
