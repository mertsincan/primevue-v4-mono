import { GlobalComponentConstructor } from '../../../primevuelab/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class MinusIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        MinusIcon: GlobalComponentConstructor<MinusIcon>;
    }
}

export default MinusIcon;
