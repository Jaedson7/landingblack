const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let nome = document.getElementById('nome').value;
	let email = document.getElementById('email').value;
	let telefone = document.getElementById('telefone').value;
	let data = {
		nome,
		email,
		telefone
	}
	console.log(data);
	
	let convertData = JSON.stringify(data);

	localStorage.setItem('lead', convertData);

alert("Cadastro concluido com sucesso");
window.location= document.URL
})

window.onload = function(){
	document.querySelector(".menu-opened").addEventListener("click", function(){
		if(document.querySelector(".menu nav").style.display == 'flex') { 
			document.querySelector(".menu nav").style.display = 'none';
		} else {
			document.querySelector(".menu nav ").style.display = 'flex';
		}
	});
};