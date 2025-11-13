// js/admin.js
const PASS = 'bajon2025'; // <- cambiá esto
const tbody = document.querySelector('tbody');
const authSection = document.querySelector('#authSection');
const editorSection = document.querySelector('#editorSection');
const passInput = document.querySelector('#pass');
const loginBtn = document.querySelector('#loginBtn');

const fileInput = document.querySelector('#fileInput');
const loadBtn = document.querySelector('#loadFile');
const downloadBtn = document.querySelector('#download');
const addBtn = document.querySelector('#add');
const resetBtn = document.querySelector('#reset');

let items = [];

const demo = [
  {id:crypto.randomUUID(), name:'Hamburguesa Clásica', price:3500, category:'Hamburguesas', available:true},
  {id:crypto.randomUUID(), name:'Papas Grandes', price:2200, category:'Acompañamientos', available:true},
  {id:crypto.randomUUID(), name:'Gaseosa 500ml', price:1200, category:'Bebidas', available:true}
];

function render(){
  tbody.innerHTML = items.map(p=>`
    <tr data-id="${p.id}">
      <td><input type="text" value="${escapeHtml(p.name)}" class="name"/></td>
      <td><input type="number" min="0" step="1" value="${p.price}" class="price"/></td>
      <td><input type="text" value="${escapeHtml(p.category||'')}" class="category"/></td>
      <td class="switch">
        <input type="checkbox" class="available" ${p.available!==false?'checked':''}/>
        <span>${p.available!==false?'Sí':'No'}</span>
      </td>
      <td><button class="delete">Eliminar</button></td>
    </tr>
  `).join('');
}

function escapeHtml(s=''){
  return s.replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

function readFromTable(){
  items = [...document.querySelectorAll('tbody tr')].map(tr=>{
    return {
      id: tr.dataset.id,
      name: tr.querySelector('.name').value.trim(),
      price: Number(tr.querySelector('.price').value||0),
      category: tr.querySelector('.category').value.trim(),
      available: tr.querySelector('.available').checked
    };
  });
}

loginBtn.addEventListener('click', ()=>{
  if(passInput.value === PASS){
    authSection.classList.add('hidden');
    editorSection.classList.remove('hidden');
    items = structuredClone(demo);
    render();
  }else{
    passInput.value='';
    passInput.placeholder='Contraseña incorrecta';
  }
});

tbody.addEventListener('input', (e)=>{
  if(e.target.matches('.available')){
    e.target.nextElementSibling.textContent = e.target.checked ? 'Sí':'No';
  }
});

tbody.addEventListener('click', (e)=>{
  if(e.target.matches('.delete')){
    const tr = e.target.closest('tr');
    tr.remove();
    readFromTable();
  }
});

addBtn.addEventListener('click', ()=>{
  items.push({id: crypto.randomUUID(), name:'Nuevo producto', price:0, category:'', available:true});
  render();
});

loadBtn.addEventListener('click', ()=> fileInput.click());
fileInput.addEventListener('change', async ()=>{
  const file = fileInput.files[0];
  if(!file) return;
  const text = await file.text();
  try{
    const data = JSON.parse(text);
    if(!Array.isArray(data)) throw new Error('El JSON debe ser un array');
    items = data.map(p=>({
      id: p.id || crypto.randomUUID(),
      name: String(p.name||''),
      price: Number(p.price||0),
      category: String(p.category||''),
      available: (p.available!==false)
    }));
    render();
  }catch(e){
    alert('JSON inválido: '+e.message);
  }
  fileInput.value = '';
});

downloadBtn.addEventListener('click', ()=>{
  readFromTable();
  const blob = new Blob([JSON.stringify(items, null, 2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'products.json';
  a.click();
  URL.revokeObjectURL(a.href);
});

resetBtn.addEventListener('click', ()=>{
  items = structuredClone(demo);
  render();
});