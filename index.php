<?php
$page = isset($_GET['page']) ? $_GET['page'] : 'acceuil';
?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Oméga Facility</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Fond avec ParticleJS -->
  <div id="particles-js"></div>

  <!-- Navigation -->
  <nav>
    <ul>
      <li><a href="index.php?page=acceuil">Acceuil</a></li>
      <li><a href="index.php?page=reglements">Réglements</a></li>
      <li><a href="index.php?page=protocoles">Protocoles</a></li>
      <li><a href="index.php?page=commandes">Commandes</a></li>
      <li><a href="index.php?page=devlogs">Devlogs</a></li>
      <li><a href="https://discord.gg" target="_blank">Discord</a></li>
    </ul>
  </nav>

  <!-- Zone de contenu -->
  <div id="content">
    <?php
      switch($page){
        case 'acceuil':
          include 'pages/acceuil.php';
          break;
        case 'reglements':
          include 'pages/reglements.php';
          break;
        case 'protocoles':
          include 'pages/protocoles.php';
          break;
        case 'commandes':
          include 'pages/commandes.php';
          break;
        case 'devlogs':
          include 'pages/devlogs.php';
          break;
        default:
          echo "<p>Page non trouvée</p>";
      }
    ?>
  </div>

  <!-- Inclusion des scripts -->
  <!-- Si vous ne souhaitez pas héberger particles.js localement, utilisez un CDN -->
  <script src="particles.js"></script>
  <script src="app.js"></script>
</body>
</html>
