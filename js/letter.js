const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ แก้ข้อความจดหมายตรงนี้ได้เลย
const MESSAGE = `
สุขสันต์วันเกิดนะแฟน 🐶
โตขึ้นอีกปีแล้วนะอ้วน เค้าอยากเห็นเทอมีความสุขทุ้กกกกวันเลย 
ไม่เจ็บ ไม่ไข้ ไม่มีเรื่องทำให้ไม่สบายใจ
เจอแต่คนใจดี ไม่ว่าอยู่ไหนก็มีแต่คนรักคนเอ็นดู
ดูแลสุขภาพตัวเองหน่อย รู้อยู่ว่าเค้าเป็นห่วง
รักเทอยังไงในวันแรก วันนี้ก็ยังเหมือนเดิมนะ แถมมากกว่าเทออีก
โตไปด้วยกันนี่แหละ ไม่เห็นต้องแยกย้ายกันไปโตเลยเนอะ🫂🤍🤍

`;

function open(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}
function close(){ modalBackdrop.style.display = "none"; }

openLetter.addEventListener("click", open);
readBtn.addEventListener("click", open);
closeBtn.addEventListener("click", close);
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop) close();
});
