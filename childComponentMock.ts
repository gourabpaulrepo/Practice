import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
    template: "<span>Mock child component</span>",
})
export class ChildComponentMock extends Vue {
}
