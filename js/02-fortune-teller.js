/*eslint-env browser*/
function tellFortune(children, partner, geographic, job) {
    "use strict";
    var future;
    future = "You will be a " + job + " in " + geographic + ", and married to " + partner + " with " + children + " kids." + "<br>";
    window.document.write(future);
}
tellFortune("2", "carlos slim ", " mexico", "janitor");
tellFortune("5", "manny", "alaska", " cashier");
tellFortune("1", "victor", "san diego", "teacher");
