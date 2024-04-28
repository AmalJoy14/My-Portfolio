//Adding resume
const cvBtn = document.querySelector(".cvButton");
cvBtn.addEventListener("click", () => {
    window.open("./Resume.pdf", "_blank");
});
//----------------------------------------------------------------

//function to add effect to list
function addEffect(number, delay, list,effect) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            list[number].classList.add(effect);
            resolve("success");
        }, delay);
    });
}
//----------------------------------------------------------------

//function to remove effect from list
function removeEffect(number,list,effect){
    list[number].classList.remove(effect);
}
//-----------------------------------------------------------------

//Adding animation to header
const headerObjGrp = document.querySelectorAll(".HeaderObj");

async function addDropEffectToHeader() {
    await addEffect(0, 0,headerObjGrp,"newDropEffect");
    for (let i=1 ;i<=4 ;i++){
        await addEffect(i, 300 ,headerObjGrp,"newDropEffect");
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
                await addEffect(0,0,skillIconGrp,"newDropAliveEffect");
                for (let i=1;i<9;i++){
                    await addEffect(i, 300,skillIconGrp,"newDropAliveEffect");
                }
        } else {
                for (let i=0;i<9;i++){
                    removeEffect(i,skillIconGrp,"newDropAliveEffect");
                }
        }
    });
});

const skill = document.querySelector(".skills");
observer.observe(skill); 
//---------------------------------------------------------------------

//Adding animation to titles
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("newStampEffect");
        }
        else {
            entry.target.classList.remove("newStampEffect");
        }
    });
});

const titlesGrp = document.querySelectorAll(".title");
titlesGrp.forEach((el) => observer2.observe(el));
//------------------------------------------------------------------------

//Adding animation to contact
const contactItemGrp = document.querySelectorAll(".contactItem");

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach(async (entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
                await addEffect(0,0,contactItemGrp,"newDropEffect");
                for (let i=1;i<5;i++){
                    await addEffect(i, 300,contactItemGrp,"newDropEffect");
                }
        } else {
                for (let i=0;i<5;i++){
                    removeEffect(i,contactItemGrp,"newDropEffect");
                }
        }
    });
});

const ContactMainBox = document.querySelector(".ContactMainBox");
observer3.observe(ContactMainBox); 
//-----------------------------------------------------------------------------

//Adding animation to home
const homeItemGrp = document.querySelectorAll(".homeItem, .Button1, .LinkedinIcon, .GithubIcon");

const observer4 = new IntersectionObserver((entries) => {
    entries.forEach(async (entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
                await addEffect(0,0,homeItemGrp,"newFade-inEffect");
                for (let i=1;i<7;i++){
                    await addEffect(i, 300,homeItemGrp,"newFade-inEffect");
                }
        } else {
                for (let i=0;i<7;i++){
                    removeEffect(i,homeItemGrp,"newFade-inEffect");
                }
        }
    });
});

const profileContents = document.querySelector(".profileContent");
observer4.observe(profileContents); 
//-----------------------------------------------------------------------------

//Adding animation to education
const eduItemGrp = document.querySelectorAll(".EducationDuration, .Degree, .EducationLogo, .SchoolName, .grade");

const observer5 = new IntersectionObserver((entries) => {
    entries.forEach(async (entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
                await addEffect(0,0,eduItemGrp,"newDropEffect");
                for (let i=1;i<15;i++){
                    await addEffect(i,200,eduItemGrp,"newDropEffect");
                }
        } else {
                for (let i=0;i<15;i++){
                    removeEffect(i,eduItemGrp,"newDropEffect");
                }
        }
    });
});

const EduBoxGrp = document.querySelector(".EducationBoxGroup");
observer5.observe(EduBoxGrp); 
//-----------------------------------------------------------------------------