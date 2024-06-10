<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import AvatarGroupStyle from 'primevuelab/avatargroup/style';

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
