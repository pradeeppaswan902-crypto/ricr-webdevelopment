const mapBox = document.getElementById("mapBox");

const positions = {
    andhra_pradesh:{x:195,y:391},
    arunachal_pradesh:{x:400,y:173},
    assam:{x:385,y:195},
    bihar:{x:305,y:206},
    chhattisgarh:{x:255,y:268},
    goa:{x:125,y:380},
    gujarat:{x:102,y:246},
    haryana:{x:171,y:149},
    himachal_pradesh:{x:195,y:100},
    jharkhand:{x:290,y:250},
    karnataka:{x:149,y:391},
    kerala:{x:156,y:463},
    madhya_pradesh:{x:215,y:260},
    maharashtra:{x:143,y:315},
    manipur:{x:416,y:219},
    meghalaya:{x:373,y:208},
    mizoram:{x:402,y:251},
    nagaland:{x:420,y:201},
    odisha:{x:288,y:291},
    punjab:{x:162,y:119},
    rajasthan:{x:145,y:165},
    sikkim:{x:338,y:177},
    tamil_nadu:{x:191,y:456},
    telangana:{x:206,y:339},
    tripura:{x:384,y:244},
    uttar_pradesh:{x:255,y:210},
    uttarakhand:{x:211,y:133},
    west_bengal:{x:323,y:251},

    
    andaman_nicobar:{x:409,y:444},
    chandigarh:{x:195,y:115},
    dadra_nagar_haveli:{x:103,y:296},
    daman_diu:{x:125,y:245},
    delhi:{x:180,y:157},
    jammu_kashmir:{x:152,y:69},
    ladakh:{x:189,y:55},
    puducherry:{x:216,y:443},
};



function addFlag(state){
    const pos = positions[state];
    if(!pos) return;

    const flag = document.createElement("img");
    flag.src = "india.png";
    flag.className = "flag";
    flag.style.left = pos.x + "px";
    flag.style.top = pos.y + "px";
    mapBox.appendChild(flag);

    playFlagSound();
}

document.getElementById("stateSelect").addEventListener("change", function () {
    if (this.value) addFlag(this.value);
});


document.getElementById("clearBtn").addEventListener("click", () => {
    document.querySelectorAll(".flag").forEach(f => f.remove());
    document.getElementById("stateSelect").value = "";
});


document.getElementById("addBtn").addEventListener("click", () => {
    Object.keys(positions).forEach(state => addFlag(state));
});

let soundOn = true;

const soundBtn = document.getElementById("soundBtn");
const addSound = new Audio("flag.mp3");


addSound.preload = "auto";
addSound.load();


function unlockAudio() {
    addSound.play().then(() => {
        addSound.pause();
        addSound.currentTime = 0;
        document.body.removeEventListener("click", unlockAudio);
        document.body.removeEventListener("touchstart", unlockAudio);
    }).catch(() => {});
}
document.body.addEventListener("click", unlockAudio);
document.body.addEventListener("touchstart", unlockAudio);


soundBtn.addEventListener("click", function () {
    soundOn = !soundOn;
    soundBtn.innerHTML = soundOn ? "🔊" : "🔇";
    soundBtn.style.background = soundOn ? "#00c9ff" : "#888";
});


function playFlagSound() {
    if (!soundOn) return;

    addSound.currentTime = 0;
    addSound.play().catch(err => console.log("Blocked:", err));
}
