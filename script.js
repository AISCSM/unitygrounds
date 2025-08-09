// Simple modal for item details
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeModal');
const mName = document.getElementById('mName');
const mDesc = document.getElementById('mDesc');
const mPrice = document.getElementById('mPrice');

function openModal({name, desc, price}){
  mName.textContent = name;
  mDesc.textContent = desc;
  mPrice.textContent = price;
  modal.style.display = 'grid';
  modal.setAttribute('aria-hidden','false');
  closeBtn.focus();
}

function closeModal(){
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden','true');
}

document.addEventListener('click', (e)=>{
  const btn = e.target.closest('.item');
  if(btn){
    openModal({
      name: btn.dataset.name,
      desc: btn.dataset.desc,
      price: btn.dataset.price
    });
  }
  if(e.target === modal) closeModal();
});
closeBtn.addEventListener('click', closeModal);
window.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeModal(); });
// Close modal when clicking outside of it
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});