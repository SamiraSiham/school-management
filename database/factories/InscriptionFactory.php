<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Inscription;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Faker\Factory as Faker;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Inscription>
 */
class InscriptionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Inscription::class;
    public function definition()
    {
        $faker = Faker::create();
        return [
            'cin' => Str::random(6),
            'cne' => Str::random(10),
            'nom' => $faker->lastName,
            'prenom' => $faker->firstName,
            'date_naiss' => $faker->date,
            'phone_number' => $faker->phoneNumber,
            'email' => $faker->email(),
            'password' => Hash::make(Str::random(10)),
            'diplome_1' => $this->faker->image(
                dir: storage_path('app'),
                width:250,
                height:250
            ),
            'diplome_2' => $this->faker->image(
                dir: storage_path('app'),
                width:250,
                height:250
            ),
            'diplome_3' => $this->faker->image(
                dir: storage_path('app'),
                width:250,
                height:250
            ),
            'moy_gen_dip1' => rand(10,20),
            'moy_gen_dip2' => rand(10,20),
            'moy_gen_dip3' => rand(10,20),
            'choix_1' => Str::random(3),
            'choix_2' => Str::random(3),
            'choix_3' => Str::random(3),
            'role_id' => 4,
        ];
    }
}
