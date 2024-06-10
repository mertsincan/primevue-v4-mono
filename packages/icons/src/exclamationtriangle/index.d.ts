import { GlobalComponentConstructor } from '../../../primevuelab/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class ExclamationTriangleIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ExclamationTriangleIcon: GlobalComponentConstructor<ExclamationTriangleIcon>;
    }
}

export default ExclamationTriangleIcon;
