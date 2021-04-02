import {AppComponent} from "../../core/AppComponent";

export class Free extends AppComponent {

    static className = 'free'
    static rootTag = 'section'

    constructor($root, options) {
        super($root, {
            name: 'Free',
            ...options
        });
    }

    prepare() {

    }

    toHTML() {
        return `
            <div class="container">
                <div class="free__content">
                    <div class="free__title">Open a free case every 2 minute</div>
                    <div class="free__case">
                        <img src="src/assets/cases/free.png" alt="Case" class="free__case-image">
                    </div>
                    <div class="free__button open">
                        <span class="free__button--text">Open</span>
                    </div>
        
                </div>
            </div>
        `
    }
}