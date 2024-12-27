document.getElementById('showMessageBtn').addEventListener('click', function() {
    // Récupérer le nom de l'utilisateur
    const userName = document.getElementById('nameInput').value.trim();

    // Vérifier si l'utilisateur a saisi un nom
    if (userName !== "") {
        // Mettre à jour le message avec le nom de l'utilisateur
        document.getElementById('userName').textContent = userName;
        document.getElementById('userNameMessage').textContent = userName;
        
        // Afficher le message spécial
        document.getElementById('specialMessage').classList.remove('hidden');
    } else {
        // Si le nom n'est pas saisi, afficher un message d'erreur
        alert("Veuillez entrer votre prénom.");
    }
});