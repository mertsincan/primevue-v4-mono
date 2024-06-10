import { GlobalComponentConstructor } from '../../../primevuelab/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class RefreshIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        RefreshIcon: GlobalComponentConstructor<RefreshIcon>;
    }
}

export default RefreshIcon;
