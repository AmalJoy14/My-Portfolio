//Adding resume
const cvBtn = document.querySelector(".cvButton");
cvBtn.addEventListener("click", () => {
    window.open("./Resume.pdf", "_blank");
});
//----------------------------------------------------------------

//function to add drop effect to list
function addEffect(number, delay, list) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            list[number].classList.add("newDropEffect");
            resolve("success");
        }, delay);
    });
}
//----------------------------------------------------------------

//function to remove effect from list
function removeEffect(number,list){
    list[number].classList.remove("newDropEffect");
}
//-----------------------------------------------------------------

//Adding animation to header
const headerObjGrp = document.querySelectorAll(".HeaderObj");

async function addDropEffectToHeader() {
    await addEffect(0, 0,headerObjGrp);
    for (let i=1 ;i<=4 ;i++){
        await addEffect(i, 300 ,headerObjGrp);
    }
}
addDropEffectToHeader();
//------------------------------------------------------------------

//Adding animation to skills section
const skillIconGrp = document.querySelectorAll(".skillIcon");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(async (entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
                await addEffect(0,0,skillIconGrp);
                for (let i=1;i<9;i++){
                    await addEffect(i, 300,skillIconGrp);
                }
        } else {
                for (let i=0;i<9;i++){
                    removeEffect(i,skillIconGrp);
                }
        }
    });
});

const skill = document.querySelector(".skills");
observer.observe(skill); 
//---------------------------------------------------------------------