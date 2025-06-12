document.addEventListener('DOMContentLoaded', function() {
    // Botão "Me Notifique!"
    const notifyMeBtn = document.getElementById('notifyMeBtn');

    if (notifyMeBtn) {
        notifyMeBtn.addEventListener('click', function() {
            alert('Agradecemos seu interesse! Você será notificado(a) quando os ingressos estiverem disponíveis.');
            // Aqui você poderia adicionar uma integração com um serviço de email ou formulário.
        });
    }

    // Rolagem suave para os links da navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});