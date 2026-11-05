<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class InscriptionController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nomcomplet' => 'required|string|max:255',
            'email' => 'required|email|unique:inscriptions',
            'telephone' => 'required|string|max:20',
            'choix_formation' => 'required|string',
            'message' => 'nullable|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        DB::table('inscriptions')->insert([
            'nomcomplet' => $request->nomcomplet,
            'telephone' => $request->telephone,
            'email' => $request->email,
            'choix_formation' => $request->choix_formation,
            'message' => $request->message,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        return response()->json([
            'success' => true,
            'message' => 'Inscription ajoutée avec succès !'
        ]);
    }
}