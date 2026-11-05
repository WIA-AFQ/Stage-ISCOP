<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InscriptionController;
Route::post('/inscription', [InscriptionController::class, 'store']);
Route::options('/inscription', function () {
    return response('', 200)
        ->header('Access-Control-Allow-Origin', '*')
        ->header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
});