/**
 * Custom types
 * /!\ Custom validators have to return the value if the test passes
 */
const Types = {
    Income: {
        id: {
            type: Number,
        },
        name: {
            type: String,
        },
        amount: {
            type: Number
        },
        date: {
            required: false,
            type: (value) => {
                if (value instanceof Date) return value;
                if (typeof value !== "string") return false;
                if (Date.parse(value)) {
                    return value;
                } else {
                    return false;
                }
            }
        }
    },
    Bill: {
        id: {
            type: Number,
        },
        name: {
            type: String,
        },
        amount: {
            type: Number
        },
        date: {
            required: false,
            type: (value) => {
                if (value instanceof Date) return value;
                if (typeof value !== "string") return false;
                if (Date.parse(value)) {
                    return value;
                } else {
                    return false;
                }
            }
        }
    }
};

/**
 * Type utils that can check type validity
 * @param type
 * @return {{getType(): Object, isValid(*=): boolean}}
 * @private
 */
export function _t(type) {
    const hasKey = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
    if (typeof type !== "string") throw new Error('Arg needs to be a String.');
    if (!hasKey(Types, type)) throw new Error('Unknown type.');
    return {
        /**
         *
         * @param value
         * @return {boolean}
         */
        isValid(value) {
            if (typeof value === 'object') {
                const typeKeys = Object.keys(Types[type]);
                if (!typeKeys.every((typeKey) => hasKey(value, typeKey))) return false;
                const objKeys = Object.keys(value);
                return objKeys.every((objKey) => {
                    const typeObject = Types[type][objKey];
                    if (!typeObject.required) return true;
                    const valueType = typeObject.type;
                    return valueType(value[objKey]) === value[objKey]
                })
            }
        },
        /**
         * Get type object
         * @return {Object}
         */
        getType() {
            return Types[type];
        }
    }
}