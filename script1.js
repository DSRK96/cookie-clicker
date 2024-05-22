function test() {
    if (typeof Game === 'undefined') {
        alert('Cookie Clicker not loaded');
        return;
    }

    const logElem = () => {
        console.log(Game.Objects);
    }

    if (Game.ready) {
        logElem();
    } else {
        Game.onloadMod = logElem();
    }
};