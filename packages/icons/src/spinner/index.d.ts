import { GlobalComponentConstructor } from '../../../primevuelab/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class SpinnerIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        SpinnerIcon: GlobalComponentConstructor<SpinnerIcon>;
    }
}

export default SpinnerIcon;
