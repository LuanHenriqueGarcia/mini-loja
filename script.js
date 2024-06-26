const items = [
  {
    id: 0,
    nome: "Poltrona AUSTIN",
    descricao:
      "A Poltrona Austin conta com um visual deslumbrante que chama a atenção de qualquer pessoa. Perfeito para qualquer tipo de ambiente, promove requinte e sofisticação para o produto.",
    fornecedor: "Fabone",
    preco: "1750.00",
    img: "img/poltrona.jpg",
    quantidade: 0,
  },
  {
    id: 1,
    nome: "Sofá Pluma Decor Guarujá",
    descricao:
      "O Sofá Pluma Decor Guarujá é a escolha perfeita para quem busca conforto e elegância ,Design moderno Estrutura 100% em eucalipto e atemporal elegância e sustentabilidade.",
    fornecedor: "Fabone",
    preco: "4925.00",
    img: "img/sofa.jpg",
    quantidade: 0,
  },
  {
    id: 2,
    nome: "Poltrona ITÁLIA",
    descricao:
      "A Poltrona Itália conta com acabamento premium revestido em tecidos do veludo ao linho nobre, com duas opções de modelos, garantindo a máxima elegância e sofisticação. Conforto e qualidade.",
    fornecedor: "Fabone",
    preco: "3780.00",
    img: "img/sofa2.jpg",
    quantidade: 0,
  },
];

function InicializarLoja() {
  var containerProdutos = document.getElementById("produtos");
  items.map((val) => {
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
        <p> valor à vista: R$ <span id="preco">` +
      val.preco +
      `</span></p>
        <a key="` +
      val.id +
      `" href="#" class="add-to-cart">Adicionar ao carrinho!<a/>
      </div>
    `;
  });

  var links = document.getElementsByClassName("add-to-cart");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (event) {
      event.preventDefault();
      let key = this.getAttribute("key");
      items[key].quantidade++;
      atualizarCarrinho();
    });
  }
}

function atualizarCarrinho() {
  var containerCarrinho = document.getElementById("carrinho");
  var total = 0;
  containerCarrinho.innerHTML = "";
  items.map((val) => {
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
      total += val.quantidade * parseFloat(val.preco);
    }
  });
  containerCarrinho.innerHTML +=
    `
    <div class="total-checkout">
      <p>Total: R$ ` +
    total.toFixed(2) +
    `</p>
    </div>
  `;
}

InicializarLoja();
