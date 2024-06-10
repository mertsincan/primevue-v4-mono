<template>
    <DocSectionText v-bind="$attrs">
        <p>
            ZIndexes are managed automatically to make sure layering of overlay components work seamlessly when combining multiple components. Still there may be cases where you'd like to configure the configure default values such as a custom layout
            where header section is fixed. In a case like this, dropdown needs to be displayed below the application header but a modal dialog should be displayed above. primevuelab configuration offers the <i>zIndex</i> property to customize the
            default values for components categories. Default values are described below and can be customized when setting up primevuelab.
        </p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import {createApp} from "vue";
import primevuelab from "primevuelab/config";
const app = createApp(App);

app.use(primevuelab, {
    zIndex: {
        modal: 1100,        //dialog, drawer
        overlay: 1000,      //select, popover
        menu: 1000,         //overlay menus
        tooltip: 1100       //tooltip
    }
});
`
            }
        };
    }
};
</script>
