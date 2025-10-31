/* app.js - lógica del carrito y generación de mensaje para WhatsApp (versión actualizada) */
const MENU = [
  {
    "id": 1,
    "name": "Hamburguesa Sencilla",
    "ingredients": "Jamón, queso, huevo frito, tocineta, croqueta de carne y vegetales",
    "price": 12000
  },
  {
    "id": 2,
    "name": "Hamburguesa Mixta",
    "ingredients": "Jamón, queso, huevo frito, tocineta, croqueta de carne, pollo desmechado o filete de pechuga, vegetales",
    "price": 15000
  },
  {
    "id": 3,
    "name": "Perro Sencillo",
    "ingredients": "Salchicha, cebolla, papita ripio, queso, jamón",
    "price": 5000
  },
  {
    "id": 4,
    "name": "Perro de Pollo",
    "ingredients": "Salchicha, cebolla, papita ripio, queso, jamón, pollo desmechado",
    "price": 8000
  },
  {
    "id": 5,
    "name": "Perro Americano",
    "ingredients": "Salchicha americana, cebolla, papita ripio, queso, jamón, pollo desmechado, tocineta",
    "price": 12000
  },
  {
    "id": 6,
    "name": "Sandwich Sencillo",
    "ingredients": "Jamón, queso, croqueta de carne o pollo desmechado o filete de pollo, tocineta, huevo frito, vegetales",
    "price": 11000
  },
  {
    "id": 7,
    "name": "Sandwich Mixto",
    "ingredients": "Jamón, queso, croqueta de carne, pollo desmechado o filete de pollo, huevo frito, tocineta, vegetales",
    "price": 13000
  },
  {
    "id": 8,
    "name": "Picada Personal",
    "ingredients": "Papa a la francesa, chinchurria, carne de cerdo, carne de res, filete de pechuga, ubre, chorizo antioqueño, chorizo coctelero, huevo de codorniz, vegetales",
    "price": 12000
  },
  {
    "id": 9,
    "name": "Picada Mediana",
    "ingredients": "Papa a la francesa, carne de cerdo, carne de res, filete de pechuga, ubre, chorizo antioqueño, chorizo coctelero, huevo de codorniz, vegetales",
    "price": 22000
  },
  {
    "id": 10,
    "name": "Picada Extra",
    "ingredients": "Papa a la francesa, chinchurria, carne de cerdo, carne de res, filete de pechuga, ubre, chorizo antioqueño, chorizo coctelero, huevo de codorniz, vegetales",
    "price": 30000
  },
  {
    "id": 11,
    "name": "Sandwich Cubano",
    "ingredients": "Pan de orégano, vegetales, carne asada, filete de pechuga o pollo desmechado, huevo frito, tocineta, jamón, queso",
    "price": 15000
  },
  {
    "id": 12,
    "name": "Bandeja de Carne Completa",
    "ingredients": "Papa a la francesa, ensalada de cebolla, tomate, lechuga y aguacate",
    "price": 17000
  },
  {
    "id": 13,
    "name": "Bandeja de Media Carne",
    "ingredients": "Papa a la francesa, ensalada de cebolla, tomate, lechuga y aguacate",
    "price": 10000
  },
  {
    "id": 14,
    "name": "Bandeja de Pechuga Completa",
    "ingredients": "Papa a la francesa, ensalada de cebolla, tomate, lechuga y aguacate",
    "price": 17000
  },
  {
    "id": 15,
    "name": "Bandeja de Media Pechuga",
    "ingredients": "Papa a la francesa, ensalada de cebolla, tomate, lechuga y aguacate",
    "price": 10000
  },
  {
    "id": 16,
    "name": "Bandeja de Chinchurria",
    "ingredients": "Papa a la francesa, ensalada de cebolla, tomate, lechuga y aguacate",
    "price": 12000
  },
  {
    "id": 17,
    "name": "Bandeja de Pernil al Horno",
    "ingredients": "Papa a la francesa, ensalada de cebolla, tomate, aguacate",
    "price": 14000
  },
  {
    "id": 18,
    "name": "Bandeja de Chinchurria Extra",
    "ingredients": "Papa a la francesa, ensalada de cebolla, tomate, lechuga y aguacate",
    "price": 15000
  },
  {
    "id": 19,
    "name": "Salchipollo Personal",
    "ingredients": "Papa a la francesa, salchicha, pollo desmechado, vegetales, huevo de codorniz, chorizo coctelero",
    "price": 12000
  },
  {
    "id": 20,
    "name": "Salchipollo Mediano",
    "ingredients": "Papa a la francesa, salchicha, pollo desmechado, vegetales, huevo de codorniz, chorizo coctelero",
    "price": 20000
  },
  {
    "id": 21,
    "name": "Salchipollo Extra",
    "ingredients": "Papa a la francesa, salchicha, pollo desmechado, vegetales, huevo de codorniz, chorizo coctelero",
    "price": 28000
  },
  {
    "id": 22,
    "name": "Salchipapa Personal",
    "ingredients": "Papa a la francesa, salchicha, huevo de codorniz, chorizo coctelero, vegetales",
    "price": 10000
  },
  {
    "id": 23,
    "name": "Salchipapa Mediana",
    "ingredients": "Papa a la francesa, salchicha, huevo de codorniz, chorizo coctelero, vegetales",
    "price": 18000
  },
  {
    "id": 24,
    "name": "Salchipapa Extra",
    "ingredients": "Papa a la francesa, salchicha, huevo de codorniz, chorizo coctelero, vegetales",
    "price": 26000
  },
  {
    "id": 25,
    "name": "Porción de Huevos de Codorniz (x5)",
    "ingredients": "",
    "price": 2000
  },
  {
    "id": 26,
    "name": "Porción de Papa a la Francesa",
    "ingredients": "",
    "price": 3000
  },
  {
    "id": 27,
    "name": "Porción de Chinchurria",
    "ingredients": "",
    "price": 5000
  }
];
const PHONE = "573125339955"; // número para pedidos (formato internacional sin +)
let cart = {};

function $qs(sel){return document.querySelector(sel);}
function $qsa(sel){return Array.from(document.querySelectorAll(sel));}
function formatMoney(n){ return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); }


function renderMenu(){
  const menuGrid = $qs('#menuGrid');
  menuGrid.innerHTML = '';
  MENU.forEach(function(it){
    const div = document.createElement('div');
    div.className = 'menu-item';
    const inner = document.createElement('div');
    inner.innerHTML = '<div style="display:flex;justify-content:space-between;align-items:center">' +
                      '<div class="product-name">' + it.name + '</div>' +
                      '<div class="product-price">$' + formatMoney(it.price) + '</div>' +
                      '</div>' +
                      '<div class="product-ingredients">' + it.ingredients + '</div>';
    const controls = document.createElement('div');
    controls.className = 'controls';
    controls.style.marginTop = '10px';
    controls.innerHTML = '<button class="link-ghost dec" data-id="' + it.id + '">−</button>' +
                         '<input class="qty" data-id="' + it.id + '" type="number" min="0" value="0" />' +
                         '<button class="btn inc" data-id="' + it.id + '">＋</button>';
    div.appendChild(inner);
    div.appendChild(controls);
    menuGrid.appendChild(div);
  });
  attachMenuEvents();
  updateCartUI();
}


function attachMenuEvents(){
  $qsa('.inc').forEach(function(b){b.addEventListener('click', function(e){
    const id = +e.target.dataset.id;
    cart[id] = (cart[id]||0) + 1;
    syncInputs(id); updateCartUI();
  })});
  $qsa('.dec').forEach(function(b){b.addEventListener('click', function(e){
    const id = +e.target.dataset.id;
    cart[id] = Math.max(0,(cart[id]||0)-1);
    syncInputs(id); updateCartUI();
  })});
  $qsa('.qty').forEach(function(inp){inp.addEventListener('input', function(e){
    const id = +e.target.dataset.id;
    let v = parseInt(e.target.value||0);
    if(isNaN(v)||v<0) v=0;
    if(v>99) v=99;
    cart[id]=v; updateCartUI();
  })});
}


function syncInputs(id){
  const inp = document.querySelector('input.qty[data-id="' + id + '"]');
  if(inp) inp.value = cart[id]||0;
}


function getCartItems(){
  return MENU.map(function(it){ var o = Object.assign({}, it); o.qty = cart[it.id]||0; return o; }).filter(function(x){ return x.qty>0; });
}


function updateCartUI(){
  const list = getCartItems();
  const cartList = $qs('#cartList');
  if(list.length===0){
    cartList.innerText = 'No hay productos añadidos.';
  } else {
    cartList.innerHTML = list.map(function(x){ return x.qty + ' x ' + x.name + ' — $' + formatMoney(x.qty*x.price); }).join('<br>');
  }
  const total = list.reduce(function(s,it){ return s + it.qty * it.price; }, 0);
  $qs('#total').innerText = formatMoney(total);
}


$qs('#whatsappBtn').addEventListener('click', function(){
  const items = getCartItems();
  if(items.length===0){ alert('El pedido está vacío. Agrega productos.'); return; }
  const cliente = $qs('#cliente').value.trim() || 'No especificado';
  const direccion = $qs('#direccion').value.trim() || 'No especificada';
  const total = items.reduce(function(s,it){ return s + it.qty * it.price; }, 0);
  var lines = [];
  lines.push('*Pedido Donde Ludy*');
  lines.push('Cliente: ' + cliente);
  lines.push('Dirección: ' + direccion);
  lines.push('');
  items.forEach(function(it){ lines.push(it.qty + ' x ' + it.name + ' - $' + formatMoney(it.qty*it.price)); });
  lines.push('');
  lines.push('Total: $' + formatMoney(total));
  var text = encodeURIComponent(lines.join('\n'));
  var wa = 'https://wa.me/' + PHONE + '?text=' + text;
  window.open(wa, '_blank');
});


$qs('#clearBtn').addEventListener('click', function(){
  cart = {}; $qsa('.qty').forEach(function(i){ i.value = 0; }); updateCartUI();
});

document.addEventListener('DOMContentLoaded', function(){ renderMenu(); });