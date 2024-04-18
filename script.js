document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('login-btn');
    const loginScreen = document.querySelector('.login-screen');
    const submitLoginBtn = document.getElementById('submit-login');
    const registrationScreen = document.querySelector('.registration-screen');
    const addParticipantBtn = document.getElementById('add-participant');
    const registerTeamBtn = document.getElementById('register-team');

    loginBtn.addEventListener('click', function() {
        loginBtn.parentElement.classList.add('hidden');
        loginScreen.classList.remove('hidden');
    });

    submitLoginBtn.addEventListener('click', function() {
        // Lógica para verificar el inicio de sesión
        alert('Inicio de sesión exitoso');
        loginScreen.classList.add('hidden');
        registrationScreen.classList.remove('hidden');
    });

    addParticipantBtn.addEventListener('click', function() {
        // Lógica para agregar participante al equipo
        alert('Participante agregado');
        document.getElementById('participant-name').value = '';
    });

    registerTeamBtn.addEventListener('click', function() {
        // Lógica para registrar el equipo
        alert('Equipo registrado exitosamente');
        document.getElementById('team-name').value = '';
        registrationScreen.classList.add('hidden');
    });
});
