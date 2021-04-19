import './scss/index.scss'
import {App} from "./components/App/App";
import {Navigation} from "./components/navigation/Navigation";
import {Balance} from "./components/balance/Balance";
import {Primary} from "./components/primary/Primary";
import {Cases} from "./components/cases/Cases";
import {Free} from "./components/free/Free";
import {Inventory} from "./components/inventory/Inventory";
import {InnerCase} from "./components/inner-case/Inner-case";
import {storage} from "./core/utils";

document.addEventListener("DOMContentLoaded", () => {
    const optionalComponents = {
        cases: Cases,
        free: Free,
        inventory: Inventory,
        primary: Primary,
        innerCase: InnerCase
    }

    let app = new App('#app', {
        components: [Balance, Navigation, optionalComponents[storage('currentSection')] || Primary],
        optionalComponents
    })
    app.render()
})

