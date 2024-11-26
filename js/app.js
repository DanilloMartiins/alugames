function alterarStatus(id) {
    // Seleciona o botão e o container da imagem com base no ID do jogo
    let botao = document.querySelector(`#game-${id} .dashboard__item__button`);
    let imageContainer = document.querySelector(`#game-${id} .dashboard__item__img`);

    // Verifica se os elementos foram encontrados
    if (botao && imageContainer) {
        // Alterna o texto do botão e as classes CSS
        if (botao.textContent.trim() === "Alugar") {
            botao.textContent = "Devolver";
            botao.classList.add('dashboard__item__button--return');
            imageContainer.classList.add('dashboard__item__img--rented');
        } else if (botao.textContent.trim() === "Devolver") {
            botao.textContent = "Alugar";
            botao.classList.remove('dashboard__item__button--return');
            imageContainer.classList.remove('dashboard__item__img--rented');
        }
    }
}
