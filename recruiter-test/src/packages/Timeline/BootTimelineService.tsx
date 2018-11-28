// This is where all the business logic is done.

class BootTimelineService {
    getBtBarColor(color: string) {
        let barColor = '';
        switch (color) {
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
                console.log(color);
                throw TypeError('You must choose between these colors: blue, green, yellow, red. It must be a characters chain.');
        }

        return barColor;
    }
}

export default BootTimelineService;
