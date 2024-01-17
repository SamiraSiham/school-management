<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert([
            [
                'id' => 1,
                'role_name' => 'admin'
            ],
            [
                'id' => 2,
                'role_name' => 'etudiant'
            ],
            [
                'id' => 3,
                'role_name' => 'professeur'
            ],
            [
                'id' => 4,
                'role_name' => 'candidat'
            ]
        ],
        );
    }
}
