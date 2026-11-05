<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$data = json_decode(file_get_contents('php://input'), true);

if (!$data || !isset($data['email']) || !isset($data['password'])) {
    echo json_encode(['success' => false, 'message' => 'Champs manquants']);
    exit;
}
               
if ($data['email'] === 'admin@formation.com' && $data['password'] === 'admin123') {
    echo json_encode([
        'success' => true,
        'token' => 'admin_ok_2024'
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => '❌ Mauvais identifiants'
    ]);
}