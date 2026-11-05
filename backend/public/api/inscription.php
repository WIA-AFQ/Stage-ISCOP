 <?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $pdo = new PDO('mysql:host=127.0.0.1;dbname=centre_formation', 'root', '');
        $data = json_decode(file_get_contents('php://input'), true);
        
        $sql = "INSERT INTO inscription (nomcomplet, email, telephone, choix_formation, message) 
                VALUES (?, ?, ?, ?, ?)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            $data['nomcomplet'],
            $data['email'], 
            $data['telephone'],
            $data['choix_formation'],
            $data['message']
        ]);
        
        echo json_encode([
            'success' => true, 
            'message' => '✅ Inscription réussie !'
        ]);
    } catch(Exception $e) {
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}
?>