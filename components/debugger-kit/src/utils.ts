/**
 * A simple function that checks if a variable is undefined or null;
 * Like Objects.requireNonNull in java.
 * @param object the object or variable to check.
 * @param message the Error message (if thrown).
 */
export function requireNonNull(object: any, message?: string): any {
    if (object === undefined || object === null) {
        throw new Error(message);
    }
    return object;
}