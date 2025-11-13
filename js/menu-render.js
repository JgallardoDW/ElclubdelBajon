// js/menu-render.js
// Lee data/products.json y pinta una lista simple (adaptalo a tu HTML real)
(async function(){
  const money = (n)=> new Intl.NumberFormat('es-AR',{style:'currency',currency:'ARS',maximumFractionDigits:0}).format(n);
  async function loadProducts(){
    try{
      const res = await fetch('./data/products.json', {cache:'no-store'});
      if(!res.ok) throw new Error('No se pudo cargar JSON');
      return await res.json();
    }catch(e){
      console.warn('Usando fallback por error al cargar JSON:', e);
      return [
        {id:'1', name:'Hamburguesa Clásica', price:3500, category:'Hamburguesas', available:true},
        {id:'2', name:'Papas Grandes', price:2200, category:'Acompañamientos', available:true},
        {id:'3', name:'Gaseosa 500ml', price:1200, category:'Bebidas', available:true}
      ];
    }
  }

  const listEl = document.querySelector('#menuList');
  if(!listEl) return;

  const items = await loadProducts();
  listEl.innerHTML = items
    .filter(p=>p.available!==false)
    .map(p=>`
      <li class="item">
        <span class="name">${p.name}</span>
        <span class="dots"></span>
        <span class="price">${money(p.price)}</span>
      </li>
    `).join('');
})();