function genPass(len, upper, nums, special) {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numsChars = "0123456789";
    const specialChars = "!@#$%^&*()_+-={}|[]\:;,.></?~⏭⏮§×÷℗®™⁅⁆⌈⌉⌋⌊»«⟧⟦⟩⟨⟪⟫⟬⟭‗‖◡❁";
    let chars = lower;

    if(upper) chars += upperChars;
    if(nums) chars += numsChars;
    if(special) chars += specialChars;

    let pass = ""
    for (let i = 0; i < len; i++) {
        const randInt = Math.floor(Math.random() * chars.length);
        pass+= chars[randInt];
    }
    return pass;
}
function generate() {
    const len = parseInt(document.getElementById("len").value);
    const upper = document.getElementById("upper").checked;
    const nums = document.getElementById("nums").checked;
    const special = document.getElementById("special").checked;

    if (len < 6 || len > 9999) {
        window.alert('too many or too less characters');
        return;
    }

    const pass = genPass(len, upper, nums, special)
    document.getElementById("passOut").textContent = pass;
}

function reset() {
    document.getElementById("len").value = 12;
    document.getElementById("upper").checked = true;
    document.getElementById("nums").checked = true;
    document.getElementById("special").checked = true
    document.getElementById("passOut").textContent = "Your Password Will be Shown Here!";

}