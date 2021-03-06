import type { BscType } from './BscType';
import { DynamicType } from './DynamicType';

export class StringType implements BscType {
    public isAssignableTo(targetType: BscType) {
        return (
            targetType instanceof StringType ||
            targetType instanceof DynamicType
        );
    }

    public isConvertibleTo(targetType: BscType) {
        return this.isAssignableTo(targetType);
    }

    public toString() {
        return 'string';
    }
}
