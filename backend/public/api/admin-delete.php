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

if (!isset($data['token']) || $data['token'] !== 'admin_ok_2024') {
    echo json_encode(['success' => false]);
    exit;
}

if (!isset($data['id'])) {
    echo json_encode(['success' => false]);
    exit;
}

try {
    $pdo = new PDO('mysql:host=127.0.0.1;dbname=centre_formation', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->prepare("DELETE FROM inscription WHERE id = ?");
    $stmt->execute([$data['id']]);

    echo json_encode(['success' => true]);

} catch (PDOException $e) {
    echo json_encode(['success' => false]);
}