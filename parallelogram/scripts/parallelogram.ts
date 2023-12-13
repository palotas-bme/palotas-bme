/**
 *  Calculates the area of a parallelogram by its base and height.
 *
 * @param base Base of the parallelogram.
 * @param height Height of the parallelogram.
 *
 * @returns Area of the paralellogram.
 */
function parallalelogramAreaByBase(base: number, height: number): number {
    if (typeof base !== 'number' || isNaN(base) || base <= 0) {
        throw new Error('Invalid base');
    }
    if (typeof height !== 'number' || isNaN(height) || base <= 0) {
        throw new Error('Invalid height');
    }
    return base * height;
}

/**
 * Calculates the area of a parallelogram by its sides and the angle.
 *
 * @param a One side of the parallelogram.
 * @param b Other side of the parallelogram.
 * @param alpha Angle of the two sides in degree.
 *
 * @returns Area of the paralellogram.
 */
function parallalelogramAreaBySides(a: number, b: number, alpha: number): number {
    if (typeof a !== 'number' || isNaN(a) || a <= 0) {
        throw new Error('Invalid side A');
    }
    if (typeof b !== 'number' || isNaN(b) || b <= 0) {
        throw new Error('Invalid side B');
    }
    if (typeof alpha !== 'number' || isNaN(alpha) || alpha <= 0 || alpha >= 180) {
        throw new Error('Invalid angle');
    }

    return a * b * Math.sin(alpha * (Math.PI / 180));
}

