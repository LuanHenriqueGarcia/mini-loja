const items = [
  {
    id: 0,
    nome: "Poltrona AUSTIN",
    descricao:
      "A Poltrona Austin conta com um visual deslumbrante que chama a atenção de qualquer pessoa. Perfeito para qualquer tipo de ambiente, promove requinte e sofisticação para o produto.",
      fornecedor: 'fabone',
    precoAvista: "1750.00",
    precoPrazo: "1837.50",
    img: "img/poltrona.jpg",
    quantidade: 0,
  },
  {
    id: 1,
    nome: "Sofá Pluma Decor Guarujá",
    descricao:
      "O Sofá Pluma Decor Guarujá é a escolha perfeita para quem busca conforto e elegância ,Design moderno Estrutura 100% em eucalipto e atemporal elegância e sustentabilidade.",
    fornecedor: 'fabone',
    precoAvista: "4925.00",
    precoPrazo: "5171.25",
    img: "img/sofa.jpg",
    quantidade: 0,
  },
  {
    id: 2,
    nome: "Poltrona ITÁLIA",
    descricao:
      "A Poltrona Itália conta com acabamento premium revestido em tecidos do veludo ao linho nobre, com duas opções de modelos, garantindo a máxima elegância e sofisticação. Conforto e qualidade.",
      fornecedor: 'fabone',
    precoAvista: "3780.00",
    precoPrazo: "3969.00",
    img: "img/sofa2.jpg",
    quantidade: 0,
  },
];

function InicializarLoja() {
  document.addEventListener("DOMContentLoaded", function() {
    renderizarProdutos();
  });

  function renderizarProdutos() {
    var containerProdutos = document.getElementById("produtos");
    items.map((val) => {
      var precoParcela = (parseFloat(val.precoPrazo) / 9).toFixed(2);

      containerProdutos.innerHTML +=
        `
          <div class="produto-single">
            <img src="` +
        val.img +
        `" />
            <p>` +
        val.nome +
        `</p>
            <p>` +
        val.descricao +
        `</p>
          <p> fornecedor: ` +
        val.fornecedor +
        `</p>
            <p>Preço à vista: R$ <span id="preco">` +
        val.precoAvista +
        `</span></p>
            <p id"preco">Preço a prazo: R$ <span id="preco">` +
        val.precoPrazo +
        `</span></p>
            <p id"preco">Parcelas (9x): R$ <span>` +
        precoParcela +
        `</span></p>
            <button class="add-to-cart" data-id="` + val.id + `" data-tipo="avista">Adicionar ao carrinho (à vista)</button>
            <button class="add-to-cart" data-id="` + val.id + `" data-tipo="prazo">Adicionar ao carrinho (a prazo)</button>
          </div>
        `;
    });

    var buttons = document.getElementsByClassName("add-to-cart");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        var id = this.getAttribute("data-id");
        var tipoPagamento = this.getAttribute("data-tipo");
        adicionarAoCarrinho(id, tipoPagamento);
      });
    }
  }
}

function adicionarAoCarrinho(id, tipoPagamento) {
  items[id].quantidade++;
  atualizarCarrinho();
}

function atualizarCarrinho() {
  var containerCarrinho = document.getElementById("carrinho");
  var total = 0;
  containerCarrinho.innerHTML = "";
  items.forEach((val) => {
    if (val.quantidade > 0) {
      containerCarrinho.innerHTML +=
        `
          <div class="info-single-checkout">
            <p style="float: left;">Produto: ` +
        val.nome +
        `</p>
            <p style="float: right;">Quantidade: ` +
        val.quantidade +
        ` </p>
            <div style="clear:both"></div>
          </div>
        `;
      total += val.quantidade * parseFloat(val.precoAvista);
    }
  });

  containerCarrinho.innerHTML +=
    `
      <div class="total-checkout">
        <p class="center-pag">Total: R$ ` +
    total.toFixed(2) +
    `</p>
        <p class="center-pag"><button id="btnPagamento" class="btnPagamento">Prosseguir para o Pagamento</button></p>
      </div>
    `;

  document.getElementById("btnPagamento").addEventListener("click", function () {
    window.location.href = "/pagamento";
  });
}

InicializarLoja();
