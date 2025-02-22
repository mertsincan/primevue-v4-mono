import { GlobalComponentConstructor } from '../../../primevuelab/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class ThLargeIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ThLargeIcon: GlobalComponentConstructor<ThLargeIcon>;
    }
}

export default ThLargeIcon;
