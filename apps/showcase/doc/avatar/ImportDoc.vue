<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import Avatar from 'primevue-lab/avatar';
import AvatarGroup from 'primevue-lab/avatargroup';   //Optional for grouping
`
            }
        };
    }
};
</script>
