import { GlobalComponentConstructor } from '../../../primevuelab/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class AngleDoubleLeftIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        AngleDoubleLeftIcon: GlobalComponentConstructor<AngleDoubleLeftIcon>;
    }
}

export default AngleDoubleLeftIcon;
