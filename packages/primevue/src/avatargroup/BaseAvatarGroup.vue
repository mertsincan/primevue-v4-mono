<script>
import BaseComponent from '@primevue-lab/core/basecomponent';
import AvatarGroupStyle from 'primevue-lab/avatargroup/style';

export default {
    name: 'BaseAvatarGroup',
    extends: BaseComponent,
    style: AvatarGroupStyle,
    provide() {
        return {
            $pcAvatarGroup: this,
            $parentInstance: this
        };
    }
};
</script>
