const openButtons = document.querySelectorAll('.open-modal');

openButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

        modal.showModal();
    });
});

const closeButtons = document.querySelectorAll('.close-modal');

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

        modal.close();
    });
});


const addCouponButton = document.getElementById('addCouponButton');
    const couponDialog = document.getElementById('couponDialog');
    const closeDialogButton = document.getElementById('closeDialog');
    const couponForm = document.getElementById('couponForm');
    const discountDiv = document.getElementById('discountDiv');
    const discountValue = document.getElementById('discountValue');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');

    // Abrir o diálogo ao clicar no botão "Adicionar Cupom"
    addCouponButton.addEventListener('click', () => {
        couponDialog.showModal();
    });

    // Fechar o diálogo ao clicar no botão "Cancelar"
    closeDialogButton.addEventListener('click', () => {
        couponDialog.close();
    });

    // Lidar com a aplicação do cupom
    couponForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita o envio do formulário

        const couponCode = document.getElementById('couponCode').value;
        let discountAmount = 0;

        // Exemplo de lógica para desconto (você pode adicionar mais lógica aqui)
        if (couponCode === 'DESCONTO10') {
            discountAmount = 10;
        } else if (couponCode === 'DESCONTO20') {
            discountAmount = 20;
        } else {
            alert("Cupom inválido");
            return;
        }

        // Atualizar o valor do desconto e total
        const subtotal = parseFloat(subtotalElement.textContent.replace('R$', '').trim());
        discountDiv.style.display = 'flex';
        discountValue.textContent = `R$ ${discountAmount.toFixed(2)}`;

        const total = subtotal - discountAmount;
        totalElement.textContent = `R$ ${total.toFixed(2)}`;

        // Fechar o diálogo
        couponDialog.close();
    });
