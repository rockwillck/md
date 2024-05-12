compliments = [
    "Thank you for being the greatest mother on earth",
    "Thank you for being so accomodating",
    "Thank you for being an incredible teacher",
    "Thank you for being so flexible",
    "Thank you for the hours you've waited in the parking lot",
    "Thank you for the years of support you've given me",
    "Thank you for letting me try everything I want to try",
    "Thank you for being there at every point",
    "Thank you for never giving up on me",
    "Thank you for always putting on a strong face",
    "Thank you for standing up for me",
    "Thank you for standing against me",
    "Thank you for point me in the right direction",
    "Thank you for always protecting my health",
    "Thank you for never doubting me",
    "Thank you for always being a bright light",
    "Thank you for never leaving me alone",
    "Thank you for always helping me along the way",
    "Thank you for never holding my hand too tight",
    "Thank you for countless days spent cheering for me",
    "Thank you for countless years spent by my side",
    "Thank you for giving me so much of your life",
    "Thank you for every bite of food",
    "Thank you for every second of fun",
    "Thank you for every wonderful memory",
    "Thank you for every globe-trotting trip",
    "Thank you for doing everything you can to assure me",
    "Thank you for always being a voice of reason",
    "Thank you for being the greatest mother on earth"
]
for (i = 0; i < compliments.length; i++) {
    document.getElementById("hearts").innerHTML += `
    <button class="heart" onmouseover="comp(${i}, this)" onmouseleave="this.innerText='<3'">
        <3
    </button>`
}

function comp(ind, btn) {
    btn.innerText = compliments[ind]
}