<?php
require 'vendor/autoload.php';

MercadoPago\SDK::setAccessToken("APP_USR-4320307551937761-021615-37632bf659ab9e4f0c0d848cc2f34b4d-520189221");

// Verificar si la petición es POST y si hay datos
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (!isset($data["total"])) {
        echo json_encode(["error" => "No se recibió el total del carrito"]);
        exit;
    }

    // Crear preferencia en Mercado Pago
    $preference = new MercadoPago\Preference();
    $item = new MercadoPago\Item();
    $item->title = "Compra en la tienda";
    $item->quantity = 1;
    $item->currency_id = "COP";
    $item->unit_price = (float)$data["total"]; // Asegurar que es número

    $preference->items = array($item);
    $preference->save();

    echo json_encode(["id" => $preference->id, "init_point" => $preference->init_point]);
} else {
    // Si se accede por GET, solo mostrar mensaje informativo
    echo json_encode(["message" => "Esta API solo acepta peticiones POST"]);
}
?>
