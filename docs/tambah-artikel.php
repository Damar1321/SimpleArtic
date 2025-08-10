<?php
$listFile = "list.json";
$artikelFolder = "artikel/";

// Kalau form dikirim
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $judul = trim($_POST['judul']);
    $isi = trim($_POST['isi']);

    if ($judul && $isi) {
        // Ubah judul jadi nama file (spasi dan tanda kurung jadi '-')
        $namaFile = strtolower($judul);
        $namaFile = preg_replace('/[()]/', '', $namaFile);
        $namaFile = preg_replace('/\s+/', '-', $namaFile) . ".html";

        // Buat file HTML artikel
        $kontenHTML = "<!DOCTYPE html>
<html lang='id'>
<head>
<meta charset='UTF-8'>
<title>" . htmlspecialchars($judul) . "</title>
</head>
<body>
<h1>" . htmlspecialchars($judul) . "</h1>
<p>" . nl2br(htmlspecialchars($isi)) . "</p>
<a href='../index.html'>&larr; Kembali ke Daftar Artikel</a>
</body>
</html>";

        file_put_contents($artikelFolder . $namaFile, $kontenHTML);

        // Update list.json
        $list = json_decode(file_get_contents($listFile), true);
        array_unshift($list, $namaFile);
        file_put_contents($listFile, json_encode($list, JSON_PRETTY_PRINT));

        echo "<p style='color:green;'>Artikel berhasil ditambahkan!</p>";
    } else {
        echo "<p style='color:red;'>Judul dan isi artikel wajib diisi.</p>";
    }
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Tambah Artikel</title>
<style>
body { font-family: Arial; background: #f5f5f5; padding: 20px; }
form { background: white; padding: 20px; border-radius: 8px; max-width: 500px; margin: auto; }
input, textarea { width: 100%; margin-bottom: 10px; padding: 10px; }
button { padding: 10px 15px; background: #222; color: white; border: none; cursor: pointer; }
button:hover { background: #444; }
</style>
</head>
<body>

<h2>Tambah Artikel</h2>
<form method="POST">
    <label>Judul Artikel:</label>
    <input type="text" name="judul" required>

    <label>Isi Artikel:</label>
    <textarea name="isi" rows="8" required></textarea>

    <button type="submit">Simpan Artikel</button>
</form>

</body>
</html>
