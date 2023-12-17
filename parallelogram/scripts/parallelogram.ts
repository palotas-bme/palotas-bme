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

function calculateByHeight() {
    const b = Number((document.getElementById('base') as HTMLInputElement).value);
    const h = Number((document.getElementById('height')  as HTMLInputElement).value);
    try {
        (document.getElementById('area1') as HTMLInputElement).value = parallalelogramAreaByBase(b, h).toString();

        var canvas = document.getElementById('by-base') as HTMLCanvasElement;
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const tilt = 20;
        const offset = 70;

        ctx.beginPath();
        ctx.moveTo(offset, offset);
        ctx.lineTo(b + offset, offset);
        ctx.lineTo(b + tilt + offset, h + offset);
        ctx.lineTo(tilt + offset, h + offset);
        ctx.closePath();
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.stroke();
    } catch (error) {
        (document.getElementById('area1') as HTMLInputElement).value = error;
    }
}

function calculateByAngle() {
    const a = Number((document.getElementById('side-a') as HTMLInputElement).value);
    const b = Number((document.getElementById('side-b') as HTMLInputElement).value);
    const alpha = Number((document.getElementById('angle') as HTMLInputElement).value);
    try {
        (document.getElementById('area2') as HTMLInputElement).value = parallalelogramAreaBySides(a, b, alpha).toString();

        var canvas = document.getElementById('by-angle') as HTMLCanvasElement;
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const tilt = b * Math.cos(alpha * (Math.PI / 180));
        const h = b * Math.sin(alpha * (Math.PI / 180));

        const offset = 70;

        ctx.beginPath();
        ctx.moveTo(offset, offset);
        ctx.lineTo(a + offset, offset);
        ctx.lineTo(a + offset + tilt, h + offset);
        ctx.lineTo(tilt + offset, h + offset);
        ctx.closePath();
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.stroke();
    } catch (error) {
        (document.getElementById('area2') as HTMLInputElement).value = error;
    }
}

document.body.onload = () => {
    calculateByHeight();
    calculateByAngle();
};
