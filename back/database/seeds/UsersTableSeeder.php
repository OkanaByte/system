<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->truncate();
				$users = [
						[
						'name' => 'Jose',
						'email' => 'nanographic.bermudez@gmail.com',
						'password' => bcrypt('secret'),
						'created_at' => date('Y-m-d H:m:s'),
            'updated_at' => date('Y-m-d H:m:s')
					]
				];

				DB::table('users')->insert($users);
    }
}
