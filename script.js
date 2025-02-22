function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });
    document.getElementById(tabId).style.display = 'block';
}

// Affiche par défaut l'onglet Entraînement au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    showTab('entrainement');
});
