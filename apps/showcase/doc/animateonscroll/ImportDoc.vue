<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import AnimateOnScroll from 'primevuelab/animateonscroll';

app.directive('animateonscroll', AnimateOnScroll);
`
            }
        };
    }
};
</script>
