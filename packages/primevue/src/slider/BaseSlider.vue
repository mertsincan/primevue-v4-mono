<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import SliderStyle from 'primevuelab/slider/style';

export default {
    name: 'BaseSlider',
    extends: BaseComponent,
    props: {
        modelValue: [Number, Array],
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        orientation: {
            type: String,
            default: 'horizontal'
        },
        step: {
            type: Number,
            default: null
        },
        range: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: Number,
            default: 0
        },
        ariaLabelledby: {
            type: String,
            default: null
        },
        ariaLabel: {
            type: String,
            default: null
        }
    },
    style: SliderStyle,
    provide() {
        return {
            $pcSlider: this,
            $parentInstance: this
        };
    }
};
</script>
