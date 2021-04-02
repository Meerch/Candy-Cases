import './scss/index.scss'
import {App} from "./components/App/App";
import {Navigation} from "./components/navigation/Navigation";
import {Balance} from "./components/balance/Balance";
import {Primary} from "./components/primary/Primary";
import {Cases} from "./components/cases/Cases";
import {Free} from "./components/free/Free";
import {Inventory} from "./components/inventory/Inventory";


let app = new App('#app', {
    components: [Balance, Navigation, Primary],
    optionalComponents: {
        cases: Cases,
        free: Free,
        inventory: Inventory,
        primary: Primary
    }
})
app.render()
// app.emitter.subscribe('work', () => app.render())