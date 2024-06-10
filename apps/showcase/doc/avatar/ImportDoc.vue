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
import Avatar from 'primevuelab/avatar';
import AvatarGroup from 'primevuelab/avatargroup';   //Optional for grouping
`
            }
        };
    }
};
</script>
