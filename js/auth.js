import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const form = document.getElementById("cadastroForm");

if (form) {

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        try {

            const credencial =
                await createUserWithEmailAndPassword(auth, email, senha);

            await updateProfile(credencial.user, {
                displayName: nome
            });

            alert("Conta criada com sucesso!");

            window.location.href = "login.html";

        } catch (erro) {

            alert(erro.message);

        }

    });

}

// LOGIN

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        try {

            await signInWithEmailAndPassword(auth, email, senha);

            alert("Login realizado com sucesso!");

            window.location.href = "index.html";

        } catch (erro) {

            alert("E-mail ou senha incorretos.");

            console.error(erro);

        }

    });

}

