/* Club del Bajón — app.js con Combos + Buscador */
const WHATSAPP_DEST = '5491160067508'; // Cambiar por el número del local
const MP_LOCALE = 'es-AR';

const $ = (s)=>document.querySelector(s);
const $$ = (s)=>[...document.querySelectorAll(s)];
const money = (n)=>new Intl.NumberFormat('es-AR',{style:'currency',currency:'ARS',maximumFractionDigits:0,currency:'ARS'}).format(n);

/* ====== MENÚ ====== */
const MENU = [
/* === Gaseosas === */
{ id:'coca15',   cat:'gaseosas', nombre:'Coca-Cola 1.5L', desc:'Sabor original', img:'img/coca-15.jpg',   precio:2800, extras:[] },
{ id:'sprite15', cat:'gaseosas', nombre:'Sprite 1.5L',    desc:'Lima-limón',    img:'img/sprite-15.jpg', precio:2600, extras:[] },
{ id:'fanta15',  cat:'gaseosas', nombre:'Fanta 1.5L',     desc:'Naranja',       img:'img/fanta-15.jpg',  precio:2600, extras:[] },

/* === Cervezas === */
{ id:'brahma473',   cat:'cervezas', nombre:'Brahma 473cc',   desc:'Cerveza rubia', img:'img/brahma-473.jpg',   precio:2200, extras:[] },
{ id:'heineken473', cat:'cervezas', nombre:'Heineken 473cc', desc:'Cerveza rubia', img:'img/heineken-473.jpg', precio:2700, extras:[] },
{ id:'quilmes473',  cat:'cervezas', nombre:'Quilmes 473cc',  desc:'Clásica',       img:'img/quilmes-473.jpg',  precio:2400, extras:[] },
{ id:'schneider710',cat:'cervezas', nombre:'Schneider 710cc',desc:'Lager',        img:'img/schneider-710.jpg',precio:3300, extras:[] },


  /* Combos */
  {
    id: 'combo-clasica',
    cat: 'combos',
    nombre: 'Combo Clásica',
    desc: 'Burger Clásica (1 medallón) + Papas + Gaseosa 500ml',
    img: 'img/clasica.jpeg',
    precio: 11500,
    extras: [
      { id:'upgrade-burger', label:'Subir a 2 medallones', precio: 1000 },
      { id:'cheddar', label:'+ Cheddar en papas', precio: 600 }
    ]
  },
  {
    id: 'combo-americana',
    cat: 'combos',
    nombre: 'Combo Americana',
    desc: 'Americana (1 medallón) + Papas + Gaseosa 500ml',
    img: 'img/americana.jpeg',
    precio: 11000,
    extras: [
      { id:'upgrade-burger', label:'Subir a 2 medallones', precio: 1000 },
      { id:'doble-cheddar', label:'Doble cheddar en burger', precio: 700 }
    ]
  },

  /* Burgers con variantes */
  {
    id: 'bk-clasica',
    cat: 'burgers',
    nombre: 'Burger Clásica',
    desc: 'Pan, carne y cheddar. Incluye papas fritas 🍟',
    img: 'https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=900&auto=format&fit=crop',
    variantsTitle: 'Medallones',
    variantsRequired: true,
    variants: [
      { id: 'm1', label: '1 medallón', precio: 8000 },
      { id: 'm2', label: '2 medallones', precio: 9000 },
      { id: 'm3', label: '3 medallones', precio: 10000 },
      { id: 'm4', label: '4 medallones', precio: 11000 },
      { id: 'm5', label: '5 medallones', precio: 12000 }
    ],
    extras: [{ id:'extraCheddar', label:'Extra cheddar', precio:700 }, { id:'bacon', label:'Bacon', precio:900 }]
  },
  {
    id: 'bk-americana',
    cat: 'burgers',
    nombre: 'Americana',
    desc: 'Pan, carne, lechuga y tomate. Incluye papas fritas 🍟',
    img: 'img/hamburge2.jpeg',
    variantsTitle: 'Medallones',
    variantsRequired: true,
    variants: [
      { id: 'm1', label: '1 medallón', precio: 7500 },
      { id: 'm2', label: '2 medallones', precio: 8500 },
      { id: 'm3', label: '3 medallones', precio: 9500 },
      { id: 'm4', label: '4 medallones', precio: 10500 },
      { id: 'm5', label: '5 medallones', precio: 11500 }
    ],
    extras: [{ id:'queso', label:'+ Queso', precio:600 }, { id:'tomateExtra', label:'+ Tomate', precio:300 }]
  },
  {
    id: 'bk-especial-bajon',
    cat: 'burgers',
    nombre: 'Especial Bajón',
    desc: 'Pan, carne, cheddar, barbacoa y cebolla caramelizada. Incluye papas fritas 🍟',
    img: "img/hamburg1.jpeg",
    variantsTitle: 'Medallones',
    variantsRequired: true,
    variants: [
      { id: 'm1', label: '1 medallón', precio: 8500 },
      { id: 'm2', label: '2 medallones', precio: 10000 },
      { id: 'm3', label: '3 medallones', precio: 11500 },
      { id: 'm4', label: '4 medallones', precio: 13000 },
      { id: 'm5', label: '5 medallones', precio: 15000 }
    ],
    extras: [{ id:'extraBBQ', label:'Extra barbacoa', precio:400 }, { id:'cebollaCaramel', label:'Más cebolla caramelizada', precio:500 }]
  },
  {
    id: 'bk-edicion-club',
    cat: 'burgers',
    nombre: 'Edición Club Bajón',
    desc: 'Pan, carne, cheddar, mostaza, ketchup, cebolla caramelizada y bacon. Incluye papas fritas 🍟',
    img: 'img/bajonera.jpeg',
    variantsTitle: 'Medallones',
    variantsRequired: true,
    variants: [
      { id: 'm1', label: '1 medallón', precio: 8500 },
      { id: 'm2', label: '2 medallones', precio: 10000 },
      { id: 'm3', label: '3 medallones', precio: 11500 },
      { id: 'm4', label: '4 medallones', precio: 13000 },
      { id: 'm5', label: '5 medallones', precio: 15000 }
    ],
    extras: [{ id:'extraCheddar', label:'Extra cheddar', precio:700 }, { id:'bacon', label:'Bacon', precio:900 }]
  },

  /* Papas */
  {
    id: 'papas-clasicas',
    cat: 'papas',
    nombre: 'Papas clásicas',
    desc: 'Papas fritas doradas con sal marina.',
    img: 'img/papas.jpeg',
    precio: 2600,
    extras: [{ id:'cheddar', label:'+ Cheddar', precio:600 }, { id:'bacon', label:'+ Bacon', precio:700 }]
  },
];

/* ====== Estado ====== */
let carrito = [];
let ENVIO = Number(localStorage.getItem('cb_envio') || 0);

/* ====== Render ====== */
const catalogo = $('#catalogo');

function renderCatalogo(items = MENU){
  const cards = items.map(p=>{
    const base = p.precio ?? (p.variants?.[0]?.precio || 0);
    return `
    <article class="card bg-white rounded-2xl overflow-hidden flex flex-col">
      <img src="${p.img}" alt="${p.nombre}" class="h-40 w-full object-cover" loading="lazy">
      <div class="p-4 flex-1 flex flex-col">
        <h3 class="font-semibold text-lg">${p.nombre}</h3>
        <p class="text-sm text-neutral-500 mb-3">${p.desc}</p>
        <div class="mt-auto flex items-center justify-between">
          <span class="font-bold">${money(base)}</span>
          <button class="btn px-3 py-2 rounded-xl bg-[var(--cb-amarelo)] text-black font-semibold" data-id="${p.id}">Agregar</button>
        </div>
      </div>
    </article>`;
  }).join('');
  catalogo.innerHTML = cards;
  $$('button[data-id]').forEach(b=> b.onclick = ()=> abrirModal(b.dataset.id));
}
renderCatalogo(MENU);

/* Filtros por categoría */
$$('.chip').forEach(ch=>{
  ch.onclick = ()=>{
    const f = ch.dataset.filter;
    renderCatalogo(f==='all' ? MENU : MENU.filter(m=>m.cat===f));
  };
});

/* Buscador (desktop + mobile) */
function applySearch(){
  const q = ($('#searchInput')?.value || $('#searchInputMobile')?.value || '').toLowerCase().trim();
  const base = q ? MENU.filter(p=> (p.nombre+' '+p.desc).toLowerCase().includes(q)) : MENU;
  renderCatalogo(base);
}
$('#searchInput')?.addEventListener('input', applySearch);
$('#searchInputMobile')?.addEventListener('input', applySearch);

/* ====== Modal ====== */
const modal = $('#modal');
const mImg = $('#mImg'); const mTitle=$('#mTitle'); const mDesc=$('#mDesc');
const mQty=$('#mQty'); const mSubtotal=$('#mSubtotal'); const mAdicionales=$('#mAdicionales');
let itemActual = null;

function abrirModal(id){
  const p = MENU.find(x=>x.id===id); if(!p) return;
  itemActual = {
    id:p.id, nombre:p.nombre, desc:p.desc, img:p.img,
    qty:1, variantId:p.variants?.[0]?.id || null,
    variantPrice:p.variants?.[0]?.precio ?? p.precio ?? 0,
    extras:[], spec:p
  };
  mImg.src=p.img; mTitle.textContent=p.nombre; mDesc.textContent=p.desc; mQty.textContent='1';
  renderOpciones(p); actualizarSubtotalModal(); modal.showModal();
}

function renderOpciones(p){
  const parts=[];
  if(p.variants?.length){
    parts.push(`<div class="space-y-2">
      <div class="font-semibold">${p.variantsTitle || 'Opciones'}</div>
      ${p.variants.map(v=>`
        <label class="flex items-center justify-between gap-3 px-3 py-2 rounded-xl border">
          <div class="flex items-center gap-3">
            <input type="radio" name="variant" value="${v.id}" data-precio="${v.precio}" ${v.id===itemActual.variantId?'checked':''}>
            <span>${v.label}</span>
          </div>
          <span class="text-sm text-neutral-600">${money(v.precio)}</span>
        </label>`).join('')}
    </div>`);
  }
  const extras = p.extras || [];
  if(extras.length){
    parts.push(`<div class="space-y-2">
      <div class="font-semibold">Adicionales</div>
      ${extras.map(a=>`
        <label class="flex items-center justify-between gap-3 px-3 py-2 rounded-xl border">
          <div class="flex items-center gap-3">
            <input type="checkbox" name="extra" value="${a.id}" data-precio="${a.precio}">
            <span>${a.label}</span>
          </div>
          <span class="text-sm text-neutral-600">${money(a.precio)}</span>
        </label>`).join('')}
    </div>`);
  }
  mAdicionales.innerHTML = parts.join('');
  mAdicionales.querySelectorAll('input[name="variant"]').forEach(r=> r.onchange=()=>{
    itemActual.variantId=r.value; itemActual.variantPrice=Number(r.dataset.precio); actualizarSubtotalModal();
  });
  mAdicionales.querySelectorAll('input[name="extra"]').forEach(cb=> cb.onchange=()=>{
    const id=cb.value, precio=Number(cb.dataset.precio);
    if(cb.checked) itemActual.extras.push({id, precio}); else itemActual.extras=itemActual.extras.filter(e=>e.id!==id);
    actualizarSubtotalModal();
  });
}

/* >>>>>>> FUNCIÓN FALTANTE (FIX) <<<<<<< */
// Calcula y muestra el subtotal del modal (cantidad + variante + extras)
function actualizarSubtotalModal(){
  if (!itemActual) return;
  const extras = (itemActual.extras || []).reduce((acc, e) => acc + Number(e.precio || 0), 0);
  const base   = Number(itemActual.variantPrice ?? itemActual.priceUnit ?? 0);
  const qty    = Number(itemActual.qty || 1);
  const subtotal = (base + extras) * qty;
  const el = document.getElementById('mSubtotal');
  if (el) el.textContent = money(subtotal);
}

$('#qtyMinus')?.addEventListener('click', ()=>{ if(itemActual?.qty>1){ itemActual.qty--; mQty.textContent=String(itemActual.qty); actualizarSubtotalModal(); }});
$('#qtyPlus')?.addEventListener('click', ()=>{ if(itemActual){ itemActual.qty++; mQty.textContent=String(itemActual.qty); actualizarSubtotalModal(); }});
$('#mClose')?.addEventListener('click', ()=> modal.close());
$('#mAdd')?.addEventListener('click', ()=>{
  if(!itemActual) return;
  carrito.push({
    id: crypto.randomUUID(), prodId:itemActual.id, nombre:itemActual.nombre, img:itemActual.img,
    qty:itemActual.qty, priceUnit:itemActual.variantPrice, variantId:itemActual.variantId, extras:[...itemActual.extras]
  });
  modal.close(); renderCarrito();
});

/* ====== Carrito ====== */
function renderCarrito(){
  const cont = $('#cart');
  if(!carrito.length){
    cont.innerHTML = `<div class='text-sm text-neutral-500'>Tu carrito está vacío.</div>`;
  }else{
    cont.innerHTML = carrito.map(it=>{
      const extrasTxt = it.extras?.length ? it.extras.map(e=>`${e.id} (+${money(e.precio)})`).join(', ') : 'Sin adicionales';
      const itemTotal = (it.priceUnit + (it.extras||[]).reduce((a,e)=>a+e.precio,0))*it.qty;
      return `<div class='flex gap-3 border rounded-xl p-2'>
        <img src='${it.img}' class='h-14 w-14 rounded-lg object-cover'/>
        <div class='flex-1'>
          <div class='flex justify-between'>
            <div class='font-semibold'>${it.nombre}</div>
            <button data-del='${it.id}' class='text-neutral-400 hover:text-neutral-700'>✕</button>
          </div>
          <div class='text-xs text-neutral-500'>${extrasTxt}</div>
          <div class='flex items-center justify-between mt-1'>
            <div class='flex items-center gap-2'>
              <button data-dec='${it.id}' class='px-2 py-1 rounded-lg bg-neutral-100'>−</button>
              <span>${it.qty}</span>
              <button data-inc='${it.id}' class='px-2 py-1 rounded-lg bg-neutral-100'>＋</button>
            </div>
            <div class='font-semibold'>${money(itemTotal)}</div>
          </div>
        </div>
      </div>`;
    }).join('');
  }
  const sub = carrito.reduce((acc,it)=> acc + (it.priceUnit + (it.extras||[]).reduce((a,e)=>a+e.precio,0))*it.qty, 0);
  const envio = $('#esDelivery')?.checked ? ENVIO : 0;
  $('#subtotal').textContent = money(sub);
  $('#delivery').textContent = money(envio);
  $('#total').textContent = money(sub + envio);
  $('#cartCount').textContent = carrito.reduce((a,i)=>a+i.qty,0);

  cont.querySelectorAll('[data-del]').forEach(b=> b.onclick=()=>{ carrito = carrito.filter(i=>i.id!==b.dataset.del); renderCarrito(); });
  cont.querySelectorAll('[data-inc]').forEach(b=> b.onclick=()=>{ const it = carrito.find(i=>i.id===b.dataset.inc); it.qty++; renderCarrito(); });
  cont.querySelectorAll('[data-dec]').forEach(b=> b.onclick=()=>{ const it = carrito.find(i=>i.id===b.dataset.dec); if(it.qty>1) it.qty--; else carrito=carrito.filter(i=>i.id!==it.id); renderCarrito(); });
}
$('#esDelivery')?.addEventListener('change', renderCarrito);

/* WhatsApp */
$('#btnWhats')?.addEventListener('click', ()=>{
  if(!carrito.length){ alert('Agregá al menos un producto.'); return; }
  const nombre = $('#nombre')?.value.trim() || 'Cliente';
  const dir = $('#direccion')?.value.trim();
  const notas = $('#notas')?.value.trim();

  const sub = carrito.reduce((acc,it)=> acc + (it.priceUnit + (it.extras||[]).reduce((a,e)=>a+e.precio,0))*it.qty, 0);
  const envio = $('#esDelivery')?.checked ? ENVIO : 0;
  const total = sub + envio;

  const lineas = [];
  lineas.push('*Pedido Club del Bajón*');
  lineas.push(`Cliente: ${nombre}`);
  if(dir) lineas.push(`Dirección: ${dir}`);
  lineas.push('');
  carrito.forEach(it=>{
    const extrasTxt = it.extras?.length ? it.extras.map(e=>`${e.id} (+${money(e.precio)})`).join(', ') : 'Sin adicionales';
    const itemTotal = (it.priceUnit + (it.extras||[]).reduce((a,e)=>a+e.precio,0))*it.qty;
    lineas.push(`• ${it.nombre} x${it.qty} — ${money(itemTotal)}`);
    if(it.extras?.length) lineas.push(`  · ${extrasTxt}`);
  });
  lineas.push('');
  lineas.push(`Subtotal: ${money(sub)}`);
  if(envio) lineas.push(`Envío: ${money(envio)}`);
  lineas.push(`*TOTAL: ${money(total)}*`);
  if(notas){ lineas.push(''); lineas.push(`Notas: ${notas}`); }

  const texto = encodeURIComponent(lineas.join('\n'));
  window.open(`https://wa.me/${WHATSAPP_DEST}?text=${texto}`, '_blank');
});


/* Mercado Pago (opcional) */
$('#btnMercadoPago')?.addEventListener('click', ()=>{
  if(!carrito.length){ alert('Agregá al menos un producto.'); return; }
  if(!window.MercadoPago){ alert('El SDK de Mercado Pago no cargó.'); return; }
  const mpKey = localStorage.getItem('cb_mp_pk');
  const prefId = localStorage.getItem('cb_mp_pref');
  if(!mpKey || !prefId){ alert('Falta PUBLIC KEY (cb_mp_pk) o preferenceId (cb_mp_pref).'); return; }
  const mp = new MercadoPago(mpKey, { locale: MP_LOCALE });
  mp.checkout({ preference: { id: prefId }, autoOpen: true });
});

/* Utilidad */
document.querySelector('aside') && $('#openCart')?.addEventListener('click', ()=> document.querySelector('aside').scrollIntoView({behavior:'smooth'}));
$('#year') && ($('#year').textContent = new Date().getFullYear());
renderCatalogo(MENU); renderCarrito();
