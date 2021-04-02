import {Emitter} from "../../core/Emitter";

export class App {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.components = options.components || []
        this.optionalComponents = options.optionalComponents || {}
        this.componentsInstance = []
        this.emitter = new Emitter()
        this.unsubs = []
    }

    getRoot() {
        this.componentsInstance = []
        const $root = document.createElement('div')
        $root.classList.add('candy-cases')

        const componentOptions = {
            emitter: this.emitter
        }

        this.components.forEach(Component => {
            const $el = document.createElement(Component.rootTag || 'div')
            $el.classList.add(Component.className)
            const component = new Component($el, componentOptions)
            this.componentsInstance.push(component)
            $el.innerHTML = component.toHTML()
            $root.append($el)
        })

        return $root
    }


    render() {
        this.$el.innerHTML = ''
        this.unsubs.forEach(unsub => unsub())
        this.unsubs.push(this.emitter.subscribe('renderNewSection', newSection => {
            this.componentsInstance.forEach(instanceComponent => instanceComponent.destroy())
            const component = this.optionalComponents[newSection]
            this.components.pop()
            this.components.push(component)
            this.render(component)
        }))
        this.$el.append(this.getRoot())


        this.componentsInstance.forEach(component => component.init())
    }
}
