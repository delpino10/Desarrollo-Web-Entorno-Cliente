<?php
// Ruta al archivo JSON
$filePath = 'ciudades.json';

// Verificar si el archivo JSON existe
if (file_exists($filePath)) {
    // Obtener el contenido del archivo JSON
    $jsonData = file_get_contents($filePath);

    // Convertir el contenido JSON en un array de PHP
    $citiesData = json_decode($jsonData, true);
} else {
    // Si el archivo no existe, devolver un array vacío
    $citiesData = [];
}

// Obtener el parámetro 'q' de la URL (la ciudad que el usuario busca)
$query = isset($_GET['q']) ? $_GET['q'] : '';

// Filtrar las ciudades que comienzan con el texto ingresado
$filteredCities = array_filter($citiesData, function($cityData) use ($query) {
    return stripos($cityData['city'], $query) === 0; // Coincide al principio
});

// Devolver las ciudades y monumentos como JSON
echo json_encode(array_values($filteredCities));
?>
