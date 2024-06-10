import { GlobalComponentConstructor } from '../../../primevue-lab/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class SortAmountDownIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        SortAmountDownIcon: GlobalComponentConstructor<SortAmountDownIcon>;
    }
}

export default SortAmountDownIcon;
