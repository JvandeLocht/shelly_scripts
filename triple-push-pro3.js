function timerCode() {
    Shelly.call("Switch.Set", { "id": 0, "on": false });
};
function justOn() {
    Shelly.call("Switch.Set", { "id": 0, "on": true });
};


Shelly.addEventHandler(function(e) {
    if (e.component === "input:0") {
        if (e.info.event === "single_push") {
            print("Button was pushed once, activate timer");
            Timer.set(
        /* number of miliseconds */ 200000,
        /* repeat? */ false,
        /* callback */ timerCode
            );
        }
        if (e.info.event === "triple_push") {
            print("Button was pushed 3 times");
            justOn()
        }
    }
});
