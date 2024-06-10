import { GlobalComponentConstructor } from '../../../primevue-lab/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class UndoIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        UndoIcon: GlobalComponentConstructor<UndoIcon>;
    }
}

export default UndoIcon;
