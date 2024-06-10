<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import TimelineStyle from 'primevuelab/timeline/style';

export default {
    name: 'BaseTimeline',
    extends: BaseComponent,
    props: {
        value: null,
        align: {
            mode: String,
            default: 'left'
        },
        layout: {
            mode: String,
            default: 'vertical'
        },
        dataKey: null
    },
    style: TimelineStyle,
    provide() {
        return {
            $pcTimeline: this,
            $parentInstance: this
        };
    }
};
</script>
