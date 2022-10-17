function id(el) {
    return document.getElementById(el);
}
window.onload = function () {
    id('mais-1').onclick = function () {
        id('pizzas').value = parseInt(id('pizzas').value) + 1;

        id('total').value = 20 * id('pizzas').value;
    }
    id('menos-1').onclick = function () {
        if (id('pizzas').value > 0)
            id('pizzas').value = parseInt(id('pizzas').value) - 1;

        id('total').value = 20 * id('format').value;
    }
    id('mais-2').onclick = function () {
        id('pizzas').value = parseInt(id('pizzas').value) + 1;

        id('total').value = 20 * id('pizzas').value;
    }
    id('menos-2').onclick = function () {
        if (id('pizzas').value > 0)
            id('pizzas').value = parseInt(id('pizzas').value) - 1;

        id('total').value = 20 * id('pizzas').value;
    }
    id('mais-3').onclick = function () {
        id('pizzas').value = parseInt(id('pizzas').value) + 1;

        id('total').value = 20 * id('pizzas').value;
    }
    id('menos-3').onclick = function () {
        if (id('pizzas').value > 0)
            id('pizzas').value = parseInt(id('pizzas').value) - 1;
        id('total').value = 20 * id('pizzas').value;
    }
}

jQuery(function($){
$("#num-cartao").mask("99/99/9999");
$("#campoTelefone").mask("(999) 999-9999");
$("#campoSenha").mask("***-****");
});


