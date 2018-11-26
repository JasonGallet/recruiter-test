// This is where all the business logic is done.

export function getBarColor(color: string) {
    let barColor = '';
    switch(color) {
        case 'blue':
            barColor = 'bg-info';
            break;
        case 'green':
            barColor = 'bg-success';
            break;
        case 'yellow':
            barColor = 'bg-warning';
            break;
        case 'red':
            barColor = 'bg-danger';
            break;
        default:
            throw TypeError('You must choose between these colors: blue, green, yellow, red. It must be a characters chain.');
    }

    return barColor;
}
