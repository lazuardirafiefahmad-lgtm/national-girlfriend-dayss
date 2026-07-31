// ===============================
// LOADER
// ===============================

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2200);
});

// ===============================
// ELEMENT
// ===============================

const startBtn = document.getElementById("startBtn");
const letter = document.getElementById("letter");
const gallery = document.getElementById("gallery");
const reason = document.getElementById("reason");
const ending = document.getElementById("ending");

const typing = document.getElementById("typing");

// ===============================
// SURAT CINTA
// ===============================

const message = `Happy National Girlfriend Day, Sayangku Rini Nurhayati. ❤️

Kalau kamu sedang membaca tulisan ini, berarti kamu sudah membuka hadiah kecil yang aku buat khusus untuk kamu.

Mungkin website ini sederhana.

Mungkin bukan hadiah yang paling mahal.

Tapi percayalah...

Setiap kata yang ada di sini ditulis dengan penuh rasa sayang.

Terima kasih karena sudah hadir dalam hidupku.

Terima kasih karena selalu menjadi seseorang yang bisa membuat hariku terasa lebih indah.

Aku sadar aku belum sempurna.

Masih banyak kekurangan yang harus aku perbaiki.

Masih banyak hal yang harus aku pelajari agar bisa menjadi laki-laki yang lebih baik untukmu.

Maaf kalau selama ini aku pernah membuatmu kecewa.

Maaf kalau aku pernah membuatmu menangis.

Maaf kalau aku pernah membuatmu merasa sendirian.

Aku benar-benar minta maaf.

Aku ingin terus belajar.

Belajar memahami kamu.

Belajar mengerti perasaanmu.

Belajar menjadi tempat ternyaman untukmu.

Aku tidak tahu bagaimana masa depan nanti.

Tapi aku berharap...

Semoga kita selalu diberikan kesehatan.

Semoga Allah menjaga hubungan kita.

Semoga Allah memudahkan langkah kita.

Dan semoga suatu hari nanti...

Aku bisa mengucapkan ijab qabul di hadapanmu.

Terima kasih sudah menjadi perempuan yang luar biasa.

Aku bangga mempunyai kamu.

Aku bangga bisa memanggilmu sebagai pacarku.

Happy National Girlfriend Day ❤️

I Love You Forever.

- Rafief ❤️`;

let index = 0;

function typeWriter(){

    if(index < message.length){

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter,25);

    }

}

// ===============================
// OPEN BUTTON
// ===============================

startBtn.addEventListener("click",()=>{

letter.classList.remove("hide");

gallery.classList.remove("hide");

reason.classList.remove("hide");

ending.classList.remove("hide");

letter.classList.add("fadeUp");

gallery.classList.add("fadeUp");

reason.classList.add("fadeUp");

ending.classList.add("fadeUp");

window.scrollTo({

top:letter.offsetTop,

behavior:"smooth"

});

typeWriter();

});// ===============================
// HEART RAIN
// ===============================

const hearts = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const icons = ["❤️","💖","💕","💗","💘","💝"];

    heart.innerHTML = icons[Math.floor(Math.random()*icons.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.top = "-50px";

    heart.style.fontSize = (Math.random() * 20 + 18) + "px";

    heart.style.animationDuration = (Math.random() * 4 + 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}

setInterval(createHeart, 300);

// ===============================
// PHOTO EFFECT
// ===============================

const photos = document.querySelectorAll(".grid img");

photos.forEach(photo => {

    photo.addEventListener("click", () => {

        if(photo.classList.contains("zoom")){

            photo.classList.remove("zoom");

        }else{

            photos.forEach(p=>p.classList.remove("zoom"));

            photo.classList.add("zoom");

        }

    });

});

// ===============================
// SCROLL ANIMATION
// ===============================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fadeUp");

}

});

},{threshold:0.2});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});

// ===============================
// LOVE BUTTON
// ===============================

const loveBtn = document.getElementById("loveBtn");

loveBtn.addEventListener("click",()=>{

for(let i=0;i<120;i++){

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.className="heart";

heart.style.left="50%";

heart.style.top="50%";

heart.style.position="fixed";

heart.style.fontSize=(Math.random()*30+20)+"px";

heart.style.transition="all 2s ease";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform=`translate(${(Math.random()-0.5)*900}px, ${(Math.random()-0.5)*700}px) scale(0.5)`;

heart.style.opacity="0";

},50);

setTimeout(()=>{

heart.remove();

},2200);

}

alert("❤️ I Love You Forever, Rini ❤️");

});// ===============================
// COUNTDOWN (LAMA HUBUNGAN)
// ===============================

// GANTI TANGGAL INI SESUAI TANGGAL JADIAN KALIAN
const relationshipDate = new Date("2025-01-01T00:00:00");

function updateLoveTime(){

    const now = new Date();

    const diff = now - relationshipDate;

    const days = Math.floor(diff / (1000*60*60*24));

    const hours = Math.floor(diff / (1000*60*60)) % 24;

    const minutes = Math.floor(diff / (1000*60)) % 60;

    const seconds = Math.floor(diff / 1000) % 60;

    const counter = document.getElementById("loveCounter");

    if(counter){

        counter.innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds ❤️`;

    }

}

setInterval(updateLoveTime,1000);

// ===============================
// BACKGROUND STARS
// ===============================

function createStar(){

    const star=document.createElement("div");

    star.innerHTML="✦";

    star.style.position="fixed";

    star.style.left=Math.random()*100+"vw";

    star.style.top="-20px";

    star.style.color="white";

    star.style.opacity=Math.random();

    star.style.fontSize=(Math.random()*12+8)+"px";

    star.style.pointerEvents="none";

    star.style.transition="transform 12s linear";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.style.transform="translateY(110vh)";

    },50);

    setTimeout(()=>{

        star.remove();

    },12000);

}

setInterval(createStar,600);

// ===============================
// MOUSE SPARKLE
// ===============================

document.addEventListener("mousemove",(e)=>{

    const sparkle=document.createElement("div");

    sparkle.innerHTML="✨";

    sparkle.style.position="fixed";

    sparkle.style.left=e.clientX+"px";

    sparkle.style.top=e.clientY+"px";

    sparkle.style.pointerEvents="none";

    sparkle.style.fontSize="14px";

    sparkle.style.transition="all .8s";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.style.opacity="0";

        sparkle.style.transform="translateY(-25px) scale(.5)";

    },50);

    setTimeout(()=>{

        sparkle.remove();

    },900);

});

// ===============================
// AUTO SCROLL EFFECT
// ===============================

window.addEventListener("scroll",()=>{

    document.querySelectorAll(".grid img").forEach((img,index)=>{

        img.style.transform=`translateY(${window.scrollY*0.02*(index%3)}px)`;

    });

});

// ===============================
// END MESSAGE
// ===============================

console.log(`
❤️========================================❤️

Happy National Girlfriend Day

Website dibuat khusus untuk

Rini Nurhayati ❤️

Dengan cinta dari

Rafief ❤️

❤️========================================❤️
`);
